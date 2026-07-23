export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-panchakarma",
    title: "Understanding Panchakarma: The 5 Cleansing Actions",
    excerpt:
      "Learn how the ancient system of Panchakarma systematically purges metabolic toxins and environmental impurities from deep body tissues.",
    category: "Panchakarma",
    readTime: "6 min read",
    date: "June 12, 2026",
    author: "Dr. Geetha Jayapal",
    content: [
      "Panchakarma is the cornerstone of Ayurvedic detoxification. Literally meaning 'five actions', it is a medically supervised process designed to eliminate accumulated toxins (Ama) from deep tissues and restore balance to your unique constitution.",
      "The five primary elimination procedures include Vamana (therapeutic emesis), Virechana (purgation), Basti (medicated enema), Nasya (nasal administration), and Rakthamokshana (blood purification). Each is selected based on your Prakriti, Vikriti, and clinical condition.",
      "At Aayur Kendra, Panchakarma begins with Purva Karma — internal and external oleation (Snehana) and herbal steam (Swedana) to mobilize toxins. This preparatory phase is critical for safe and effective elimination.",
      "Post-treatment, Paschat Karma involves gradual dietary restructuring (Sansarjana Krama) and Rasayana herbs to rebuild tissue strength. This ensures lasting benefits rather than temporary relief.",
      "If you are experiencing chronic fatigue, digestive issues, autoimmune conditions, or seasonal health decline, a clinical Panchakarma consultation can help determine the right protocol for your body.",
    ],
  },
  {
    slug: "ayurvedic-guide-pcos",
    title: "Ayurvedic Guide to Managing PCOS and Hormonal Acne",
    excerpt:
      "Discover diet charts, herbal formulations, and cleansing therapies designed to regulate ovulatory cycles and clear skin naturally.",
    category: "Women's Wellness",
    readTime: "8 min read",
    date: "June 08, 2026",
    author: "Dr. Geetha Jayapal",
    content: [
      "Polycystic Ovary Syndrome (PCOS) is increasingly common among women of reproductive age. In Ayurveda, it is understood as a Kapha-Vata imbalance affecting Agni (digestive fire) and tissue metabolism.",
      "Unlike conventional approaches that often mask symptoms with hormonal contraceptives, Ayurveda addresses root causes through Panchakarma detox, herbal formulations, and lifestyle correction.",
      "Key therapies include Virechana for metabolic purification, Basti for hormonal regulation, and targeted local treatments. Diet plays a central role — warm, light, and easily digestible foods support insulin sensitivity.",
      "For hormonal acne associated with PCOS, blood-purifying herbs and skin-specific Lepa (face masks) combined with internal medicine can significantly reduce breakouts over 2-3 months of consistent care.",
      "At Aayur Kendra's Women's Wellness wing, every treatment plan is personalized after detailed Prakriti analysis and hormonal history assessment.",
    ],
  },
  {
    slug: "dinacharya-daily-rhythms",
    title: "Dinacharya: The Healing Power of Daily Rhythms",
    excerpt:
      "Small lifestyle switches—from early morning wakeups and tongue scraping to oil pulling—can transform digestive health and mental clarity.",
    category: "Lifestyle Medicine",
    readTime: "5 min read",
    date: "May 28, 2026",
    author: "Dr. Geetha Jayapal",
    content: [
      "Dinacharya — the Ayurvedic daily routine — aligns your biological clock with nature's rhythms. This simple yet powerful practice is the foundation of preventive healthcare.",
      "Begin your day before sunrise with warm water, tongue scraping (Jihwa Prakshalana), and oil pulling (Gandusha). These practices remove overnight toxins and stimulate digestive fire.",
      "Abhyangam (self-massage with warm sesame or coconut oil) before bathing nourishes tissues, calms Vata, and improves circulation. Even 5-10 minutes makes a measurable difference.",
      "Eat your largest meal at midday when Agni is strongest. Avoid heavy dinners and late-night eating, which disrupt sleep and metabolic function.",
      "Establish a consistent sleep schedule — ideally by 10 PM — to support cellular repair and mental clarity. Combined with Pranayama, Dinacharya can prevent many lifestyle diseases before they manifest.",
    ],
  },
];
