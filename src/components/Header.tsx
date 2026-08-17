"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { nav } from "@/lib/site";

function NavLink({
  item,
  onClick,
  className,
}: {
  item: (typeof nav)[number];
  onClick?: () => void;
  className: string;
}) {
  return (
    <Link href={item.href} onClick={onClick} className={className}>
      {item.label}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" aria-label="Your Bhoomi home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-ink lg:flex" aria-label="Main">
          {nav.map((l) => (
            <NavLink key={l.label} item={l} className="hover:text-stamp" />
          ))}
          <WhatsAppButton className="!py-2">WhatsApp</WhatsAppButton>
        </nav>
        <button
          type="button"
          className="rounded-md p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-rule bg-paper px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          {nav.map((l) => (
            <NavLink
              key={l.label}
              item={l}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 hover:bg-paper-2"
            />
          ))}
          <WhatsAppButton className="mt-3">Chat on WhatsApp</WhatsAppButton>
        </nav>
      )}
    </header>
  );
}
