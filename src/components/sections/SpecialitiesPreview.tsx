"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { specialitiesData } from "@/data/specialities";
import { 
  ArrowRight, 
  Heart, 
  Activity, 
  Eye, 
  ShieldAlert, 
  Sparkles, 
  Stethoscope, 
  Brain,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { FadeIn } from "../ui/Motion";
import SectionHeader from "../ui/SectionHeader";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Activity,
  Eye,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  Brain,
};

const specialityImages: Record<string, string> = {
  "womens-wellness": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
  "lifestyle-disease-management": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
  "ayurvedic-eye-care": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
  "ano-rectal-care": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop",
  "pain-management": "https://images.unsplash.com/photo-1519823551278-64ac9283ca4e?q=80&w=800&auto=format&fit=crop",
  "spine-joint-care": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
  "neurological-rehabilitation": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
  "mental-wellness": "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop",
  "post-operative-care": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  "aesthetic-medicine": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
};

export default function SpecialitiesPreview() {
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
      const cardWidth = firstCard ? firstCard.clientWidth + 24 : 450; // card clientWidth + gap
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
      const cardWidth = firstCard ? firstCard.clientWidth + 24 : 450;
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-scroll slowly every 5 seconds
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="specialities" className="py-20 bg-white relative overflow-hidden border-t border-brown-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <FadeIn direction="right">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ayur-green font-bold">
                Speciality Care Departments
              </span>
              <h2 className="font-serif text-3.5xl sm:text-4.5xl font-bold text-brown-dark mt-1">
                Our Medical Specialities
              </h2>
              <p className="text-sm sm:text-base font-light text-brown-muted mt-3 leading-relaxed">
                Dedicated healthcare wings combining authentic pulse diagnosis and traditional therapies with modern clinical standards.
              </p>
            </FadeIn>
          </div>
          
          <div className="flex items-center gap-4">
            <Link
              href="/specialities"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ayur-green hover:text-dark-green transition-colors shrink-0"
            >
              View All Specialities
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            {/* Carousel Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="h-10 w-10 rounded-full border border-brown-dark/10 bg-white flex items-center justify-center text-brown-dark hover:border-ayur-green hover:text-ayur-green transition-all shadow-sm cursor-pointer"
                aria-label="Previous Speciality"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 rounded-full border border-brown-dark/10 bg-white flex items-center justify-center text-brown-dark hover:border-ayur-green hover:text-ayur-green transition-all shadow-sm cursor-pointer"
                aria-label="Next Speciality"
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
            {specialitiesData.map((speciality) => {
              const Icon = iconMap[speciality.iconName] || Activity;
              return (
                <div 
                  key={speciality.slug} 
                  className="w-full lg:w-[calc(50%-12px)] shrink-0 snap-start group"
                >
                  <div className="relative bg-cream-bg/40 border border-brown-dark/8 rounded-3xl overflow-hidden flex flex-col sm:flex-row h-full shadow-sm hover:shadow-md transition-all duration-300">
                    
                    {/* Left: Image (or top on mobile) */}
                    <div className="relative w-full sm:w-2/5 min-h-[200px] sm:min-h-full bg-cream-muted overflow-hidden">
                      <Image
                        src={specialityImages[speciality.slug] || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"}
                        alt={speciality.title}
                        fill
                        sizes="(max-w-640px) 100vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized={true}
                      />
                      
                      {/* Floating Icon badge on top-left of image */}
                      <div className="absolute top-4 left-4 p-2 bg-white/95 backdrop-blur-sm text-ayur-green rounded-xl shadow-sm z-10">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Right: Content (or bottom on mobile) */}
                    <div className="w-full sm:w-3/5 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-brown-dark group-hover:text-ayur-green transition-colors">
                          {speciality.title}
                        </h3>
                        <p className="font-serif italic text-[11px] text-ayur-green">
                          &ldquo;{speciality.tagline}&rdquo;
                        </p>
                        <p className="text-xs sm:text-sm font-light text-brown-muted leading-relaxed line-clamp-3">
                          {speciality.overview}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-brown-dark/8 flex items-center justify-between text-xs font-semibold text-brown-dark/80 group-hover:text-ayur-green transition-colors">
                        <span>Learn More</span>
                        <div className="h-8 w-8 rounded-full bg-cream-bg flex items-center justify-center group-hover:translate-x-1 transition-all">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/specialities/${speciality.slug}`} 
                      className="absolute inset-0 z-10" 
                      aria-label={`Learn more about ${speciality.title}`} 
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
