import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { glossary } from "@/lib/glossary";
import { site } from "@/lib/site";

const title = "NRI Land & Property Glossary: Pahani, 1B, Mutation, EC, POA, TDS";
const description =
  "Plain-English definitions of the Telangana land-record and NRI property terms you meet when you buy, sell, inherit, or manage property in India from abroad.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/glossary" },
  openGraph: { title, description, url: "/glossary" },
};

export default function GlossaryPage() {
  const url = `${site.url}/glossary`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${url}#terms`,
    name: "Your Bhoomi NRI property glossary",
    url,
    inLanguage: "en-IN",
    hasDefinedTerm: glossary.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${url}#${t.slug}`,
      name: t.term,
      description: t.definition,
      url: `${url}#${t.slug}`,
      inDefinedTermSet: `${url}#terms`,
    })),
  };

  return (
    <div className="container section max-w-3xl">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Glossary", path: "/glossary" }]} />
      <p className="eyebrow mt-6">Glossary</p>
      <h1 className="mt-3 text-2xl">NRI land and property terms, explained in one paragraph each</h1>
      <p className="mt-3 text-ink-2">
        The words on your Telangana land records, at the sub-registrar office, and in your CA&apos;s emails — defined
        so you can read your own file. Last updated 18 August 2026.
      </p>
      <nav aria-label="Terms" className="mt-6 flex flex-wrap gap-2 text-sm">
        {glossary.map((t) => (
          <a key={t.slug} href={`#${t.slug}`} className="rounded-full border border-rule px-3 py-1 hover:border-stamp hover:bg-stamp-soft">
            {t.term}
          </a>
        ))}
      </nav>
      <dl className="mt-10 divide-y divide-rule border-y border-rule">
        {glossary.map((t) => (
          <div key={t.slug} id={t.slug} className="scroll-mt-24 py-5">
            <dt className="text-lg font-semibold text-stamp">{t.term}</dt>
            <dd className="mt-2 text-ink-2">
              {t.definition}
              {t.related && (
                <>
                  {" "}
                  <Link href={t.related} className="text-stamp underline">
                    Read the guide →
                  </Link>
                </>
              )}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-10">
        <WhatsAppButton message="Hi, I have a question about a term on my Telangana land record.">
          Ask about your document on WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
