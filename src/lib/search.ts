import { faqs } from "@/lib/faqs";
import { glossary } from "@/lib/glossary";
import { guides } from "@/lib/guides";
import { cities } from "@/lib/locations";
import { megaNav } from "@/lib/nav";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export type SearchHit = {
  href: string;
  title: string;
  blurb: string;
  kind: string;
};

const pages: SearchHit[] = [
  { href: "/", title: site.name, blurb: site.subline, kind: "Page" },
  { href: "/land-security", title: "Land Security", blurb: "Physical inspection, boundary and encroachment monitoring, geo-tagged reports.", kind: "Service" },
  { href: "/land-transfer", title: "Land Transfer", blurb: "Inheritance, gift, sale, partition, mutation, POA and registration.", kind: "Service" },
  { href: "/nri", title: "NRI Desk", blurb: "Time-zone hours, POA, repatriation, bilingual summaries.", kind: "Page" },
  { href: "/pricing", title: "Pricing", blurb: "Land security plans and indicative transfer coordination.", kind: "Page" },
  { href: "/coverage", title: "Coverage", blurb: "Districts served in Telangana, Andhra Pradesh, Karnataka, Tamil Nadu.", kind: "Tool" },
  { href: "/land-risk-check", title: "Land Risk Check", blurb: "Twelve questions to a Land Security Score.", kind: "Tool" },
  { href: "/transfer-readiness", title: "Transfer Readiness Check", blurb: "Document and heir readiness for a transfer.", kind: "Tool" },
  { href: "/sample-report", title: "Sample Security Report", blurb: "What every Bhoomi Security Report contains.", kind: "Tool" },
  { href: "/nri-checklist", title: "NRI Land Protection Checklist", blurb: "25 checks every NRI landowner should perform.", kind: "Tool" },
  { href: "/compare", title: "Compare", blurb: "Your Bhoomi vs NoBroker vs relative vs DIY.", kind: "Page" },
  { href: "/faq", title: "FAQ", blurb: "Direct answers about visits, cost, POA, and coverage.", kind: "Page" },
  { href: "/glossary", title: "Glossary", blurb: "Pahani, mutation, EC, POA, TDS, FEMA — one paragraph each.", kind: "Page" },
  { href: "/guides", title: "Guides", blurb: "Plain-language NRI guides on owning and transferring land in India.", kind: "Page" },
  { href: "/about", title: "About", blurb: "Your man in the city, for the land you left behind.", kind: "Page" },
  { href: "/contact", title: "Contact", blurb: "WhatsApp, email, or the Banjara Hills desk.", kind: "Page" },
];

export function searchIndex(): SearchHit[] {
  const fromMega: SearchHit[] = megaNav.flatMap((item) => {
    if (item.kind === "link") return [{ href: item.href, title: item.label, blurb: item.label, kind: "Page" }];
    const links = item.columns.flatMap((c) =>
      c.links.map((l) => ({ href: l.href, title: l.label, blurb: l.blurb ?? c.title, kind: item.label })),
    );
    if (item.featured) {
      links.push({
        href: item.featured.href,
        title: item.featured.label,
        blurb: item.featured.blurb ?? "",
        kind: item.label,
      });
    }
    return links;
  });

  return [
    ...pages,
    ...fromMega,
    ...services.map((s) => ({ href: `/services/${s.slug}`, title: s.name, blurb: s.short, kind: "Service" })),
    ...guides.map((g) => ({ href: `/guides/${g.slug}`, title: g.title, blurb: g.summary, kind: "Guide" })),
    ...cities.flatMap((c) => [
      { href: `/nri/${c.slug}`, title: `${c.name} desk`, blurb: c.description, kind: "NRI desk" },
      ...c.intents.map((i) => ({
        href: `/nri/${c.slug}/${i.key}`,
        title: `${i.label} in ${c.name}`,
        blurb: i.description,
        kind: "NRI desk",
      })),
    ]),
    ...faqs.map((f) => ({ href: "/faq", title: f.q, blurb: f.a, kind: "FAQ" })),
    ...glossary.map((t) => ({
      href: `/glossary#${t.slug}`,
      title: t.term,
      blurb: t.definition,
      kind: "Glossary",
    })),
  ];
}

function score(hit: SearchHit, terms: string[]) {
  const title = hit.title.toLowerCase();
  const blurb = hit.blurb.toLowerCase();
  let n = 0;
  for (const t of terms) {
    if (title === t) n += 8;
    else if (title.startsWith(t)) n += 5;
    else if (title.includes(t)) n += 3;
    if (blurb.includes(t)) n += 1;
  }
  return n;
}

export function searchSite(q: string, limit = 24): SearchHit[] {
  const terms = q.toLowerCase().split(/\s+/).filter((t) => t.length > 1);
  if (!terms.length) return [];
  const seen = new Set<string>();
  return searchIndex()
    .filter((h) => {
      const hay = `${h.title} ${h.blurb} ${h.kind}`.toLowerCase();
      return terms.every((t) => hay.includes(t));
    })
    .sort((a, b) => score(b, terms) - score(a, terms))
    .filter((h) => {
      if (seen.has(h.href + h.title)) return false;
      seen.add(h.href + h.title);
      return true;
    })
    .slice(0, limit);
}
