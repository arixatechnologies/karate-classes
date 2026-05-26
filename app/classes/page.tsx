import type { Metadata } from "next";
import { ClassesGrid, FinalCta, SeparateClasses } from "@/components/sections";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Classes",
  description: "Kids karate classes, boys karate classes, girls karate classes, self defense training, and beginner to advanced Shotokan Karate in Vizag.",
  alternates: { canonical: "/classes" }
};

export default function ClassesPage() {
  return (
    <main>
      <PageHero eyebrow="Classes" title="Karate Classes for Kids, Boys & Girls" text="Structured Shotokan Karate training for beginners, advancing students, fitness, discipline, and practical self defense." />
      <ClassesGrid />
      <SeparateClasses />
      <FinalCta />
    </main>
  );
}
