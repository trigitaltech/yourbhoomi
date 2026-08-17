export const site = {
  name: "Your Bhoomi",
  legalName: "Your Bhoomi",
  tagline: "Your man in India for the ancestral land you left behind",
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
  { href: "/nri", label: "NRI Desk" },
  { href: "/services/watch", label: "Watch" },
  { href: "/services/manage", label: "Manage" },
  { href: "/services/transact", label: "Transfer" },
  { href: "/services/comply", label: "Comply" },
  { href: "/guides", label: "Guides" },
  { href: "/contact", label: "Contact" },
];
