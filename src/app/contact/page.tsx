import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Contact Your Bhoomi for land security, ancestral transfer, and waitlist access in your city.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6">
      <p className="text-sm font-medium tracking-widest text-green uppercase">
        Contact us
      </p>
      <h1 className="mt-2 font-serif text-4xl text-navy sm:text-5xl">
        Write to the desk that watches your land
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Property security, repairs, records, and ancestral transfer. One form.
        One advisor. Plain language back.
      </p>
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-navy">Reach us</h2>
          <ul className="mt-4 space-y-2 text-muted">
            <li>hello@yourbhoomi.in</li>
            <li>+91 40 4000 1200</li>
            <li>Banjara Hills, Hyderabad</li>
          </ul>
          <div className="mt-6">
            <LeadForm variant="contact" />
          </div>
        </div>
        <div className="rounded-2xl bg-navy p-8 text-cream">
          <h2 className="font-serif text-2xl">
            Be first to know when we open in your city
          </h2>
          <p className="mt-3 text-cream/75">
            We expand belt by belt. Leave your city and we’ll notify you before
            public launch.
          </p>
          <div className="mt-6">
            <LeadForm variant="waitlist" />
          </div>
        </div>
      </div>
    </div>
  );
}
