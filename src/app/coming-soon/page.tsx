import type { Metadata } from "next";
import Link from "next/link";
import { InterestForm } from "@/components/InterestForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { comingSoonFeatures, comingSoonHref, type FeatureKey } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "Buy, Sell, and Rent & Land are on the way. Leave your details and we will tell you the day they launch.",
  robots: { index: false, follow: true },
};

const keys = Object.keys(comingSoonFeatures) as FeatureKey[];

export default async function ComingSoonPage({ searchParams }: PageProps<"/coming-soon">) {
  const sp = await searchParams;
  const raw = Array.isArray(sp.for) ? sp.for[0] : sp.for;
  const key: FeatureKey = raw && raw in comingSoonFeatures ? (raw as FeatureKey) : "buy";
  const f = comingSoonFeatures[key];

  return (
    <div className="container section">
      <p className="eyebrow">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-seal-soft px-3 py-1 font-semibold normal-case tracking-normal text-seal">
          <span className="h-1.5 w-1.5 rounded-full bg-seal" /> Coming soon
        </span>
      </p>
      <nav aria-label="Upcoming features" className="mt-6 flex flex-wrap gap-2">
        {keys.map((k) => (
          <Link
            key={k}
            href={comingSoonHref(k)}
            aria-current={k === key ? "page" : undefined}
            className={`rounded-full border px-4 py-1.5 text-sm ${
              k === key ? "border-stamp bg-stamp text-white" : "border-rule hover:border-stamp hover:bg-stamp-soft"
            }`}
          >
            {comingSoonFeatures[k].label}
          </Link>
        ))}
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="max-w-2xl text-3xl">{f.headline}</h1>
          <p className="mt-5 max-w-xl text-lg text-ink-2">
            We are working on <strong className="font-semibold text-ink">{f.label}</strong> right now and will get
            back to you as soon as it is ready. {f.body}
          </p>
          <p className="mt-4 max-w-xl text-ink-2">
            Meanwhile, our Watch, Manage, Transact, and Comply desks are live today — and a real person is one message
            away.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <WhatsAppButton message={`Hi, I'm interested in ${f.label} on Your Bhoomi. Can you tell me more?`}>
              Ask us on WhatsApp
            </WhatsAppButton>
            <Link href="/#services" className="btn btn-outline">
              See what is live now
            </Link>
          </div>
        </div>
        <div className="card p-6 md:p-8">
          <h2 className="text-lg font-semibold text-stamp">Be first to know</h2>
          <p className="mt-1 text-sm text-ink-2">
            Leave your details and we will message you the day {f.label} launches.
          </p>
          <div className="mt-5">
            <InterestForm feature={key} label={f.label} />
          </div>
        </div>
      </div>
    </div>
  );
}
