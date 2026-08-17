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
            Talk to your NRI property desk
          </h2>
          <p className="mt-4 text-ink-2">
            Tell us where the ancestral land is and what worries you — watch,
            mutation, transfer, or records. A real person replies on WhatsApp
            within a working day.
          </p>
          <div className="mt-6">
            <WhatsAppButton message="Hi Your Bhoomi, I'd like to talk about my property in India.">
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
