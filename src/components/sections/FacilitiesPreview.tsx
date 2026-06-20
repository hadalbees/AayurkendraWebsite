"use client";

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
  ArrowRight,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "../ui/Motion";

const facilities = [
  {
    title: "10-Bedded Inpatient Facility",
    description: "Clean, restful, and supportive inpatient ward for patients undergoing intensive Panchakarma or rehabilitation.",
    icon: Home,
  },
  {
    title: "Panchakarma Therapy Rooms",
    description: "Equipped with traditional wooden Droni (massage tables) and bronze Shirodhara vessels, cleaned following medical hygiene standards.",
    icon: Sparkles,
  },
  {
    title: "Consultation Suites",
    description: "Private spaces for detailed Prakriti analysis, pulse diagnosis, and lifestyle mapping.",
    icon: UserCheck,
  },
  {
    title: "Ayurvedic Pharmacy",
    description: "Stocked with fresh, certified, authentic herbal tablets, oils, decoctions, and single-herb supplements.",
    icon: Clipboard,
  },
  {
    title: "Yoga Hall",
    description: "A peaceful space with natural lighting for guided therapeutic yoga, pranayama, and healing meditation.",
    icon: Activity,
  },
  {
    title: "Natural Healing Environment",
    description: "Surrounded by calming greenery, natural air flows, and positive vibes to help reduce healing stress.",
    icon: Leaf,
  },
  {
    title: "Patient Recovery Rooms",
    description: "Hygienic recovery spaces with continuous nursing care, warm water, and customized healing foods.",
    icon: Bed,
  },
  {
    title: "Wellness Consultation Areas",
    description: "Spaces for long-term health coaching, diet charting, and lifestyle planning.",
    icon: Compass,
  },
];

export default function FacilitiesPreview() {
  return (
    <section className="py-20 bg-theme-bg relative overflow-hidden border-t border-theme-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <FadeIn direction="down">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-theme-accent font-bold">
              Our Infrastructure
            </span>
            <h2 className="font-serif text-3.5xl sm:text-4.5xl font-bold text-brown-accent dark:text-cream-bg mt-1">
              Hospital Facilities
            </h2>
            <p className="text-sm sm:text-base font-light text-theme-fg/75 mt-3 leading-relaxed">
              We provide professional medical facilities that combine ancient healing traditions with modern sanitary and inpatient hospital infrastructure.
            </p>
          </FadeIn>
        </div>

        {/* Facilities Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, idx) => {
            const Icon = facility.icon;
            return (
              <StaggerItem
                key={idx}
                className="bg-theme-card border border-theme-border rounded-2xl p-6 hover:shadow-md transition-all duration-300 flex flex-col space-y-4 group"
              >
                {/* Icon wrapper */}
                <div className="p-3 rounded-xl bg-brown-accent/8 text-brown-accent dark:bg-brown-accent/15 dark:text-cream-bg shrink-0 w-fit group-hover:bg-brown-accent/10 dark:group-hover:bg-brown-accent/20 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                
                {/* Text */}
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-theme-fg">
                    {facility.title}
                  </h3>
                  <p className="text-xs font-light text-theme-fg/75 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.3} className="text-center mt-12">
          <Link
            href="/facilities"
            className="inline-flex items-center space-x-2 bg-primary-green text-white font-medium px-6 py-3 rounded-full text-sm hover:shadow-lg transition-all"
          >
            <span>View All Facilities</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
