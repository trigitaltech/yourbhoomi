"use client";

import { useState } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { FeatureKey } from "@/lib/site";

type Props = { feature: FeatureKey; label: string };

export function InterestForm({ feature, label }: Props) {
  const [status, setStatus] = useState<"idle" | "busy" | "sent">("idle");
  const [error, setError] = useState("");

  if (status === "sent") {
    return (
      <p className="rounded-lg bg-stamp-soft p-5 text-sm text-stamp" role="status">
        Thank you — you are on the list. We will message you on WhatsApp the moment {label} goes live.
      </p>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("busy");
    setError("");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          feature,
          name: fd.get("name"),
          phone: fd.get("phone"),
          email: fd.get("email"),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("idle");
    }
  }

  return (
    <form className="grid gap-3" onSubmit={handleSubmit}>
      <input required name="name" placeholder="Full name" className="field" autoComplete="name" />
      <input
        required
        type="tel"
        name="phone"
        placeholder="WhatsApp number (with country code)"
        className="field"
        autoComplete="tel"
      />
      <input type="email" name="email" placeholder="Email (optional)" className="field" autoComplete="email" />
      <button type="submit" className="btn btn-primary" disabled={status === "busy"}>
        {status === "busy" ? "Saving…" : `Notify me when ${label} launches`}
      </button>
      {error && (
        <div className="text-sm text-seal" role="alert">
          <p>{error}</p>
          <div className="mt-2">
            <WhatsAppButton message={`Hi, please notify me when ${label} launches on Your Bhoomi.`} className="!py-2">
              Message us on WhatsApp instead
            </WhatsAppButton>
          </div>
        </div>
      )}
      <p className="text-xs text-ink-2">
        We only use this to tell you when {label} is available. No spam.
      </p>
    </form>
  );
}
