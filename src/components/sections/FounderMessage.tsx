"use client";

import { useState } from "react";
import { Play, X, Award, GraduationCap, HeartHandshake } from "lucide-react";
import { FadeIn } from "../ui/Motion";
import PlaceholderImage from "../ui/PlaceholderImage";
import { siteConfig } from "@/lib/site";

export default function FounderMessage({
  isVideoOpen: propIsVideoOpen,
  setIsVideoOpen: propSetIsVideoOpen,
}: {
  isVideoOpen?: boolean;
  setIsVideoOpen?: (val: boolean) => void;
} = {}) {
  const [localIsVideoOpen, setLocalIsVideoOpen] = useState(false);
  const isVideoOpen = propIsVideoOpen !== undefined ? propIsVideoOpen : localIsVideoOpen;
  const setIsVideoOpen = propSetIsVideoOpen !== undefined ? propSetIsVideoOpen : setLocalIsVideoOpen;
  const hasVideo = Boolean(siteConfig.founder.videoUrl);

  return (
    <section className="py-20 bg-theme-bg relative overflow-hidden border-t border-theme-border/50">
      {/* Background visual textures */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-brown-accent/8 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-brown-accent/8 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="right">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-theme-accent font-bold">
                Founder's Message
              </span>
              <h2 className="font-serif text-3.5xl sm:text-4.5xl font-bold mt-2 text-brown-accent dark:text-cream-bg leading-tight">
                A Message from <br />
                Our Founder
              </h2>
              <h3 className="font-serif italic text-lg sm:text-xl text-theme-accent mt-1">
                {siteConfig.founder.name}, {siteConfig.founder.qualification}
              </h3>
              <p className="text-sm font-semibold text-brown-accent dark:text-cream-bg/90">
                25+ Years of Healing Through Ayurveda
              </p>
              <p className="text-xs text-theme-fg/60">
                {siteConfig.founder.title}
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <p className="text-sm font-light text-theme-fg/80 leading-relaxed">
                Hear directly from our founder about the philosophy, mission, and healing journey of Aayur Kendra Ayurveda Speciality Hospital.
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="space-y-4 text-base font-light text-theme-fg/90 leading-relaxed">
              <p>
                "At Aayur Kendra, our mission is to deliver authentic, clinical-grade Ayurveda to the modern household. Ayurveda is not just a form of treatment; it is a holistic lifestyle science centered on harmony and prevention."
              </p>
              <p>
                "With over 25 years of clinical excellence in South India, we combine classical Panchakarma practices, herbal pharmacies, and integrated treatments like Yoga and Naturopathy to support your body's natural self-healing mechanisms."
              </p>
            </FadeIn>

            {/* Quick credentials badges */}
            <FadeIn direction="right" delay={0.4} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-theme-accent shrink-0" />
                <span className="text-xs font-semibold">B.A.M.S Graduate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-theme-accent shrink-0" />
                <span className="text-xs font-semibold">25+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <HeartHandshake className="h-5 w-5 text-theme-accent shrink-0" />
                <span className="text-xs font-semibold">Compassionate Care</span>
              </div>
            </FadeIn>
          </div>

          {/* Large Video Player Placeholder */}
          <div className="lg:col-span-7">
            <FadeIn direction="left" delay={0.3}>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-theme-border/60 group">
                <PlaceholderImage
                  variant="doctor"
                  icon={Play}
                  label="Founder Video Thumbnail"
                  className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-4 border border-white/10 rounded-2xl pointer-events-none z-10" />
                
                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col justify-end text-white p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent rounded-xl">
                  <h4 className="font-serif text-lg font-bold">{siteConfig.founder.name} on Healing</h4>
                  <p className="text-xs text-cream-bg/75 font-light">Watch founder&apos;s message</p>
                </div>

                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="absolute inset-0 m-auto h-20 w-20 rounded-full bg-primary-green hover:bg-dark-green text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-20 cursor-pointer"
                  aria-label="Play founder message video"
                >
                  <Play className="h-8 w-8 fill-white translate-x-1" />
                </button>

                <div className="absolute inset-0 m-auto h-20 w-20 rounded-full border border-brown-accent/40 animate-ping opacity-75 pointer-events-none z-10" />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* Video Overlay Dialog Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
            aria-label="Close video player"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden relative shadow-2xl">
            {hasVideo ? (
              <iframe
                src={siteConfig.founder.videoUrl}
                title="Founder message from Dr. Geetha Jayapal"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src="/videos/founder.mp4"
                className="absolute inset-0 w-full h-full object-contain"
                controls
                autoPlay
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
