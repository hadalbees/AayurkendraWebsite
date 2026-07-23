import type { Metadata } from "next";
import { therapiesData } from "@/data/therapies";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const therapy = therapiesData.find((t) => t.slug === slug);
  if (!therapy) return { title: "Therapy Not Found" };
  return {
    title: `${therapy.title} Therapy | Aayur Kendra Ayurveda Hospital`,
    description: therapy.overview.slice(0, 160),
    alternates: { canonical: `/therapies/${slug}` },
  };
}

export default function TherapyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
