import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { ChatBot } from "@/components/ChatBot";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { PwaRegister } from "@/components/PwaRegister";
import { WhatsAppFab } from "@/components/WhatsAppButton";
import { seo, siteGraph } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.homeTitle,
    template: "%s | Your Bhoomi",
  },
  description: seo.homeDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "NRI property management",
  keywords: seo.keywords,
  appleWebApp: { capable: true, statusBarStyle: "default", title: site.name },
  openGraph: {
    title: seo.homeTitle,
    description: seo.homeDescription,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.homeTitle,
    description: seo.homeDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f9fa",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${roboto.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <JsonLd data={siteGraph()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-stamp focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
        <ChatBot />
        <CookieBanner />
        <PwaRegister />
        <Analytics />
      </body>
    </html>
  );
}
