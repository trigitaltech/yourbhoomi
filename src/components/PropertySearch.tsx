"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  filterProperties,
  locations,
  properties,
  types,
} from "@/lib/properties";

export function PropertySearch() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [beds, setBeds] = useState("");
  const [price, setPrice] = useState("");
  const [query, setQuery] = useState("");

  const results = useMemo(
    () => filterProperties(properties, { location, type, beds, query, price }),
    [location, type, beds, query, price],
  );

  const field =
    "rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm text-ink outline-none focus:ring-2 focus:ring-green/40";

  return (
    <section id="properties" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="text-sm font-medium tracking-widest text-green uppercase">
        Featured properties
      </p>
      <h2 className="mt-2 max-w-xl font-serif text-3xl text-navy sm:text-4xl">
        Land we watch, manage, and transfer
      </h2>
      <form
        className="mt-8 grid gap-3 rounded-2xl bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className={field}
          placeholder="Search by name or city"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search properties"
        />
        <select
          className={field}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          aria-label="Location"
        >
          <option value="">All locations</option>
          {locations.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
        <select
          className={field}
          value={type}
          onChange={(e) => setType(e.target.value)}
          aria-label="Property type"
        >
          <option value="">All types</option>
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <select
          className={field}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          aria-label="Price range"
        >
          <option value="">Any price</option>
          <option value="under50">Under ₹50 L</option>
          <option value="50to100">₹50 L – ₹1 Cr</option>
          <option value="over100">Above ₹1 Cr</option>
        </select>
        <select
          className={field}
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
          aria-label="Bedrooms"
        >
          <option value="">Any bedrooms</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
        </select>
      </form>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((p) => (
          <Link
            key={p.id}
            href={`/properties/${p.slug}`}
            className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/5 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative h-52">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="absolute top-3 left-3 rounded-full bg-navy/90 px-3 py-1 text-xs text-cream">
                {p.tag}
              </span>
              <span className="absolute right-3 bottom-3 rounded-md bg-gold px-3 py-1 text-sm font-semibold text-navy">
                {p.price}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-xl text-navy">{p.title}</h3>
              <p className="mt-1 text-sm text-muted">{p.location}</p>
              <p className="mt-3 flex gap-3 text-sm text-ink">
                <span>{p.type}</span>
                <span aria-hidden>·</span>
                <span>{p.acres}</span>
                {p.beds > 0 && (
                  <>
                    <span aria-hidden>·</span>
                    <span>{p.beds} beds</span>
                  </>
                )}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {results.length === 0 && (
        <p className="mt-8 text-center text-muted">
          No properties match those filters yet.
        </p>
      )}
    </section>
  );
}
