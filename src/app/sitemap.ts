import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { cities } from "@/lib/locations";
import { properties } from "@/lib/properties";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page("", 1, "weekly"),
    page("/land-security", 0.95, "weekly"),
    page("/land-transfer", 0.95, "weekly"),
    page("/land-risk-check", 0.85),
    page("/transfer-readiness", 0.85),
    page("/sample-report", 0.8),
    page("/coverage", 0.8, "weekly"),
    page("/nri-checklist", 0.75),
    page("/nri", 0.9, "weekly"),
    ...cities.flatMap((c) => [
      page(`/nri/${c.slug}`, 0.9, "weekly"),
      ...c.intents.map((i) => page(`/nri/${c.slug}/${i.key}`, 0.85)),
    ]),
    page("/pricing", 0.8),
    page("/compare", 0.7),
    page("/faq", 0.8, "weekly"),
    page("/glossary", 0.7),
    page("/properties", 0.9, "weekly"),
    page("/search", 0.4),
    page("/guides", 0.8),
    page("/about", 0.7),
    page("/contact", 0.8),
    page("/privacy", 0.3),
    page("/terms", 0.3),
    page("/cookies", 0.3),
    ...services.map((s) => page(`/services/${s.slug}`, 0.8)),
    ...guides.map((g) => page(`/guides/${g.slug}`, 0.7)),
    ...properties.map((p) => page(`/properties/${p.slug}`, 0.6, "weekly")),
  ];
}
