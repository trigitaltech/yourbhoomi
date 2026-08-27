export type MegaLink = {
  href: string;
  label: string;
  blurb?: string;
  accent?: "blue" | "green" | "yellow" | "red";
};

export type MegaColumn = {
  title: string;
  links: MegaLink[];
};

export type NavItem =
  | { kind: "link"; id: string; label: string; href: string }
  | {
      kind: "mega";
      id: string;
      label: string;
      href: string;
      columns: MegaColumn[];
      featured?: MegaLink & { cta: string };
    };

export const megaNav: NavItem[] = [
  {
    kind: "mega",
    id: "solutions",
    label: "Solutions",
    href: "/land-security",
    columns: [
      {
        title: "Protect & transfer",
        links: [
          { href: "/land-security", label: "Land Security", blurb: "Visits, boundaries, geo-tagged proof" },
          { href: "/land-transfer", label: "Land Transfer", blurb: "Gift, succession, mutation, POA" },
          { href: "/nri", label: "NRI Desk", blurb: "Time-zone calls and bilingual files" },
        ],
      },
      {
        title: "On the ground",
        links: [
          { href: "/services/watch", label: "Property monitoring", blurb: "Scheduled vacant-land visits" },
          { href: "/services/manage", label: "Home & tenant management", blurb: "Repairs and caretakers" },
          { href: "/services/comply", label: "Records & compliance", blurb: "Pahani, tax, encumbrance" },
        ],
      },
      {
        title: "Coming soon",
        links: [
          { href: "/coming-soon?for=buy", label: "Buy", blurb: "Verified listings with a site visit" },
          { href: "/coming-soon?for=sell", label: "Sell", blurb: "From abroad, without every flight" },
          { href: "/coming-soon?for=rent", label: "Rent & land", blurb: "Tenants and seasonal leases" },
        ],
      },
    ],
    featured: {
      href: "/land-risk-check",
      label: "Free Land Risk Check",
      blurb: "Twelve questions. A Land Security Score and the next three things to do.",
      cta: "Check my land",
    },
  },
  {
    kind: "mega",
    id: "services",
    label: "Services",
    href: "/#services",
    columns: [
      {
        title: "Live now",
        links: [
          { href: "/services/watch", label: "Bhoomi Watch", blurb: "Encroachment and boundary visits", accent: "blue" },
          { href: "/services/manage", label: "Bhoomi Manage", blurb: "Repairs, caretakers, tenants", accent: "green" },
          { href: "/services/transact", label: "Bhoomi Transact", blurb: "Ancestral gift, sale, partition", accent: "yellow" },
          { href: "/services/comply", label: "Bhoomi Comply", blurb: "Mutation, tax, survey maps", accent: "red" },
        ],
      },
      {
        title: "Land Security plans",
        links: [
          { href: "/land-security", label: "One-Time Security Check", blurb: "One visit, full report" },
          { href: "/land-security", label: "Bhoomi Watch plan", blurb: "Quarterly recurring visits" },
          { href: "/land-security", label: "Bhoomi Protect+", blurb: "Higher-risk or high-value land" },
        ],
      },
      {
        title: "Transfer desk",
        links: [
          { href: "/land-transfer", label: "Inheritance & succession", blurb: "Heirs onto the record" },
          { href: "/land-transfer", label: "Gift, sale & partition", blurb: "Registrar-day coordination" },
          { href: "/guides/power-of-attorney-for-nris", label: "Power of Attorney", blurb: "Sign from overseas" },
        ],
      },
    ],
    featured: {
      href: "/sample-report",
      label: "Sample Security Report",
      blurb: "See the 12-point checklist, geo-tagged photos, and recommendations you receive after every visit.",
      cta: "View sample",
    },
  },
  {
    kind: "mega",
    id: "tools",
    label: "Tools",
    href: "/land-risk-check",
    columns: [
      {
        title: "Checks",
        links: [
          { href: "/land-risk-check", label: "Land Risk Check", blurb: "Security score in two minutes" },
          { href: "/transfer-readiness", label: "Transfer Readiness", blurb: "Document and heir checklist" },
          { href: "/coverage", label: "Coverage checker", blurb: "Confirm your district is live" },
        ],
      },
      {
        title: "Evidence & compare",
        links: [
          { href: "/sample-report", label: "Sample report", blurb: "What every visit produces" },
          { href: "/nri-checklist", label: "NRI protection checklist", blurb: "25 checks for landowners abroad" },
          { href: "/compare", label: "Compare options", blurb: "Your Bhoomi vs relative vs DIY" },
        ],
      },
      {
        title: "NRI desks",
        links: [
          { href: "/nri", label: "NRI overview", blurb: "Time zones, POA, repatriation" },
          { href: "/nri/hyderabad", label: "Hyderabad desk", blurb: "Telangana plots, flats, farmland" },
          { href: "/nri/hyderabad/manage", label: "Manage in Hyderabad", blurb: "Watch, repairs, tenants" },
        ],
      },
    ],
    featured: {
      href: "/coverage",
      label: "Check coverage",
      blurb: "Telangana, Andhra Pradesh, Karnataka, and Tamil Nadu — search your district before you book.",
      cta: "Find my district",
    },
  },
  { kind: "link", id: "pricing", label: "Pricing", href: "/pricing" },
  {
    kind: "mega",
    id: "resources",
    label: "Resources",
    href: "/guides",
    columns: [
      {
        title: "Learn",
        links: [
          { href: "/guides", label: "Guides", blurb: "POA, mutation, transfer, tax" },
          { href: "/faq", label: "FAQ", blurb: "Direct answers NRIs ask first" },
          { href: "/glossary", label: "Glossary", blurb: "Pahani, EC, 1B, TDS, FEMA" },
        ],
      },
      {
        title: "Core guides",
        links: [
          { href: "/guides/power-of-attorney-for-nris", label: "Power of Attorney" },
          { href: "/guides/mutation-and-record-of-rights", label: "Mutation & Record of Rights" },
          { href: "/guides/ancestral-property-transfer", label: "Ancestral transfer" },
          { href: "/guides/encroachment-and-boundary-disputes", label: "Encroachment" },
        ],
      },
      {
        title: "Telangana",
        links: [
          { href: "/guides/bhu-bharati-portal-for-nris", label: "Bhu Bharati for NRIs" },
          { href: "/guides/encumbrance-certificate-telangana", label: "Encumbrance certificate" },
          { href: "/guides/gift-deed-stamp-duty-telangana", label: "Gift deed stamp duty" },
          { href: "/guides/legal-heir-and-succession-for-nris", label: "Legal heir & succession" },
        ],
      },
    ],
    featured: {
      href: "/about",
      label: "About Your Bhoomi",
      blurb: "A named person in the city for the land you left behind. Banjara Hills, Hyderabad.",
      cta: "Meet the desk",
    },
  },
];

export const searchSuggestions = [
  { href: "/land-security", label: "Land Security" },
  { href: "/land-transfer", label: "Land Transfer" },
  { href: "/land-risk-check", label: "Land Risk Check" },
  { href: "/guides/power-of-attorney-for-nris", label: "Power of Attorney" },
  { href: "/guides/mutation-and-record-of-rights", label: "Mutation" },
  { href: "/coverage", label: "Coverage" },
  { href: "/pricing", label: "Pricing" },
  { href: "/glossary", label: "Glossary" },
];

export const heroJumps = [
  { href: "#services", label: "What's included" },
  { href: "#how", label: "How it works" },
  { href: "#coverage", label: "Coverage" },
  { href: "#pricing", label: "Plans & pricing" },
  { href: "#faq", label: "FAQs" },
];
