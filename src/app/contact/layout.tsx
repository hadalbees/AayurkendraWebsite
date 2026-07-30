import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Aayur Kendra Ayurveda Speciality Hospital, Hosur",
  description:
    "Contact Aayur Kendra Hospital at +91 91501 12757. Visit us at Thally Road, Hosur. Book consultations, inquire about treatments, or get directions.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
