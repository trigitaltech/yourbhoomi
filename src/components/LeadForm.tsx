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
      <input required name="name" placeholder="Full name" className="field" autoComplete="name" />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        className="field"
        autoComplete="email"
      />
      <input
        required
        type="tel"
        name="phone"
        placeholder="WhatsApp number (with country code)"
        className="field"
        autoComplete="tel"
      />
      {(variant === "waitlist" || variant === "contact") && (
        <input required name="city" placeholder="Where is the property?" className="field" />
      )}
      {variant !== "waitlist" && (
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
      )}
      <button type="submit" className="btn btn-primary">
        {variant === "waitlist" ? "Notify me" : variant === "tour" ? "Request a visit" : "Send message"}
      </button>
    </form>
  );
}
