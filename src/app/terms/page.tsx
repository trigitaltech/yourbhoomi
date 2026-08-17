import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: `${site.name} provides NRI land services in India. Guides are general information, not legal or tax advice.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="container section max-w-3xl">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]}
      />
      <p className="eyebrow mt-6">Legal</p>
      <h1 className="mt-3 text-2xl">Terms of use</h1>
      <p className="mt-4 text-sm text-ink-2">Last updated: 17 August 2026</p>
      <div className="mt-8 space-y-6 text-ink-2">
        <p>
          {site.name} is a property desk for NRIs and city families. Paid work
          (visits, filings, repairs, registrar attendance) starts only after we
          confirm scope and fees in writing — usually on WhatsApp.
        </p>
        <p>
          Guides, FAQs, and checklists on this website are general information.
          Land law, stamp duty, TDS, and repatriation rules differ by state and
          change often. Confirm with a lawyer or chartered accountant before you
          act. We coordinate that work; we do not replace it.
        </p>
        <p>
          A Power of Attorney, if used, is limited to the acts and properties
          named in the deed. We do not take a General POA over your estate.
        </p>
        <p>
          Listings under “land under watch” describe properties we already care
          for. They are not an offer to sell unless we say so in writing. Buy,
          Sell, and Rent pages marked coming soon are not live services yet.
        </p>
        <p>
          Questions: {site.email} · {site.phone} · {site.address}.
        </p>
      </div>
    </div>
  );
}
