import { Button } from "@/components/button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="maroon-panel pt-32 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-sm font-black tracking-[0.24em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{text}</p>
        <div className="mt-8">
          <Button href="/contact" variant="gold">Join Karate Classes</Button>
        </div>
      </div>
    </section>
  );
}
