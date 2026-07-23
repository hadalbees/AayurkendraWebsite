"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import Link from "next/link";
import { 
  Home, 
  Sparkles, 
  UserCheck, 
  Clipboard, 
  Activity, 
  Leaf, 
  Bed, 
  Compass,
  CheckCircle2,
  Calendar,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

const facilities = [
  {
    title: "10 Bed Hospital",
    description: "Hygienic recovery rooms designed for patients requiring intensive treatment, 24/7 nursing care, and continuous clinical supervision.",
    icon: Home,
  },
  {
    title: "Panchakarma Rooms",
    description: "Equipped with traditional wooden Droni massage beds and bronze Shirodhara vessels, cleaned following medical sanitization protocols.",
    icon: Sparkles,
  },
  {
    title: "Consultation Rooms",
    description: "Private suites for detailed pulse diagnosis (Nadi Pariksha), constitution mapping (Prakriti analysis), and clinical counseling.",
    icon: UserCheck,
  },
  {
    title: "Treatment Rooms",
    description: "Dedicated spaces for localized therapies like Kati Basti, Netra Tarpanam, and localized steam compressions.",
    icon: Bed,
  },
  {
    title: "Yoga Hall",
    description: "A calming, airy space with natural lighting for group or personalized therapeutic yoga, pranayama, and grounding meditation.",
    icon: Activity,
  },
  {
    title: "Ayurvedic Pharmacy",
    description: "Fully stocked pharmacy with certified organic herbal formulations, oils, single-herb pills, and tonics.",
    icon: Clipboard,
  },
  {
    title: "Inpatient Rooms",
    description: "Equipped with specialized hospital bedding, warm water systems, emergency buttons, and custom Ayurvedic diet support.",
    icon: Home,
  },
  {
    title: "Modern Infrastructure",
    description: "Designed with nature-inspired architecture, advanced ventilation, eco-friendly cooling, and modern hygiene standards.",
    icon: Compass,
  },
];

const faqs = [
  {
    question: "Do you have private inpatient rooms?",
    answer: "Yes, we offer both comfortable shared wards (up to 10 beds) and private premium recovery rooms based on patient preferences and clinical requirements."
  },
  {
    question: "Are the therapy rooms separate for men and women?",
    answer: "Yes, absolutely. We have completely segregated therapy chambers for male and female patients, and all treatments are conducted by qualified, same-gender therapists."
  },
  {
    question: "What are the visiting hours for inpatients?",
    answer: "Inpatients can receive visitors between 11:00 AM - 01:00 PM and 05:00 PM - 07:00 PM to ensure patients get adequate rest and undergo therapies without interruption."
  }
];

export default function FacilitiesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Hospital Schema Markup
  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Aayur Kendra Ayurveda Speciality Hospital",
    "description": "State-of-the-art 10-bed Ayurvedic hospital facility in Hosur featuring Panchakarma suites, consultation rooms, and professional care.",
    "telephone": "+91 91501 12757",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.23, Thally Road, Opposite Chenny's Mahal",
      "addressLocality": "Hosur",
      "postalCode": "635109",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }}
      />
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Banner Hero */}
        <section className="bg-gradient-to-br from-cream-light to-white text-brown-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brown-muted via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-xs uppercase tracking-wider text-brown-muted mb-2">
              <Link href="/" className="hover:text-ayur-green transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brown-dark font-medium">Facilities</span>
            </nav>

            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ayur-green font-semibold">
              Our Infrastructure
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              Hospital Facilities
            </h1>
            <p className="text-sm sm:text-base font-light text-brown-muted max-w-2xl mx-auto leading-relaxed">
              Explore our clinical facilities built to maintain modern hospital sanitation standards while preserving authentic healing spaces.
            </p>
          </div>
        </section>

        {/* Detailed Grid Section */}
        <section className="py-20 bg-cream-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((fac, idx) => {
                const Icon = fac.icon;
                return (
                  <StaggerItem
                    key={idx}
                    className="bg-white border border-brown-dark/8 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="space-y-4">
                      <div className="p-3 rounded-xl bg-ayur-green/8 text-ayur-green shrink-0 w-fit group-hover:bg-ayur-green group-hover:text-white transition-colors duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-brown-dark">
                        {fac.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-light text-brown-muted leading-relaxed">
                        {fac.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Highlight Section: Inpatient Ward Care */}
        <section className="py-20 bg-white border-t border-brown-dark/8/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 relative">
                <FadeIn direction="right">
                  <div className="bg-gradient-to-br from-cream-light to-white text-brown-dark rounded-3xl p-8 shadow-lg border border-brown-dark/5 space-y-6">
                    <h3 className="font-serif text-2xl font-bold text-brown-dark">
                      Clinical Inpatient Ward
                    </h3>
                    <p className="text-sm font-light text-brown-muted leading-relaxed">
                      For chronic disorders, we offer an immersive recovery program where patients stay in our 10-bed facility.
                    </p>
                    <div className="space-y-3 pt-2 text-brown-muted">
                      {[
                        "Continuous medical checkups by Dr. Geetha Jayapal",
                        "Medically tailored diets prepared daily in our organic kitchen",
                        "Hygienic sanitation & comfortable recovery rooms",
                        "24/7 nursing attention & emergency response"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 text-xs">
                          <CheckCircle2 className="h-4.5 w-4.5 text-ayur-green shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <FadeIn direction="left">
                  <span className="text-xs uppercase tracking-wider text-ayur-green font-semibold">Specialized Care</span>
                  <h2 className="font-serif text-3.5xl font-bold text-brown-dark mt-1">
                    Integrated Healing Environments
                  </h2>
                  <p className="text-base font-light text-brown-muted leading-relaxed mt-4">
                    Our facilities are configured to prevent cross-contamination, ensuring absolute hygiene during Panchakarma therapies like Basti or Virechana. We follow clinical sanitization standard practices and provide same-gender therapists for physical comfort.
                  </p>
                  <p className="text-base font-light text-brown-muted leading-relaxed mt-4">
                    Additionally, our integration of modern physiotherapy and psychological counseling suites allows us to provide physical rehabilitation and stress counseling.
                  </p>
                  
                  <div className="pt-4">
                    <Link
                      href="/appointment"
                      className="inline-flex items-center space-x-2 bg-ayur-green hover:bg-dark-green text-white font-medium px-6 py-3 rounded-full text-sm shadow-md cursor-pointer"
                    >
                      <Calendar className="h-4.5 w-4.5" />
                      <span>Book Inpatient Recovery Program</span>
                    </Link>
                  </div>
                </FadeIn>
              </div>

            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-cream-bg border-t border-brown-dark/8/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-wider text-ayur-green font-semibold">Common Queries</span>
              <h2 className="font-serif text-3xl font-bold text-brown-dark">Facilities FAQ</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-brown-dark/8 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between text-brown-dark hover:text-ayur-green transition-colors"
                  >
                    <span className="font-serif font-bold text-sm sm:text-base flex items-center gap-2">
                      <HelpCircle className="h-4.5 w-4.5 text-ayur-green" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openFaq === idx ? "transform rotate-180" : ""}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 pt-1 border-t border-brown-dark/5">
                      <p className="text-xs sm:text-sm font-light text-brown-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
