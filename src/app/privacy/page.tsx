import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} collects and uses contact details for NRI property enquiries.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="container section max-w-3xl">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]}
      />
      <p className="eyebrow mt-6">Legal</p>
      <h1 className="mt-3 text-2xl">Privacy policy</h1>
      <p className="mt-4 text-sm text-ink-2">Last updated: 17 August 2026</p>
      <div className="mt-8 space-y-6 text-ink-2">
        <p>
          {site.name} ({site.address}) collects only what we need to reply to an
          NRI property enquiry: name, email, WhatsApp number, property location,
          and the message you type. Forms on this site and chats on WhatsApp are
          treated the same.
        </p>
        <p>
          We use those details to contact you about watch, manage, transfer, or
          comply work — and, if you asked, to tell you when Buy, Sell, or Rent
          launches. We do not sell personal data. We share it with a local
          partner only when you ask us to visit or file on a named plot.
        </p>
        <p>
          WhatsApp messages are processed by Meta under their terms. Email and
          phone reach our Hyderabad desk. You can ask us to delete your enquiry
          at {site.email}.
        </p>
        <p>
          This site uses no advertising pixels. A service worker may cache pages
          for the installable app. Analytics, if added later, will be listed
          here before they go live.
        </p>
      </div>
    </div>
  );
}
