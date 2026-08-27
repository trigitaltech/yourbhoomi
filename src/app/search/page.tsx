import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { searchSuggestions } from "@/lib/nav";
import { searchSite } from "@/lib/search";

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

export async function generateMetadata({ searchParams }: PageProps<"/search">): Promise<Metadata> {
  const sp = await searchParams;
  const q = first(sp.q).trim();
  if (!q) {
    return {
      title: "Search",
      description: "Search Your Bhoomi for land security, transfer, NRI guides, glossary terms, and coverage.",
      robots: { index: false, follow: true },
      alternates: { canonical: "/search" },
    };
  }
  return {
    title: `Search: ${q}`,
    description: `Results on Your Bhoomi for “${q}” — land security, transfer, NRI guides, and glossary.`,
    alternates: { canonical: `/search?q=${encodeURIComponent(q)}` },
  };
}

export default async function SearchPage({ searchParams }: PageProps<"/search">) {
  const sp = await searchParams;
  const q = first(sp.q).trim();
  const hits = q ? searchSite(q) : [];

  return (
    <div className="container section max-w-3xl">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Search", path: "/search" }]} />
      <h1 className="mt-6 text-2xl">{q ? `Results for “${q}”` : "Search Your Bhoomi"}</h1>
      <form action="/search" method="get" role="search" className="mt-6">
        <label htmlFor="q" className="sr-only">
          Search this site
        </label>
        <div className="flex gap-2">
          <input id="q" name="q" defaultValue={q} className="field" placeholder="Land security, mutation, POA, Hyderabad…" />
          <button type="submit" className="btn btn-primary shrink-0">
            Search
          </button>
        </div>
      </form>

      {q ? (
        <p className="mt-4 text-sm text-ink-2">
          {hits.length} {hits.length === 1 ? "result" : "results"}
        </p>
      ) : (
        <>
          <p className="mt-4 text-ink-2">Try a popular search, or type a district, document, or service.</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {searchSuggestions.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="inline-flex rounded-full border border-rule px-3 py-1 text-sm hover:border-stamp hover:bg-stamp-soft">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {q && hits.length === 0 ? (
        <p className="mt-8 text-ink-2">
          No matches. Try “mutation”, “POA”, or{" "}
          <Link href="/contact" className="text-stamp underline">
            contact the desk
          </Link>
          .
        </p>
      ) : null}

      <ol className="mt-8 divide-y divide-rule border-y border-rule">
        {hits.map((h) => (
          <li key={h.href + h.title} className="py-4">
            <p className="text-xs uppercase tracking-wide text-ink-2">{h.kind}</p>
            <Link href={h.href} className="mt-1 block text-lg font-medium text-stamp hover:underline">
              {h.title}
            </Link>
            <p className="mt-1 text-sm text-ink-2">{h.blurb}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
