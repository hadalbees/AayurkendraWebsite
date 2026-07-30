"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Leaf, HeartHandshake, ShieldCheck, Play, Award, GraduationCap } from "lucide-react";
import VideoModal from "../ui/VideoModal";
import { FadeIn } from "../ui/Motion";
import PlaceholderImage from "../ui/PlaceholderImage";
import { LeafAccent } from "../ui/LeafPattern";
import { siteConfig } from "@/lib/site";

export default function AboutSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <section id="about" className="py-20 bg-cream-bg relative overflow-hidden border-t border-brown-dark/5">
      {/* Decorative leaf backdrops */}
      <LeafAccent className="top-10 right-0 opacity-20" />
      <div className="absolute left-0 bottom-0 opacity-5 w-80 h-80 text-brown-accent pointer-events-none">
        <Leaf className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Intro & Embedded Video Player */}
          <div className="lg:col-span-5 space-y-6">
            {/* Top: Founder Intro Card */}
            <FadeIn direction="right">
              <div className="premium-card p-6 sm:p-8 space-y-4 border border-brown-dark/10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-ayur-green font-bold">
                    Founder & Chief Consultant
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-brown-dark mt-1">
                    Dr. Geetha Jayapal
                  </h3>
                  <p className="text-xs text-brown-muted font-medium mt-0.5">
                    B.A.M.S · 25+ Years Experience
                  </p>
                </div>
                <p className="text-xs sm:text-sm font-light text-brown-muted leading-relaxed">
                  A pioneer in authentic Ayurvedic treatments in South India, Dr. Geetha Jayapal has dedicated her life to standardizing traditional Panchakarma and integrated wellness. Under her expert guidance, Aayur Kendra delivers clinical excellence and customized healing to every patient.
                </p>
                <div className="flex gap-4 pt-1">
                  <div className="flex items-center space-x-1.5 text-xs text-brown-dark font-medium">
                    <GraduationCap className="h-4 w-4 text-ayur-green" />
                    <span>Ayurvedic Medicine</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs text-brown-dark font-medium">
                    <Award className="h-4 w-4 text-ayur-green" />
                    <span>Clinical Excellence</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bottom: Embedded Video Player */}
            <FadeIn direction="right" delay={0.15}>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md border border-brown-dark/8 bg-black">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/founder-thumbnail.png"
                  controls
                >
                  <source src="/videos/founder.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Combined Hospital & Founder Story */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="left">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ayur-green font-bold">
                About Aayur Kendra & Our Founder
              </span>
              <h2 className="font-serif text-3.5xl sm:text-4.5xl font-bold mt-2 text-brown-dark leading-tight">
                Authentic Ayurveda &<br />
                Holistic Clinical Care
              </h2>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="space-y-4 text-sm sm:text-base font-light text-brown-muted leading-relaxed">
              <p>
                Nestled in the heart of the vibrant city of <strong>Hosur</strong>, Aayur Kendra Ayurveda Speciality Hospital is a dedicated sanctuary for authentic healing. We bring traditional wisdom together with modern clinical infrastructure, helping patients find balance in the body, mind, and spirit.
              </p>
              <p>
                Our methodology relies on identifying the root causes of disease through classic pulse diagnosis (Nadi Pariksha) and constitution analysis (Prakriti mapping). By integrating these ancient techniques with <strong>modern healthcare standards</strong>, we offer highly precise, personalized clinical pathways.
              </p>
              <p>
                Our journey is led by <strong>{siteConfig.founder.name}</strong>, a distinguished physician with over 25 years of clinical practice. Backed by a team of dedicated doctors and therapists, she founded Aayur Kendra to deliver root-cause purification therapies, Panchakarma, and customized care.
              </p>
            </FadeIn>

            {/* Injected Quote from Founder Message */}
            <FadeIn direction="left" delay={0.3} className="border-l-4 border-ayur-green pl-4 italic text-brown-muted/90 text-sm py-1 bg-white/40 rounded-r-xl">
              "At Aayur Kendra, our mission is to deliver authentic, clinical-grade Ayurveda to the modern household. Ayurveda is not just a form of treatment; it is a holistic lifestyle science centered on harmony and prevention."
            </FadeIn>

            {/* CTAs */}
            <FadeIn direction="left" delay={0.4} className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 bg-ayur-green hover:bg-dark-green text-white font-medium px-6 py-3 rounded-full text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Read Our Story</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center space-x-2 bg-white hover:bg-cream-light border border-brown-dark/10 text-brown-dark font-medium px-5 py-3 rounded-full text-sm hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Play className="h-4 w-4 fill-ayur-green text-ayur-green" />
                <span>Watch Founder's Message</span>
              </button>
            </FadeIn>
          </div>

        </div>
      </div>
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
