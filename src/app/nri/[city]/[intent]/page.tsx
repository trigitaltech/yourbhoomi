import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { guideBySlug } from "@/lib/guides";
import { cities, cityBySlug, intentFor } from "@/lib/locations";
import { comingSoonHref, site } from "@/lib/site";

export function generateStaticParams() {
  return cities.flatMap((c) => c.intents.map((i) => ({ city: c.slug, intent: i.key })));
}

export async function generateMetadata({ params }: PageProps<"/nri/[city]/[intent]">) {
  const { city, intent } = await params;
  const c = cityBySlug(city);
  const i = c && intentFor(c, intent);
  if (!c || !i) return {};
  return {
    title: { absolute: `${i.title} | Your Bhoomi` },
    description: i.description,
    alternates: { canonical: `/nri/${c.slug}/${i.key}` },
    openGraph: { title: i.title, description: i.description, url: `/nri/${c.slug}/${i.key}`, type: "article" },
  };
}

export default async function IntentPage({ params }: PageProps<"/nri/[city]/[intent]">) {
  const { city, intent } = await params;
  const c = cityBySlug(city);
  const i = c && intentFor(c, intent);
  if (!c || !i) notFound();
  const path = `/nri/${c.slug}/${i.key}`;
  const url = `${site.url}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: i.title,
    description: i.description,
    datePublished: c.updated,
    dateModified: c.updated,
    inLanguage: "en-IN",
    url,
    mainEntityOfPage: url,
    about: { "@type": "Place", name: `${c.name}, ${c.state}, India` },
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: site.logo } },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["#answer"] },
  };

  return (
    <article className="container section max-w-3xl">
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "NRI Desk", path: "/nri" },
          { name: c.name, path: `/nri/${c.slug}` },
          { name: i.label, path },
        ]}
      />
      <p className="eyebrow mt-6">
        {i.label} · {c.name} · updated {c.updated}
      </p>
      <h1 className="mt-3 text-2xl">{i.h1}</h1>
      <p id="answer" className="mt-4 text-lg text-ink-2">
        {i.answer}
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <WhatsAppButton message={i.ctaMessage}>Ask on WhatsApp</WhatsAppButton>
        {(i.key === "buy" || i.key === "sell") && (
          <Link href={comingSoonHref(i.key)} className="btn btn-outline">
            Get notified when the {i.label} desk launches
          </Link>
        )}
      </div>

      <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-2 text-sm">
        {c.intents.map((x) => (
          <Link
            key={x.key}
            href={`/nri/${c.slug}/${x.key}`}
            aria-current={x.key === i.key ? "page" : undefined}
            className={`rounded-full border px-3 py-1 ${x.key === i.key ? "border-stamp bg-stamp text-white" : "border-rule hover:border-stamp hover:bg-stamp-soft"}`}
          >
            {x.label} in {c.name}
          </Link>
        ))}
      </nav>

      {i.sections.map((s) => (
        <section key={s.heading} className="mt-10">
          <h2 className="text-xl">{s.heading}</h2>
          {s.body.map((p) => (
            <p key={p} className="mt-3 text-ink-2">
              {p}
            </p>
          ))}
          {s.list && (
            <ul className="mt-3 space-y-2 text-ink-2">
              {s.list.map((li) => (
                <li key={li} className="flex gap-2">
                  <span className="text-seal">✓</span>
                  {li}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section className="mt-12">
        <FaqList items={i.faqs} pagePath={path} heading={`${i.label} questions we hear from NRIs`} />
      </section>

      <aside className="card mt-12 bg-paper-2 p-6">
        <h2 className="text-base font-semibold text-stamp">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {i.guides.map((slug) => {
            const g = guideBySlug(slug);
            return g ? (
              <li key={slug}>
                <Link href={`/guides/${g.slug}`} className="text-stamp underline">
                  {g.title}
                </Link>
              </li>
            ) : null;
          })}
          <li>
            <Link href="/glossary" className="text-stamp underline">
              Glossary: Pahani, 1B, EC, POA, TDS and more
            </Link>
          </li>
        </ul>
      </aside>

      <p className="mt-8 text-xs text-ink-2">
        General information as of {c.updated}; tax rates, stamp duty, and portal rules change. Confirm with a CA or
        lawyer before acting.
      </p>
    </article>
  );
}
