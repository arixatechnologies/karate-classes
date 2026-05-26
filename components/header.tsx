"use client";

import { Menu, MessageCircle, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks, site, whatsappUrl } from "@/data/site";
import { Logo } from "@/components/logo";
import { Button } from "@/components/button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-wine/88 shadow-2xl shadow-navy/15 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link href="/" aria-label="Mahira Karate Classes home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-bold text-white/85 transition hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href={whatsappUrl} target="_blank" className="grid h-11 w-11 place-items-center rounded-md border border-emerald-300/30 bg-emerald-500/15 text-emerald-200 transition hover:bg-emerald-500/25" aria-label="WhatsApp Mahira Karate Classes">
            <MessageCircle size={20} />
          </Link>
          <Button href={whatsappUrl} target="_blank" variant="gold">Join Karate Classes</Button>
        </div>
        <button onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-white lg:hidden" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-navy px-5 pb-6 lg:hidden">
          <div className="grid gap-1 py-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-bold text-white/90 hover:bg-white/10">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button href={`tel:+91${site.whatsapp}`} variant="outline" className="gap-2"><Phone size={18} /> Call Now</Button>
            <Button href={whatsappUrl} target="_blank" variant="gold" className="gap-2"><MessageCircle size={18} /> WhatsApp</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
