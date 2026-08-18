import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { TrackView } from "@/components/TrackView";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const title = "Pricing — Land Security Plans & Land Transfer Support for NRIs";
const description =
  "One-Time Security Check, Bhoomi Watch and Bhoomi Protect+ plans for land in India, plus land transfer support from ₹15,000. Indicative INR ranges, government fees separate, first document review free.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title, description, url: "/pricing" },
};

// ponytail: PLACEHOLDER RANGES — owner to confirm before launch. Kept in one place so they are easy to edit.
const securityPlans = [
  {
    name: "One-Time Security Check",
    for: "A first look, or before a transaction",
    price: "from ₹2,500 per visit",
    unit: "one visit, one report",
    includes: ["Physical visit and boundary inspection", "Geo-tagged photos of every corner", "Video walkthrough", "Bhoomi Security Report within 48 hours"],
    note: "Boundary stones and licensed survey quoted separately if needed.",
    cta: "Book One-Time Inspection",
    message: "Hi YourBhoomi, I'd like to book a one-time Land Security Check for my land in [district, state].",
    highlight: false,
  },
  {
    name: "Bhoomi Watch",
    for: "Vacant plots and farmland",
    price: "from ₹1,500 per visit",
    unit: "quarterly schedule (monthly or bi-monthly available)",
    includes: ["Quarterly visits with inspection reports", "Boundary and fence monitoring", "Same-day encroachment alerts", "WhatsApp updates after every visit"],
    note: "Onboarding survey and boundary stones quoted separately (typically ₹8,000–₹25,000 depending on extent).",
    cta: "Start Bhoomi Watch",
    message: "Hi YourBhoomi, I'd like to start Bhoomi Watch for my land in [district, state].",
    highlight: true,
  },
  {
    name: "Bhoomi Protect+",
    for: "Higher-risk or high-value land",
    price: "from ₹1,200 per visit",
    unit: "monthly visits, billed quarterly",
    includes: ["Monthly inspections and security monitoring", "Document health reminders (EC, mutation, tax)", "Priority assistance and emergency visits", "Annual property status summary"],
    note: "Emergency visits outside the schedule at the per-visit rate.",
    cta: "Choose Protect+",
    message: "Hi YourBhoomi, I'd like to know more about Bhoomi Protect+ for my land in [district, state].",
    highlight: false,
  },
];

const otherPlans = [
  {
    name: "Land Transfer",
    for: "Gift, partition, succession, sale support",
    price: "from ₹15,000 per transfer",
    unit: "stamp duty, registration, CA and advocate fees separate, at actuals",
    includes: ["Document review and transfer-route plan", "POA drafting checklist and consulate guidance", "SRO slot, witnesses, registration-day coordination", "Post-registration mutation and record update"],
    note: "Every transfer is quoted after a free document review — you see the breakdown before paying anything.",
    href: "/land-transfer",
    cta: "Request a quote",
  },
  {
    name: "Bhoomi Manage",
    for: "Flats, villas, and houses",
    price: "8–10% of monthly rent",
    unit: "or from ₹2,500 per month for vacant homes",
    includes: ["Tenant KYC, registered agreement, rent to NRO", "Quarterly inspection with photos", "Repairs coordinated with quotes you approve", "GHMC tax and society dues paid, receipts filed"],
    note: "Repair costs and materials at actuals; tenant-search fee equal to half a month's rent when we find the tenant.",
    href: "/services/manage",
    cta: "About Bhoomi Manage",
  },
  {
    name: "Bhoomi Comply",
    for: "Records, mutation, tax, certificates",
    price: "from ₹3,000 per job",
    unit: "government fees at actuals, shown separately",
    includes: ["Mutation / passbook correction on Bhu Bharati", "EC, certified copies, legal-heir & family-member certificates", "GHMC PTIN and municipal mutation", "Digital vault of all documents"],
    note: "Complex corrections quoted after the free document review.",
    href: "/services/comply",
    cta: "About Bhoomi Comply",
  },
];

const plans = [...securityPlans, ...otherPlans];

function PlanList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm text-ink">
      {items.map((x) => (
        <li key={x} className="flex gap-2">
          <span className="text-seal">✓</span>
          {x}
        </li>
      ))}
    </ul>
  );
}

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
      <h1 className="mt-3 max-w-3xl text-2xl">Simple plans for land security. Transfers quoted per case.</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-2">
        Land security is priced per visit, transfers per case after a free document review, homes as a share of rent. Government fees are always separate and shown at actuals.
      </p>
      <TrackView event="pricing_view" />
      <h2 className="mt-12 text-xl font-semibold text-stamp">Land Security plans</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {securityPlans.map((p) => (
          <div key={p.name} className={`card flex flex-col p-6 ${p.highlight ? "border-stamp bg-stamp-soft/30" : ""}`}>
            <p className="eyebrow">{p.for}</p>
            <h3 className="mt-2 text-xl font-semibold text-stamp">{p.name}</h3>
            <p className="mt-3 text-2xl font-semibold text-ink">{p.price}</p>
            <p className="text-sm text-ink-2">{p.unit}</p>
            <PlanList items={p.includes} />
            <p className="mt-4 flex-1 text-xs text-ink-2">{p.note}</p>
            <WhatsAppButton message={p.message} source={`pricing-${p.name}`} className="mt-5 w-fit">
              {p.cta}
            </WhatsAppButton>
          </div>
        ))}
      </div>
      <h2 className="mt-14 text-xl font-semibold text-stamp">Land Transfer and other services</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {otherPlans.map((p) => (
          <div key={p.name} className="card flex flex-col p-6">
            <p className="eyebrow">{p.for}</p>
            <h3 className="mt-2 text-xl font-semibold text-stamp">{p.name}</h3>
            <p className="mt-3 text-2xl font-semibold text-ink">{p.price}</p>
            <p className="text-sm text-ink-2">{p.unit}</p>
            <PlanList items={p.includes} />
            <p className="mt-4 flex-1 text-xs text-ink-2">{p.note}</p>
            <Link href={p.href} className="btn btn-outline mt-5 w-fit">
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <WhatsAppButton message="Hi YourBhoomi, I'd like a quote for my property in [district, state]. Here are the details:" source="pricing-quote">
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
