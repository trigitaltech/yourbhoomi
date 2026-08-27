"use client";

import Link from "next/link";
import { useState } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

interface StepItem {
  num: string;
  badge: string;
  title: string;
  subtitle: string;
  body: string;
  highlight: string;
  icon: "whatsapp" | "rep" | "camera" | "shield";
  details: string[];
}

const stepsData: StepItem[] = [
  {
    num: "01",
    badge: "1-Minute Setup",
    title: "Tell us on WhatsApp",
    subtitle: "Share location & concerns",
    body: "Send your plot location (village/survey number), any deeds or ECs you hold, and what worries you most about your land.",
    highlight: "Instant intake · 100% confidential",
    icon: "whatsapp",
    details: ["No registration forms needed", "Direct chat with dedicated file coordinator", "Encrypted document sharing"],
  },
  {
    num: "02",
    badge: "Local Audit",
    title: "We assign your local field manager",
    subtitle: "ID-verified representative in your district",
    body: "An ID-verified local manager visits your ancestral plot, checks boundary stones, takes ground photos, and verifies local revenue records.",
    highlight: "Report dispatched within 7 days",
    icon: "rep",
    details: ["ID-verified ground staff", "Physical boundary verification", "Revenue & Patta record check"],
  },
  {
    num: "03",
    badge: "Live Monitoring",
    title: "You watch from anywhere",
    subtitle: "Real-time updates in your time zone",
    body: "Receive geo-tagged HD photos, 4K video walkthroughs, and official municipal receipts on the schedule you select — synchronized with your local time zone.",
    highlight: "US / UK / Gulf time zone friendly",
    icon: "camera",
    details: ["GPS & timestamp tagged media", "Customizable inspection frequency", "Direct WhatsApp notifications"],
  },
  {
    num: "04",
    badge: "Action & Resolution",
    title: "We act when it matters",
    subtitle: "Protection, repairs & legal transfer",
    body: "Encroachment removal, fence installation, Dharani/Patta mutation, or transfer deeds — executed cleanly on the ground and summarized in plain English.",
    highlight: "Zero middleman hassle",
    icon: "shield",
    details: ["Fencing & boundary signages", "Dharani & revenue department support", "Plain-English legal summary"],
  },
];

function StepIcon({ type }: { type: StepItem["icon"] }) {
  if (type === "whatsapp") {
    return (
      <svg className="h-6 w-6 text-whatsapp" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
      </svg>
    );
  }
  if (type === "rep") {
    return (
      <svg className="h-6 w-6 text-stamp" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  }
  if (type === "camera") {
    return (
      <svg className="h-6 w-6 text-stamp" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    );
  }
  return (
    <svg className="h-6 w-6 text-seal" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

export function Steps() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="how" className="relative border-y border-rule bg-paper py-16 sm:py-20" aria-labelledby="how-heading">
      {/* Background radial glow effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-stamp/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-stamp/20 bg-stamp-soft px-3.5 py-1 text-xs font-semibold text-stamp shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-stamp opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-stamp" />
            </span>
            HOW IT WORKS · 4 SIMPLE STEPS
          </div>
          <h2 id="how-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            From your phone to your plot, in 4 seamless steps
          </h2>
          <p className="mt-3 text-base text-ink-2 sm:text-lg">
            No middleman delays, no local hassle. Monitor, protect, and manage your Indian real estate directly from WhatsApp.
          </p>
        </div>

        {/* Desktop Process Rail Line */}
        <div className="relative mt-14">
          <div className="absolute top-1/2 left-8 right-8 hidden h-1 -translate-y-1/2 bg-rule lg:block" aria-hidden="true">
            <div
              className="h-full bg-gradient-to-r from-stamp via-whatsapp to-stamp transition-all duration-500 animate-flow-rail rounded-full"
              style={{ width: `${((activeStep + 1) / stepsData.length) * 100}%` }}
            />
          </div>

          {/* 4 Step Cards Grid */}
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stepsData.map((s, index) => {
              const isActive = activeStep === index;

              return (
                <li
                  key={s.num}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className={`group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-stamp bg-paper-2 shadow-card -translate-y-2 ring-2 ring-stamp/20"
                      : "border-rule bg-paper-2/80 hover:border-stamp/60 hover:bg-paper-2 hover:-translate-y-1 hover:shadow-sm"
                  }`}
                >
                  {/* Top Highlight Accent Bar */}
                  <div
                    className={`h-1.5 w-full rounded-t-2xl transition-all duration-300 ${
                      isActive ? "bg-gradient-to-r from-stamp to-whatsapp" : "bg-transparent group-hover:bg-stamp/40"
                    }`}
                  />

                  <div className="p-6">
                    {/* Header Row: Badge & Step Number */}
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-stamp-soft px-2.5 py-1 text-[11px] font-semibold text-stamp">
                        {s.badge}
                      </span>
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                          isActive
                            ? "bg-stamp text-white shadow-md scale-110"
                            : "bg-paper text-stamp border border-rule group-hover:border-stamp"
                        }`}
                      >
                        {s.num}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="mt-5 flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-rule bg-paper group-hover:scale-105 transition-transform duration-200">
                        <StepIcon type={s.icon} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-ink group-hover:text-stamp transition-colors">
                          {s.title}
                        </h3>
                        <p className="text-xs text-ink-2 font-medium">{s.subtitle}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-xs leading-relaxed text-ink-2">{s.body}</p>

                    {/* Bullet Highlights */}
                    <ul className="mt-4 space-y-1.5 border-t border-rule/60 pt-3">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-[11px] font-medium text-ink">
                          <span className="h-1.5 w-1.5 rounded-full bg-stamp shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer Badge */}
                  <div className="mx-6 mb-6 rounded-lg bg-paper border border-rule p-2.5 text-center text-[11px] font-semibold text-stamp">
                    {s.highlight}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Interactive Step Preview Detail Box */}
        <div className="mt-10 rounded-2xl border border-rule bg-paper-2 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-stamp-soft text-stamp">
                <StepIcon type={stepsData[activeStep].icon} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stamp">
                  Active Overview · Step {stepsData[activeStep].num}
                </span>
                <h4 className="text-lg font-semibold text-ink sm:text-xl">
                  {stepsData[activeStep].title} — {stepsData[activeStep].subtitle}
                </h4>
                <p className="mt-1 text-xs text-ink-2 sm:text-sm">
                  {stepsData[activeStep].body}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <WhatsAppButton
                message={`Hi Your Bhoomi team, I'd like to get started with Step 1 (${stepsData[activeStep].title}) for my property.`}
                source="how_it_works_section"
                className="btn btn-whatsapp text-xs font-semibold px-5 py-3 shadow-sm hover:shadow"
              >
                Start Step 1 on WhatsApp
              </WhatsAppButton>
              <Link href="/coverage" className="btn btn-outline text-xs px-4 py-3">
                Check District Coverage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
