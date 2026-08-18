export type Intent = {
  key: "buy" | "sell" | "manage";
  label: string;
  title: string;
  description: string;
  h1: string;
  answer: string; // first-paragraph direct answer (40–60 words) — what search & AI quote
  sections: { heading: string; body: string[]; list?: string[] }[];
  faqs: { q: string; a: string }[];
  ctaMessage: string;
  guides: string[]; // guide slugs
};

export type City = {
  slug: string;
  name: string;
  state: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  areas: { name: string; note: string }[];
  offices: { name: string; what: string }[];
  stats: { n: string; label: string }[];
  faqs: { q: string; a: string }[];
  intents: Intent[];
  updated: string;
};

const hyderabadIntents: Intent[] = [
  {
    key: "manage",
    label: "Manage",
    title: "NRI Property Management in Hyderabad — Land Watch, Repairs, Tenants",
    description:
      "Property management for NRIs in Hyderabad and Telangana: monthly plot visits with dated photos, encroachment alerts, repairs, tenant handling, tax and records — reported on WhatsApp by an ID-verified local person.",
    h1: "NRI property management in Hyderabad: someone on the ground, proof on WhatsApp",
    answer:
      "Your Bhoomi manages plots, farmland, flats, and ancestral houses in and around Hyderabad for owners living abroad. An Aadhaar-verified local partner visits on a schedule, photographs boundaries, handles repairs and tenants, pays GHMC or panchayat tax, and reports on WhatsApp — so nothing is left to a busy relative.",
    sections: [
      {
        heading: "What does NRI property management in Hyderabad include?",
        body: [
          "For vacant plots and farmland: a licensed survey and boundary stones on onboarding, then visits every 30, 60, or 90 days with dated corner photos, a name board and fence check, and same-day alerts if anything moved. For flats and houses: tenant KYC and registered agreements, rent to your NRO account, quarterly inspections, repairs with quotes you approve from your phone, society and utility payments, and move-out settlements. For every property: annual EC and Pahani/1B pull, property-tax payment, and a digital vault of your documents.",
        ],
      },
      {
        heading: "Who is the person visiting my property?",
        body: [
          "A named partner from your mandal or circle — Rangareddy, Medchal–Malkajgiri, Sangareddy, Nalgonda, Siddipet, or Warangal — Aadhaar-verified and background-checked. You get their name, photo, and ID before the first visit; the same person stays on your file, and one advisor at our Banjara Hills desk owns the WhatsApp thread with you.",
        ],
      },
      {
        heading: "How is this different from NoBroker, Housewise, or a Justdial listing?",
        body: [
          "Portals and marketplaces are built around tenants and listings. Our desk is built around land in a district — walking a boundary in Shankarpally, standing at the Chevella MRO office for a demarcation, or paying tax at a Gram Panchayat that has no online option. See the full comparison.",
        ],
      },
      {
        heading: "What does it cost in Hyderabad?",
        body: [
          "Land watch is a fixed fee per visit; house and flat management is a percentage of rent or a flat monthly fee; records and repairs are quoted per job with government fees separate. Indicative ranges are on the pricing page; the first document review is free.",
        ],
      },
    ],
    faqs: [
      {
        q: "I live in Dallas and own a plot in Shankarpally. Can someone check on it every month?",
        a: "Yes. That is exactly Bhoomi Watch: a partner from Rangareddy district visits monthly, sends dated corner photos on WhatsApp within a day, and flags any change to the fence, stones, or neighbouring construction.",
      },
      {
        q: "Can you handle my flat in Gachibowli with a tenant already in it?",
        a: "Yes. We take over the agreement, verify the tenant, move rent to your NRO by standing instruction, follow up the tenant's TDS certificates, and inspect quarterly.",
      },
      {
        q: "Do you cover villages outside GHMC limits?",
        a: "Yes — Nalgonda, Siddipet, Warangal, Medak, and Sangareddy belts are live. Message us with the mandal name for anywhere else in Telangana.",
      },
    ],
    ctaMessage: "Hi, I'm an NRI with property in Hyderabad and I need someone to manage/watch it.",
    guides: ["encroachment-and-boundary-disputes", "renting-out-property-as-an-nri", "ghmc-property-tax-for-nris", "property-tax-and-compliance-calendar"],
  },
  {
    key: "buy",
    label: "Buy",
    title: "NRI Buying Property in Hyderabad (2026): Rules, Documents, Areas, Checks",
    description:
      "How an NRI buys a flat, villa, or plot in Hyderabad: FEMA rules (no agricultural land), documents, paying from NRE/NRO, POA, TS RERA and HMDA checks, and the areas NRIs ask about most.",
    h1: "NRI buying property in Hyderabad: what you can buy, what to check, and how to do it from abroad",
    answer:
      "An NRI can buy any residential or commercial property in Hyderabad — flats, villas, non-agricultural plots — but not agricultural land, farmland, or farmhouses (FEMA). Pay only through NRE/NRO/FCNR accounts or inward remittance, register through a POA holder if you cannot travel, and verify TS RERA or HMDA/DTCP approval before paying a token.",
    sections: [
      {
        heading: "What can an NRI buy in Hyderabad?",
        body: [
          "Residential and commercial property without limit on count. Not allowed: agricultural land, plantation property, and farmhouses — even where Telangana permits any citizen to buy farmland, FEMA overrides for NRIs and OCIs. Sub-registrar offices in Hyderabad ask NRI buyers to sign a FEMA declaration that the property is not agricultural. Inheriting or receiving farmland as a gift from a resident relative is allowed.",
        ],
      },
      {
        heading: "Documents an NRI needs to buy in Hyderabad",
        body: ["Have these scanned and originals ready for the SRO:"],
        list: [
          "Passport and visa / OCI card; PAN card",
          "Overseas address proof; Indian address proof if any",
          "NRE/NRO account details — payment must come from these or inward remittance",
          "Registered Special POA if you will not attend registration (consulate-signed or notarised + apostilled, adjudicated in Telangana)",
          "Two passport photographs, and the seller's link documents, 30-year EC, and approved plan / layout",
        ],
      },
      {
        heading: "Checks before you pay a token",
        body: [
          "Apartments and villas: TS RERA registration number of the project and the agent, sanctioned plan, occupancy certificate for ready units, and society formation. Plots: HMDA (inside HMDA limits) or DTCP layout approval, link documents for 30 years, EC, land classification on Pahani (must be non-agricultural or converted), and a physical walk of the plot against the survey sketch. We do the physical part in person and send you photos the same week.",
        ],
      },
      {
        heading: "Areas NRIs ask about",
        body: [
          "Flats and villas: Gachibowli, Kokapet, Tellapur, Nallagandla, Kompally, Miyapur, Bachupally. Plots: Shankarpally, Shadnagar, Chevella, Moinabad, Ghatkesar, Bhongir, and along the ORR growth corridors. Ancestral belts: Nalgonda, Siddipet, Warangal, Medak. Prices and approvals differ block by block; do not rely on a WhatsApp forward.",
        ],
      },
      {
        heading: "How does payment and a home loan work?",
        body: [
          "Pay in INR from NRE/NRO/FCNR accounts or by inward remittance; no cash. Indian banks lend to NRIs against salary and credit history abroad; EMIs are repaid from NRE/NRO. TDS of 1% applies to purchases above ₹50 lakh from a resident seller; if the seller is also an NRI, Section 195 TDS applies instead — get a CA involved before you sign.",
        ],
      },
      {
        heading: "Your Bhoomi's buying desk",
        body: [
          "The Buy desk is launching in phases. Today we already do the ground work for buyers: title and EC review, plot walk with photos, RERA/HMDA verification, and standing in at the SRO with your POA. Leave your details on the coming-soon page to be first in line for the full service.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can an NRI buy a farmhouse near Hyderabad?",
        a: "No. Farmhouses on agricultural land are prohibited for NRIs and OCIs under FEMA. A villa on converted, non-agricultural land inside an approved layout is allowed — check the land classification on Pahani first.",
      },
      {
        q: "Do I need to be in India to register the purchase?",
        a: "No. A registered Special POA lets your representative sign and register for you. Sign it at the consulate or before a notary with apostille, courier the original, and adjudicate it in Telangana within three months of arrival.",
      },
      {
        q: "What is a safe way to pay a token from abroad?",
        a: "Only after title review, and only by bank transfer from your NRE/NRO account against a signed agreement of sale that names the property schedule. Never cash, never to an intermediary's personal account.",
      },
    ],
    ctaMessage: "Hi, I'm an NRI planning to buy property in Hyderabad. Can you check a property for me?",
    guides: ["agricultural-land-rules-for-nris", "power-of-attorney-for-nris", "encumbrance-certificate-telangana", "bhu-bharati-portal-for-nris"],
  },
  {
    key: "sell",
    label: "Sell",
    title: "NRI Selling Property in Hyderabad from the USA, UK or Gulf: TDS, POA, Repatriation",
    description:
      "Step-by-step for NRIs selling a flat, plot, or inherited land in Hyderabad without flying home: paperwork clean-up, POA, TDS under Section 195, lower deduction certificate, NRO account, and Form 15CA/CB repatriation.",
    h1: "Selling property in Hyderabad as an NRI: the process, the tax, and getting the money home",
    answer:
      "An NRI can sell property in Hyderabad without travelling by giving a registered Special POA. The buyer deducts TDS under Section 195 — 12.5% plus surcharge and cess on long-term gains (sales after 23 July 2024), 30% on short-term — and pays into your NRO account, from which up to USD 1 million a year can be repatriated with Form 15CA/CB. Plan 2–6 months end to end.",
    sections: [
      {
        heading: "Step 1 — Clean the paperwork before you list",
        body: [
          "Buyers' banks reject NRI sales for missing paperwork more than for price. Line up: registered title deed and link documents, 30-year EC, mutation in your name (Pahani/1B on Bhu Bharati for land, GHMC record for urban property), tax receipts up to date, and for inherited property the legal-heir certificate and any release deeds from siblings. We do this clean-up in Hyderabad in 2–6 weeks.",
        ],
      },
      {
        heading: "Step 2 — Power of Attorney if you cannot travel",
        body: [
          "Sign a Special POA naming the property and the acts (agreement, sale deed, receipt of consideration, registration) before the Indian consulate or a notary with apostille; courier the original; adjudicate at the District Registrar and register it in Telangana. Some Hyderabad SROs insist the POA holder for a sale be a close relative — confirm before you draft.",
        ],
      },
      {
        heading: "Step 3 — TDS and the lower deduction certificate",
        body: [
          "The buyer must deduct TDS under Section 195 on the sale value: 12.5% plus surcharge and cess for long-term capital gains (property held more than 24 months, sold after 23 July 2024) and 30% plus surcharge and cess for short-term. Because that is on the whole sale price, apply for a lower/nil deduction certificate under Section 197 before signing so TDS matches your actual gain. Reinvestment under Sections 54/54EC can reduce tax — talk to a CA before agreeing the timeline.",
        ],
      },
      {
        heading: "Step 4 — Registration and payment",
        body: [
          "The buyer pays only into your NRO account (net of TDS) and gives you Form 16A. Registration at the SRO of jurisdiction with your POA holder present; stamp duty is the buyer's cost. Hand over originals only against full payment.",
        ],
      },
      {
        heading: "Step 5 — Repatriation",
        body: [
          "Your CA issues Form 15CB, you file Form 15CA online, and your bank remits up to USD 1 million per financial year from NRO. Above that needs RBI approval. Keep the sale deed, purchase deed, TDS certificate, and CA computation for the bank and for foreign-tax-credit claims under DTAA at home.",
        ],
      },
      {
        heading: "Selling inherited or agricultural land",
        body: [
          "Inherited agricultural land can be sold only to a resident Indian, and only after mutation in your name. Ancestral property with several heirs needs either all heirs signing (or POAs) or a partition/release deed first. We keep siblings on one bilingual summary so nobody signs blind.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much TDS will the buyer deduct if I sell my Hyderabad flat as an NRI?",
        a: "12.5% plus surcharge and cess on the sale consideration if held over 24 months (long-term, sale after 23 July 2024), or 30% plus surcharge and cess if short-term — unless you obtain a Section 197 lower-deduction certificate first.",
      },
      {
        q: "How long does it take to sell property in India as an NRI?",
        a: "Typically 2–6 months: paperwork clean-up 2–6 weeks, buyer search 1–3 months, registration 1–2 weeks, and repatriation paperwork 2–4 weeks after funds land in NRO.",
      },
      {
        q: "Can my brother in Hyderabad sell my flat with a POA?",
        a: "Yes, with a registered Special POA that names the property and authorises the sale acts. Consideration must still be paid into your NRO account, not his.",
      },
    ],
    ctaMessage: "Hi, I'm an NRI and want to sell my property in Hyderabad. Can you help with paperwork and POA?",
    guides: ["selling-and-repatriating-proceeds", "power-of-attorney-for-nris", "encumbrance-certificate-telangana", "legal-heir-and-succession-for-nris"],
  },
];

export const cities: City[] = [
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    updated: "2026-08-18",
    title: "NRI Property Services in Hyderabad — Watch, Manage, Buy, Sell, Transfer",
    description:
      "Your Bhoomi's Hyderabad desk for NRIs: land watch and encroachment alerts, property management, ancestral transfer, Bhu Bharati mutation, GHMC tax, and buying or selling from abroad — with an ID-verified local person and WhatsApp proof.",
    h1: "NRI property services in Hyderabad and Telangana — your man in the city, from Banjara Hills",
    answer:
      "Your Bhoomi is an NRI property desk based in Banjara Hills, Hyderabad. We watch, manage, transfer, and keep compliant plots, farmland, flats, and ancestral houses across Rangareddy, Medchal, Sangareddy, Nalgonda, Siddipet, and Warangal for families in the US, UK, Gulf, and APAC — and report on WhatsApp.",
    areas: [
      { name: "Rangareddy — Shankarpally, Chevella, Moinabad, Shadnagar", note: "Plots and farmland; boundary drift and unapproved layouts are the usual issues." },
      { name: "Medchal–Malkajgiri — Kompally, Ghatkesar, Keesara", note: "Growth-corridor plots and villas; HMDA approval and mutation gaps." },
      { name: "Sangareddy — Patancheru, Sadasivpet, Zaheerabad", note: "Ancestral farmland; passbook and Pahani corrections." },
      { name: "GHMC core — Gachibowli, Kokapet, Tellapur, Miyapur, Kukatpally", note: "Flats and villas; tenant management, society dues, GHMC tax, PTIN fixes." },
      { name: "Nalgonda, Siddipet, Warangal, Medak", note: "Ancestral belts; inheritance mutation, partition, encroachment watch." },
    ],
    offices: [
      { name: "Bhu Bharati / Tahsildar (MRO)", what: "Pahani, ROR-1B, passbook, mutation, demarcation, legal-heir certificate" },
      { name: "Sub-Registrar Office (SRO) & IGRS", what: "Sale, gift, partition, and POA registration; EC and certified copies" },
      { name: "MeeSeva", what: "Certificates, eKYC, application tracking" },
      { name: "GHMC / municipality / Gram Panchayat", what: "Property tax, PTIN, municipal mutation, building permissions" },
      { name: "HMDA / DTCP / TS RERA", what: "Layout and project approvals to verify before buying" },
    ],
    stats: [
      { n: "6", label: "districts live around Hyderabad" },
      { n: "< 24 h", label: "WhatsApp response" },
      { n: "30-yr", label: "EC pulled on every onboarding" },
      { n: "1", label: "advisor owning your thread" },
    ],
    faqs: [
      {
        q: "Where is Your Bhoomi's Hyderabad office?",
        a: "Banjara Hills, Hyderabad. Most work happens on WhatsApp and at the plot, MRO, SRO, or GHMC office in your property's mandal — we come to your property, not the other way round.",
      },
      {
        q: "Which Hyderabad areas do you cover for land watch?",
        a: "Rangareddy, Medchal–Malkajgiri, and Sangareddy districts fully; Nalgonda, Siddipet, Warangal, and Medak belts; and GHMC limits for flats and houses. Message us with the mandal for anywhere else in Telangana.",
      },
      {
        q: "Do you speak Telugu with my parents?",
        a: "Yes. Every summary goes out bilingual — Telugu (or Hindi) for parents in India, English for you — so the whole family reads the same page.",
      },
    ],
    intents: hyderabadIntents,
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
export const intentFor = (city: City, key: string) => city.intents.find((i) => i.key === key);
