import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `${site.name} terms for NRI land services in India. Guides are general information, not legal or tax advice.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="container section max-w-3xl">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Terms and Conditions", path: "/terms" },
        ]}
      />
      <p className="eyebrow mt-6">Legal</p>
      <h1 className="mt-3 text-2xl">Terms and Conditions</h1>
      <p className="mt-4 text-sm text-ink-2">Last updated: 18 August 2026</p>

      <div className="mt-8 space-y-8 text-ink-2">
        <section>
          <h2 className="text-xl text-stamp">Agreement</h2>
          <p className="mt-3">
            By using {site.url.replace("https://", "")} or sending us an enquiry
            you agree to these terms and to our{" "}
            <Link href="/privacy" className="text-stamp underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/cookies" className="text-stamp underline">
              Cookie Policy
            </Link>
            . If you do not agree, do not use the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Who we are</h2>
          <p className="mt-3">
            {site.name}, {site.address}. We are a property desk for NRIs and city
            families: watch, manage, transfer, and comply work on land and houses
            in India. Email {site.email} · {site.phone}.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Services</h2>
          <p className="mt-3">
            Paid work (visits, filings, repairs, registrar attendance) starts only
            after we confirm scope and fees in writing — usually on WhatsApp. An
            enquiry on this website is not a retainer. Quotes may change if
            government fees or the file change.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Not legal or tax advice</h2>
          <p className="mt-3">
            Guides, FAQs, checklists, pricing examples, and chat answers are
            general information. Land law, stamp duty, TDS, and repatriation
            rules differ by state and change often. Confirm with a lawyer or
            chartered accountant before you act. We coordinate that work; we do
            not replace it.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Power of Attorney</h2>
          <p className="mt-3">
            A Power of Attorney, if used, is limited to the acts and properties
            named in the deed. We do not take a General POA over your estate. You
            remain the owner. You must tell us if a POA is revoked.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Listings and coming soon</h2>
          <p className="mt-3">
            Pages under “land under watch” describe properties we already care
            for. They are not an offer to sell unless we say so in writing. Buy,
            Sell, and Rent pages marked coming soon are not live services yet.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Your responsibilities</h2>
          <p className="mt-3">
            Give us accurate names, numbers, and plot details. Do not send us
            someone else&apos;s documents without their authority. Keep copies of
            what you already hold. Decisions to notice a neighbour, file a case,
            or sign a deed remain yours.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Liability</h2>
          <p className="mt-3">
            We take care with visits and filings. We are not liable for delays at
            government offices, disputes between family members, title defects we
            were not shown, or loss caused by a third party (including WhatsApp
            or a bank). Our liability for a paid job is limited to the fee you
            paid us for that job, except where Indian law does not allow that
            limit.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Website use</h2>
          <p className="mt-3">
            Do not misuse the site, scrape it, or submit false enquiries. Content
            on this site belongs to {site.name} unless stated otherwise. You may
            share a page link; you may not copy guides for a commercial product
            without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Governing law</h2>
          <p className="mt-3">
            These terms are governed by the laws of India. Courts in Hyderabad,
            Telangana have jurisdiction, without limiting any consumer right you
            have in your place of residence.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Changes</h2>
          <p className="mt-3">
            We may update these terms. The date at the top is the current
            version. Continued use after a change means you accept the new terms.
          </p>
        </section>
      </div>
    </div>
  );
}
