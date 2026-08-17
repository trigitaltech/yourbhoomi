import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { serviceBySlug, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return {
    title: s.name,
    description: s.short,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();

  return (
    <div className="container section max-w-3xl">
      <p className="eyebrow">{s.name}</p>
      <h1 className="mt-3 text-2xl">{s.hero}</h1>
      <p className="mt-4 text-lg text-ink-2">{s.body}</p>
      <ul className="mt-8 space-y-2">
        {s.points.map((p) => (
          <li key={p} className="flex gap-2 text-ink">
            <span className="text-seal">✓</span>
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <WhatsAppButton message={`Hi, I'd like to know more about ${s.name}.`}>
          Ask about {s.name}
        </WhatsAppButton>
        <Link href="/#services" className="text-sm font-medium text-stamp">
          All services →
        </Link>
      </div>
      <div className="card mt-12 p-6">
        <h2 className="text-lg font-semibold text-stamp">Or leave your details</h2>
        <div className="mt-4">
          <LeadForm variant="contact" />
        </div>
      </div>
    </div>
  );
}
