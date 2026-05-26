import type { Metadata } from "next";
import {
  AboutPreview,
  BeltJourney,
  BenefitsGrid,
  ClassesGrid,
  ContactSection,
  FinalCta,
  GalleryPreview,
  Hero,
  InstructorSection,
  SeparateClasses,
  TimingsCard,
  WhyKarate
} from "@/components/sections";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Mahira Karate Classes in Vizag | Shotokan Karate & Self Defense",
  description: "Premium Shotokan Karate classes near BHEL Vizag for kids, boys, girls, and adults. Learn self defense, discipline, confidence, and fitness.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    name: site.name,
    alternateName: site.fullName,
    description: "Shotokan Karate and self defense classes in Vizag near BHEL.",
    telephone: [`+91${site.whatsapp}`, "+919676667549"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "#32-4-56, Nathayyapalem, Near BHEL",
      addressLocality: "Vizag",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN"
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "05:00", closes: "09:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "17:00", closes: "21:00" }
    ],
    areaServed: ["Vizag", "Nathayyapalem", "BHEL Vizag"],
    url: site.baseUrl,
    image: `${site.baseUrl}/images/og/mahira-karate-classes-og-image.png`,
    keywords: site.keywords.join(", "),
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.6868",
      longitude: "83.2185"
    }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <Hero />
      <WhyKarate />
      <AboutPreview />
      <BenefitsGrid />
      <TimingsCard />
      <SeparateClasses />
      <InstructorSection />
      <BeltJourney />
      <ClassesGrid />
      <GalleryPreview />
      <ContactSection />
      <FinalCta />
    </main>
  );
}
