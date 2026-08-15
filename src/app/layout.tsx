import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const dm = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

const site = "https://yourbhoomi.in";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "Your Bhoomi — Land security & ancestral transfer",
    template: "%s | Your Bhoomi",
  },
  description:
    "Premium land and property management for families securing ancestral land. Encroachment, repairs, paperwork, and transfer — handled and reported in plain language.",
  openGraph: {
    title: "Your Bhoomi — Land security & ancestral transfer",
    description:
      "Watch, manage, transact, and comply. Property security and land transfer from your inbox to the plot.",
    url: site,
    siteName: "Your Bhoomi",
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Your Bhoomi",
  description:
    "Land security and ancestral property transfer services in India.",
  url: site,
  areaServed: "IN",
  telephone: "+91-40-4000-1200",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${dm.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
