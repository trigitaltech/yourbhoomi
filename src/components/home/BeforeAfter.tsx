import Link from "next/link";

const without = [
  "Depend on relatives",
  "Random WhatsApp photographs",
  "No consistent inspection history",
  "No clear status report",
  "Chase multiple local contacts",
  "Follow up repeatedly on paperwork",
  "Unclear transfer progress",
];

const withUs = [
  "Verified field representative",
  "Scheduled inspections",
  "Geo-tagged evidence",
  "Standardized reports",
  "Single point of coordination",
  "WhatsApp status updates",
  "Transfer workflow tracking",
];

export function BeforeAfter() {
  return (
    <section className="border-y border-rule bg-paper-2" aria-labelledby="ba-heading">
      <div className="container section">
        <p className="eyebrow">Before and after</p>
        <h2 id="ba-heading" className="mt-3 text-2xl">
          What changes when someone is actually there
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-ink">Without YourBhoomi</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-2">
              {without.map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden>—</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="card border-stamp bg-stamp-soft/40 p-6">
            <h3 className="text-lg font-semibold text-stamp">With YourBhoomi</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              {withUs.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-seal" aria-hidden>
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-ink-2">
          Want the full picture against portals and relatives?{" "}
          <Link href="/compare" className="text-stamp underline">
            See the comparison
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
