"use client";

import { Check } from "lucide-react";
import { FadeIn } from "../ui/Motion";
import SectionHeader from "../ui/SectionHeader";

const steps = [
  { step: "01", title: "Book Consultation", description: "Schedule online or call us. Share your health concerns and medical history." },
  { step: "02", title: "Nadi Pariksha & Assessment", description: "Detailed pulse diagnosis, Prakriti analysis, and personalized treatment planning." },
  { step: "03", title: "Customized Treatment", description: "Receive therapies, herbal medicines, and diet guidance tailored to your constitution." },
  { step: "04", title: "Healing & Recovery", description: "Undergo Panchakarma or outpatient therapies with continuous medical supervision." },
  { step: "05", title: "Follow-Up & Wellness", description: "Post-treatment care, lifestyle coaching, and preventive wellness for long-term health." },
];

export default function JourneyTimeline() {
  return (
    <section id="journey" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Your Healing Path"
          title="Patient Journey at Aayur Kendra"
          description="A clear, guided process from your first consultation to lasting wellness."
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-ayur-green/30 via-brown-dark/10 to-transparent" />

          <div className="space-y-6">
            {steps.map((item, idx) => (
              <FadeIn key={item.step} delay={idx * 0.08} direction="right">
                <div className="flex gap-6 sm:gap-8 items-start">
                  <span className="relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-white border-2 border-ayur-green/20 text-ayur-green font-serif font-semibold text-sm shadow-sm">
                    {item.step}
                  </span>
                  <div className="premium-card p-5 sm:p-6 flex-grow hover:-translate-y-0.5">
                    <div className="flex items-center gap-2 mb-2">
                      <Check className="h-4 w-4 text-ayur-green" />
                      <h3 className="font-serif text-lg font-semibold text-brown-dark">{item.title}</h3>
                    </div>
                    <p className="text-sm text-brown-muted font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
