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
    image: "/images/dr-geetha.jpg",
    bio: [
      "Dr. Geetha Jayapal graduated with a B.A.M.S degree, dedicating her clinical life to standardizing Ayurvedic treatments.",
      "She is a highly respected member of the South Indian Ayurvedic medical community, recognized for her success in treating Bone and joint disorders, Neurological disorders, Rehabilation and Aesthetic ayurveda and skin health.",
      "For 25+ years, she has personally diagnosed and treated over 10,000 patients, offering a root-cause purification path that integrates traditional Panchakarma, specialized diet regimes, and custom-blended herbal formulations."
    ],
    videoUrl: "/videos/founder.mp4",
    achievements: [
      "Recognized for Healthcare Excellence and Women Entrepreneurship in Krishnagiri District.",
      "Spearheaded pioneering clinical research in Ayurvedic solutions for PCOS & Endometriosis.",
      "Organized 50+ free health awareness and wellness screening camps in Tamil Nadu.",
      "Certified practitioner in Aesthetic ayurvedic medicine and procedures.",
      "Member of State Board of Ayurvedic Practitioners.",
      "Recipient of South Indian Women Achievers Award (SIWAA) - 2026."
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
  },
  {
    slug: "dr-apeetha-srinivas",
    name: "Dr. Apeetha Srinivas",
    title: "Ayurvedic physician",
    qualification: "B.A.M.S, M.D. (Ayurveda – Kayachikitsa)",
    experience: "7+ Years",
    speciality: "Ayurveda – Kayachikitsa",
    image: "/images/team/dr-apeetha.jpeg",
    bio: [
      "Dr. Apeetha Srinivas, BAMS, M.D. (Ayurveda – Kayachikitsa), DNV, is an Ayurvedic physician and MD specialist with clinical experience since 2018.",
      "She specializes in general medicine, chronic lifestyle disorders, digestive and metabolic health, women's wellness, fertility care, and Panchakarma.",
      "She also has experience in telemedicine, clinical research, and academic publications."
    ],
    videoUrl: "",
    achievements: [
      "Silver Medialist in M.D",
      "Specialized training in Nadi Vigyan",
      "Clinical experience across OPD, IPD, and Panchakarma",
      // "Contributions to clinical research and academic publications",
      "Expertise in chronic and complex health conditions"
    ]
  }
];
