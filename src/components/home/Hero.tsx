import Image from "next/image";
import Link from "next/link";
import { SearchForm } from "@/components/SearchForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { comingSoonHref } from "@/lib/site";

const chips = ["Farmland", "Plot", "Ancestral", "House"];

export function Hero() {
  return (
    <section className="container section" aria-labelledby="hero-heading">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="eyebrow">NRI land services in India</p>
          <h1 id="hero-heading" className="mt-3 text-3xl">
            Your man in India for the ancestral land you left behind.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-2">
            Property care for NRIs in the US, UK, Gulf, and APAC. An ID-verified
            local person watches your plot, clears mutation and transfer, and
            reports on WhatsApp — so the land you inherited stays yours.
          </p>
          <div className="mt-8">
            <SearchForm />
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-ink-2">Popular:</span>
              {chips.map((c) => (
                <Link
                  key={c}
                  href={`/properties?type=${c}`}
                  className="rounded-full border border-rule px-3 py-1 hover:border-stamp hover:bg-stamp-soft"
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppButton message="Hi, I'm an NRI and want someone to look after my ancestral property in India.">
              Talk to the NRI desk
            </WhatsAppButton>
            <p className="text-sm text-ink-2">
              Buying or selling?{" "}
              <Link href={comingSoonHref("buy")} className="text-stamp underline">
                Buy
              </Link>{" "}
              ·{" "}
              <Link href={comingSoonHref("sell")} className="text-stamp underline">
                Sell
              </Link>{" "}
              — coming soon, get notified
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-rule">
          <Image
            src="/hero-guarded-land.png"
            alt="Guarded ancestral plot in India with a caretaker hut — NRI land watch by Your Bhoomi"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute bottom-4 left-4 rounded-lg bg-paper/95 px-3 py-2 text-xs shadow-card">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-seal align-middle" />
            Visit logged · Nalgonda · photos sent on WhatsApp
          </div>
        </div>
      </div>
    </section>
  );
}
