const stats = [
  { n: "100%", label: "ID-verified local partners" },
  { n: "4", label: "states live: TS, AP, TN, KA" },
  { n: "< 24 h", label: "response on WhatsApp" },
  { n: "2×", label: "documented visits a year, minimum" },
];

const cities = ["Dallas", "Bay Area", "London", "Dubai", "Singapore", "Sydney", "Toronto"];

export function TrustBar() {
  return (
    <section className="border-y border-rule bg-paper-2" aria-label="Trust">
      <div className="container grid gap-8 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-2xl font-semibold text-stamp">{s.n}</dt>
              <dd className="mt-1 text-sm text-ink-2">{s.label}</dd>
            </div>
          ))}
        </dl>
        <div className="text-sm text-ink-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-seal-soft px-3 py-1 font-medium text-seal">
            <span className="h-1.5 w-1.5 rounded-full bg-seal" /> Verified partners
          </span>
          <p className="mt-3 max-w-xs">
            Families in {cities.join(", ")} already watch their land through us.
          </p>
        </div>
      </div>
    </section>
  );
}
