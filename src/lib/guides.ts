import { telanganaGuides } from "@/lib/guides-telangana";

export type Guide = {
  slug: string;
  title: string;
  summary: string;
  readMinutes: number;
  published: string;
  sections: { heading: string; body: string[] }[];
  checklist: string[];
};

const coreGuides: Guide[] = [
  {
    slug: "power-of-attorney-for-nris",
    title: "Power of Attorney: managing property from abroad",
    summary:
      "How a Special Power of Attorney lets a trusted person act for you in India — what it can and cannot do, and how to execute one from overseas.",
    readMinutes: 6,
    published: "2026-08-01",
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
    published: "2026-08-01",
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
      "Gift, will, partition, or succession — which route fits your family, what it costs, and how to keep siblings aligned across generations.",
    readMinutes: 7,
    published: "2026-08-01",
    sections: [
      {
        heading: "Four primary routes for ancestral land transfer",
        body: [
          "1) Gift Deed: Ideal when parents are living and want an immediate title transfer. Blood relatives enjoy concessional stamp duty in states like Telangana (2%), AP, and Karnataka.",
          "2) Will: Takes effect only upon the testator's death. Requires probate in presidency towns (Mumbai, Kolkata, Chennai) or a legal heir succession process elsewhere.",
          "3) Partition Deed: Splits jointly inherited family land among co-parceners/co-heirs into distinct physical survey numbers with independent patta passbooks.",
          "4) Succession / Intestate Transfer: Followed when no valid will exists. Requires a Legal Heir Certificate or Family Member Certificate issued by the Tahsildar via MeeSeva before revenue records can be updated.",
        ],
      },
      {
        heading: "Keeping NRI siblings and resident parents aligned",
        body: [
          "Family property transfers stall most frequently over informal misunderstandings rather than legal roadblocks. Compile a unified property schedule listing survey numbers, extent in acres/guntas, current Pahani/1B status, and Encumbrance Certificate entries into a single shared document before drafting deeds.",
          "Your Bhoomi prepares clear bilingual summaries in English and local languages so parents in India and NRI siblings abroad read from the exact same page before booking a Sub-Registrar appointment.",
        ],
      },
      {
        heading: "Post-registration: revenue mutation & tax record updates",
        body: [
          "Sub-Registrar deed execution is only the midpoint of a successful transfer. Following registration, file for revenue mutation on Bhu Bharati or MeeSeva to obtain an updated Pattadar Passbook, ROR-1B, and Pahani entry.",
          "Ensure municipal tax assessment cards (PTIN) and utility accounts are updated to the new owner's name to prevent administrative disputes or future title challenges.",
        ],
      },
    ],
    checklist: [
      "Verified family tree with government photo IDs of all co-heirs",
      "Existing registered deeds, Pahani, ROR-1B, and 30-year EC",
      "Agreed share breakdown signed in writing by all co-parceners",
      "State-specific stamp duty and registration fee calculation",
      "Power of Attorney consular attestation for non-resident heirs",
    ],
  },
  {
    slug: "encroachment-and-boundary-disputes",
    title: "Encroachment: spotting it early and acting fast",
    summary:
      "The most common NRI land loss is gradual: a neighbour's fence moving a metre per year. How to monitor, document, and legally protect vacant plots.",
    readMinutes: 6,
    published: "2026-08-01",
    sections: [
      {
        heading: "Why vacant NRI land invites encroachment",
        body: [
          "Unfenced plots without visible caretakers or active municipal records are frequently targeted by land grabbers and encroachers. Over time, boundary stones vanish, informal footpaths turn into public access roads, and temporary sheds evolve into unauthorized permanent structures.",
          "Under Indian property law, adverse possession claims can mature after 12 years of continuous, uninterrupted possession. Immediate action upon detecting boundary movement or unauthorized occupation is vital to preserve your title.",
        ],
      },
      {
        heading: "How to audit and document boundaries from abroad",
        body: [
          "Commission a licensed land survey with high-precision GPS boundary coordinates, then establish permanent RCC boundary posts or a compound wall. Take dated, geo-tagged photos from identical plot corners during every inspection.",
          "Maintain a continuous chronological photo audit log alongside annual Encumbrance Certificate (EC) pulls and Pahani record verification. This evidentiary paper trail is crucial when presenting cases before the Revenue Divisional Officer (RDO) or civil courts.",
        ],
      },
      {
        heading: "Legal escalation steps in proper sequence",
        body: [
          "1) Issue a formal legal notice drafted by an advocate specializing in land revenue.",
          "2) File an application with the Tahsildar / MRO for official boundary demarcation and survey.",
          "3) Submit a formal police complaint under relevant IPC/BNS sections for criminal trespass.",
          "4) Petition the civil court for a temporary and permanent injunction against the encroacher.",
          "Your Bhoomi coordinates on-ground land surveys, attorney notices, and MRO hearings without requiring you to travel to India.",
        ],
      },
    ],
    checklist: [
      "Official survey sketch and high-precision GPS boundary coordinates",
      "RCC boundary stones or compound wall with prominent ownership signboard",
      "Dated corner photo archive updated quarterly",
      "Local field representative or scheduled property watch",
      "Legal notice template and advocate contact ready",
    ],
  },
  {
    slug: "selling-and-repatriating-proceeds",
    title: "Selling property as an NRI and repatriating the money",
    summary:
      "TDS, capital gains, NRO accounts, and the Form 15CA/CB path — what to line up before you accept an offer.",
    readMinutes: 6,
    published: "2026-08-01",
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
    readMinutes: 5,
    published: "2026-08-01",
    sections: [
      {
        heading: "Annual compliance tasks",
        body: [
          "Deposit municipal/house property tax (GHMC, Gram Panchayat, or local municipal body) before early-bird deadlines. Pull a fresh 13-year or 30-year Encumbrance Certificate (EC) to confirm no unauthorized transactions or liens have been registered.",
          "Verify Pahani / ROR-1B land records on Bhu Bharati to ensure your name remains correctly reflected in the revenue register. If the property generates rental income, file your annual Indian Income Tax Return (ITR) to claim TDS refunds under Section 195.",
        ],
      },
      {
        heading: "Ongoing operational maintenance",
        body: [
          "Maintain active utility connections (electricity, water, drainage) in the primary owner's name to establish continuous municipal utility records.",
          "Ensure tenant agreements (11-month registered leases) are active with complete tenant KYC, Aadhaar verification, and monthly TDS deposit receipts (Form 16A). Schedule bi-annual physical land visits with dated geo-tagged photographs.",
        ],
      },
      {
        heading: "Multi-year milestone audits",
        body: [
          "Renew limited Special Power of Attorney (POA) instruments prior to expiration. Re-verify survey boundaries following major highway expansions, municipal re-zoning, or adjoining layout developments.",
          "Update municipal property tax assessment cards following family inheritance, partition deeds, or legal heir successions.",
        ],
      },
    ],
    checklist: [
      "Annual municipal tax payment receipts archived",
      "Fresh Encumbrance Certificate (EC) pulled yearly",
      "Electricity and water utility accounts in owner's name",
      "Bi-annual geo-tagged physical inspection photo logs",
      "Power of Attorney (POA) validity dates tracked",
    ],
  },
];

export const guides: Guide[] = [...coreGuides, ...telanganaGuides];

export function guideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}
