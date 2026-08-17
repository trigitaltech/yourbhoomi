import Link from "next/link";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/lib/properties";

export function Featured() {
  return (
    <section className="border-y border-rule bg-paper-2" aria-labelledby="featured-heading">
      <div className="container section">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Rent &amp; land</p>
            <h2 id="featured-heading" className="mt-3 text-2xl">
              Properties under our watch
            </h2>
          </div>
          <Link href="/properties" className="btn btn-outline">
            See all listings
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.slice(0, 3).map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
