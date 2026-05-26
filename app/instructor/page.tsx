import type { Metadata } from "next";
import { FinalCta, InstructorSection } from "@/components/sections";
import { PageHero } from "@/components/page-hero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Instructor",
  description: "Meet Sensei Dr. M.D. Tajuddin Babu, Black Belt 4th Dan (WKF), President (MSKI), main instructor at Mahira Karate Classes.",
  alternates: { canonical: "/instructor" }
};

export default function InstructorPage() {
  return (
    <main>
      <PageHero eyebrow="Instructor" title={site.instructor} text="Black Belt 4th Dan (WKF), President (MSKI), guiding students with discipline, respect, confidence, and technical excellence." />
      <InstructorSection />
      <FinalCta />
    </main>
  );
}
