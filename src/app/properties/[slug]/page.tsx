import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { properties, propertyBySlug } from "@/lib/properties";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/properties/[slug]">) {
  const { slug } = await params;
  const p = propertyBySlug(slug);
  if (!p) return {};
  const title = `${p.title} in ${p.location}`;
  const description = `${p.summary} Under Your Bhoomi NRI property care in ${p.location}.`;
  return {
    title,
    description,
    alternates: { canonical: `/properties/${p.slug}` },
    openGraph: {
      title,
      description,
      url: `/properties/${p.slug}`,
      images: [p.image],
    },
  };
}

export default async function PropertyPage({ params }: PageProps<"/properties/[slug]">) {
  const { slug } = await params;
  const p = propertyBySlug(slug);
  if (!p) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: p.title,
    description: p.summary,
    image: p.image,
    address: {
      "@type": "PostalAddress",
      addressLocality: p.location,
      addressCountry: "IN",
    },
    url: `${site.url}/properties/${p.slug}`,
  };

  return (
    <article className="container section max-w-4xl">
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Land under watch", path: "/properties" },
          { name: p.title, path: `/properties/${p.slug}` },
        ]}
      />
      <div className="relative mt-6 h-72 overflow-hidden rounded-2xl border border-rule sm:h-96">
        <Image
          src={p.image}
          alt={`${p.title} in ${p.location} — NRI land under Your Bhoomi care`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <span className="absolute top-4 left-4 rounded-full bg-paper px-3 py-1 text-xs font-medium text-stamp">
          {p.tag}
        </span>
      </div>
      <p className="mt-8 text-sm text-ink-2">{p.location}</p>
      <h1 className="mt-1 text-2xl">{p.title}</h1>
      <p className="mt-3 text-xl font-semibold text-ink">{p.price}</p>
      <p className="mt-4 text-ink-2">{p.summary}</p>
      <p className="mt-4 text-sm text-ink-2">
        {p.type} · {p.acres}
        {p.beds > 0 ? ` · ${p.beds} beds` : ""}
      </p>
      <div className="mt-6">
        <WhatsAppButton message={`Hi, I'm an NRI interested in "${p.title}" (${p.location}).`}>
          Ask about this property
        </WhatsAppButton>
      </div>
      <div className="card mt-10 grid gap-8 p-6 lg:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-stamp">Request a visit or video</h2>
          <p className="mt-2 text-sm text-ink-2">
            Your man in India can walk this property or send a video the same week.
          </p>
        </div>
        <LeadForm variant="tour" />
      </div>
      <p className="mt-10">
        <Link href="/properties" className="text-sm font-medium text-stamp">
          ← All land under watch
        </Link>
      </p>
    </article>
  );
}
