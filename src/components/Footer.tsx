import Link from "next/link";
import { Logo } from "@/components/Logo";
import { guides } from "@/lib/guides";
import { services } from "@/lib/services";
import { comingSoonHref, site } from "@/lib/site";

const cols = [
  {
    title: "Buy · Sell · Rent",
    links: [
      { href: comingSoonHref("buy"), label: "Buy property" },
      { href: comingSoonHref("sell"), label: "Sell property" },
      { href: comingSoonHref("rent"), label: "Rent & land" },
      { href: "/properties", label: "Properties under our watch" },
    ],
  },
  {
    title: "Services",
    links: services.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
  },
  {
    title: "NRI guides",
    links: [
      { href: "/nri", label: "NRI Desk" },
      ...guides.slice(0, 4).map((g) => ({ href: `/guides/${g.slug}`, label: g.title })),
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/guides", label: "All guides" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-rule bg-paper-2 text-sm text-ink-2">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs leading-relaxed">
            Trusted NRI partner for ancestral land in India. Watch, manage,
            transfer, and comply — reported on WhatsApp in plain language.
          </p>
          <p className="mt-4">
            {site.address}
            <br />
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-stamp">
              {site.phone}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-stamp">
              {site.email}
            </a>
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="font-semibold text-ink">{c.title}</p>
            <ul className="mt-3 space-y-2">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-stamp">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="border-t border-rule py-4 text-center text-xs">
        © {new Date().getFullYear()} {site.name}. Guides are general information, not legal or tax advice.
      </p>
    </footer>
  );
}
