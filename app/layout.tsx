import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FloatingActions } from "@/components/floating-actions";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "Mahira Karate Classes | Shotokan Karate & Self Defense in Vizag",
    template: "%s | Mahira Karate Classes"
  },
  description: "Join Mahira Karate Classes near BHEL Vizag for Shotokan Karate, kids karate, girls self defense, fitness, discipline, and confidence training.",
  keywords: site.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mahira Karate Classes in Vizag",
    description: "Learn Shotokan Karate and self defense from 24 years experienced karate teachers at Mahira Shotokan Karate-Do India.",
    url: site.baseUrl,
    siteName: site.name,
    images: [{ url: "/images/og/mahira-karate-classes-og-image.png", width: 1200, height: 630, alt: "Mahira Karate Classes website preview image" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahira Karate Classes in Vizag",
    description: "Shotokan Karate, kids karate, and self defense classes near BHEL Vizag.",
    images: ["/images/og/mahira-karate-classes-og-image.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
