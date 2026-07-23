"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { Star, Quote, Award } from "lucide-react";

const longTestimonials = [
  {
    name: "Meenakshi Sundaram",
    location: "Hosur",
    condition: "PCOS Recovery Treatment",
    rating: 5,
    story: "I had irregular periods, hormonal acne, and insulin resistance for years. After consulting Dr. Geetha Jayapal, she recommended a 14-day inpatient detox including Virechana. The clinical attention, personalized diet, and daily medications completely transformed my health. My cycle is regular, my skin has cleared, and my energy levels are higher than ever.",
  },
  {
    name: "Ramesh Krishnan",
    location: "Bangalore",
    condition: "Chronic Sciatica & Lumbar Spondylosis",
    rating: 5,
    story: "Severe radiating pain in my left leg made it impossible to sit for more than 10 minutes. At Aayur Kendra, I received a structured therapy course of Elakizhi massage and specialized basti (enemas) combined with physiotherapy exercises. Within 10 days, the nerve pain subsided. The hospital's therapy suites are hygienic and highly professional.",
  },
  {
    name: "Priya Venkatesh",
    location: "Hosur",
    condition: "Lifestyle Disease (Type 2 Diabetes & Obesity)",
    rating: 5,
    story: "With a busy lifestyle, my fasting blood glucose was consistently above 180 and weight was climbing. Under Dr. Geetha's supervision, the metabolic dry massage (Udwarthanam) and diet charts helped me lose 8 kgs in 2 months. My HbA1c dropped from 8.2 to 6.4. I feel rejuvenated and active.",
  },
  {
    name: "Arunachalam S.",
    location: "Krishnagiri",
    condition: "Ano-Rectal Care (Fistula Kshara Sutra)",
    rating: 5,
    story: "I was highly apprehensive about surgical options for my fistula. Dr. Geetha recommended Kshara Sutra seton thread therapy. It was a minimally invasive outpatient procedure. The recovery was smooth with minimal pain, and I returned to work within 3 days. There has been no recurrence since then.",
  },
  {
    name: "Subhashini R.",
    location: "Salem",
    condition: "Migraine & Chronic Insomnia",
    rating: 5,
    story: "Daily stress was causing intense migraines. I underwent a 7-day course of Shirodhara with medicated buttermilk (Takradhara) and Nasya nasal drops. The quiet, calm environment of the hospital and the soothing oils allowed me to sleep peacefully for the first time in years. My headaches have vanished.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Banner Hero */}
        <section className="bg-gradient-to-br from-cream-light to-white text-brown-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brown-muted via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ayur-green font-semibold">
              Patient Testimonials
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              Healing Journeys
            </h1>
            <p className="text-sm sm:text-base font-light text-brown-muted max-w-2xl mx-auto leading-relaxed">
              Read personal recovery stories from patients who restored their health through our authentic clinical programs.
            </p>
          </div>
        </section>

        {/* Google Reviews rating overview card */}
        <section className="py-12 bg-white border-b border-brown-dark/8/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-cream-bg/60 border border-brown-dark/8 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 bg-red-500 rounded-2xl flex items-center justify-center text-white font-serif text-3xl font-bold shadow-md">
                  G
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brown-dark">Google Business Listing</h3>
                  <p className="text-xs font-light text-brown-dark/75">Verified patient reviews and feedback</p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <h4 className="text-3xl font-serif font-bold text-brown-dark">4.9</h4>
                  <div className="flex items-center text-yellow-500 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-brown-dark/50 mt-1">Average Rating</p>
                </div>

                <div className="border-l border-brown-dark/8 h-10" />

                <div className="text-center">
                  <h4 className="text-3xl font-serif font-bold text-brown-dark">200+</h4>
                  <p className="text-sm font-light text-brown-dark/75">Patient Reviews</p>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-brown-dark/50 mt-1">Total Submissions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials List */}
        <section className="py-20 bg-cream-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {longTestimonials.map((t, idx) => (
                <StaggerItem
                  key={idx}
                  className="bg-white border border-brown-dark/8 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative group hover:shadow-md transition-shadow duration-300"
                >
                  <div className="space-y-4">
                    <div className="absolute top-6 right-8 text-ayur-green/10 group-hover:text-ayur-green/25 transition-colors">
                      <Quote className="h-10 w-10 fill-current" />
                    </div>
                    
                    <div className="flex items-center space-x-1 text-yellow-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    
                    <h4 className="font-serif text-lg font-bold text-brown-dark">
                      {t.condition}
                    </h4>
                    <p className="text-xs sm:text-sm font-light text-brown-dark/80 leading-relaxed italic">
                      "{t.story}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-brown-dark/8/60 mt-6 flex items-center justify-between">
                    <div>
                      <h5 className="font-serif text-sm font-bold text-brown-dark">
                        {t.name}
                      </h5>
                      <p className="text-[10px] font-light text-brown-dark/60">
                        Patient from {t.location}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1.5 bg-brown-accent/8 text-brown-accent text-[9px] uppercase tracking-wider font-semibold px-2.5 py-1.5 rounded-lg border border-brown-accent/15">
                      <Award className="h-3.5 w-3.5" />
                      <span>Verified Recovery</span>
                    </div>
                  </div>
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
