"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { therapiesData } from "@/data/therapies";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Clock, 
  Sparkles,
  HeartHandshake,
  Calendar,
  AlertCircle
} from "lucide-react";

export default function TherapyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const therapy = therapiesData.find((t) => t.slug === slug);

  if (!therapy) {
    notFound();
  }

  const [activeTab, setActiveTab] = useState<"overview" | "benefits" | "procedure" | "candidates" | "faqs">("overview");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Schema Markup for Therapy
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": `${therapy.title} Therapy - Aayur Kendra Ayurveda Speciality Hospital`,
    "description": therapy.overview,
    "about": {
      "@type": "MedicalProcedure",
      "name": therapy.title,
      "description": therapy.tagline,
      "bodyLocation": "Entire Body"
    }
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Sparkles },
    { id: "benefits", label: "Benefits", icon: HeartHandshake },
    { id: "procedure", label: "Procedure Steps", icon: CheckCircle2 },
    { id: "candidates", label: "Who Should Take It", icon: AlertCircle },
    { id: "faqs", label: "FAQs", icon: HelpCircle },
  ] as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Header Hero */}
        <section className="bg-gradient-to-br from-cream-light to-white text-brown-dark py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brown-muted via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex space-x-2 text-xs uppercase tracking-wider text-brown-muted mb-4">
              <Link href="/" className="hover:text-brown-accent transition-colors">Home</Link>
              <span>/</span>
              <Link href="/therapies" className="hover:text-brown-accent transition-colors">Therapies</Link>
              <span>/</span>
              <span className="text-brown-accent">{therapy.title}</span>
            </nav>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="font-serif text-3.5xl sm:text-5xl font-bold mb-3">
                  {therapy.title}
                </h1>
                <p className="font-serif italic text-lg sm:text-xl text-brown-accent">
                  "{therapy.tagline}"
                </p>
              </div>
              
              {/* Duration Tag */}
              <div className="bg-brown-dark/5 border border-brown-dark/10 px-5 py-3.5 rounded-2xl flex items-center space-x-3 shrink-0 self-start md:self-auto">
                <Clock className="h-6 w-6 text-brown-accent" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-brown-muted font-semibold">Typical Duration</h4>
                  <p className="text-sm font-semibold">{therapy.duration}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detail Tabs & Booking Card */}
        <section className="py-16 bg-cream-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column: Navigation & Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Scrollable Tabs */}
                <div className="flex overflow-x-auto border-b border-brown-dark/8 pb-1 gap-2 scrollbar-none">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 px-5 py-3 border-b-2 text-sm font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                          activeTab === tab.id
                            ? "border-brown-accent text-brown-dark"
                            : "border-transparent text-brown-dark/60 hover:text-brown-dark"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab content panel */}
                <div className="bg-white border border-brown-dark/8 rounded-2xl p-6 sm:p-8 shadow-sm">
                  {activeTab === "overview" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="font-serif text-2xl font-bold text-brown-dark">
                        Therapy Overview
                      </h2>
                      <p className="text-base text-brown-dark leading-relaxed font-light whitespace-pre-line">
                        {therapy.overview}
                      </p>
                      <div className="pt-4 border-t border-brown-dark/8 flex items-center space-x-4 text-xs text-brown-muted font-light">
                        <span>✦ Flagship Ayurvedic Offering</span>
                        <span>•</span>
                        <span>✦ Non-Invasive Wellness</span>
                        <span>•</span>
                        <span>✦ Pure Herbal Preparations</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "benefits" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="font-serif text-2xl font-bold text-brown-dark">
                        Key Healing Benefits
                      </h2>
                      <div className="space-y-4">
                        {therapy.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-brown-dark shrink-0 mt-0.5" />
                            <p className="text-sm font-light text-brown-dark leading-relaxed">
                              {benefit}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "procedure" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="font-serif text-2xl font-bold text-brown-dark">
                        The Procedure Details
                      </h2>
                      <p className="text-sm text-brown-dark/75 font-light">
                        Our therapists follow precise traditional guidelines under clinical supervision:
                      </p>
                      <div className="relative border-l border-brown-dark/8 pl-6 ml-2 space-y-8">
                        {therapy.procedure.map((step, idx) => (
                          <div key={idx} className="relative">
                            <span className="absolute -left-10 top-0.5 bg-white border-2 border-brown-accent text-brown-dark h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold">
                              {idx + 1}
                            </span>
                            <p className="text-sm font-light text-brown-dark leading-relaxed">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "candidates" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="font-serif text-2xl font-bold text-brown-dark">
                        Who Should Receive {therapy.title}?
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {therapy.whoShouldTake.map((candidate) => (
                          <div
                            key={candidate}
                            className="flex items-start space-x-3 bg-cream-bg/30 p-3.5 rounded-xl border border-brown-dark/8/30"
                          >
                            <span className="inline-block h-2 w-2 rounded-full bg-brown-accent shrink-0 mt-2" />
                            <span className="text-sm font-light leading-relaxed">{candidate}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "faqs" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="font-serif text-2xl font-bold text-brown-dark mb-4">
                        Therapy FAQs
                      </h2>
                      <div className="space-y-4">
                        {therapy.faqs.map((faq, idx) => {
                          const isOpen = openFaqIndex === idx;
                          return (
                            <div
                              key={idx}
                              className="border border-brown-dark/8 rounded-xl overflow-hidden transition-all duration-200"
                            >
                              <button
                                onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                className="w-full px-5 py-4 flex items-center justify-between bg-cream-bg/20 hover:bg-cream-bg/50 transition-colors text-left font-medium text-sm sm:text-base cursor-pointer"
                              >
                                <span>{faq.question}</span>
                                <ChevronRight
                                  className={`h-4 w-4 shrink-0 text-ayur-green transition-transform duration-200 ${
                                    isOpen ? "rotate-90" : ""
                                  }`}
                                />
                              </button>
                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="border-t border-brown-dark/8 bg-white px-5 py-4"
                                  >
                                    <p className="text-sm font-light text-brown-dark leading-relaxed">
                                      {faq.answer}
                                    </p>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Right Sidebar: Booking card & Other options */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-cream-light to-white text-brown-dark rounded-2xl p-6 sm:p-8 shadow-lg space-y-6 relative overflow-hidden border border-brown-dark/5">
                  <div className="absolute top-0 right-0 -translate-y-6 translate-x-6 h-24 w-24 bg-white/5 rounded-full pointer-events-none" />
                  
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brown-accent font-bold">
                      Therapy Booking
                    </span>
                    <h3 className="font-serif text-2xl font-bold">
                      Schedule a Session
                    </h3>
                    <p className="text-xs text-brown-muted leading-relaxed font-light">
                      Experience clinical-grade therapies supervised directly by Dr. Geetha Jayapal.
                    </p>
                  </div>

                  <div className="border-t border-brown-dark/10 pt-4 space-y-3">
                    <div className="flex items-center space-x-3 text-xs">
                      <CheckCircle2 className="h-4.5 w-4.5 text-ayur-green shrink-0" />
                      <span>Conducted by trained, same-gender therapists</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs">
                      <CheckCircle2 className="h-4.5 w-4.5 text-ayur-green shrink-0" />
                      <span>Hygienic, premium clinical therapy rooms</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs">
                      <CheckCircle2 className="h-4.5 w-4.5 text-ayur-green shrink-0" />
                      <span>Custom-selected medicated oils and herbs</span>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 pt-2">
                    <Link
                      href={`/appointment?treatment=${therapy.slug}`}
                      className="bg-ayur-green hover:bg-dark-green text-white text-center font-medium py-3 rounded-full text-sm flex items-center justify-center space-x-2 transition-all hover:shadow-md cursor-pointer"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Book Therapy Session</span>
                    </Link>
                    <a
                      href="tel:+919150112757"
                      className="bg-white hover:bg-cream-light text-brown-dark text-center font-medium py-3 rounded-full text-sm border border-brown-dark/15 hover:border-brown-dark/25 flex items-center justify-center space-x-2 transition-all cursor-pointer"
                    >
                      <span>Call Hospital Now</span>
                    </a>
                  </div>
                </div>

                {/* List of Other Therapies */}
                <div className="bg-white border border-brown-dark/8 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-serif text-lg font-bold mb-4 pb-2 border-b border-brown-dark/8 text-brown-dark">
                    Other Therapies
                  </h3>
                  <div className="space-y-2">
                    {therapiesData
                      .filter((t) => t.slug !== therapy.slug)
                      .slice(0, 6)
                      .map((t) => (
                        <Link
                          key={t.slug}
                          href={`/therapies/${t.slug}`}
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-cream-bg text-sm font-medium text-brown-dark/80 hover:text-brown-dark transition-colors"
                        >
                          <span>{t.title}</span>
                          <ArrowRight className="h-3.5 w-3.5 text-ayur-green" />
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
