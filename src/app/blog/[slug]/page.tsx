"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { FadeIn } from "@/components/ui/Motion";
import { blogPosts } from "@/data/blog";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        <article>
          <PlaceholderImage variant="hospital" label={post.category} className="h-56 sm:h-72 w-full" />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            <FadeIn>
              <Link href="/blog" className="inline-flex items-center space-x-2 text-xs font-semibold text-ayur-green hover:underline mb-6">
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back to Blog</span>
              </Link>

              <span className="text-[10px] uppercase tracking-[0.2em] text-ayur-green font-bold">
                {post.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4.5xl font-bold text-brown-dark mt-2 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-brown-dark/60">
                <span className="flex items-center space-x-1.5">
                  <User className="h-3.5 w-3.5" />
                  <span>{post.author}</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{post.date}</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{post.readTime}</span>
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="space-y-5">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="text-base font-light text-brown-dark/90 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </FadeIn>

            <FadeIn delay={0.3} className="pt-8 border-t border-brown-dark/8">
              <Link
                href="/appointment"
                className="inline-flex items-center space-x-2 bg-ayur-green text-white font-medium px-6 py-3 rounded-full text-sm"
              >
                <span>Book a Consultation</span>
              </Link>
            </FadeIn>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
