"use client";

import Link from "next/link";
import { specialitiesData } from "@/data/specialities";
import { 
  ArrowRight, 
  Heart, 
  Activity, 
  Eye, 
  ShieldAlert, 
  Sparkles, 
  Flower2, 
  Leaf, 
  Stethoscope, 
  Brain 
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "../ui/Motion";
import PlaceholderImage from "../ui/PlaceholderImage";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Activity,
  Eye,
  ShieldAlert,
  Sparkles,
  Flower2,
  Leaf,
  Stethoscope,
  Brain,
};

export default function SpecialitiesPreview() {
  return (
    <section className="py-20 bg-theme-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <FadeIn direction="right">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-theme-accent font-bold">
                Our Medical Departments
              </span>
              <h2 className="font-serif text-3.5xl sm:text-4.5xl font-bold text-brown-accent dark:text-cream-bg mt-1">
                Ayurveda Specialities
              </h2>
              <p className="text-sm sm:text-base font-light text-theme-fg/75 mt-3 leading-relaxed">
                Explore our dedicated healthcare wings combining ancient diagnostic protocols and traditional therapies with modern clinical standards.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn direction="left" delay={0.2} className="shrink-0">
            <Link
              href="/specialities"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-brown-accent dark:text-cream-bg hover:text-brown-dark dark:hover:text-cream-bg/80 transition-colors"
            >
              <span>View All Specialities</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialitiesData.map((speciality) => {
            const Icon = iconMap[speciality.iconName] || Activity;
            return (
              <StaggerItem
                key={speciality.slug}
                className="relative bg-theme-card border border-theme-border rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative h-40">
                  <PlaceholderImage
                    variant="speciality"
                    icon={Icon}
                    label={speciality.title}
                    className="h-full w-full"
                  />
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-grow space-y-3">
                  <h3 className="font-serif text-xl font-bold text-theme-fg group-hover:text-brown-dark dark:group-hover:text-cream-bg transition-colors">
                    {speciality.title}
                  </h3>
                  <p className="font-serif italic text-xs text-theme-accent">
                    &ldquo;{speciality.tagline}&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm font-light text-theme-fg/75 leading-relaxed line-clamp-3 flex-grow">
                    {speciality.overview}
                  </p>

                  <div className="pt-4 border-t border-theme-border/60 flex items-center justify-between text-xs font-semibold text-theme-fg/80 group-hover:text-brown-dark dark:group-hover:text-cream-bg transition-colors">
                    <span>Learn More</span>
                    <div className="h-8 w-8 rounded-full bg-theme-bg/60 flex items-center justify-center group-hover:translate-x-1 transition-all">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                
                <Link href={`/specialities/${speciality.slug}`} className="absolute inset-0 z-10" aria-label={`Learn more about ${speciality.title}`} />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
