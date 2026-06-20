"use client";

import { useRef, useState } from "react";
import { Play, Award, GraduationCap, HeartHandshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "../ui/Motion";
import SectionHeader from "../ui/SectionHeader";
import PlaceholderImage from "../ui/PlaceholderImage";
import { LeafAccent } from "../ui/LeafPattern";
import { siteConfig } from "@/lib/site";

export default function AboutDoctor() {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="about-doctor"
      className="section-padding bg-white relative overflow-hidden"
    >
      <LeafAccent className="top-20 right-0 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeader
          label="Meet Your Doctor"
          title={siteConfig.founder.name}
          description="Founder & Chief Consultant with 25+ years of dedicated Ayurvedic clinical practice in South India."
          align="left"
          className="max-w-none mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          <div className="lg:col-span-5 space-y-6">

            <FadeIn direction="right">
              <div className="premium-card overflow-hidden rounded-[1.5rem]">
                <PlaceholderImage
                  variant="doctor"
                  label="Doctor Portrait"
                  className="aspect-square w-full"
                />
              </div>
            </FadeIn>

            <FadeIn
              direction="right"
              delay={0.15}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { icon: GraduationCap, text: "B.A.M.S" },
                { icon: Award, text: "25+ Years" },
                { icon: HeartHandshake, text: "Compassionate" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="premium-card p-4 text-center">
                  <Icon className="h-5 w-5 text-ayur-green mx-auto mb-2" />
                  <p className="text-xs font-semibold text-brown-dark">
                    {text}
                  </p>
                </div>
              ))}
            </FadeIn>

          </div>

          <div className="lg:col-span-7 space-y-6">

            <FadeIn direction="left">
              <p className="text-xs uppercase tracking-wider text-ayur-green font-semibold">
                {siteConfig.founder.title}
              </p>

              <p className="text-base sm:text-lg text-brown-muted mt-4">
                Dr. Geetha Jayapal founded Aayur Kendra with a vision to deliver authentic,
                clinical-grade Ayurveda to modern families.
              </p>

              <p className="text-base text-brown-muted mt-4">
                Ayurveda is a holistic lifestyle science centered on harmony and healing.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>

              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">

                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/images/founder-thumbnail.jpg"
                  controls={isPlaying}
                >
                  <source
                    src="/videos/founder.mp4"
                    type="video/mp4"
                  />
                </video>

                {!isPlaying && (

                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition"
                    onClick={() => {

                      setIsPlaying(true);

                      setTimeout(() => {
                        videoRef.current?.play();
                      }, 100);

                    }}
                  >

                    <span className="w-16 h-16 rounded-full bg-ayur-green flex items-center justify-center shadow-xl">

                      <Play className="w-7 h-7 text-white fill-white ml-1" />

                    </span>

                  </button>

                )}

              </div>

            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <Link
                href="/doctors"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brown-accent hover:text-ayur-green"
              >
                View Full Profile
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>

          </div>

        </div>

      </div>

    </section>
  );
}
