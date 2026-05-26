import type { Metadata } from "next";
import { AboutPreview, FinalCta, WhyKarate } from "@/components/sections";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Mahira Shotokan Karate-Do India, a disciplined karate academy in Vizag focused on self defense, confidence, endurance, and character development.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About" title="Mahira Shotokan Karate-Do India" text="A professional karate institute in Vizag helping students build confidence, focus, endurance, self defense skills, and character." />
      <AboutPreview />
      <WhyKarate />
      <FinalCta />
    </main>
  );
}
