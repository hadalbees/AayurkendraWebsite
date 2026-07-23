"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { Image as ImageIcon, Video, Layers, Users, Sparkles, Stethoscope, Play, X } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Link from "next/link";

type GalleryCategory = "all" | "treatments" | "infrastructure" | "doctor-activities" | "events" | "videos";

const galleryItems = [
  {
    title: "Hospital Main Entrance & Greenery",
    category: "infrastructure",
    type: "photo",
    description: "Hospital main entrance and calming garden landscaping supporting stress-free recovery.",
  },
  {
    title: "Traditional Panchakarma Treatment Room",
    category: "treatments",
    type: "photo",
    description: "Hygienic treatment suite equipped with a classical wooden droni table and steam chamber.",
  },
  {
    title: "Clinical Consultation Room Setup",
    category: "infrastructure",
    type: "photo",
    description: "Private chamber for pulse analysis, body constitution mapping, and patient counseling.",
  },
  {
    title: "Ayurvedic Pharmacy Dispensing",
    category: "infrastructure",
    type: "photo",
    description: "dispensing bay stocked with certified organic herbal formulations and medicated oils.",
  },
  {
    title: "Free Medical Wellness Camp",
    category: "doctor-activities",
    type: "photo",
    description: "Dr. Geetha Jayapal consulting patients at a rural health awareness camp.",
  },
  {
    title: "Clinical Mentorship & Training Session",
    category: "doctor-activities",
    type: "photo",
    description: "Dr. Geetha Jayapal teaching junior Ayurvedic physicians and therapists clinical protocols.",
  },
  {
    title: "Women's Health & PCOS Awareness Seminar",
    category: "events",
    type: "photo",
    description: "Community health event discussing Ayurvedic solutions for hormonal wellness.",
  },
  {
    title: "Patient Awareness and Yoga Camp",
    category: "events",
    type: "photo",
    description: "Group therapeutic breathing and yoga session organized for inpatient groups.",
  },
  {
    title: "Dr. Geetha Jayapal Founder Reel",
    category: "videos",
    type: "video",
    description: "Message from our founder discussing clinical methodology and Ayurvedic heritage.",
    videoUrl: "/videos/founder.mp4"
  },
  {
    title: "Shirodhara Therapy Process Demo",
    category: "videos",
    type: "video",
    description: "Demonstration of pouring medicated oils onto the third eye region to soothe the nervous system.",
    videoUrl: "/videos/founder.mp4"
  },
  {
    title: "Panchakarma Daily Routine Reel",
    category: "videos",
    type: "video",
    description: "Short highlight reel showcasing inpatient daily routine and wellness care.",
    videoUrl: "/videos/founder.mp4"
  }
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>("all");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredItems = activeTab === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  // Gallery Schema Markup
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Aayur Kendra Hospital Gallery",
    "description": "Visual records of our Ayurvedic treatment suites, inpatient infrastructure, healthcare events, and founder message videos.",
    "url": "https://aayurkendra.com/gallery"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Banner Hero */}
        <section className="bg-gradient-to-br from-cream-light to-white text-brown-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brown-muted via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-xs uppercase tracking-wider text-brown-muted mb-2">
              <Link href="/" className="hover:text-ayur-green transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brown-dark font-medium">Gallery</span>
            </nav>

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
                { id: "treatments", label: "Treatment Rooms", icon: Sparkles },
                { id: "infrastructure", label: "Hospital Photos", icon: ImageIcon },
                { id: "doctor-activities", label: "Doctor Activities", icon: Stethoscope },
                { id: "events", label: "Events", icon: Users },
                { id: "videos", label: "Videos & Reels", icon: Video },
              ].map((btn) => {
                const Icon = btn.icon;
                return (
                  <button
                    key={btn.id}
                    onClick={() => setActiveTab(btn.id as GalleryCategory)}
                    className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border cursor-pointer transition-all duration-200 ${
                      activeTab === btn.id
                        ? "bg-ayur-green border-transparent text-white shadow-md"
                        : "bg-white border-brown-dark/8 text-brown-muted hover:bg-cream-bg hover:text-ayur-green"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{btn.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Gallery Grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div
                    onClick={() => {
                      if (item.type === "video" && item.videoUrl) {
                        setActiveVideo(item.videoUrl);
                      }
                    }}
                    className={`bg-white border border-brown-dark/8 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between h-full ${
                      item.type === "video" ? "cursor-pointer" : ""
                    }`}
                  >
                    <div className="relative">
                      <PlaceholderImage
                        variant="gallery"
                        icon={item.type === "video" ? Video : ImageIcon}
                        label={item.type === "video" ? "Play Video" : "View Photo"}
                        className="aspect-[4/3] w-full"
                      />
                      
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors z-20">
                          <span className="h-12 w-12 rounded-full bg-white/95 text-ayur-green flex items-center justify-center shadow-lg">
                            <Play className="h-5 w-5 fill-ayur-green ml-0.5" />
                          </span>
                        </div>
                      )}

                      <span className="absolute top-4 left-4 z-10 bg-white/85 backdrop-blur-sm border border-brown-dark/8 px-2.5 py-1 rounded-full text-[9px] uppercase font-bold tracking-wider text-ayur-green">
                        {item.category.replace(/-/g, " ")}
                      </span>
                    </div>

                    {/* Caption */}
                    <div className="p-5 space-y-1 bg-white relative z-10">
                      <h3 className="font-serif text-base font-bold text-brown-dark group-hover:text-ayur-green transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-light text-brown-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

          </div>
        </section>
      </main>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden relative shadow-2xl">
            <video
              src={activeVideo}
              className="absolute inset-0 w-full h-full object-contain"
              controls
              autoPlay
            />
          </div>
        </div>
      )}

      <Footer />
      <FloatingWidgets />
    </>
  );
}
