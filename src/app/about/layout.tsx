import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Aayur Kendra Ayurveda Speciality Hospital",
  description:
    "Learn about Aayur Kendra's 25+ year healing journey, vision, mission, and values. Authentic Ayurveda hospital in Hosur founded by Dr. Geetha Jayapal, B.A.M.S.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
