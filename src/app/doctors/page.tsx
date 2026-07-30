"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { FadeIn } from "@/components/ui/Motion";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  MapPin,
  Calendar,
  CheckCircle,
  Briefcase,
  Star,
  Users
} from "lucide-react";

export default function DoctorsPage() {
  // JSON-LD Schema for Dr. Geetha Jayapal
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Geetha Jayapal",
    "image": "https://aayurkendra.com/dr-geetha.jpg",
    "medicalSpecialty": "Ayurvedic Medicine",
    "telephone": "+91 91501 12757",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.23, Thally Road, Opposite Chenny's Mahal",
      "addressLocality": "Hosur",
      "postalCode": "635109",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "B.A.M.S"
    },
    "knowsAbout": ["Ayurveda", "Panchakarma", "Women's Wellness", "Lifestyle Diseases"],
    "memberOf": {
      "@type": "Hospital",
      "name": "Aayur Kendra Ayurveda Speciality Hospital"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Banner Hero */}
        <section className="bg-gradient-to-br from-cream-light to-white text-brown-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brown-muted via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ayur-green font-semibold">
              Our Medical Team
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              Clinical Experts
            </h1>
            <p className="text-sm sm:text-base font-light text-brown-muted max-w-2xl mx-auto leading-relaxed">
              Consult with senior medical practitioners combining over 25 years of clinical wisdom with integrated modern therapies.
            </p>
          </div>
        </section>

        {/* Doctor Details (Prominently featuring Dr. Geetha) */}
        <section className="py-20 bg-cream-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Doctor Visual profile illustration */}
              <div className="lg:col-span-4 space-y-6">
                <FadeIn direction="right">
                  <div className="bg-white border border-brown-dark/8 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col items-center text-center space-y-6 relative overflow-hidden">
                    {/* Abstract circular avatar frame representation */}
                    <div className="h-44 w-44 rounded-full bg-gradient-to-br from-brown-accent to-brown-dark p-1 flex items-center justify-center shadow-lg relative">
                      <div className="h-full w-full rounded-full bg-white flex flex-col items-center justify-center text-brown-dark font-serif text-3xl font-bold border-2 border-theme-bg">
                        Dr. GJ
                      </div>
                      <div className="absolute bottom-1 right-2 h-7 w-7 rounded-full bg-ayur-green border border-white flex items-center justify-center text-white" title="Verified Professional">
                        ✓
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h2 className="font-serif text-2xl font-bold text-brown-dark">
                        Dr. Geetha Jayapal
                      </h2>
                      <p className="text-xs font-bold uppercase tracking-wider text-ayur-green">
                        Founder & Chief Consultant
                      </p>
                      <p className="text-xs font-light text-brown-dark/75">
                        Speciality: Panchakarma, Women's Wellness & Lifestyle Medicine
                      </p>
                    </div>

                    {/* Medical Credentials Strip */}
                    <div className="w-full border-t border-brown-dark/8 pt-4 space-y-3.5 text-xs text-left">
                      <div className="flex items-center space-x-2.5">
                        <GraduationCap className="h-4.5 w-4.5 text-ayur-green shrink-0" />
                        <span>B.A.M.S (Bachelor of Ayurvedic Medicine & Surgery)</span>
                      </div>
                      <div className="flex items-center space-x-2.5">
                        <Award className="h-4.5 w-4.5 text-ayur-green shrink-0" />
                        <span>25+ Years of Clinical Rejuvenation</span>
                      </div>
                      <div className="flex items-center space-x-2.5">
                        <MapPin className="h-4.5 w-4.5 text-ayur-green shrink-0" />
                        <span>Hosur Hospital Clinic Wing</span>
                      </div>
                    </div>

                    <Link
                      href="/appointment"
                      className="w-full bg-ayur-green hover:bg-dark-green text-white font-medium py-3 rounded-full text-sm flex items-center justify-center space-x-2 transition-all hover:shadow-md cursor-pointer"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Book Direct Consult</span>
                    </Link>
                  </div>
                </FadeIn>
              </div>

              {/* Doctor Professional Bio / Narrative */}
              <div className="lg:col-span-8 space-y-8">
                <FadeIn direction="left" className="space-y-4">
                  <h3 className="font-serif text-2.5xl font-bold text-brown-dark">
                    Professional Profile
                  </h3>
                  <p className="text-base font-light text-brown-dark/90 leading-relaxed">
                    Dr. Geetha Jayapal graduated with a B.A.M.S degree, dedicating her clinical life to standardizing Ayurvedic treatments. She is a highly respected member of the South Indian Ayurvedic medical community, recognized for her success in treating chronic gynecological disorders and metabolic lifestyle diseases.
                  </p>
                  <p className="text-base font-light text-brown-dark/90 leading-relaxed">
                    For 25+ years, she has personally diagnosed and treated over 10,000 patients, offering a root-cause purification path that integrates traditional Panchakarma, specialized diet regimes, and custom-blended herbal formulations.
                  </p>
                </FadeIn>

                {/* Achievements and awards list */}
                <FadeIn direction="left" delay={0.2} className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-brown-dark">
                    Achievements & Recognition
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Recognized for Healthcare Excellence and Women Entrepreneurship in Krishnagiri District.",
                      "Spearheaded pioneering clinical research in Ayurvedic solutions for PCOS & Endometriosis.",
                      "Organized 50+ free health awareness and wellness screening camps in Tamil Nadu.",
                      "Certified practitioner in Kshara Sutra ano-rectal surgical ligation.",
                      "Member of State Board of Ayurvedic Practitioners.",
                      "Adviser on classical herb preservation and organic pharmaceutical standards."
                    ].map((award, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-sm bg-white border border-brown-dark/8/70 p-4 rounded-2xl shadow-sm">
                        <CheckCircle className="h-5 w-5 text-brown-dark shrink-0 mt-0.5" />
                        <span className="font-light text-brown-dark/90 leading-relaxed">{award}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>

                {/* Future Doctor expansion grid placeholder */}
                <FadeIn direction="left" delay={0.4} className="border-t border-brown-dark/8 pt-8 space-y-6">
                  <div className="bg-white border border-brown-dark/8 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:justify-between gap-6">
                    <div className="space-y-2">
                      <h4 className="font-serif text-lg font-bold text-brown-dark flex items-center space-x-2">
                        <Users className="h-5 w-5 text-ayur-green" />
                        <span>Clinical Expansion In Progress</span>
                      </h4>
                      <p className="text-xs font-light text-brown-dark/75 leading-relaxed max-w-xl">
                        Aayur Kendra is currently onboarding secondary specialist consultants in Ayurvedic Ophthalmology (Shalakya Tantra), Yoga therapists, and clinical physical rehabilitation specialists to expand patient care.
                      </p>
                    </div>

                    <span className="shrink-0 inline-block bg-brown-accent/8 text-brown-accent text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl border border-brown-accent/20">
                      Join Our Team
                    </span>
                  </div>
                </FadeIn>

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
