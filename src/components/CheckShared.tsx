"use client";

import { useState } from "react";
import { LegalConsent } from "@/components/LegalConsent";
import type { Question } from "@/lib/risk-check";
import { submitLead } from "@/lib/submit-lead";

/** One labelled select/text field driven by a Question definition. */
export function QuestionField({ q }: { q: Question }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium text-ink">{q.label}</span>
      {q.options ? (
        <select required name={q.id} className="field" defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {q.options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input required name={q.id} className="field" placeholder={q.placeholder} maxLength={60} />
      )}
    </label>
  );
}

/** Name + WhatsApp mini form that posts `extra` alongside the contact details. */
export function MiniLeadForm({
  kind,
  extra,
  heading,
  button,
}: {
  kind: string;
  extra: Record<string, string>;
  heading: string;
  button: string;
}) {
  const [status, setStatus] = useState<"idle" | "busy" | "sent">("idle");
  const [error, setError] = useState("");

  if (status === "sent") {
    return (
      <p className="rounded-lg bg-stamp-soft p-4 text-sm text-stamp" role="status">
        Thank you. We will send it on WhatsApp within one business day.
      </p>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("busy");
    setError("");
    try {
      const fd = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
      await submitLead(kind, { ...extra, ...fd });
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("idle");
    }
  }

  return (
    <form className="grid gap-3" onSubmit={handleSubmit}>
      <p className="font-medium text-ink">{heading}</p>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid gap-3 sm:grid-cols-2">
        <input required name="name" placeholder="Full name" className="field" autoComplete="name" />
        <input
          required
          type="tel"
          name="phone"
          placeholder="WhatsApp number (with country code)"
          className="field"
          autoComplete="tel"
        />
      </div>
      <LegalConsent />
      <button type="submit" className="btn btn-outline" disabled={status === "busy"}>
        {status === "busy" ? "Sending…" : button}
      </button>
      {error && (
        <p className="text-sm text-seal" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}

export const DISCLAIMER =
  "This is an informational indicator based on the answers provided. It is not a legal title certification or legal opinion.";
