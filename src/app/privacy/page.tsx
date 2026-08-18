import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and stores personal data for NRI property enquiries under India's DPDP Act.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="container section max-w-3xl">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
      <p className="eyebrow mt-6">Legal</p>
      <h1 className="mt-3 text-2xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-ink-2">Last updated: 18 August 2026</p>

      <div className="mt-8 space-y-8 text-ink-2">
        <section>
          <h2 className="text-xl text-stamp">Who we are</h2>
          <p className="mt-3">
            {site.name} is the data fiduciary for this website. Desk: {site.address}.
            Email:{" "}
            <a href={`mailto:${site.email}`} className="text-stamp underline">
              {site.email}
            </a>
            . Phone: {site.phone}. We handle NRI land watch, management, transfer,
            and records work in India.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">What we collect</h2>
          <p className="mt-3">
            Only what we need to reply to an enquiry or deliver a service you asked
            for:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Name, email, WhatsApp number, and where the property sits</li>
            <li>The message you type on a form, chat, or WhatsApp</li>
            <li>Documents you send so we can visit, file, or transfer a named plot</li>
            <li>Cookie preference (essential vs accepted) as described in our{" "}
              <Link href="/cookies" className="text-stamp underline">
                Cookie Policy
              </Link>
            </li>
          </ul>
          <p className="mt-3">
            We do not ask for Aadhaar, PAN, or passport copies on this website.
            Those are collected later, on a secure channel, only when a job needs
            them.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Why we use it</h2>
          <p className="mt-3">
            To contact you about watch, manage, transfer, or comply work; to send
            visit proof; and, if you asked, to tell you when Buy, Sell, or Rent
            launches. Legal basis: your consent when you submit a form or tick the
            agreement box, and performance of a service you request.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Who we share it with</h2>
          <p className="mt-3">
            We do not sell personal data. We share a name, number, and plot
            details with a named local partner only when you ask us to visit or
            file. WhatsApp messages are processed by Meta under their terms. Hosting
            and email providers see traffic needed to deliver the site and mail.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">How long we keep it</h2>
          <p className="mt-3">
            Enquiry details: up to 24 months after the last message, unless a live
            job or legal record needs them longer. Cookie preference: 12 months.
            You can ask us to delete an enquiry at {site.email}.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Your rights</h2>
          <p className="mt-3">
            Under the Digital Personal Data Protection Act, 2023 you may request
            access, correction, erasure, or withdrawal of consent for data we hold.
            Write to {site.email}. We aim to respond within 30 days. You may also
            complain to the Data Protection Board of India.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Cookies</h2>
          <p className="mt-3">
            Essential cookies remember your cookie choice and keep the site
            working. Optional analytics load only if you tap Accept cookies. Full
            list:{" "}
            <Link href="/cookies" className="text-stamp underline">
              Cookie Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Children</h2>
          <p className="mt-3">
            This site is for adults dealing with property. We do not knowingly
            collect data from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl text-stamp">Changes</h2>
          <p className="mt-3">
            If we change this policy we will update the date at the top. Continued
            use of the site after a change means you have seen the new text.
          </p>
        </section>
      </div>
    </div>
  );
}
