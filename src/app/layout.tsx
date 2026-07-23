import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const cormorantSerif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfitSans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.shortName} | Premium Ayurveda Healthcare in Hosur`,
  description:
    "Experience authentic Ayurveda, Panchakarma, and holistic healing under Dr. Geetha Jayapal. Book your consultation at Hosur's trusted Ayurveda speciality hospital.",
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aayur Kendra Ayurveda Speciality Hospital",
    description: "Premium Ayurveda healthcare — Panchakarma, personalized treatments, and integrated wellness in Hosur.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantSerif.variable} ${outfitSans.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-cream-bg text-brown-dark font-sans">
        {children}
      </body>
    </html>
  );
}
