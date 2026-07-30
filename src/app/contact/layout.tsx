import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Aayur Kendra Ayurveda Speciality Hospital",
  description:
    "Get in touch with Aayur Kendra Speciality Hospital in Hosur. Find our address, phone number, working hours, GST details, emergency nursing desk, and map directions.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
