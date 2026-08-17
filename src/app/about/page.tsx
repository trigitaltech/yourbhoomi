import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Your Bhoomi is a land desk for NRIs and city families securing ancestral property across South India.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="container section max-w-3xl">
      <p className="eyebrow">About us</p>
      <h1 className="mt-3 text-2xl">Built for families who left the village — not the land</h1>
      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-rule">
        <Image
          src="/slide-farmhouse.png"
          alt="A farmhouse being built on a family plot"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      <p className="mt-8 text-ink-2">
        Your Bhoomi is a land and property desk for NRIs and city families. We
        pair local, ID-checked partners — your man in the city — with a single
        advisor who speaks in sentences, not file numbers. Security of the
        soil. Dignity of the transfer.
      </p>
      <p className="mt-4 text-ink-2">
        Encroachment, repairs, or paperwork — handled, and reported back in
        plain language on WhatsApp. Under transfer, we stay until the name on
        the record matches the family.
      </p>
      <div className="mt-8">
        <WhatsAppButton>Talk to us</WhatsAppButton>
      </div>
    </div>
  );
}
