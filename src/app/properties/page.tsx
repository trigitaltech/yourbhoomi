import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchForm, type SearchQuery } from "@/components/SearchForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { filterProperties, properties } from "@/lib/properties";
import { comingSoonHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Land Under NRI Care in South India",
  description:
    "Ancestral land, farmhouses, and family homes Your Bhoomi watches and manages across Telangana, Andhra Pradesh, Tamil Nadu, and Karnataka.",
  alternates: { canonical: "/properties" },
  openGraph: {
    title: "Land Under NRI Care in South India",
    description:
      "Ancestral land, farmhouses, and family homes Your Bhoomi watches and manages across Telangana, Andhra Pradesh, Tamil Nadu, and Karnataka.",
    url: "/properties",
  },
};

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

export default async function PropertiesPage({ searchParams }: PageProps<"/properties">) {
  const sp = await searchParams;
  const values: SearchQuery = {
    q: first(sp.q),
    loc: first(sp.loc),
    type: first(sp.type),
    price: first(sp.price),
    beds: first(sp.beds),
  };
  const results = filterProperties(properties, {
    query: values.q ?? "",
    location: values.loc ?? "",
    type: values.type ?? "",
    price: values.price ?? "",
    beds: values.beds ?? "",
  });

  return (
    <div className="container section">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Land under watch", path: "/properties" },
        ]}
      />
      <p className="eyebrow mt-6">Land under our watch</p>
      <h1 className="mt-2 text-2xl">Ancestral land and homes we watch, manage, and transfer for NRIs</h1>
      <p className="mt-3 max-w-2xl text-ink-2">
        Every listing here is under a Your Bhoomi desk — verified on the ground,
        documents on file. Looking to buy, sell, or rent out?{" "}
        <Link href={comingSoonHref("buy")} className="text-stamp underline">
          Buy
        </Link>{" "}
        ·{" "}
        <Link href={comingSoonHref("sell")} className="text-stamp underline">
          Sell
        </Link>{" "}
        ·{" "}
        <Link href={comingSoonHref("rent")} className="text-stamp underline">
          Rent
        </Link>{" "}
        are coming soon — leave your details to be first to know.
      </p>
      <div className="card mt-8 p-4">
        <SearchForm values={values} compact />
      </div>
      <p className="mt-6 text-sm text-ink-2">
        {results.length} {results.length === 1 ? "property" : "properties"}
      </p>
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((p) => (
          <PropertyCard key={p.id} p={p} />
        ))}
      </div>
      {results.length === 0 && (
        <div className="card mt-8 p-8 text-center">
          <p className="text-ink-2">No properties match those filters yet.</p>
          <p className="mt-4">
            <WhatsAppButton message="Hi, I'm looking for land/property in a specific area — can you help me search?">
              Ask us to look for you
            </WhatsAppButton>
          </p>
        </div>
      )}
    </div>
  );
}
