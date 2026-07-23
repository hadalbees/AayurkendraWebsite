"use client";

import { 
  Heart, 
  Activity, 
  Leaf, 
  Bed, 
  Utensils, 
  ClipboardList, 
  Compass, 
  ShieldAlert,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "../ui/Motion";
import SectionHeader from "../ui/SectionHeader";

const services = [
  {
    title: "24/7 Medical Supervision",
    description: "Continuous clinical oversight by Dr. Geetha Jayapal and our resident medical team to monitor progress and adjust treatments.",
    icon: ShieldAlert,
  },
  {
    title: "Personalized Treatment Plans",
    description: "Every patient undergoes a detailed Prakriti analysis and Nadi Pariksha to outline a customized detoxification and healing plan.",
    icon: ClipboardList,
  },
  {
    title: "Authentic Ayurvedic Therapies",
    description: "Therapies are executed according to classical texts using organic medicinal oils, herbs, and traditional bronze vessels.",
    icon: Leaf,
  },
  {
    title: "Comfortable Accommodation",
    description: "Restful inpatient wards and private recovery rooms offering a peaceful, hygienic sanctuary for intensive healing stays.",
    icon: Bed,
  },
  {
    title: "Therapeutic Diet",
    description: "Nutritious, organic meals tailored to your specific metabolic state (Agni) to assist in digest-level detox and recovery.",
    icon: Utensils,
  },
  {
    title: "Daily Health Monitoring",
    description: "Morning clinical checkups, vital tracking, and diagnostic mapping to record real-time therapeutic responses.",
    icon: Activity,
  },
  {
    title: "Healing Environment",
    description: "A stress-free space with positive architectural ventilation, calming greenery, and nature-connected resting zones.",
    icon: Compass,
  },
  {
    title: "Compassionate Care",
    description: "A highly dedicated nursing and therapist team committed to support you with professional, comforting care at every step.",
    icon: Heart,
  },
];

export default function InPatientServices() {
  return (
    <section id="inpatient-services" className="section-padding bg-cream-bg relative border-t border-brown-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          label="Residential Care"
          title="Premium In-Patient Services"
          description="We offer an immersive recovery program where patients stay in our speciality facility for intensive treatments, healing nutrition, and continuous clinical oversight."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <StaggerItem
                key={idx}
                className="bg-white border border-brown-dark/8 rounded-3xl p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon wrapper */}
                  <div className="p-3.5 rounded-2xl bg-ayur-green/8 text-ayur-green shrink-0 w-fit group-hover:bg-ayur-green group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-brown-dark">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-brown-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.3} className="text-center mt-12">
          <Link
            href="/appointment?type=inpatient"
            className="inline-flex items-center space-x-2 bg-ayur-green hover:bg-dark-green text-white font-medium px-6 py-3.5 rounded-full text-sm shadow-md hover:shadow-lg transition-all"
          >
            <Calendar className="h-4.5 w-4.5" />
            <span>Book In-Patient Recovery Stay</span>
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
