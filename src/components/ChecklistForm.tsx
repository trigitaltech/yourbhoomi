"use client";

import Link from "next/link";
import { useState } from "react";
import { LegalConsent } from "@/components/LegalConsent";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";
import { submitLead } from "@/lib/submit-lead";

const COUNTRIES = ["United States", "United Kingdom", "United Arab Emirates", "Canada", "Australia", "Singapore", "Other"];

// Lead magnet form: name, country, WhatsApp, property state. Email optional. Nothing else.
export function ChecklistForm() {
  const [status, setStatus] = useState<"idle" | "busy" | "sent">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("busy");
    setError("");
    try {
      await submitLead("checklist", new FormData(e.currentTarget));
      track("checklist_download");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg bg-stamp-soft p-5 text-sm text-stamp" role="status">
        <p className="font-medium">Thank you — the checklist is yours.</p>
        <p className="mt-1">
          We will also send it on WhatsApp within one business day. Save a copy now, then see how your
          own land scores.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button type="button" onClick={() => window.print()} className="btn btn-primary">
            Download / print checklist
          </button>
          <Link href="/land-risk-check" className="btn btn-outline">
            Take the Land Risk Check
          </Link>
          <WhatsAppButton
            message="Hi YourBhoomi, I've read the NRI Land Protection Checklist and would like to book a first inspection for my land in [district, state]."
            source="checklist-book"
          >
            Book an Inspection
          </WhatsAppButton>
        </div>
      </div>
    );
  }

  return (
    <form className="grid gap-3" onSubmit={handleSubmit}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="sr-only">Full name</span>
          <input required name="name" placeholder="Full name" className="field" autoComplete="name" />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="sr-only">Country you live in</span>
          <select required name="country" className="field" defaultValue="">
            <option value="" disabled>
              Country you live in
            </option>
            {COUNTRIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          <span className="sr-only">WhatsApp number</span>
          <input
            required
            type="tel"
            name="phone"
            placeholder="WhatsApp number (with country code)"
            className="field"
            autoComplete="tel"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="sr-only">Property state</span>
          <select required name="state" className="field" defaultValue="">
            <option value="" disabled>
              Property state
            </option>
            {site.coverage.map((s) => (
              <option key={s}>{s}</option>
            ))}
            <option>Other</option>
          </select>
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        <span className="sr-only">Email (optional)</span>
        <input type="email" name="email" placeholder="Email (optional)" className="field" autoComplete="email" />
      </label>
      <LegalConsent />
      <button type="submit" className="btn btn-primary w-fit" disabled={status === "busy"}>
        {status === "busy" ? "Sending…" : "Get the checklist"}
      </button>
      {error && (
        <p className="text-sm text-seal" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
