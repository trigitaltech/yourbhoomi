import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Your Bhoomi is a land desk for NRIs and city families securing ancestral property across South India.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6">
      <p className="text-sm tracking-widest text-green uppercase">About us</p>
      <h1 className="mt-2 font-serif text-4xl text-navy">
        Built for families who left the village — not the land
      </h1>
      <div className="relative mt-8 h-64 overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80"
          alt="Terraced farmland"
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-8 leading-relaxed text-muted">
        Your Bhoomi is a land and property desk for NRIs and city families. We
        pair local, ID-checked partners with a single advisor who speaks in
        sentences, not file numbers. Security of the soil. Dignity of the
        transfer.
      </p>
      <p className="mt-4 leading-relaxed text-muted">
        Encroachment, repairs, or paperwork — handled, and reported back in
        plain language. Under transfer, we stay until the name on the record
        matches the family.
      </p>
      <Link
        href="/contact"
        className="mt-8 inline-block rounded-full bg-green px-6 py-3 text-sm text-white"
      >
        Get Started
      </Link>
    </div>
  );
}
