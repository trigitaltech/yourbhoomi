"use client";

import { getAttribution, track } from "@/lib/analytics";

/** POST a lead to /api/lead with first-touch attribution attached. Throws with a user-facing message. */
export async function submitLead(kind: string, form: FormData | Record<string, string>) {
  const entries = (form instanceof FormData ? Object.fromEntries(form.entries()) : form) as Record<string, string>;
  const { name, phone, email, website, ...fields } = entries;
  delete fields.legal; // consent checkbox — required client-side, not a lead field
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ kind, name, phone, email, website, fields, attribution: getAttribution() }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
  track("lead_submit", { kind });
}
