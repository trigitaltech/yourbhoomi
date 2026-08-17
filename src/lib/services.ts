export const services = [
  {
    slug: "watch",
    name: "Bhoomi Watch",
    seoTitle: "NRI Land Watch in India",
    seoDescription:
      "Scheduled visits, dated photos, and same-day encroachment alerts for vacant and ancestral land in India — reported on WhatsApp.",
    short:
      "Encroachment, boundary drift, and vacant-land visits. Photo and video proof on the schedule you set.",
    hero: "Eyes on the plot when you cannot be there.",
    body: "A vetted local partner walks the boundary, photographs fences and structures, and flags anything that does not match the last visit. You receive a plain-language note — not a dump of files.",
    points: [
      "Scheduled photo and video visits",
      "Boundary and encroachment flags",
      "Vacant-land caretaker checks",
      "Same-day alert when something is off",
    ],
  },
  {
    slug: "manage",
    name: "Bhoomi Manage",
    seoTitle: "NRI Property Management in India",
    seoDescription:
      "Repairs, caretakers, and tenant coordination for NRI homes and land in India, with quotes and photo proof you approve from abroad.",
    short:
      "Repairs, caretakers, tenants, and seasonal work — handled locally, reported in plain language.",
    hero: "Repairs and caretakers, without flying home.",
    body: "We brief a local crew, get quotes you can approve from your phone, and close the loop with before/after photos. Tenants and seasonal farm work sit in the same thread.",
    points: [
      "Quoted repairs with photo proof",
      "Caretaker and tenant coordination",
      "Seasonal farm and grove work",
      "One advisor for every vendor",
    ],
  },
  {
    slug: "transact",
    name: "Bhoomi Transact",
    seoTitle: "Ancestral Property Transfer in India",
    seoDescription:
      "Gift, partition, sale, and succession for NRI families. We assemble the file, stand at the registrar, and explain every stamp in plain language.",
    short:
      "Ancestral transfer, sale, gift, and partition. We stand with you through the paperwork, not just the plot.",
    hero: "Transfer until the name on the record matches the family.",
    body: "Gift, sale, partition, or succession — we assemble the file, sit with the registrar when needed, and explain each stamp in the language your family actually speaks.",
    points: [
      "Ancestral gift and succession",
      "Sale and partition support",
      "Registrar and witness coordination",
      "Bilingual plain-language summaries",
    ],
  },
  {
    slug: "comply",
    name: "Bhoomi Comply",
    seoTitle: "NRI Land Records, Mutation & Tax",
    seoDescription:
      "Mutation, Pahani, property tax, and encumbrance certificates kept current so the next generation inherits a clean file.",
    short:
      "Records, mutations, tax, and survey maps kept current so the next generation inherits a clean file.",
    hero: "A clean file for the next generation.",
    body: "Mutation, tax, survey sketches, and encumbrance certificates live in one place. We chase the office so you do not have to learn the queue.",
    points: [
      "Mutation and tax follow-up",
      "Survey and map updates",
      "Encumbrance and title packets",
      "Digital vault of what you already hold",
    ],
  },
] as const;

export function serviceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
