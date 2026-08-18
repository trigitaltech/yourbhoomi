"use client";

import Link from "next/link";
import { useState } from "react";
import { LegalConsent } from "@/components/LegalConsent";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { track } from "@/lib/analytics";
import { indiaStates } from "@/lib/india-states";
import { coverageDistricts } from "@/lib/site";
import { submitLead } from "@/lib/submit-lead";

type Search = { state: string; district: string; place: string; pin: string };
type Status = "covered" | "partial" | "none";
type Result = Search & { status: Status };

const OTHER = "Other district";

function coverageStatus(state: string, district: string): Status {
  const list = coverageDistricts[state];
  if (!list) return "none";
  const d = district.trim().toLowerCase();
  if (!d || list.some((x) => x.toLowerCase() === d)) return "covered";
  return "partial";
}

export function CoverageChecker({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState(indiaStates[0]);
  const [result, setResult] = useState<Result | null>(null);
  const districts = coverageDistricts[state];
  const pad = compact ? "p-4" : "p-6";

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const picked = String(f.get("district") ?? "");
    const district = (picked === OTHER ? String(f.get("districtOther") ?? "") : picked).trim();
    const search: Search = { state, district, place: String(f.get("place") ?? "").trim(), pin: String(f.get("pin") ?? "").trim() };
    const status = coverageStatus(state, district);
    track("coverage_search", { state, district, covered: status !== "none" });
    setResult({ ...search, status });
  }

  return (
    <div className={compact ? "grid gap-4" : "grid gap-6"}>
      <form onSubmit={handleSearch} className={`card grid gap-3 sm:grid-cols-2 ${pad}`}>
        <label className="grid gap-1 text-sm">
          <span className="text-ink-2">State</span>
          <select name="state" value={state} onChange={(e) => setState(e.target.value)} className="field">
            {indiaStates.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-ink-2">District</span>
          {districts ? (
            <select name="district" className="field" defaultValue="">
              <option value="">Select district</option>
              {districts.map((d) => (
                <option key={d}>{d}</option>
              ))}
              <option>{OTHER}</option>
            </select>
          ) : (
            <input name="district" placeholder="District" className="field" />
          )}
        </label>
        {districts && (
          <label className="grid gap-1 text-sm sm:col-span-2">
            <span className="text-ink-2">If other, type the district</span>
            <input name="districtOther" placeholder="District name" className="field" />
          </label>
        )}
        <label className="grid gap-1 text-sm">
          <span className="text-ink-2">City / town / village (optional)</span>
          <input name="place" className="field" />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-ink-2">PIN code (optional)</span>
          <input name="pin" inputMode="numeric" pattern="[0-9]{6}" title="6-digit PIN code" className="field" />
        </label>
        <button type="submit" className="btn btn-primary sm:col-span-2 sm:justify-self-start">
          Check coverage
        </button>
      </form>
      {result &&
        (result.status === "none" ? (
          <ExpandingResult key={result.state + result.district} search={result} pad={pad} />
        ) : (
          <CoveredResult r={result} pad={pad} />
        ))}
    </div>
  );
}

function CoveredResult({ r, pad }: { r: Result; pad: string }) {
  const where = r.district ? `${r.district}, ${r.state}` : r.state;
  const partial = r.status === "partial";
  return (
    <div className={`rounded-lg bg-stamp-soft ${pad}`} role="status">
      <h3 className="text-lg font-semibold text-stamp">
        {partial ? `We serve ${r.state}; ${r.district} is served on request` : `YourBhoomi is available in ${where}`}
      </h3>
      <ul className="mt-3 space-y-1 text-sm text-ink">
        <li className="flex gap-2">
          <span className="text-seal">✓</span>Land Security — available
        </li>
        <li className="flex gap-2">
          <span className="text-seal">✓</span>Transfer support — available
        </li>
        <li>Expected first visit: within 7–10 working days of confirming the plot details</li>
      </ul>
      <div className="mt-4 flex flex-wrap gap-3">
        <WhatsAppButton
          message={`Hi YourBhoomi, I'd like to book an inspection for my land in ${where}.${partial ? " I understand this district is served on request." : ""}`}
          source={partial ? "coverage-partial" : "coverage-covered"}
        >
          Book an Inspection
        </WhatsAppButton>
        <Link href="/land-security" className="btn btn-outline">
          Explore Land Security
        </Link>
      </div>
    </div>
  );
}

function ExpandingResult({ search, pad }: { search: Search; pad: string }) {
  const [status, setStatus] = useState<"idle" | "busy" | "sent">("idle");
  const [error, setError] = useState("");
  const location = [search.district, search.state, search.place, search.pin].filter(Boolean).join(", ");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("busy");
    setError("");
    try {
      await submitLead("coverage", new FormData(e.currentTarget));
      track("coverage_lead", { state: search.state });
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <p className={`rounded-lg bg-stamp-soft ${pad} text-sm text-stamp`} role="status">
        Thank you — you&apos;re first in line when we open in {search.state}.
      </p>
    );
  }
  return (
    <div className={`card ${pad}`}>
      <h3 className="text-lg font-semibold text-ink">We are expanding to {search.state}</h3>
      <p className="mt-1 text-sm text-ink-2">Leave your details and we will write when we open there. Expansion is planned by demand.</p>
      <form className="mt-4 grid gap-3" onSubmit={handleSubmit}>
        <input name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
        <input type="hidden" name="state" value={search.state} />
        <input type="hidden" name="district" value={search.district} />
        <input type="hidden" name="place" value={search.place} />
        <input type="hidden" name="pin" value={search.pin} />
        <input required name="name" placeholder="Full name" className="field" autoComplete="name" />
        <input required type="tel" name="phone" placeholder="WhatsApp number (with country code)" className="field" autoComplete="tel" />
        <input type="email" name="email" placeholder="Email (optional)" className="field" autoComplete="email" />
        <label className="grid gap-1 text-sm">
          <span className="text-ink-2">Required service</span>
          <select name="service" className="field" defaultValue="Land Security">
            <option>Land Security</option>
            <option>Land Transfer</option>
            <option>Both</option>
          </select>
        </label>
        <p className="text-xs text-ink-2">Location: {location}</p>
        <LegalConsent />
        <button type="submit" disabled={status === "busy"} className="btn btn-primary justify-self-start">
          {status === "busy" ? "Sending…" : "Request YourBhoomi in My Area"}
        </button>
        {error && (
          <div className="grid gap-2 text-sm text-seal" role="alert">
            <p>{error}</p>
            <WhatsAppButton
              className="justify-self-start"
              message={`Hi YourBhoomi, please let me know when you open in ${location}.`}
              source="coverage-lead-fallback"
            >
              Send on WhatsApp instead
            </WhatsAppButton>
          </div>
        )}
      </form>
    </div>
  );
}
