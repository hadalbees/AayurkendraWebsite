"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { specialitiesData } from "@/data/specialities";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
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

const iconMap: Record<string, React.ComponentType<any>> = {
  Heart,
  Activity,
  Eye,
  ShieldAlert,
  Sparkles,
  Flower2,
  Leaf,
  Stethoscope,
  Brain
};

export default function SpecialitiesPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Banner Hero */}
        <section className="bg-gradient-to-br from-cream-light to-white text-brown-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brown-muted via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ayur-green font-semibold">
              Our Clinical Wings
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              Hospital Specialities
            </h1>
            <p className="text-sm sm:text-base font-light text-brown-muted max-w-2xl mx-auto leading-relaxed">
              We provide comprehensive diagnostic and therapy departments for acute conditions, preventative care, and metabolic balance.
            </p>
          </div>
        </section>

        {/* Directory Grid */}
        <section className="py-20 bg-cream-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialitiesData.map((spec) => {
                const Icon = iconMap[spec.iconName] || Activity;
                return (
                  <StaggerItem
                    key={spec.slug}
                    className="bg-white border border-brown-dark/8 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group relative"
                  >
                    <div className="space-y-6">
                      <div className="p-3.5 rounded-2xl bg-brown-accent/8 text-brown-accent dark:bg-brown-accent/15  shrink-0 w-fit group-hover:bg-brown-accent/10 dark:group-hover:bg-brown-accent/20 transition-colors">
                        <Icon className="h-6.5 w-6.5" />
                      </div>
                      
                      <div className="space-y-2.5">
                        <h3 className="font-serif text-xl font-bold text-brown-dark group-hover:text-ayur-green  transition-colors">
                          {spec.title}
                        </h3>
                        <p className="font-serif italic text-xs text-ayur-green">
                          "{spec.tagline}"
                        </p>
                        <p className="text-xs sm:text-sm font-light text-brown-dark/75 leading-relaxed line-clamp-4">
                          {spec.overview}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-brown-dark/8/60 mt-6 flex items-center justify-between text-xs font-semibold text-brown-dark/80 group-hover:text-ayur-green  transition-colors">
                      <span>Explore Department</span>
                      <div className="h-8 w-8 rounded-full bg-cream-bg flex items-center justify-center group-hover:translate-x-1 transition-all">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>

                    <Link href={`/specialities/${spec.slug}`} className="absolute inset-0 z-10" aria-label={`Read about ${spec.title}`} />
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
