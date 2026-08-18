"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { captureAttribution } from "@/lib/analytics";
import { CONSENT_EVENT, readConsent } from "@/lib/cookie-consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// GA4 loads only once the visitor accepts analytics cookies. Attribution is first-party localStorage.
export function Analytics() {
  const [allowed, setAllowed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    captureAttribution();
  }, []);

  useEffect(() => {
    const sync = () => setAllowed(!!readConsent()?.analytics);
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  useEffect(() => {
    if (allowed && window.gtag && GA_ID) window.gtag("event", "page_view", { page_path: pathname });
  }, [allowed, pathname]);

  if (!GA_ID || !allowed) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
