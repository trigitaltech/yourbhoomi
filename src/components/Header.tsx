"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/properties", label: "Properties" },
  { href: "/#how", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/90 text-cream backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="font-serif text-xl tracking-tight">
          Your <span className="text-gold">Bhoomi</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-gold">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-green px-4 py-2 font-medium text-white hover:bg-green-light"
          >
            Get Started
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-cream" />
          <span className="mt-1.5 block h-0.5 w-6 bg-cream" />
          <span className="mt-1.5 block h-0.5 w-6 bg-cream" />
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-3 border-t border-white/10 px-4 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-green px-4 py-2 text-center text-white"
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}
