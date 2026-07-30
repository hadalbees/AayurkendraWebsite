"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import { FadeIn } from "@/components/ui/Motion";
import { 
  Heart, 
  ShieldCheck, 
  Leaf, 
  Sparkles, 
  Activity 
} from "lucide-react";

const values = [
  { title: "Compassion", desc: "Providing patient-centric care that meets every emotional and physical need with warmth.", icon: Heart },
  { title: "Integrity", desc: "Following honest clinical practices and true, classic Ayurvedic medicine formulas.", icon: ShieldCheck },
  { title: "Holistic Approach", desc: "Treating the root causes of imbalances rather than simply masking physical symptoms.", icon: Leaf },
  { title: "Excellence", desc: "Striving for 100% success in therapeutic execution and clinical outcomes.", icon: Sparkles },
  { title: "Respect", desc: "Treating every individual with dignity, respecting their personal recovery journey.", icon: Activity },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Banner Hero */}
        <section className="bg-gradient-to-br from-cream-light to-white text-brown-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brown-muted via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ayur-green font-semibold">
              Who We Are
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              About Aayur Kendra
            </h1>
            <p className="font-serif italic text-lg sm:text-2xl text-brown-muted">
              "Where Health Meets Harmony"
            </p>
          </div>
        </section>

        {/* Narrative & History */}
        <section className="py-20 bg-cream-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <FadeIn direction="right">
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown-dark leading-tight">
                    Welcome to Aayur Kendra
                  </h2>
                  <p className="text-base font-light text-brown-dark/90 leading-relaxed mt-4">
                    Nestled in the vibrant and rapidly growing city of Hosur, Tamil Nadu, Aayur Kendra Ayurveda Speciality Hospital stands as a trusted destination for holistic healing, preventive healthcare, and natural wellness.
                  </p>
                  <p className="text-base font-light text-brown-dark/90 leading-relaxed mt-4">
                    Ayurveda, the world's oldest holistic healthcare system with a history spanning over 5000 years, focuses on balancing body, mind and spirit. At Aayur Kendra, we preserve the authenticity of Ayurvedic medicine while adapting its timeless wisdom to modern lifestyles.
                  </p>
                  <p className="text-base font-light text-brown-dark/90 leading-relaxed mt-4">
                    Founded by <strong>Dr. Geetha Jayapal</strong>, B.A.M.S, Aayur Kendra has evolved from a small consultation clinic into a fully registered Ayurveda Speciality Hospital serving patients across Tamil Nadu and neighboring states.
                  </p>
                </FadeIn>
              </div>

              <div className="lg:col-span-6 bg-white border border-brown-dark/8 rounded-3xl p-8 shadow-sm space-y-8">
                {/* Vision Block */}
                <FadeIn direction="left" className="space-y-3">
                  <h3 className="font-serif text-xl font-bold text-brown-dark flex items-center space-x-2">
                    <span className="text-lg">👁</span>
                    <span>Our Vision</span>
                  </h3>
                  <ul className="text-sm font-light text-brown-dark/85 space-y-2 leading-relaxed list-disc pl-5">
                    <li>To be a leading Ayurvedic hospital promoting holistic health and wellness through traditional practices and modern facilities.</li>
                    <li>To empower individuals to achieve optimal health and well-being through Ayurvedic principles and personalized care.</li>
                  </ul>
                </FadeIn>

                {/* Mission Block */}
                <FadeIn direction="left" delay={0.2} className="space-y-3">
                  <h3 className="font-serif text-xl font-bold text-brown-dark flex items-center space-x-2">
                    <span className="text-lg">🎯</span>
                    <span>Our Mission</span>
                  </h3>
                  <ul className="text-sm font-light text-brown-dark/85 space-y-2 leading-relaxed list-disc pl-5">
                    <li>To provide high-quality patient-centered Ayurvedic care fostering physical, mental and spiritual well-being.</li>
                    <li>To preserve and promote the ancient wisdom of Ayurveda making it accessible and effective for modern lifestyles.</li>
                  </ul>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white border-t border-brown-dark/8/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <FadeIn direction="down">
                <span className="text-xs uppercase tracking-wider text-ayur-green font-semibold">Our Principles</span>
                <h2 className="font-serif text-3.5xl font-bold text-brown-dark mt-1">Core Hospital Values</h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <FadeIn key={idx} delay={idx * 0.1} className="bg-cream-bg/40 border border-brown-dark/8/70 rounded-2xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-brown-accent/8 text-brown-accent dark:bg-brown-accent/15  rounded-xl w-fit mx-auto">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-brown-dark">{v.title}</h4>
                    <p className="text-xs font-light text-brown-dark/80 leading-relaxed">{v.desc}</p>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Legacy Timeline */}
        <JourneyTimeline />
      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
