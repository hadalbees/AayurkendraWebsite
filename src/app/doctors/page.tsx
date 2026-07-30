"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import Link from "next/link";
import Image from "next/image";
import { doctorsData } from "@/data/doctors";
import TeamSection from "@/components/sections/TeamSection";
import { 
  Award, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  CheckCircle,
  Users,
  ShieldCheck,
  Sparkles,
  EyeOff,
  Briefcase,
  HeartHandshake,
  Stethoscope,
  Leaf,
  Activity,
  Heart,
  Play,
  X
} from "lucide-react";
import { useState, useRef } from "react";

const medicalTeam = [
  { role: "Ayurvedic Physicians", desc: "Expert B.A.M.S doctors coordinating clinical diagnoses, pulse mapping, and custom therapy plans.", icon: Stethoscope },
  { role: "Panchakarma Specialists", desc: "Specialists experienced in directing clinical body purification and cellular detox procedures.", icon: Leaf },
  { role: "Proctology Specialists", desc: "Clinicians focused on non-surgical, seton-based Kshara Sutra treatments for ano-rectal conditions.", icon: Award },
  { role: "Siddha Physicians", desc: "Consultants integrating classic Siddha healing compounds and herbal mineral formulations.", icon: ShieldCheck },
  { role: "Yoga Experts", desc: "Yogic therapists designing customized breathing and posture routines to speed joint/mental recovery.", icon: Activity },
  { role: "Naturopathy Experts", desc: "Advisors managing element-based hydrotherapy, mud treatments, and custom fasting charts.", icon: Sparkles },
  { role: "Qualified Therapists", desc: "Certified physical therapists coordinating muscle strengthening and post-surgical rehab.", icon: Briefcase },
  { role: "Nursing Team", desc: "Dedicated nursing staff providing 24/7 ward care, vital checks, and therapeutic support.", icon: Users },
  { role: "Patient Care Staff", desc: "Compassionate front-office and care coordinators assisting recovery stays and schedules.", icon: HeartHandshake },
];

const paramedicalTeam = [
  { role: "Certified Therapists", desc: "Male and female therapists executing classical oil therapies and steam applications." },
  { role: "Panchakarma Technicians", desc: "Technicians trained in sanitizing droni suites, herb boilings, and decoctions." },
  { role: "Patient Care Assistants", desc: "Orderlies assisting inpatient mobility, comfort setups, and ward needs." },
  { role: "Compassionate Caregivers", desc: "Attendants ensuring personalized attention for children, seniors, and long-stay patients." },
];

const valuesList = [
  { title: "Safety", desc: "Strict adherence to clinical protocols, sterile disposables, and emergency setups.", icon: ShieldCheck },
  { title: "Hygiene", desc: "Daily medical-grade sanitization of therapy suites, wooden dronis, and ward linen.", icon: Sparkles },
  { title: "Privacy", desc: "Separate therapy zones for genders, same-gender therapists, and confidential clinical charts.", icon: EyeOff },
  { title: "Professionalism", desc: "Certified team members continuously trained in classical methodologies and safety standards.", icon: Award },
];

