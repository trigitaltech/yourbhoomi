import Image from "next/image";
import Link from "next/link";
import { guides } from "@/lib/guides";

export const nriPoints = [
  { title: "Calls in your time zone", body: "Advisor slots for US, UK, Gulf, and APAC evenings." },
  { title: "Power of Attorney, done right", body: "State-specific drafts, consulate checklist, adjudication in India." },
  { title: "Video proof, not promises", body: "Dated corner photos and walk-through videos on every visit." },
  { title: "Transparent invoices", body: "INR with the USD/GBP/AED equivalent. Pay from your NRE/NRO account." },
  { title: "Bilingual summaries", body: "Telugu, Tamil, Kannada, or Hindi for parents; English for you." },
  { title: "Sale & repatriation support", body: "TDS, capital gains, and Form 15CA/CB coordinated with a CA." },
];

export function NriDesk() {
  return (
    <section id="nri" className="container section" aria-labelledby="nri-heading">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow">NRI Desk</p>
          <h2 id="nri-heading" className="mt-3 text-2xl">
            Built for the family that left the village — not the land
          </h2>
          <p className="mt-4 text-ink-2">
            Most of our families live in Dallas, London, Dubai, or Singapore and
            own a grove, a plot, or a parents&apos; house they cannot visit.
            The NRI Desk is everything we learned doing this for them.
          </p>
          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl border border-rule">
            <Image
              src="/slide-transfer.png"
              alt="Parents and children reviewing a transfer document together"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <Link href="/nri" className="btn btn-outline mt-6">
            Open the NRI Desk
          </Link>
        </div>
        <div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {nriPoints.map((p) => (
              <li key={p.title} className="card p-5">
                <h3 className="text-base font-semibold text-stamp">{p.title}</h3>
                <p className="mt-1 text-sm text-ink-2">{p.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-sm font-semibold text-ink">Guides NRIs read most</p>
            <ul className="mt-3 divide-y divide-rule border-y border-rule">
              {guides.slice(0, 4).map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    className="flex items-center justify-between gap-4 py-3 text-sm hover:text-stamp"
                  >
                    <span>{g.title}</span>
                    <span className="shrink-0 text-xs text-ink-2">{g.readMinutes} min</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
