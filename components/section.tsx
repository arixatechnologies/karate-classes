import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  children: ReactNode;
  dark?: boolean;
  id?: string;
};

export function Section({ eyebrow, title, text, children, dark = false, id }: SectionProps) {
  return (
    <section id={id} className={dark ? "maroon-panel py-20 text-white" : "cream-texture py-20 text-charcoal"}>
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          {eyebrow ? <p className={`mb-3 text-sm font-black tracking-[0.24em] ${dark ? "text-gold" : "text-maroon"}`}>{eyebrow}</p> : null}
          <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
          {text ? <p className={`mt-4 text-lg leading-8 ${dark ? "text-slate-200" : "text-slate-600"}`}>{text}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
