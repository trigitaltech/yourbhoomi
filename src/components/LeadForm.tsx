"use client";

import { useState } from "react";
import { LegalConsent } from "@/components/LegalConsent";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import { submitLead } from "@/lib/submit-lead";

export type LeadVariant = "tour" | "waitlist" | "contact" | "security" | "transfer";

export const TRANSFER_TYPES = ["Sale", "Gift", "Inheritance / succession", "Partition", "Not sure yet"];

const copy: Record<LeadVariant, { button: string; done: string }> = {
  tour: { button: "Request a visit", done: "Thank you. A Your Bhoomi advisor will reach out within one business day." },
  waitlist: { button: "Notify me", done: "You are on the list. We will write when we open in your city." },
  contact: { button: "Send message", done: "Thank you. A Your Bhoomi advisor will reach out within one business day." },
  security: {
    button: "Book my first inspection",
    done: "Thank you. Our security desk will message you on WhatsApp within one business day to schedule the visit.",
  },
  transfer: {
    button: "Speak with a transfer coordinator",
    done: "Thank you. A transfer coordinator will message you on WhatsApp within one business day.",
  },
};

const placeholders: Record<LeadVariant, string> = {
  tour: "Property address and a good time for a visit",
  waitlist: "",
  contact: "What worries you most: watch, repairs, transfer, or records?",
  security: "Anything we should know: last visit, fence, caretaker, neighbours (optional)",
  transfer: "Who owns it today, who it should go to, and what documents you hold (optional)",
};

// Short forms by design: name + WhatsApp + where the property is. Everything else is optional.
export function LeadForm({ variant }: { variant: LeadVariant }) {
  const [status, setStatus] = useState<"idle" | "busy" | "sent">("idle");
  const [error, setError] = useState("");

  if (status === "sent") {
    return (
      <p className="rounded-lg bg-stamp-soft p-5 text-sm text-stamp" role="status">
        {copy[variant].done}
      </p>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("busy");
    setError("");
    try {
      await submitLead(variant, new FormData(e.currentTarget));
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("idle");
    }
  }

  const askState = variant === "security" || variant === "transfer";
  return (
    <form className="grid gap-3" onSubmit={handleSubmit}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <label className="grid gap-1 text-sm">
        <span className="sr-only">Full name</span>
        <input required name="name" placeholder="Full name" className="field" autoComplete="name" />
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
      {askState ? (
        <>
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
          {variant === "security" ? (
            <label className="grid gap-1 text-sm">
              <span className="sr-only">Property district</span>
              <input required name="district" placeholder="Property district" className="field" />
            </label>
          ) : (
            <label className="grid gap-1 text-sm">
              <span className="sr-only">Transfer type</span>
              <select required name="transfer_type" className="field" defaultValue="">
                <option value="" disabled>
                  Transfer type
                </option>
                {TRANSFER_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
          )}
        </>
      ) : (
        <label className="grid gap-1 text-sm">
          <span className="sr-only">Where is the property?</span>
          <input required={variant !== "tour"} name="city" placeholder="Where is the property?" className="field" />
        </label>
      )}
      <label className="grid gap-1 text-sm">
        <span className="sr-only">Email (optional)</span>
        <input type="email" name="email" placeholder="Email (optional)" className="field" autoComplete="email" />
      </label>
      {variant !== "waitlist" && (
        <label className="grid gap-1 text-sm">
          <span className="sr-only">Message</span>
          <textarea name="message" rows={3} placeholder={placeholders[variant]} className="field" />
        </label>
      )}
      <LegalConsent />
      <button type="submit" className="btn btn-primary" disabled={status === "busy"}>
        {status === "busy" ? "Sending…" : copy[variant].button}
      </button>
      {error && (
        <div className="text-sm text-seal" role="alert">
          <p>{error}</p>
          <div className="mt-2">
            <WhatsAppButton source="lead-form-fallback" className="!py-2">
              Message us on WhatsApp instead
            </WhatsAppButton>
          </div>
        </div>
      )}
    </form>
  );
}
