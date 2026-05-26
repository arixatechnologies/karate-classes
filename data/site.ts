import {
  Award,
  Brain,
  CalendarClock,
  Dumbbell,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap
} from "lucide-react";

export const site = {
  name: "Mahira Karate Classes",
  fullName: "Mahira Shotokan Karate-Do India",
  tagline: "Learn the Art of Self Defense",
  instructor: "Sensei Dr. M.D. Tajuddin Babu",
  instructorTitle: "Black Belt 4th Dan (WKF)",
  instructorRole: "President (MSKI)",
  phone1: "98497 01533",
  phone2: "96766 67549",
  whatsapp: "9849701533",
  address: "#32-4-56, Nathayyapalem, Near BHEL, Vizag, A.P., India",
  city: "Vizag",
  state: "Andhra Pradesh",
  country: "India",
  morning: "5:00 AM to 9:00 AM",
  evening: "5:00 PM to 9:00 PM",
  baseUrl: "https://mahirakarateclasses.com",
  keywords: [
    "Karate classes in Vizag",
    "Karate classes near BHEL Vizag",
    "Self defense classes in Vizag",
    "Kids karate classes in Vizag",
    "Girls self defense classes Vizag",
    "Shotokan karate classes Vizag",
    "Mahira Karate Classes",
    "Mahira Shotokan Karate-Do India"
  ]
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Benefits", href: "/benefits" },
  { label: "Gallery", href: "/gallery" },
  { label: "Instructor", href: "/instructor" },
  { label: "Timings", href: "/timings" },
  { label: "Contact", href: "/contact" }
];

export const trustBadges = [
  "24+ Years Experience",
  "Separate Boys & Girls Classes",
  "Morning & Evening Batches",
  "Self Defense Training"
];

export const benefits = [
  { title: "Self Defense", icon: ShieldCheck, text: "Practical techniques that improve awareness, reaction, and personal safety." },
  { title: "Confidence Building", icon: Sparkles, text: "Progressive training helps students stand taller and act with calm courage." },
  { title: "Discipline & Focus", icon: Target, text: "Structured Shotokan practice develops attention, patience, and consistency." },
  { title: "Fitness & Endurance", icon: Dumbbell, text: "Karate builds stamina, mobility, strength, and body control." },
  { title: "Respect & Character", icon: HeartHandshake, text: "Every class reinforces courtesy, humility, and responsible conduct." },
  { title: "Body Balance", icon: Zap, text: "Kicks, stances, and drills improve coordination, posture, and balance." },
  { title: "Mental Strength", icon: Brain, text: "Students learn to stay composed under pressure and complete difficult goals." },
  { title: "Beginner Friendly", icon: Users, text: "A clear path supports new students from the first class onward." }
];

export const classes = [
  {
    title: "Kids Karate Classes",
    image: "/images/classes/kids-karate-training-vizag.png",
    fallback: "/images/classes/kids-karate-training-vizag.svg",
    text: "Age-appropriate training for confidence, focus, discipline, and safe movement."
  },
  {
    title: "Boys Karate Classes",
    image: "/images/home/karate-classes-hero-action.png",
    fallback: "/images/home/karate-classes-hero-action.svg",
    text: "Energetic Shotokan sessions for strength, respect, self-control, and fitness."
  },
  {
    title: "Girls Karate Classes",
    image: "/images/classes/girls-self-defense-karate-class.png",
    fallback: "/images/classes/girls-self-defense-karate-class.svg",
    text: "Empowering separate classes focused on safety, confidence, and self defense."
  },
  {
    title: "Self Defense Training",
    image: "/images/classes/girls-self-defense-karate-class.png",
    fallback: "/images/classes/girls-self-defense-karate-class.svg",
    text: "Practical drills for awareness, distance, blocking, escaping, and striking."
  },
  {
    title: "Beginner to Advanced Karate",
    image: "/images/gallery/mahira-karate-gallery-cover.png",
    fallback: "/images/home/karate-belt-journey.svg",
    text: "A disciplined belt journey from fundamentals to advanced Shotokan ability."
  },
  {
    title: "Fitness & Discipline Training",
    image: "/images/gallery/mahira-karate-gallery-cover.png",
    fallback: "/images/gallery/mahira-karate-gallery-cover.svg",
    text: "High-energy conditioning that builds endurance, agility, and character."
  }
];

export const beltJourney = [
  { belt: "Beginner", color: "#E5E7EB", text: "Learn etiquette, stance, posture, and safe movement." },
  { belt: "White Belt", color: "#FFFFFF", text: "Build the foundation of blocks, punches, and discipline." },
  { belt: "Yellow Belt", color: "#FACC15", text: "Develop speed, balance, and confident combinations." },
  { belt: "Green Belt", color: "#22C55E", text: "Strengthen technique, timing, footwork, and focus." },
  { belt: "Brown Belt", color: "#7C2D12", text: "Prepare advanced control, power, kata, and responsibility." },
  { belt: "Black Belt", color: "#111827", text: "Lead with skill, humility, endurance, and martial character." }
];

export const gallery = [
  { title: "Training", category: "Training", image: "/images/home/karate-classes-hero-action.png", fallback: "/images/home/karate-classes-hero-action.svg" },
  { title: "Kids Classes", category: "Kids Classes", image: "/images/classes/kids-karate-training-vizag.png", fallback: "/images/classes/kids-karate-training-vizag.svg" },
  { title: "Self Defense", category: "Self Defense", image: "/images/classes/girls-self-defense-karate-class.png", fallback: "/images/classes/girls-self-defense-karate-class.svg" },
  { title: "Events", category: "Events", image: "/images/gallery/mahira-karate-gallery-cover.png", fallback: "/images/gallery/mahira-karate-gallery-cover.svg" },
  { title: "Achievements", category: "Achievements", image: "/images/gallery/mahira-karate-gallery-cover.png", fallback: "/images/home/karate-belt-journey.svg" },
  { title: "Instructor Guidance", category: "Training", image: "/images/instructor/karate-sensei-instructor-profile.png", fallback: "/images/instructor/karate-sensei-instructor-profile.svg" }
];

export const contactItems = [
  { label: "Phone", value: `${site.phone1} / ${site.phone2}`, icon: Phone },
  { label: "Timings", value: `Morning ${site.morning}; Evening ${site.evening}`, icon: CalendarClock },
  { label: "Address", value: site.address, icon: MapPin },
  { label: "Experience", value: "24 Years Experienced Karate Teachers at Our Institute", icon: Award }
];

export const whatsappUrl = `https://wa.me/91${site.whatsapp}?text=${encodeURIComponent("Hello Mahira Karate Classes, I want to join karate classes.")}`;
