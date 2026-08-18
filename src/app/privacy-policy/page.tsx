"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { FadeIn } from "@/components/ui/Motion";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-28 pb-16 bg-theme-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-theme-card border border-theme-border rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
          <FadeIn direction="down">
            <h1 className="font-serif text-3.5xl font-bold text-brown-accent dark:text-cream-bg mb-2">Privacy Policy</h1>
            <p className="text-xs text-theme-fg/60 font-light">Last Updated: June 2026</p>
          </FadeIn>
          
          <div className="space-y-4 text-sm font-light text-theme-fg/90 leading-relaxed">
            <p>
              Aayur Kendra Ayurveda Speciality Hospital is committed to protecting the privacy of our patients and visitors. This Privacy Policy details how we collect, store, and safeguard your medical and contact information.
            </p>
            <h3 className="font-serif text-lg font-bold text-theme-fg pt-2">1. Information We Collect</h3>
            <p>
              We collect personal contact details (Name, Phone Number, Email) and health concern descriptions when you submit consultation inquiries or schedule appointments. When the Hospital Management System (HMS) is integrated, health data will be encrypted in accordance with medical EMR confidentiality standards.
            </p>
            <h3 className="font-serif text-lg font-bold text-theme-fg pt-2">2. How We Use Your Data</h3>
            <p>
              We use your information strictly to schedule appointments, consult with medical advisors, configure diet/lifestyle care charts, and contact you for clinical follow-ups. We do not sell or share patient records with external advertisers.
            </p>
            <h3 className="font-serif text-lg font-bold text-theme-fg pt-2">3. Legal Disclaimers & Compliance</h3>
            <p>
              Our treatments and therapies are executed by qualified practitioners holding B.A.M.S degrees. All patient registration databases are secure. If you have any inquiries, please contact our help desk at aayurhealthclinic@gmail.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
