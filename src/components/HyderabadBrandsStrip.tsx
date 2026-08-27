"use client";

import Image from "next/image";
import { useState } from "react";

interface Brand {
  name: string;
  logoUrl?: string;
  projectsCount?: string;
  location?: string;
  tagline?: string;
}

const hyderabadBrands: Brand[] = [
  {
    name: "Aparna Constructions",
    logoUrl: "https://newprojects.99acres.com/projects/aparna/buildr_logo.jpg",
    projectsCount: "60+ Projects",
    location: "Tellapur, Gachibowli, Hyderabad",
    tagline: "Pioneers in Gated Communities",
  },
  {
    name: "Bhashyam Developers",
    logoUrl: "https://newprojects.99acres.com/projects/bhashyamdevelopers/uejflfi_1686641812_427849058.jpg",
    projectsCount: "25+ Projects",
    location: "Vijayawada Highway, Hyderabad",
    tagline: "Premier Land & Residential Plotted Layouts",
  },
  {
    name: "Legend Estates",
    logoUrl: "https://newprojects.99acres.com/projects/legendestates/bsd5dua_1746987262_595018971_O.jpg",
    projectsCount: "30+ Projects",
    location: "Banjara Hills, Jubilee Hills, Hyderabad",
    tagline: "Quality Living Spaces Since 1998",
  },
  {
    name: "Shanta Sriram Constructions",
    logoUrl: "https://newprojects.99acres.com/projects/shanta_sriram_constructions/logo.jpg",
    projectsCount: "40+ Projects",
    location: "Secunderabad, Madhapur, Hyderabad",
    tagline: "Iconic Residential & Commercial Hubs",
  },
  {
    name: "My Home Group",
    projectsCount: "35+ Projects",
    location: "HITEC City, Financial District, Hyderabad",
    tagline: "Make Living Better",
  },
  {
    name: "Rajapushpa Properties",
    projectsCount: "20+ Projects",
    location: "Kokapet, Tellapur, Narsingi",
    tagline: "Luxury Living Defined",
  },
  {
    name: "Prestige Group",
    projectsCount: "15+ Projects",
    location: "Budvel, Rajendra Nagar, Hyderabad",
    tagline: "Add Prestige to Your Life",
  },
  {
    name: "Ramky Estates",
    projectsCount: "30+ Projects",
    location: "Kukatpally, Miyapur, Hyderabad",
    tagline: "Building Sustainable Future",
  },
  {
    name: "Vasavi Group",
    projectsCount: "28+ Projects",
    location: "LB Nagar, Bachupally, Hyderabad",
    tagline: "Home for Everyone",
  },
  {
    name: "Sumadhura Infracon",
    projectsCount: "18+ Projects",
    location: "Nanakramguda, Puppalguda",
    tagline: "Delivering Happiness Always",
  },
  {
    name: "Jayabheri Properties",
    projectsCount: "15+ Projects",
    location: "Gachibowli, Financial District",
    tagline: "Excellence in Real Estate",
  },
  {
    name: "SMR Holdings",
    projectsCount: "22+ Projects",
    location: "Miyapur, Kondapur, Hyderabad",
    tagline: "Building Modern Hyderabad",
  },
];

function BrandCard({ brand }: { brand: Brand }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group flex min-w-[240px] items-center gap-3.5 rounded-xl border border-rule bg-paper-2 px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-stamp hover:shadow-card">
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-rule bg-paper">
        {brand.logoUrl && !imageError ? (
          <Image
            src={brand.logoUrl}
            alt={`${brand.name} logo`}
            fill
            className="object-contain p-1"
            onError={() => setImageError(true)}
            sizes="48px"
            unoptimized
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-stamp-soft text-xs font-bold text-stamp">
            {brand.name.substring(0, 2).toUpperCase()}
          </div>
        )}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xs font-semibold text-ink group-hover:text-stamp">{brand.name}</span>
        <span className="text-[11px] font-medium text-ink-2">{brand.projectsCount || "Hyderabad Builder"}</span>
        <span className="text-[10px] text-ink-2/80 truncate max-w-[150px]">{brand.location}</span>
      </div>
    </div>
  );
}

export function HyderabadBrandsStrip() {
  // Duplicate array to enable seamless infinite scroll loop
  const marqueeItems = [...hyderabadBrands, ...hyderabadBrands];

  return (
    <aside
      className="w-full border-t border-rule bg-paper py-6 overflow-hidden"
      aria-label="Top Hyderabad Property Developers and Brands"
    >
      <div className="container mb-4 flex flex-col items-center justify-between gap-1 text-center sm:flex-row sm:text-left">
        <div>
          <span className="eyebrow">Hyderabad Property Coverage</span>
          <h3 className="mt-0.5 text-base font-semibold text-ink">
            Top Real Estate Developers &amp; Builders in Hyderabad
          </h3>
        </div>
        <p className="text-xs text-ink-2">
          We verify land titles, clear boundaries &amp; monitor assets across all Hyderabad builder layouts
        </p>
      </div>

      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 before:bg-gradient-to-r before:from-paper before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 after:bg-gradient-to-l after:from-paper after:to-transparent">
        <div className="animate-marquee flex gap-4 py-2">
          {marqueeItems.map((brand, idx) => (
            <BrandCard key={`${brand.name}-${idx}`} brand={brand} />
          ))}
        </div>
      </div>
    </aside>
  );
}
