"use client";

import Link from "next/link";
import Image from "next/image";
import { Award, Calendar, GraduationCap, Star, ArrowRight } from "lucide-react";
import { FadeIn } from "../ui/Motion";
import PlaceholderImage from "../ui/PlaceholderImage";
import { siteConfig } from "@/lib/site";

const achievements = [
  "25+ Years of Ayurvedic Clinical Excellence",
  "Founder of Aayur Kendra Speciality Hospital",
  "Expert in Panchakarma & Women's Wellness",
  "Recognized for Healthcare Excellence",
  "Women's Entrepreneurship in Medicine Award",
  "Integrated Holistic Care Pioneer in Hosur",
];

export default function DoctorPreview() {
  return (
    <section className="py-20 bg-theme-card relative overflow-hidden border-t border-theme-border/50">
      <div className="absolute top-0 left-0 h-80 w-80 bg-brown-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <FadeIn direction="down">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-theme-accent font-bold">
              Our Medical Leadership
            </span>
            <h2 className="font-serif text-3.5xl sm:text-4.5xl font-bold text-brown-accent dark:text-cream-bg mt-1">
              Meet Our Founder
            </h2>
            <p className="text-sm font-light text-theme-fg/75 mt-2">
              Leading holistic healthcare with compassion, clinical rigor, and 25+ years of Ayurvedic expertise.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <FadeIn direction="right" className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-theme-border">
              <div className="relative aspect-[4/5] w-full bg-cream-bg">
                <Image
                  src="/images/dr-geetha.jpg"
                  alt={siteConfig.founder.name}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white z-10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-brown-accent font-bold mb-1">
                  {siteConfig.founder.qualification}
                </p>
                <h3 className="font-serif text-2xl font-bold">{siteConfig.founder.name}</h3>
                <p className="text-sm text-cream-bg/80 font-light">{siteConfig.founder.title}</p>
              </div>
            </div>
          </FadeIn>

          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="left" delay={0.15}>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center space-x-1.5 bg-brown-accent/10 text-brown-accent dark:bg-brown-accent/15 dark:text-cream-bg text-xs font-semibold px-3 py-1.5 rounded-full">
                  <GraduationCap className="h-3.5 w-3.5" />
                  <span>{siteConfig.founder.qualification}</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-brown-accent/10 text-brown-accent text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Award className="h-3.5 w-3.5" />
                  <span>{siteConfig.founder.experience} Experience</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-theme-bg border border-theme-border text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Star className="h-3.5 w-3.5 text-brown-accent fill-brown-accent" />
                  <span>Chief Consultant</span>
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.25}>
              <p className="text-base font-light text-theme-fg/90 leading-relaxed">
                {siteConfig.founder.name} is a distinguished Ayurvedic physician with over 25 years of clinical practice in South India. She founded Aayur Kendra to deliver authentic, hospital-grade Ayurveda — combining Panchakarma, integrated therapies, and personalized care plans for every patient.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.35}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((item) => (
                  <div key={item} className="flex items-start space-x-2.5 text-sm font-light text-theme-fg/85">
                    <Award className="h-4 w-4 text-brown-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.45} className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center space-x-2 bg-primary-green text-white font-medium px-6 py-3.5 rounded-full text-sm transition-all hover:shadow-lg"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Consultation</span>
              </Link>
              <Link
                href="/doctors"
                className="inline-flex items-center justify-center space-x-2 border border-theme-border hover:border-brown-accent/30 text-theme-fg font-medium px-6 py-3.5 rounded-full text-sm transition-all"
              >
                <span>View Full Profile</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
