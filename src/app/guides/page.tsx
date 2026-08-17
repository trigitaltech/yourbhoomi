import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides for NRI property owners",
  description:
    "Plain-language guides on Power of Attorney, mutation, ancestral transfer, encroachment, selling and repatriation, and the annual compliance calendar.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <div className="container section">
      <p className="eyebrow">Guides</p>
      <h1 className="mt-3 text-2xl">Plain-language guides for owning land from abroad</h1>
      <p className="mt-3 max-w-2xl text-ink-2">
        The questions every NRI family asks us, answered without file numbers.
        General information — not legal or tax advice.
      </p>
      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link href={`/guides/${g.slug}`} className="card card-hover block h-full p-6">
              <p className="text-xs text-ink-2">{g.readMinutes} min read</p>
              <h2 className="mt-2 text-lg font-semibold text-stamp">{g.title}</h2>
              <p className="mt-2 text-sm text-ink-2">{g.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
