"use client";

import Link from "next/link";
import { therapiesData } from "@/data/therapies";
import { ArrowRight, Clock } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../ui/Motion";
import SectionHeader from "../ui/SectionHeader";
import PlaceholderImage from "../ui/PlaceholderImage";

function formatDuration(duration: string) {
  if (duration.includes("Day")) return duration.split("(")[0].trim();
  return duration;
}

export default function TherapiesPreview() {
  const therapies = therapiesData.slice(0, 6);

  return (
    <section id="treatments" className="section-padding bg-cream-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            label="Our Treatments"
            title="Authentic Ayurveda Therapies"
            description="Classical treatments delivered by trained specialists under medical supervision."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Link
            href="/therapies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brown-accent hover:text-ayur-green transition-colors shrink-0"
          >
            View All Treatments
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapies.map((therapy) => (
            <StaggerItem key={therapy.slug} className="group">
              <div className="premium-card overflow-hidden h-full flex flex-col hover:-translate-y-1">
                <PlaceholderImage variant="therapy" label={therapy.title} className="h-44 w-full" />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-serif text-lg font-semibold text-brown-dark group-hover:text-ayur-green transition-colors">
                      {therapy.title}
                    </h3>
                    <span className="flex items-center gap-1 text-[10px] text-brown-muted shrink-0 mt-1">
                      <Clock className="h-3 w-3" />
                      {formatDuration(therapy.duration)}
                    </span>
                  </div>
                  <p className="text-sm text-brown-muted font-light leading-relaxed line-clamp-2 flex-grow">
                    {therapy.benefits[0]}
                  </p>
                  <Link
                    href={`/therapies/${therapy.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-ayur-green uppercase tracking-wider"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
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
