"use client";

import Link from "next/link";
import { useState } from "react";
import { DISCLAIMER, MiniLeadForm, QuestionField } from "@/components/CheckShared";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { track } from "@/lib/analytics";
import { scoreReadiness, transferQuestions, type ReadinessResult } from "@/lib/transfer-check";

function Column({ title, items, tone }: { title: string; items: string[]; tone: "stamp" | "seal" }) {
  const color = tone === "stamp" ? "text-stamp" : "text-seal";
  return (
    <div>
      <h3 className={`font-medium ${color}`}>{title}</h3>
      {items.length ? (
        <ul className="mt-2 space-y-1 text-sm text-ink">
          {items.map((x) => (
            <li key={x} className="flex gap-2">
              <span className={color}>{tone === "stamp" ? "✓" : "•"}</span>
              {x}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm text-ink-2">Nothing here.</p>
      )}
    </div>
  );
}

export function TransferCheck() {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string> | null>(null);
  const [result, setResult] = useState<ReadinessResult | null>(null);

  function handleChange() {
    if (started) return;
    setStarted(true);
    track("transfer_check_start");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const a = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const r = scoreReadiness(a);
    setAnswers(a);
    setResult(r);
    track("transfer_check_complete", { percent: r.percent });
  }

  if (result && answers) {
    const { percent, available, needsAttention, nextSteps } = result;
    const where = `${answers.type} transfer in ${answers.district}, ${answers.state}`;
    const summary = `Transfer Readiness: ${percent}% for my ${where}. Needs attention: ${needsAttention.join("; ") || "nothing"}.`;
    return (
      <div className="grid gap-6">
        <div className="card p-6">
          <p className="eyebrow">Your Transfer Readiness</p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <span className="text-3xl font-semibold text-stamp">{percent}%</span>
            <span className="text-sm text-ink-2">{where}</span>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Column title="Available" items={available} tone="stamp" />
            <Column title="Needs attention" items={needsAttention} tone="seal" />
          </div>
          <h3 className="mt-6 font-medium text-ink">Next steps</h3>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-ink">
            {nextSteps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-ink-2">{DISCLAIMER}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppButton
              message={`Hi YourBhoomi, my ${summary} I'd like to discuss the transfer.`}
              source="transfer-check-result"
            >
              Speak With a Transfer Coordinator
            </WhatsAppButton>
            <WhatsAppButton message={`${summary} Next steps: ${nextSteps.join(" ")}`} source="transfer-check-share">
              Send Checklist on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
        <div className="card p-6">
          <MiniLeadForm
            kind="transfer-check"
            heading="Get the full transfer document checklist by WhatsApp"
            button="Send me the checklist"
            extra={{
              state: answers.state,
              district: answers.district,
              type: answers.type,
              percent: String(percent),
              needsAttention: needsAttention.join("; "),
            }}
          />
        </div>
        <p className="text-sm text-ink-2">
          Read about our{" "}
          <Link href="/land-transfer" className="text-stamp underline">
            Land Transfer service
          </Link>{" "}
          or{" "}
          <button type="button" className="text-stamp underline" onClick={() => setResult(null)}>
            change your answers
          </button>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="card grid gap-5 p-6" onSubmit={handleSubmit} onChange={handleChange}>
      <fieldset className="grid gap-4 sm:grid-cols-2">
        <legend className="mb-3 font-medium text-ink">About the transfer</legend>
        {transferQuestions.slice(0, 4).map((q) => (
          <QuestionField key={q.id} q={q} />
        ))}
      </fieldset>
      <fieldset className="grid gap-4 sm:grid-cols-2">
        <legend className="mb-3 font-medium text-ink">Documents and parties</legend>
        {transferQuestions.slice(4).map((q) => (
          <QuestionField key={q.id} q={q} />
        ))}
      </fieldset>
      <button type="submit" className="btn btn-primary justify-self-start">
        Check my readiness
      </button>
    </form>
  );
}
