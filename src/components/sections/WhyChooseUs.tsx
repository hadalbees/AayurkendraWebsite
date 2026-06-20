"use client";

import { 
  Award, 
  Leaf, 
  UserCheck, 
  Heart, 
  ShieldAlert, 
  Users, 
  Building, 
  Sparkles, 
  Activity, 
  Home, 
  HeartHandshake, 
  TrendingUp 
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "../ui/Motion";

const features = [
  {
    title: "25+ Years Expertise",
    description: "Led by Dr. Geetha Jayapal, with 25+ years of clinical excellence in South India.",
    icon: Award,
  },
  {
    title: "Authentic Treatments",
    description: "Traditional therapies following the original Ashtanga Hridaya texts.",
    icon: Leaf,
  },
  {
    title: "Experienced Doctors",
    description: "Highly qualified medical consultants specializing in multiple disciplines.",
    icon: UserCheck,
  },
  {
    title: "Personalized Care Plans",
    description: "Therapies and dietary modifications customized for your unique constitution.",
    icon: Heart,
  },
  {
    title: "Integrated Healthcare",
    description: "Combining Ayurveda, Yoga, Naturopathy, Physiotherapy, and Psychotherapy.",
    icon: Activity,
  },
  {
    title: "Patient-Centered Approach",
    description: "Focused on compassionate listening and treating the patient, not just the disease.",
    icon: Users,
  },
  {
    title: "Modern Infrastructure",
    description: "State-of-the-art diagnostic suites, pharmacy, and therapy rooms.",
    icon: Building,
  },
  {
    title: "Hygienic Facilities",
    description: "Strict sanitation protocols maintaining the highest clinical hygiene standards.",
    icon: Sparkles,
  },
  {
    title: "Natural Healing Methods",
    description: "Using pure, organic herbs, medicated oils, and mineral-rich elements.",
    icon: ShieldAlert,
  },
  {
    title: "Inpatient Care Facility",
    description: "A comfortable 10-bed inpatient ward for patients requiring intensive care.",
    icon: Home,
  },
  {
    title: "Compassionate Service",
    description: "Warm, dedicated therapy staff ensuring a healing environment.",
    icon: HeartHandshake,
  },
  {
    title: "Long-Term Wellness Focus",
    description: "Emphasis on preventive care, Dinacharya, and lifestyle modifications.",
    icon: TrendingUp,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-theme-card relative overflow-hidden border-t border-theme-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <FadeIn direction="down">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-theme-accent font-bold">
              Why Choose Us
            </span>
            <h2 className="font-serif text-3.5xl sm:text-4.5xl font-bold text-brown-accent dark:text-cream-bg mt-1">
              Experience the Aayur Kendra Difference
            </h2>
            <p className="text-sm sm:text-base font-light text-theme-fg/75 mt-3 leading-relaxed">
              We combine traditional Vedic healthcare principles with modern clinical and inpatient infrastructure to deliver the highest quality Ayurvedic medical treatments.
            </p>
          </FadeIn>
        </div>

        {/* Feature Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <StaggerItem
                key={idx}
                className="bg-theme-bg/40 border border-theme-border/70 hover:border-brown-accent/25 dark:hover:border-brown-accent/30 rounded-2xl p-6 hover:shadow-md transition-all duration-300 flex flex-col space-y-4 group"
              >
                {/* Icon wrapper */}
                <div className="p-3 rounded-xl bg-brown-accent/8 text-brown-accent dark:bg-brown-accent/15 dark:text-cream-bg shrink-0 w-fit group-hover:bg-brown-accent/10 dark:group-hover:bg-brown-accent/20 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                
                {/* Text */}
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-theme-fg">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-light text-theme-fg/75 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
