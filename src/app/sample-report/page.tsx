import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InspectionReportCard } from "@/components/InspectionReportCard";
import { TrackView } from "@/components/TrackView";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const title = "Sample Land Security Report — What NRIs Receive After Every Inspection";
const description =
  "An anonymized sample YourBhoomi Land Security Report: overall status, 12-point checklist, geo-tagged photo and video evidence, recommendations, and secure sharing with family.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sample-report" },
  openGraph: { title, description, url: "/sample-report" },
};

const contents = [
  "Overall status: Green (Secure), Amber (Attention Required) or Red (Immediate Action Recommended)",
  "12-point checklist: boundary, fence, access, encroachment, construction, structures, vegetation, waterlogging, signage, caretaker, neighbours, tax and records",
  "Geo-tagged, timestamped photos of every corner plus a video walkthrough",
  "Before/after comparison against your previous visit (recurring plans)",
  "Immediate and optional recommendations with a follow-up date and next inspection date",
  "Private delivery on WhatsApp, email, or a secure link — never indexed or public",
];

export default function SampleReportPage() {
  return (
    <div className="container section">
      <TrackView event="sample_report_view" />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Sample report", path: "/sample-report" }]} />
      <p className="eyebrow mt-6">Land Security · Sample report</p>
      <h1 className="mt-3 max-w-3xl text-2xl">See what you receive after every inspection</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-2">
        Below is an anonymized sample of the report our field representative sends after a physical land security
        check. Names, location, and findings are illustrative. A downloadable sample PDF is coming.
      </p>

      <div className="mt-10 max-w-4xl">
        <InspectionReportCard />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl">What every report contains</h2>
        <ul className="mt-6 space-y-3 text-ink">
          {contents.map((x) => (
            <li key={x} className="flex gap-2">
              <span className="text-seal">✓</span>
              {x}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        <WhatsAppButton
          message="Hi YourBhoomi, I'd like to book a physical land security check for my land in [district]."
          source="sample-report"
        >
          Book a Physical Land Security Check
        </WhatsAppButton>
        <Link href="/land-security" className="btn btn-outline">
          About Land Security
        </Link>
      </div>
    </div>
  );
}
