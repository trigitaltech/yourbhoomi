import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { PropertySearch } from "@/components/PropertySearch";
import { services } from "@/lib/services";

const steps = [
  {
    n: "01",
    title: "Tell us about your property",
    body: "Share the address, the documents you already have, and what worries you most.",
  },
  {
    n: "02",
    title: "We verify and visit",
    body: "A vetted, ID-checked local partner inspects the property and confirms ownership records.",
  },
  {
    n: "03",
    title: "You watch from anywhere",
    body: "Photo and video updates land in your dashboard on the schedule you choose.",
  },
  {
    n: "04",
    title: "We act when it matters",
    body: "Encroachment, repairs, or paperwork — handled, and reported back in plain language.",
  },
];

const neighborhoods = [
  { city: "Hyderabad belt", note: "Nalgonda, Siddipet, and peri-urban plots with rising survey disputes." },
  { city: "Coimbatore & Nilgiris", note: "Hill land and ancestral groves needing seasonal watch." },
  { city: "Coastal Andhra", note: "Guntur–Vijayawada corridor: title, mutation, and highway plots." },
];

const quotes = [
  {
    q: "We live in Dallas. Your Bhoomi sent fence photos the week a neighbour moved a boundary. That visit paid for itself.",
    a: "Sravani R., NRI owner",
  },
  {
    q: "The transfer file was in Telugu, English, and a one-page summary. My father finally understood what we were signing.",
    a: "Karthik M., Hyderabad",
  },
  {
    q: "No jargon. Encroachment, repairs, paperwork — they just did it and told us what happened.",
    a: "Anitha P., Bengaluru",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[92vh] overflow-hidden text-cream">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/2098989/2098989-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-4 pb-20 pt-28 sm:px-6">
          <p className="text-sm tracking-[0.25em] text-gold uppercase">
            Land & property, held in trust
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
            Secure the land. Transfer what your ancestors left.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-cream/85">
            Encroachment, repairs, or paperwork — handled, and reported back in
            plain language. Under transfer, we stay until the name on the record
            matches the family.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-green px-6 py-3 text-sm font-medium text-white hover:bg-green-light"
            >
              Get Started
            </Link>
            <Link
              href="/properties"
              className="rounded-full border border-cream/40 px-6 py-3 text-sm font-medium hover:bg-white/10"
            >
              Search Properties
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <p className="font-serif text-xl">Property Security</p>
              <p className="mt-1 text-sm text-cream/80">
                Watch the plot when you cannot be there.
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <p className="font-serif text-xl">Land Transfer</p>
              <p className="mt-1 text-sm text-cream/80">
                Ancestral papers, mutations, and a clean handoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PropertySearch />

      <section id="services" className="bg-navy py-20 text-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm tracking-widest text-gold uppercase">
            Four ways we stand in for you
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
            Watch. Manage. Transact. Comply.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-2xl border border-white/10 bg-navy-mid p-6 hover:border-gold/50"
              >
                <h3 className="font-serif text-2xl text-gold">{s.name}</h3>
                <p className="mt-3 text-cream/80">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-sm font-medium tracking-widest text-green uppercase">
          Process
        </p>
        <h2 className="mt-2 font-serif text-3xl text-navy sm:text-4xl">
          From your inbox to your plot, in four steps
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-2">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="font-serif text-3xl text-gold">{s.n}</span>
              <div>
                <h3 className="font-serif text-xl text-navy">{s.title}</h3>
                <p className="mt-2 text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80"
              alt="Terraced farmland at dusk"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm font-medium tracking-widest text-green uppercase">
              About us
            </p>
            <h2 className="mt-2 font-serif text-3xl text-navy">
              Built for families who left the village — not the land
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Your Bhoomi is a land and property desk for NRIs and city families.
              We pair local, ID-checked partners with a single advisor who speaks
              in sentences, not file numbers. Security of the soil. Dignity of
              the transfer.
            </p>
            <Link href="/about" className="mt-4 inline-block text-sm text-green">
              Read more about us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-serif text-3xl text-navy">Neighborhood guide</h2>
        <p className="mt-2 max-w-2xl text-muted">
          We open city by city. These belts are live for watch, manage, and
          transfer.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {neighborhoods.map((n) => (
            <article
              key={n.city}
              className="rounded-2xl border border-navy/10 bg-white p-6"
            >
              <h3 className="font-serif text-xl text-navy">{n.city}</h3>
              <p className="mt-2 text-sm text-muted">{n.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20 text-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl">Families we stand beside</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {quotes.map((t) => (
              <blockquote
                key={t.a}
                className="rounded-2xl border border-white/10 p-6"
              >
                <p className="text-cream/90">“{t.q}”</p>
                <footer className="mt-4 text-sm text-gold">{t.a}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-navy">Schedule a tour</h2>
          <p className="mt-3 text-muted">
            Tell us the plot. We’ll confirm a local visit or a video walkthrough.
          </p>
        </div>
        <LeadForm variant="tour" />
      </section>
    </>
  );
}
