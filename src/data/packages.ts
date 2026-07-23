export interface TreatmentPackage {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  includes: string[];
  popular: boolean;
  linkUrl: string;
}

export const treatmentPackages: TreatmentPackage[] = [
  {
    id: "panchakarma-detox",
    name: "Panchakarma Detox & Rejuvenation",
    duration: "14 - 21 Days",
    price: "From ₹45,000",
    description: "Our flagship purification program combining personalized Purvakarma (preparation), main detox therapies, and custom meals under medical supervision.",
    includes: ["Full Panchakarma protocol", "Inpatient room stay options", "Custom organic meals", "Daily health monitoring"],
    popular: true,
    linkUrl: "/therapies/panchakarma"
  },
  {
    id: "pain-management-program",
    name: "Pain Management Program",
    duration: "7 - 10 Days",
    price: "From ₹22,000",
    description: "Relief from chronic pain, back spasm, sciatica, and nerve issues via hot oil pooling (Basti), herbal poultices (Kizhi), and natural medicines.",
    includes: ["Specialist consultation", "Daily Kati/Griva Basti", "Patra Pinda Sweda (Kizhi)", "Nervine tonic formulations"],
    popular: false,
    linkUrl: "/specialities/pain-management"
  },
  {
    id: "spine-joint-care-program",
    name: "Spine & Joint Care Program",
    duration: "10 - 14 Days",
    price: "From ₹28,000",
    description: "Rehabilitate degenerating discs, arthritic knees, spondylosis, and frozen shoulder. Rebuilds joint lubrication and strengthens spinal ligaments.",
    includes: ["Joint degeneration assessment", "Janu/Kati Basti sessions", "Synchronized Abhyangam", "Bone-strengthening herbs"],
    popular: false,
    linkUrl: "/specialities/spine-joint-care"
  },
  {
    id: "proctology-care-package",
    name: "Proctology Care Package",
    duration: "7 - 14 Days",
    price: "From ₹25,000",
    description: "Specialized, non-surgical relief for hemorrhoids, fissures, and fistulas featuring the highly effective, minimally invasive Kshara Sutra therapy.",
    includes: ["Compassionate diagnosis", "Kshara Sutra ligation", "Warm herbal sitz baths", "Bowel regulation diets"],
    popular: false,
    linkUrl: "/specialities/ano-rectal-care"
  },
  {
    id: "neurological-rehabilitation-program",
    name: "Neurological Rehabilitation Program",
    duration: "14 - 28 Days",
    price: "From ₹38,000",
    description: "Comprehensive recovery support for post-stroke hemiplegia, facial palsy, neuropathy, and balance disorders. Rebuilds neuromotor control.",
    includes: ["Motor reflex evaluations", "Nasya & head Shirodhara", "Pizhichil (royal oil bath)", "Physiotherapy coordination"],
    popular: false,
    linkUrl: "/specialities/neurological-rehabilitation"
  },
  {
    id: "womens-wellness-program",
    name: "Women's Wellness Program",
    duration: "10 - 14 Days",
    price: "From ₹24,000",
    description: "Hormonal balance correction for PCOS, fertility preparation, menstrual cramps, uterine support, and menopausal comfort.",
    includes: ["Gynecological consult", "Hormone balancing Basti", "Custom organic diet plans", "Hormone regulation teas"],
    popular: false,
    linkUrl: "/specialities/womens-wellness"
  },
  {
    id: "lifestyle-disease-management-program",
    name: "Lifestyle Disease Management Program",
    duration: "7 - 14 Days",
    price: "From ₹18,000",
    description: "Correct metabolic sluggishness to control Type 2 Diabetes, regulate high blood pressure, clear fatty liver, and support weight loss.",
    includes: ["Metabolic speed assessment", "Udwarthanam dry massage", "Internal Virechana detox", "Daily yoga & exercise plans"],
    popular: false,
    linkUrl: "/specialities/lifestyle-disease-management"
  },
  {
    id: "mental-health-emotional-wellness-program",
    name: "Mental Health & Emotional Wellness Program",
    duration: "7 - 10 Days",
    price: "From ₹20,000",
    description: "Recover from anxiety, chronic stress, burnout, and insomnia. Combines calming Shirodhara, breathing exercises, and emotional counseling.",
    includes: ["Satvajaya Chikitsa consult", "Calming Shirodhara flows", "Guided mindfulness sessions", "Nervine adaptogen tonics"],
    popular: false,
    linkUrl: "/specialities/mental-wellness"
  },
  {
    id: "post-operative-rehab-care",
    name: "Post Operative & Rehabilitation Care",
    duration: "10 - 14 Days",
    price: "From ₹26,000",
    description: "Recover mobility, strength, and confidence after knee replacement, spinal surgery, or fractures. Combines manual rehab and healing oils.",
    includes: ["Biomechanical evaluation", "Targeted physical therapy", "Pain relieving Abhyangam", "Cartilage nutrition diet"],
    popular: false,
    linkUrl: "/specialities/post-operative-care"
  }
];
