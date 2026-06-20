import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | Aayur Kendra Ayurveda Speciality Hospital",
  description:
    "Schedule your Ayurvedic consultation with Dr. Geetha Jayapal. Book Panchakarma, speciality treatments, or inpatient care at Aayur Kendra, Hosur.",
  alternates: { canonical: "/appointment" },
};

export default function AppointmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
