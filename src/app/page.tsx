"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import AboutDoctor from "@/components/sections/AboutDoctor";
import TherapiesPreview from "@/components/sections/TherapiesPreview";
import TreatmentPackages from "@/components/sections/TreatmentPackages";
import BenefitsAyurveda from "@/components/sections/BenefitsAyurveda";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import VideoTestimonials from "@/components/sections/VideoTestimonials";
import GoogleReviews from "@/components/sections/GoogleReviews";
import FAQSection from "@/components/sections/FAQSection";
import AppointmentForm from "@/components/sections/AppointmentForm";
import LocationMap from "@/components/sections/LocationMap";
import SectionHeader from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/Motion";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": ["Hospital", "MedicalClinic"],
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description:
      "Premium Ayurveda healthcare in Hosur — Panchakarma, personalized treatments, and integrated wellness under Dr. Geetha Jayapal.",
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.title,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "250",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I book an appointment at Aayur Kendra?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Book online via our appointment form, call +91 91501 12757, or visit the hospital directly.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main>
        <Hero onWatchVideo={() => setIsVideoOpen(true)} />
        <Stats />
        <AboutDoctor isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} />
        <TherapiesPreview />
        <TreatmentPackages />
        <BenefitsAyurveda />
        <JourneyTimeline />
        <VideoTestimonials />
        <GoogleReviews />
        <FAQSection />

        <section id="book-appointment" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Book Consultation"
              title="Start Your Healing Journey"
              description="Fill in your details and our team will confirm your appointment within 24 hours."
            />
            <FadeIn delay={0.15}>
              <div className="max-w-3xl mx-auto premium-card p-6 sm:p-10">
                <AppointmentForm />
              </div>
            </FadeIn>
          </div>
        </section>

        <LocationMap />
      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
