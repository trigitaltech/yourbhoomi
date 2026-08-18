export const CONSENT_STORAGE = "yb-cookie-consent";
export const CONSENT_COOKIE = "yb_consent";
export const CONSENT_EVENT = "yb-cookie-consent";

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  updatedAt: string;
};

export function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (parsed?.necessary !== true) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(analytics: boolean): CookieConsent {
  const value: CookieConsent = {
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_STORAGE, JSON.stringify(value));
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${analytics ? "all" : "essential"}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new Event(CONSENT_EVENT));
  return value;
}

export function resetConsent() {
  localStorage.removeItem(CONSENT_STORAGE);
  document.cookie = `${CONSENT_COOKIE}=; Max-Age=0; Path=/`;
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
