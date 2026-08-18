import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";

const thisWeek = [
  "Walked the Nalgonda grove boundary — 12 geo-tagged photos, no change since May",
  "Filed mutation follow-up at Warangal MRO office; acknowledgement sent",
  "Verified caretaker at the Guntur plot; fence post repair quoted",
  "Paid Mysuru property tax; receipt filed in the family thread",
];

const trust = ["Identity verified", "Background checked", "Same person on your file", "Local to your mandal"];

// Field representative trust section. Sample activity is illustrative; no counts or ratings until real data exists.
export function YourMan() {
  return (
    <section id="representative" className="container section" aria-labelledby="yourman-heading">
      <p className="eyebrow">Your man in the city</p>
      <h2 id="yourman-heading" className="mt-3 max-w-2xl text-2xl">
        A named, verified person on the ground — not a call centre
      </h2>
      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-rule">
          <Image
            src="/slide-security.png"
            alt="A Your Bhoomi field representative at the gate of a plot"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute top-4 left-4 flex items-center gap-3 rounded-xl bg-paper/95 p-3 shadow-card">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stamp text-sm font-semibold text-white">
              RK
            </span>
            <div className="text-xs">
              <p className="font-semibold text-ink">Ravi K. · Nalgonda belt</p>
              <p className="text-ink-2">ID verified · Telugu, English</p>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex flex-wrap gap-2 text-xs">
            {trust.map((t) => (
              <li key={t} className="rounded-full bg-seal-soft px-3 py-1 font-medium text-seal">
                {t}
              </li>
            ))}
          </ul>
          <h3 className="mt-6 text-xl font-semibold text-stamp">What a week on your file looks like</h3>
          <ul className="mt-4 space-y-3">
            {thisWeek.map((t) => (
              <li key={t} className="flex gap-3 text-ink-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-seal" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-2">
            You get their name, photo and ID before the first visit. We never publish Aadhaar numbers or
            personal addresses — of representatives or customers.
          </p>
        </div>
      </div>
      <p className="mt-10 text-sm text-ink-2">
        Beyond security and transfer, the same desk handles{" "}
        {services
          .filter((s) => s.slug === "manage" || s.slug === "comply")
          .map((s, i) => (
            <span key={s.slug}>
              {i > 0 && " and "}
              <Link href={`/services/${s.slug}`} className="text-stamp underline">
                {s.name.toLowerCase()}
              </Link>
            </span>
          ))}
        {" "}for homes, tenants and records.
      </p>
    </section>
  );
}
