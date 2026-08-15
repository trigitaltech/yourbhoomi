import type { Metadata } from "next";
import { PropertySearch } from "@/components/PropertySearch";

export const metadata: Metadata = {
  title: "Featured properties",
  description:
    "Search land and ancestral properties Your Bhoomi watches, manages, and transfers.",
  alternates: { canonical: "/properties" },
};

export default function PropertiesPage() {
  return (
    <div className="pt-8">
      <PropertySearch />
    </div>
  );
}
