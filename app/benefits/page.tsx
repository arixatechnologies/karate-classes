import type { Metadata } from "next";
import { BenefitsGrid, FinalCta, WhyKarate } from "@/components/sections";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Benefits",
  description: "Karate benefits include self defense, confidence, discipline, focus, fitness, endurance, respect, body balance, and mental strength.",
  alternates: { canonical: "/benefits" }
};

export default function BenefitsPage() {
  return (
    <main>
      <PageHero eyebrow="Benefits" title="Confidence, Discipline & Strength" text="Karate helps students become focused, fit, respectful, resilient, and ready to protect themselves." />
      <BenefitsGrid />
      <WhyKarate />
      <FinalCta />
    </main>
  );
}
