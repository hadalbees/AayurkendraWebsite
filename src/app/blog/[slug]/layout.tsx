import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} | Aayur Kendra Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return children;
}
