import type { Metadata } from "next";
import { CtaBand } from "@/components/home/CtaBand";
import { Faq } from "@/components/home/Faq";
import { Featured } from "@/components/home/Featured";
import { Hero } from "@/components/home/Hero";
import { NriDesk } from "@/components/home/NriDesk";
import { Steps } from "@/components/home/Steps";
import { Testimonials } from "@/components/home/Testimonials";
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

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <YourMan />
      <Steps />
      <NriDesk />
      <Featured />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}
