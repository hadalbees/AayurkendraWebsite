"use client";

import { Star, ExternalLink } from "lucide-react";
import Link from "next/link";
import { StaggerContainer, StaggerItem } from "../ui/Motion";
import SectionHeader from "../ui/SectionHeader";
import { siteConfig } from "@/lib/site";

const reviews = [
  {
    name: "Meenakshi Sundaram",
    rating: 5,
    date: "2 months ago",
    text: "Under Dr. Geetha's guidance, my PCOS symptoms improved significantly with a 14-day Virechana course. Periods are regular and I feel energetic!",
  },
  {
    name: "Ramesh Krishnan",
    rating: 5,
    date: "1 month ago",
    text: "Elakizhi massage and physiotherapy completely relieved my sciatica. Excellent hygienic hospital rooms and compassionate staff.",
  },
  {
    name: "Priya Venkatesh",
    rating: 5,
    date: "3 weeks ago",
    text: "My HbA1c dropped from 8.2 to 6.4 with Ayurvedic herbs and dietary guidance. I reduced my allopathic dosages too.",
  },
  {
    name: "Anantharaman S.",
    rating: 5,
    date: "2 weeks ago",
    text: "Kizhi therapy for chronic joint pain gave me relief I hadn't found elsewhere. Highly professional and caring team.",
  },
];

export default function GoogleReviews() {
  return (
    <section id="reviews" className="section-padding bg-cream-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <SectionHeader
            label="Google Reviews"
            title="Trusted by Thousands"
            description="Our patients consistently rate us among the best Ayurveda hospitals in Hosur."
            align="left"
            className="mb-0"
          />

          <a
            href={siteConfig.social.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card inline-flex items-center gap-3 px-5 py-3 shrink-0 hover:-translate-y-0.5"
          >
            <span className="text-2xl font-bold text-red-500">G</span>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 font-semibold text-brown-dark">4.9</span>
              </div>
              <p className="text-xs text-brown-muted">View on Google</p>
            </div>
            <ExternalLink className="h-4 w-4 text-brown-muted" />
          </a>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <StaggerItem key={review.name}>
              <div className="premium-card p-6 h-full flex flex-col hover:-translate-y-0.5">
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-brown-muted font-light leading-relaxed flex-grow">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-brown-dark/5">
                  <p className="text-sm font-semibold text-brown-dark">{review.name}</p>
                  <p className="text-[10px] text-brown-light mt-0.5">{review.date}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center mt-10">
          <Link href="/testimonials" className="text-sm font-semibold text-ayur-green hover:text-dark-green transition-colors">
            Read More Patient Stories →
          </Link>
        </div>
      </div>
    </section>
  );
}
