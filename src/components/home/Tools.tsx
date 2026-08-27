import Link from "next/link";
import { CoverageChecker } from "@/components/CoverageChecker";
import { InspectionReportCard } from "@/components/InspectionReportCard";

export function SampleReportSection() {
  return (
    <section className="border-y border-rule bg-paper-2" aria-labelledby="report-heading">
      <div className="container section grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow">Bhoomi Security Report</p>
          <h2 id="report-heading" className="mt-3 text-2xl">
            See what you receive after every inspection
          </h2>
          <p className="mt-4 text-ink-2">
            Every visit ends in the same standardized report: overall status, a twelve-point checklist,
            geo-tagged photos and a video walkthrough, and what to do next. Shared privately with you and
            the family members you choose — never indexed publicly.
          </p>
          <Link href="/sample-report" className="btn btn-outline mt-6">
            View Sample Report
          </Link>
        </div>
        <InspectionReportCard compact />
      </div>
    </section>
  );
}

const checks = ["Last physical inspection", "Boundary and fencing", "Mutation and EC status", "Local monitoring"];

export function RiskCheckTeaser() {
  return (
    <section className="container section" aria-labelledby="risk-heading">
      <div className="card grid gap-8 border-stamp/30 p-8 md:grid-cols-[1.2fr_1fr] md:p-10">
        <div>
          <p className="eyebrow">Free Land Risk Check</p>
          <h2 id="risk-heading" className="mt-3 text-2xl">
            How secure is your land?
          </h2>
          <p className="mt-4 text-ink-2">
            Answer twelve quick questions and receive a Land Security Score with three to five plain
            recommendations. Two minutes, no sign-up.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/land-risk-check" className="btn btn-primary">
              Start the Land Risk Check
            </Link>
            <Link href="/transfer-readiness" className="btn btn-outline">
              Transfer Readiness Check
            </Link>
          </div>
        </div>
        <ul className="grid gap-2 self-center text-sm text-ink">
          {checks.map((c) => (
            <li key={c} className="flex gap-2 rounded-lg bg-paper-2 px-3 py-2">
              <span className="text-seal" aria-hidden>
                ✓
              </span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CoverageSection() {
  return (
    <section id="coverage" className="border-y border-rule bg-paper-2" aria-labelledby="coverage-heading">
      <div className="container section grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Coverage</p>
          <h2 id="coverage-heading" className="mt-3 text-2xl">
            Check if we cover your district
          </h2>
          <p className="mt-4 text-ink-2">
            Search your state and district. If we are there, book an inspection. If not yet, leave your
            details — we expand belt by belt, by demand.
          </p>
          <Link href="/coverage" className="mt-4 inline-block text-sm font-medium text-stamp">
            See every district we serve →
          </Link>
        </div>
        <div className="card p-6">
          <CoverageChecker compact />
        </div>
      </div>
    </section>
  );
}

const plans = [
  { name: "One-Time Security Check", blurb: "One visit, full report. Good for a first look or before a transaction." },
  { name: "Bhoomi Watch", blurb: "Quarterly visits, encroachment alerts, WhatsApp updates." },
  { name: "Bhoomi Protect+", blurb: "More frequent visits, document reminders, priority help, annual summary." },
];

export function PricingTeaser() {
  return (
    <section id="pricing" className="container section" aria-labelledby="pricing-heading">
      <p className="eyebrow">Pricing</p>
      <h2 id="pricing-heading" className="mt-3 text-2xl">
        Simple plans for land security. Transfers quoted per case.
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="card p-5">
            <h3 className="font-semibold text-stamp">{p.name}</h3>
            <p className="mt-2 text-sm text-ink-2">{p.blurb}</p>
          </div>
        ))}
      </div>
      <Link href="/pricing" className="btn btn-outline mt-6">
        See indicative pricing
      </Link>
    </section>
  );
}
