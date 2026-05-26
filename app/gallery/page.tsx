import type { Metadata } from "next";
import { FinalCta, GalleryPreview } from "@/components/sections";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View Mahira Karate Classes gallery for training, kids classes, self defense, events, and achievements in Vizag.",
  alternates: { canonical: "/gallery" }
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero eyebrow="Gallery" title="Training, Events & Achievements" text="A modern gallery layout ready for class photos, student milestones, events, and academy achievements." />
      <GalleryPreview />
      <FinalCta />
    </main>
  );
}
