import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section id="contact" className="container section" aria-labelledby="cta-heading">
      <div className="card grid gap-10 border-stamp/30 p-8 md:grid-cols-2 md:p-12">
        <div>
          <p className="eyebrow">Get started</p>
          <h2 id="cta-heading" className="mt-3 text-2xl">
            Tell us where your land is
          </h2>
          <p className="mt-4 text-ink-2">
            We&apos;ll help you understand how YourBhoomi can protect, monitor or transfer it. A real
            person replies on WhatsApp within a working day.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/land-risk-check" className="btn btn-primary">
              Check My Land
            </Link>
            <WhatsAppButton
              message="Hi YourBhoomi, I own land in [district, state] and would like to understand how you can help protect or transfer it."
              source="home-final-cta"
            >
              Chat on WhatsApp
            </WhatsAppButton>
          </div>
          <p className="mt-4 text-sm text-ink-2">
            Prefer a call? {site.phone} · {site.email}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Or leave your details</p>
          <div className="mt-3">
            <LeadForm variant="contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
