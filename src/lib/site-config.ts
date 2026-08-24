export const siteConfig = {
  name: "Align Dental Clinic",
  shortName: "Align Dental",
  tagline: "Modern Dental Care, Now in Ahilyanagar!",
  description:
    "Expert orthodontic and general dental care in Ahilyanagar. Advanced technology, patient-centred service, and comprehensive treatments for your entire family.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aligndentalclinic.com",
  locale: "en_IN",

  doctor: {
    name: "Dr. Aishwarya Aditya Mestry",
    credentials: "BDS (MUHS), MDS",
    specialty: "Specialist in Orthodontics & Dentofacial Orthopedics",
    registrationNo: "A-45270",
    education: [
      {
        degree: "BDS",
        institution: "Maharashtra University of Health Sciences (MUHS)",
        focus: "Bachelor of Dental Surgery",
      },
      {
        degree: "MDS",
        institution: "Maharashtra University of Health Sciences (MUHS)",
        focus: "Orthodontics & Dentofacial Orthopedics",
      },
    ],
    affiliations: [
      "Indian Orthodontic Society",
      "Maharashtra State Dental Council",
    ],
    bio: "Dr. Aishwarya Aditya Mestry is a dedicated dental specialist with advanced MDS training in orthodontics and dentofacial orthopedics from MUHS. With a patient-first approach, she combines modern technology with compassionate care to deliver exceptional results for patients of all ages.",
    extendedBio:
      "At Align Dental Clinic, Dr. Mestry leads a team committed to making quality dental care accessible and comfortable. From routine preventive care to complex orthodontic treatments, every patient receives personalized attention in a warm, modern environment equipped with high-quality instruments and digital diagnostics.",
  },

  social: {
    googleMaps: "https://maps.app.goo.gl/1DeRjmMxvNiGRzZg9",
    googleReview: "https://maps.app.goo.gl/1DeRjmMxvNiGRzZg9",
  },

  reviews: [
    {
      id: "dhvani-dodia",
      name: "Dhvani Dodia",
      rating: 5,
      text: "Dr. Aishwarya is an amazing dentist and is very professional. She made me feel comfortable throughout the treatment and explained everything clearly. Highly recommend her!",
    },
    {
      id: "tanuja-mestry",
      name: "Tanuja Mestry",
      rating: 5,
      text: "Very good dentist and suggested perfect treatment plan at a reasonable cost. Uses high quality equipments.",
    },
    {
      id: "hrishikesh-deshmukh",
      name: "Hrishikesh Deshmukh",
      rating: 5,
      text: "Excellent experience at Align Dental Clinic. Professional care, modern equipment, and a very welcoming team.",
    },
    {
      id: "tanay-sawtekar",
      name: "TANAY SAWTEKAR",
      rating: 5,
      text: "Outstanding dental care in Ahilyanagar. Dr. Aishwarya is knowledgeable, gentle, and truly cares about her patients.",
    },
  ],

  faqs: [
    {
      question: "Does root canal treatment hurt?",
      answer:
        "Modern root canal treatment at Align Dental Clinic is performed with local anaesthesia and gentle techniques, so discomfort is minimal. Most patients compare it to a routine filling and feel relief once the infection is treated.",
    },
    {
      question: "How long do braces take to work?",
      answer:
        "Treatment duration varies by case — typically 12 to 24 months for comprehensive orthodontic correction. Dr. Mestry will assess your teeth and provide a personalised timeline during your consultation.",
    },
    {
      question: "What are clear aligners and am I a candidate?",
      answer:
        "Clear aligners are removable, nearly invisible trays that gradually straighten teeth. They suit many mild to moderate alignment issues. A consultation helps determine whether aligners or traditional braces are best for you.",
    },
    {
      question: "How often should I visit the dentist?",
      answer:
        "We recommend a check-up and cleaning every six months for most patients. Those with braces, gum concerns, or ongoing treatment may need more frequent visits based on Dr. Mestry's advice.",
    },
    {
      question: "Do you treat children?",
      answer:
        "Yes. We offer gentle pediatric dental care in a friendly environment, including preventive check-ups, fluoride treatments, and early orthodontic assessments for growing smiles.",
    },
    {
      question: "What are your clinic timings?",
      answer:
        "Align Dental Clinic is open Monday through Saturday, 11:00 AM to 7:00 PM. Walk-ins are welcome, but we recommend booking via WhatsApp or phone for a confirmed slot.",
    },
  ],

  marathi: {
    tagline: "आधुनिक दंतसेवा, आता अहिल्यानगरमध्ये!",
    heroSubtitle:
      "प्रगत तंत्रज्ञान, तज्ञ ऑर्थोडॉन्टिक काळजी आणि रुग्ण-केंद्रित सेवा — आपल्या संपूर्ण कुटुंबासाठी.",
    bookAppointment: "अपॉइंटमेंट बुक करा",
  },

  contact: {
    phone: "+91 814 952 8997",
    phoneHref: "tel:+918149528997",
    whatsapp: "918149528997",
    whatsappHref: "https://wa.me/918149528997?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.",
    email: "contact@aligndentalclinic.com",
    address: {
      street: "Plot No. 1, Kala Nagar Chowk, Gulmohar Road",
      landmark: "Near Bank of Baroda",
      city: "Ahilyanagar",
      state: "Maharashtra",
      postalCode: "414003",
      country: "IN",
      full: "Plot No. 1, Kala Nagar Chowk, Gulmohar Road, Near Bank of Baroda, Ahilyanagar – 414003",
    },
    hours: {
      display: "11:00 AM – 7:00 PM",
      days: "Monday – Saturday",
      opens: "11:00",
      closes: "19:00",
    },
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5!2d74.7363281!3d19.1216527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcbba6a522ba59%3A0xfe2d73f33acfb32!2sAlign%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1",
    mapsLink: "https://maps.app.goo.gl/1DeRjmMxvNiGRzZg9",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],

  services: [
    {
      id: "braces-aligners",
      title: "Braces & Aligners",
      description:
        "Straighten your smile with modern orthodontic solutions including traditional braces and clear aligners, tailored to your lifestyle and goals.",
      longDescription:
        "Whether you prefer discreet clear aligners or traditional braces, Dr. Mestry creates a customised orthodontic plan based on digital assessment and your lifestyle. We treat crowding, spacing, bite issues, and jaw alignment for teens and adults.",
      benefits: [
        "Personalised treatment plans",
        "Clear aligner and metal/ceramic braces options",
        "Regular progress monitoring",
        "Family-friendly orthodontic care",
      ],
      icon: "smile",
    },
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      description:
        "Save infected or damaged teeth with gentle, precision root canal therapy using advanced techniques for minimal discomfort.",
      longDescription:
        "Root canal therapy removes infection from inside the tooth while preserving your natural smile. Using modern rotary instruments and digital imaging, we make the procedure efficient and comfortable with appropriate anaesthesia.",
      benefits: [
        "Tooth preservation instead of extraction",
        "Pain relief from infection",
        "Single or multi-visit options",
        "Crown placement guidance after treatment",
      ],
      icon: "shield",
    },
    {
      id: "dental-implants",
      title: "Dental Implants",
      description:
        "Restore missing teeth with durable, natural-looking implants that function and feel like your own teeth.",
      longDescription:
        "Dental implants are titanium posts placed in the jawbone to support crowns, bridges, or dentures. They offer long-term stability, prevent bone loss, and restore natural chewing function and aesthetics.",
      benefits: [
        "Permanent tooth replacement",
        "Natural look and feel",
        "Preserves jawbone health",
        "Custom crown matching your smile",
      ],
      icon: "anchor",
    },
    {
      id: "smile-designing",
      title: "Smile Designing",
      description:
        "Transform your smile with a customized aesthetic plan combining cosmetic procedures for a harmonious, confident look.",
      longDescription:
        "Smile designing combines cosmetic dentistry techniques — whitening, veneers, contouring, and orthodontics — into one cohesive plan. We analyse facial proportions, gum line, and tooth shape to create a balanced, natural result.",
      benefits: [
        "Digital smile preview planning",
        "Customised aesthetic treatment",
        "Harmonious tooth shape and colour",
        "Boost in confidence and appearance",
      ],
      icon: "sparkles",
    },
    {
      id: "crowns-bridges",
      title: "Crowns & Bridges",
      description:
        "Repair and replace damaged or missing teeth with high-quality crowns and bridges for lasting function and beauty.",
      longDescription:
        "Crowns restore strength and appearance to weakened teeth, while bridges replace one or more missing teeth by anchoring to adjacent teeth or implants. We use quality materials for durability and a natural finish.",
      benefits: [
        "Restored chewing function",
        "Protection for weakened teeth",
        "Natural-looking ceramic options",
        "Long-lasting restorations",
      ],
      icon: "crown",
    },
    {
      id: "teeth-whitening",
      title: "Teeth Whitening",
      description:
        "Brighten your smile safely and effectively with professional whitening treatments for noticeably whiter teeth.",
      longDescription:
        "Professional teeth whitening removes stains from coffee, tea, tobacco, and ageing safely and effectively. In-clinic treatments deliver faster results, with guidance on maintaining your brighter smile at home.",
      benefits: [
        "Safe, dentist-supervised whitening",
        "Visible results in one visit",
        "Stain removal for a brighter smile",
        "Take-home maintenance advice",
      ],
      icon: "sun",
    },
    {
      id: "tooth-extraction",
      title: "Tooth Extraction",
      description:
        "Gentle, careful tooth removal when necessary, with options for comfortable recovery and follow-up care.",
      longDescription:
        "When a tooth cannot be saved, we perform extractions with care and clear aftercare instructions. Whether simple or surgical removal, patient comfort and proper healing are our priorities.",
      benefits: [
        "Gentle extraction techniques",
        "Clear post-procedure care",
        "Replacement options discussed",
        "Infection prevention focus",
      ],
      icon: "scissors",
    },
    {
      id: "dentures",
      title: "Dentures",
      description:
        "Custom-fitted dentures to restore your ability to eat, speak, and smile with confidence and comfort.",
      longDescription:
        "We provide partial and complete dentures custom-made for fit, comfort, and natural appearance. Adjustments and relining ensure your dentures continue to serve you well over time.",
      benefits: [
        "Custom fit and natural appearance",
        "Restored speech and chewing",
        "Partial and full denture options",
        "Follow-up adjustments included",
      ],
      icon: "layers",
    },
    {
      id: "pediatric-dental",
      title: "Pediatric Dental Care",
      description:
        "Specialized, gentle dental care for children in a friendly environment that builds positive habits early.",
      longDescription:
        "Our pediatric approach focuses on prevention, education, and gentle treatment to help children feel comfortable at the dentist. We offer check-ups, fluoride treatments, sealants, and early orthodontic screening.",
      benefits: [
        "Child-friendly, calm environment",
        "Preventive care and education",
        "Early orthodontic assessment",
        "Building lifelong dental habits",
      ],
      icon: "baby",
    },
    {
      id: "wisdom-tooth",
      title: "Wisdom Tooth Surgery",
      description:
        "Expert surgical removal of impacted or problematic wisdom teeth with careful planning and aftercare support.",
      longDescription:
        "Impacted or partially erupted wisdom teeth can cause pain, infection, and crowding. We assess with imaging, explain the procedure clearly, and provide thorough post-surgical care instructions for smooth recovery.",
      benefits: [
        "Digital X-ray assessment",
        "Surgical expertise for impactions",
        "Pain and swelling management",
        "Detailed recovery guidance",
      ],
      icon: "activity",
    },
  ],

  whyChooseUs: [
    {
      title: "Advanced Technology",
      description: "Modern equipment and techniques for precise, comfortable treatments.",
      icon: "cpu",
    },
    {
      title: "Expert Orthodontics",
      description: "MDS-qualified specialist in orthodontics and dentofacial orthopedics.",
      icon: "award",
    },
    {
      title: "Patient-Centred Care",
      description: "Every treatment plan is tailored to your needs, comfort, and schedule.",
      icon: "heart",
    },
    {
      title: "Family-Friendly",
      description: "Comprehensive dental care for patients of all ages under one roof.",
      icon: "users",
    },
  ],

  gallery: [
    {
      src: "/images/clinic-exterior.webp",
      alt: "Align Dental Clinic entrance in Ahilyanagar with welcoming signage",
      caption: "Clinic Entrance",
      category: "clinic",
    },
    {
      src: "/images/hero-reception.webp",
      alt: "Welcoming reception and waiting area at Align Dental Clinic",
      caption: "Reception & Waiting Area",
      category: "clinic",
    },
    {
      src: "/images/hero-treatment-room.webp",
      alt: "Modern dental treatment room with advanced equipment and certificates",
      caption: "Treatment Room",
      category: "clinic",
    },
    {
      src: "/images/clinic-treatment-room-2.webp",
      alt: "Spacious dental operatory at Align Dental Clinic",
      caption: "Operatory",
      category: "clinic",
    },
    {
      src: "/images/result-before-after-1.webp",
      alt: "Before and after orthodontic treatment — teeth alignment improvement",
      caption: "Orthodontic Results",
      category: "results",
    },
    {
      src: "/images/result-before-after-2.webp",
      alt: "Before and after clear aligner treatment — smile transformation",
      caption: "Aligner Treatment",
      category: "results",
    },
    {
      src: "/images/result-before-after-3.webp",
      alt: "Before and after dental treatment — brighter, straighter smile",
      caption: "Smile Makeover",
      category: "results",
    },
  ],

  transformations: [
    {
      src: "/images/result-before-after-1.webp",
      alt: "Before and after orthodontic treatment at Align Dental Clinic",
      label: "Orthodontic Treatment",
    },
    {
      src: "/images/result-before-after-2.webp",
      alt: "Before and after clear aligner treatment at Align Dental Clinic",
      label: "Clear Aligners",
    },
    {
      src: "/images/result-before-after-3.webp",
      alt: "Before and after smile makeover at Align Dental Clinic",
      label: "Smile Makeover",
    },
  ],

  geo: {
    latitude: 19.1216527,
    longitude: 74.7363281,
  },
} as const;

export type Service = (typeof siteConfig.services)[number];
