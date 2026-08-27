import type { Guide } from "@/lib/guides";

// Hyderabad / Telangana-specific guides, added 18 Aug 2026 from the keyword map (docs/seo/keyword-map.md).
export const telanganaGuides: Guide[] = [
  {
    slug: "bhu-bharati-portal-for-nris",
    title: "Bhu Bharati (ex-Dharani) for NRIs: land records in Telangana",
    summary:
      "Telangana replaced Dharani with Bhu Bharati in 2025. How an NRI registers, reads Pahani and ROR-1B, fixes passbook errors, and applies for mutation from abroad.",
    readMinutes: 6,
    published: "2026-08-18",
    sections: [
      {
        heading: "Is Dharani still used in Telangana?",
        body: [
          "No. Under the Telangana Bhu Bharati (Record of Rights in Land) Act, the state moved land records from the Dharani portal to Bhu Bharati (bhubharati.telangana.gov.in) in 2025. Existing records migrated automatically; your survey numbers, Pahani, ROR-1B and pattadar passbook data are the same, but services now route through the Tahsildar (MRO) with appeal rights that Dharani lacked.",
        ],
      },
      {
        heading: "How does an NRI register on Bhu Bharati?",
        body: [
          "Choose the NRI role at sign-up. Verification works with an international mobile number or an email-linked Aadhaar; keep your Aadhaar-linked email active. Once logged in you can view Pahani (crop and cultivation record), ROR-1B (ownership record), village maps, and passbook details for any survey number you own.",
          "Services that change the record — general mutation, passbook data correction, succession — require eKYC, which can be completed at a MeeSeva centre or on the platform by your POA holder.",
        ],
      },
      {
        heading: "How long does mutation take now?",
        body: [
          "A routine post-registration mutation is typically approved at the Tahsildar level within about 15–30 days. Inheritance and correction cases take longer because they need legal-heir or family-member certificates and a field enquiry. If a case is rejected you can appeal to the RDO — something Dharani did not allow.",
        ],
      },
      {
        heading: "How Your Bhoomi helps",
        body: [
          "We pull your Pahani and 1B once a year, flag mismatches (spelling, extent, missing survey numbers, wrong classification), and file corrections through MeeSeva with your POA holder or our verified partner. Every acknowledgement and stamped copy is sent to you on WhatsApp.",
        ],
      },
    ],
    checklist: [
      "Bhu Bharati login (NRI role) with working email/mobile",
      "Latest Pahani and ROR-1B for every survey number",
      "Pattadar passbook number",
      "eKYC completed by owner or POA holder",
      "Annual record check on your calendar",
    ],
  },
  {
    slug: "agricultural-land-rules-for-nris",
    title: "Can an NRI buy or keep agricultural land in India?",
    summary:
      "FEMA rules on farmland, plantations and farmhouses for NRIs and OCIs — what you cannot buy, what you can inherit or receive as a gift, and how to sell it later.",
    readMinutes: 5,
    published: "2026-08-18",
    sections: [
      {
        heading: "Can an NRI buy agricultural land in Telangana or anywhere in India?",
        body: [
          "No. FEMA and the RBI's rules prohibit NRIs and OCIs from purchasing agricultural land, plantation property, or farmhouses in India — even where a state (like Telangana) lets any Indian citizen buy farmland. Sub-registrar offices around Hyderabad ask NRI buyers to sign a FEMA declaration that the property is not agricultural.",
        ],
      },
      {
        heading: "What can an NRI legally hold?",
        body: [
          "You may inherit agricultural land from a resident, receive it as a gift from a resident relative, and keep land you already owned before you became an NRI. There is no cap on residential or commercial property.",
        ],
      },
      {
        heading: "Can I sell inherited farmland?",
        body: [
          "Yes, but only to a resident Indian citizen — not to another NRI or OCI. Complete mutation in your name first (see the mutation guide) or the buyer's bank will stall. Sale proceeds go to your NRO account and follow the normal repatriation route.",
        ],
      },
      {
        heading: "What if I already bought farmland as an NRI?",
        body: [
          "The purchase can be treated as a FEMA contravention. The usual path is compounding with the RBI and, if required, transferring the land to a resident. Speak to a FEMA-aware CA or lawyer before doing anything else; we can coordinate the local records side.",
        ],
      },
    ],
    checklist: [
      "Confirm land classification on Pahani (agricultural vs converted)",
      "Inheritance / gift documents proving how you got it",
      "Mutation in your name before any sale",
      "Buyer is a resident Indian citizen",
      "FEMA declaration at the SRO for any purchase",
    ],
  },
  {
    slug: "encumbrance-certificate-telangana",
    title: "Encumbrance certificate (EC) in Telangana: how to get it from abroad",
    summary:
      "What a 30-year EC shows, how to download it from the IGRS portal or MeeSeva, and why every NRI should pull one every year.",
    readMinutes: 5,
    published: "2026-08-18",
    sections: [
      {
        heading: "What is an encumbrance certificate?",
        body: [
          "An Encumbrance Certificate (EC) is an official document issued by the Telangana Registration & Stamps Department listing every registered transaction — including sale deeds, gift deeds, mortgages, lease agreements, court attachments, and release deeds — recorded against a specific land survey number or door number over a selected timeline.",
          "A clean 30-year EC confirms that the land has no undisclosed bank loans, third-party sales, or fraudulent transfers. A surprise entry on your EC is often the first indicator of land grabbing, impersonation, or unauthorized transaction attempt on an NRI-owned plot.",
        ],
      },
      {
        heading: "How do I get an EC for a Hyderabad or Telangana property?",
        body: [
          "NRIs can request digitally signed Encumbrance Certificates online via the Telangana IGRS portal (registration.telangana.gov.in) using the document registration number, SRO jurisdiction, or survey/door number. Alternatively, an EC can be pulled physically via MeeSeva centres or directly from the Sub-Registrar Office (SRO).",
          "When selling, gifting, or applying for a mortgage, buyers' banks and legal counsel require a full 30-year search history. For routine annual property checks, a 13-year or 20-year search history is sufficient to confirm clean title continuity. Digitally signed EC copies issued by IGRS are legally valid for all transactions.",
        ],
      },
      {
        heading: "What if the EC shows a transaction I do not recognize?",
        body: [
          "If an unrecognized entry appears on your EC, immediately request a certified copy (CC) of that registered deed from the concerned Sub-Registrar Office (SRO) to inspect the signatures, photographs, and thumb impressions recorded at registration.",
          "If fraud or impersonation is verified, file a criminal complaint for forgery and trespass, apply to the District Registrar or Tahsildar for verification, and initiate a civil suit for cancellation of the fraudulent deed. Quick legal action is essential because unauthorized buyers frequently attempt rapid secondary sales to third parties.",
        ],
      },
      {
        heading: "How Your Bhoomi simplifies EC pulls for NRIs",
        body: [
          "Your Bhoomi conducts automated annual EC pulls for your property across Telangana, audits every transaction entry against your ownership papers, and archives digitally verified EC copies in your secure digital vault accessible on WhatsApp.",
        ],
      },
    ],
    checklist: [
      "Document number or survey/door number handy",
      "30-year EC before any property transaction or transfer",
      "Annual EC pull schedule on your compliance calendar",
      "Certified copies (CC) retrieved for any unknown entries",
      "SRO jurisdiction confirmed for Rangareddy, Medchal, Sangareddy, or Nalgonda",
    ],
  },
  {
    slug: "gift-deed-stamp-duty-telangana",
    title: "Gift deed to family in Telangana: stamp duty and process (2026)",
    summary:
      "Parents gifting to NRI children is the most common transfer we handle. Current stamp duty, who counts as family, and how to register from abroad.",
    readMinutes: 5,
    published: "2026-08-18",
    sections: [
      {
        heading: "What is the stamp duty on a gift deed to a family member in Telangana?",
        body: [
          "As of 2026: 2% stamp duty plus 0.5% registration fee (subject to caps) when the donee is a family member — spouse, children, parents, siblings, grandchildren. Gifts to anyone else attract 5% stamp duty. Rates are set by the Telangana Registration & Stamps department (IGRS) and change; check the live schedule before you draft.",
        ],
      },
      {
        heading: "Can an NRI receive a gift of property in India?",
        body: [
          "Yes — an NRI can receive residential, commercial, and even agricultural land as a gift from a resident relative. Income-tax is nil on gifts from specified relatives. The gift is registered at the sub-registrar office of the property's jurisdiction; the donee can be represented by a POA holder.",
        ],
      },
      {
        heading: "Step by step from abroad",
        body: [
          "1) Family agrees the plot list and shares in writing. 2) Draft the deed with the property schedule from the latest 1B/EC. 3) Pay stamp duty online (e-Stamp / challan). 4) Book the SRO slot; donor and donee (or POA holder) attend with witnesses. 5) Register, then apply for mutation on Bhu Bharati or at GHMC. 6) Update tax and utility records.",
        ],
      },
    ],
    checklist: [
      "Relationship proof (birth certificate, passport, Aadhaar)",
      "Latest 1B / EC for the property schedule",
      "Stamp duty estimate from IGRS",
      "Registered POA if donee is abroad",
      "Mutation filed after registration",
    ],
  },
  {
    slug: "legal-heir-and-succession-for-nris",
    title: "Legal heir certificate, family member certificate and succession for NRIs in Telangana",
    summary:
      "When a parent passes away without a will: which certificate you need, where MeeSeva fits in, and how siblings abroad complete inheritance mutation.",
    readMinutes: 6,
    published: "2026-08-18",
    sections: [
      {
        heading: "Which certificate do I need?",
        body: [
          "A legal heir certificate (from the Tahsildar via MeeSeva) lists surviving heirs and is what the revenue department, banks, and insurers ask for. A family member certificate (also via MeeSeva) confirms nobody has been left out — often demanded when an heir lives abroad. A succession certificate is a civil-court order for debts and securities, rarely needed for land.",
        ],
      },
      {
        heading: "How does an NRI apply from abroad?",
        body: [
          "Through a POA holder or a resident sibling. Documents: death certificate, applicant ID, deceased's ID and address proof, ration card or family proof, and an affidavit listing all heirs. Processing is typically 2–4 weeks after the field enquiry. Discrepancies in names across passports and Aadhaar are the most common cause of delay.",
        ],
      },
      {
        heading: "After the certificate: inheritance mutation",
        body: [
          "File on Bhu Bharati (agricultural land) or with GHMC / the municipality (urban property) with the certificate and the deceased's title documents. If heirs want unequal shares, register a partition or release deed; if they want one heir to hold everything, the others sign a release deed. We prepare bilingual summaries so parents and NRI children read the same page.",
        ],
      },
    ],
    checklist: [
      "Death certificate (English or translated)",
      "IDs of all heirs with matching spellings",
      "Affidavit listing every heir",
      "POA for the applicant abroad",
      "Mutation filed after certificate issue",
    ],
  },
  {
    slug: "renting-out-property-as-an-nri",
    title: "Renting out your Hyderabad property as an NRI: tax, TDS and tenants",
    summary:
      "How rental income is taxed for NRIs, the 30% TDS every tenant must deduct, Form 15CA/CB, and how to manage tenants without a relative chasing rent.",
    readMinutes: 6,
    published: "2026-08-18",
    sections: [
      {
        heading: "How is an NRI's rental income taxed?",
        body: [
          "As income from house property: gross rent minus municipal taxes paid, minus a flat 30% standard deduction, minus home-loan interest. The net figure is taxed at slab rates when you file your Indian return. Most NRIs get a refund because TDS is deducted at a higher rate than their final liability.",
        ],
      },
      {
        heading: "What TDS must my tenant deduct?",
        body: [
          "Under Section 195 the tenant of an NRI landlord must deduct TDS at 30% plus surcharge and 4% cess (about 31.2%) on every rupee of rent — there is no ₹50,000/month threshold as there is for resident landlords. The tenant needs a TAN, deposits the tax monthly, files Form 15CA (and 15CB via a CA above ₹5 lakh), and issues you Form 16A. Rent should be paid into your NRO account.",
        ],
      },
      {
        heading: "Managing tenants from abroad",
        body: [
          "Use a registered rental agreement (11 months or longer, registered at the SRO where required), tenant KYC with Aadhaar and employer verification, a security deposit of 2–3 months in Hyderabad, and rent to NRO by standing instruction. Our Manage desk does move-in/move-out inspections, quarterly checks, and repairs, and follows up TDS certificates so your return is easy.",
        ],
      },
    ],
    checklist: [
      "Registered rental agreement",
      "Tenant KYC and police verification (where applicable)",
      "Rent to NRO by standing instruction",
      "Tenant's TAN and monthly TDS deposit",
      "Form 16A collected quarterly",
    ],
  },
  {
    slug: "ghmc-property-tax-for-nris",
    title: "GHMC property tax for NRIs: PTIN, paying online, and fixing the name",
    summary:
      "How to find your PTIN, pay Greater Hyderabad property tax from abroad, claim the early-bird rebate, and correct a wrong name or assessment.",
    readMinutes: 5,
    published: "2026-08-18",
    sections: [
      {
        heading: "How do I pay GHMC property tax from abroad?",
        body: [
          "NRI property owners can pay Greater Hyderabad Municipal Corporation (GHMC) property tax online at ghmc.gov.in or through the MyGHMC portal using their unique 10-digit Property Tax Identification Number (PTIN). International credit/debit cards and net-banking from NRE or NRO accounts are supported.",
          "Property tax payments completed prior to April 30th qualify for GHMC's 5% Early Bird Rebate scheme. For properties outside GHMC boundaries (such as Gram Panchayats or municipalities in Rangareddy, Medchal, or Sangareddy), tax payments must often be deposited in person — Your Bhoomi field representatives handle in-person municipal tax deposits and deliver receipt copies directly on WhatsApp.",
        ],
      },
      {
        heading: "The name on the tax record is my father's. Does it matter?",
        body: [
          "Yes. Municipal record mutation (updating the tax assessment register from a deceased parent or seller to the current owner) is a distinct requirement from revenue land record mutation. Up-to-date municipal tax records in the current owner's name are mandatory for clear title verification during property sales, bank loan approvals, and legal disputes.",
          "To correct or mutate municipal property tax records, file an application at the respective GHMC Circle Office along with registered sale/gift deeds, legal heir certificates, and tax clearing receipts. Your Bhoomi handles municipal office submissions and follows up until the tax assessment card is updated.",
        ],
      },
      {
        heading: "Why keep every annual municipal receipt?",
        body: [
          "Consecutive annual property tax payment receipts serve as authoritative documentary proof of continuous physical possession and ownership in municipal records. They are also allowable tax deductions against rental income in Indian income tax filings.",
        ],
      },
    ],
    checklist: [
      "10-digit PTIN located or applied for via GHMC Circle Office",
      "Property tax deposited prior to the April 30th Early Bird deadline",
      "Municipal assessment register mutated to current owner's name",
      "Consecutive annual payment receipts archived in your digital vault",
      "Gram Panchayat or municipal circle office receipts verified",
    ],
  },
];
