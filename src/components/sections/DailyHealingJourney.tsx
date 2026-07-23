"use client";

import { 
  Sun, 
  Flame, 
  Utensils, 
  Activity, 
  ClipboardList, 
  Compass, 
  Moon, 
  Clock, 
  Heart 
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "../ui/Motion";
import SectionHeader from "../ui/SectionHeader";

const dailySteps = [
  {
    time: "06:30 AM",
    title: "Morning Assessment",
    description: "Vital signs evaluation, traditional pulse diagnosis (Nadi Pariksha), and warm herbal decoctions to spark digestion.",
    icon: Sun,
  },
  {
    time: "07:00 AM",
    title: "Yoga & Breathing",
    description: "Guided restorative yoga postures and pranayama (breath-work) to optimize systemic oxygenation and clear channels.",
    icon: Heart,
  },
  {
    time: "08:30 AM",
    title: "Healthy Breakfast",
    description: "Warm, light Ayurvedic organic food custom-tailored to balance your specific doshas.",
    icon: Utensils,
  },
  {
    time: "09:30 AM",
    title: "Therapy Sessions",
    description: "Your primary clinical therapies (Abhyangam, Shirodhara, Kizhi, or Basti) executed by certified same-gender therapists.",
    icon: Flame,
  },
  {
    time: "01:00 PM",
    title: "Lunch & Rest",
    description: "Hygienic, freshly prepared Ayurvedic lunch followed by a structured period of quiet digestion and rest.",
    icon: Utensils,
  },
  {
    time: "03:30 PM",
    title: "Doctor Review",
    description: "One-on-one medical consultation with Dr. Geetha Jayapal to analyze session responses and calibrate medicines.",
    icon: ClipboardList,
  },
  {
    time: "05:00 PM",
    title: "Evening Wellness",
    description: "Light walks in our nature-filled zones, soothing meditation, and secondary herbal medicines.",
    icon: Compass,
  },
  {
    time: "07:00 PM",
    title: "Dinner",
    description: "Early, light dinner focusing on warm, digest-easy compounds to facilitate metabolic recovery overnight.",
    icon: Utensils,
  },
  {
    time: "09:00 PM",
    title: "Night Care",
    description: "Sleep-inducing herbal infusions, nursing rounds, and absolute quiet hours for deep neurological repair.",
    icon: Moon,
  },
];

export default function DailyHealingJourney() {
  return (
    <section id="daily-journey" className="section-padding bg-white relative border-t border-brown-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          label="Inpatient Routine"
          title="Daily Healing Journey"
          description="A typical day in our residential program, designed to align your physical rhythms with nature's clock for absolute rejuvenation."
        />

        <div className="relative max-w-5xl mx-auto mt-12">
          {/* Vertical Line on Desktop */}
          <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-ayur-green/45 via-brown-dark/10 to-transparent -translate-x-1/2 hidden lg:block" />
          {/* Vertical Line on Mobile */}
          <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-ayur-green/45 via-brown-dark/10 to-transparent lg:hidden" />

          <div className="space-y-12">
            {dailySteps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex flex-col lg:flex-row items-start lg:justify-between group">
                  {/* timeline dot */}
                  <div className="absolute left-8 lg:left-1/2 top-1.5 -translate-x-1/2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white border-2 border-ayur-green shadow-sm">
                    <Clock className="h-3.5 w-3.5 text-ayur-green" />
                  </div>

                  {/* Left Column (shows on left for even, empty for odd on desktop) */}
                  <div className={`w-full lg:w-[45%] pl-16 lg:pl-0 ${isEven ? "lg:text-right" : "lg:order-2"}`}>
                    <FadeIn direction={isEven ? "right" : "left"}>
                      <div className="premium-card p-6 hover:-translate-y-0.5 transition-all duration-300">
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? "lg:justify-end" : "justify-start"}`}>
                          <div className="p-2 rounded-xl bg-ayur-green/8 text-ayur-green">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-ayur-green uppercase tracking-wider block">
                              {step.time}
                            </span>
                            <h3 className="font-serif text-lg font-bold text-brown-dark">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm font-light text-brown-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </FadeIn>
                  </div>

                  {/* Right Column Spacer (desktop only) */}
                  <div className="w-[45%] hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
