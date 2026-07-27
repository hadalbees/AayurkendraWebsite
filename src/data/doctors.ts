export interface Doctor {
  slug: string;
  name: string;
  title: string;
  qualification: string;
  experience: string;
  speciality: string;
  image: string;
  bio: string[];
  videoUrl: string;
  achievements: string[];
}

export const doctorsData: Doctor[] = [
  {
    slug: "dr-geetha-jayapal",
    name: "Dr. Geetha Jayapal",
    title: "Founder & Chief Consultant",
    qualification: "B.A.M.S",
    experience: "25+ Years",
    speciality: "Panchakarma, Women's Wellness & Lifestyle Medicine",
    image: "/images/dr-geetha.png",
    bio: [
      "Dr. Geetha Jayapal graduated with a B.A.M.S degree, dedicating her clinical life to standardizing Ayurvedic treatments.",
      "She is a highly respected member of the South Indian Ayurvedic medical community, recognized for her success in treating chronic gynecological disorders and metabolic lifestyle diseases.",
      "For 25+ years, she has personally diagnosed and treated over 10,000 patients, offering a root-cause purification path that integrates traditional Panchakarma, specialized diet regimes, and custom-blended herbal formulations."
    ],
    videoUrl: "/videos/founder.mp4",
    achievements: [
      "Recognized for Healthcare Excellence and Women Entrepreneurship in Krishnagiri District.",
      "Spearheaded pioneering clinical research in Ayurvedic solutions for PCOS & Endometriosis.",
      "Organized 50+ free health awareness and wellness screening camps in Tamil Nadu.",
      "Certified practitioner in Kshara Sutra ano-rectal surgical ligation.",
      "Member of State Board of Ayurvedic Practitioners.",
      "Adviser on classical herb preservation and organic pharmaceutical standards."
    ]
  }
];
