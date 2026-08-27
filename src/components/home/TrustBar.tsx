import { site } from "@/lib/site";

// Trust indicators only — no customer counts or ratings until there are real, verifiable numbers.
const indicators = [
  "ID-verified field representatives",
  "Geo-tagged visit evidence",
  "Photo & video reports",
  "NRI friendly · calls in your time zone",
  "WhatsApp updates after every visit",
  "Transparent service tracking",
];

export function TrustBar() {
  return (
    <section className="border-y border-rule bg-paper-2" aria-labelledby="included-heading">
      <div className="container py-12">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-stamp-soft px-3 py-1 text-sm font-medium text-stamp">
          <span className="h-1.5 w-1.5 rounded-full bg-stamp" /> Live in {site.coverage.length} states: {site.coverage.join(", ")}
        </span>
        <h2 id="included-heading" className="mt-4 max-w-3xl text-2xl">
          All the tools you need to protect land from abroad — and a few more we think you&apos;ll use.
        </h2>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {indicators.map((t) => (
            <li key={t} className="flex gap-2 text-sm text-ink-2">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-sm bg-stamp" aria-hidden />
              <span className="text-ink">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
