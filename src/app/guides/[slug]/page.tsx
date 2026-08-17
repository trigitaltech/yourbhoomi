import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { guideBySlug, guides } from "@/lib/guides";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) return {};
  return {
    title: g.title,
    description: g.summary,
    alternates: { canonical: `/guides/${g.slug}` },
  };
}

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.summary,
    author: { "@type": "Organization", name: "Your Bhoomi" },
  };

  return (
    <article className="container section max-w-3xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="eyebrow">
        <Link href="/guides" className="hover:text-stamp">Guides</Link> · {g.readMinutes} min read
      </p>
      <h1 className="mt-3 text-2xl">{g.title}</h1>
      <p className="mt-4 text-lg text-ink-2">{g.summary}</p>

      {g.sections.map((s) => (
        <section key={s.heading} className="mt-10">
          <h2 className="text-xl">{s.heading}</h2>
          {s.body.map((p) => (
            <p key={p} className="mt-3 text-ink-2">
              {p}
            </p>
          ))}
        </section>
      ))}

      <aside className="card mt-12 bg-paper-2 p-6">
        <h2 className="text-base font-semibold text-stamp">Checklist</h2>
        <ul className="mt-3 space-y-2 text-sm text-ink">
          {g.checklist.map((c) => (
            <li key={c} className="flex gap-2">
              <span className="text-seal">✓</span>
              {c}
            </li>
          ))}
        </ul>
      </aside>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <WhatsAppButton message={`Hi, I read your guide "${g.title}" and have a question about my property.`}>
          Ask about this on WhatsApp
        </WhatsAppButton>
        <Link href="/nri" className="text-sm font-medium text-stamp">
          Back to NRI Desk →
        </Link>
      </div>
      <p className="mt-8 text-xs text-ink-2">
        General information only; rules vary by state and change often. Confirm with a lawyer or CA before acting.
      </p>
    </article>
  );
}
