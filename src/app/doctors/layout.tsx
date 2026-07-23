import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Medical Team & Doctors | Aayur Kendra Ayurveda Speciality Hospital",
  description:
    "Meet Aayur Kendra's clinical leadership under Dr. Geetha Jayapal (B.A.M.S, 25+ Years Experience). Discover our multidisciplinary team of Ayurvedic physicians, specialists, and therapists.",
  alternates: { canonical: "/doctors" },
};

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
