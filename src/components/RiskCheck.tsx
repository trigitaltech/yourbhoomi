"use client";

import Link from "next/link";
import { useState } from "react";
import { DISCLAIMER, MiniLeadForm, QuestionField } from "@/components/CheckShared";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { track } from "@/lib/analytics";
import { riskQuestions, scoreRisk, type RiskResult } from "@/lib/risk-check";

export function RiskCheck() {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string> | null>(null);
  const [result, setResult] = useState<RiskResult | null>(null);

  function handleChange() {
    if (started) return;
    setStarted(true);
    track("land_risk_check_start");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const a = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const r = scoreRisk(a);
    setAnswers(a);
    setResult(r);
    track("land_risk_check_complete", { score: r.score, status: r.status });
  }

  if (result && answers) {
    const { score, status, recommendations } = result;
    const where = `${answers.type} in ${answers.district}, ${answers.state}`;
    const summary = `Land Security Score: ${score}/100 (${status}) for my ${where}. Recommendations: ${recommendations.join("; ")}.`;
    const pill = score >= 60 ? "bg-stamp-soft text-stamp" : "bg-seal-soft text-seal";
    return (
      <div className="grid gap-6">
        <div className="card p-6">
          <p className="eyebrow">Your Land Security Score</p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <span className="text-3xl font-semibold text-stamp">{score} / 100</span>
            <span className={`rounded-full px-3 py-1 text-sm font-medium ${pill}`}>{status}</span>
          </div>
          <p className="mt-2 text-sm text-ink-2">{where}</p>
          <h3 className="mt-6 font-medium text-ink">Recommendations</h3>
          <ul className="mt-2 space-y-2 text-ink">
            {recommendations.map((r) => (
              <li key={r} className="flex gap-2">
                <span className="text-seal">✓</span>
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-ink-2">{DISCLAIMER}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppButton
              message={`Hi YourBhoomi, my ${summary} I'd like to book a physical Land Security Check.`}
              source="risk-check-result"
            >
              Book a Physical Land Security Check
            </WhatsAppButton>
            <WhatsAppButton message={summary} source="risk-check-share">
              Send Result on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
        <div className="card p-6">
          <MiniLeadForm
            kind="risk-check"
            heading="Get the full land security checklist by WhatsApp"
            button="Send me the checklist"
            extra={{
              state: answers.state,
              district: answers.district,
              type: answers.type,
              score: String(score),
              status,
              recommendations: recommendations.join("; "),
            }}
          />
        </div>
        <p className="text-sm text-ink-2">
          Read about our{" "}
          <Link href="/land-security" className="text-stamp underline">
            Land Security service
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
        <legend className="mb-3 font-medium text-ink">About the land</legend>
        {riskQuestions.slice(0, 3).map((q) => (
          <QuestionField key={q.id} q={q} />
        ))}
      </fieldset>
      <fieldset className="grid gap-4 sm:grid-cols-2">
        <legend className="mb-3 font-medium text-ink">Condition and records</legend>
        {riskQuestions.slice(3).map((q) => (
          <QuestionField key={q.id} q={q} />
        ))}
      </fieldset>
      <button type="submit" className="btn btn-primary justify-self-start">
        Get my Land Security Score
      </button>
    </form>
  );
}
