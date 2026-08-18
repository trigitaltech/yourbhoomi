import Link from "next/link";

const cards = [
  {
    href: "/land-security",
    eyebrow: "Land Security",
    title: "Protect your land from anywhere",
    body: "Schedule verified physical visits, monitor boundaries and receive photo, video and inspection reports without depending on relatives or informal local contacts.",
    features: ["Physical inspection", "Encroachment monitoring", "Boundary condition", "Geo-tagged evidence", "Regular monitoring", "Security reports"],
    cta: "Explore Land Security",
  },
  {
    href: "/land-transfer",
    eyebrow: "Land Transfer",
    title: "Transfer property without repeated travel",
    body: "Get coordinated support for property transfers, inheritance, gift deeds, mutation, POA, registration and related documentation.",
    features: ["Document review", "Transfer route guidance", "Registration coordination", "Mutation support", "NRI POA support", "Progress tracking"],
    cta: "Explore Land Transfer",
  },
];

export function ServiceCards() {
  return (
    <section id="services" className="container section" aria-labelledby="services-heading">
      <p className="eyebrow">Two things we do well</p>
      <h2 id="services-heading" className="mt-3 max-w-2xl text-2xl">
        Keep the land safe. Get the name on the record right.
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {cards.map((c) => (
          <article key={c.href} className="card card-hover flex flex-col p-7">
            <p className="eyebrow">{c.eyebrow}</p>
            <h3 className="mt-2 text-xl font-semibold text-stamp">{c.title}</h3>
            <p className="mt-3 text-ink-2">{c.body}</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-ink">
              {c.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-seal" aria-hidden>
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link href={c.href} className="btn btn-primary mt-7 w-fit">
              {c.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
