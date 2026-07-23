"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { therapiesData } from "@/data/therapies";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { ArrowRight, Clock, Sparkles, CheckCircle2 } from "lucide-react";

export default function TherapiesPage() {
  const flagship = therapiesData.find((t) => t.slug === "panchakarma");
  const therapiesList = therapiesData.filter((t) => t.slug !== "panchakarma");

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Banner Hero */}
        <section className="bg-gradient-to-br from-cream-light to-white text-brown-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brown-muted via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ayur-green font-semibold">
              Pure Ayurvedic Healing
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              Clinical Therapies
            </h1>
            <p className="text-sm sm:text-base font-light text-brown-muted max-w-2xl mx-auto leading-relaxed">
              We execute classical physical therapies utilizing certified organic herbal compounds, warming medicated oils, and Element care protocols.
            </p>
          </div>
        </section>

        {/* Directory Listings */}
        <section className="py-20 bg-cream-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Highlighted Panchakarma block */}
            {flagship && (
              <FadeIn delay={0.1} className="mb-16">
                <div className="bg-gradient-to-br from-cream-light to-white text-brown-dark rounded-3xl p-6 sm:p-10 shadow-xl border border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -translate-y-10 translate-x-10 h-40 w-40 bg-white/5 rounded-full pointer-events-none" />
                  
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center space-x-2 bg-brown-accent/15 text-brown-accent border border-brown-accent/25 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "12s" }} />
                      <span>Flagship Purification Treatment</span>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-serif text-3.5xl font-bold text-white group-hover:text-brown-accent transition-colors">
                        {flagship.title}
                      </h3>
                      <p className="font-serif italic text-sm text-brown-accent">
                        "{flagship.tagline}"
                      </p>
                      <p className="text-sm font-light text-cream-bg/85 leading-relaxed">
                        {flagship.overview}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {flagship.benefits.slice(0, 4).map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 text-xs text-cream-bg/90">
                          <CheckCircle2 className="h-4.5 w-4.5 text-brown-accent shrink-0 mt-0.5" />
                          <span className="font-light">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                    <div className="flex items-center justify-between text-sm border-b border-white/10 pb-4">
                      <span className="text-cream-bg/70 font-light">Procedure Duration</span>
                      <div className="flex items-center space-x-1.5 font-bold text-brown-accent">
                        <Clock className="h-4.5 w-4.5" />
                        <span>{flagship.duration}</span>
                      </div>
                    </div>

                    <p className="text-xs text-cream-bg/65 font-light leading-relaxed">
                      Deep-seated cellular detox. Restores Agni metabolism and purges system impurities. Guided directly by Dr. Geetha Jayapal.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Link
                        href={`/therapies/${flagship.slug}`}
                        className="w-full text-center bg-ayur-green hover:bg-dark-green text-white font-medium px-5 py-3 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Explore Treatment
                      </Link>
                      <Link
                        href={`/appointment?treatment=${flagship.slug}`}
                        className="w-full text-center bg-white/10 hover:bg-white/15 text-white font-medium px-5 py-3 rounded-full text-xs uppercase tracking-wider border border-white/10 transition-all cursor-pointer"
                      >
                        Book Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Grid of Other Treatments */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {therapiesList.map((t) => (
                <StaggerItem
                  key={t.slug}
                  className="bg-white border border-brown-dark/8 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group relative"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-brown-dark/8/60 pb-3">
                      <h3 className="font-serif text-lg font-bold text-brown-dark group-hover:text-ayur-green  transition-colors">
                        {t.title}
                      </h3>
                      <div className="flex items-center space-x-1 text-xs text-brown-muted font-light shrink-0 ml-4">
                        <Clock className="h-3.5 w-3.5 text-ayur-green" />
                        <span>{t.duration.split(" ")[0]}m</span>
                      </div>
                    </div>
                    
                    <p className="font-serif italic text-xs text-ayur-green">
                      "{t.tagline}"
                    </p>
                    <p className="text-xs sm:text-sm font-light text-brown-dark/75 leading-relaxed line-clamp-4">
                      {t.overview}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-brown-dark/8/60 mt-6 flex items-center justify-between text-xs font-semibold text-brown-dark/80 group-hover:text-ayur-green  transition-colors">
                    <span>Explore Treatment Details</span>
                    <div className="h-8 w-8 rounded-full bg-cream-bg flex items-center justify-center group-hover:translate-x-1 transition-all">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  <Link href={`/therapies/${t.slug}`} className="absolute inset-0 z-10" aria-label={`Read about ${t.title}`} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
