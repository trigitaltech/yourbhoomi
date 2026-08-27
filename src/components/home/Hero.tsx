import Image from "next/image";
import Link from "next/link";
import { TrackLink } from "@/components/TrackLink";
import { heroJumps } from "@/lib/nav";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="section" aria-labelledby="hero-heading">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="eyebrow">Land security &amp; land transfer for NRIs</p>
          <h1 id="hero-heading" className="mt-3 text-3xl">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-2">{site.subline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TrackLink href="/land-security" event="hero_land_security_click" className="btn btn-primary">
              Get started
            </TrackLink>
            <TrackLink href="/land-transfer" event="hero_land_transfer_click" className="btn btn-outline">
              Transfer my land
            </TrackLink>
          </div>
          <p className="mt-4 text-sm text-ink-2">
            <Link href="/coverage" className="text-stamp underline">
              Check if we cover my district
            </Link>{" "}
            · Telangana, Andhra Pradesh, Karnataka, Tamil Nadu
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-rule">
          <Image
            src="/hero-guarded-land.png"
            alt="Field representative photographing the boundary of an ancestral plot in India for a Your Bhoomi land security report"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute bottom-4 left-4 rounded-lg bg-paper/95 px-3 py-2 text-xs shadow-card">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-seal align-middle" />
            Sample: visit logged · geo-tagged photos sent on WhatsApp
          </div>
        </div>
      </div>
      <nav className="container mt-12 flex justify-center" aria-label="On this page">
        <div className="jump-pills">
          {heroJumps.map((j) => (
            <Link key={j.href} href={j.href}>
              {j.label}
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
}
