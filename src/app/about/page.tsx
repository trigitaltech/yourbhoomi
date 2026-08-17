import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — NRI Land Desk in Hyderabad",
  description:
    "Your Bhoomi is a Hyderabad property desk for NRIs. ID-verified local partners watch ancestral land across Telangana, Andhra Pradesh, Tamil Nadu, and Karnataka.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Your Bhoomi — NRI Land Desk in Hyderabad",
    description:
      "Your Bhoomi is a Hyderabad property desk for NRIs. ID-verified local partners watch ancestral land across Telangana, Andhra Pradesh, Tamil Nadu, and Karnataka.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="container section max-w-3xl">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <p className="eyebrow mt-6">About us</p>
      <h1 className="mt-3 text-2xl">The trusted local partner for ancestral land you cannot visit</h1>
      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-rule">
        <Image
          src="/slide-farmhouse.png"
          alt="Family farmhouse on ancestral land in South India under Your Bhoomi care"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      <p className="mt-8 text-ink-2">
        Your Bhoomi is an NRI land and property desk based in {site.address}. We
        pair Aadhaar-verified local partners — your man on the plot — with a
        single advisor who speaks in sentences, not file numbers. Security of
        the soil. Dignity of the transfer.
      </p>

      <h2 className="mt-10 text-xl">Who we serve</h2>
      <p className="mt-3 text-ink-2">
        Families in the US, UK, Gulf, Singapore, Australia, and Canada who still
        hold a grove, a vacant plot, or a parents&apos; house in India. City
        relatives who left the village but not the land. Siblings who need one
        clean file before anyone signs a gift or partition deed.
      </p>

      <h2 className="mt-10 text-xl">How partners are verified</h2>
      <p className="mt-3 text-ink-2">
        Every local person on your file is named, photographed, Aadhaar-checked,
        and background-checked before the first visit. You see who is walking
        the boundary. The same person stays on the file so you are not briefing
        a new stranger each quarter.
      </p>

      <h2 className="mt-10 text-xl">Where we operate</h2>
      <p className="mt-3 text-ink-2">
        Live belts today: Hyderabad region (Nalgonda, Siddipet, Warangal),
        coastal Andhra (Guntur–Vijayawada), Coimbatore &amp; Nilgiris, and
        Mysuru — across Telangana, Andhra Pradesh, Tamil Nadu, and Karnataka.
        We onboard partners district by district. Message us if your land sits
        outside these belts.
      </p>

      <h2 className="mt-10 text-xl">What we will not do</h2>
      <p className="mt-3 text-ink-2">
        We are not a listing portal, and we do not give legal or tax advice.
        Guides on this site are general information. Registrations, disputes,
        and repatriation still need a lawyer or CA when the file requires it —
        we coordinate that work and stay until the record matches the family.
      </p>

      <div className="mt-8">
        <WhatsAppButton message="Hi, I want to understand how Your Bhoomi can look after our ancestral property in India.">
          Talk to the NRI desk
        </WhatsAppButton>
      </div>
    </div>
  );
}
