export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  qualification?: string;
  speciality?: string;
  image: string;
  bio?: string;
}

export const teamData: TeamMember[] = [
  {
    slug: "jeevan",
    name: "Jeevan",
    role: "Resident Medical Officer",
    qualification: "B.A.M.S",
    speciality: "General Consultations & Panchakarma",
    image: "/images/team/jeevan.jpg",
    bio: "Specializes in constitutional analysis, pulse diagnosis, and traditional Panchakarma detoxification regimens."
  },
  {
    slug: "smith",
    name: "Smith",
    role: "Senior Consultant & Yoga Therapist",
    qualification: "B.A.M.S, YIC",
    speciality: "Lifestyle Medicine & Stress Management",
    image: "/images/team/smith.jpg",
    bio: "Focuses on stress relief, metabolic disorders, and combining therapeutic yoga with classical Ayurvedic diets."
  },
  {
    slug: "sreelaka",
    name: "Sreelaka",
    role: "Women's Health Specialist",
    qualification: "B.A.M.S",
    speciality: "Gynecology & Postnatal Care",
    image: "/images/team/sreelaka.jpg",
    bio: "Dedicated to female wellness, hormonal balance treatments, and traditional Ayurvedic maternal recovery."
  },
  {
    slug: "aswin",
    name: "Aswin",
    role: "Chief Panchakarma Therapist",
    qualification: "D.Ay (Diploma in Ayurveda)",
    speciality: "Therapeutic Massages & Marma Therapy",
    image: "/images/team/aswin.jpg",
    bio: "Expert coordinator of therapeutic oil procedures, steam treatments, and orthopedic muscle rehabilitation."
  }
];
