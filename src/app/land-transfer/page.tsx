import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { Timeline } from "@/components/Timeline";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  landTransferFaqs,
  landTransferHero,
  landTransferPricingNote,
  landTransferServices,
  landTransferSteps,
  landTransferWhoDoesWhat,
} from "@/lib/land-transfer";
import { site } from "@/lib/site";

const title = "Land Transfer for NRIs — Inheritance, Gift Deed, Mutation, POA & Registration Coordination";
const description =
  "Coordinated property transfer support for NRIs: inheritance, gift deeds, partition, POA, sub-registrar registration and mutation in Telangana and South India.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/land-transfer" },
  openGraph: { title, description, url: "/land-transfer" },
};

export default function LandTransferPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Land Transfer Coordination",
    serviceType: "Property transfer coordination",
    description,
    url: `${site.url}/land-transfer`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: site.coverage.map((name) => ({ "@type": "State", name })),
  };
  return (
    <div className="container section">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Land Transfer", path: "/land-transfer" }]} />
      <p className="eyebrow mt-6">{landTransferHero.eyebrow}</p>
      <h1 className="mt-3 max-w-3xl text-2xl">{landTransferHero.h1}</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-2">{landTransferHero.sub}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <WhatsAppButton
          message="Hi YourBhoomi, I'd like to discuss transferring my property in [district, state] ([sale/gift/inheritance/partition])."
          source="land-transfer-hero"
        >
          Discuss My Property Transfer
        </WhatsAppButton>
        <Link href="/transfer-readiness" className="btn btn-outline">
          Free Transfer Readiness Check
        </Link>
      </div>

      <section className="mt-16" aria-labelledby="services-h">
        <h2 id="services-h" className="text-2xl">
          What we coordinate
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {landTransferServices.map((s) => (
            <div key={s.name} className="card card-hover p-5">
              <h3 className="font-semibold text-stamp">{s.name}</h3>
              <p className="mt-2 text-sm text-ink-2">{s.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16" aria-labelledby="how-h">
        <h2 id="how-h" className="text-2xl">
          How a transfer moves
        </h2>
        <div className="mt-8">
          <Timeline steps={landTransferSteps} />
        </div>
      </section>

      <section className="card mt-16 bg-paper-2 p-6" aria-labelledby="who-h">
        <h2 id="who-h" className="text-xl">
          Who does what
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-ink">
          {landTransferWhoDoesWhat.map((x) => (
            <li key={x} className="flex gap-2">
              <span className="text-seal">✓</span>
              {x}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink-2">
          {landTransferPricingNote}{" "}
          <Link href="/pricing" className="text-stamp underline">
            Request a quote
          </Link>
        </p>
      </section>

      <div className="mt-16 max-w-3xl">
        <FaqList items={landTransferFaqs} pagePath="/land-transfer" heading="Transfer questions NRIs ask us" />
      </div>

      <section className="card mt-16 p-6 md:p-8" aria-labelledby="lead-h">
        <h2 id="lead-h" className="text-2xl">
          Speak with a transfer coordinator
        </h2>
        <p className="mt-2 text-sm text-ink-2">
          Tell us where the property is and who it should go to. We reply on WhatsApp within one business day.
        </p>
        <div className="mt-6">
          <LeadForm variant="transfer" />
        </div>
      </section>
    </div>
  );
}
