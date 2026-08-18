import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { InspectionReportCard } from "@/components/InspectionReportCard";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  landSecurityDisclaimer,
  landSecurityFaqs,
  landSecurityHero,
  landSecurityPlans,
  landSecurityServices,
  landSecuritySteps,
} from "@/lib/land-security";
import { site } from "@/lib/site";

const title = "Land Security for NRIs — Physical Inspection, Encroachment Monitoring, Geo-tagged Reports";
const description =
  "Physical land inspections for NRIs in Telangana and Andhra Pradesh: boundary checks, encroachment detection, geo-tagged photos, video walkthroughs, and private reports.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/land-security" },
  openGraph: { title, description, url: "/land-security" },
};

export default function LandSecurityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Land Security",
    serviceType: "Physical land inspection and monitoring for NRIs",
    description,
    url: `${site.url}/land-security`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: site.coverage.map((s) => ({ "@type": "State", name: s })),
  };

  return (
    <div className="container section">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Land Security", path: "/land-security" }]} />
      <p className="eyebrow mt-6">{landSecurityHero.eyebrow}</p>
      <h1 className="mt-3 max-w-3xl text-2xl">{landSecurityHero.h1}</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-2">{landSecurityHero.body}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <WhatsAppButton
          message="Hi YourBhoomi, I own land in [district, state] and would like to understand the Land Security service."
          source="land-security-hero"
        >
          Check My Land Security
        </WhatsAppButton>
        <Link href="/land-risk-check" className="btn btn-outline">
          Free Land Risk Check
        </Link>
      </div>

      <section className="mt-14">
        <h2 className="text-2xl">What Land Security covers</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {landSecurityServices.map((s) => (
            <div key={s.name} className="card p-5">
              <h3 className="text-base font-semibold text-ink">{s.name}</h3>
              <p className="mt-2 text-sm text-ink-2">{s.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 max-w-4xl">
        <h2 className="text-2xl">See what you receive after every inspection</h2>
        <p className="mt-3 text-ink-2">An anonymized sample. Every value is illustrative.</p>
        <div className="mt-6">
          <InspectionReportCard compact />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl">How it works</h2>
        <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {landSecuritySteps.map((s, i) => (
            <li key={s.title} className="card p-5">
              <p className="eyebrow">Step {i + 1}</p>
              <h3 className="mt-2 text-base font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-2">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl">Plans</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {landSecurityPlans.map((p) => (
            <div key={p.name} className="card p-6">
              <p className="eyebrow">{p.for}</p>
              <h3 className="mt-2 text-xl font-semibold text-stamp">{p.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink">
                {p.includes.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="text-seal">✓</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6">
          <Link href="/pricing" className="btn btn-outline">
            See indicative pricing
          </Link>
        </p>
      </section>

      <div className="mt-14 max-w-3xl rounded-lg border border-rule bg-paper-2 p-5">
        <p className="text-sm font-medium text-ink">Not a legal guarantee</p>
        <p className="mt-2 text-sm text-ink-2">{landSecurityDisclaimer}</p>
      </div>

      <div className="mt-14 max-w-3xl">
        <FaqList items={landSecurityFaqs} pagePath="/land-security" heading="Land Security questions NRIs ask" />
      </div>

      <section className="card mt-14 max-w-2xl p-6 sm:p-8">
        <h2 className="text-2xl">Book your first inspection</h2>
        <p className="mt-2 text-ink-2">Name, WhatsApp number, and where the land is. Our security desk replies within one business day.</p>
        <div className="mt-6">
          <LeadForm variant="security" />
        </div>
      </section>
    </div>
  );
}
