import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { serviceJsonLd } from "@/lib/seo";
import { serviceBySlug, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: s.seoTitle,
      description: s.seoDescription,
      url: `/services/${s.slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();
  const schema = serviceJsonLd(s.slug);

  return (
    <div className="container section max-w-3xl">
      {schema && <JsonLd data={schema} />}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "NRI Desk", path: "/nri" },
          { name: s.name, path: `/services/${s.slug}` },
        ]}
      />
      <p className="eyebrow mt-6">{s.name}</p>
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
        <WhatsAppButton message={`Hi, I'd like to know more about ${s.name} for my property in India.`}>
          Ask about {s.name}
        </WhatsAppButton>
        <Link href="/nri" className="text-sm font-medium text-stamp">
          NRI Desk →
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
