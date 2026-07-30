"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
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
  CheckCircle2,
  Calendar
} from "lucide-react";

const facilities = [
  {
    title: "10-Bedded Inpatient Facility",
    description: "Hygienic recovery rooms designed for patients requiring intensive treatment, 24/7 nursing care, and continuous clinical supervision.",
    icon: Home,
  },
  {
    title: "Panchakarma Therapy Suites",
    description: "Equipped with traditional wooden Droni massage beds and bronze Shirodhara vessels, cleaned following medical sanitization protocols.",
    icon: Sparkles,
  },
  {
    title: "Consultation Chambers",
    description: "Private suites for detailed pulse diagnosis (Nadi Pariksha), constitution mapping (Prakriti analysis), and clinical counseling.",
    icon: UserCheck,
  },
  {
    title: "Certified Ayurvedic Pharmacy",
    description: "Fully stocked pharmacy with certified organic herbal formulations, oils, single-herb pills, and tonics.",
    icon: Clipboard,
  },
  {
    title: "Therapeutic Yoga Hall",
    description: "A calming, airy space with natural lighting for group or personalized therapeutic yoga, pranayama, and grounding meditation.",
    icon: Activity,
  },
  {
    title: "Natural Healing Environment",
    description: "Designed with nature-inspired architecture, open ventilation, and green spaces to help reduce patient recovery stress.",
    icon: Leaf,
  },
  {
    title: "Patient Recovery Wards",
    description: "Equipped with specialized hospital bedding, warm water systems, emergency buttons, and custom Ayurvedic diet kitchen support.",
    icon: Bed,
  },
  {
    title: "Wellness Advisory areas",
    description: "Designated spaces for long-term health planning, lifestyle advising, and diet consulting.",
    icon: Compass,
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Banner Hero */}
        <section className="bg-gradient-to-br from-cream-light to-white text-brown-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brown-muted via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ayur-green font-semibold">
              Our Infrastructure
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              Hospital Facilities
            </h1>
            <p className="text-sm sm:text-base font-light text-brown-muted max-w-2xl mx-auto leading-relaxed">
              Explore our clinical facilities built to maintain modern hospital sanitation standards while preserving authentic healing spaces.
            </p>
          </div>
        </section>

        {/* Detailed Grid Section */}
        <section className="py-20 bg-cream-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((fac, idx) => {
                const Icon = fac.icon;
                return (
                  <StaggerItem
                    key={idx}
                    className="bg-white border border-brown-dark/8 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="space-y-4">
                      <div className="p-3 rounded-xl bg-brown-accent/8 text-brown-accent dark:bg-brown-accent/15  shrink-0 w-fit group-hover:bg-brown-accent/10 dark:group-hover:bg-brown-accent/20 transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-brown-dark">
                        {fac.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-light text-brown-dark/75 leading-relaxed">
                        {fac.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Highlight Section: Inpatient Ward Care */}
        <section className="py-20 bg-white border-t border-brown-dark/8/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 relative">
                <FadeIn direction="right">
                  <div className="bg-gradient-to-br from-cream-light to-white text-brown-dark rounded-3xl p-8 shadow-lg space-y-6">
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Clinical Inpatient Ward
                    </h3>
                    <p className="text-sm font-light text-cream-bg/85 leading-relaxed">
                      For chronic disorders, we offer an immersive recovery program where patients stay in our 10-bed facility.
                    </p>
                    <div className="space-y-3 pt-2">
                      {[
                        "Continuous medical checkups by Dr. Geetha Jayapal",
                        "Medically tailored diets prepared daily in our organic kitchen",
                        "Hygienic sanitation & comfortable recovery rooms",
                        "24/7 nursing attention & emergency response"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 text-xs">
                          <CheckCircle2 className="h-4.5 w-4.5 text-brown-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <FadeIn direction="left">
                  <span className="text-xs uppercase tracking-wider text-ayur-green font-semibold">Specialized Care</span>
                  <h2 className="font-serif text-3.5xl font-bold text-brown-dark mt-1">
                    Integrated Healing Environments
                  </h2>
                  <p className="text-base font-light text-brown-dark/90 leading-relaxed mt-4">
                    Our facilities are configured to prevent cross-contamination, ensuring absolute hygiene during Panchakarma therapies like Basti or Virechana. We follow clinical sanitization standard practices and provide same-gender therapists for physical comfort.
                  </p>
                  <p className="text-base font-light text-brown-dark/90 leading-relaxed mt-4">
                    Additionally, our integration of modern physiotherapy and psychological counseling suites allows us to provide physical rehabilitation and stress counseling.
                  </p>
                  
                  <div className="pt-4">
                    <Link
                      href="/appointment"
                      className="inline-flex items-center space-x-2 bg-ayur-green hover:bg-dark-green text-white font-medium px-6 py-3 rounded-full text-sm shadow-md cursor-pointer"
                    >
                      <Calendar className="h-4.5 w-4.5" />
                      <span>Book Inpatient Recovery Program</span>
                    </Link>
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
