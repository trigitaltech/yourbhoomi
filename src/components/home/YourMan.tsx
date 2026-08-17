import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";

const compare = [
  {
    title: "Doing it yourself from abroad",
    body: "Midnight calls to a cousin, a WhatsApp photo once a year, and a registrar queue you cannot stand in.",
  },
  {
    title: "A no-broker portal",
    body: "Great for a listing. But a portal does not walk your boundary, sit at the Tahsildar's office, or fix a leaking roof.",
  },
  {
    title: "Your man in the city",
    body: "A named, ID-verified local person on your side. Visits, quotes, filings, and proof — reported in plain language.",
    highlight: true,
  },
];

const thisWeek = [
  "Walked the Nalgonda grove boundary — 12 dated photos",
  "Collected two roof-repair quotes for the Mysuru house",
  "Filed mutation follow-up at Warangal MRO office",
  "Paid Guntur property tax; receipt sent on WhatsApp",
];

export function YourMan() {
  return (
    <section id="services" className="container section" aria-labelledby="yourman-heading">
      <p className="eyebrow">Not no-broker. Your broker, on your side.</p>
      <h2 id="yourman-heading" className="mt-3 max-w-2xl text-2xl">
        Portals list property. We stand in for you where the property actually is.
      </h2>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {compare.map((c) => (
          <div
            key={c.title}
            className={`card p-6 ${c.highlight ? "border-stamp bg-stamp-soft/40" : ""}`}
          >
            <h3 className="text-lg font-semibold text-stamp">{c.title}</h3>
            <p className="mt-2 text-sm text-ink-2">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-rule">
          <Image
            src="/slide-security.png"
            alt="A local caretaker at the gate of a plot"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute top-4 left-4 flex items-center gap-3 rounded-xl bg-paper/95 p-3 shadow-card">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stamp text-sm font-semibold text-white">
              RK
            </span>
            <div className="text-xs">
              <p className="font-semibold text-ink">Ravi K. · Nalgonda</p>
              <p className="text-ink-2">Aadhaar-verified · 3 yrs with us</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-stamp">What your man did this week</h3>
          <ul className="mt-4 space-y-3">
            {thisWeek.map((t) => (
              <li key={t} className="flex gap-3 text-ink-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-seal" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-2">
            Every visit ends with a plain-language note and photos on WhatsApp.
            No file numbers. No jargon.
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="card card-hover p-6">
            <h3 className="text-lg font-semibold text-stamp">{s.name}</h3>
            <p className="mt-2 text-sm text-ink-2">{s.short}</p>
            <span className="mt-4 inline-block text-sm font-medium text-stamp">Learn more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
