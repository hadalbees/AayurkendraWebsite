"use client";

import { Leaf, Heart, Shield, Sparkles, Brain, Activity } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../ui/Motion";
import SectionHeader from "../ui/SectionHeader";
import { LeafAccent } from "../ui/LeafPattern";

const benefits = [
  {
    title: "Root Cause Healing",
    description: "Addresses the underlying imbalance rather than suppressing symptoms — for lasting wellness.",
    icon: Heart,
  },
  {
    title: "100% Natural Therapies",
    description: "Pure herbs, medicated oils, and time-tested protocols without harsh chemicals.",
    icon: Leaf,
  },
  {
    title: "Personalized for You",
    description: "Every plan is tailored to your Prakriti, health history, and lifestyle through Nadi Pariksha.",
    icon: Sparkles,
  },
  {
    title: "Preventive Focus",
    description: "Builds immunity and resilience through Dinacharya, diet, and seasonal routines.",
    icon: Shield,
  },
  {
    title: "Mind-Body Balance",
    description: "Integrates yoga, meditation, and stress management for complete mental wellness.",
    icon: Brain,
  },
  {
    title: "Integrated Healthcare",
    description: "Combines Ayurveda with physiotherapy, naturopathy, and modern diagnostics when needed.",
    icon: Activity,
  },
];

export default function BenefitsAyurveda() {
  return (
    <section id="benefits" className="section-padding bg-cream-bg relative overflow-hidden">
      <LeafAccent className="bottom-0 left-0 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Why Ayurveda"
          title="Benefits of Authentic Ayurvedic Care"
          description="A 5,000-year science of healing that treats the whole person — body, mind, and spirit."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <StaggerItem key={benefit.title}>
                <div className="premium-card p-7 h-full group hover:-translate-y-0.5">
                  <div className="inline-flex p-3 rounded-2xl bg-cream-bg text-ayur-green mb-5 group-hover:bg-ayur-green group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-brown-dark mb-2">{benefit.title}</h3>
                  <p className="text-sm text-brown-muted font-light leading-relaxed">{benefit.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
