import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { navLinks, site, whatsappUrl } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xl leading-7 text-slate-300">
            {site.fullName} teaches Shotokan Karate with a disciplined focus on self defense, confidence, fitness, focus, and character development.
          </p>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-gold">Quick Links</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-gold">{link.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-gold">Contact</h3>
          <p className="mt-4 leading-7 text-slate-300">{site.phone1}<br />{site.phone2}<br />{site.address}</p>
          <div className="mt-5 flex gap-3">
            <Link href={`tel:+91${site.whatsapp}`} className="grid h-11 w-11 place-items-center rounded-md bg-white/10 text-white hover:bg-white/15" aria-label="Call Mahira Karate Classes"><Phone size={19} /></Link>
            <Link href={whatsappUrl} target="_blank" className="grid h-11 w-11 place-items-center rounded-md bg-emerald-500 text-white hover:bg-emerald-600" aria-label="WhatsApp Mahira Karate Classes"><MessageCircle size={19} /></Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">© 2026 Mahira Karate Classes. All Rights Reserved.</div>
    </footer>
  );
}
