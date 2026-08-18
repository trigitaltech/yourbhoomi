import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const title = "NRI Property Management Cost in Hyderabad — Indicative Pricing";
const description =
  "What NRI land watch, property management, records work, and ancestral transfer support cost in Hyderabad and Telangana. Indicative INR ranges, government fees separate, first document review free.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title, description, url: "/pricing" },
};

// ponytail: PLACEHOLDER RANGES — owner to confirm before launch. Kept in one place so they are easy to edit.
const plans = [
  {
    name: "Bhoomi Watch",
    for: "Vacant plots and farmland",
    price: "from ₹1,500 per visit",
    unit: "monthly, bi-monthly, or quarterly schedule",
    includes: ["Dated corner photos + boundary check", "Fence, stones, name-board status", "Same-day encroachment alert", "Annual EC + Pahani/1B pull"],
    note: "Onboarding survey and boundary stones quoted separately (typically ₹8,000–₹25,000 depending on extent).",
  },
  {
    name: "Bhoomi Manage",
    for: "Flats, villas, and houses",
    price: "8–10% of monthly rent",
    unit: "or from ₹2,500 per month for vacant homes",
    includes: ["Tenant KYC, registered agreement, rent to NRO", "Quarterly inspection with photos", "Repairs coordinated with quotes you approve", "GHMC tax and society dues paid, receipts filed"],
    note: "Repair costs and materials at actuals; tenant-search fee equal to half a month's rent when we find the tenant.",
  },
  {
    name: "Bhoomi Comply",
    for: "Records, mutation, tax, certificates",
    price: "from ₹3,000 per job",
    unit: "government fees at actuals, shown separately",
    includes: ["Mutation / passbook correction on Bhu Bharati", "EC, certified copies, legal-heir & family-member certificates", "GHMC PTIN and municipal mutation", "Digital vault of all documents"],
    note: "Complex corrections (survey number splits, disputed extent) quoted after the free document review.",
  },
  {
    name: "Bhoomi Transact",
    for: "Gift, partition, succession, sale support",
    price: "from ₹15,000 per transfer",
    unit: "stamp duty, registration, CA and lawyer fees separate",
    includes: ["Bilingual family summary and document plan", "POA drafting checklist and consulate guidance", "SRO slot, witnesses, registration day support", "Post-registration mutation and tax name change"],
    note: "Sale-side support (paperwork clean-up, POA holder at SRO, TDS/15CA-CB coordination with your CA) quoted per case.",
  },
];

const faqs = [
  { q: "Are these the final prices?", a: "They are indicative ranges to help you budget; the exact quote depends on location, extent, and record condition and is confirmed on WhatsApp before any work starts. Government fees are always shown separately at actuals." },
  { q: "How do I pay from abroad?", a: "Invoices are in INR with your currency shown alongside. Pay by international card, or from your NRE/NRO account by transfer or UPI." },
  { q: "Is the first review really free?", a: "Yes. Send us your deed, EC, and Pahani/1B (or just the survey number) and we tell you what is missing and what it would cost to fix — no charge." },
  { q: "Do you take a commission on repairs or vendors?", a: "No. Vendors quote to you directly through us; you approve the amount; we coordinate and verify with photos." },
];

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Your Bhoomi NRI property services — indicative pricing",
    url: `${site.url}/pricing`,
    itemListElement: plans.map((p, i) => ({
      "@type": "Offer",
      position: i + 1,
      name: p.name,
      description: `${p.for}: ${p.includes.join("; ")}`,
      priceCurrency: "INR",
      priceSpecification: { "@type": "PriceSpecification", priceCurrency: "INR", description: `${p.price} (${p.unit})` },
      seller: { "@id": `${site.url}/#organization` },
      areaServed: { "@type": "City", name: "Hyderabad" },
    })),
  };
  return (
    <div className="container section">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />
      <p className="eyebrow mt-6">Pricing · Hyderabad &amp; Telangana · updated 18 Aug 2026</p>
      <h1 className="mt-3 max-w-3xl text-2xl">What NRI property management costs in Hyderabad</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-2">
        Land watch is priced per visit, homes as a share of rent, records and transfers per job. Government fees are always separate and shown at actuals. Your first document review is free.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {plans.map((p) => (
          <div key={p.name} className="card p-6">
            <p className="eyebrow">{p.for}</p>
            <h2 className="mt-2 text-xl font-semibold text-stamp">{p.name}</h2>
            <p className="mt-3 text-2xl font-semibold text-ink">{p.price}</p>
            <p className="text-sm text-ink-2">{p.unit}</p>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              {p.includes.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="text-seal">✓</span>
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink-2">{p.note}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <WhatsAppButton message="Hi, I'd like a quote for my property in Hyderabad. Here are the details:">
          Get a quote on WhatsApp
        </WhatsAppButton>
        <Link href="/compare" className="btn btn-outline">
          Compare with the alternatives
        </Link>
      </div>
      <div className="mt-14 max-w-3xl">
        <FaqList items={faqs} pagePath="/pricing" heading="Pricing questions" />
      </div>
    </div>
  );
}
