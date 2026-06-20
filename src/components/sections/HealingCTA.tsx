"use client";

import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { FadeIn } from "../ui/Motion";
import { siteConfig } from "@/lib/site";

export default function HealingCTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-cream-muted border-y border-brown-accent/15">
      <div className="absolute inset-0 bg-gradient-to-br from-cream-card via-cream-muted to-cream-bg" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_rgba(107,74,46,0.12),_transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-primary-green" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <FadeIn direction="up">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-brown-muted font-bold">
            Start Your Recovery
          </span>
          <h2 className="font-serif text-3.5xl sm:text-5xl font-bold text-brown-dark mt-3 leading-tight">
            Begin Your Healing Journey Today
          </h2>
          <p className="text-base sm:text-lg text-brown-muted font-light mt-4 leading-relaxed max-w-2xl mx-auto">
            Experience authentic Ayurvedic healthcare designed around your unique health needs.
          </p>
          <p className="text-sm text-brown-accent font-serif italic mt-2">
            Book Your Consultation Today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/appointment"
              className="w-full sm:w-auto bg-primary-green hover:bg-dark-green text-white font-medium px-8 py-4 rounded-full text-base flex items-center justify-center space-x-2.5 shadow-xl transition-all"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Your Consultation</span>
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="w-full sm:w-auto bg-transparent hover:bg-brown-accent/8 text-brown-dark font-medium px-8 py-4 rounded-full text-base border border-brown-accent/35 flex items-center justify-center space-x-2.5 transition-all"
            >
              <Phone className="h-4.5 w-4.5" />
              <span>Call Hospital</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
