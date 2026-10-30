"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONSENT_EVENT, readConsent, resetConsent, writeConsent } from "@/lib/cookie-consent";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sync = () => setOpen(!readConsent());
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  useEffect(() => {
    if (open) document.documentElement.dataset.cookieBanner = "1";
    else delete document.documentElement.dataset.cookieBanner;
    return () => {
      delete document.documentElement.dataset.cookieBanner;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="region"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-body"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-rule bg-paper px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 shadow-card sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-md sm:rounded-2xl sm:border sm:p-5"
    >
      <p id="cookie-banner-title" className="font-semibold text-stamp">
        Cookies on Your Bhoomi
      </p>
      <p id="cookie-banner-body" className="mt-2 text-sm text-ink-2">
        We use a small cookie to remember this choice. Essential cookies keep the
        site working. Optional analytics stay off unless you accept. See the{" "}
        <Link href="/cookies" className="text-stamp underline">
          Cookie Policy
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-stamp underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button type="button" className="btn btn-primary !px-3 !py-2" onClick={() => writeConsent(true)}>
          Accept cookies
        </button>
        <button type="button" className="btn btn-outline !px-3 !py-2" onClick={() => writeConsent(false)}>
          Essential only
        </button>
      </div>
    </div>
  );
}

export function ManageCookiesButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`text-stamp underline ${className}`}
      onClick={() => resetConsent()}
    >
      Change cookie settings
    </button>
  );
}