export default function DoctorsPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  // Generate dynamic physician schema
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": doctorsData.map((doc) => ({
      "@type": "Physician",
      "name": doc.name,
      "image": `https://aayurkendra.com${doc.image}`,
      "medicalSpecialty": "Ayurvedic Medicine",
      "telephone": "+91 91501 12757",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No.23, Thally Road, Opposite Chenny's Mahal",
        "addressLocality": "Hosur",
        "postalCode": "635109",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": doc.qualification
      },
      "knowsAbout": doc.speciality.split(", ")
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
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
              <span className="text-brown-dark font-medium">Doctors</span>
            </nav>

            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ayur-green font-semibold">
              Medical Leadership
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              Our Medical Team
            </h1>
            <p className="text-sm sm:text-base font-light text-brown-muted max-w-2xl mx-auto leading-relaxed">
              Consult with senior medical practitioners combining decades of clinical wisdom with integrated modern therapies.
            </p>
          </div>
        </section>

        {/* Doctors Profiles Listing */}
        <section className="py-20 bg-cream-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {doctorsData.map((doc, index) => (
              <div key={doc.slug} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-white border border-brown-dark/8 rounded-3xl p-6 sm:p-10 shadow-sm">
                
                {/* Doctor Visual profile illustration */}
                <div className="lg:col-span-4 flex flex-col items-center text-center space-y-6 relative overflow-hidden">
                  <div className="h-56 w-56 rounded-full bg-gradient-to-br from-ayur-green to-brown-dark p-1 flex items-center justify-center shadow-lg relative overflow-hidden">
                    {!imgErrors[doc.slug] && doc.image ? (
                      <div className="h-full w-full rounded-full overflow-hidden relative border-2 border-cream-bg bg-white">
                        <Image
                          src={doc.image}
                          alt={doc.name}
                          fill
                          sizes="220px"
                          className="object-cover"
                          onError={() => setImgErrors(prev => ({ ...prev, [doc.slug]: true }))}
                        />
                      </div>
                    ) : (
                      <div className="h-full w-full rounded-full bg-white flex flex-col items-center justify-center text-brown-dark font-serif text-4xl font-bold border-2 border-cream-bg">
                        {doc.name.split(" ").slice(1).map(n => n[0]).join("")}
                      </div>
                    )}
                    <div className="absolute bottom-1 right-4 h-8 w-8 rounded-full bg-ayur-green border-2 border-white flex items-center justify-center text-white text-sm z-10" title="Verified Professional">
                      ✓
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-serif text-2xl font-bold text-brown-dark">
                      {doc.name}
                    </h2>
                    <p className="text-xs font-bold uppercase tracking-wider text-ayur-green">
                      {doc.title}
                    </p>
                    <p className="text-xs text-brown-muted">
                      {doc.qualification} &bull; {doc.experience} Experience
                    </p>
                  </div>

                  {/* Medical Credentials Strip */}
                  <div className="w-full border-t border-brown-dark/8 pt-4 space-y-3.5 text-xs text-left">
                    <div className="flex items-center space-x-2.5">
                      <GraduationCap className="h-4.5 w-4.5 text-ayur-green shrink-0" />
                      <span>{doc.qualification} (Bachelor of Ayurvedic Medicine & Surgery)</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <Award className="h-4.5 w-4.5 text-ayur-green shrink-0" />
                      <span>{doc.experience} of Clinical Practice</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <MapPin className="h-4.5 w-4.5 text-ayur-green shrink-0" />
                      <span>Hosur Hospital Speciality Wing</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="w-full space-y-3">
                    <Link
                      href="/appointment"
                      className="w-full bg-ayur-green hover:bg-dark-green text-white font-medium py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all hover:shadow-md cursor-pointer"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Book Consultation</span>
                    </Link>
                    {doc.videoUrl && (
                      <button
                        onClick={() => setActiveVideo(doc.videoUrl)}
                        className="w-full border border-brown-dark/10 hover:border-ayur-green text-brown-dark font-medium py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer"
                      >
                        <Play className="h-4 w-4 text-ayur-green" />
                        <span>Watch Message</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Doctor Professional Bio / Narrative */}
                <div className="lg:col-span-8 space-y-8 lg:pl-6">
                  <div className="space-y-4">
                    <h3 className="font-serif text-2.5xl font-bold text-brown-dark">
                      Professional Profile
                    </h3>
                    {doc.bio.map((paragraph, i) => (
                      <p key={i} className="text-sm sm:text-base font-light text-brown-muted leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Achievements and awards list */}
                  <div className="space-y-4 pt-4 border-t border-brown-dark/5">
                    <h3 className="font-serif text-xl font-bold text-brown-dark">
                      Achievements & Recognition
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {doc.achievements.map((award, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 text-sm bg-cream-bg/40 border border-brown-dark/8 p-4 rounded-2xl shadow-sm">
                          <CheckCircle className="h-5 w-5 text-ayur-green shrink-0 mt-0.5" />
                          <span className="font-light text-brown-dark/95 leading-relaxed">{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
            ))}

            {/* Scale card placeholder */}
            <FadeIn className="bg-white border border-brown-dark/8 rounded-3xl p-6 flex flex-col sm:flex-row items-center sm:justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="font-serif text-lg font-bold text-brown-dark flex items-center justify-center sm:justify-start space-x-2">
                  <Users className="h-5 w-5 text-ayur-green" />
                  <span>Clinical Expansion In Progress</span>
                </h4>
                <p className="text-xs font-light text-brown-muted leading-relaxed max-w-xl">
                  Aayur Kendra is currently onboarding secondary specialist consultants in Ayurvedic Ophthalmology (Shalakya Tantra), Yoga therapists, and clinical physical rehabilitation specialists to expand patient care.
                </p>
              </div>
              
              <span className="shrink-0 inline-block bg-brown-accent/8 text-brown-accent text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl border border-brown-accent/25">
                Join Our Team
              </span>
            </FadeIn>
          </div>
        </section>

        {/* Core Team Section */}
        <TeamSection />

        {/* Multidisciplinary Medical Team */}
        <section className="py-20 bg-white border-t border-brown-dark/8/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <FadeIn direction="down">
                <span className="text-xs uppercase tracking-wider text-ayur-green font-semibold">Specialist Network</span>
                <h2 className="font-serif text-3.5xl font-bold text-brown-dark mt-1">Our Multidisciplinary Medical Team</h2>
                <p className="text-sm font-light text-brown-muted">Meet the complete clinical grid supporting your diagnostic, therapy, and recovery processes.</p>
              </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {medicalTeam.map((team, idx) => {
                const Icon = team.icon;
                return (
                  <StaggerItem key={idx} className="bg-cream-bg/30 border border-brown-dark/8 p-6 rounded-2xl flex items-start gap-4">
                    <div className="p-3 bg-ayur-green/8 text-ayur-green rounded-xl shrink-0">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif font-bold text-brown-dark text-base">{team.role}</h4>
                      <p className="text-xs font-light text-brown-muted leading-relaxed">{team.desc}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Para Medical Team */}
        <section className="py-20 bg-cream-bg border-t border-brown-dark/8/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <FadeIn direction="down">
                <span className="text-xs uppercase tracking-wider text-ayur-green font-semibold">Therapeutic Support</span>
                <h2 className="font-serif text-3.5xl font-bold text-brown-dark mt-1">Our Para Medical Team</h2>
                <p className="text-sm font-light text-brown-muted">Our certified support staff ensures absolute clinical safety, hygiene, and patient comfort.</p>
              </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {paramedicalTeam.map((team, idx) => (
                <StaggerItem key={idx} className="bg-white border border-brown-dark/8 p-6 rounded-2xl text-center flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-brown-dark text-base">{team.role}</h4>
                    <p className="text-xs font-light text-brown-muted leading-relaxed">{team.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Quality & Safety focus */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-brown-dark/8">
              {valuesList.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="text-center space-y-2.5">
                    <div className="p-3 bg-ayur-green/8 text-ayur-green rounded-full w-fit mx-auto">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-serif font-bold text-brown-dark text-sm">{val.title}</h4>
                    <p className="text-[11px] font-light text-brown-muted max-w-xs mx-auto leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-10 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden relative shadow-2xl">
            <video src={activeVideo} className="absolute inset-0 w-full h-full object-contain" controls autoPlay />
          </div>
        </div>
      )}

      <Footer />
      <FloatingWidgets />
    </>
  );
}
