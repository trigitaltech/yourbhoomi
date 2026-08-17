import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/home/Faq";
import { nriPoints } from "@/components/home/NriDesk";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { guides } from "@/lib/guides";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "NRI Desk — Property Management in India from Abroad",
  description:
    "Watch, manage, and transfer ancestral land in India from the US, UK, Gulf, or APAC. POA help, video proof, bilingual summaries, and repatriation support.",
  alternates: { canonical: "/nri" },
  openGraph: {
    title: "NRI Desk — Property Management in India from Abroad",
    description:
      "Watch, manage, and transfer ancestral land in India from the US, UK, Gulf, or APAC. POA help, video proof, bilingual summaries, and repatriation support.",
    url: "/nri",
  },
};

const zones = [
  { zone: "US & Canada", slot: "7–10 pm CT / ET" },
  { zone: "UK & Europe", slot: "6–9 pm GMT" },
  { zone: "Gulf", slot: "6–9 pm GST" },
  { zone: "Singapore & Australia", slot: "7–10 pm SGT / AEST" },
];

export default function NriPage() {
  return (
    <>
      <section className="container section">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "NRI Desk", path: "/nri" },
          ]}
        />
        <p className="eyebrow mt-6">NRI Desk</p>
        <h1 className="mt-3 max-w-3xl text-3xl">
          NRI property management in India — own land, live anywhere, never wonder what is happening to it.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-2">
          One advisor, one verified local person, and one WhatsApp thread for
          everything your property needs — visits, repairs, records, and
          transfer — explained in the language your family actually speaks.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <WhatsAppButton message="Hi, I'm an NRI. I'd like to set up property care for my land in India.">
            Start on WhatsApp
          </WhatsAppButton>
          <Link href="/#contact" className="btn btn-outline">
            Leave my details
          </Link>
        </div>
      </section>

      <section className="border-y border-rule bg-paper-2">
        <div className="container section">
          <h2 className="text-2xl">What the NRI Desk covers</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nriPoints.map((p) => (
              <li key={p.title} className="card p-5">
                <h3 className="text-base font-semibold text-stamp">{p.title}</h3>
                <p className="mt-1 text-sm text-ink-2">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container section">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Advisor hours in your time zone</h2>
            <dl className="mt-6 divide-y divide-rule border-y border-rule">
              {zones.map((z) => (
                <div key={z.zone} className="flex justify-between py-3 text-sm">
                  <dt className="font-medium text-ink">{z.zone}</dt>
                  <dd className="text-ink-2">{z.slot}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-ink-2">
              WhatsApp is answered through Indian working hours; urgent alerts
              (encroachment, damage) go out the same day, whatever the hour.
            </p>
          </div>
          <div>
            <h2 className="text-2xl">The four desks</h2>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="card card-hover block p-4">
                    <span className="font-semibold text-stamp">{s.name}</span>
                    <span className="mt-1 block text-sm text-ink-2">{s.short}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-2">
        <div className="container section">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl">Guides written for NRIs</h2>
            <Link href="/guides" className="text-sm font-medium text-stamp">
              All guides →
            </Link>
          </div>
          <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="card card-hover block h-full p-5">
                  <p className="text-xs text-ink-2">{g.readMinutes} min read</p>
                  <h3 className="mt-2 text-base font-semibold text-stamp">{g.title}</h3>
                  <p className="mt-2 text-sm text-ink-2">{g.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq pagePath="/nri" />
    </>
  );
}
