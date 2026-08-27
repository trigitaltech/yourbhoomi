"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { megaNav, searchSuggestions, type MegaColumn, type MegaLink, type NavItem } from "@/lib/nav";

const accent: Record<NonNullable<MegaLink["accent"]>, string> = {
  blue: "bg-g-blue",
  green: "bg-g-green",
  yellow: "bg-g-yellow",
  red: "bg-g-red",
};

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} aria-hidden>
      <path fill="currentColor" d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3-3" strokeLinecap="round" />
    </svg>
  );
}

function MegaColumns({
  columns,
  featured,
  onNavigate,
  compact = false,
}: {
  columns: MegaColumn[];
  featured?: MegaLink & { cta: string };
  onNavigate: () => void;
  compact?: boolean;
}) {
  return (
    <div className={`grid gap-8 py-6 ${compact ? "px-1" : "container py-8 lg:grid-cols-[1fr_18rem]"}`}>
      <div className={`grid gap-8 sm:grid-cols-2 ${columns.length > 2 ? "lg:grid-cols-3" : ""}`}>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-medium uppercase tracking-wide text-ink-2">{col.title}</p>
            <ul className="mt-3 space-y-1">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    onClick={onNavigate}
                    className="flex gap-3 rounded-lg px-2 py-2 hover:bg-hover"
                  >
                    {l.accent ? (
                      <span className={`mt-1 h-3 w-3 shrink-0 rounded-sm ${accent[l.accent]}`} aria-hidden />
                    ) : null}
                    <span>
                      <span className="block text-sm text-ink">{l.label}</span>
                      {l.blurb ? <span className="mt-0.5 block text-xs text-ink-2">{l.blurb}</span> : null}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {featured ? (
        <aside className="rounded-2xl bg-paper-2 p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-ink-2">Featured</p>
          <p className="mt-2 text-base font-medium text-ink">{featured.label}</p>
          {featured.blurb ? <p className="mt-2 text-sm text-ink-2">{featured.blurb}</p> : null}
          <Link href={featured.href} onClick={onNavigate} className="btn btn-primary mt-4">
            {featured.cta}
          </Link>
        </aside>
      ) : null}
    </div>
  );
}

function isMega(item: NavItem): item is Extract<NavItem, { kind: "mega" }> {
  return item.kind === "mega";
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLElement>(null);
  const leaveTimer = useRef<number | undefined>(undefined);
  const searchId = useId();

  function closeAll() {
    window.clearTimeout(leaveTimer.current);
    setOpen(null);
    setMobile(false);
    setSearchOpen(false);
  }

  function cancelClose() {
    window.clearTimeout(leaveTimer.current);
  }

  function scheduleClose() {
    window.clearTimeout(leaveTimer.current);
    leaveTimer.current = window.setTimeout(() => setOpen(null), 180);
  }

  useEffect(() => {
    closeAll();
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeAll();
    }
    function onPointer(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(null);
        setSearchOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, []);

  const activeMega = megaNav.find((i) => isMega(i) && i.id === open);

  return (
    <header
      ref={rootRef}
      className="fixed inset-x-0 top-0 z-50 bg-paper shadow-[var(--shadow-header)]"
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
    >
      <div className="container flex h-16 items-center gap-2">
        <Link href="/" aria-label="Your Bhoomi home" className="shrink-0" onClick={closeAll}>
          <Logo />
        </Link>

        <nav className="ml-4 hidden items-center lg:flex" aria-label="Main">
          {megaNav.map((item) =>
            item.kind === "link" ? (
              <Link key={item.id} href={item.href} className="nav-trigger">
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                type="button"
                className="nav-trigger"
                aria-expanded={open === item.id}
                aria-controls={`mega-${item.id}`}
                onClick={() => {
                  setSearchOpen(false);
                  setOpen(item.id);
                }}
                onMouseEnter={() => {
                  setSearchOpen(false);
                  setOpen(item.id);
                }}
              >
                {item.label}
                <Chevron open={open === item.id} />
              </button>
            ),
          )}
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            className="nav-trigger h-10 w-10 justify-center p-0"
            aria-expanded={searchOpen}
            aria-controls={searchId}
            aria-label="Open search"
            onClick={() => {
              setOpen(null);
              setSearchOpen((v) => !v);
            }}
          >
            <SearchIcon />
          </button>
          <Link href="/contact" className="nav-trigger hidden xl:inline-flex">
            Contact
          </Link>
          <Link href="/contact" className="btn btn-outline !py-2 hidden sm:inline-flex">
            Contact us
          </Link>
          <Link href="/land-risk-check" className="btn btn-primary !py-2">
            Get started
          </Link>
          <button
            type="button"
            className="rounded-md p-2 lg:hidden"
            aria-expanded={mobile}
            aria-controls="mobile-nav"
            aria-label="Menu"
            onClick={() => {
              setSearchOpen(false);
              setMobile((v) => !v);
            }}
          >
            <span className="block h-0.5 w-6 bg-ink" />
            <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
            <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          </button>
        </div>
      </div>

      {searchOpen && (
        <div id={searchId} className="border-t border-rule bg-paper">
          <form action="/search" method="get" className="container py-4" role="search">
            <label htmlFor="site-q" className="sr-only">
              Search this site
            </label>
            <div className="flex items-center gap-3 rounded-full border border-rule bg-paper-2 px-4 py-2 focus-within:border-stamp">
              <SearchIcon />
              <input
                ref={searchRef}
                id="site-q"
                name="q"
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Search land security, transfer, mutation, POA…"
                autoComplete="off"
              />
              <button type="submit" className="btn btn-primary !py-1.5 !px-4">
                Search
              </button>
            </div>
            <p className="mt-3 text-xs text-ink-2">Popular</p>
            <ul className="mt-2 flex flex-wrap gap-2" aria-label="Popular suggestions">
              {searchSuggestions.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    onClick={closeAll}
                    className="inline-flex rounded-full border border-rule px-3 py-1 text-sm hover:border-stamp hover:bg-stamp-soft"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </form>
        </div>
      )}

      {activeMega && isMega(activeMega) && (
        <div
          id={`mega-${activeMega.id}`}
          className="hidden border-t border-rule bg-paper shadow-[var(--shadow-mega)] lg:block"
        >
          <MegaColumns columns={activeMega.columns} featured={activeMega.featured} onNavigate={closeAll} />
        </div>
      )}

      {mobile && (
        <nav id="mobile-nav" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-rule bg-paper px-4 py-3 lg:hidden" aria-label="Mobile">
          {megaNav.map((item) =>
            item.kind === "link" ? (
              <Link key={item.id} href={item.href} onClick={closeAll} className="block rounded-lg px-2 py-2 hover:bg-hover">
                {item.label}
              </Link>
            ) : (
              <details key={item.id} className="border-b border-rule py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between px-2 py-2 marker:hidden">
                  {item.label}
                  <Chevron />
                </summary>
                <MegaColumns columns={item.columns} featured={item.featured} onNavigate={closeAll} compact />
              </details>
            ),
          )}
          <Link href="/contact" onClick={closeAll} className="btn btn-outline mt-3 w-full">
            Contact us
          </Link>
        </nav>
      )}
    </header>
  );
}
