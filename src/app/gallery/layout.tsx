import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospital Gallery & Videos | Aayur Kendra Ayurveda Speciality Hospital",
  description:
    "View photos and video reels of Aayur Kendra's treatment suites, inpatient facilities, doctor activities, patient wellness camps, and founder speeches.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
