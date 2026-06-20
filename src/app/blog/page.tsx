"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-20">
        <section className="bg-gradient-to-br from-cream-light to-white text-brown-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brown-muted via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ayur-green font-semibold">
              Health Insights
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              Our Medical Blog
            </h1>
            <p className="text-sm sm:text-base font-light text-brown-muted max-w-2xl mx-auto leading-relaxed">
              Explore health articles, nutritional guides, and wellness secrets written directly by our medical advisors.
            </p>
          </div>
        </section>

        <section className="py-20 bg-cream-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {blogPosts.map((post) => (
                <StaggerItem
                  key={post.slug}
                  className="bg-white border border-brown-dark/8 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group relative"
                >
                  <PlaceholderImage variant="hospital" label={post.category} className="h-40 w-full" />

                  <div className="p-6 sm:p-8 flex flex-col flex-grow space-y-4">
                    <div className="flex items-center space-x-2 text-xs text-ayur-green font-bold uppercase tracking-wider">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-brown-dark group-hover:text-ayur-green  transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm font-light text-brown-dark/75 leading-relaxed line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="pt-4 border-t border-brown-dark/8/60 flex items-center justify-between text-xs font-semibold text-brown-dark/80 group-hover:text-brown-accent transition-colors">
                      <div className="flex items-center space-x-1 font-light text-brown-dark/50">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={`Read ${post.title}`} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWidgets />
    </>
  );
}
