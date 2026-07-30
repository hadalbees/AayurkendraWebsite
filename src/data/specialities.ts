export interface Speciality {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  iconName: string;
  conditionsTreated: string[];
  benefits: string[];
  treatmentProcess: string[];
  faqs: { question: string; answer: string }[];
}

export const specialitiesData: Speciality[] = [
  {
    slug: "womens-wellness",
    title: "Women's Wellness",
    tagline: "Empowering Female Health Through Sacred Rhythms",
    iconName: "Heart",
    overview: "In Ayurveda, women are considered the originators of life and the pillars of family and societal health. Our Women's Wellness program, designed by Dr. Geetha Jayapal, offers holistic therapies for every phase of a woman's life journey—from menarche, through pregnancy and postpartum care, to menopause. We combine authentic clinical protocols with dietary and emotional support to treat chronic conditions and rejuvenate vital energy.",
    conditionsTreated: [
      "PCOS / PCOD & Ovulatory Dysfunctions",
      "Menstrual Irregularities (Dysmenorrhea, Oligomenorrhea)",
      "Endometriosis & Adenomyosis",
      "Perimenopausal & Menopausal Syndromes",
      "Infertility & Pre-conception (Garbha Sanskar) Preparation",
      "Post-Partum Rehabilitation (Sootika Paricharya)"
    ],
    benefits: [
      "Restores hormonal balance naturally without synthetic steroids",
      "Enhances fertility and prepares the womb for healthy conception",
      "Relieves debilitating menstrual cramps and heavy bleeding",
      "Alleviates hot flashes, mood swings, and insomnia during menopause",
      "Strengthens pelvic muscles and restores vitality post-delivery"
    ],
    treatmentProcess: [
      "Comprehensive consultation & Prakriti (body constitution) analysis",
      "Hormone-balancing Panchakarma therapies (Virechana, Basti)",
      "Targeted local treatments (Yoni Prakshalana, Uttara Basti)",
      "Custom herbal formulations and nutritional counselling",
      "Restorative Yoga and mindfulness sessions"
    ],
    faqs: [
      {
        question: "How does Ayurveda treat PCOS compared to conventional medicine?",
        answer: "Conventional medicine often uses hormonal contraceptives to mask PCOS symptoms. Ayurveda looks at PCOS as a Kapha-Vata imbalance affecting the digestive fire (Agni) and tissue metabolism (Dhatu Agni). We focus on purifying the body channels, regulating insulin sensitivity, and strengthening the ovaries through Panchakarma, herbal formulations, and dietary changes, offering a long-term root-cause solution."
      },
      {
        question: "When is the best time to start postpartum recovery treatments?",
        answer: "Ayurvedic postpartum care (Sootika Paricharya) can begin 10 to 14 days after a normal delivery, and 3 to 4 weeks after a C-section (once the incision heals). Initial treatments involve gentle herbal oil applications and warm herbal baths to strengthen the mother, expel retained toxins, and support lactation."
      }
    ]
  },
  {
    slug: "lifestyle-disease-management",
    title: "Lifestyle Disease Management",
    tagline: "Restoring Balance to Modern Lifestyles",
    iconName: "Activity",
    overview: "Modern living often violates biological rhythms, resulting in chronic issues like diabetes, hypertension, and obesity. Our integrated medical approach corrects these metabolic disruptions. We don't just manage symptoms; we purge accumulated toxins, retrain metabolic pathways, and establish a daily routine (Dinacharya) that aligns your body with nature.",
    conditionsTreated: [
      "Type 2 Diabetes Mellitus & Insulin Resistance",
      "Hypertension & Cardiovascular Wellness",
      "Dyslipidemia (High Cholesterol)",
      "Obesity & Metabolic Syndrome",
      "Fatty Liver Disease",
      "Chronic Fatigue Syndrome"
    ],
    benefits: [
      "Improves blood glucose control and insulin sensitivity naturally",
      "Regulates blood pressure levels and reduces cardiovascular strain",
      "Supports healthy, sustainable weight loss without extreme fasting",
      "Detoxifies the liver and normalizes lipid profiles",
      "Boosts energy levels, mental clarity, and overall productivity"
    ],
    treatmentProcess: [
      "Evaluation of lifestyle triggers, dietary errors, and stress levels",
      "Metabolic stimulation through Udwarthanam (dry herbal powder massage)",
      "Internal detoxification using Virechana (purgation) and Basti (enema)",
      "Prescription of specific single herbs (like Haridra, Amalaki, Guggulu)",
      "Structuring customized daily activity, diet, and yoga routines"
    ],
    faqs: [
      {
        question: "Can I reduce my diabetes medication with Ayurvedic treatment?",
        answer: "Yes. Many patients with Type 2 Diabetes see significant improvements in insulin sensitivity and HbA1c levels. Under expert supervision, as your blood sugar stabilizes through detox therapies, herbal formulations, and diet, your conventional dosage can often be safely reduced or managed alongside Ayurveda."
      },
      {
        question: "What is Udwarthanam and how does it help in obesity?",
        answer: "Udwarthanam is a deep tissue massage using warm dry herbal powders rubbed in the direction opposite to hair follicles. This friction breaks down adipose (fat) tissue beneath the skin, stimulates lymphatic drainage, improves blood circulation, and boosts skin texture."
      }
    ]
  },
  {
    slug: "ayurvedic-eye-care",
    title: "Ayurvedic Eye Care (Shalakya Tantra)",
    tagline: "Preserving and Restoring Natural Vision",
    iconName: "Eye",
    overview: "With increased screen time, eye strain, dryness, and degenerative visual conditions have risen dramatically. In Ayurveda, Shalakya Tantra is the specialized branch dealing with ailments of the head and eyes. At Aayur Kendra, we employ ancient ocular therapies (Netra Kriya Kalpa) combined with visual hygiene practices to rejuvenate vision, lubricate tissues, and prevent sight-threatening degeneration.",
    conditionsTreated: [
      "Computer Vision Syndrome (CVS) & Digital Eye Strain",
      "Dry Eye Syndrome (Keratoconjunctivitis Sicca)",
      "Diabetic Retinopathy & Hypertensive Retinopathy",
      "Early-stage Cataract & Glaucoma Management",
      "Refractive Errors in Children and Young Adults",
      "Macular Degeneration & Optic Atrophy"
    ],
    benefits: [
      "Relieves burning sensation, redness, and dryness of eyes",
      "Strengthens the extraocular muscles and improves visual focus",
      "Slows down degenerative changes in the retina and optic nerve",
      "Reduces intraocular pressure in glaucoma patients",
      "Soothes visual fatigue caused by prolonged screen work"
    ],
    treatmentProcess: [
      "Detailed visual assessment and history taking",
      "Netra Tarpana (pooling medicated ghee over the eyes)",
      "Netra Seka (irrigation of eyes with herbal decoctions)",
      "Nasya (nasal administration of medicated oils to nurture head channels)",
      "Training in targeted eye exercises and solarization"
    ],
    faqs: [
      {
        question: "What is Netra Tarpana and is it painful?",
        answer: "Netra Tarpana is a highly soothing, completely painless therapy. A wall of black gram dough is built around the eyes, and warm medicated ghee (usually Triphala Ghrita) is gently poured inside. The patient is asked to blink. It deeply lubricates, cleanses, and nourishes the optic nerves and eye muscles."
      },
      {
        question: "How long does a course of eye care treatment take?",
        answer: "For standard digital eye strain, a 7-day course is highly effective. For chronic degenerative conditions like diabetic retinopathy or optic atrophy, we recommend multiple courses of 7-14 days spaced out over a few months, alongside internal rejuvenation herbs (Rasayana)."
      }
    ]
  },
  {
    slug: "ano-rectal-care",
    title: "Ano-Rectal Speciality Care",
    tagline: "Gentle, Non-Surgical Solutions for Sensitive Disorders",
    iconName: "ShieldAlert",
    overview: "Ano-rectal conditions like piles, fissures, and fistulas cause immense physical discomfort and psychological distress. Conventional surgeries often carry risks of recurrence or incontinence. Aayur Kendra offers specialized Ayurvedic ano-rectal care, focusing on bowel regulation, local anti-inflammatory therapies, and the globally acclaimed, minimally invasive Khara Sutra treatment for complex fistulas.",
    conditionsTreated: [
      "Hemorrhoids (Piles) - Bleeding & Non-Bleeding",
      "Anal Fissure (Acute & Chronic)",
      "Fistula-in-Ano & Pilonidal Sinus",
      "Anal Pruritus (Itching) & Perianal Abscess",
      "Chronic Constipation & Bowel Dysfunction"
    ],
    benefits: [
      "Provides non-surgical, pain-relieving options for fissures and early piles",
      "Extremely low recurrence rate for fistulas using Kshara Sutra therapy",
      "Avoids general anesthesia and reduces hospital stay duration",
      "Restores normal digestion and bowel movements naturally",
      "Gentle post-treatment recovery with minimal interruption to daily life"
    ],
    treatmentProcess: [
      "Private and compassionate clinical examination",
      "Local healing therapies including Avagaha Sweda (warm herbal sitz bath)",
      "Kshara Karma (application of alkaline herbal paste for controlled cauterization)",
      "Kshara Sutra (medicated seton ligation) for fistulas/sinuses",
      "Dietary modifications to prevent constipation and strain"
    ],
    faqs: [
      {
        question: "What is Kshara Sutra therapy?",
        answer: "Kshara Sutra is a globally researched Ayurvedic technique where a specially prepared surgical linen thread, coated with latex of Euphorbia antiquorum, Apamarga Kshara, and Haridra powder, is placed in the fistulous tract. The thread cuts, curettes, drains, and heals the tract simultaneously. It has a recurrence rate of less than 1-2%, compared to 20-30% in conventional surgery."
      },
      {
        question: "Is hospitalization required for piles and fissure treatment?",
        answer: "For most mild-to-moderate piles and fissures, outpatient management (consultations, sitz baths, ointments, laxative herbs) is sufficient. Minor surgical procedures like Kshara Sutra require a short day-care admission, allowing the patient to return home the same day."
      }
    ]
  },
  {
    slug: "aesthetic-medicine",
    title: "Ayurvedic Aesthetic Medicine",
    tagline: "Radiating Beauty from the Inside Out",
    iconName: "Sparkles",
    overview: "Ayurveda believes outer beauty is a direct reflection of inner health, clean blood (Raktha), and balanced skin metabolism (Bhrajaka Pitta). Instead of harsh chemical peelings or fillers, our Ayurvedic aesthetic therapies use organic herbs, fresh botanicals, active essential oils, and blood-purifying therapies to reverse aging, treat acne, and restore natural skin and hair vitality.",
    conditionsTreated: [
      "Acne Vulgaris, Blackheads & Inflammatory Pimples",
      "Melasma, Hyperpigmentation & Dark Spots",
      "Premature Aging, Fine Lines & Skin Laxity",
      "Hair Loss, Alopecia Areata & Premature Graying",
      "Dandruff & Scalp Dermatitis",
      "Dark Circles & Puffiness under the eyes"
    ],
    benefits: [
      "Nourishes the skin dermis without exposing it to synthetic chemicals",
      "Purifies blood internally, preventing recurring acne breakouts",
      "Brightens complexion and evens out skin tone naturally",
      "Stimulates hair follicles, encouraging thick and healthy hair growth",
      "Combines detox therapies to provide long-lasting skin glow"
    ],
    treatmentProcess: [
      "Identification of skin type (Vata, Pitta, Kapha) and toxic build-up",
      "Mukha Lepa (herbal face masks tailored to skin type)",
      "Keshya treatments (Shiro Abhyangam, herbal hair wraps, Shirodhara)",
      "Rakthamokshana (bloodletting via leeches for stubborn acne and pigmentation)",
      "Counselling on customized daily organic skincare routines"
    ],
    faqs: [
      {
        question: "How does blood purification relate to skin health?",
        answer: "Ayurveda states that skin diseases are rooted in the impairment of Rasa (plasma) and Rakta (blood) dhatus. Toxins from poor digestion accumulate in these tissues, manifesting as acne, eczema, or pigmentation. Purifying the blood using liver-stimulating herbs and therapies treats the root cause of skin problems."
      },
      {
        question: "Is leech therapy (Jalaukavacharana) safe for acne?",
        answer: "Yes, it is highly safe and sterile. Medical-grade leeches are applied to active acne lesions or pigmented spots. They gently suck out stagnant, toxic blood while injecting saliva containing anti-inflammatory, anesthetic, and blood-thinning compounds, promoting rapid healing and skin regeneration."
      }
    ]
  },
  {
    slug: "yoga-therapy",
    title: "Yoga Therapy",
    tagline: "Uniting Breath, Body, and Mind for Healing",
    iconName: "Flower2",
    overview: "Yoga and Ayurveda are sister sciences originating from the Vedic tradition. While Ayurveda manages the somatic aspects of health, Yoga addresses the energetic and mental patterns. Our Yoga Therapy sessions at Aayur Kendra are not general fitness classes; they are clinically structured, personalized programs designed to support healing for musculoskeletal, cardiovascular, and stress-related conditions.",
    conditionsTreated: [
      "Chronic Back Pain, Sciatica & Herniated Discs",
      "Anxiety Disorders, Depression & Stress",
      "Asthma & Chronic Obstructive Pulmonary Diseases (COPD)",
      "Insomnia & Sleep Apnea",
      "Joint Stiffness & Postural Deformities",
      "Thyroid and Endocrine System Imbalances"
    ],
    benefits: [
      "Increases spinal flexibility and core muscular strength",
      "Calms the sympathetic nervous system and reduces cortisol (stress)",
      "Enhances lung capacity and improves breathing patterns",
      "Aids in pain management and decreases reliance on painkillers",
      "Improves joint range of motion and overall physical coordination"
    ],
    treatmentProcess: [
      "Biomechanical assessment and assessment of breathing patterns",
      "Formulation of a customized Yoga Asana (posture) routine",
      "Pranayama (breath work) tailored to balance specific Doshas",
      "Yoga Nidra (guided yogic sleep) for deep neurological relaxation",
      "Integration of dhyana (meditation) for cognitive clarity"
    ],
    faqs: [
      {
        question: "I am not flexible. Can I still do Yoga Therapy?",
        answer: "Absolutely. Yoga Therapy is tailored to your current physical limits. We use props, chairs, and modifications. Flexibilty is a result of yoga, not a prerequisite. Our therapists design routines specifically suited to your age, mobility, and pathology."
      },
      {
        question: "How does Yoga Therapy work alongside Ayurvedic treatments?",
        answer: "Yoga Therapy acts as a catalyst. For example, during a Panchakarma detox, yoga postures help release tension from deep tissues, while breathing techniques (Pranayama) calm the mind and assist the nervous system in integrating the cellular changes brought about by the physical treatments."
      }
    ]
  },
  {
    slug: "naturopathy",
    title: "Naturopathy",
    tagline: "Harnessing the Five Great Elements of Nature",
    iconName: "Leaf",
    overview: "Naturopathy is a system of healthcare that emphasizes the use of natural elements (Earth, Water, Fire, Air, Ether) to stimulate the body's self-healing mechanisms. At Aayur Kendra, we integrate Naturopathic therapies with Ayurveda. By utilizing treatments like mud packs, hydrotherapy, and structured fasting, we accelerate the detoxification process, boost immunity, and help patients reconnect with nature's wisdom.",
    conditionsTreated: [
      "General Obesity & Localized Fat Deposition",
      "Eczema, Psoriasis & Chronic Dermatitis",
      "Chronic Indigestion, Flatulence & Irritable Bowel Syndrome (IBS)",
      "Arthritis, Gout & Inflammatory Joint Pains",
      "Sinusitis & Chronic Allergies",
      "Toxic Accumulation & Low Immunity"
    ],
    benefits: [
      "Stimulates internal organ function and circulation naturally",
      "Soothes inflamed skin tissues and decreases allergic reactions",
      "Promotes systemic detoxification through skin, kidneys, and bowels",
      "Reduces chronic joint pain and swelling using natural heat/cold applications",
      "Restores natural appetite, improves digestion, and balances sleep"
    ],
    treatmentProcess: [
      "Assessment of lifestyle, dietary habits, and nature connectivity",
      "Hydrotherapy treatments (hip baths, spinal baths, steam inhalation)",
      "Mud Therapy (application of mineral-rich soil packs to abdomen or eyes)",
      "Diet therapy, juice fasts, and elimination diets",
      "Sunbaths (Chromotherapy) and breathing fresh air in nature"
    ],
    faqs: [
      {
        question: "How does Mud Therapy benefit the digestion?",
        answer: "Applying a cold, moist mud pack on the abdomen cools the skin surface, redirecting blood flow internally to the stomach and intestines. It stimulates sluggish peristalsis, absorbs toxins, relieves congestion, and helps alleviate constipation and bloating."
      },
      {
        question: "Is fasting safe during Naturopathy?",
        answer: "Fasting is one of Naturopathy's main therapeutic tools. It gives the digestive tract a rest, redirecting energy toward cellular repair. At our hospital, fasting is always structured individually and monitored by doctors, utilizing fresh fruit juices, herbal teas, or warm water."
      }
    ]
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    tagline: "Reclaiming Mobility and Rebuilding Strength",
    iconName: "Stethoscope",
    overview: "Rehabilitation is key to restoring quality of life after surgeries, neurological events, or orthopedic traumas. Our Physiotherapy department combines modern biomechanical evaluations, manual therapy, and therapeutic exercises with traditional Ayurvedic massage therapies (like Kizhi and Abhyangam). This integrated approach provides faster pain relief and speeds up muscle and nerve recovery.",
    conditionsTreated: [
      "Stroke (Hemiplegia) & Neurological Rehabilitation",
      "Post-operative Orthopedic Recovery (Knee/Hip Replacement)",
      "Frozen Shoulder & Adhesive Capsulitis",
      "Osteoarthritis, Rheumatoid Arthritis & Ankylosing Spondylitis",
      "Sports Injuries (Ligament Sprains, Muscle Strains)",
      "Cervical and Lumbar Spondylosis"
    ],
    benefits: [
      "Relieves muscle spasms, joint stiffness, and acute pain",
      "Restores standard muscle strength, endurance, and range of motion",
      "Prevents joint deformities and muscle wasting in chronic disorders",
      "Improves gait, balance, and motor coordination post-stroke",
      "Promotes independent mobility for activities of daily living (ADLs)"
    ],
    treatmentProcess: [
      "Detailed assessment of muscle strength, joint range, and reflex levels",
      "Manual therapy, joint mobilization, and trigger point release",
      "Therapeutic exercises using resistance bands, weights, and balance boards",
      "Application of electrotherapy (TENS, Ultrasound) if indicated",
      "Coordinating sessions alongside warming Ayurvedic Kizhi (bolus massage)"
    ],
    faqs: [
      {
        question: "How does physiotherapy integrate with Ayurvedic massages?",
        answer: "This combination is highly effective. The Ayurvedic oil massage (Abhyangam) and herbal steam massage (Kizhi) help soften stiff muscles, improve local blood supply, and relieve pain. Once the tissues are warmed and relaxed, the physiotherapist can perform manual mobilization and exercises with less discomfort, achieving faster rehabilitation."
      },
      {
        question: "How long is a rehab session, and how many are needed?",
        answer: "A standard physical therapy session lasts between 45 to 60 minutes. The number of sessions required depends on the severity of the condition; acute sports injuries might need 6 to 10 sessions, whereas stroke rehabilitation is a long-term process requiring regular treatment over several months."
      }
    ]
  },
  {
    slug: "psychotherapy",
    title: "Psychotherapy & Mental Health",
    tagline: "Nurturing Emotional Harmony and Mental Resilience",
    iconName: "Brain",
    overview: "At Aayur Kendra, we believe mental wellness is core to physical health (Sattva, Rajas, Tamas balance). Our Psychotherapy department combines modern cognitive-behavioral counseling with Ayurvedic psychology (Satvajaya Chikitsa) and stress-reducing therapies (Shirodhara, Pratimasra Nasya). We provide a safe, confidential environment to help you heal emotional wounds, manage stress, and develop mental resilience.",
    conditionsTreated: [
      "Generalized Anxiety Disorder (GAD) & Panic Attacks",
      "Depressive Disorders & Mood Swings",
      "Chronic Stress, Burnout & Work-Life Imbalance",
      "Grief, Relationship Issues & Psychological Trauma",
      "Somatoform Disorders (Mind-Body Ailments)",
      "Insomnia & Stress-Induced Eating Disorders"
    ],
    benefits: [
      "Provides healthy cognitive tools to process negative thoughts and emotions",
      "Reduces psychological distress and calms the autonomic nervous system",
      "Improves quality of sleep, focus, and emotional self-regulation",
      "Helps repair relationships and builds effective communication skills",
      "Addresses the psychosomatic roots of chronic physical pain"
    ],
    treatmentProcess: [
      "Personalized counseling sessions using CBT and client-centered models",
      "Satvajaya Chikitsa (Ayurvedic therapy for mental restraint and control)",
      "Mindfulness training, pranayama, and grounding meditation",
      "Coordination with calming physical therapies like Shirodhara",
      "Assistance in identifying and changing unhealthy lifestyle habits"
    ],
    faqs: [
      {
        question: "What is Satvajaya Chikitsa?",
        answer: "Satvajaya Chikitsa is the Ayurvedic psychotherapy branch, meaning 'conquering the mind'. It focuses on training the mind to avoid harmful thoughts and habits (Ahita Artha), and cultivating mental clarity (Sattva) through self-study, moral guidelines, and deep concentration techniques."
      },
      {
        question: "Is psychotherapy confidential?",
        answer: "Yes, confidentiality is a core ethical principle. All discussions, records, and therapeutic assessments remain strictly confidential between the client and the therapist, ensuring a safe, supportive space for healing."
      }
    ]
  }
];
