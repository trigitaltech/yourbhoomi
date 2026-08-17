import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faqs";
import { faqPageJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export function Faq({ items = faqs, pagePath = "/" }: { items?: typeof faqs; pagePath?: string }) {
  return (
    <section id="faq" className="border-t border-rule bg-paper-2" aria-labelledby="faq-heading">
      <JsonLd data={faqPageJsonLd(`${site.url}${pagePath === "/" ? "" : pagePath}`)} />
      <div className="container section max-w-3xl">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-heading" className="mt-3 text-2xl">
          Questions NRIs ask us first
        </h2>
        <div className="mt-8 divide-y divide-rule border-y border-rule">
          {items.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink marker:hidden">
                <h3 className="text-base font-medium text-ink">{f.q}</h3>
                <span className="text-xl leading-none text-ink-2 transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-ink-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
