"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { therapiesData } from "@/data/therapies";
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "../ui/Motion";
import SectionHeader from "../ui/SectionHeader";

const therapyImages: Record<string, string> = {
  "panchakarma": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop",
  "abhyangam": "https://images.unsplash.com/photo-1519823551278-64ac9283ca4e?q=80&w=800&auto=format&fit=crop",
  "shirodhara": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
  "takra-dhara": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
  "pizhichil": "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800&auto=format&fit=crop",
  "kizhi": "https://images.unsplash.com/photo-1519824141121-997672188db9?q=80&w=800&auto=format&fit=crop",
  "nasya": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop",
  "basti": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
  "virechana": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
  "netra-tarpanam": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
};

function formatDuration(duration: string) {
  if (duration.includes("Day")) return duration.split("(")[0].trim();
  return duration;
}

export default function TherapiesPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    const container = containerRef.current;
    if (!container) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 10) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      const firstCard = container.firstElementChild as HTMLElement;
      const cardWidth = firstCard ? firstCard.clientWidth + 24 : 320; // card clientWidth + gap (gap-6 is 24px)
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    const container = containerRef.current;
    if (!container) return;
    if (container.scrollLeft <= 10) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      const firstCard = container.firstElementChild as HTMLElement;
      const cardWidth = firstCard ? firstCard.clientWidth + 24 : 320;
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500); // Auto-scroll slowly every 4.5 seconds
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="therapies" className="section-padding bg-cream-bg relative border-t border-brown-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            label="Pure Healing"
            title="Ayurvedic Therapies"
            description="Classical treatments delivered by trained specialists under medical supervision."
            align="left"
            className="mb-0 max-w-2xl"
          />
          
          <div className="flex items-center gap-4">
            <Link
              href="/therapies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ayur-green hover:text-dark-green transition-colors shrink-0"
            >
              View All Treatments
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            {/* Carousel Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="h-10 w-10 rounded-full border border-brown-dark/10 bg-white flex items-center justify-center text-brown-dark hover:border-ayur-green hover:text-ayur-green transition-all shadow-sm cursor-pointer"
                aria-label="Previous Therapy"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 rounded-full border border-brown-dark/10 bg-white flex items-center justify-center text-brown-dark hover:border-ayur-green hover:text-ayur-green transition-all shadow-sm cursor-pointer"
                aria-label="Next Therapy"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {therapiesData.map((therapy) => (
              <div 
                key={therapy.slug} 
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start group"
              >
                <div className="premium-card overflow-hidden h-full flex flex-col hover:-translate-y-1 transition-all duration-300">
                  {/* Therapy Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-cream-muted">
                    <Image
                      src={therapyImages[therapy.slug] || "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop"}
                      alt={therapy.title}
                      fill
                      sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized={true} // Using unoptimized for external high-res placeholder load speed stability
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-serif text-lg font-semibold text-brown-dark group-hover:text-ayur-green transition-colors">
                        {therapy.title}
                      </h3>
                      <span className="flex items-center gap-1 text-[10px] text-brown-muted shrink-0 mt-1">
                        <Clock className="h-3 w-3" />
                        {formatDuration(therapy.duration)}
                      </span>
                    </div>
                    <p className="font-serif italic text-xs text-ayur-green mb-2">
                      &ldquo;{therapy.tagline}&rdquo;
                    </p>
                    <p className="text-sm text-brown-muted font-light leading-relaxed line-clamp-3 flex-grow">
                      {therapy.overview}
                    </p>
                    <Link
                      href={`/therapies/${therapy.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-ayur-green uppercase tracking-wider hover:text-dark-green"
                    >
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
