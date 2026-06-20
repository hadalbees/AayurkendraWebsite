"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { Image as ImageIcon, Video, Layers, Users, Sparkles, Stethoscope } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

type GalleryCategory = "all" | "treatments" | "infrastructure" | "events" | "doctor-activities" | "before-after" | "videos";

const galleryItems = [
  {
    title: "Panchakarma Droni Setup",
    category: "treatments",
    type: "photo",
    description: "Traditional wooden therapy bed used for Abhyangam and Kizhi.",
  },
  {
    title: "Shirodhara Flow Demonstration",
    category: "videos",
    type: "video",
    description: "Warm herbal oil poured in a continuous stream over the forehead.",
  },
  {
    title: "10-Bed Inpatient Ward",
    category: "infrastructure",
    type: "photo",
    description: "Clean, hygienic recovery ward with medical bedding.",
  },
  {
    title: "Herbal Pharmacy Dispensing",
    category: "infrastructure",
    type: "photo",
    description: "Authentic formulations kept under climate-controlled conditions.",
  },
  {
    title: "Free Medical Wellness Camp",
    category: "doctor-activities",
    type: "photo",
    description: "Dr. Geetha Jayapal consulting patients at a rural health camp.",
  },
  {
    title: "Clinical Training Session",
    category: "doctor-activities",
    type: "photo",
    description: "Dr. Geetha Jayapal mentoring junior Ayurvedic practitioners.",
  },
  {
    title: "Women's Health Seminar",
    category: "events",
    type: "photo",
    description: "Ayurveda awareness session on PCOS and lifestyle wellness.",
  },
  {
    title: "Skin Rejuvenation Treatment",
    category: "before-after",
    type: "photo",
    description: "Before/After treatment progress of chronic facial melasma skin.",
  },
  {
    title: "Hair Loss (Alopecia) Progression",
    category: "before-after",
    type: "photo",
    description: "Follicular regeneration before and after Keshya treatments.",
  },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>("all");

  const filteredItems = activeTab === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Banner Hero */}
        <section className="bg-gradient-to-br from-cream-light to-white text-brown-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brown-muted via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ayur-green font-semibold">
              Visual Showcase
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              Hospital Gallery
            </h1>
            <p className="text-sm sm:text-base font-light text-brown-muted max-w-2xl mx-auto leading-relaxed">
              Browse through visual records of our clinical therapies, inpatient infrastructure, healthcare events, and patient recovery journeys.
            </p>
          </div>
        </section>

        {/* Filter & Gallery Grid */}
        <section className="py-20 bg-cream-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 border-b border-brown-dark/8 pb-6">
              {[
                { id: "all", label: "All", icon: Layers },
                { id: "treatments", label: "Treatments", icon: Sparkles },
                { id: "infrastructure", label: "Infrastructure", icon: ImageIcon },
                { id: "doctor-activities", label: "Doctor Activities", icon: Stethoscope },
                { id: "events", label: "Events", icon: Users },
                { id: "before-after", label: "Before / After", icon: ImageIcon },
                { id: "videos", label: "Videos", icon: Video },
              ].map((btn) => {
                const Icon = btn.icon;
                return (
                  <button
                    key={btn.id}
                    onClick={() => setActiveTab(btn.id as GalleryCategory)}
                    className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border cursor-pointer transition-all duration-200 ${
                      activeTab === btn.id
                        ? "bg-ayur-green border-transparent text-white shadow-md"
                        : "bg-white border-brown-dark/8 text-brown-dark/75 hover:bg-cream-bg hover:text-ayur-green"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{btn.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Gallery Grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredItems.map((item, idx) => (
                <StaggerItem
                  key={idx}
                  className="bg-white border border-brown-dark/8 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
                >
                  <div className="relative">
                    <PlaceholderImage
                      variant="gallery"
                      icon={item.type === "video" ? Video : ImageIcon}
                      label={item.type === "video" ? "Video" : "Photo"}
                      className="aspect-[4/3] w-full"
                    />
                    <span className="absolute top-4 left-4 z-10 bg-cream-bg/85 backdrop-blur-sm border border-brown-dark/8 px-2.5 py-1 rounded-full text-[9px] uppercase font-bold tracking-wider text-ayur-green">
                      {item.category.replace(/-/g, " ")}
                    </span>
                  </div>

                  {/* Caption */}
                  <div className="p-5 space-y-1 bg-white">
                    <h3 className="font-serif text-base font-bold text-brown-dark group-hover:text-ayur-green  transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-light text-brown-dark/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

          </div>
        </section>
      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
