import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { serviceBySlug, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return {
    title: s.name,
    description: s.short,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6">
      <p className="text-sm tracking-widest text-green uppercase">{s.name}</p>
      <h1 className="mt-2 font-serif text-4xl text-navy">{s.hero}</h1>
      <p className="mt-4 text-lg text-muted">{s.body}</p>
      <ul className="mt-8 space-y-2 text-ink">
        {s.points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="text-gold">▸</span>
            {p}
          </li>
        ))}
      </ul>
      <p className="mt-10">
        <Link href="/contact" className="text-green underline">
          Get Started
        </Link>
        {" · "}
        <Link href="/#services" className="text-muted underline">
          All services
        </Link>
      </p>
      <div className="mt-12 rounded-2xl bg-white p-6">
        <h2 className="font-serif text-2xl text-navy">Ask about this desk</h2>
        <div className="mt-4">
          <LeadForm variant="contact" />
        </div>
      </div>
    </div>
  );
}
