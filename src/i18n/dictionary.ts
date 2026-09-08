/**
 * Single source of truth for every user-facing string on the site.
 *
 * Rules of thumb:
 *  - Icons, colors and visual props stay in the components. Only text lives here.
 *  - Arabic keeps technical terms and credential names in Latin script
 *    (FortiGate, React, Claude AI, PMD Pro, MEAL DPro) — that is how they are
 *    written professionally and it keeps the resume scannable.
 *  - Numbers stay Western (2026, 95%, +967) in both languages.
 */

export const en = {
  meta: {
    title: "Ahmed Fadhl | Portfolio",
  },

  common: {
    name: "Ahmed Fadhl",
    initials: "AF",
    role: "IT Professional",
    roleLong: "IT Professional & AI Specialist",
    location: "Aden, Yemen",
    emailLabel: "Email",
  },

  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    career: "Career",
    education: "Education",
    contact: "Contact",
  },

  hero: {
    available: "Available for work",
    greeting: "Hi, I'm",
    summary:
      "Result-oriented IT Professional with a Bachelor's degree in Information Technology, holding PMD Pro and MEAL DPro credentials. Specialized in technical support, FortiGate network security, and AI agents.",
    ctaExperience: "View Experience",
    ctaContact: "Contact Me",
    card: {
      hint: "Drag or click the card",
      specialtyLabel: "Specialty",
      specialtyValue: "IT, Security & AI",
      locationLabel: "Location",
      educationLabel: "Education",
      educationValue: "B.Sc. in IT",
      statusLabel: "Status",
      statusValue: "Available",
      badgeTag: "IT PROFESSIONAL",
    },
  },

  techStack: {
    items: [
      "FortiGate Security",
      "Claude AI",
      "Google AI",
      "Windows & Office",
      "Hardware Diagnostics",
      "Database Admin",
      "MySQL",
      "Web Development",
      "React",
      "TypeScript",
      "Project DPro",
      "MEAL Systems",
    ],
  },

  about: {
    titleLead: "Professional",
    titleAccent: "Profile",
    body:
      "Result-oriented IT Professional with a Bachelor's degree in Information Technology, holding PMD Pro and MEAL DPro credentials. Proven track record in providing first-level technical support, comprehensive hardware and software troubleshooting, and network security configuration, with specialized experience within the humanitarian NGO sector. Highly skilled in maintaining infrastructure stability, managing technical environments, and optimizing local power backup systems. Passionate about AI technologies and AI agents, with a strong commitment to driving innovation and future-focused technical solutions.",
    stats: [
      { label: "IT & Tech Support", value: "3+ Years" },
      { label: "Degrees & Certifications", value: "5+" },
      { label: "FortiGate & Security", value: "Enterprise" },
      { label: "Humanitarian NGOs", value: "FMF / MEAL" },
    ],
  },

  services: {
    title: "What I Do",
    subtitle:
      "Providing reliable technical support, secure network configurations, and forward-thinking AI solutions.",
    items: [
      {
        title: "IT Support & Troubleshooting",
        description:
          "Comprehensive hardware, software, and connectivity diagnostics. First-line support on Windows & Office apps, and local power backup system optimization.",
      },
      {
        title: "Network Security & FortiGate",
        description:
          "Configuring and monitoring FortiGate firewalls, user device access policies, and basic network infrastructure to guarantee secure connectivity.",
      },
      {
        title: "AI Technologies & AI Agents",
        description:
          "Harnessing Claude and Google AI certified skills to design autonomous agents and intelligent workflows that solve real-world problems.",
      },
      {
        title: "Web Design & Database Admin",
        description:
          "Database administration, website architecture, and responsive web design with ongoing monitoring of service quality.",
      },
    ],
  },

  career: {
    title: "Career Journey",
    subtitle: "An evolving path of leadership, innovation, and impact",
    items: [
      {
        year: "2026 – Present",
        title: "AI & Custom Systems Consultant",
        subtitle: "Freelancer / Independent Tech Specialist",
        description:
          "Developing on-demand custom systems and tailored software solutions for diverse business needs. Consulting, guiding, and empowering small businesses to integrate Artificial Intelligence, automate operational workflows, and enhance digital efficiency.",
      },
      {
        year: "2025",
        title: "IT Assistant",
        subtitle: "Intern – FMF (Field Medical Foundation)",
        description:
          "Diagnosed and resolved hardware and software issues for staff. Configured and monitored FortiGate firewall to secure network access. Installed and maintained user devices and basic network connectivity. Provided first-line technical support on Windows and Office apps.",
      },
      {
        year: "2024 (6 Months)",
        title: "IT Support",
        subtitle: "aibdae suft (Ebda Soft)",
        description:
          "Diagnosed and resolved hardware, software, and connectivity issues for local clients. Actively listened to technical feedback from users to troubleshoot and deliver prompt technical resolutions.",
      },
      {
        year: "2022 – 2023",
        title: "Web Development",
        subtitle: "Freelancer",
        description:
          "Database administration and website design. Received reviews from customers and continuously monitored and evaluated the quality of service.",
      },
    ],
  },

  education: {
    titleLead: "Education &",
    titleAccent: "Certifications",
    subtitle:
      "Formal academic degree and certified international credentials in IT infrastructure, AI technologies, and project governance.",
    items: [
      {
        degree: "Bachelor's in Information Technology",
        school: "University of Science and Technology",
        year: "2019 – 2023",
        badge: "Degree",
        details: [
          "Rigorous 4-year curriculum covering IT Systems, Network Engineering & Software Diagnostics",
          "Deep focus on Database Administration, OS configuration, and technical troubleshooting",
          "Graduated with practical real-world competencies across IT environments and infrastructure",
        ],
      },
      {
        degree: "Google AI Professional Certificate",
        school: "Google",
        year: "2026",
        badge: "AI Certified",
        details: [
          "In-depth mastery of modern Artificial Intelligence foundations and machine learning models",
          "Practical engineering with Generative AI tools and workflow automation",
          "Driving future-focused, innovative technical solutions for modern organizations",
        ],
      },
      {
        degree: "Claude AI Specialist",
        school: "ANTHROPIC",
        year: "2026",
        badge: "AI Agents",
        details: [
          "Specialized in Claude LLM architectures, context optimization, and advanced prompting",
          "Orchestrating autonomous AI agents to automate complex multi-step workflows",
          "Integrating intelligent AI systems for enterprise operational efficiency",
        ],
      },
      {
        degree: "Project DPro (PMD Pro)",
        school: "PM4NGOs",
        year: "2025",
        badge: "Project Management",
        details: [
          "Globally recognized standard for Project Management in the development & humanitarian sector",
          "Disciplined execution in project lifecycle, risk mitigation, and resource planning",
          "Structured solution development for complex and fast-changing environments",
        ],
      },
      {
        degree: "MEAL DPRO",
        school: "Medalah Foundation for Development",
        year: "2024",
        badge: "MEAL Certified",
        details: [
          "Monitoring, Evaluation, Accountability, and Learning (MEAL) methodology",
          "Data analysis and indicator design for measuring impact and service quality",
          "Promoting accountability mechanisms and data-driven feedback loops",
        ],
      },
    ],
  },

  skills: {
    title: "Expertise & Skills",
    technicalTitle: "Technical Arsenal",
    technicalTag: "Proficiency",
    traitsTitle: "Professional Traits",
    traitsTag: "Core Competencies",
    technical: [
      "Hardware & Software Troubleshooting",
      "Network Security & FortiGate Firewall",
      "AI Technologies & AI Agents (Claude / Google)",
      "Data Analysis & Office Computer Skills",
      "Database Administration & Web Design",
    ],
    soft: [
      "Data Analysis",
      "Leadership and Teamwork",
      "Decision-making",
      "Adaptability",
      "Planning & Solution Development",
      "Risk Management",
    ],
    calloutTitle: "Committed to Innovation & Technical Excellence",
    calloutBody:
      "Passionate about AI technologies, AI agent orchestration, FortiGate network security, and delivering resilient humanitarian IT solutions.",
  },

  contact: {
    titleLead: "Let's",
    titleAccent: "Connect",
    body:
      "Currently open for technical opportunities, NGO IT infrastructure projects, and AI solution collaborations. Feel free to reach out directly!",
    phoneDisplay: "779201815 - 737166513 (+967)",
    copyEmailAria: "Copy email address",
    copyPhoneAria: "Copy phone number",
    composeAria: "Open in your email app",
    callAria: "Call this number",
    copiedEmail: "Email address copied",
    copiedPhone: "Phone number copied",
    copyFailedTitle: "Couldn't copy automatically",
    copyFailedBody: "Please select and copy it manually.",
    form: {
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      emailLabel: "Your Email",
      emailPlaceholder: "john@example.com",
      messageLabel: "Message",
      messagePlaceholder: "How can I help you?",
      submit: "Send Message",
      sending: "Sending…",
      successTitle: "Message sent",
      successBody: "Thanks for reaching out — I'll reply as soon as I can.",
      errorTitle: "Message not sent",
      errorBody: "Something went wrong. Please email me directly at delov.ahmed@gmail.com.",
      notConfiguredTitle: "Form not active yet",
      notConfiguredBody: "Please email me directly at delov.ahmed@gmail.com.",
    },
  },

  footer: {
    backToTop: "Back to top",
    banner: "Innovate & Build",
    morphing: [
      "IT Professional",
      "FortiGate & Network Security",
      "AI Specialist & Agents",
      "Database Admin & Web Design",
      "Ahmed Fadhl",
    ],
    copyrightBefore: "Ahmed Fadhl. Crafted with",
    copyrightAfter: "& Lightswind UI",
  },
};

