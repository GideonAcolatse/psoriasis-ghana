import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Heart } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <aside aria-label="Quick mobile support bar" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-border px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Button 1: Call Hotline */}
        <a
          href="tel:+233245179569"
          className="touch-press flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 text-brand-emerald hover:bg-emerald-100 transition-colors"
        >
          <Phone className="w-4 h-4 text-brand-emerald mb-1" />
          <span className="text-[11px] font-bold">Call Helpline</span>
        </a>

        {/* Button 2: WhatsApp Chat */}
        <a
          href="https://wa.me/233245179569?text=Hello%20PAG,%20I%20would%20like%20guidance%20regarding%20psoriasis%20support"
          target="_blank"
          rel="noopener noreferrer"
          className="touch-press flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-800 text-white hover:bg-emerald-900 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-200 mb-1" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Button 3: Donate */}
        <Link
          href="/donate"
          className="touch-press flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-brand-terracotta text-white hover:bg-brand-terracotta-dark transition-colors shadow-sm"
        >
          <Heart className="w-4 h-4 fill-white mb-1" />
          <span className="text-[11px] font-bold">Donate</span>
        </Link>
      </div>
    </aside>
  );
}
