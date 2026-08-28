export interface TeamMember {
  slug: string;
  name: string;
  role?: string;
  qualification?: string;
  speciality?: string;
  image: string;
  bio?: string;
  category?: 'practitioner' | 'support';
}

export const teamData: TeamMember[] = [
  {
    slug: "jeevan",
    name: "Jeevan",
    role: "Panchakarma Therapist",
    qualification: "Diploma in Ayurveda Nursing & Panchakarma Therapy",
    image: "/images/team/jeevan.jpg",
    bio: "Specializes in constitutional analysis, pulse diagnosis, and traditional Panchakarma detoxification regimens.",
    category: "practitioner"
  },
  {
    slug: "sumith",
    name: "Sumith",
    role: "Panchakarma Therapist",
    qualification: "Diploma in Ayurveda Nursing & Panchakarma Therapy",
    image: "/images/team/sumith.jpg",
    bio: "Focuses on stress relief, metabolic disorders, and combining therapeutic yoga with classical Ayurvedic diets.",
    category: "practitioner"
  },
  {
    slug: "sreelekha",
    name: "Sreelekha",
    role: "Panchakarma Therapist",
    qualification: "Diploma in Ayurveda Nursing & Panchakarma Therapy",
    image: "/images/team/sreelekha.jpg",
    bio: "Dedicated to female wellness, hormonal balance treatments, and traditional Ayurvedic maternal recovery.",
    category: "practitioner"
  },
  {
    slug: "aswani",
    name: "Aswani",
    role: "Panchakarma Therapist",
    qualification: "Diploma in Ayurveda Nursing & Panchakarma Therapy",
    image: "/images/team/aswani.jpg",
    bio: "Expert coordinator of therapeutic oil procedures, steam treatments, and orthopedic muscle rehabilitation.",
    category: "practitioner"
  },
  {
    slug: "mugilan",
    name: "Mugilan",
    role: "Healthcare Technician",
    speciality: "Patient Care & Therapy Support",
    image: "/images/team/mugilan.jpg",
    bio: "Coordinates and assists in delivering therapeutic procedures, ensuring patient comfort, sterile treatment environments, and seamless clinical operations.",
    category: "support"
  }
];
