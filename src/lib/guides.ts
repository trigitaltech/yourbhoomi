export type Guide = {
  slug: string;
  title: string;
  summary: string;
  readMinutes: number;
  sections: { heading: string; body: string[] }[];
  checklist: string[];
};

export const guides: Guide[] = [
  {
    slug: "power-of-attorney-for-nris",
    title: "Power of Attorney: managing property from abroad",
    summary:
      "How a Special Power of Attorney lets a trusted person act for you in India — what it can and cannot do, and how to execute one from overseas.",
    readMinutes: 6,
    sections: [
      {
        heading: "Why NRIs need a POA",
        body: [
          "Registrations, mutations, tax payments, and court filings usually need a physical signature in India. A Power of Attorney (POA) lets a named person do a defined list of tasks on your behalf.",
          "Prefer a Special POA limited to specific properties and specific acts (for example: apply for mutation, pay property tax, represent before the Tahsildar) over a General POA that hands over everything.",
        ],
      },
      {
        heading: "Executing a POA from overseas",
        body: [
          "Sign the POA before the Indian Embassy or Consulate, or before a local notary followed by apostille (Hague Convention countries) — then have it adjudicated/stamped in India within the state's time limit (typically 3 months from receipt).",
          "Some states now require the POA holder to be a close relative for sale transactions. Check the current rule for the state where the land sits before drafting.",
        ],
      },
      {
        heading: "How Your Bhoomi helps",
        body: [
          "We share a state-specific draft, coordinate the consulate appointment checklist, and handle adjudication and registration at the Sub-Registrar office. Your named person — or our verified partner as a limited-purpose holder — then acts only within the listed powers.",
        ],
      },
    ],
    checklist: [
      "Property schedule with survey / door numbers",
      "Passport and overseas address proof",
      "Two witnesses at signing",
      "Consulate attestation or notary + apostille",
      "Adjudication in India within the deadline",
    ],
  },
  {
    slug: "mutation-and-record-of-rights",
    title: "Mutation, Pahani and Record of Rights explained",
    summary:
      "Owning the sale deed is not enough. Learn what mutation is, why NRIs discover 20-year-old gaps, and how to fix them.",
    readMinutes: 5,
    sections: [
      {
        heading: "Deed vs. record",
        body: [
          "A registered sale or gift deed transfers title. Mutation is the separate step where the revenue department updates its land records (Pahani/Adangal, ROR-1B, Patta) to your name. Without it, tax receipts, bank loans, and future sales stall.",
        ],
      },
      {
        heading: "Common NRI gaps",
        body: [
          "Land inherited from parents but still in a grandparent's name; a purchase from the 2000s never mutated; survey numbers split or renumbered after digitisation. Each shows up only when you try to sell or transfer.",
        ],
      },
      {
        heading: "Fixing it",
        body: [
          "File a mutation application with the deed, legal-heir certificate (for inheritance), and ID; attend or be represented at the enquiry; collect the corrected Pahani/Patta. We track it office by office and send you the stamped copy.",
        ],
      },
    ],
    checklist: [
      "Registered deed or succession documents",
      "Legal heir / family member certificate",
      "Latest tax receipt",
      "Encumbrance certificate (EC)",
      "POA if you cannot attend",
    ],
  },
  {
    slug: "ancestral-property-transfer",
    title: "Transferring ancestral property between generations",
    summary:
      "Gift, will, partition, or succession — which route fits your family, what it costs, and how to keep siblings aligned.",
    readMinutes: 7,
    sections: [
      {
        heading: "Four routes",
        body: [
          "Gift deed (parents alive, immediate transfer, concessional stamp duty for blood relatives in most states). Will (takes effect on death; needs probate or a succession process). Partition deed (splits joint family land among co-owners). Succession (no will — legal heirs share per personal law).",
        ],
      },
      {
        heading: "The sibling conversation",
        body: [
          "Most delays are not legal, they are family. Put the plot list, current record status, and proposed shares in one shared document before anyone signs anything. We prepare bilingual summaries so parents and NRI children read the same page.",
        ],
      },
      {
        heading: "After registration",
        body: [
          "Registration is the middle of the process, not the end. Mutation, tax name change, and survey map updates follow — see the mutation guide.",
        ],
      },
    ],
    checklist: [
      "Family tree with IDs",
      "Existing deeds and Pahani for each survey number",
      "Agreed shares in writing",
      "Stamp duty estimate for the state",
      "Registrar appointment and witnesses",
    ],
  },
  {
    slug: "encroachment-and-boundary-disputes",
    title: "Encroachment: spotting it early and acting fast",
    summary:
      "The most common NRI loss is slow: a neighbour's fence that moves a metre a year. Here is how to watch, document, and respond.",
    readMinutes: 5,
    sections: [
      {
        heading: "Why vacant land invites it",
        body: [
          "Unfenced plots with no visible caretaker are read as unclaimed. Boundary stones vanish, a track becomes a road, a shed becomes a house.",
        ],
      },
      {
        heading: "Watch and document",
        body: [
          "Get a licensed survey with GPS coordinates once, then take dated photos from the same corners on every visit. That before/after pair is what wins at the Tahsildar's office and in court.",
        ],
      },
      {
        heading: "Respond in the right order",
        body: [
          "Written notice, then a complaint to the Tahsildar/MRO for demarcation, then civil injunction if needed. Physical confrontation by relatives usually makes things worse — a verified local representative and a paper trail work better.",
        ],
      },
    ],
    checklist: [
      "Survey sketch and GPS boundary",
      "Fence or compound wall with stones",
      "Dated corner photos each visit",
      "Local caretaker or scheduled watch",
      "Legal notice template ready",
    ],
  },
  {
    slug: "selling-and-repatriating-proceeds",
    title: "Selling property as an NRI and repatriating the money",
    summary:
      "TDS, capital gains, NRO accounts, and the Form 15CA/CB path — what to line up before you accept an offer.",
    readMinutes: 6,
    sections: [
      {
        heading: "Before you list",
        body: [
          "Clean title (EC for 30 years), mutation in your name, and tax receipts up to date. Buyers' banks reject NRI sales for missing paperwork more than for price.",
        ],
      },
      {
        heading: "Tax at sale",
        body: [
          "The buyer deducts TDS on the sale value for NRI sellers (rates depend on holding period). You can apply for a lower-deduction certificate in advance. Long-term capital gains may be reinvested to save tax — talk to a CA before agreeing the timeline.",
        ],
      },
      {
        heading: "Getting the money out",
        body: [
          "Proceeds land in your NRO account. Repatriation of up to USD 1 million per financial year is generally allowed with a CA certificate (Form 15CB) and Form 15CA filed with the bank. Agricultural land has additional restrictions on who can buy it.",
        ],
      },
    ],
    checklist: [
      "30-year EC and clear mutation",
      "PAN and NRO account",
      "Lower TDS certificate (optional)",
      "CA for 15CA/15CB",
      "Buyer eligibility check for agricultural land",
    ],
  },
  {
    slug: "property-tax-and-compliance-calendar",
    title: "The NRI property compliance calendar",
    summary:
      "What is due when — property tax, water and electricity, tenant KYC, and the records to refresh every year so nothing lapses.",
    readMinutes: 4,
    sections: [
      {
        heading: "Annual",
        body: [
          "Property/house tax (municipal or Gram Panchayat), land revenue where applicable, income-tax return in India if you have rental income, and a fresh EC pull to catch any surprise entries.",
        ],
      },
      {
        heading: "Ongoing",
        body: [
          "Electricity and water in your name; tenant agreements registered where required; a physical visit at least twice a year with dated photos.",
        ],
      },
      {
        heading: "Every few years",
        body: [
          "Renew POA if time-limited, update survey maps after any adjoining development, and confirm the record still matches the family after births, deaths, or marriages.",
        ],
      },
    ],
    checklist: [
      "Tax receipts filed by year",
      "EC pulled annually",
      "Utility bills in owner name",
      "Two documented visits a year",
      "POA validity date",
    ],
  },
];

export function guideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}
