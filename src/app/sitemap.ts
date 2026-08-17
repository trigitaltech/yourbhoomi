import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
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
    page("/nri", 0.9, "weekly"),
    page("/properties", 0.9, "weekly"),
    page("/guides", 0.8),
    page("/about", 0.6),
    page("/contact", 0.8),
    ...services.map((s) => page(`/services/${s.slug}`, 0.8)),
    ...guides.map((g) => page(`/guides/${g.slug}`, 0.7)),
    ...properties.map((p) => page(`/properties/${p.slug}`, 0.6, "weekly")),
  ];
}
