import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PwaRegister } from "@/components/PwaRegister";
import { WhatsAppFab } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import "./globals.css";

const dm = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Your Bhoomi — Your man in the city for the land you left behind",
    template: "%s | Your Bhoomi",
  },
  description:
    "Property management for NRIs and city families. An ID-verified local person watches, manages, transfers, and keeps your land in India compliant — reported on WhatsApp in plain language.",
  applicationName: site.name,
  appleWebApp: { capable: true, statusBarStyle: "default", title: site.name },
  openGraph: {
    title: "Your Bhoomi — Your man in the city",
    description:
      "Watch, manage, transact, and comply. Property care in India for families abroad.",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0e2a5c",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "Land security, property management and ancestral transfer services in India for NRIs.",
  url: site.url,
  areaServed: "IN",
  telephone: site.phone,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${dm.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <WhatsAppFab />
        <PwaRegister />
      </body>
    </html>
  );
}
