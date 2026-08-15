"use client";

import { useState } from "react";

export function LeadForm({ variant }: { variant: "tour" | "waitlist" | "contact" }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="rounded-xl bg-green/10 p-6 text-green">
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
      <input
        required
        name="name"
        placeholder="Full name"
        className="rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        className="rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm"
      />
      <input
        required
        name="phone"
        placeholder="Phone"
        className="rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm"
      />
      {(variant === "waitlist" || variant === "contact") && (
        <input
          required
          name="city"
          placeholder="Your city / property city"
          className="rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm"
        />
      )}
      {variant !== "waitlist" && (
        <textarea
          name="message"
          rows={4}
          placeholder={
            variant === "tour"
              ? "Property address and a good time for a visit"
              : "How can we help — watch, manage, transfer, or comply?"
          }
          className="rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm"
        />
      )}
      <button
        type="submit"
        className="rounded-full bg-green px-5 py-3 text-sm font-medium text-white hover:bg-green-light"
      >
        {variant === "waitlist"
          ? "Notify me"
          : variant === "tour"
            ? "Schedule a tour"
            : "Send message"}
      </button>
    </form>
  );
}
