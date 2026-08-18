export const site = {
  name: "Your Bhoomi",
  legalName: "Your Bhoomi",
  tagline: "Your man in the city, for the land you left behind",
  subline:
    "Protect, monitor and transfer your land in India without flying home. Verified inspections, photo and video evidence, document support, transfer coordination and regular WhatsApp updates.",
  url: "https://yourbhoomi.com",
  email: "hello@yourbhoomi.com",
  phone: "+91 40 4000 1200",
  // ponytail: single WhatsApp business number; swap for a per-city router later
  whatsapp: "914040001200",
  address: "Banjara Hills, Hyderabad",
  city: "Hyderabad",
  region: "Telangana",
  country: "IN",
  geo: { latitude: 17.4126, longitude: 78.4484 },
  coverage: ["Telangana", "Andhra Pradesh", "Tamil Nadu", "Karnataka"],
  nriHubs: ["United States", "United Kingdom", "United Arab Emirates", "Singapore", "Australia", "Canada"],
  logo: "https://yourbhoomi.com/icons/icon-512.png",
  // Kept for the phase when Buy/Sell go live on Nipige.
  nipigeBuy: "https://nipige.com/buy",
  nipigeSell: "https://nipige.com/sell",
};

export function waLink(message = "Hi Your Bhoomi, I need help with my property in India.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Features shipping in later phases. Each gets a coming-soon page at /coming-soon?for=<key>.
export const comingSoonFeatures = {
  buy: {
    label: "Buy",
    headline: "Buy verified land and homes — with your man in the city checking every paper.",
    body: "We are building a buying desk where every listing comes with title checks, a site visit report, and a local person to negotiate and register on your behalf.",
  },
  sell: {
    label: "Sell",
    headline: "Sell from abroad without flying home for every signature.",
    body: "Valuation, buyer screening, TDS and repatriation paperwork, and a verified representative at the registrar — we are putting it together now.",
  },
  rent: {
    label: "Rent & Land",
    headline: "Rent out your house or lease your land — managed end to end.",
    body: "Tenant KYC, registered agreements, rent collection to your NRO account, and seasonal leasing for farmland are on the way.",
  },
} as const;

export type FeatureKey = keyof typeof comingSoonFeatures;

export const comingSoonHref = (key: FeatureKey) => `/coming-soon?for=${key}`;

export const nav = [
  { href: "/land-security", label: "Land Security" },
  { href: "/land-transfer", label: "Land Transfer" },
  { href: "/nri", label: "NRI Services" },
  { href: "/#how", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Districts we currently serve, per state. Used by the coverage checker; anything else is "expanding".
// ponytail: static list — move to a CMS/DB when the ops team edits it more than the dev team.
export const coverageDistricts: Record<string, string[]> = {
  Telangana: [
    "Hyderabad", "Rangareddy", "Medchal-Malkajgiri", "Sangareddy", "Vikarabad", "Nalgonda", "Suryapet",
    "Yadadri Bhuvanagiri", "Siddipet", "Medak", "Warangal", "Hanamkonda", "Karimnagar", "Khammam", "Nizamabad", "Mahabubnagar",
  ],
  "Andhra Pradesh": ["Guntur", "Krishna", "NTR", "Vijayawada", "Visakhapatnam", "West Godavari", "East Godavari", "Nellore", "Tirupati", "Kurnool", "Prakasam"],
  Karnataka: ["Bengaluru Urban", "Bengaluru Rural", "Mysuru", "Mandya", "Tumakuru", "Hassan", "Ramanagara"],
  "Tamil Nadu": ["Chennai", "Kancheepuram", "Chengalpattu", "Tiruvallur", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Vellore"],
};
