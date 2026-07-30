"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { 
  User, 
  Calendar, 
  FileText, 
  Video, 
  Activity, 
  ShieldCheck, 
  Download,
  Users,
  PlusCircle,
  FileSpreadsheet
} from "lucide-react";

type PortalTab = "patient" | "emr" | "appointments" | "telehealth" | "doctor";

export default function HMSPortalPage() {
  const [activeTab, setActiveTab] = useState<PortalTab>("patient");

  const sidebarItems = [
    { id: "patient", label: "Patient Portal", icon: User },
    { id: "emr", label: "EMR & Health Records", icon: FileText },
    { id: "appointments", label: "Appointment Manager", icon: Calendar },
    { id: "telehealth", label: "Online Consultations", icon: Video },
    { id: "doctor", label: "Doctor Dashboard", icon: Activity },
  ] as const;

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-20 bg-cream-bg min-h-screen">
        {/* Banner Hero */}
        <section className="bg-gradient-to-br from-cream-light to-white text-brown-dark py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brown-muted via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ayur-green font-semibold">
                Hospital System Architecture
              </span>
              <h1 className="font-serif text-3.5xl font-bold leading-tight tracking-tight text-brown-dark">
                Aayur Kendra HMS Hub
              </h1>
              <p className="text-xs sm:text-sm font-light text-brown-muted leading-relaxed">
                Future Hospital Management System (HMS) Integration Architecture Preview.
              </p>
            </div>
            
            <div className="inline-flex items-center space-x-2 bg-brown-dark/5 border border-brown-dark/10 px-4 py-2.5 rounded-2xl text-xs font-semibold">
              <ShieldCheck className="h-4.5 w-4.5 text-brown-accent shrink-0" />
              <span>Future Integration Ready</span>
            </div>
          </div>
        </section>

        {/* Portal Dashboard Panel */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Dashboard Side-Navigation */}
              <div className="lg:col-span-3 space-y-2 bg-white border border-brown-dark/8 rounded-2xl p-4 shadow-sm">
                <h3 className="text-xs uppercase tracking-wider text-ayur-green font-bold px-3 pb-2 mb-2 border-b border-brown-dark/8">
                  Portal Modules
                </h3>
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        activeTab === item.id
                          ? "bg-ayur-green text-white shadow-md"
                          : "text-brown-dark/70 hover:bg-cream-bg hover:text-ayur-green"
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dashboard Dynamic Content Panel */}
              <div className="lg:col-span-9 bg-white border border-brown-dark/8 rounded-3xl p-6 sm:p-8 shadow-sm min-h-[500px] flex flex-col justify-between">
                
                {/* 1. Patient Portal Panel */}
                {activeTab === "patient" && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-brown-dark/8 pb-4">
                      <div>
                        <h2 className="font-serif text-2xl font-bold text-brown-dark">Patient Profile</h2>
                        <p className="text-xs font-light text-brown-dark/75">Patient ID: AK-8842 | Registration Active</p>
                      </div>
                      <span className="bg-brown-accent/10 text-brown-accent dark:bg-brown-accent/15  text-[10px] uppercase font-bold tracking-wider px-2.5 py-1.5 rounded-lg border border-brown-accent/20">
                        Inpatient Status: Active
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="bg-cream-bg/50 border border-brown-dark/8 rounded-2xl p-5">
                        <h4 className="text-[10px] uppercase tracking-wider text-ayur-green font-bold mb-1">Blood Group</h4>
                        <p className="text-2xl font-bold text-brown-dark">O Positive (O+)</p>
                      </div>
                      <div className="bg-cream-bg/50 border border-brown-dark/8 rounded-2xl p-5">
                        <h4 className="text-[10px] uppercase tracking-wider text-ayur-green font-bold mb-1">Prakriti (Constitution)</h4>
                        <p className="text-2xl font-bold text-brown-dark">Pitta-Vata Balanced</p>
                      </div>
                      <div className="bg-cream-bg/50 border border-brown-dark/8 rounded-2xl p-5">
                        <h4 className="text-[10px] uppercase tracking-wider text-ayur-green font-bold mb-1">Attending Physician</h4>
                        <p className="text-lg font-bold text-brown-dark">Dr. Geetha Jayapal</p>
                      </div>
                    </div>

                    {/* Active Prescriptions list */}
                    <div className="space-y-3 pt-4">
                      <h3 className="font-serif text-lg font-bold text-brown-dark">Active Prescriptions</h3>
                      <div className="border border-brown-dark/8 rounded-2xl overflow-hidden divide-y divide-theme-border">
                        {[
                          { item: "Triphala Choornam", dose: "1 teaspoon at bedtime with warm water", refills: "3 remaining" },
                          { item: "Dhanwantharam Thailam", dose: "External application before warm bath", refills: "No refills needed" },
                        ].map((rx, idx) => (
                          <div key={idx} className="p-4 flex items-center justify-between text-xs sm:text-sm bg-cream-bg/10 hover:bg-cream-bg/25 transition-colors">
                            <div>
                              <h5 className="font-bold">{rx.item}</h5>
                              <p className="text-xs text-brown-dark/75 font-light mt-0.5">{rx.dose}</p>
                            </div>
                            <span className="text-xs font-semibold text-ayur-green">{rx.refills}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. EMR Panel */}
                {activeTab === "emr" && (
                  <div className="space-y-6">
                    <div className="border-b border-brown-dark/8 pb-4">
                      <h2 className="font-serif text-2xl font-bold text-brown-dark">Electronic Medical Records (EMR)</h2>
                      <p className="text-xs font-light text-brown-dark/75">Clinical history and health diagnostics sheets.</p>
                    </div>

                    {/* Timeline EMR logs */}
                    <div className="relative border-l border-brown-dark/8 pl-6 ml-2 space-y-6">
                      {[
                        { date: "June 14, 2026", title: "Panchakarma Detoxification Completed", desc: "A 10-day Virechana & Basti clinical course executed successfully under supervision. Patient reports relief from chronic bloating and muscle fatigue." },
                        { date: "June 03, 2026", title: "Nadi Pariksha & Prakriti Assessment", desc: "Initial clinical consultation mapping. Pitta dosha aggravation found affecting metabolic liver fire. Custom diet and medicated ghee prescribed." },
                      ].map((log, idx) => (
                        <div key={idx} className="relative">
                          <span className="absolute -left-10 top-0.5 bg-white border border-brown-accent text-brown-accent h-5.5 w-5.5 rounded-full flex items-center justify-center text-[10px] font-bold">
                            ✦
                          </span>
                          <span className="text-[10px] uppercase font-bold text-ayur-green">{log.date}</span>
                          <h4 className="text-sm sm:text-base font-bold mt-0.5">{log.title}</h4>
                          <p className="text-xs sm:text-sm font-light text-brown-dark/75 mt-1 leading-relaxed">{log.desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* PDF lab reports download panel */}
                    <div className="space-y-3 pt-4 border-t border-brown-dark/8">
                      <h3 className="font-serif text-lg font-bold text-brown-dark">Lab Reports</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { title: "Lipid Profile test.pdf", date: "June 02, 2026", size: "235 KB" },
                          { title: "Complete Hemogram.pdf", date: "June 02, 2026", size: "192 KB" },
                        ].map((file, idx) => (
                          <div key={idx} className="border border-brown-dark/8 bg-cream-bg/20 rounded-2xl p-4 flex items-center justify-between hover:bg-cream-bg/40 transition-colors">
                            <div>
                              <h5 className="text-xs sm:text-sm font-bold text-brown-dark">{file.title}</h5>
                              <p className="text-[10px] text-brown-dark/60 font-light mt-0.5">{file.date} | {file.size}</p>
                            </div>
                            <button className="p-2 bg-brown-accent/10 text-brown-accent dark:bg-brown-accent/15  rounded-xl hover:scale-105 active:scale-95 transition-all cursor-pointer">
                              <Download className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Appointment Manager Panel */}
                {activeTab === "appointments" && (
                  <div className="space-y-6">
                    <div className="border-b border-brown-dark/8 pb-4">
                      <h2 className="font-serif text-2xl font-bold text-brown-dark">Appointment Manager</h2>
                      <p className="text-xs font-light text-brown-dark/75">Reschedule or modify your upcoming clinical consultations.</p>
                    </div>

                    <div className="border border-brown-dark/8 bg-cream-bg/15 rounded-3xl p-6 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brown-dark/8">
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold text-ayur-green">Next Appointment</span>
                          <h4 className="font-serif text-lg font-bold text-brown-dark">Clinical Speciality Consultation</h4>
                          <p className="text-xs font-light text-brown-dark/75">Attending Consultant: Dr. Geetha Jayapal</p>
                        </div>
                        
                        <div className="text-left sm:text-right shrink-0">
                          <h4 className="text-lg font-bold text-brown-dark">June 25, 2026</h4>
                          <p className="text-xs font-light">Preferred Time: 10:30 AM</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        <button className="bg-ayur-green text-white text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full hover:shadow-md cursor-pointer">
                          Reschedule Appointment
                        </button>
                        <button className="border border-brown-dark/8 text-brown-dark/70 text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full hover:bg-cream-bg transition-colors cursor-pointer">
                          Cancel Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Telehealth Portal Panel */}
                {activeTab === "telehealth" && (
                  <div className="space-y-6">
                    <div className="border-b border-brown-dark/8 pb-4">
                      <h2 className="font-serif text-2xl font-bold text-brown-dark">Online Video Consultations</h2>
                      <p className="text-xs font-light text-brown-dark/75">Connect with our Ayurvedic specialists from the comfort of your home.</p>
                    </div>

                    <div className="bg-gradient-to-br from-cream-card to-brown-accent/8 border border-brown-dark/8 rounded-3xl p-8 text-center space-y-4 flex flex-col items-center">
                      <Video className="h-12 w-12 text-ayur-green animate-pulse" />
                      <h3 className="font-serif text-xl font-bold text-brown-dark">No Active Video Sessions</h3>
                      <p className="text-xs sm:text-sm font-light text-brown-dark/70 max-w-sm leading-relaxed">
                        You do not have any scheduled online video consultations for today. Schedule a telehealth consult via our appointment booking manager.
                      </p>
                      
                      <button className="bg-ayur-green text-white text-xs uppercase tracking-wider font-semibold px-5 py-3 rounded-full hover:shadow-md cursor-pointer">
                        Schedule Online Consult
                      </button>
                    </div>
                  </div>
                )}

                {/* 5. Doctor Dashboard Panel */}
                {activeTab === "doctor" && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-brown-dark/8 pb-4">
                      <div>
                        <h2 className="font-serif text-2xl font-bold text-brown-dark">Doctor Portal Panel</h2>
                        <p className="text-xs font-light text-brown-dark/75">Active Physician: Dr. Geetha Jayapal</p>
                      </div>
                      <span className="bg-red-500/10 text-red-500 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1.5 rounded-lg border border-red-500/15">
                        Emergency Queue: None
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="bg-cream-bg/40 border border-brown-dark/8 rounded-2xl p-5 text-center flex flex-col items-center justify-center space-y-2">
                        <Users className="h-6 w-6 text-ayur-green" />
                        <h4 className="text-2xl font-bold text-brown-dark">14</h4>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-brown-dark/50">Consultations Today</p>
                      </div>
                      <div className="bg-cream-bg/40 border border-brown-dark/8 rounded-2xl p-5 text-center flex flex-col items-center justify-center space-y-2">
                        <PlusCircle className="h-6 w-6 text-ayur-green" />
                        <h4 className="text-2xl font-bold text-brown-dark">8</h4>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-brown-dark/50">Active Inpatients</p>
                      </div>
                      <div className="bg-cream-bg/40 border border-brown-dark/8 rounded-2xl p-5 text-center flex flex-col items-center justify-center space-y-2">
                        <FileSpreadsheet className="h-6 w-6 text-ayur-green" />
                        <h4 className="text-2xl font-bold text-brown-dark">6</h4>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-brown-dark/50">Prescriptions Issued</p>
                      </div>
                    </div>

                    {/* Inpatients log table placeholder */}
                    <div className="space-y-3 pt-4">
                      <h3 className="font-serif text-lg font-bold text-brown-dark">Current Inpatient Ward</h3>
                      <div className="border border-brown-dark/8 rounded-2xl overflow-hidden divide-y divide-theme-border bg-cream-bg/10">
                        {[
                          { bed: "Bed 01", name: "Anantharaman S.", therapy: "Kizhi (Pain Relief)", status: "Completed" },
                          { bed: "Bed 03", name: "Padmini Sen", therapy: "Sootika (Postpartum recovery)", status: "Active" },
                        ].map((row, idx) => (
                          <div key={idx} className="p-4 flex items-center justify-between text-xs sm:text-sm">
                            <span className="font-bold text-ayur-green">{row.bed}</span>
                            <span className="font-medium">{row.name}</span>
                            <span className="font-light text-brown-dark/75">{row.therapy}</span>
                            <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                              row.status === "Completed" ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"
                            }`}>
                              {row.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Dashboard Bottom Alert Disclaimer */}
                <div className="border-t border-brown-dark/8 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brown-dark/50 font-light gap-4">
                  <p>
                    Disclaimer: This portal displays mock configurations simulating dynamic client EMR and doctor scheduling databases.
                  </p>
                  <span className="bg-brown-accent/8 text-brown-accent dark:bg-brown-accent/15  border border-brown-accent/15 dark:border-brown-accent/20 text-[9px] uppercase tracking-wider font-bold px-2.5 py-1.5 rounded-lg shrink-0">
                    System Architecture Standard v1.2
                  </span>
                </div>

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
