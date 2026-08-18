export type Faq = { q: string; a: string; topic: FaqTopic };

export const faqTopics = {
  service: "How Your Bhoomi works",
  hyderabad: "Hyderabad & Telangana",
  buy: "Buying as an NRI",
  sell: "Selling & repatriation",
  records: "Land records, mutation & POA",
  protect: "Encroachment & protection",
  tax: "Tax & rental income",
} as const;

export type FaqTopic = keyof typeof faqTopics;

export const faqs: Faq[] = [
  // ── How Your Bhoomi works ─────────────────────────────────────────
  {
    topic: "service",
    q: "Who exactly visits my property?",
    a: "A named local partner from your district — Aadhaar-verified, background-checked, and on our payroll or retainer. You get their name, photo, and ID before the first visit, and the same person stays on your file.",
  },
  {
    topic: "service",
    q: "How is this different from NoBroker or a listing portal?",
    a: "Portals help you list and search. We physically stand in for you: walking boundaries, collecting quotes, sitting at the registrar or MRO office, paying tax, and reporting back. Think of us as your broker who works for you, not for a deal.",
  },
  {
    topic: "service",
    q: "What does it cost?",
    a: "Bhoomi Watch starts with a fixed per-visit fee; Manage, Transact, and Comply are quoted per job with the government fees shown separately. Invoices are in INR with your currency alongside; pay from NRE/NRO or by card. See the pricing page for indicative ranges.",
  },
  {
    topic: "service",
    q: "How will I get updates?",
    a: "On WhatsApp, in plain language, with dated photos and receipts. Email summaries and a monthly PDF are available if you prefer.",
  },
  {
    topic: "service",
    q: "Which areas do you cover?",
    a: "Live belts today: Hyderabad region (Rangareddy, Medchal–Malkajgiri, Sangareddy, Nalgonda, Siddipet, Warangal), coastal Andhra (Guntur–Vijayawada), Coimbatore & Nilgiris, and Mysuru. Message us for other districts — we onboard partners city by city.",
  },
  {
    topic: "service",
    q: "Can I use Your Bhoomi if I already have a relative in Hyderabad?",
    a: "Yes — many families do both. Your relative stays the emotional point of contact; we do the visits, queues, and paperwork so the relationship is not strained by chores, and every action is documented for the whole family to see.",
  },
  {
    topic: "service",
    q: "Do you also buy, sell, or rent out property?",
    a: "Buy, Sell, and Rent & Land desks are launching in phases. Leave your details on the coming-soon page and we will message you the day they go live. Watch, Manage, Transfer, and Comply are live today.",
  },

  // ── Hyderabad & Telangana ─────────────────────────────────────────
  {
    topic: "hyderabad",
    q: "Is Dharani still used in Telangana?",
    a: "No. In 2025 Telangana replaced the Dharani portal with Bhu Bharati (bhubharati.telangana.gov.in) under the Bhu Bharati Act. Records migrated automatically; NRIs register with an international mobile number or an email-linked Aadhaar and can view Pahani, ROR-1B and passbook data online.",
  },
  {
    topic: "hyderabad",
    q: "How long does mutation take in Telangana now?",
    a: "Under Bhu Bharati, a routine mutation after registration is typically completed at the Tahsildar level within about 15–30 days, compared with months under Dharani. Corrections and inheritance mutations take longer because they need eKYC and heir certificates.",
  },
  {
    topic: "hyderabad",
    q: "Where do I get an encumbrance certificate (EC) for a Hyderabad property?",
    a: "From the Telangana Registration & Stamps (IGRS) portal or any MeeSeva centre. Ask for a 30-year EC when selling or transferring; it lists every registered transaction on the property and is the first thing a buyer's bank checks.",
  },
  {
    topic: "hyderabad",
    q: "What is the gift deed stamp duty in Telangana for family members?",
    a: "As of 2026, a gift deed to a family member (spouse, children, parents, siblings, grandchildren) attracts 2% stamp duty plus 0.5% registration fee (capped), versus 5% stamp duty for non-family gifts. Confirm the current figure on the IGRS site before drafting — rates change.",
  },
  {
    topic: "hyderabad",
    q: "Which Hyderabad areas do NRIs ask you about most?",
    a: "Plots and farmland in Shankarpally, Shadnagar, Chevella, Moinabad, Ghatkesar, and Bhongir; flats and villas in Gachibowli, Kokapet, Tellapur, Kompally, and Miyapur; and ancestral land in Nalgonda, Siddipet, Warangal, and Medak districts.",
  },
  {
    topic: "hyderabad",
    q: "How do I pay GHMC property tax from abroad?",
    a: "Online at ghmc.gov.in with your PTIN (Property Tax Identification Number); international cards and NRE/NRO net-banking work. Pay before 30 April for the early-bird rebate. If your PTIN is missing or the name is wrong, we get it corrected at the GHMC circle office.",
  },

  // ── Buying ────────────────────────────────────────────────────────
  {
    topic: "buy",
    q: "Can an NRI buy agricultural land in Telangana?",
    a: "No. FEMA bars NRIs and OCIs from buying agricultural land, plantation property, or farmhouses anywhere in India, including Telangana. NRIs can inherit agricultural land or receive it as a gift from a resident relative, and can keep land they owned before becoming NRI. Sub-registrar offices in Hyderabad ask NRI buyers for a FEMA declaration confirming the land is not agricultural.",
  },
  {
    topic: "buy",
    q: "What documents does an NRI need to buy property in Hyderabad?",
    a: "Passport and visa/OCI card, PAN, overseas address proof, Indian address proof if any, NRE/NRO account details for payment, two passport photos, and — if you are not present — a notarised and apostilled (or consulate-attested) Power of Attorney registered in Telangana within the deadline.",
  },
  {
    topic: "buy",
    q: "How should an NRI pay for property in India?",
    a: "Only through banking channels: inward remittance, or funds in NRE, NRO, or FCNR accounts. Cash and foreign-currency travellers' cheques are not permitted. Home loans from Indian banks are available to NRIs and are repaid from NRE/NRO accounts.",
  },
  {
    topic: "buy",
    q: "How do I check a Hyderabad builder or plot before paying a token?",
    a: "For apartments and villas: TS RERA registration number, approved plan, and occupancy certificate. For plots: HMDA/DTCP layout approval, link documents for 30 years, EC, and a physical boundary check against the survey sketch. We do the physical part and send photos the same week.",
  },

  // ── Selling ───────────────────────────────────────────────────────
  {
    topic: "sell",
    q: "How much TDS is deducted when an NRI sells property in India?",
    a: "The buyer must deduct TDS under Section 195: 12.5% (plus surcharge and cess) on long-term capital gains for sales after 23 July 2024, and 30% (plus surcharge and cess) on short-term gains. Apply for a lower/nil deduction certificate under Section 197 before the sale if your actual gain is small.",
  },
  {
    topic: "sell",
    q: "How do I repatriate money from a property sale in India?",
    a: "The buyer pays into your NRO account after TDS. Your CA issues Form 15CB, you file Form 15CA online, and the bank remits up to USD 1 million per financial year. Above that needs RBI approval. Keep the sale deed, TDS certificate (Form 16A), and purchase documents ready for the bank.",
  },
  {
    topic: "sell",
    q: "Can I sell my Hyderabad property without travelling to India?",
    a: "Yes, through a registered Special Power of Attorney given to a trusted person in India. Sign it before the Indian consulate or a notary with apostille, send the original to India, and have it adjudicated/stamped and registered here. Some sub-registrars insist the POA holder for a sale be a close relative — check before you draft.",
  },
  {
    topic: "sell",
    q: "How long does it take to sell property in India as an NRI?",
    a: "Typically 2–6 months end to end: paperwork clean-up (EC, mutation, tax receipts) 2–6 weeks, finding a buyer 1–3 months, registration 1–2 weeks, and repatriation paperwork 2–4 weeks after the money lands in your NRO account.",
  },
  {
    topic: "sell",
    q: "Can an NRI sell inherited agricultural land?",
    a: "Yes, but only to a resident Indian citizen — not to another NRI or OCI. Before listing, complete mutation in your name using the legal-heir or family-member certificate; buyers' banks will not proceed until the Pahani/1B shows you as pattadar.",
  },

  // ── Records, mutation, POA ────────────────────────────────────────
  {
    topic: "records",
    q: "Do I need a Power of Attorney?",
    a: "Not for watching or repairs. For registrations, mutation applications, and some tax matters, yes — a limited Special POA. We give you a state-specific draft and the consulate checklist. See the POA guide.",
  },
  {
    topic: "records",
    q: "How do I execute a Power of Attorney from the USA, UK, or Gulf?",
    a: "Sign before the Indian Embassy/Consulate, or before a local notary and get an apostille (Hague countries; Gulf countries need Indian embassy attestation). Courier the original to India; the POA must be adjudicated at the District Registrar and stamped within three months of arrival, then registered if it concerns immovable property.",
  },
  {
    topic: "records",
    q: "What is the difference between a sale deed and mutation?",
    a: "The registered sale or gift deed transfers ownership between people. Mutation updates the government's land record (Pahani, ROR-1B, pattadar passbook, or municipal property register) to show the new owner. Without mutation you cannot pay tax in your name, get a loan, or sell cleanly.",
  },
  {
    topic: "records",
    q: "How long does an ancestral transfer take?",
    a: "Where the family agrees and records are clean, gift deed to mutation typically takes 6–10 weeks. Missing mutation, disputed shares, or lost documents add time; we tell you where the file is every week.",
  },
  {
    topic: "records",
    q: "What is a legal heir certificate and where do I get it in Telangana?",
    a: "A certificate from the Tahsildar (MRO) via MeeSeva that lists the surviving heirs of a deceased owner. It is needed for inheritance mutation, bank claims, and property sale. NRIs apply through a POA holder; processing is typically 2–4 weeks. A family member certificate is often asked for alongside it.",
  },
  {
    topic: "records",
    q: "What documents should an NRI keep for land in Telangana?",
    a: "Registered deed (sale/gift/partition), 30-year EC, latest Pahani and ROR-1B from Bhu Bharati, pattadar passbook, survey sketch/FMB, tax receipts, and any POA. We build a digital vault of these and refresh the EC and Pahani every year.",
  },

  // ── Encroachment / protection ─────────────────────────────────────
  {
    topic: "protect",
    q: "What if you find encroachment?",
    a: "You get a same-day alert with photos, our recommended next step (notice, MRO demarcation, or legal), and an estimate. Nothing is filed without your go-ahead.",
  },
  {
    topic: "protect",
    q: "How do I protect a vacant plot in Hyderabad from land grabbing?",
    a: "Four things, in order: a licensed survey with boundary stones, a compound wall or fence with a name board, a visible caretaker or scheduled visits with dated photos, and current tax receipts and records in your name. Act within weeks of any intrusion — adverse possession claims mature at 12 years.",
  },
  {
    topic: "protect",
    q: "Someone built on my land while I was abroad. What now?",
    a: "Do not confront them through relatives. Get a dated photo record, apply to the MRO for demarcation, send a legal notice, and file a police complaint for trespass. A civil suit for possession and injunction follows if they do not vacate. We coordinate the survey, the notice, and the lawyer.",
  },

  // ── Tax & rental ──────────────────────────────────────────────────
  {
    topic: "tax",
    q: "How is rental income of an NRI taxed in India?",
    a: "As income from house property: gross rent minus municipal tax paid, minus a flat 30% standard deduction, minus home-loan interest. Tenants must deduct TDS at 30% plus surcharge and cess (about 31.2%) on every rupee paid to an NRI landlord and file Form 15CA/CB. You file an Indian return to claim refunds and DTAA credit at home.",
  },
  {
    topic: "tax",
    q: "Do I need to file an income-tax return in India for one small property?",
    a: "If rent, capital gains, or other Indian income exceeds the basic exemption limit, yes. Even below it, filing lets you claim back excess TDS deducted by tenants or buyers. Keep the PAN active and linked to Aadhaar where required.",
  },
  {
    topic: "tax",
    q: "What is due every year on an NRI-owned property in Telangana?",
    a: "Property tax (GHMC or Gram Panchayat), land revenue where applicable, an annual EC pull, utility bills in the owner's name, and — if rented — the tenant's TDS filings and your Indian return. See the compliance-calendar guide.",
  },
];

export const faqsByTopic = (topic: FaqTopic) => faqs.filter((f) => f.topic === topic);
