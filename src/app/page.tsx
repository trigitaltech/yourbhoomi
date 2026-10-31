import type { Metadata } from "next";
import { AgentsTeaser } from "@/components/home/AgentsTeaser";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { CtaBand } from "@/components/home/CtaBand";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { NriDesk } from "@/components/home/NriDesk";
import { ServiceCards } from "@/components/home/ServiceCards";
import { Steps } from "@/components/home/Steps";
import { Testimonials } from "@/components/home/Testimonials";
import { CoverageSection, PricingTeaser, RiskCheckTeaser, SampleReportSection } from "@/components/home/Tools";
import { TrustBar } from "@/components/home/TrustBar";
import { YourMan } from "@/components/home/YourMan";
import { seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: seo.homeTitle },
  description: seo.homeDescription,
  alternates: { canonical: "/", languages: { "en-IN": "/", "x-default": "/" } },
  openGraph: {
    title: seo.homeTitle,
    description: seo.homeDescription,
    url: "/",
    type: "website",
  },
};

// Section order follows the growth spec: hero → trust → two services → sample report → risk check
// → how it works → before/after → coverage → representative → NRI → agents app → testimonials → pricing → FAQ → final CTA.
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServiceCards />
      <SampleReportSection />
      <RiskCheckTeaser />
      <Steps />
      <BeforeAfter />
      <CoverageSection />
      <YourMan />
      <NriDesk />
      <AgentsTeaser />
      <Testimonials />
      <PricingTeaser />
      <Faq />
      <CtaBand />
    </>
  );
}
