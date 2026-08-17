import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Contact Your Bhoomi on WhatsApp, phone, or email for land security, ancestral transfer, and NRI property care.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="container section">
      <p className="eyebrow">Contact us</p>
      <h1 className="mt-3 text-2xl">Write to the desk that watches your land</h1>
      <p className="mt-4 max-w-2xl text-ink-2">
        WhatsApp is fastest. One thread, one advisor, plain language back.
      </p>
      <div className="mt-6">
        <WhatsAppButton>Chat on WhatsApp</WhatsAppButton>
      </div>
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-stamp">Reach us</h2>
          <ul className="mt-4 space-y-2 text-ink-2">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-stamp">{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-stamp">{site.phone}</a>
            </li>
            <li>{site.address}</li>
          </ul>
          <div className="mt-6">
            <LeadForm variant="contact" />
          </div>
        </div>
        <div className="card bg-paper-2 p-8">
          <h2 className="text-lg font-semibold text-stamp">
            Be first to know when we open in your district
          </h2>
          <p className="mt-3 text-sm text-ink-2">
            We onboard verified partners belt by belt. Leave your city and we’ll write before public launch.
          </p>
          <div className="mt-6">
            <LeadForm variant="waitlist" />
          </div>
        </div>
      </div>
    </div>
  );
}
