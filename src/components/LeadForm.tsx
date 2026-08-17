"use client";

import { useState } from "react";

// ponytail: no backend yet — success state only. Wire to an API route / CRM when one exists.
export function LeadForm({ variant }: { variant: "tour" | "waitlist" | "contact" }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="rounded-lg bg-stamp-soft p-5 text-sm text-stamp" role="status">
        {variant === "waitlist"
          ? "You’re on the list. We’ll write when we open in your city."
          : "Thank you. A Your Bhoomi advisor will reach out within one business day."}
      </p>
    );
  }

  return (
    <form
      className="grid gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className="grid gap-1 text-sm">
        <span className="sr-only">Full name</span>
        <input required name="name" placeholder="Full name" className="field" autoComplete="name" />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="sr-only">Email</span>
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="field"
          autoComplete="email"
        />
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
      {(variant === "waitlist" || variant === "contact") && (
        <label className="grid gap-1 text-sm">
          <span className="sr-only">Where is the property?</span>
          <input required name="city" placeholder="Where is the property?" className="field" />
        </label>
      )}
      {variant !== "waitlist" && (
        <label className="grid gap-1 text-sm">
          <span className="sr-only">Message</span>
          <textarea
            name="message"
            rows={4}
            placeholder={
              variant === "tour"
                ? "Property address and a good time for a visit"
                : "What worries you most — watch, repairs, transfer, or records?"
            }
            className="field"
          />
        </label>
      )}
      <button type="submit" className="btn btn-primary">
        {variant === "waitlist" ? "Notify me" : variant === "tour" ? "Request a visit" : "Send message"}
      </button>
    </form>
  );
}
