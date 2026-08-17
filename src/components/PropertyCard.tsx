import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/properties";

export function PropertyCard({ p }: { p: Property }) {
  return (
    <Link
      href={`/properties/${p.slug}`}
      className="card card-hover overflow-hidden"
    >
      <div className="relative h-52">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-3 left-3 rounded-full bg-paper px-3 py-1 text-xs font-medium text-stamp">
          {p.tag}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold text-stamp">{p.title}</h3>
          <span className="text-base font-semibold text-ink">{p.price}</span>
        </div>
        <p className="mt-1 text-sm text-ink-2">{p.location}</p>
        <p className="mt-3 text-sm text-ink-2">
          {p.type} · {p.acres}
          {p.beds > 0 ? ` · ${p.beds} beds` : ""}
        </p>
      </div>
    </Link>
  );
}
