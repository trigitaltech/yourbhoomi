const steps = [
  {
    n: "01",
    title: "Tell us on WhatsApp",
    body: "Share the village or city, what documents you hold, and what worries you most.",
  },
  {
    n: "02",
    title: "We assign your man in the city",
    body: "An ID-verified local partner visits, confirms records, and sends a first report within a week.",
  },
  {
    n: "03",
    title: "You watch from anywhere",
    body: "Photos, videos, and receipts arrive on the schedule you choose — in your time zone.",
  },
  {
    n: "04",
    title: "We act when it matters",
    body: "Encroachment, repairs, mutation, or transfer — handled, then explained in one plain paragraph.",
  },
];

export function Steps() {
  return (
    <section id="how" className="border-y border-rule bg-paper-2" aria-labelledby="how-heading">
      <div className="container section">
        <p className="eyebrow">How it works</p>
        <h2 id="how-heading" className="mt-3 text-2xl">
          From your phone to your plot, in four steps
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n}>
              <span className="text-sm font-semibold text-seal">{s.n}</span>
              <h3 className="mt-2 text-lg font-semibold text-stamp">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-2">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
