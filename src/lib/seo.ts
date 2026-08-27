import { faqs } from "@/lib/faqs";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const seo = {
  homeTitle: "Land Security & Land Transfer for NRIs in India | Your Bhoomi",
  homeDescription:
    "Protect, monitor and transfer your land in India without flying home. Verified inspections, geo-tagged photo and video reports, transfer coordination and WhatsApp updates.",
  keywords: [
    "land security services India",
    "NRI land monitoring India",
    "land transfer services NRI",
    "NRI property management Hyderabad",
    "NRI property management India",
    "NRI buying property in Hyderabad",
    "NRI selling property in India TDS",
    "Bhu Bharati NRI",
    "mutation Telangana",
    "encumbrance certificate Telangana",
    "gift deed stamp duty Telangana",
    "ancestral property transfer",
    "NRI land services",
    "property watch India",
    "mutation Pahani NRI",
    "Power of Attorney property India",
    "encroachment vacant land",
    "NRI property tax compliance",
  ],
};

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const orgId = `${site.url}/#organization`;
const siteId = `${site.url}/#website`;
const serviceId = `${site.url}/#service`;

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    logo: { "@type": "ImageObject", url: site.logo },
    image: site.logo,
    description:
      "NRI property desk in India. ID-verified local partners watch, manage, transfer, and keep ancestral land compliant — reported on WhatsApp.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      ...site.coverage.map((name) => ({ "@type": "State", name })),
      ...site.nriHubs.map((name) => ({ "@type": "Country", name })),
    ],
    knowsAbout: [
      "NRI property management",
      "Ancestral property transfer",
      "Land encroachment monitoring",
      "Mutation and Record of Rights",
      "Power of Attorney for property in India",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: site.phone,
        email: site.email,
        availableLanguage: ["English", "Telugu", "Tamil", "Kannada", "Hindi"],
        areaServed: "IN",
      },
    ],
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": siteId,
    url: site.url,
    name: site.name,
    description: seo.homeDescription,
    inLanguage: "en-IN",
    publisher: { "@id": orgId },
  };
}

export function professionalServiceNode() {
  return {
    "@type": "ProfessionalService",
    "@id": serviceId,
    name: `${site.name} NRI Land Desk`,
    url: site.url,
    image: site.logo,
    telephone: site.phone,
    email: site.email,
    priceRange: "₹₹",
    description:
      "Land security, property management, ancestral transfer, and records compliance in India for NRIs and city families.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: site.coverage.map((name) => ({ "@type": "State", name })),
    audience: {
      "@type": "Audience",
      audienceType: "Non-Resident Indians and city families with ancestral or vacant land in India",
    },
    provider: { "@id": orgId },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "NRI land services",
      itemListElement: services.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.short,
          url: `${site.url}/services/${s.slug}`,
        },
      })),
    },
  };
}

export function webPageNode(url = site.url, name = seo.homeTitle, description = seo.homeDescription) {
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": siteId },
    publisher: { "@id": orgId },
  };
}

export function siteGraph(url = site.url, name = seo.homeTitle, description = seo.homeDescription) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      websiteNode(),
      professionalServiceNode(),
      webPageNode(url, name, description),
    ],
  };
}

export function faqPageJsonLd(url: string, items: { q: string; a: string }[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function serviceJsonLd(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  const url = `${site.url}/services/${s.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.short,
    url,
    provider: { "@id": orgId },
    areaServed: site.coverage.map((name) => ({ "@type": "State", name })),
    audience: {
      "@type": "Audience",
      audienceType: "Non-Resident Indians",
    },
  };
}
