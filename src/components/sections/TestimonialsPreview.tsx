"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "../ui/Motion";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const testimonials = [
  {
    name: "Meenakshi Sundaram",
    condition: "PCOS Recovery Treatment",
    rating: 5,
    date: "2 months ago",
    comment: "I was suffering from PCOS for 4 years with irregular periods and weight gain. Under Dr. Geetha's guidance, with a 14-day Virechana course and specific diets, my periods are regular and I feel energetic. Highly recommended!",
    verified: true,
    type: "text" as const,
  },
  {
    name: "Ramesh Krishnan",
    condition: "Chronic Back Pain & Sciatica",
    rating: 5,
    date: "1 month ago",
    comment: "Due to my IT desk job, I had severe sciatica back pain. The combination of Elakizhi massage and Physiotherapy sessions at Aayur Kendra completely relieved my leg pain. Excellent hygienic hospital rooms.",
    verified: true,
    type: "text" as const,
  },
  {
    name: "Priya Venkatesh",
    condition: "Lifestyle Disease (Type 2 Diabetes)",
    rating: 5,
    date: "3 weeks ago",
    comment: "My HbA1c was 8.2. With Ayurvedic herbs, regular yoga sessions, and dietary guidance from Dr. Geetha Jayapal, my blood sugar levels are under control and HbA1c is down to 6.4. I reduced my allopathic dosages too.",
    verified: true,
    type: "text" as const,
  },
  {
    name: "Lakshmi Devi",
    condition: "Panchakarma Detox",
    rating: 5,
    date: "1 week ago",
    comment: "The 14-day Panchakarma program transformed my energy levels and digestion. The inpatient facility was clean, nursing staff were attentive, and Dr. Geetha's supervision gave me complete confidence.",
    verified: true,
    type: "text" as const,
  },
];

export default function TestimonialsPreview() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section className="py-20 bg-theme-bg relative overflow-hidden border-t border-theme-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <FadeIn direction="right">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-theme-accent font-bold">
                Patient Stories
              </span>
              <h2 className="font-serif text-3.5xl sm:text-4.5xl font-bold text-brown-accent dark:text-cream-bg mt-1">
                Reviews & Testimonials
              </h2>
              <p className="text-sm sm:text-base font-light text-theme-fg/75 mt-3 leading-relaxed">
                Hear directly from our patients about their clinical healing journeys and experiences with our healthcare services.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn direction="left" delay={0.2} className="shrink-0 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.social.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-theme-card border border-theme-border px-4 py-2 rounded-xl text-xs font-semibold shadow-sm hover:border-brown-accent/30 transition-colors"
            >
              <span className="text-red-500 font-bold">G</span>
              <span className="text-theme-fg/80">Google Rating:</span>
              <div className="flex items-center text-yellow-500">
                <Star className="h-3.5 w-3.5 fill-current" />
                <span className="ml-1 text-theme-fg">4.9 / 5</span>
              </div>
            </a>
            
            <Link
              href="/testimonials"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-brown-accent dark:text-cream-bg hover:text-brown-dark transition-colors"
            >
              <span>Read More Stories</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-theme-card border border-theme-border rounded-3xl p-8 sm:p-12 shadow-sm min-h-[280px] relative overflow-hidden">
            <Quote className="absolute top-6 right-8 h-16 w-16 text-theme-accent/10" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >


                <div className="flex items-center space-x-0.5 text-yellow-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                <p className="text-base sm:text-lg font-light text-theme-fg/90 leading-relaxed italic max-w-3xl">
                  &ldquo;{t.comment}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-theme-border/60">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-theme-fg">{t.name}</h4>
                    <p className="text-xs text-theme-accent font-semibold uppercase tracking-wider">{t.condition}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-brown-accent/8 text-brown-accent text-[9px] uppercase tracking-wider font-semibold px-2 py-1 rounded">
                      Verified Patient
                    </span>
                    <p className="text-[10px] text-theme-fg/40 mt-1">{t.date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="p-2 rounded-full border border-theme-border hover:bg-theme-card transition-colors" aria-label="Previous testimonial">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`h-2 rounded-full transition-all ${idx === current ? "w-8 bg-primary-green" : "w-2 bg-theme-border"}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full border border-theme-border hover:bg-theme-card transition-colors" aria-label="Next testimonial">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
