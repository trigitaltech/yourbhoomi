import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { faqTopics, faqs, faqsByTopic, type FaqTopic } from "@/lib/faqs";

const title = "NRI Property FAQ: Hyderabad, Buying, Selling, Mutation, POA, TDS";
const description =
  "Direct answers to the questions NRIs ask about property in India and Hyderabad — who visits, what it costs, Bhu Bharati, mutation, POA, agricultural land, TDS on sale and rent, encroachment.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: { title, description, url: "/faq" },
};

export default function FaqPage() {
  const topics = Object.keys(faqTopics) as FaqTopic[];
  return (
    <div className="container section max-w-3xl">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]} />
      <p className="eyebrow mt-6">FAQ · {faqs.length} answers · updated 18 Aug 2026</p>
      <h1 className="mt-3 text-2xl">Questions NRIs ask about property in India — answered directly</h1>
      <p className="mt-3 text-ink-2">
        Short, specific answers first; the linked guides go deeper. Rules and rates are as of August 2026.
      </p>
      <nav aria-label="Topics" className="mt-6 flex flex-wrap gap-2 text-sm">
        {topics.map((t) => (
          <a key={t} href={`#${t}`} className="rounded-full border border-rule px-3 py-1 hover:border-stamp hover:bg-stamp-soft">
            {faqTopics[t]}
          </a>
        ))}
      </nav>
      {topics.map((t) => (
        <div key={t} id={t} className="mt-12 scroll-mt-24">
          <FaqList items={faqsByTopic(t)} pagePath={`/faq#${t}`} heading={faqTopics[t]} />
        </div>
      ))}
      <div className="mt-12 flex flex-wrap items-center gap-4">
        <WhatsAppButton message="Hi, I have a question that is not in your FAQ.">Ask something else</WhatsAppButton>
        <Link href="/glossary" className="text-sm font-medium text-stamp">
          Glossary of land-record terms →
        </Link>
      </div>
    </div>
  );
}
