"use client";

import { useState } from "react";
import Image from "next/image";
import { teamData, TeamMember } from "@/data/team";
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

export default function TeamSection() {
  return (
    <section className="py-20 bg-cream-bg/40 border-t border-brown-dark/8/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <FadeIn direction="down">
            <span className="text-xs uppercase tracking-wider text-ayur-green font-semibold">
              Our Practitioners
            </span>
            <h2 className="font-serif text-3.5xl font-bold text-brown-dark mt-1">
              Meet Our Specialist Team
            </h2>
            <p className="text-sm font-light text-brown-muted leading-relaxed">
              Highly trained physicians and experienced therapists collaborating to design and coordinate your customized healing plans.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <TeamMemberCard key={member.slug} member={member} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
