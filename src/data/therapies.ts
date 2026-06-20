export interface Therapy {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  benefits: string[];
  procedure: string[];
  duration: string;
  whoShouldTake: string[];
  faqs: { question: string; answer: string }[];
}

export const therapiesData: Therapy[] = [
  {
    slug: "panchakarma",
    title: "Panchakarma",
    tagline: "The Ultimate Five-Fold Ayurvedic Detoxification and Rejuvenation",
    overview: "Panchakarma is the crown jewel of Ayurvedic medicine. It is a comprehensive, scientific system of deep cellular purification that goes beyond surface cleansing. Literally meaning 'Five Actions', Panchakarma systematically mobilizes fat-soluble toxins (Ama) from deep tissues, channels them to the gastrointestinal tract, and eliminates them from the body. Under the supervision of Dr. Geetha Jayapal, our therapies are tailored to restore balance to your unique bio-energetic constitution (Doshas).",
    benefits: [
      "Purges deep-seated environmental, dietary, and metabolic toxins",
      "Restores natural digestive fire (Agni) and strengthens metabolic functions",
      "Slows down cellular aging and rejuvenates skin and tissues",
      "Balances the nervous system, relieving mental stress and anxiety",
      "Reboots the immune system, improving resistance to chronic diseases"
    ],
    procedure: [
      "Purva Karma (Preparatory phase): Snehana (internal/external oiling) and Swedana (herbal steam) to loosen and liquefy deep toxins",
      "Pradhana Karma (Main elimination phase): Vamana (emesis), Virechana (purgation), Basti (enemas), Nasya (nasal detox), and Rakthamokshana (blood purification)",
      "Paschat Karma (Post-treatment phase): Sansarjana Krama (gradual diet restructuring) and Rasayana (rejuvenative herbs) to rebuild tissue strength"
    ],
    duration: "7 to 21 Days (1.5 to 2.5 hours per daily session)",
    whoShouldTake: [
      "Individuals suffering from chronic autoimmune or metabolic conditions",
      "Those experiencing fatigue, digestive sluggishness, or brain fog",
      "People looking to reverse the physical impact of chronic stress",
      "Anyone seeking a healthy seasonal reset for preventive wellness"
    ],
    faqs: [
      {
        question: "Is Panchakarma a standard spa massage therapy?",
        answer: "No. Panchakarma is a clinical, medically supervised process. Unlike a relaxation massage, it involves specific diagnostic stages, pre-treatment preparations (like drinking warm medicated ghee), strict dietary rules, and internal elimination procedures designed to target systemic illnesses and cleanse the tissues at a cellular level."
      },
      {
        question: "Are there any diet restrictions during Panchakarma?",
        answer: "Yes, dietary rules are critical. During treatment, the digestive fire is delicate. Patients are placed on a warm, easily digestible diet, primarily consisting of fresh Kitchari (a spiced rice and lentil dish), warm water, and herbal decoctions. Cold food, carbonated drinks, caffeine, and heavy meals are strictly prohibited."
      }
    ]
  },
  {
    slug: "abhyangam",
    title: "Abhyangam",
    tagline: "Synchronized Medicated Oil Massage for Longevity and Vitality",
    overview: "Abhyangam is the classic Ayurvedic full-body oil massage. Performed by trained therapists using warm, medicated oils selected based on your body constitution, this therapy involves synchronized rhythmic strokes that stimulate energy pathways (Marmas). It is designed to improve lymphatic drainage, nourish the skin, and release physical tension, making it an essential treatment for daily wellness.",
    benefits: [
      "Nourishes and tones all body tissues (Dhatus), boosting skin elasticity",
      "Improves joint lubrication, reducing stiffness and arthritis pain",
      "Enhances lymphatic circulation and speeds up waste removal",
      "Calms Vata dosha, reducing mental agitation and encouraging deep sleep",
      "Relieves muscle fatigue, soreness, and physical exhaustion"
    ],
    procedure: [
      "Selecting specific medicated oils (e.g., Dhanwantharam, Mahanarayana, Sahacharadi)",
      "Gentle warming of the selected oils to body temperature",
      "Rhythmic massage in seven distinct body postures under uniform pressure",
      "A brief period of rest followed by a warm herbal steam bath to assist oil absorption"
    ],
    duration: "45 to 60 Minutes",
    whoShouldTake: [
      "People with general body pain, stiff joints, or muscle fatigue",
      "Individuals experiencing dry skin, sleep issues, or anxiety",
      "Athletes looking for muscle recovery and joint flexibility",
      "Those wishing to maintain overall strength and slow down aging"
    ],
    faqs: [
      {
        question: "How often can I receive an Abhyangam treatment?",
        answer: "For general wellness and stress relief, once or twice a week is ideal. If you are undergoing clinical treatment for joint disorders, back pain, or nervous exhaustion, a daily course of 7 to 14 days under doctor's guidance is recommended."
      },
      {
        question: "Why does Ayurveda emphasize hot oils for massages?",
        answer: "Warm oil penetrates the skin layers more effectively than cold oil. Warmth expands body channels (Srotas), allowing the therapeutic properties of the herbs to absorb into the bloodstream and tissues, while immediately pacifying Vata (which is cold and dry by nature)."
      }
    ]
  },
  {
    slug: "shirodhara",
    title: "Shirodhara",
    tagline: "The Gentle Flow of Serenity for Brain and Nervous Rejuvenation",
    overview: "Shirodhara is a deeply relaxing Ayurvedic therapy where a continuous, gentle stream of warm medicated liquid (oil, decoction, milk, or buttermilk) is poured onto the forehead, specifically over the third eye region (Ajna Chakra). This constant, rhythmic pressure induces a state of deep meditation, calming the nervous system, reducing mental stress, and restoring mental clarity.",
    benefits: [
      "Calms the nervous system, shifting it from fight-or-flight to rest-and-digest",
      "Relieves chronic insomnia and improves quality of sleep",
      "Alleviates chronic headaches, migraines, and mental exhaustion",
      "Improves memory, focus, and emotional self-regulation",
      "Nourishes hair roots and prevents premature hair graying"
    ],
    procedure: [
      "The patient lies down on a wooden massage table in a quiet room",
      "A brief head and neck massage is performed with warm oil",
      "A Shirodhara pot is positioned directly above the forehead",
      "A warm, steady stream of medicated liquid is poured onto the forehead, moving gently in a rhythmic sway"
    ],
    duration: "45 to 60 Minutes",
    whoShouldTake: [
      "Individuals suffering from chronic stress, anxiety, or burnout",
      "Those dealing with insomnia or restless sleep patterns",
      "Migraine and tension headache sufferers",
      "People looking to improve focus and mental performance"
    ],
    faqs: [
      {
        question: "Will Shirodhara make me fall asleep during the treatment?",
        answer: "It is very common. The rhythmic flow induces alpha and theta brain waves, associated with deep relaxation, meditation, and light sleep. Most patients enter a deeply peaceful, semi-conscious state, waking up refreshed."
      },
      {
        question: "What liquids are used in Shirodhara?",
        answer: "We select the liquid based on your condition. Medicated oils (Tailadhara) are used for stress and nervous disorders. Medicated buttermilk (Takradhara) is selected for heat, skin issues, and insomnia. Medicated milk (Ksheeradhara) is chosen for anxiety, and herbal decoctions (Kashayadhara) are used for headaches."
      }
    ]
  },
  {
    slug: "takra-dhara",
    title: "Takra Dhara",
    tagline: "Cooling Nectar for Inflammatory Conditions and Scalp Health",
    overview: "Takra Dhara is a variant of Shirodhara where specially prepared medicated buttermilk (Takra) infused with cooling herbs like Amalaki (Indian Gooseberry) is poured over the forehead in a continuous stream. It is a highly cooling therapy designed to reduce excess internal heat, soothe inflammatory conditions, and improve skin and scalp health.",
    benefits: [
      "Cools the head and brain, pacifying aggravated Pitta dosha",
      "Highly effective for treating psoriasis, eczema, and scalp dermatitis",
      "Alleviates insomnia, hot flashes, and stress-related fatigue",
      "Relieves burning sensations in the eyes, hands, and feet",
      "Helps manage hypertension by calming the mind"
    ],
    procedure: [
      "Boiling buttermilk with specific herbs (such as Amalaki and Musta)",
      "Filtering the mixture to obtain a smooth, medicated liquid",
      "Pouring the cool-to-warm liquid onto the forehead in a continuous stream, similar to Shirodhara",
      "A gentle scalp wash with warm water at the end of the session"
    ],
    duration: "45 to 60 Minutes",
    whoShouldTake: [
      "Psoriasis, eczema, and scalp irritation sufferers",
      "Individuals experiencing extreme stress, insomnia, or burning sensations",
      "Women dealing with menopausal hot flashes and mood swings",
      "People with hypertension or chronic anger/irritability"
    ],
    faqs: [
      {
        question: "How does buttermilk help in psoriasis?",
        answer: "Psoriasis involves a Pitta-Kapha imbalance, resulting in heat and rapid skin turnover. Buttermilk has natural lactic acid, cooling, and moisturizing qualities. When infused with herbs, it helps soothe skin irritation, reduces scale build-up, and decreases inflammation."
      },
      {
        question: "Is Takra Dhara done at room temperature?",
        answer: "Yes, it is typically served at room temperature or lukewarm, as its primary purpose is to cool down the body and calm Pitta. It is not served hot."
      }
    ]
  },
  {
    slug: "pizhichil",
    title: "Pizhichil",
    tagline: "The Royal Treatment: Warm Oil Bath for Muscle and Nerve Regeneration",
    overview: "Historically reserved for kings and royalty, Pizhichil is a premium therapy that combines oil massage (Snehana) and heat therapy (Swedana). Warm, medicated oils are squeezed from a clean cotton cloth onto the patient's body in a continuous stream while therapists perform a synchronized massage. It is highly rejuvenative and effective for neurological disorders, muscle wasting, and joint pain.",
    benefits: [
      "Deeply nourishes and strengthens the nervous system",
      "Speeds up muscle regeneration and improves physical strength",
      "Relieves chronic pain, joint stiffness, and arthritis symptoms",
      "Enhances blood circulation and cellular metabolism",
      "Deeply moisturizes the skin and helps eliminate metabolic waste"
    ],
    procedure: [
      "Warm medicated oils are poured onto the body from a height of few inches",
      "Therapists squeeze oil from soaked cotton cloths in a synchronized pattern",
      "A gentle massage is performed alongside the pouring of oil",
      "The body is kept warm, followed by a warm bath to wash off excess oil"
    ],
    duration: "60 to 75 Minutes",
    whoShouldTake: [
      "Patients recovering from stroke, paralysis, or neurological conditions",
      "Individuals suffering from osteoarthritis or muscular dystrophy",
      "Those experiencing severe physical weakness or chronic fatigue",
      "People looking for a premium full-body rejuvenation treatment"
    ],
    faqs: [
      {
        question: "Why is Pizhichil called the 'royal oil bath'?",
        answer: "Historically, this treatment required large quantities of expensive herbal oils (up to 3-4 liters per session) and a team of coordinated therapists, making it a luxury reserved for kings. Today, it remains one of the most effective and luxurious therapies in Ayurveda."
      },
      {
        question: "Can Pizhichil be performed during fever or acute inflammation?",
        answer: "No. Pizhichil is highly nourishing and warming. It should not be done during fever, acute indigestion, active inflammatory joint swelling, or infectious conditions, as it can worsen these symptoms."
      }
    ]
  },
  {
    slug: "kizhi",
    title: "Kizhi (Podikizhi / Elakizhi / Njavarakizhi)",
    tagline: "Warm Herbal Bolus Therapy for Pain Relief and Inflammation",
    overview: "Kizhi is a popular Ayurvedic therapy where fresh leaves, dry herbal powders, or specialty rice (Njavara) are tied into linen bags (boluses), dipped in warm medicated oil, and gently massaged over the body. The combination of heat, pressure, and active herbal ingredients relieves pain, reduces inflammation, and improves joint mobility.",
    benefits: [
      "Provides rapid relief from acute back pain, neck pain, and joint stiffness",
      "Reduces localized swelling, water retention, and inflammation",
      "Nourishes muscles and improves skin texture (especially Njavarakizhi)",
      "Stimulates local blood circulation and nerve ending sensitivity",
      "Relieves chronic muscle spasms and tension"
    ],
    procedure: [
      "Tying specific ingredients (herbal powders, leaves, or rice) into linen bags",
      "Warming the boluses in a pan of medicated oil",
      "Massaging and tapping the boluses over painful joints and muscles",
      "Keeping the body warm and relaxed after the session"
    ],
    duration: "45 to 60 Minutes",
    whoShouldTake: [
      "Individuals suffering from arthritis, cervical/lumbar spondylosis, or sciatica",
      "People with acute muscle spasms, joint stiffness, or sprains",
      "Those recovering from sports injuries",
      "Elderly patients seeking joint lubrication and pain relief"
    ],
    faqs: [
      {
        question: "What is the difference between Elakizhi and Podikizhi?",
        answer: "Elakizhi uses fresh medicinal leaves (like castor, tamarind, and neem) and is highly effective for joint pain and nerve disorders. Podikizhi uses dry herbal powders (like Rasnadi and Kolakulathadi) and is preferred when there is swelling, water retention, or Kapha congestion."
      },
      {
        question: "Is the massage painful?",
        answer: "No. The therapist applies gentle tapping and sweeping motions. The warmth is carefully checked against your skin, and the treatment is designed to relieve pain, not cause discomfort."
      }
    ]
  },
  {
    slug: "nasya",
    title: "Nasya",
    tagline: "Nasal Administration of Medicine for Head and Neck Rejuvenation",
    overview: "Nasya is one of the five primary Panchakarma treatments. It involves administering medicated oils, powders, or juices through the nasal passages. In Ayurveda, the nose is considered the gateway to the brain. Nasya cleanses the head and sinuses, improves respiratory function, and rejuvenates sensory organs, making it key for head-related ailments.",
    benefits: [
      "Clears sinus congestion and relieves chronic sinusitis and allergies",
      "Reduces the frequency and intensity of migraines and headaches",
      "Improves respiratory health and eases breathing",
      "Nourishes sensory organs, improving vision, smell, and hearing",
      "Helps manage thyroid issues, sleep disorders, and hormonal imbalances"
    ],
    procedure: [
      "Gentle massage of the face, forehead, and neck with warm oil",
      "Application of local steam to loosen mucus in the sinuses",
      "Gently placing medicated drops (such as Anu Taila) into each nostril",
      "Massaging the soles of the feet and palms, followed by warm water gargling"
    ],
    duration: "30 Minutes",
    whoShouldTake: [
      "People suffering from chronic sinusitis, allergic rhinitis, or asthma",
      "Migraine and chronic headache sufferers",
      "Individuals experiencing sleep issues or thyroid imbalances",
      "Those looking to improve mental focus and sensory health"
    ],
    faqs: [
      {
        question: "Why is Nasya considered effective for brain health?",
        answer: "The nasal cavity is close to the brain and olfactory nerves. Medicated oils administered through Nasya are absorbed by the mucous membranes, reaching the central nervous system to help calm stress and regulate hormones."
      },
      {
        question: "Can I do Nasya at home?",
        answer: "Under professional guidance, a mild form of Nasya called Pratimarsha Nasya (using 1-2 drops of oil in each nostril daily) is safe for home use. Deep therapeutic Nasya (Pradhamana or Shodhana) requires clinical supervision."
      }
    ]
  },
  {
    slug: "basti",
    title: "Basti",
    tagline: "Medicated Enema Therapy: The Master Regulator of Vata Dosha",
    overview: "Basti is considered the most powerful Panchakarma treatment, often called 'half of all Ayurvedic treatments'. It involves introducing medicated oils, decoctions, or milk mixtures into the colon. Since the colon is the primary seat of Vata dosha (which governs movement, nervous system, and joints), Basti is highly effective for neurological, joint, and digestive disorders.",
    benefits: [
      "Balances Vata dosha, addressing the root cause of many chronic diseases",
      "Relieves chronic constipation, bloating, and irritable bowel symptoms",
      "Strengthens the colon wall and improves nutrient absorption",
      "Reduces chronic back pain, sciatica, and joint degeneration",
      "Detoxifies the body and supports immune system health"
    ],
    procedure: [
      "Sneha Basti (using warm medicated oil) or Niruha Basti (using an herbal decoction mixture)",
      "A gentle abdominal and lower back massage with warm oil, followed by steam",
      "Gently introducing the medicated liquid into the rectum using a sterile catheter",
      "The patient rests, allowing the medicine to absorb before excretion"
    ],
    duration: "30 to 45 Minutes",
    whoShouldTake: [
      "Patients with chronic joint conditions (arthritis, sciatica, back pain)",
      "Individuals suffering from chronic constipation, gas, or IBS",
      "People experiencing neurological issues or chronic fatigue",
      "Women with hormonal imbalances or fertility concerns"
    ],
    faqs: [
      {
        question: "Is Basti the same as a water enema?",
        answer: "No. A conventional enema only flushes out waste from the rectum. Basti uses herb-infused oils and decoctions that are held in the colon, allowing the body to absorb nutrients and active compounds that nourish the nervous system and tissues."
      },
      {
        question: "Is Basti painful?",
        answer: "It is completely painless. We use soft, sterile catheters and warm oils, and the administration is slow and gentle. Most patients feel only a mild urge to evacuate once the session is complete."
      }
    ]
  },
  {
    slug: "virechana",
    title: "Virechana",
    tagline: "Therapeutic Purgation: The Ultimate Cleanse for Pitta and Blood",
    overview: "Virechana is a primary Panchakarma therapy that involves medicated purgation to eliminate toxins from the liver, gallbladder, and small intestine. It is the most effective therapy for balancing Pitta dosha and purifying the blood, making it highly beneficial for skin disorders, metabolic issues, and inflammatory conditions.",
    benefits: [
      "Purges accumulated toxins from the liver and digestive system",
      "Cleanses the blood, helping clear chronic skin conditions",
      "Improves digestion, metabolism, and nutrient absorption",
      "Reduces chronic inflammation and internal body heat",
      "Helps regulate hormone levels and supports weight management"
    ],
    procedure: [
      "Snehapana: Drinking warm medicated ghee in increasing doses daily",
      "Abhyangam & Swedana: Full-body massage and steam to mobilize toxins",
      "Virechana: Administering herbal purgatives to induce controlled elimination",
      "Sansarjana Krama: Following a gradual post-detox diet to rebuild digestion"
    ],
    duration: "7 to 15 Days (with 1 full elimination day)",
    whoShouldTake: [
      "People with chronic skin issues (acne, psoriasis, eczema)",
      "Individuals experiencing acidity, liver disorders, or metabolic issues",
      "Those looking to balance Pitta dosha and reduce internal heat",
      "Anyone seeking a comprehensive digestive and blood cleanse"
    ],
    faqs: [
      {
        question: "Why do I need to drink medicated ghee before Virechana?",
        answer: "Medicated ghee (Snehapana) acts as a vehicle to loosen and collect fat-soluble toxins from deep tissues, bringing them down to the digestive tract. It also protects the gastrointestinal lining during the purgation process."
      },
      {
        question: "How will I feel after the elimination day?",
        answer: "On the day of purgation, you will experience several bowel movements. Afterward, you will feel light, energetic, and experience improved digestion. It is crucial to rest and follow the recovery diet."
      }
    ]
  },
  {
    slug: "netra-tarpanam",
    title: "Netra Tarpanam",
    tagline: "Nourishing Eye Bath for Visual Rejuvenation and Screen Stress",
    overview: "Netra Tarpanam is a specialized Ayurvedic treatment for the eyes. A wall of black gram dough is built around the eye sockets, and warm medicated ghee (usually Triphala Ghrita) is gently poured inside. This deeply lubricates the eyes, strengthens visual tissues, and relieves strain caused by screen exposure.",
    benefits: [
      "Deeply lubricates the eyes, relieving dryness and irritation",
      "Strengthens the extraocular muscles and optic nerves",
      "Reduces eye strain, redness, and fatigue from screen use",
      "Helps slow down vision changes and macular degeneration",
      "Nourishes the surrounding skin, reducing dark circles"
    ],
    procedure: [
      "Creating rings of black gram dough around both eye sockets",
      "Gently pouring warm medicated ghee into the rings",
      "The patient opens and blinks their eyes in the ghee for 10-15 minutes",
      "Removing the dough and wiping the area, followed by a gentle head massage"
    ],
    duration: "30 to 45 Minutes",
    whoShouldTake: [
      "Professionals spending long hours working on computers",
      "Individuals suffering from dry eye syndrome or blurred vision",
      "Those experiencing eye strain, burning, or redness",
      "Anyone looking to maintain and protect their vision"
    ],
    faqs: [
      {
        question: "Will the ghee blur my vision?",
        answer: "During the treatment, you will see a golden, oily blur, which is completely normal. After the ghee is removed and your eyes are wiped, your vision will return to normal, and your eyes will feel refreshed and relaxed."
      },
      {
        question: "Is Netra Tarpanam safe for contact lens wearers?",
        answer: "Yes, but contact lenses must be removed before the treatment and should not be worn for a few hours afterward. We recommend wearing glasses during this period."
      }
    ]
  }
];
