"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { FadeIn } from "@/components/ui/Motion";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-28 pb-16 bg-theme-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-theme-card border border-theme-border rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
          <FadeIn direction="down">
            <h1 className="font-serif text-3.5xl font-bold text-brown-accent dark:text-cream-bg mb-2">Terms & Conditions</h1>
            <p className="text-xs text-theme-fg/60 font-light">Last Updated: June 2026</p>
          </FadeIn>
          
          <div className="space-y-4 text-sm font-light text-theme-fg/90 leading-relaxed">
            <p>
              Welcome to the digital portal of Aayur Kendra Ayurveda Speciality Hospital. By accessing this site or registering appointment inquiries, you agree to comply with the following terms.
            </p>
            <h3 className="font-serif text-lg font-bold text-theme-fg pt-2">1. Consultation Scheduling</h3>
            <p>
              Submitting an appointment form registers your interest in a specific therapy or consultation. An appointment is only confirmed once our reception desk contacts you and locks in a time slot.
            </p>
            <h3 className="font-serif text-lg font-bold text-theme-fg pt-2">2. Medical Disclaimer</h3>
            <p>
              The information provided on this website—including specialities overview, therapy procedure summaries, and blog posts—is for educational purposes. It is not a substitute for direct diagnostic assessment by a qualified physician. Always consult Dr. Geetha Jayapal or a certified medical practitioner regarding your personal medical symptoms.
            </p>
            <h3 className="font-serif text-lg font-bold text-theme-fg pt-2">3. Hospital Facility & Conduct</h3>
            <p>
              Patients undergoing inpatient treatments in our 10-bed ward are expected to comply with hospital guidelines, dietary routines prepared by the clinical kitchen, and therapeutic schedules.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
