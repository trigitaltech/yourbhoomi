import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { guideBySlug, guides } from "@/lib/guides";
import { site } from "@/lib/site";

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
    openGraph: {
      title: g.title,
      description: g.summary,
      url: `/guides/${g.slug}`,
      type: "article",
      publishedTime: g.published,
    },
  };
}

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) notFound();
  const url = `${site.url}/guides/${g.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: g.title,
        description: g.summary,
        inLanguage: "en-IN",
      },
      {
        "@type": "Article",
        headline: g.title,
        description: g.summary,
        image: [site.logo],
        datePublished: g.published,
        dateModified: g.published,
        inLanguage: "en-IN",
        url,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: site.name, url: site.url },
        publisher: {
          "@type": "Organization",
          name: site.name,
          logo: { "@type": "ImageObject", url: site.logo },
        },
      },
      {
        "@type": "HowTo",
        name: g.title,
        description: g.summary,
        step: g.checklist.map((name, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name,
        })),
      },
    ],
  };

  return (
    <article className="container section max-w-3xl">
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: g.title, path: `/guides/${g.slug}` },
        ]}
      />
      <p className="eyebrow mt-6">
        <Link href="/guides" className="hover:text-stamp">
          Guides
        </Link>{" "}
        · {g.readMinutes} min read
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
        <WhatsAppButton message={`Hi, I read your guide "${g.title}" and have a question about my property in India.`}>
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
