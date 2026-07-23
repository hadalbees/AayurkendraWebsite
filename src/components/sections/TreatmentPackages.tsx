"use client";

import Link from "next/link";
import { Check, Sparkles, Calendar, ArrowRight } from "lucide-react";
import { treatmentPackages } from "@/data/packages";
import { StaggerContainer, StaggerItem } from "../ui/Motion";
import SectionHeader from "../ui/SectionHeader";

export default function TreatmentPackages() {
  return (
    <section id="packages" className="section-padding bg-white relative border-t border-brown-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Wellness Programs"
          title="Curated Treatment Packages"
          description="Structured healing programs designed for detox, recovery, and long-term wellness — customized after consultation."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentPackages.map((pkg) => (
            <StaggerItem key={pkg.id}>
              <div
                className={`premium-card p-6 sm:p-8 h-full flex flex-col justify-between relative hover:-translate-y-1 transition-all duration-300 ${
                  pkg.popular ? "ring-2 ring-ayur-green/30 bg-ayur-green/5" : ""
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 bg-ayur-green text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                )}

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-brown-muted font-medium bg-cream-bg px-2.5 py-1 rounded-lg">
                      {pkg.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-brown-dark">{pkg.name}</h3>
                  <p className="text-xs sm:text-sm text-brown-muted font-light leading-relaxed">
                    {pkg.description}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-brown-muted">
                        <Check className="h-3.5 w-3.5 text-ayur-green shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-brown-dark/5">
                  <Link
                    href={`/appointment?package=${pkg.id}`}
                    className="w-full text-center btn-primary text-xs py-3 flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Program
                  </Link>
                  <Link
                    href={pkg.linkUrl}
                    className="w-full text-center inline-flex items-center justify-center gap-1 text-xs font-semibold text-brown-muted hover:text-ayur-green transition-colors py-2"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
