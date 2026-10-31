import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { InterestForm } from "@/components/InterestForm";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  agentFaqs,
  agentProblems,
  agentRoadmap,
  agentStory,
  agentUsps,
  agentsHero,
  collaborationExample,
} from "@/lib/agents";
import { site } from "@/lib/site";

const title =
  "Your Bhoomi for Real Estate Agents — AI Matching, Private Leads, Agent Collaboration, WhatsApp Sharing | Hyderabad";
const description =
  "An AI-powered business assistant for Hyderabad real estate agents. Keep your leads private, match buyers to properties with AI, collaborate with trusted agents on recorded commission splits, share property cards on WhatsApp and never miss a follow-up. Works in Telugu, Hindi and English.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/agents" },
  openGraph: { title, description, url: "/agents" },
};

const whatsappMessage =
  "Hi Your Bhoomi, I'm a real estate agent in Hyderabad and I'd like early access to the Agents App.";

export default function AgentsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Your Bhoomi Agents App",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android, iOS",
    description,
    url: `${site.url}/agents`,
    inLanguage: ["te", "hi", "en-IN"],
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "City", name: "Hyderabad" },
    audience: { "@type": "Audience", audienceType: "Real estate agents and independent brokers in Hyderabad" },
    offers: { "@type": "Offer", availability: "https://schema.org/PreOrder", url: `${site.url}/agents#waitlist` },
    featureList: agentUsps.map((u) => u.title),
  };

  const { buyerAgent, listingAgent, match } = collaborationExample;

  return (
    <div className="container section">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "For Agents", path: "/agents" }]} />

      {/* Hero */}
      <p className="eyebrow mt-6">{agentsHero.eyebrow}</p>
      <h1 className="mt-3 max-w-3xl text-3xl">{agentsHero.h1}</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-2">{agentsHero.body}</p>
      <div className="mt-6 max-w-2xl rounded-2xl bg-stamp-soft p-5">
        <p className="text-base font-semibold text-stamp sm:text-lg" lang="te-Latn">
          &ldquo;{agentsHero.teluguLine}&rdquo;
        </p>
        <p className="mt-1 text-sm text-ink-2">{agentsHero.teluguMeaning}</p>
      </div>
      <p className="mt-5 max-w-2xl text-sm text-ink-2">{agentsHero.positioning}</p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <Link href="#waitlist" className="btn btn-primary w-full sm:w-auto">
          Get early access
        </Link>
        <WhatsAppButton message={whatsappMessage} source="agents-hero" className="w-full sm:w-auto">
          Ask on WhatsApp
        </WhatsAppButton>
      </div>

      {/* Story */}
      <section className="mt-14" aria-labelledby="story-heading">
        <p className="eyebrow">{agentStory.eyebrow}</p>
        <h2 id="story-heading" className="mt-3 text-2xl">
          {agentStory.heading}
        </h2>
        <p className="mt-3 max-w-2xl text-ink-2">{agentStory.intro}</p>
        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agentStory.panels.map((p) => {
            const accent = p.kind === "hero" || p.kind === "cta";
            return (
              <li
                key={p.step}
                className={`flex flex-col p-5 ${accent ? "rounded-2xl border border-stamp/40 bg-stamp-soft" : "card"}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-sm font-bold text-stamp">
                    {p.step}
                  </span>
                  <p className="eyebrow">{p.eyebrow}</p>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-2">{p.body}</p>

                {p.points && (
                  <ul className="mt-3 space-y-1.5 text-sm text-ink">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <span className={p.kind === "challenge" ? "text-ink-3" : "text-seal"} aria-hidden>
                          {p.kind === "challenge" ? "•" : "✓"}
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}

                {p.kind === "solution" && (
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {agentStory.tiles.map((t) => (
                      <li key={t.label} className="rounded-lg bg-paper-2 px-3 py-2">
                        <p className="text-sm font-semibold text-ink">{t.label}</p>
                        <p className="text-xs text-ink-2">{t.sub}</p>
                      </li>
                    ))}
                  </ul>
                )}

                {p.step === 4 && (
                  <ul className="mt-4 space-y-2">
                    {agentStory.listings.map((l) => (
                      <li key={l.name} className="rounded-lg bg-paper-2 px-3 py-2">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium text-ink">{l.name}</p>
                          <span className="rounded-full bg-stamp-soft px-2 py-0.5 text-[10px] font-semibold text-stamp">
                            Active
                          </span>
                        </div>
                        <p className="text-xs text-ink-2">{l.area}</p>
                        <p className="text-xs font-medium text-stamp">{l.price}</p>
                      </li>
                    ))}
                  </ul>
                )}

                {p.step === 5 && (
                  <div className="mt-4">
                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                      <div className="rounded-lg bg-paper-2 p-3">
                        <p className="eyebrow">{agentStory.match.buyer.role}</p>
                        <p className="mt-1 text-xs text-ink">{agentStory.match.buyer.summary}</p>
                      </div>
                      <span className="text-xl text-stamp" aria-hidden>
                        ⇄
                      </span>
                      <div className="rounded-lg bg-paper-2 p-3">
                        <p className="eyebrow">{agentStory.match.seller.role}</p>
                        <p className="mt-1 text-xs text-ink">{agentStory.match.seller.summary}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-center">
                      <span className="inline-block rounded-full bg-stamp px-3 py-1 text-xs font-semibold text-white">
                        {agentStory.match.label}
                      </span>
                    </p>
                  </div>
                )}

                {p.kind === "cta" && (
                  <Link href="#waitlist" className="btn btn-primary mt-4 w-full sm:w-auto">
                    Be a partner today
                  </Link>
                )}

                {p.footer && <p className="mt-auto pt-4 text-sm font-semibold text-stamp">{p.footer}</p>}
              </li>
            );
          })}
        </ol>
      </section>

      {/* Problem / solution */}
      <section className="mt-14" aria-labelledby="needs-heading">
        <h2 id="needs-heading" className="text-2xl">
          What agents in Hyderabad actually need
        </h2>
        <p className="mt-3 max-w-2xl text-ink-2">
          Most agents do not care whether an app has 20 or 50 features. They care about getting more customers, finding
          suitable properties, closing deals faster and protecting their commission.
        </p>
        <div className="mt-8 hidden md:block">
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">Agent problems and how Your Bhoomi solves them</caption>
            <thead>
              <tr className="border-b border-rule text-left">
                <th scope="col" className="w-1/2 py-3 pr-6 font-semibold text-ink">
                  Agent&apos;s problem
                </th>
                <th scope="col" className="py-3 font-semibold text-stamp">
                  Your Bhoomi solution
                </th>
              </tr>
            </thead>
            <tbody>
              {agentProblems.map((r) => (
                <tr key={r.problem} className="border-b border-rule align-top">
                  <th scope="row" className="py-3 pr-6 text-left font-medium text-ink">
                    &ldquo;{r.problem}&rdquo;
                  </th>
                  <td className="py-3 text-ink-2">{r.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-8 grid gap-3 md:hidden">
          {agentProblems.map((r) => (
            <li key={r.problem} className="card p-4">
              <p className="text-sm font-medium text-ink">&ldquo;{r.problem}&rdquo;</p>
              <p className="mt-2 text-sm text-stamp">{r.solution}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* USPs */}
      <section className="mt-14" aria-labelledby="usp-heading">
        <h2 id="usp-heading" className="text-2xl">
          7 reasons agents choose Your Bhoomi
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agentUsps.map((u) => (
            <div key={u.n} className={`card p-5 ${u.signature ? "border-stamp/40" : ""}`}>
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stamp-soft text-sm font-bold text-stamp">
                  {u.n}
                </span>
                {u.signature && (
                  <span className="rounded-full bg-stamp px-2.5 py-0.5 text-xs font-semibold text-white">Signature</span>
                )}
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{u.title}</h3>
              <p className="mt-2 text-sm text-ink-2">{u.body}</p>
              <p className="mt-3 text-sm text-stamp">
                <span className="font-semibold">Agent benefit:</span> {u.benefit}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-ink-2">
          The strongest difference is reason 3 combined with reason 1: Your Bhoomi helps independent brokers work together
          without automatically exposing their customer information.
        </p>
      </section>

      {/* Collaboration flow */}
      <section className="mt-14" aria-labelledby="collab-heading">
        <p className="eyebrow">The signature flow</p>
        <h2 id="collab-heading" className="mt-3 text-2xl">
          Agent-to-agent collaboration
        </h2>
        <p className="mt-3 max-w-2xl text-ink-2">{collaborationExample.intro}</p>

        <p className="mt-8 text-sm font-semibold text-ink">Example: two agents in Hyderabad</p>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
          <div className="card p-5">
            <p className="eyebrow">{buyerAgent.role}</p>
            <h3 className="mt-2 text-lg font-semibold text-ink">{buyerAgent.name}</h3>
            <p className="mt-2 text-sm text-ink-2">{buyerAgent.has}</p>
          </div>
          <div className="hidden items-center text-2xl text-stamp lg:flex" aria-hidden>
            →
          </div>
          <div className="card border-stamp/40 bg-stamp-soft p-5">
            <p className="eyebrow">{match.title}</p>
            <p className="mt-2 text-sm text-ink">{match.body}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {match.reasons.map((r) => (
                <li key={r} className="rounded-full bg-paper px-2.5 py-0.5 text-xs font-medium text-stamp">
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden items-center text-2xl text-stamp lg:flex" aria-hidden>
            ←
          </div>
          <div className="card p-5">
            <p className="eyebrow">{listingAgent.role}</p>
            <h3 className="mt-2 text-lg font-semibold text-ink">{listingAgent.name}</h3>
            <p className="mt-2 text-sm text-ink-2">{listingAgent.has}</p>
          </div>
        </div>

        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {collaborationExample.steps.map((s, i) => (
            <li key={s.title} className="card p-5">
              <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-base font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-2">{s.body}</p>
            </li>
          ))}
        </ol>

        <ul className="mt-6 grid gap-2 text-sm text-ink sm:grid-cols-2">
          {collaborationExample.outcomes.map((o) => (
            <li key={o} className="flex gap-2 rounded-lg bg-paper-2 px-3 py-2">
              <span className="text-seal" aria-hidden>
                ✓
              </span>
              {o}
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-2xl text-sm text-ink-2">{collaborationExample.footnote}</p>

        <h3 className="mt-10 text-xl font-semibold text-ink">Three visibility levels</h3>
        <p className="mt-2 max-w-2xl text-sm text-ink-2">{collaborationExample.visibilityNote}</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {collaborationExample.visibility.map((v) => (
            <div key={v.level} className="card p-5">
              <h4 className="text-base font-semibold text-stamp">{v.level}</h4>
              <p className="mt-2 text-sm text-ink-2">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="mt-14" aria-labelledby="roadmap-heading">
        <h2 id="roadmap-heading" className="text-2xl">
          What ships first
        </h2>
        <p className="mt-3 max-w-2xl text-ink-2">
          The first release is focused on daily usage and agent-to-agent transactions. Matching buyers with properties,
          protecting leads and managing follow-ups come before anything else.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {agentRoadmap.map((phase) => (
            <div key={phase.key} className={`card p-6 ${phase.key === "launch" ? "border-stamp/40" : ""}`}>
              <p className="eyebrow">{phase.label}</p>
              <p className="mt-2 text-sm text-ink-2">{phase.intro}</p>
              {phase.key === "launch" ? (
                <ol className="mt-5 space-y-3">
                  {phase.items.map((it, i) => (
                    <li key={it.name} className="flex gap-3 text-sm">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stamp-soft text-xs font-bold text-stamp">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-medium text-ink">{it.name}</p>
                        <p className="text-ink-2">{it.what}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : (
                <ul className="mt-5 space-y-3">
                  {phase.items.map((it) => (
                    <li key={it.name} className="flex gap-2 text-sm">
                      <span className="text-seal" aria-hidden>
                        ✓
                      </span>
                      <div>
                        <p className="font-medium text-ink">{it.name}</p>
                        <p className="text-ink-2">{it.what}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="mt-14 max-w-3xl">
        <FaqList items={agentFaqs} pagePath="/agents" heading="Questions agents ask" />
      </div>

      {/* Waitlist */}
      <section id="waitlist" className="card mt-14 max-w-2xl scroll-mt-24 p-6 sm:p-8" aria-labelledby="waitlist-heading">
        <p className="eyebrow">Early access</p>
        <h2 id="waitlist-heading" className="mt-2 text-2xl">
          Be one of the first Hyderabad agents on Your Bhoomi
        </h2>
        <p className="mt-2 text-ink-2">
          Leave your name and WhatsApp number. We will message you the day the app is ready, with priority onboarding
          for the first agents who sign up.
        </p>
        <div className="mt-6">
          <InterestForm feature="agents" label="Agents App" />
        </div>
      </section>
    </div>
  );
}
