import Link from "next/link";
import { Logo } from "@/components/Logo";
import { comingSoonHref, site, waLink } from "@/lib/site";

const cols = [
  {
    title: "Services",
    links: [
      { href: "/land-security", label: "Land Security" },
      { href: "/land-transfer", label: "Land Transfer" },
      { href: "/nri", label: "NRI Services" },
      { href: "/services/watch", label: "Property Monitoring" },
      { href: "/services/manage", label: "Home & Tenant Management" },
      { href: "/services/comply", label: "Records & Compliance" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/guides", label: "Guides" },
      { href: "/land-risk-check", label: "Land Risk Check" },
      { href: "/transfer-readiness", label: "Transfer Readiness Check" },
      { href: "/sample-report", label: "Sample Report" },
      { href: "/coverage", label: "Coverage" },
      { href: "/nri-checklist", label: "NRI Land Protection Checklist" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/pricing", label: "Pricing" },
      { href: "/compare", label: "Compare" },
      { href: "/faq", label: "FAQ" },
      { href: comingSoonHref("buy"), label: "Buy · Sell · Rent (coming soon)" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms and Conditions" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/cookies", label: "Cookie Policy" },
      { href: "/terms#disclaimer", label: "Disclaimer" },
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
            Land security and land transfer for people who cannot be physically
            present near their property. Verified visits, geo-tagged evidence,
            WhatsApp updates.
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
            <br />
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-stamp">
              WhatsApp the desk
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
      <div className="border-t border-rule py-4 text-xs">
        <div className="container flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Field inspections, scores and reports are
            informational — not legal opinions or title certification. Guides are general
            information, not legal or tax advice.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link href="/privacy" className="hover:text-stamp">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-stamp">
              Terms and Conditions
            </Link>
            <Link href="/cookies" className="hover:text-stamp">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
