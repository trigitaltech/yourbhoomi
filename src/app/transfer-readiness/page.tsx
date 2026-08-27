import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TransferCheck } from "@/components/TransferCheck";

const title = "Transfer Readiness Check — Is Your Property in India Ready for Transfer?";
const description =
  "Check if your property transfer in India is ready. We assess documents, legal heirs, disputes, and NRI POA. Get readiness score and next steps.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/transfer-readiness" },
  openGraph: { title, description, url: "/transfer-readiness" },
};

const checks = [
  "Registered deed in hand (sale, gift or partition deed)",
  "Mutation updated in the current owner's name",
  "Recent Encumbrance Certificate and property tax receipts",
  "All legal heirs identified — or the succession route if the owner has passed away",
  "Any dispute or litigation on the property",
  "Whether an NRI is signing and a Power of Attorney is planned",
];

export default function TransferReadinessPage() {
  return (
    <div className="container section">
      <Breadcrumbs
        items={[{ name: "Home", path: "/" }, { name: "Transfer Readiness Check", path: "/transfer-readiness" }]}
      />
      <p className="eyebrow mt-6">Free Transfer Readiness Check</p>
      <h1 className="mt-3 max-w-3xl text-2xl">Is your property ready for transfer?</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-2">
        Most transfers stall on a missing document, not on the registration itself. Answer a few questions and see
        which papers you already have, which need attention, and what to do next — before you book a flight or a
        Sub-Registrar slot.
      </p>

      <div className="mt-10 max-w-3xl">
        <TransferCheck />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl">What we check</h2>
        <ul className="mt-6 space-y-3 text-ink">
          {checks.map((x) => (
            <li key={x} className="flex gap-2">
              <span className="text-seal">✓</span>
              {x}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-2">
          The readiness percentage is an informational indicator based on the answers provided. It is not a legal
          title certification or legal opinion. Our{" "}
          <Link href="/land-transfer" className="text-stamp underline">
            Land Transfer service
          </Link>{" "}
          coordinates the paperwork; legal opinions come from your lawyer.
        </p>
      </section>
    </div>
  );
}
