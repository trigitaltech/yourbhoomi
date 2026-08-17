const quotes = [
  {
    q: "We live in Dallas. Your Bhoomi sent fence photos the week a neighbour moved a boundary. That visit paid for itself.",
    a: "Sravani R.",
    where: "Dallas · grove in Nalgonda",
  },
  {
    q: "The transfer file was in Telugu, English, and a one-page summary. My father finally understood what we were signing.",
    a: "Karthik M.",
    where: "London · ancestral land in Warangal",
  },
  {
    q: "No jargon. Encroachment, repairs, paperwork — they just did it and told us what happened.",
    a: "Anitha P.",
    where: "Dubai · family house in Mysuru",
  },
];

export function Testimonials() {
  return (
    <section className="container section" aria-labelledby="testimonials-heading">
      <p className="eyebrow">Families we stand beside</p>
      <h2 id="testimonials-heading" className="mt-3 text-2xl">
        What it feels like to have someone there
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {quotes.map((t) => (
          <blockquote key={t.a} className="card p-6">
            <p className="text-ink">“{t.q}”</p>
            <footer className="mt-5 text-sm">
              <span className="font-semibold text-stamp">{t.a}</span>
              <span className="text-ink-2"> · {t.where}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
