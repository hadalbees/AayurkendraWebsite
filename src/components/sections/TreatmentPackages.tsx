"use client";

import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { treatmentPackages } from "@/data/packages";
import { StaggerContainer, StaggerItem } from "../ui/Motion";
import SectionHeader from "../ui/SectionHeader";

export default function TreatmentPackages() {
  return (
    <section id="packages" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Wellness Programs"
          title="Curated Treatment Packages"
          description="Structured healing programs designed for detox, recovery, and long-term wellness — customized after consultation."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatmentPackages.map((pkg) => (
            <StaggerItem key={pkg.id}>
              <div
                className={`premium-card p-6 h-full flex flex-col relative hover:-translate-y-1 ${
                  pkg.popular ? "ring-2 ring-ayur-green/30" : ""
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 bg-ayur-green text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                )}

                <p className="text-xs text-brown-muted font-medium">{pkg.duration}</p>
                <h3 className="font-serif text-xl font-semibold text-brown-dark mt-2">{pkg.name}</h3>
                <p className="text-lg font-semibold text-ayur-green mt-2">{pkg.price}</p>
                <p className="text-sm text-brown-muted font-light leading-relaxed mt-3 flex-grow">
                  {pkg.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-brown-muted">
                      <Check className="h-3.5 w-3.5 text-ayur-green shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/appointment?package=${pkg.id}`}
                  className="mt-6 w-full text-center btn-primary text-sm py-3"
                >
                  Enquire Now
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
