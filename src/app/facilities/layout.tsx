import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospital Facilities & Infrastructure | Aayur Kendra Ayurveda Speciality Hospital",
  description:
    "Explore Aayur Kendra's clinical facilities in Hosur — featuring a 10-bed inpatient ward, specialized Panchakarma rooms, consultation chambers, and organic herbal pharmacy.",
  alternates: { canonical: "/facilities" },
};

export default function FacilitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
