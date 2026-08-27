import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RiskCheck } from "@/components/RiskCheck";

const title = "Free Land Risk Check — NRI Land Security & Encroachment Score";
const description =
  "Evaluate encroachment risks for vacant plots in India. Get instant NRI Land Security Score, Bhu Bharati status, and encroachment prevention steps.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/land-risk-check" },
  openGraph: { title, description, url: "/land-risk-check" },
};

const looksAt = [
  "How long since anyone physically inspected the land",
  "Whether the boundary is marked and fenced",
  "Whether mutation, Encumbrance Certificate and property tax are current",
  "Whether someone local is watching the land between your visits",
  "Ownership complexity: multiple heirs, and whether you live abroad",
];

export default function LandRiskCheckPage() {
  return (
    <div className="container section">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Land Risk Check", path: "/land-risk-check" }]} />
      <p className="eyebrow mt-6">Free Land Risk Check</p>
      <h1 className="mt-3 max-w-3xl text-2xl">How secure is your land?</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-2">
        Answer a few questions and receive a quick Land Security Score. No account, no documents needed — about two
        minutes.
      </p>

      <div className="mt-10 max-w-3xl">
        <RiskCheck />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl">What the score looks at</h2>
        <ul className="mt-6 space-y-3 text-ink">
          {looksAt.map((x) => (
            <li key={x} className="flex gap-2">
              <span className="text-seal">✓</span>
              {x}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-2">
          The score is an informational indicator based on the answers provided. It is not a legal title
          certification or legal opinion. A physical{" "}
          <Link href="/land-security" className="text-stamp underline">
            Land Security Check
          </Link>{" "}
          verifies the ground reality; it does not certify title.
        </p>
      </section>
    </div>
  );
}
