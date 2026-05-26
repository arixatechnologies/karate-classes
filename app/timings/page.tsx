import type { Metadata } from "next";
import { FinalCta, TimingsCard } from "@/components/sections";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Timings",
  description: "Mahira Karate Classes timings: morning batch 5:00 AM to 9:00 AM and evening batch 5:00 PM to 9:00 PM in Nathayyapalem near BHEL Vizag.",
  alternates: { canonical: "/timings" }
};

export default function TimingsPage() {
  return (
    <main>
      <PageHero eyebrow="Timings" title="Morning & Evening Karate Batches" text="Train from 5:00 AM to 9:00 AM or 5:00 PM to 9:00 PM with separate classes for boys and girls." />
      <TimingsCard />
      <FinalCta />
    </main>
  );
}
