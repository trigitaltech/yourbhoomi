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
    <section className="border-y border-rule bg-paper-2" aria-label="Why families trust us">
      <div className="container grid gap-6 py-8 lg:grid-cols-[auto_1fr] lg:items-center">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-seal-soft px-3 py-1 text-sm font-medium text-seal">
          <span className="h-1.5 w-1.5 rounded-full bg-seal" /> Live in {site.coverage.length} states: {site.coverage.join(", ")}
        </span>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-ink sm:grid-cols-3">
          {indicators.map((t) => (
            <li key={t} className="flex gap-2">
              <span className="text-seal" aria-hidden>
                ✓
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
