import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CoverageChecker } from "@/components/CoverageChecker";
import { coverageDistricts } from "@/lib/site";

const title = "Coverage — Districts YourBhoomi Serves in Telangana, Andhra Pradesh, Karnataka & Tamil Nadu";
const description =
  "Check whether YourBhoomi covers your district for land security inspections and transfer support. Search by state, district and PIN; leave your details if we are not there yet.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/coverage" },
  openGraph: { title, description, url: "/coverage" },
};

export default function CoveragePage() {
  return (
    <div className="container section">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Coverage", path: "/coverage" }]} />
      <p className="eyebrow mt-6">Coverage</p>
      <h1 className="mt-3 max-w-3xl text-2xl">Check if we cover your district</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-2">
        We inspect land and coordinate transfers in the districts below. Search yours — if we are there, you can book an
        inspection right away; if not, tell us where your land is and we plan expansion by demand.
      </p>
      <div className="mt-8 max-w-3xl">
        <CoverageChecker />
      </div>
      <h2 className="mt-14 text-xl font-semibold text-ink">Where we are today</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {Object.entries(coverageDistricts).map(([state, districts]) => (
          <div key={state} className="card p-6">
            <h3 className="text-lg font-semibold text-stamp">{state}</h3>
            <p className="mt-2 text-sm text-ink-2">{districts.join(", ")}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-ink-2">Not on the list? Search above and leave your details — expansion is planned by demand.</p>
    </div>
  );
}
