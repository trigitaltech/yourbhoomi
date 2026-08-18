// Analytics + attribution. GA4 loads only after cookie consent (see <Analytics />).
// track() is safe to call anywhere on the client; it no-ops when nothing is listening.

export const ATTRIBUTION_KEY = "yb-attribution";

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  landing_page?: string;
  referral_url?: string;
  first_visit_timestamp?: string;
};

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Store first-touch attribution once per browser. Call on every page view. */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const existing = localStorage.getItem(ATTRIBUTION_KEY);
    if (existing) return JSON.parse(existing) as Attribution;
    const params = new URLSearchParams(window.location.search);
    const a: Attribution = {
      landing_page: window.location.pathname + window.location.search,
      referral_url: document.referrer || undefined,
      first_visit_timestamp: new Date().toISOString(),
    };
    for (const k of UTM_KEYS) {
      const v = params.get(k);
      if (v) a[k] = v.slice(0, 120);
    }
    localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(a));
    return a;
  } catch {
    return {};
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(ATTRIBUTION_KEY) ?? "{}") as Attribution;
  } catch {
    return {};
  }
}

export function track(event: string, params: Record<string, string | number | boolean | undefined> = {}) {
  if (typeof window === "undefined") return;
  const payload = { ...params, page: window.location.pathname };
  if (window.gtag) window.gtag("event", event, payload);
  else (window.dataLayer ??= []).push({ event, ...payload });
}
