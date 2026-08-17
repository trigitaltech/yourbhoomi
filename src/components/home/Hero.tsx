import Image from "next/image";
import Link from "next/link";
import { SearchForm } from "@/components/SearchForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const chips = ["Farmland", "Plot", "Ancestral", "House"];

export function Hero() {
  return (
    <section className="container section" aria-labelledby="hero-heading">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="eyebrow">For NRIs and city families</p>
          <h1 id="hero-heading" className="mt-3 text-3xl">
            Your man in the city, for the land you left behind.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-2">
            An ID-verified local person who visits your plot, chases the
            paperwork, and reports back on WhatsApp — in your language, in your
            time zone.
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
            <WhatsAppButton message="Hi, I'm an NRI and want someone to look after my property in India.">
              Talk to your man in the city
            </WhatsAppButton>
            <p className="text-sm text-ink-2">
              Buying or selling?{" "}
              <a href={site.nipigeBuy} className="text-stamp underline" target="_blank" rel="noopener noreferrer">
                Buy
              </a>{" "}
              ·{" "}
              <a href={site.nipigeSell} className="text-stamp underline" target="_blank" rel="noopener noreferrer">
                Sell
              </a>{" "}
              on Nipige
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-rule">
          <Image
            src="/hero-guarded-land.png"
            alt="A guarded, fenced plot with a caretaker's hut and a camera on the wall"
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
