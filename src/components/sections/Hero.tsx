"use client";

import Link from "next/link";
import { Calendar, Phone, Play, ShieldCheck } from "lucide-react";
import { FadeIn } from "../ui/Motion";
import PlaceholderImage from "../ui/PlaceholderImage";
import { LeafAccent } from "../ui/LeafPattern";
import { siteConfig } from "@/lib/site";

export default function Hero({ onWatchVideo }: { onWatchVideo: () => void }) {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-cream-light">
      <LeafAccent className="-top-10 -left-10 opacity-50" />
      <LeafAccent className="bottom-10 right-0 opacity-40 rotate-180" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-cream-light to-cream-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <FadeIn direction="right" delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-brown-dark/8 shadow-sm text-sm text-brown-muted">
                <ShieldCheck className="h-4 w-4 text-ayur-green" />
                <span className="font-medium">{siteConfig.tagline}</span>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-brown-dark leading-[1.15] tracking-tight">
                Authentic Ayurveda for{" "}
                <span className="text-ayur-green">Modern Healing</span>
              </h1>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <p className="text-base sm:text-lg text-brown-muted font-light leading-relaxed max-w-lg">
                Experience holistic healthcare through Panchakarma, personalized treatments, and integrated wellness — under the expert care of{" "}
                <strong className="font-medium text-brown-dark">{siteConfig.founder.name}</strong> with 25+ years of clinical excellence.
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.4} className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link href="/appointment" className="btn-primary w-full sm:w-auto">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Link>
              <button onClick={onWatchVideo} className="btn-secondary w-full sm:w-auto cursor-pointer">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ayur-green/10">
                  <Play className="h-3.5 w-3.5 fill-ayur-green text-ayur-green ml-0.5" />
                </span>
                Watch Doctor&apos;s Message
              </button>
            </FadeIn>

            <FadeIn direction="right" delay={0.5} className="flex flex-wrap items-center gap-4 text-xs text-brown-muted">
              <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-ayur-green transition-colors">
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <span className="hidden sm:inline text-ayur-green/40">|</span>
              <span>Hosur, Tamil Nadu</span>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.3} className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-ayur-green/5 to-brown-dark/5 rounded-[2rem] blur-2xl" />
              <div className="relative premium-card overflow-hidden rounded-[1.75rem]">
                <PlaceholderImage
                  variant="doctor"
                  label="Dr. Geetha Jayapal"
                  className="aspect-[4/5] sm:aspect-[5/6] w-full"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brown-dark/80 via-brown-dark/40 to-transparent p-6 sm:p-8">
                  <p className="text-white/70 text-xs uppercase tracking-wider font-medium">Chief Consultant</p>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mt-1">
                    {siteConfig.founder.name}
                  </h3>
                  <p className="text-cream-light/80 text-sm mt-1">
                    {siteConfig.founder.qualification} · {siteConfig.founder.experience}
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-left-6 premium-card px-5 py-4 flex items-center gap-3">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-ayur-green-light text-sm">★</span>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brown-dark">4.9 Rating</p>
                  <p className="text-[10px] text-brown-muted">Google Reviews</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-brown-dark rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-ayur-green transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-video w-full bg-black">
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                poster="/images/founder-thumbnail.png"
              >
                <source src="/videos/founder.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-5 bg-brown-dark text-white flex justify-between items-center">
              <div>
                <h3 className="font-serif text-lg font-semibold">{siteConfig.founder.name}</h3>
                <p className="text-xs text-cream-light/70">{siteConfig.founder.title}</p>
              </div>
              <Link
                href="/appointment"
                onClick={() => setIsVideoModalOpen(false)}
                className="btn-primary text-xs py-2 px-4"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
