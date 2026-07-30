"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { specialitiesData } from "@/data/specialities";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  ClipboardList, 
  Activity, 
  ShieldCheck, 
  Calendar 
} from "lucide-react";

export default function SpecialityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const speciality = specialitiesData.find((s) => s.slug === slug);

  if (!speciality) {
    notFound();
  }

  const [activeTab, setActiveTab] = useState<"overview" | "conditions" | "benefits" | "process" | "faqs">("overview");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // SEO Schema Injection
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": `${speciality.title} - Aayur Kendra Ayurveda Speciality Hospital`,
    "description": speciality.overview,
    "about": {
      "@type": "MedicalSpecialty",
      "name": speciality.title,
    },
    "audience": {
      "@type": "Patient",
    },
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Activity },
    { id: "conditions", label: "Conditions Treated", icon: ClipboardList },
    { id: "benefits", label: "Clinical Benefits", icon: ShieldCheck },
    { id: "process", label: "Treatment Process", icon: CheckCircle2 },
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
        {/* Breadcrumb & Header Hero */}
        <section className="bg-gradient-to-br from-cream-light to-white text-brown-dark py-16 sm:py-20 relative overflow-hidden">
          {/* Subtle nature-inspired geometric background elements */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brown-muted via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex space-x-2 text-xs uppercase tracking-wider text-brown-muted mb-4">
              <Link href="/" className="hover:text-brown-accent transition-colors">Home</Link>
              <span>/</span>
              <Link href="/specialities" className="hover:text-brown-accent transition-colors">Specialities</Link>
              <span>/</span>
              <span className="text-brown-accent">{speciality.title}</span>
            </nav>
            <h1 className="font-serif text-3.5xl sm:text-5xl font-bold mb-3">
              {speciality.title}
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-brown-accent">
              "{speciality.tagline}"
            </p>
          </div>
        </section>

        {/* Dynamic Detail Content & Sidebar */}
        <section className="py-16 bg-cream-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Tab Navigation & Dynamic Content Panel */}
              <div className="lg:col-span-2 space-y-8">
                {/* Horizontal Tab Links for Desktop & Tablet */}
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

                {/* Tab Panels */}
                <div className="bg-white border border-brown-dark/8 rounded-2xl p-6 sm:p-8 shadow-sm">
                  {activeTab === "overview" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="font-serif text-2xl font-bold text-brown-dark">
                        About {speciality.title}
                      </h2>
                      <p className="text-base text-brown-dark leading-relaxed font-light whitespace-pre-line">
                        {speciality.overview}
                      </p>
                      <div className="border-t border-brown-dark/8 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-cream-bg/50 p-4 rounded-xl border border-brown-dark/8/50">
                          <h4 className="text-xs uppercase tracking-wider text-ayur-green font-semibold mb-1">Clinic Expertise</h4>
                          <p className="text-sm font-light">25+ Years of Clinical Guidance</p>
                        </div>
                        <div className="bg-cream-bg/50 p-4 rounded-xl border border-brown-dark/8/50">
                          <h4 className="text-xs uppercase tracking-wider text-ayur-green font-semibold mb-1">Approach</h4>
                          <p className="text-sm font-light">100% Authentic Ayurveda Protocols</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "conditions" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="font-serif text-2xl font-bold text-brown-dark">
                        Conditions We Treat
                      </h2>
                      <p className="text-sm text-brown-dark/75 font-light">
                        We offer customized care plans targeting the root causes of the following conditions:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {speciality.conditionsTreated.map((condition) => (
                          <div
                            key={condition}
                            className="flex items-start space-x-3 bg-cream-bg/30 p-3.5 rounded-xl border border-brown-dark/8/30 hover:border-brown-accent/25 transition-colors"
                          >
                            <CheckCircle2 className="h-5 w-5 text-brown-dark shrink-0 mt-0.5" />
                            <span className="text-sm font-medium">{condition}</span>
                          </div>
                        ))}
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
                        Clinical Benefits
                      </h2>
                      <div className="space-y-4">
                        {speciality.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <span className="flex items-center justify-center bg-brown-accent/10 text-brown-accent dark:bg-brown-accent/15 dark:text-cream-bg h-6 w-6 rounded-full text-xs font-bold shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <p className="text-sm font-light text-brown-dark leading-relaxed">
                              {benefit}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "process" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="font-serif text-2xl font-bold text-brown-dark">
                        Patient Care & Treatment Journey
                      </h2>
                      <div className="relative border-l border-brown-dark/8 pl-6 ml-2 space-y-8">
                        {speciality.treatmentProcess.map((step, idx) => (
                          <div key={idx} className="relative">
                            <span className="absolute -left-10 top-0.5 bg-white border-2 border-brown-accent text-brown-dark h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold">
                              {idx + 1}
                            </span>
                            <h4 className="text-sm font-semibold mb-1">
                              Step {idx + 1}
                            </h4>
                            <p className="text-sm font-light text-brown-dark leading-relaxed">
                              {step}
                            </p>
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
                        Frequently Asked Questions
                      </h2>
                      <div className="space-y-4">
                        {speciality.faqs.map((faq, idx) => {
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

              {/* Consultation Booking Widget Side-bar */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-cream-light to-white text-brown-dark rounded-2xl p-6 sm:p-8 shadow-lg space-y-6 relative overflow-hidden border border-brown-dark/5">
                  <div className="absolute top-0 right-0 -translate-y-6 translate-x-6 h-24 w-24 bg-white/5 rounded-full pointer-events-none" />
                  
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brown-accent font-bold">
                      Direct consultation
                    </span>
                    <h3 className="font-serif text-2xl font-bold">
                      Consult with Dr. Geetha Jayapal
                    </h3>
                    <p className="text-xs text-brown-muted leading-relaxed font-light">
                      Founder & Chief Consultant with 25+ years of Ayurvedic clinical excellence.
                    </p>
                  </div>

                  <div className="border-t border-brown-dark/10 pt-4 space-y-3">
                    <div className="flex items-center space-x-3 text-xs">
                      <CheckCircle2 className="h-4.5 w-4.5 text-ayur-green shrink-0" />
                      <span>Customized Diet & Lifestyle Plans</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs">
                      <CheckCircle2 className="h-4.5 w-4.5 text-ayur-green shrink-0" />
                      <span>10-Bed Inpatient Care Available</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs">
                      <CheckCircle2 className="h-4.5 w-4.5 text-ayur-green shrink-0" />
                      <span>Authentic Medicine Pharmacy</span>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 pt-2">
                    <Link
                      href={`/appointment?treatment=${speciality.slug}`}
                      className="bg-ayur-green hover:bg-dark-green text-white text-center font-medium py-3 rounded-full text-sm flex items-center justify-center space-x-2 transition-all hover:shadow-md cursor-pointer"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Book Speciality Consult</span>
                    </Link>
                    <a
                      href="tel:+919150112757"
                      className="bg-white hover:bg-cream-light text-brown-dark text-center font-medium py-3 rounded-full text-sm border border-brown-dark/15 hover:border-brown-dark/25 flex items-center justify-center space-x-2 transition-all cursor-pointer"
                    >
                      <span>Call Hospital Now</span>
                    </a>
                  </div>
                </div>

                {/* List of Other Specialities */}
                <div className="bg-white border border-brown-dark/8 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-serif text-lg font-bold mb-4 pb-2 border-b border-brown-dark/8 text-brown-dark">
                    Other Specialities
                  </h3>
                  <div className="space-y-2">
                    {specialitiesData
                      .filter((s) => s.slug !== speciality.slug)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          href={`/specialities/${s.slug}`}
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-cream-bg text-sm font-medium text-brown-dark/80 hover:text-brown-dark transition-colors"
                        >
                          <span>{s.title}</span>
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
