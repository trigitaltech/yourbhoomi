import Link from "next/link";
import { agentTeaserUsps, agentsHero } from "@/lib/agents";

export function AgentsTeaser() {
  return (
    <section id="agents" className="border-y border-rule bg-paper-2" aria-labelledby="agents-heading">
      <div className="container section grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow">{agentsHero.eyebrow}</p>
          <h2 id="agents-heading" className="mt-3 text-2xl">
            {agentsHero.h1}
          </h2>
          <p className="mt-3 text-base font-semibold text-stamp" lang="te-Latn">
            &ldquo;{agentsHero.teluguLine}&rdquo;
          </p>
          <p className="mt-4 text-ink-2">{agentsHero.body}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/agents" className="btn btn-primary w-full sm:w-auto">
              See the Agents App
            </Link>
            <Link href="/agents#waitlist" className="btn btn-outline w-full sm:w-auto">
              Get early access
            </Link>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {agentTeaserUsps.map((u) => (
            <li key={u.n} className="card p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stamp-soft text-xs font-bold text-stamp">
                {u.n}
              </span>
              <h3 className="mt-3 text-base font-semibold text-ink">{u.title}</h3>
              <p className="mt-1 text-sm text-ink-2">{u.benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