/** The Arabic dictionary must mirror the English one key-for-key. */
export type Dict = typeof en;

export const ar: Dict = {
  meta: {
    title: "أحمد فضل | البورتفوليو",
  },

  common: {
    name: "أحمد فضل",
    initials: "AF",
    role: "محترف تقنية معلومات",
    roleLong: "محترف تقنية معلومات ومتخصص ذكاء اصطناعي",
    location: "عدن، اليمن",
    emailLabel: "البريد الإلكتروني",
  },

  nav: {
    home: "الرئيسية",
    about: "نبذة",
    services: "الخدمات",
    career: "المسار المهني",
    education: "التعليم",
    contact: "تواصل",
  },

  hero: {
    available: "متاح للعمل",
    greeting: "مرحباً، أنا",
    summary:
      "محترف تقنية معلومات موجّه بالنتائج، حاصل على بكالوريوس في تقنية المعلومات واعتمادَي PMD Pro و MEAL DPro الدوليين. متخصص في الدعم الفني، وأمن الشبكات بجدران حماية FortiGate، ووكلاء الذكاء الاصطناعي.",
    ctaExperience: "استعرض الخبرات",
    ctaContact: "تواصل معي",
    card: {
      hint: "اسحب البطاقة أو انقر عليها",
      specialtyLabel: "التخصص",
      specialtyValue: "تقنية معلومات وأمن وذكاء اصطناعي",
      locationLabel: "الموقع",
      educationLabel: "المؤهل",
      educationValue: "بكالوريوس تقنية معلومات",
      statusLabel: "الحالة",
      statusValue: "متاح",
      badgeTag: "محترف تقنية معلومات",
    },
  },

  techStack: {
    items: [
      "أمن FortiGate",
      "Claude AI",
      "Google AI",
      "Windows و Office",
      "تشخيص العتاد",
      "إدارة قواعد البيانات",
      "MySQL",
      "تطوير الويب",
      "React",
      "TypeScript",
      "Project DPro",
      "أنظمة MEAL",
    ],
  },

  about: {
    titleLead: "الملف",
    titleAccent: "المهني",
    body:
      "محترف تقنية معلومات موجّه بالنتائج، حاصل على بكالوريوس في تقنية المعلومات واعتمادَي PMD Pro و MEAL DPro. سجلّ مُثبت في تقديم الدعم الفني من المستوى الأول، ومعالجة أعطال العتاد والبرمجيات بشكل شامل، وضبط إعدادات أمن الشبكات، بخبرة متخصصة داخل قطاع المنظمات الإنسانية غير الحكومية. مهارة عالية في الحفاظ على استقرار البنية التحتية، وإدارة البيئات التقنية، وتحسين أنظمة الطاقة الاحتياطية المحلية. شغوف بتقنيات الذكاء الاصطناعي ووكلائه المستقلين، مع التزام راسخ بدفع الابتكار وتقديم حلول تقنية استشرافية.",
    stats: [
      { label: "تقنية المعلومات والدعم الفني", value: "+3 سنوات" },
      { label: "الدرجات والشهادات", value: "+5" },
      { label: "FortiGate والأمن", value: "مستوى مؤسسي" },
      { label: "المنظمات الإنسانية", value: "FMF / MEAL" },
    ],
  },

  services: {
    title: "ما الذي أقدّمه",
    subtitle:
      "دعم فني موثوق، وإعدادات شبكات آمنة، وحلول ذكاء اصطناعي استشرافية.",
    items: [
      {
        title: "الدعم الفني ومعالجة الأعطال",
        description:
          "تشخيص شامل لأعطال العتاد والبرمجيات والاتصال. دعم من الخط الأول على أنظمة Windows وتطبيقات Office، وتحسين أنظمة الطاقة الاحتياطية المحلية.",
      },
      {
        title: "أمن الشبكات و FortiGate",
        description:
          "ضبط ومراقبة جدران الحماية FortiGate، وسياسات وصول أجهزة المستخدمين، والبنية الأساسية للشبكة لضمان اتصال آمن.",
      },
      {
        title: "تقنيات الذكاء الاصطناعي ووكلاؤه",
        description:
          "توظيف المهارات المعتمدة من Claude و Google AI لتصميم وكلاء مستقلين وتدفقات عمل ذكية تحلّ مشكلات واقعية.",
      },
      {
        title: "تصميم الويب وإدارة قواعد البيانات",
        description:
          "إدارة قواعد البيانات، وبناء معمارية المواقع، وتصميم ويب متجاوب مع مراقبة مستمرة لجودة الخدمة.",
      },
    ],
  },

  career: {
    title: "الرحلة المهنية",
    subtitle: "مسار متطوّر من القيادة والابتكار والأثر",
    items: [
      {
        year: "2026 – حتى الآن",
        title: "مستشار ذكاء اصطناعي وأنظمة مخصصة",
        subtitle: "عمل حر / متخصص تقني مستقل",
        description:
          "تطوير أنظمة مخصصة وحلول برمجية مفصّلة على احتياجات الأعمال المختلفة. استشارة الشركات الصغيرة وتمكينها من دمج الذكاء الاصطناعي، وأتمتة تدفقات العمل التشغيلية، ورفع كفاءتها الرقمية.",
      },
      {
        year: "2025",
        title: "مساعد تقنية معلومات",
        subtitle: "متدرّب – مؤسسة التضامن للتنمية الإنسانية (FMF)",
        description:
          "تشخيص وحلّ أعطال العتاد والبرمجيات لموظفي المؤسسة. ضبط ومراقبة جدار الحماية FortiGate لتأمين الوصول إلى الشبكة. تركيب وصيانة أجهزة المستخدمين والاتصال الشبكي الأساسي. تقديم دعم فني من الخط الأول على Windows وتطبيقات Office.",
      },
      {
        year: "2024 (6 أشهر)",
        title: "دعم فني",
        subtitle: "شركة إبداع سوفت (aibdae suft)",
        description:
          "تشخيص وحلّ أعطال العتاد والبرمجيات والاتصال لعملاء محليين. الإنصات الفعّال لملاحظات المستخدمين التقنية لتشخيص المشكلات وتقديم حلول سريعة.",
      },
      {
        year: "2022 – 2023",
        title: "تطوير الويب",
        subtitle: "عمل حر",
        description:
          "إدارة قواعد البيانات وتصميم المواقع. تلقّي تقييمات العملاء ومتابعة جودة الخدمة وتقييمها باستمرار.",
      },
    ],
  },

  education: {
    titleLead: "التعليم",
    titleAccent: "والشهادات",
    subtitle:
      "درجة أكاديمية رسمية واعتمادات دولية معتمدة في البنية التحتية لتقنية المعلومات، وتقنيات الذكاء الاصطناعي، وحوكمة المشاريع.",
    items: [
      {
        degree: "بكالوريوس تقنية المعلومات",
        school: "جامعة العلوم والتكنولوجيا",
        year: "2019 – 2023",
        badge: "درجة جامعية",
        details: [
          "منهج صارم على مدى 4 سنوات يغطي نظم تقنية المعلومات وهندسة الشبكات وتشخيص البرمجيات",
          "تركيز عميق على إدارة قواعد البيانات وإعداد أنظمة التشغيل ومعالجة الأعطال التقنية",
          "التخرّج بكفاءات عملية واقعية عبر بيئات تقنية المعلومات والبنية التحتية",
        ],
      },
      {
        degree: "شهادة Google AI الاحترافية",
        school: "Google",
        year: "2026",
        badge: "معتمد في الذكاء الاصطناعي",
        details: [
          "إتقان معمّق لأسس الذكاء الاصطناعي الحديث ونماذج تعلّم الآلة",
          "هندسة عملية بأدوات الذكاء الاصطناعي التوليدي وأتمتة تدفقات العمل",
          "قيادة حلول تقنية مبتكرة واستشرافية للمؤسسات الحديثة",
        ],
      },
      {
        degree: "متخصص Claude AI",
        school: "ANTHROPIC",
        year: "2026",
        badge: "وكلاء الذكاء الاصطناعي",
        details: [
          "تخصص في معماريات نماذج Claude، وتحسين السياق، والهندسة المتقدمة للبرومبت",
          "تنسيق وكلاء ذكاء اصطناعي مستقلين لأتمتة تدفقات عمل مركّبة متعددة الخطوات",
          "دمج أنظمة ذكاء اصطناعي ذكية لرفع الكفاءة التشغيلية في المؤسسات",
        ],
      },
      {
        degree: "Project DPro (PMD Pro)",
        school: "PM4NGOs",
        year: "2025",
        badge: "إدارة المشاريع",
        details: [
          "المعيار المعترف به عالمياً لإدارة المشاريع في قطاع التنمية والعمل الإنساني",
          "تنفيذ منضبط لدورة حياة المشروع وتخفيف المخاطر وتخطيط الموارد",
          "تطوير حلول منظّمة للبيئات المعقّدة وسريعة التغيّر",
        ],
      },
      {
        degree: "MEAL DPRO",
        school: "مؤسسة معدلة للتنمية",
        year: "2024",
        badge: "معتمد في MEAL",
        details: [
          "منهجية المراقبة والتقييم والمساءلة والتعلّم (MEAL)",
          "تحليل البيانات وتصميم المؤشرات لقياس الأثر وجودة الخدمة",
          "تعزيز آليات المساءلة وحلقات التغذية الراجعة المسنودة بالبيانات",
        ],
      },
    ],
  },

  skills: {
    title: "الخبرات والمهارات",
    technicalTitle: "الترسانة التقنية",
    technicalTag: "مستوى الإتقان",
    traitsTitle: "السمات المهنية",
    traitsTag: "الكفاءات الجوهرية",
    technical: [
      "معالجة أعطال العتاد والبرمجيات",
      "أمن الشبكات وجدار الحماية FortiGate",
      "تقنيات ووكلاء الذكاء الاصطناعي (Claude / Google)",
      "تحليل البيانات ومهارات الحاسوب المكتبية",
      "إدارة قواعد البيانات وتصميم الويب",
    ],
    soft: [
      "تحليل البيانات",
      "القيادة والعمل الجماعي",
      "اتخاذ القرار",
      "المرونة والتكيّف",
      "التخطيط وتطوير الحلول",
      "إدارة المخاطر",
    ],
    calloutTitle: "التزام بالابتكار والتميّز التقني",
    calloutBody:
      "شغف بتقنيات الذكاء الاصطناعي وتنسيق وكلائه، وأمن الشبكات بـ FortiGate، وتقديم حلول تقنية صامدة للقطاع الإنساني.",
  },

  contact: {
    titleLead: "لنبقَ على",
    titleAccent: "تواصل",
    body:
      "متاح حالياً للفرص التقنية، ومشاريع البنية التحتية لتقنية المعلومات في المنظمات، والتعاون في حلول الذكاء الاصطناعي. لا تتردد في التواصل مباشرة!",
    phoneDisplay: "779201815 - 737166513 (+967)",
    copyEmailAria: "نسخ البريد الإلكتروني",
    copyPhoneAria: "نسخ رقم الهاتف",
    composeAria: "فتح في برنامج البريد",
    callAria: "الاتصال بهذا الرقم",
    copiedEmail: "تم نسخ البريد الإلكتروني",
    copiedPhone: "تم نسخ رقم الهاتف",
    copyFailedTitle: "تعذّر النسخ تلقائياً",
    copyFailedBody: "رجاءً حدّده وانسخه يدوياً.",
    form: {
      nameLabel: "اسمك",
      namePlaceholder: "محمد أحمد",
      emailLabel: "بريدك الإلكتروني",
      emailPlaceholder: "you@example.com",
      messageLabel: "رسالتك",
      messagePlaceholder: "كيف يمكنني مساعدتك؟",
      submit: "إرسال الرسالة",
      sending: "جارٍ الإرسال…",
      successTitle: "تم إرسال رسالتك",
      successBody: "شكراً لتواصلك — سأردّ عليك في أقرب وقت.",
      errorTitle: "لم تُرسَل الرسالة",
      errorBody: "حدث خطأ ما. رجاءً راسلني مباشرة على delov.ahmed@gmail.com.",
      notConfiguredTitle: "النموذج غير مُفعّل بعد",
      notConfiguredBody: "رجاءً راسلني مباشرة على delov.ahmed@gmail.com.",
    },
  },

  footer: {
    backToTop: "العودة للأعلى",
    banner: "ابتكر وابنِ",
    morphing: [
      "محترف تقنية معلومات",
      "FortiGate وأمن الشبكات",
      "متخصص ذكاء اصطناعي ووكلاء",
      "إدارة قواعد البيانات وتصميم الويب",
      "أحمد فضل",
    ],
    copyrightBefore: "أحمد فضل. صُنع بـ",
    copyrightAfter: "و Lightswind UI",
  },
};

export const dictionary = { en, ar };
