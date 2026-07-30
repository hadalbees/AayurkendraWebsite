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
    title: "Founder & Senior Ayurveda Consultant",
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
  },
  {
    slug: "dr-dhanavanth",
    name: "Dr. Dhanavanth",
    title: "Proctologist & Ano-Rectal Surgeon",
    qualification: "B.A.M.S, M.S. (Shalya Tantra)",
    experience: "10+ Years",
    speciality: "Kshara Sutra Therapy, Piles, Fissure & Fistula Management",
    image: "/images/team/dr-dhanavanth.jpg",
    bio: [
      "Dr. Dhanavanth is a highly skilled Ayurvedic surgeon specializing in Shalya Tantra (Ano-rectal surgery) and the minimally invasive Kshara Sutra therapy.",
      "He has successfully treated numerous patients suffering from complex and recurrent ano-rectal conditions such as fistula-in-ano, hemorrhoids (piles), and anal fissures, utilizing specialized medicated thread ligation.",
      "With a focus on root-cause resolution, minimal recurrence, and post-procedural recovery, Dr. Dhanavanth combines classical surgical methodologies with modern diagnostics to deliver optimal patient outcomes."
    ],
    videoUrl: "",
    achievements: [
      "Successfully completed over 1,500+ successful Kshara Sutra procedures for complex fistulas.",
      "Specialist in treating high-anal and recurrent fistulas with minimal downtime.",
      "Active member of the Association of Shalya Tantra (Ayurvedic Surgeons of India).",
      "Presented clinical papers on advanced Kshara Sutra techniques in national medical symposiums."
    ]
  }
];
