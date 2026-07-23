"use client";

import { Users, Calendar, Star, Award } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../ui/Motion";

const stats = [
  { value: "10,000+", label: "Patients Treated", icon: Users },
  { value: "25+", label: "Years Experience", icon: Calendar },
  { value: "4.9", label: "Google Rating", icon: Star },
  { value: "10", label: "Bed Inpatient Care", icon: Award },
];

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 bg-cream-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <StaggerItem
                key={stat.label}
                className="premium-card p-6 sm:p-8 text-center group hover:-translate-y-0.5"
              >
                <div className="inline-flex p-3 rounded-2xl bg-ayur-green/8 text-ayur-green mb-4 group-hover:bg-ayur-green group-hover:text-white transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-serif text-3xl sm:text-4xl font-semibold text-brown-dark tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-brown-muted mt-1 font-medium">{stat.label}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
