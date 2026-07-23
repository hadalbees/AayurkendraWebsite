"use client";

import Link from "next/link";
import { ArrowRight, Leaf, HeartHandshake, ShieldCheck } from "lucide-react";
import { FadeIn } from "../ui/Motion";
import PlaceholderImage from "../ui/PlaceholderImage";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-theme-bg relative overflow-hidden">
      {/* Decorative leaf backdrop */}
      <div className="absolute right-0 bottom-0 opacity-5 w-80 h-80 text-brown-accent pointer-events-none">
        <Leaf className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium visual illustration */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-theme-border/70">
                <PlaceholderImage
                  variant="hospital"
                  icon={Leaf}
                  label="Hospital Building Photo"
                  className="aspect-[4/5] w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white space-y-3">
                  <div className="flex items-center space-x-3 text-xs">
                    <ShieldCheck className="h-5 w-5 text-brown-accent" />
                    <span>Government Registered Hospital Standards</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs">
                    <HeartHandshake className="h-5 w-5 text-brown-accent" />
                    <span>Compassionate Patient-Centric Staff</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Storytelling content */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <FadeIn direction="left">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-theme-accent font-bold">
                About Aayur Kendra
              </span>
              <h2 className="font-serif text-3.5xl sm:text-4.5xl font-bold mt-2 text-brown-accent dark:text-cream-bg leading-tight">
                Healing Rooted in <br />
                Ancient Wisdom
              </h2>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="space-y-4 text-base font-light text-theme-fg/90 leading-relaxed">
              <p>
                Nestled in the vibrant and rapidly growing city of Hosur, Aayur Kendra Ayurveda Speciality Hospital is dedicated to providing authentic Ayurvedic healthcare that nurtures the body, mind, and spirit.
              </p>
              <p>
                Founded by <strong>Dr. Geetha Jayapal</strong>, a senior consultant with 25+ years of clinical excellence, the hospital combines traditional Ayurvedic principles with modern clinical facilities to deliver personalized healing experiences.
              </p>
              <p>
                Our clinical methodology focuses on diagnosing root causes via traditional pulse diagnosis (Nadi Pariksha) and constitution mapping (Prakriti analysis). We specialize in treating chronic autoimmune ailments, reproductive health, and lifestyle metabolic diseases.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.4} className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 bg-primary-green hover:bg-dark-green text-white font-medium px-6 py-3 rounded-full text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
