export const projects = [
  {
    id: "p1",
    slug: "urban-loft-apartment-tashkent",
    status: "completed", // concept | in_progress | completed
    category: "residential", // residential | commercial | hospitality | office
    publishedAt: "2025-11-10",
    title: "Urban Loft Apartment — Toshkent",

    localeData: {
      uz: {
        excerpt:
          "Shahar markazidagi loft uslubidagi kvartira. Beton faktura, tabiiy yog‘och va qora metall aksentlar asosida ochiq reja ishlab chiqildi.",
        seo: {
          metaTitle: "Urban Loft Apartment interyer dizayni",
          metaDescription:
            "Toshkentdagi loft kvartira interyeri: open-space reja, beton va yog‘och uyg‘unligi, smart storage va minimal palitra.",
        },
        challenge:
          "Maydon cheklangan bo‘lsa-da, mijoz keng va havodor open-space hissini xohladi, saqlash joylari esa yetarli bo‘lishi kerak edi.",
        solution:
          "Zona bo‘yicha rejalashtirish, built-in mebel va yashirin saqlash tizimlari, shuningdek yoritish ssenariylari orqali makon kengroq ko‘rsatildi.",
        result:
          "Loft estetikasiga mos, funksional va tartibli yashash makoni yaratildi: kundalik hayot uchun qulay va vizual jihatdan toza.",
      },
      ru: {
        excerpt:
          "Квартира в стиле лофт в центре города. Открытая планировка с фактурой бетона, натуральным деревом и чёрными металлическими акцентами.",
        seo: {
          metaTitle: "Дизайн интерьера Urban Loft Apartment",
          metaDescription:
            "Лофт-квартира в Ташкенте: open-space планировка, сочетание бетона и дерева, smart-хранение и минимальная палитра.",
        },
        challenge:
          "При ограниченной площади клиент хотел ощущение простора, а также достаточное количество систем хранения.",
        solution:
          "Зонирование, встроенная мебель и скрытые системы хранения, плюс сценарии освещения для визуального расширения пространства.",
        result:
          "Создан функциональный и аккуратный интерьер в стиле лофт: комфортный для жизни и визуально «чистый».",
      },
    },

    coverImage: {
      light: {
        src: "/images/projectsCover/apartmen_day.png",
        alt: { uz: "Urban Loft Apartment loyihasi", ru: "Проект Urban Loft Apartment" },
      },
      dark: {
        src: "/images/projectsCover/apartmen_night.png",
        alt: { uz: "Urban Loft Apartment loyihasi", ru: "Проект Urban Loft Apartment" },
      },
    },

    gallery: [
      {
        src: "",
        alt: { uz: "Mehmonxona zonasi", ru: "Гостиная зона" },
      },
    ],

    facts: {
      year: 2025,
      durationMonths: 3,
      areaM2: 92,
      location: { city: "Tashkent", country: "Uzbekistan" },
      services: ["concept", "space_planning", "3d", "drawings", "furniture_selection"],
    },

    design: {
      style: ["Loft", "Modern", "Minimal"],
      palette: ["#E6E1DA", "#2B2B2B", "#6B7F6A"],
      materials: ["Microcement", "Natural wood", "Metal", "Glass"],
      keyFeatures: ["Open-space zoning", "Smart storage", "Layered lighting", "Industrial accents"],
    },
  },

  {
    id: "p2",
    slug: "family-eco-house-qibray",
    status: "completed",
    category: "residential",
    publishedAt: "2025-11-10",

    localeData: {
      uz: {
        title: "Family Eco House — Qibray",
        excerpt:
          "Oilaviy uy interyeri: yorug‘, issiq va ekologik materiallarga asoslangan dizayn. Katta derazalar va yumshoq palitra bilan tabiatga yaqin muhit yaratildi.",
        seo: {
          metaTitle: "Family Eco House interyer dizayni",
          metaDescription:
            "Qibraydagi oilaviy uy: tabiiy materiallar, yorug‘ interyer, qulay zonalash va oilaviy ehtiyojlarga mos yechimlar.",
        },
        challenge:
          "Uy ‘issiq’ kayfiyatga ega bo‘lishi, bolalar uchun xavfsiz va tartibli saqlash tizimlariga ega bo‘lishi kerak edi.",
        solution:
          "Tabiiy yog‘och va tosh, yumshoq matolar, rounded formalar hamda kids-friendly saqlash yechimlari qo‘llanildi.",
        result:
          "Oila uchun qulay, yorug‘ va uzoq muddatli foydalanishga mos ekologik interyer hosil bo‘ldi.",
      },
      ru: {
        title: "Family Eco House — Кибрай",
        excerpt:
          "Интерьер семейного дома: светлый, тёплый и основанный на экологичных материалах. Большие окна и мягкая палитра создают близость к природе.",
        seo: {
          metaTitle: "Дизайн интерьера Family Eco House",
          metaDescription:
            "Семейный дом в Кибрае: натуральные материалы, светлый интерьер, удобное зонирование и решения под семейные сценарии.",
        },
        challenge:
          "Нужно было создать «тёплое» настроение, безопасную среду для детей и продуманные системы хранения.",
        solution:
          "Натуральное дерево и камень, мягкие ткани, округлые формы и kids-friendly решения для хранения.",
        result:
          "Получился уютный, светлый и экологичный интерьер, адаптированный для долгосрочного проживания семьи.",
      },
    },

    coverImage: {
      light: {
        src: "/images/projectsCover/ecofamily_day.png",
        alt: { uz: "Family Eco House loyihasi", ru: "Проект Family Eco House" },
      },
      dark: {
        src: "/images/projectsCover/ecofamily_night.png",
        alt: { uz: "Family Eco House loyihasi", ru: "Проект Family Eco House" },
      },
    },

    gallery: [
      {
        src: "",
        alt: { uz: "Oilaviy mehmonxona", ru: "Семейная гостиная" },
      },
    ],

    facts: {
      year: 2025,
      durationMonths: 5,
      areaM2: 165,
      location: { city: "Qibray", country: "Uzbekistan" },
      services: ["concept", "space_planning", "3d", "drawings", "author_supervision"],
    },

    design: {
      style: ["Eco", "Modern", "Warm minimal"],
      palette: ["#F3EFE7", "#2B2B2B", "#6B7F6A"],
      materials: ["Natural wood", "Stone", "Linen", "Microcement"],
      keyFeatures: ["Natural light", "Family zoning", "Safe materials", "Hidden storage"],
    },
  },

  {
    id: "p3",
    slug: "premium-dental-clinic-tashkent",
    status: "completed",
    category: "commercial",
    publishedAt: "2025-11-10",

    localeData: {
      uz: {
        title: "Premium Dental Clinic — Toshkent",
        excerpt:
          "Premium stomatologiya klinikasi. Steril, ammo sovuq bo‘lmagan dizayn: yumshoq yorug‘lik, neytral palitra va qulay navigatsiya.",
        seo: {
          metaTitle: "Premium Dental Clinic interyeri",
          metaDescription:
            "Toshkentdagi premium klinika: ergonomik reja, gigiyena talablari, kutish zonasi va brendga mos interyer identifikatsiya.",
        },
        challenge:
          "Gigiyena va ishonch hissini kuchaytirish, bir vaqtning o‘zida iliq va qulay atmosfera berish kerak edi.",
        solution:
          "Warm-white yoritish, soft green aksentlar, soddalashtirilgan shakllar va toza materiallar orqali premium muhit yaratildi.",
        result:
          "Klinika zamonaviy, ishonchli va komfortli ko‘rinishga keldi; bemorlar oqimi va xizmat qabul qilish jarayoni optimallashtirildi.",
      },
      ru: {
        title: "Premium Dental Clinic — Ташкент",
        excerpt:
          "Премиальная стоматологическая клиника. Стерильно, но не холодно: мягкий свет, нейтральная палитра и удобная навигация.",
        seo: {
          metaTitle: "Интерьер Premium Dental Clinic",
          metaDescription:
            "Премиальная клиника в Ташкенте: эргономичная планировка, требования гигиены, зона ожидания и интерьерная айдентика бренда.",
        },
        challenge:
          "Нужно было усилить ощущение гигиены и доверия, сохранив тёплую и комфортную атмосферу.",
        solution:
          "Тёплый белый свет, мягкие зелёные акценты, упрощённые формы и «чистые» материалы для премиального впечатления.",
        result:
          "Клиника получила современный и доверительный образ; поток пациентов и логика приёма стали более удобными.",
      },
    },

    coverImage: {
      light: {
        src: "/images/projectsCover/dental_day.png",
        alt: { uz: "Premium Dental Clinic loyihasi", ru: "Проект Premium Dental Clinic" },
      },
      dark: {
        src: "/images/projectsCover/dental_night.png",
        alt: { uz: "Premium Dental Clinic loyihasi", ru: "Проект Premium Dental Clinic" },
      },
    },

    gallery: [
      {
        src: "",
        alt: { uz: "Kutish zonasi", ru: "Зона ожидания" },
      },
    ],

    facts: {
      year: 2025,
      durationMonths: 4,
      areaM2: 120,
      location: { city: "Tashkent", country: "Uzbekistan" },
      services: ["concept", "space_planning", "3d", "drawings", "author_supervision"],
    },

    design: {
      style: ["Medical minimal", "Premium", "Modern"],
      palette: ["#F8F6F2", "#2B2B2B", "#6B7F6A"],
      materials: ["Glass", "Microcement", "Compact laminate", "Metal"],
      keyFeatures: ["Ergonomic flow", "Soft lighting", "Brand accents", "Clean detailing"],
    },
  },

  {
    id: "p4",
    slug: "boutique-it-office",
    status: "completed",
    category: "office",
    publishedAt: "2025-11-10",

    localeData: {
      uz: {
        title: "Boutique IT Office",
        excerpt:
          "IT kompaniya uchun butik formatdagi ofis: open workspace, meeting zonalar va chill area. Akustika va brend identifikatsiya asosiy e’tiborda.",
        seo: {
          metaTitle: "Boutique IT Office interyer dizayni",
          metaDescription:
            "Zamonaviy IT ofis: open office, uchrashuv xonalari, akustik yechimlar, dam olish zonalari va brend ranglari integratsiyasi.",
        },
        challenge:
          "Gibrid ish formati uchun mos, shovqinni kamaytiradigan va jamoa hamkorligini kuchaytiradigan makon yaratish kerak edi.",
        solution:
          "Akustik panellar, turli ish ssenariylari uchun zonalar (focus/meeting/collab) va qulay dam olish maydonlari ishlab chiqildi.",
        result:
          "Jamoa samaradorligi oshdi, uchrashuvlar logikasi aniqlandi va ofis brendga mos, zamonaviy ko‘rinishga ega bo‘ldi.",
      },
      ru: {
        title: "Boutique IT Office",
        excerpt:
          "Бутик-офис для IT-компании: open workspace, переговорные и chill-зона. В фокусе — акустика и бренд-айдентика.",
        seo: {
          metaTitle: "Дизайн интерьера Boutique IT Office",
          metaDescription:
            "Современный IT-офис: open space, переговорные, акустические решения, зоны отдыха и интеграция бренд-цветов.",
        },
        challenge:
          "Нужен был офис под гибридный формат: снизить шум, усилить коллаборацию и сохранить места для фокусной работы.",
        solution:
          "Акустические панели, зоны под разные сценарии (focus/meeting/collab) и комфортные пространства для отдыха.",
        result:
          "Повысилась продуктивность команды, улучшилась логика встреч, офис стал современным и визуально связанным с брендом.",
      },
    },

    coverImage: {
      light: {
        src: "/images/projectsCover/office_day.png",
        alt: { uz: "Boutique IT Office loyihasi", ru: "Проект Boutique IT Office" },
      },
      dark: {
        src: "/images/projectsCover/office_night.png",
        alt: { uz: "Boutique IT Office loyihasi", ru: "Проект Boutique IT Office" },
      },
    },

    gallery: [
      {
        src: "",
        alt: { uz: "Open workspace zonasi", ru: "Зона open workspace" },
      },
    ],

    facts: {
      year: 2025,
      durationMonths: 3,
      areaM2: 240,
      location: { city: "Tashkent", country: "Uzbekistan" },
      services: ["concept", "space_planning", "3d", "drawings", "furniture_selection"],
    },

    design: {
      style: ["Modern", "Corporate", "Creative"],
      palette: ["#EAE2D6", "#2B2B2B", "#6B7F6A"],
      materials: ["Wood", "Glass", "Felt acoustic panels", "Metal"],
      keyFeatures: ["Hybrid workspace", "Acoustic comfort", "Meeting pods", "Chill zone"],
    },
  },
] as const;
