import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline" | "red";
  className?: string;
  target?: string;
};

export function Button({ href, children, variant = "gold", className = "", target }: ButtonProps) {
  const variants = {
    gold: "border border-gold/70 bg-[linear-gradient(135deg,#fff176_0%,#facc15_42%,#ff8f00_100%)] text-navy shadow-[0_0_24px_rgba(250,204,21,0.38),0_16px_34px_rgba(110,24,39,0.22)] hover:shadow-[0_0_34px_rgba(250,204,21,0.58),0_20px_44px_rgba(110,24,39,0.28)]",
    outline: "border border-gold/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(250,204,21,0.10),rgba(7,26,61,0.18))] text-white shadow-[0_0_20px_rgba(250,204,21,0.16)] backdrop-blur hover:border-gold/80 hover:bg-white/18 hover:shadow-[0_0_30px_rgba(250,204,21,0.32)]",
    red: "border border-red-300/40 bg-[linear-gradient(135deg,#dc2626_0%,#8b120f_52%,#3b0d18_100%)] text-white shadow-[0_0_24px_rgba(220,38,38,0.32),0_16px_40px_rgba(59,13,24,0.3)] hover:shadow-[0_0_34px_rgba(220,38,38,0.48),0_20px_46px_rgba(59,13,24,0.36)]"
  };

  return (
    <Link
      href={href}
      target={target}
      className={`button-shine inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-sm font-extrabold tracking-wide transition duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
