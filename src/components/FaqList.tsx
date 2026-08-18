import { JsonLd } from "@/components/JsonLd";
import { faqPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

type Item = { q: string; a: string };

// Answer-first FAQ block with FAQPage schema. Used on hub, intent, and FAQ pages.
export function FaqList({
  items,
  pagePath,
  heading = "Questions NRIs ask us",
  headingLevel = "h2",
}: {
  items: Item[];
  pagePath: string;
  heading?: string;
  headingLevel?: "h1" | "h2";
}) {
  const H = headingLevel;
  return (
    <section aria-label={heading}>
      <JsonLd data={faqPageJsonLd(`${site.url}${pagePath}`, items)} />
      <H className="text-2xl">{heading}</H>
      <div className="mt-6 divide-y divide-rule border-y border-rule">
        {items.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:hidden">
              <h3 className="text-base font-medium text-ink">{f.q}</h3>
              <span className="text-xl leading-none text-ink-2 transition group-open:rotate-45" aria-hidden>
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-ink-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
