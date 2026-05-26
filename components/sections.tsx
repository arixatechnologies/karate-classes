import { Award, CalendarClock, CheckCircle2, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { Button } from "@/components/button";
import { ImageWithFallback } from "@/components/image-with-fallback";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { beltJourney, benefits, classes, contactItems, gallery, site, trustBadges, whatsappUrl } from "@/data/site";

export function Hero() {
  return (
    <section className="hero-bg relative flex min-h-screen items-center overflow-hidden pt-20 text-white">
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-pearl to-transparent" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="reveal">
          <p className="text-sm font-bold tracking-[0.22em] text-gold">{site.tagline}</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] md:text-5xl">
            Build Confidence, Discipline & Self Defense <span className="karate-kinetic inline-block text-gold">Karate</span> Skills
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
            Join Mahira Karate Classes in Vizag and learn Shotokan Karate from experienced instructors with 24 years of teaching excellence.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={whatsappUrl} target="_blank" variant="gold">Join Now on WhatsApp</Button>
            <Button href="/timings" variant="outline">View Timings</Button>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge) => (
              <div key={badge} className="rounded-md border border-cream/20 bg-cream/10 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-gold/70 hover:bg-white/15">
                <CheckCircle2 className="mb-3 text-gold" size={22} />
                <p className="text-sm font-bold">{badge}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="float-slow hidden rounded-md border border-white/15 bg-white/10 p-5 shadow-premium backdrop-blur-xl lg:block">
          <div className="rounded-md bg-pearl p-4 text-navy">
            <p className="font-display text-3xl font-bold">Mahira Karate Classes</p>
            <p className="mt-2 text-sm font-bold text-maroon">{site.fullName}</p>
            <div className="mt-6 grid gap-3">
              <div className="rounded-md bg-navy p-4 text-white"><Award className="mb-2 text-gold" />24 Years Experienced Karate Teachers</div>
              <div className="rounded-md bg-cream p-4 text-charcoal"><Users className="mb-2 text-maroon" />Separate Classes for Boys & Girls</div>
              <div className="rounded-md bg-gold p-4 font-bold text-navy"><CalendarClock className="mb-2" />Morning & Evening Batches</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyKarate() {
  return (
    <Section
      eyebrow="Why Karate Matters"
      title="Discipline That Becomes Confidence"
      text="Karate is more than punches and kicks. It teaches students how to move with control, think under pressure, respect others, and unlock new levels of endurance and ability."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {["Body control and focus", "Practical self defense habits", "Confidence through measurable progress"].map((item, index) => (
          <Reveal key={item} className="why-card group relative overflow-hidden rounded-md border border-gold/25 bg-[linear-gradient(145deg,#fff8ec_0%,#ffffff_44%,#f7e8d0_100%)] p-8 shadow-premium transition duration-300 hover:-translate-y-2 hover:border-gold/70 hover:shadow-[0_24px_70px_rgba(110,24,39,0.22),0_0_34px_rgba(250,204,21,0.28)]" delay={120 + index * 80}>
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-maroon via-gold to-emerald-700" />
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-gold/25 bg-gold/10 transition group-hover:scale-125" />
            <ShieldCheck className="relative mb-5 text-maroon drop-shadow-[0_0_12px_rgba(250,204,21,0.34)]" size={34} />
            <h3 className="font-display text-2xl font-bold">{item}</h3>
            <p className="mt-3 leading-7 text-slate-600">A premium training environment for kids, boys, girls, and adults who want discipline with real life value.</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function AboutPreview() {
  return (
    <section className="cream-texture py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
        <div>
          <p className="text-sm font-black tracking-[0.24em] text-maroon">About MSKI</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy md:text-5xl">Shotokan Karate-Do India Training in Vizag</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Mahira Karate Classes teaches Shotokan Karate-Do India with a focus on self defense, discipline, confidence, endurance, body control, focus, and character development.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Students are guided through structured classes that strengthen mind and body while helping them become safer, calmer, and more capable.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="red">Know More</Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-premium">
          <ImageWithFallback src="/images/gallery/mahira-karate-gallery-cover.png" fallback="/images/gallery/mahira-karate-gallery-cover.svg" alt="Karate training gallery at Mahira Karate Classes" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 hover:scale-105" />
        </div>
      </div>
    </section>
  );
}

export function BenefitsGrid() {
  return (
    <Section eyebrow="Benefits" title="What Students Build" text="Every class is designed to shape confident, focused, fit, and respectful students." dark>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <Reveal key={benefit.title} className="rounded-md border border-cream/15 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-2 hover:border-gold/70 hover:bg-cream/15 hover:shadow-glow" delay={80}>
              <Icon className="mb-5 text-gold" size={32} />
              <h3 className="font-display text-xl font-bold">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200">{benefit.text}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function TimingsCard() {
  return (
    <section className="diagonal-top maroon-panel py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black tracking-[0.24em] text-gold">Class Timings</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Morning & Evening Karate Batches</h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">Flexible training hours for students, parents, and working adults near BHEL Vizag.</p>
        </div>
        <Reveal className="rounded-md border border-gold/25 bg-pearl/95 p-6 text-navy shadow-premium backdrop-blur-xl md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-md border border-maroon/10 bg-white p-6 text-navy shadow-lg">
              <CalendarClock className="mb-4 text-maroon" size={34} />
              <h3 className="font-display text-2xl font-bold">Morning Batch</h3>
              <p className="mt-3 text-2xl font-extrabold text-maroon">{site.morning}</p>
            </div>
            <div className="rounded-md bg-gold p-6 text-navy shadow-lg">
              <CalendarClock className="mb-4 text-maroon" size={34} />
              <h3 className="font-display text-2xl font-bold">Evening Batch</h3>
              <p className="mt-3 text-2xl font-extrabold text-maroon">{site.evening}</p>
            </div>
          </div>
          <div className="mt-6">
            <Button href={whatsappUrl} target="_blank" variant="red">Reserve Your Child&apos;s Seat Today</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SeparateClasses() {
  return (
    <section className="cream-texture py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-md maroon-panel p-8 text-white shadow-premium md:p-12">
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-gold/10 blur-3xl" />
          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative grid min-h-56 place-items-center rounded-md border border-gold/20 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(250,204,21,0.08),rgba(7,26,61,0.22))] p-6">
              <div className="glow-float grid h-32 w-32 place-items-center rounded-full border border-gold/40 bg-wine/80 shadow-[0_0_40px_rgba(250,204,21,0.22)]">
                <Users className="text-gold" size={64} />
              </div>
            </div>
            <div>
              <p className="text-sm font-black tracking-[0.24em] text-gold">Focused Training</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Separate Classes for Boys & Girls</h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">Smaller, focused batches help students receive clearer corrections, train with comfort, and build confidence without hesitation.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Target, text: "Better attention from instructors" },
                  { icon: ShieldCheck, text: "Respectful and safe training space" },
                  { icon: Sparkles, text: "Confidence for shy beginners" },
                  { icon: CheckCircle2, text: "More effective practice time" }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/10 p-3 text-sm font-bold text-white backdrop-blur">
                      <Icon className="shrink-0 text-gold" size={18} />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InstructorSection() {
  return (
    <Section eyebrow="Main Instructor" title="Guidance from a Respected Sensei" text="Professional training led with discipline, respect, and long-term student development.">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-md bg-white shadow-premium lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[360px]">
          <ImageWithFallback src="/images/instructor/karate-sensei-instructor-profile.png" fallback="/images/instructor/karate-sensei-instructor-profile.svg" alt="Experienced karate sensei instructor at Mahira Karate Classes" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        </div>
        <div className="p-8 md:p-10">
          <p className="text-sm font-black tracking-[0.24em] text-maroon">Sensei</p>
          <h3 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">{site.instructor}</h3>
          <p className="mt-3 text-xl font-extrabold text-royal">{site.instructorTitle}</p>
          <p className="text-lg font-bold text-slate-600">{site.instructorRole}</p>
          <p className="mt-6 leading-8 text-slate-600">Sensei Tajuddin Babu guides students with a balanced approach: strong basics, disciplined practice, respectful conduct, and confidence that carries beyond the dojo.</p>
          <div className="mt-7">
            <Button href="/instructor" variant="gold">View Instructor Profile</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function BeltJourney() {
  return (
    <Section eyebrow="Belt Journey" title="From First Class to Black Belt" text="A clear progression gives students a visible path for skill, effort, and character growth." dark>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {beltJourney.map((step, index) => (
          <Reveal key={step.belt} className="relative overflow-hidden rounded-md border border-cream/15 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-2 hover:border-gold/60 hover:bg-white/15" delay={index * 90}>
            <div className="absolute right-4 top-4 h-16 w-16 rounded-full border border-white/20" style={{ backgroundColor: step.color }} />
            <div className="mb-6 h-2 w-24 rounded-full border border-white/20" style={{ backgroundColor: step.color }} />
            <p className="font-display text-2xl font-bold">{step.belt}</p>
            <p className="mt-3 text-sm leading-6 text-slate-200">{step.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function GalleryPreview() {
  return (
    <Section eyebrow="Gallery" title="Training Moments" text="Modern gallery placeholders are ready for real class photos, achievements, events, and self defense sessions.">
      <div className="grid auto-rows-[220px] gap-5 md:grid-cols-3">
        {gallery.slice(0, 6).map((item, index) => (
          <Reveal key={item.title} className={`group relative overflow-hidden rounded-md shadow-premium ${index === 0 || index === 3 ? "md:row-span-2" : ""}`} delay={index * 70}>
            <ImageWithFallback src={item.image} fallback={item.fallback} alt={`${item.title} at Mahira Karate Classes`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-wine/88 via-navy/10 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-md bg-pearl/95 px-4 py-2 text-sm font-black text-maroon">{item.category}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ClassesGrid() {
  return (
    <Section eyebrow="Classes" title="Karate Programs for Every Student" text="Beginner-friendly, disciplined training for kids, boys, girls, self defense learners, and advancing students.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((item) => (
          <Reveal key={item.title} className="overflow-hidden rounded-md bg-white shadow-premium transition hover:-translate-y-2 hover:shadow-glow">
            <div className="relative aspect-[4/3] overflow-hidden">
              <ImageWithFallback src={item.image} fallback={item.fallback} alt={item.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold text-navy">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ContactSection() {
  const mapQuery = encodeURIComponent(site.address);
  return (
    <Section eyebrow="Location & Contact" title="Visit Mahira Karate Classes" text="Near BHEL in Nathayyapalem, Vizag. Call or WhatsApp to reserve a class seat.">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} className="rounded-md bg-white p-6 shadow-premium transition hover:-translate-y-1 hover:shadow-glow">
                <Icon className="mb-4 text-maroon" />
                <p className="text-sm font-black tracking-[0.18em] text-maroon">{item.label}</p>
                <p className="mt-2 font-bold leading-7 text-navy">{item.value}</p>
              </Reveal>
            );
          })}
          <Button href={whatsappUrl} target="_blank" variant="gold">Join Now on WhatsApp</Button>
        </div>
        <div className="min-h-[420px] overflow-hidden rounded-md shadow-premium">
          <iframe
            title="Mahira Karate Classes Google Map"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section className="maroon-panel py-20 text-white">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <p className="text-sm font-black tracking-[0.24em] text-gold">{site.tagline}</p>
        <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">Start Karate Training in Vizag Today</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">Build confidence, discipline, fitness, and self defense skills with Mahira Shotokan Karate-Do India.</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href={whatsappUrl} target="_blank" variant="gold">Join Karate Classes</Button>
          <Button href="/contact" variant="outline">Contact Institute</Button>
        </div>
      </div>
    </section>
  );
}
