import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { site, whatsappUrl } from "@/data/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <Link href={whatsappUrl} target="_blank" aria-label="WhatsApp Mahira Karate Classes" className="pulse-whatsapp glow-float grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white ring-4 ring-emerald-300/25 shadow-2xl shadow-emerald-900/30">
        <MessageCircle size={25} />
      </Link>
      <Link href={`tel:+91${site.whatsapp}`} aria-label="Call Mahira Karate Classes" className="glow-float grid h-14 w-14 place-items-center rounded-full bg-maroon text-white ring-4 ring-gold/25 shadow-2xl shadow-maroon/40">
        <Phone size={24} />
      </Link>
    </div>
  );
}
