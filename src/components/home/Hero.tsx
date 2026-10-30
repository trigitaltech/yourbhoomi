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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <TrackLink href="/land-security" event="hero_land_security_click" className="btn btn-primary w-full sm:w-auto">
              Get started
            </TrackLink>
            <TrackLink href="/land-transfer" event="hero_land_transfer_click" className="btn btn-outline w-full sm:w-auto">
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
          <div className="absolute inset-x-3 bottom-3 max-w-md rounded-lg bg-paper/95 px-3 py-2 text-xs shadow-card sm:inset-x-auto sm:bottom-4 sm:left-4 sm:right-4">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-seal align-middle" />
            Sample: visit logged · geo-tagged photos sent on WhatsApp
          </div>
        </div>
      </div>
      <nav className="container mt-12 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="On this page">
        <div className="jump-pills mx-auto w-max min-w-max flex-nowrap">
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
