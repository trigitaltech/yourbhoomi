import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { guideBySlug } from "@/lib/guides";
import { cities, cityBySlug } from "@/lib/locations";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/nri/[city]">) {
  const { city } = await params;
  const c = cityBySlug(city);
  if (!c) return {};
  return {
    title: { absolute: `${c.title} | Your Bhoomi` },
    description: c.description,
    alternates: { canonical: `/nri/${c.slug}` },
    openGraph: { title: c.title, description: c.description, url: `/nri/${c.slug}` },
  };
}

export default async function CityPage({ params }: PageProps<"/nri/[city]">) {
  const { city } = await params;
  const c = cityBySlug(city);
  if (!c) notFound();
  const path = `/nri/${c.slug}`;
  const url = `${site.url}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#business`,
    name: `${site.name} — ${c.name} NRI property desk`,
    url,
    image: site.logo,
    telephone: site.phone,
    email: site.email,
    parentOrganization: { "@id": `${site.url}/#organization` },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: c.name,
      addressRegion: c.state,
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
    areaServed: c.areas.map((a) => ({ "@type": "Place", name: a.name })),
    knowsAbout: c.offices.map((o) => o.name),
    priceRange: "₹₹",
  };

  const guideSlugs = [...new Set(c.intents.flatMap((i) => i.guides))].slice(0, 6);

  return (
    <>
      <section className="container section">
        <JsonLd data={jsonLd} />
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "NRI Desk", path: "/nri" },
            { name: c.name, path },
          ]}
        />
        <p className="eyebrow mt-6">
          {c.name}, {c.state} · updated {c.updated}
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl">{c.h1}</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-2">{c.answer}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <WhatsAppButton message={`Hi, I'm an NRI with property in ${c.name}. I'd like to talk to your desk.`}>
            Talk to the {c.name} desk
          </WhatsAppButton>
          <Link href="/pricing" className="btn btn-outline">
            See indicative pricing
          </Link>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {c.stats.map((s) => (
            <div key={s.label}>
              <dt className="text-2xl font-semibold text-stamp">{s.n}</dt>
              <dd className="mt-1 text-sm text-ink-2">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-y border-rule bg-paper-2">
        <div className="container section">
          <h2 className="text-2xl">What do you need done in {c.name}?</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {c.intents.map((i) => (
              <Link key={i.key} href={`${path}/${i.key}`} className="card card-hover p-6">
                <p className="eyebrow">{i.label}</p>
                <h3 className="mt-2 text-lg font-semibold text-stamp">{i.h1}</h3>
                <span className="mt-4 inline-block text-sm font-medium text-stamp">Read the {i.label.toLowerCase()} guide →</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card card-hover p-5">
                <h3 className="text-base font-semibold text-stamp">{s.name}</h3>
                <p className="mt-1 text-sm text-ink-2">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Areas around {c.name} we work in</h2>
            <ul className="mt-6 divide-y divide-rule border-y border-rule">
              {c.areas.map((a) => (
                <li key={a.name} className="py-3">
                  <p className="font-medium text-ink">{a.name}</p>
                  <p className="text-sm text-ink-2">{a.note}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl">Offices we stand in at for you</h2>
            <ul className="mt-6 divide-y divide-rule border-y border-rule">
              {c.offices.map((o) => (
                <li key={o.name} className="py-3">
                  <p className="font-medium text-ink">{o.name}</p>
                  <p className="text-sm text-ink-2">{o.what}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-2">
        <div className="container section">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl">Guides for {c.state} property owners abroad</h2>
            <Link href="/guides" className="text-sm font-medium text-stamp">
              All guides →
            </Link>
          </div>
          <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guideSlugs.map((slug) => {
              const g = guideBySlug(slug);
              if (!g) return null;
              return (
                <li key={slug}>
                  <Link href={`/guides/${g.slug}`} className="card card-hover block h-full p-5">
                    <p className="text-xs text-ink-2">{g.readMinutes} min read</p>
                    <h3 className="mt-2 text-base font-semibold text-stamp">{g.title}</h3>
                    <p className="mt-2 text-sm text-ink-2">{g.summary}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="container section max-w-3xl">
        <FaqList items={c.faqs} pagePath={path} heading={`Questions about ${c.name}`} />
        <p className="mt-6 text-sm text-ink-2">
          More answers on the <Link href="/faq" className="text-stamp underline">full FAQ</Link> and the{" "}
          <Link href="/glossary" className="text-stamp underline">glossary</Link>.
        </p>
      </section>
    </>
  );
}
