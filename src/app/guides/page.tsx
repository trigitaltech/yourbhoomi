import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "NRI Property Guides — POA, Mutation, Transfer",
  description:
    "Plain-language NRI guides on Power of Attorney, mutation, ancestral transfer, encroachment, selling from India, repatriation, and the annual compliance calendar.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "NRI Property Guides — POA, Mutation, Transfer",
    description:
      "Plain-language NRI guides on Power of Attorney, mutation, ancestral transfer, encroachment, selling from India, repatriation, and the annual compliance calendar.",
    url: "/guides",
  },
};

export default function GuidesPage() {
  return (
    <div className="container section">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ]}
      />
      <p className="eyebrow mt-6">Guides</p>
      <h1 className="mt-3 text-2xl">NRI property guides: owning and transferring land in India from abroad</h1>
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
