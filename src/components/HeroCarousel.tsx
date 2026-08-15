"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/hero-guarded-land.png",
    kicker: "Watch · CCTV on the wall",
    title: "Secure the land. Transfer what your ancestors left.",
    body: "Cameras on the perimeter, a kept garden, and a local watch on the boundary.",
    badge: "Live · Cam 01 perimeter",
  },
  {
    src: "/slide-boundaries.png",
    kicker: "Landscaping · making the boundary",
    title: "We mark the land so no one else can.",
    body: "Survey stones, compound walls, and landscaped edges — the plot is drawn, then kept.",
    badge: "Boundary · survey",
  },
  {
    src: "/slide-transfer.png",
    kicker: "Transfer · will from the parents",
    title: "The name on the record must match the family.",
    body: "Wills, gifts, and ancestral transfer from parents — paperwork in plain language, until mutation is done.",
    badge: "Will · mutation",
  },
  {
    src: "/slide-farmhouse.png",
    kicker: "Build · farm house on your plot",
    title: "Construct the farm house without flying home.",
    body: "From foundation to tiled roof, we brief the crew, watch the site, and send you the proof.",
    badge: "Build · farm house",
  },
  {
    src: "/slide-security.png",
    kicker: "Secure · local watch on the gate",
    title: "Local watchmen on the land you cannot visit.",
    body: "Vetted local security at the gate, coordinated by us — not a stranger you found on a call.",
    badge: "Gate · night watch",
  },
  {
    src: "/slide-buy-sell.png",
    kicker: "Transact · buy and sell the property",
    title: "Buy or sell the land with a clean file.",
    body: "We stand with you at the table — sale deed, keys, and mutation — so the plot changes hands without a fight later.",
    badge: "Buy · sell",
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const slide = slides[i];

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [i]);

  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden text-cream">
      {slides.map((s, n) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            n === i ? "z-0 opacity-100" : "z-0 opacity-0"
          }`}
          aria-hidden={n !== i}
        >
          {/* ponytail: native img so public PNGs skip the optimizer */}
          <img
            src={s.src}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-navy via-navy/55 to-navy/25" />
      <span className="absolute top-24 left-4 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-navy/50 px-3 py-1 text-[11px] tracking-widest uppercase backdrop-blur-sm sm:left-8">
        <span className="h-2 w-2 animate-[rec-pulse_1.4s_ease-in-out_infinite] rounded-full bg-red-500" />
        {slide.badge}
      </span>
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6">
        <p className="text-sm tracking-[0.25em] text-gold uppercase">{slide.kicker}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
          {slide.title}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-cream/85">{slide.body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-green px-6 py-3 text-sm font-medium text-white hover:bg-green-light"
          >
            Get Started
          </Link>
          <Link
            href="/properties"
            className="rounded-full border border-cream/40 px-6 py-3 text-sm font-medium hover:bg-white/10"
          >
            Search Properties
          </Link>
        </div>
        <div className="mt-10 flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            className="rounded-full border border-white/30 px-3 py-1 text-sm"
            onClick={() => setI((n) => (n - 1 + slides.length) % slides.length)}
          >
            ‹
          </button>
          <div className="flex gap-2">
            {slides.map((s, n) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Slide ${n + 1}`}
                aria-current={n === i}
                className={`h-2 rounded-full ${n === i ? "w-8 bg-gold" : "w-2 bg-white/40"}`}
                onClick={() => setI(n)}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next slide"
            className="rounded-full border border-white/30 px-3 py-1 text-sm"
            onClick={() => setI((n) => (n + 1) % slides.length)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
