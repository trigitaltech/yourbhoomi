import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { properties, propertyBySlug } from "@/lib/properties";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = propertyBySlug(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/properties/${p.slug}` },
    openGraph: { images: [p.image] },
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = propertyBySlug(slug);
  if (!p) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 pt-28 pb-20 sm:px-6">
      <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <span className="absolute top-4 left-4 rounded-full bg-navy/90 px-3 py-1 text-xs text-cream">
          {p.tag}
        </span>
      </div>
      <p className="mt-8 text-sm text-muted">{p.location}</p>
      <h1 className="mt-1 font-serif text-4xl text-navy">{p.title}</h1>
      <p className="mt-3 text-2xl font-semibold text-green">{p.price}</p>
      <p className="mt-4 text-muted">{p.summary}</p>
      <p className="mt-4 text-sm">
        {p.type} · {p.acres}
        {p.beds > 0 ? ` · ${p.beds} beds` : ""}
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-navy">Schedule a tour</h2>
          <p className="mt-2 text-sm text-muted">
            A local partner can walk this property or send a video the same week.
          </p>
        </div>
        <LeadForm variant="tour" />
      </div>
      <p className="mt-10">
        <Link href="/properties" className="text-green underline">
          All properties
        </Link>
      </p>
    </article>
  );
}
