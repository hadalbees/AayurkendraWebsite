import type { Metadata } from "next";
import { specialitiesData } from "@/data/specialities";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const speciality = specialitiesData.find((s) => s.slug === slug);
  if (!speciality) return { title: "Speciality Not Found" };
  return {
    title: `${speciality.title} | Aayur Kendra Ayurveda Hospital`,
    description: speciality.overview.slice(0, 160),
    alternates: { canonical: `/specialities/${slug}` },
  };
}

export default function SpecialityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
