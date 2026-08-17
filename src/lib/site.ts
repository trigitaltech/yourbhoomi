export const site = {
  name: "Your Bhoomi",
  url: "https://yourbhoomi.com",
  email: "hello@yourbhoomi.com",
  phone: "+91 40 4000 1200",
  // ponytail: single WhatsApp business number; swap for a per-city router later
  whatsapp: "914040001200",
  address: "Banjara Hills, Hyderabad",
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
  { href: comingSoonHref("buy"), label: "Buy" },
  { href: comingSoonHref("sell"), label: "Sell" },
  { href: comingSoonHref("rent"), label: "Rent & Land" },
  { href: "/services/manage", label: "Manage" },
  { href: "/#services", label: "Services" },
  { href: "/nri", label: "NRI Desk" },
  { href: "/guides", label: "Guides" },
];
