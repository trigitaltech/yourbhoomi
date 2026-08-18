import Link from "next/link";
import {
  CHECK_LABEL,
  OVERALL_LABEL,
  REPORT_DISCLAIMER,
  sampleReport,
  type ChecklistStatus,
  type OverallStatus,
} from "@/lib/sample-report";

const overallPill: Record<OverallStatus, string> = {
  green: "bg-stamp-soft text-stamp",
  amber: "border border-rule bg-paper-2 text-ink",
  red: "bg-seal-soft text-seal",
};

const checkPill: Record<ChecklistStatus, string> = {
  ok: "bg-stamp-soft text-stamp",
  attention: "border border-rule bg-paper-2 text-ink",
  issue: "bg-seal-soft text-seal",
};

const COMPACT_ROWS = 6;

function Pill({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>{children}</span>
  );
}

// Document-style rendering of the anonymized sample report. Server component.
export function InspectionReportCard({ compact = false }: { compact?: boolean }) {
  const r = sampleReport;
  const rows = compact ? r.checklist.slice(0, COMPACT_ROWS) : r.checklist;
  const meta: [string, string][] = [
    ["Property", r.header.propertyName],
    ["Location", r.header.location],
    ["Inspection", `${r.header.inspectionDate}, ${r.header.inspectionTime}`],
    ["Field representative", r.header.fieldRepresentative],
    ["Report ID", r.header.reportId],
    ["GPS verification", r.header.gpsVerification],
  ];

  return (
    <article className="card overflow-hidden" aria-label="Sample land security report">
      <header className="border-b border-rule bg-paper-2 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="eyebrow">{r.header.title}</p>
            <p className="mt-1 text-sm text-ink-2">
              {r.header.plan} · {r.header.district}, {r.header.state}
            </p>
          </div>
          <Pill className="bg-seal-soft text-seal">SAMPLE</Pill>
        </div>
        <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
          {meta.map(([k, v]) => (
            <div key={k} className="flex gap-2">
              <dt className="text-ink-2">{k}:</dt>
              <dd className="text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-ink">Overall status</span>
          <Pill className={overallPill[r.overall]}>{OVERALL_LABEL[r.overall]}</Pill>
        </div>
        <p className="mt-3 text-sm text-ink-2">{r.overallSummary}</p>

        <h3 className="mt-6 text-base font-semibold text-ink">Inspection checklist</h3>
        <ul className="mt-3 divide-y divide-rule border-y border-rule">
          {rows.map((c) => (
            <li key={c.item} className="flex flex-wrap items-start gap-x-4 gap-y-1 py-3 text-sm">
              <span className="w-full font-medium text-ink sm:w-52 sm:shrink-0">{c.item}</span>
              <Pill className={checkPill[c.status]}>{CHECK_LABEL[c.status]}</Pill>
              {!compact && <span className="min-w-0 flex-1 text-ink-2">{c.note}</span>}
            </li>
          ))}
        </ul>
        {compact && (
          <p className="mt-2 text-xs text-ink-2">
            + {r.checklist.length - COMPACT_ROWS} more items in the full report.
          </p>
        )}

        <h3 className="mt-6 text-base font-semibold text-ink">Evidence</h3>
        <p className="mt-2 text-sm text-ink">
          {r.evidence.photos} geo-tagged photos · {r.evidence.videos} video walkthrough
        </p>
        {!compact && (
          <ul className="mt-2 space-y-1 text-sm text-ink-2">
            <li>Photos: {r.evidence.photosNote}.</li>
            <li>Video: {r.evidence.videosNote}.</li>
            <li>{r.evidence.timestamps}.</li>
            <li>{r.evidence.gps}.</li>
            <li>{r.evidence.beforeAfter}</li>
          </ul>
        )}

        {compact ? (
          <p className="mt-6">
            <Link href="/sample-report" className="font-medium text-stamp hover:underline">
              View full sample report →
            </Link>
          </p>
        ) : (
          <FullSections />
        )}
      </div>
    </article>
  );
}

function FullSections() {
  const { recommendations: rec, sharing } = sampleReport;
  return (
    <>
      <h3 className="mt-6 text-base font-semibold text-ink">Recommendations</h3>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-ink">Immediate</p>
          <ul className="mt-2 space-y-2 text-sm text-ink-2">
            {rec.immediate.map((x) => (
              <li key={x} className="flex gap-2">
                <span className="text-seal">✓</span>
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-ink">Optional</p>
          <ul className="mt-2 space-y-2 text-sm text-ink-2">
            {rec.optional.map((x) => (
              <li key={x} className="flex gap-2">
                <span className="text-seal">✓</span>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        <div className="flex gap-2">
          <dt className="text-ink-2">Follow-up:</dt>
          <dd className="text-ink">{rec.followUpDate}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-ink-2">Next inspection:</dt>
          <dd className="text-ink">{rec.nextInspection}</dd>
        </div>
      </dl>

      <div className="mt-6 rounded-lg border border-rule bg-paper-2 p-4">
        <p className="text-sm font-medium text-ink">Share securely with family</p>
        <div className="mt-2 flex flex-wrap gap-2" aria-hidden>
          {sharing.channels.map((c) => (
            <span key={c} className="rounded-md border border-rule bg-paper px-3 py-1 text-sm text-ink-2">
              {c}
            </span>
          ))}
        </div>
        <p className="mt-2 text-xs text-ink-2">{sharing.note} (Sharing buttons are shown for illustration in this sample.)</p>
      </div>

      <p className="mt-6 border-t border-rule pt-4 text-xs text-ink-2">{REPORT_DISCLAIMER}</p>
    </>
  );
}
