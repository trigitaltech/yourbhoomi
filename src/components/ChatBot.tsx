"use client";

import { useEffect, useRef, useState } from "react";
import { LegalConsent } from "@/components/LegalConsent";

const suggestedFaqs = [
  { label: "What does it cost?", q: "What does it cost?" },
  { label: "Who visits my land?", q: "Who exactly visits my property?" },
  { label: "Do I need a POA?", q: "Do I need a Power of Attorney?" },
  { label: "Which areas?", q: "Which areas do you cover?" },
];

type Msg = { role: "bot" | "user"; text: string; href?: string; title?: string };

const HELLO: Msg = {
  role: "bot",
  text: "Ask a question about Your Bhoomi — cost, visits, POA, or where we work. If I can’t match an FAQ, I’ll take your name and number for an advisor.",
};

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([HELLO]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [askLead, setAskLead] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [err, setErr] = useState("");
  const lastQ = useRef("");
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
  }, [messages, askLead, open]);

  async function ask(text: string) {
    const q = text.trim();
    if (!q || busy) return;
    lastQ.current = q;
    setInput("");
    setErr("");
    setMessages((m) => [...m, { role: "user", text: q }]);
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        { role: "bot", text: data.reply ?? data.error ?? "Something went wrong.", href: data.href, title: data.title },
      ]);
      setAskLead(Boolean(data.askLead));
    } catch {
      setMessages((m) => [...m, { role: "bot", text: "Network error. Please try again." }]);
    } finally {
      setBusy(false);
    }
  }

  async function sendLead(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setErr("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "lead", name, phone, question: lastQ.current }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErr(data.error ?? "Could not send.");
        return;
      }
      setAskLead(false);
      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text: `Thanks, ${name.trim()}. We’ve sent your details to our advisor on WhatsApp. They’ll reach you on ${phone.trim()}.`,
        },
      ]);
      setName("");
      setPhone("");
    } catch {
      setErr("Network error. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="faq-chat"
        onClick={() => setOpen((v) => !v)}
        className="chat-fab fixed right-20 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-stamp text-white shadow-card hover:bg-stamp-hover sm:right-24 sm:bottom-6"
        aria-label={open ? "Close FAQ chat" : "Open FAQ chat"}
      >
        {open ? (
          <span className="text-2xl leading-none" aria-hidden>
            ×
          </span>
        ) : (
          <ChatIcon />
        )}
      </button>

      {open && (
        <div
          id="faq-chat"
          role="dialog"
          aria-label="Your Bhoomi FAQ chat"
          className="card fixed right-4 bottom-24 z-50 flex h-[min(32rem,70vh)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden shadow-card sm:right-6 sm:bottom-28"
        >
          <div className="bg-stamp px-4 py-3 text-sm font-semibold text-white">Ask Your Bhoomi</div>
          <div ref={scroller} className="flex-1 space-y-3 overflow-y-auto p-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[90%] rounded-lg px-3 py-2 text-sm ${
                  m.role === "user" ? "ml-auto bg-stamp text-white" : "bg-stamp-soft text-ink"
                }`}
              >
                {m.title && <p className="mb-1 text-xs font-semibold opacity-80">{m.title}</p>}
                <p>{m.text}</p>
                {m.href && (
                  <a href={m.href} className="mt-1 inline-block text-xs font-semibold underline">
                    Open this topic
                  </a>
                )}
                {m.title && i === messages.length - 1 && !askLead && (
                  <button
                    type="button"
                    className="mt-2 block text-xs font-semibold underline"
                    onClick={() => {
                      setAskLead(true);
                      setMessages((prev) => [
                        ...prev,
                        {
                          role: "bot",
                          text: "No problem. Share your name and WhatsApp number and an advisor will reach you.",
                        },
                      ]);
                    }}
                  >
                    Not this — talk to an advisor
                  </button>
                )}
              </div>
            ))}
            {!askLead && messages.length < 3 && (
              <div className="flex flex-wrap gap-1.5">
                {suggestedFaqs.map((s) => (
                  <button
                    key={s.q}
                    type="button"
                    className="rounded-full border border-rule bg-paper px-2.5 py-1 text-xs text-stamp hover:bg-stamp-soft"
                    onClick={() => ask(s.q)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
            {askLead && (
              <form className="grid gap-2 rounded-lg border border-rule bg-paper p-3" onSubmit={sendLead}>
                <p className="text-xs text-ink-2">Name and WhatsApp number for our advisor.</p>
                <input
                  required
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="field"
                  autoComplete="name"
                />
                <input
                  required
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="WhatsApp number"
                  className="field"
                  autoComplete="tel"
                />
                {err && <p className="text-xs text-seal">{err}</p>}
                <LegalConsent />
                <button type="submit" className="btn btn-primary" disabled={busy}>
                  Send to advisor
                </button>
              </form>
            )}
          </div>
          {!askLead && (
            <form
              className="flex gap-2 border-t border-rule p-2"
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a question"
                className="field"
                aria-label="Your question"
              />
              <button type="submit" className="btn btn-primary shrink-0 px-4" disabled={busy}>
                Send
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
      <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}
