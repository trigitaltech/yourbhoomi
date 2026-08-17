import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Your Bhoomi — Your man in the city",
    short_name: "Your Bhoomi",
    description:
      "Property care in India for NRIs: watch, manage, transfer, and comply — reported on WhatsApp.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#0e2a5c",
    lang: "en-IN",
    categories: ["business", "finance", "lifestyle"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "Contact us", url: "/contact", icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }] },
      { name: "Search land", url: "/properties" },
      { name: "NRI Desk", url: "/nri" },
    ],
  };
}
