"use client";

import { useState, useEffect, useRef } from "react";
import { Users, Calendar, Sparkles, HeartHandshake, Bed } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../ui/Motion";

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const end = value;
    const totalFrames = Math.round(duration / 16.6); // ~60fps
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(end * (1 - (1 - progress) * (1 - progress))); // Ease out quad
      setCount(currentCount);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      }
    }, 16.6);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
}

const stats = [
  { value: 25, suffix: "+", label: "Years of Clinical Excellence", icon: Calendar, animate: true },
  { value: 10000, suffix: "+", label: "Patients Treated", icon: Users, animate: true },
  { value: 10, suffix: "+", label: "Bed Hospital", icon: Bed, animate: true },
  { value: 100, suffix: "%", label: "Integrated Holistic Healthcare", icon: Sparkles, animate: false },
  { value: 100, suffix: "%", label: "Patient-Centered Care", icon: HeartHandshake, animate: false },
];

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 bg-cream-bg relative border-t border-brown-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <StaggerItem
                key={stat.label}
                className="premium-card p-6 sm:p-8 text-center group hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-2xl bg-ayur-green/8 text-ayur-green mb-4 group-hover:bg-ayur-green group-hover:text-white transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-serif text-3xl sm:text-4xl font-semibold text-brown-dark tracking-tight">
                  {stat.animate ? (
                    <AnimatedCounter value={stat.value} />
                  ) : (
                    stat.value
                  )}
                  {stat.suffix}
                </p>
                <p className="text-xs sm:text-sm text-brown-muted mt-2 font-medium leading-tight">{stat.label}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
