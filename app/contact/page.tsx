import type { Metadata } from "next";
import { ContactSection, FinalCta } from "@/components/sections";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mahira Karate Classes at 98497 01533 or 96766 67549. Located at #32-4-56, Nathayyapalem, Near BHEL, Vizag, A.P., India.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="Join Karate Classes Near BHEL Vizag" text="Call, WhatsApp, or visit Mahira Karate Classes in Nathayyapalem to reserve a seat." />
      <ContactSection />
      <FinalCta />
    </main>
  );
}
