import { faqTopics, faqs, faqsByTopic, type FaqTopic } from "@/lib/faqs";
import { glossary } from "@/lib/glossary";
import { guides } from "@/lib/guides";
import { cities } from "@/lib/locations";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const u = (p: string) => `${site.url}${p}`;

const intro = `# ${site.name}

> ${site.name} is an NRI property desk in Banjara Hills, Hyderabad, India. We are the trusted local partner for families living abroad who need someone to watch, manage, transfer, and keep ancestral land and homes in India compliant — then report back on WhatsApp in plain language.

${site.name} is not a listing portal. A named, Aadhaar-verified local person stands in for the owner on the plot, at the Tahsildar / MRO office, at MeeSeva, at GHMC, and at the Sub-Registrar office. Live services: Watch, Manage, Transfer (Transact), Comply. Buy, Sell, and Rent desks are launching in phases.

Contact: WhatsApp https://wa.me/${site.whatsapp} · ${site.email} · ${site.phone} · ${u("/contact")}
Coverage: Telangana (Hyderabad — Rangareddy, Medchal–Malkajgiri, Sangareddy, Nalgonda, Siddipet, Warangal, Medak), coastal Andhra Pradesh (Guntur–Vijayawada), Tamil Nadu (Coimbatore, Nilgiris), Karnataka (Mysuru). Families served in the US, UK, UAE, Singapore, Australia, Canada.
`;

export function llmsTxt() {
  return `${intro}
## Key pages
- [Home](${u("/")}): Land security and land transfer for NRIs — protect, monitor and transfer land in India without flying home
- [Search](${u("/search")}): site search for services, guides, FAQ, and glossary terms
- [Land Security](${u("/land-security")}): physical inspection, boundary and encroachment monitoring, geo-tagged photo/video reports, recurring visits
- [Land Transfer](${u("/land-transfer")}): inheritance, gift, sale, partition, succession, mutation, POA and registration coordination
- [Sample Security Report](${u("/sample-report")}): what every Bhoomi Security Report contains (anonymized sample)
- [Free Land Risk Check](${u("/land-risk-check")}): 12 questions → Land Security Score with recommendations
- [Transfer Readiness Check](${u("/transfer-readiness")}): document and heir readiness percentage for a transfer
- [Coverage](${u("/coverage")}): districts served in Telangana, Andhra Pradesh, Karnataka, Tamil Nadu
- [NRI Land Protection Checklist](${u("/nri-checklist")}): 25 checks every NRI landowner should perform
- [NRI Desk](${u("/nri")}): time-zone hours, POA, repatriation, bilingual summaries
${cities.map((c) => `- [${c.name} desk](${u(`/nri/${c.slug}`)}): ${c.description}\n${c.intents.map((i) => `  - [${i.label} in ${c.name}](${u(`/nri/${c.slug}/${i.key}`)}): ${i.description}`).join("\n")}`).join("\n")}
${services.map((s) => `- [${s.name}](${u(`/services/${s.slug}`)}): ${s.seoDescription}`).join("\n")}
- [Pricing](${u("/pricing")}): One-Time Security Check, Bhoomi Watch, Bhoomi Protect+ and land transfer from ₹15,000 (indicative)
- [Compare](${u("/compare")}): Your Bhoomi vs NoBroker vs relative vs DIY
- [FAQ](${u("/faq")}): ${faqs.length} direct answers
- [Glossary](${u("/glossary")}): ${glossary.length} land-record and NRI property terms
- [About](${u("/about")}), [Contact](${u("/contact")}), [Privacy](${u("/privacy")}), [Terms](${u("/terms")})

## Guides
${guides.map((g) => `- [${g.title}](${u(`/guides/${g.slug}`)}): ${g.summary}`).join("\n")}

## Full text
- [llms-full.txt](${u("/llms-full.txt")}): every guide, FAQ, and glossary entry in one file
`;
}

export function llmsFullTxt() {
  const topics = Object.keys(faqTopics) as FaqTopic[];
  return `${llmsTxt()}
---

# City desks
${cities
  .map(
    (c) => `## ${c.name}, ${c.state} (updated ${c.updated})
${c.answer}

Areas: ${c.areas.map((a) => a.name).join("; ")}
Offices: ${c.offices.map((o) => `${o.name} — ${o.what}`).join("; ")}

${c.intents
  .map(
    (i) => `### ${i.label} in ${c.name}: ${i.h1}
${i.answer}

${i.sections.map((s) => `#### ${s.heading}\n${s.body.join("\n\n")}${s.list ? "\n- " + s.list.join("\n- ") : ""}`).join("\n\n")}

${i.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}`,
  )
  .join("\n\n")}

${c.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}`,
  )
  .join("\n\n")}

---

# Guides
${guides
  .map(
    (g) => `## ${g.title} (${u(`/guides/${g.slug}`)}, published ${g.published})
${g.summary}

${g.sections.map((s) => `### ${s.heading}\n${s.body.join("\n\n")}`).join("\n\n")}

Checklist:
- ${g.checklist.join("\n- ")}`,
  )
  .join("\n\n")}

---

# FAQ (${u("/faq")})
${topics.map((t) => `## ${faqTopics[t]}\n${faqsByTopic(t).map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}`).join("\n\n")}

---

# Glossary (${u("/glossary")})
${glossary.map((t) => `- **${t.term}**: ${t.definition}`).join("\n")}

---
General information as of August 2026; tax rates, stamp duty, and portal rules change. Confirm with a CA or lawyer before acting.
`;
}
