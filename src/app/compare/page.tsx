import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const title = "Your Bhoomi vs NoBroker vs a Relative vs Doing It Yourself: NRI Property Care Compared";
const description =
  "How the options for looking after property in India from abroad compare — listing portals, a relative with a POA, doing it yourself, and a dedicated NRI land desk with a verified local person.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare" },
  openGraph: { title, description, url: "/compare" },
};

const cols = ["Do it yourself from abroad", "A relative in India", "Listing portal (e.g. NoBroker)", "Your Bhoomi"];

const rows: { need: string; cells: string[] }[] = [
  { need: "Someone physically at the plot every month", cells: ["No", "Sometimes", "No — tenant/listing focus", "Yes, scheduled, with dated photos"] },
  { need: "Encroachment spotted early", cells: ["Only on visits home", "If they notice", "No", "Same-day alert + demarcation filed"] },
  { need: "Standing in the MRO / SRO / MeeSeva queue", cells: ["No", "Yes, if free that day", "No", "Yes, our partner or your POA holder"] },
  { need: "Bhu Bharati mutation & passbook corrections", cells: ["Hard remotely", "Depends on their patience", "No", "Yes, tracked office by office"] },
  { need: "Tenant search, KYC, rent to NRO", cells: ["Hard", "Informal", "Yes (core strength)", "Yes"] },
  { need: "Repairs with quotes and before/after photos", cells: ["No", "Informal, no records", "Partial, city-limited", "Yes"] },
  { need: "GHMC / panchayat tax paid and receipts filed", cells: ["Online only inside GHMC", "If reminded", "No", "Yes, incl. offline panchayats"] },
  { need: "Bilingual summaries for parents and NRI children", cells: ["—", "—", "No", "Yes"] },
  { need: "Documented, auditable trail the whole family can see", cells: ["Your inbox", "Rarely", "Dashboard for listings", "WhatsApp thread + digital vault"] },
  { need: "Family relationship not strained by chores", cells: ["—", "Often strained", "—", "Yes — that is the point"] },
  { need: "Cost", cells: ["Flights + time", "Free, until it is not", "Monthly / % of rent", "Per visit / per job / % of rent"] },
];

const faqs = [
  {
    q: "Is Your Bhoomi a broker?",
    a: "Not in the listing sense. We do not earn on transactions today; we are paid by the owner for visits, management, records, and transfer work. When the Buy and Sell desks launch, fees will be disclosed up front and we will still work for the owner, not the deal.",
  },
  {
    q: "Should I stop using NoBroker if I use Your Bhoomi?",
    a: "No need. Portals are good for finding tenants and buyers. We take over what happens on the ground and in government offices, which portals do not do. Many families use both.",
  },
  {
    q: "My cousin already looks after the plot. Why pay?",
    a: "Keep your cousin as the family contact. We add a schedule, photos, receipts, and a paper trail — so nothing depends on one person's memory, and the relationship is not spent on errands.",
  },
];

export default function ComparePage() {
  return (
    <div className="container section">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Compare", path: "/compare" }]} />
      <p className="eyebrow mt-6">Compare · updated 18 Aug 2026</p>
      <h1 className="mt-3 max-w-3xl text-2xl">Looking after property in India from abroad: the four options compared</h1>
      <p className="mt-4 max-w-2xl text-ink-2">
        NRIs usually choose between flying home, leaning on a relative, a listing portal, or a dedicated NRI land desk. Here is what each actually does — honestly, including where the others are better.
      </p>
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-sm">
          <caption className="sr-only">Comparison of NRI property care options</caption>
          <thead>
            <tr className="border-b border-rule text-left">
              <th scope="col" className="py-3 pr-4 font-semibold text-ink">What you need</th>
              {cols.map((c) => (
                <th key={c} scope="col" className={`py-3 pr-4 font-semibold ${c === "Your Bhoomi" ? "text-stamp" : "text-ink"}`}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.need} className="border-b border-rule align-top">
                <th scope="row" className="py-3 pr-4 text-left font-medium text-ink">{r.need}</th>
                {r.cells.map((cell, idx) => (
                  <td key={idx} className={`py-3 pr-4 ${idx === 3 ? "text-stamp" : "text-ink-2"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 max-w-2xl text-sm text-ink-2">
        Portals are better than us at scale tenant search across a city; a relative is better than us at knowing the family history. We are better at showing up, documenting, and finishing the paperwork.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <WhatsAppButton message="Hi, I'm comparing options to look after my property in India. Can you tell me how you'd handle mine?">
          Ask how we would handle yours
        </WhatsAppButton>
        <Link href="/pricing" className="btn btn-outline">
          See pricing
        </Link>
      </div>
      <div className="mt-14 max-w-3xl">
        <FaqList items={faqs} pagePath="/compare" heading="Comparison questions" />
      </div>
    </div>
  );
}
