import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { specialitiesData } from "@/data/specialities";
import { therapiesData } from "@/data/therapies";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticPages = [
    "",
    "/about",
    "/specialities",
    "/therapies",
    "/doctors",
    "/facilities",
    "/gallery",
    "/testimonials",
    "/blog",
    "/contact",
    "/appointment",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...specialitiesData.map((s) => ({
      url: `${base}/specialities/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...therapiesData.map((t) => ({
      url: `${base}/therapies/${t.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
