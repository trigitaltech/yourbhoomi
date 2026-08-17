export const site = {
  name: "Your Bhoomi",
  url: "https://yourbhoomi.com",
  email: "hello@yourbhoomi.com",
  phone: "+91 40 4000 1200",
  // ponytail: single WhatsApp business number; swap for a per-city router later
  whatsapp: "914040001200",
  address: "Banjara Hills, Hyderabad",
  nipigeBuy: "https://nipige.com/buy",
  nipigeSell: "https://nipige.com/sell",
};

export function waLink(message = "Hi Your Bhoomi, I need help with my property in India.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: site.nipigeBuy, label: "Buy", external: true },
  { href: site.nipigeSell, label: "Sell", external: true },
  { href: "/properties", label: "Rent & Land" },
  { href: "/services/manage", label: "Manage" },
  { href: "/#services", label: "Services" },
  { href: "/nri", label: "NRI Desk" },
  { href: "/guides", label: "Guides" },
];
