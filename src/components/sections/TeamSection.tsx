"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { teamData, TeamMember } from "@/data/team";
import { doctorsData, Doctor } from "@/data/doctors";
import { FadeIn, StaggerContainer, StaggerItem } from "../ui/Motion";
import { GraduationCap, Award, Leaf } from "lucide-react";

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = useState(false);

  return (
    <StaggerItem className="group bg-white border border-brown-dark/8 rounded-2.5xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Visual Portrait */}
      <div className="relative aspect-[4/5] w-full bg-cream-bg overflow-hidden flex items-center justify-center">
        {!imgError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-ayur-green/10 via-brown-accent/5 to-cream-muted flex flex-col items-center justify-center text-brown-dark p-6 relative select-none">
            {/* Soft decorative background leaf */}
            <Leaf className="absolute h-24 w-24 text-ayur-green/5 -rotate-12 pointer-events-none" />
            <div className="w-18 h-18 rounded-full bg-white shadow-sm border border-brown-dark/5 flex items-center justify-center text-brown-dark font-serif text-3xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">
              {member.name.charAt(0)}
            </div>
            <span className="text-lg font-serif font-bold text-brown-dark">{member.name}</span>
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-brown-muted mt-1 bg-brown-accent/5 px-2 py-0.5 rounded-full">
              Photo Pending
            </span>
          </div>
        )}
      </div>

      {/* Info Card */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          {!imgError && (
            <h3 className="font-serif text-lg font-bold text-brown-dark group-hover:text-ayur-green transition-colors">
              {member.name}
            </h3>
          )}
          <p className="text-xs uppercase font-bold tracking-wider text-ayur-green">
            {member.role}
          </p>
          
          <div className="space-y-1.5 pt-1.5">
            {member.qualification && (
              <div className="flex items-center space-x-1.5 text-xs text-brown-muted font-light">
                <GraduationCap className="h-3.5 w-3.5 text-brown-light shrink-0" />
                <span>{member.qualification}</span>
              </div>
            )}
            {member.speciality && (
              <div className="flex items-center space-x-1.5 text-xs text-brown-muted font-light">
                <Award className="h-3.5 w-3.5 text-brown-light shrink-0" />
                <span>{member.speciality}</span>
              </div>
            )}
          </div>

          {member.bio && (
            <p className="text-xs font-light text-brown-muted/95 leading-relaxed pt-2.5 border-t border-brown-dark/5">
              {member.bio}
            </p>
          )}
        </div>
      </div>
    </StaggerItem>
  );
}

function DoctorCard({ doc }: { doc: Doctor }) {
  const [imgError, setImgError] = useState(false);

  return (
    <StaggerItem className="group bg-white border border-brown-dark/8 rounded-2.5xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row h-full">
      {/* Visual Portrait */}
      <div className="relative aspect-[4/5] md:w-44 w-full bg-cream-bg overflow-hidden flex items-center justify-center shrink-0">
        {!imgError && doc.image ? (
          <Image
            src={doc.image}
            alt={doc.name}
            fill
            sizes="(max-w-768px) 100vw, 200px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-ayur-green/10 via-brown-accent/5 to-cream-muted flex flex-col items-center justify-center text-brown-dark p-6 relative select-none">
            <Leaf className="absolute h-20 w-20 text-ayur-green/5 -rotate-12 pointer-events-none" />
            <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-brown-dark/5 flex items-center justify-center text-brown-dark font-serif text-2xl font-bold mb-2">
              {doc.name.split(" ").slice(1).map(n => n[0]).join("")}
            </div>
            <span className="text-base font-serif font-bold text-brown-dark">{doc.name}</span>
          </div>
        )}
      </div>

      {/* Info Card */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div className="space-y-2">
          <h3 className="font-serif text-lg font-bold text-brown-dark group-hover:text-ayur-green transition-colors">
            {doc.name}
          </h3>
          <p className="text-xs uppercase font-bold tracking-wider text-ayur-green">
            {doc.title}
          </p>
          
          <div className="space-y-1.5 pt-1 text-xs text-brown-muted font-light">
            <div className="flex items-center space-x-1.5">
              <GraduationCap className="h-3.5 w-3.5 text-brown-light shrink-0" />
              <span>{doc.qualification}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Award className="h-3.5 w-3.5 text-brown-light shrink-0" />
              <span>{doc.experience} Experience</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Leaf className="h-3.5 w-3.5 text-brown-light shrink-0" />
              <span className="line-clamp-1">{doc.speciality}</span>
            </div>
          </div>

          <p className="text-xs font-light text-brown-muted/95 leading-relaxed pt-2.5 border-t border-brown-dark/5 line-clamp-3">
            {doc.bio[0]}
          </p>
        </div>

        <div className="pt-3 border-t border-brown-dark/5 mt-3 flex items-center justify-between">
          <Link
            href="/doctors"
            className="text-xs text-ayur-green hover:text-dark-green font-medium flex items-center space-x-1 transition-colors cursor-pointer"
          >
            <span>View Full Profile</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </StaggerItem>
  );
}

export default function TeamSection() {
  return (
    <section className="py-20 bg-cream-bg/40 border-t border-brown-dark/8/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <FadeIn direction="down">
            <span className="text-xs uppercase tracking-wider text-ayur-green font-semibold">
              Our Medical & Support Team
            </span>
            <h2 className="font-serif text-3.5xl font-bold text-brown-dark mt-1">
              Meet Our Specialist Team
            </h2>
            <p className="text-sm font-light text-brown-muted leading-relaxed">
              Consult with senior medical leaders, practitioners, and dedicated care staff collaborating to coordinate your healing plans.
            </p>
          </FadeIn>
        </div>

        {/* Section 1: Senior Medical Leadership (Founder & Ano-Rectal Surgeon) */}
        <div className="space-y-6">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-brown-dark border-b border-brown-dark/10 pb-3">
            Medical Leadership & Senior Doctors
          </h3>
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {doctorsData.map((doc) => (
              <DoctorCard key={doc.slug} doc={doc} />
            ))}
          </StaggerContainer>
        </div>

        {/* Section 2: Clinical Practitioners & Support Staff */}
        <div className="space-y-6">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-brown-dark border-b border-brown-dark/10 pb-3">
            Clinical Practitioners & Support Staff
          </h3>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamData.map((member) => (
              <TeamMemberCard key={member.slug} member={member} />
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
