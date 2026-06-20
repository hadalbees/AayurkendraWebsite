"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { FadeIn } from "../ui/Motion";
import SectionHeader from "../ui/SectionHeader";
import PlaceholderImage from "../ui/PlaceholderImage";

const videoTestimonials = [
  {
    name: "Lakshmi Devi",
    condition: "Panchakarma Recovery",
    quote: "The 14-day program transformed my energy and digestion completely.",
  },
  {
    name: "Ramesh Krishnan",
    condition: "Chronic Back Pain",
    quote: "Elakizhi and physiotherapy relieved my sciatica when nothing else worked.",
  },
  {
    name: "Priya Venkatesh",
    condition: "Diabetes Management",
    quote: "My HbA1c dropped from 8.2 to 6.4 with Dr. Geetha's guidance.",
  },
];

export default function VideoTestimonials() {
  const [active, setActive] = useState(0);
  const current = videoTestimonials[active];

  return (
    <section id="video-testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Patient Stories"
          title="Hear From Our Patients"
          description="Real recovery journeys shared by patients who trusted Aayur Kendra with their health."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <FadeIn direction="right">
            <div className="premium-card overflow-hidden rounded-[1.5rem] relative aspect-video group cursor-pointer">
              <PlaceholderImage variant="gallery" icon={Play} label="Video Testimonial" className="absolute inset-0 w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-brown-dark/15 group-hover:bg-brown-dark/25 transition-colors">
                <span className="h-16 w-16 rounded-full bg-white/95 text-ayur-green flex items-center justify-center shadow-lg">
                  <Play className="h-7 w-7 fill-ayur-green ml-1" />
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15} className="space-y-6">
            <blockquote className="font-serif text-2xl sm:text-3xl text-brown-dark leading-snug">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-brown-dark">{current.name}</p>
              <p className="text-sm text-ayur-green font-medium">{current.condition}</p>
            </div>

            <div className="flex gap-3">
              {videoTestimonials.map((t, idx) => (
                <button
                  key={t.name}
                  onClick={() => setActive(idx)}
                  className={`premium-card px-4 py-3 text-left flex-1 transition-all cursor-pointer ${
                    idx === active ? "ring-2 ring-ayur-green/40 bg-ayur-green/5" : "hover:border-ayur-green/20"
                  }`}
                >
                  <p className="text-xs font-semibold text-brown-dark">{t.name}</p>
                  <p className="text-[10px] text-brown-muted mt-0.5">{t.condition}</p>
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
