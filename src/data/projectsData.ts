export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  coverImage: string;
  videoUrl?: string; // Direct MP4/WebM URL or local file (e.g. "/videos/system-demo.mp4")
  videoDuration?: string; // e.g. "25s Loop"
  description: string;
  bulletPoints: string[];
  galleryImages: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "bawazir-auto-care",
    title: "نظام مركز باوزير لصيانة السيارات (Bawazir Auto Care ERP)",
    category: "Full-Stack ERP / Operations System",
    tagline: "منصة ويب سحابية متقدمة لأتمتة العمليات التشغيلية والمالية مع عزل متعدد الفروع وإصدار فواتير A4 فورية",
    coverImage: "/projects/bawazir/cover.png",
    videoUrl: "/videos/bawazir-system.mp4",
    videoDuration: "فيديو النظام (Loop)",
    description:
      "منصة ويب سحابية متقدمة صُممت لأتمتة العمليات التشغيلية والإدارية لمراكز الصيانة الكبرى، مع لوحات تحكم تفاعلية متزامنة، ونظام عزل بيانات متعدد الفروع (فرع الحسوة / فرع الدرين)، وتقارير محاسبية ولحظية لاتخاذ القرارات بدقة وسرعة.",
    bulletPoints: [
      "لوحة تحكم ومؤشرات أداء مالية (Financial & KPI Dashboard): عرض تفاعلي لحجم المبيعات، الصافي اليومي، المبالغ المتبقية للتحصيل، ومتابعة فورية لنشاط الورشة وسير العمليات.",
      "إدارة متقدمة للصلاحيات والفروع (Multi-Branch & Role-Based Access): عزل تام ومحكم لبيانات الفروع (فرع الحسوة / فرع الدرين)، مع توزيع الصلاحيات بين المشرفين والمدراء لمنع التلاعب وحماية البيانات الحساسة.",
      "إدارة شاملة لدورة الصيانة والعملاء (Work Order & Customer Tracking): أرشفة دقيقة لبيانات العملاء، أنواع المركبات وسنة الصنع، سجلات الأعطال، وحساب مستحقات ونسب المهندسين وفق قواعد أعمال صارمة.",
      "إصدار وطباعة فواتير رسمية فورية (Instant A4 PDF Invoicing): توليد وتصدير فواتير رقمية رسمية بصيغة PDF بنقرة واحدة، مع حساب الخصومات ورسوم الخدمات آلياً وتوافقها مع معايير الفواتير المعتمدة.",
      "سجل تدقيق وحماية للعمليات (Audit & Safe State Handling): تطبيق آليات الحذف الناعم (Soft Delete) لمنع فقدان البيانات وتوثيق حركات التعديل بالوقت والمسؤول، وقيد زمني صارم لحماية الفواتير القديمة من التلاعب.",
      "تصميم Apple فائق السلاسة ومتجاوب بالكامل (Ultra-Responsive UI): واجهة مستخدم عصرية وبسيطة تعتمد أسلوب حواف وتصميم Apple النظيف، متوافقة ومتجاوبة 100% مع الشاشات المكتبية، الأجهزة اللوحية، والهواتف الذكية."
    ],
    galleryImages: [
      "/projects/bawazir/cover.png",
      "/projects/bawazir/screen-1.png",
      "/projects/bawazir/screen-2.png",
      "/projects/bawazir/screen-3.png",
      "/projects/bawazir/screen-4.png"
    ],
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "MySQL",
      "JWT (Jose)",
      "jsPDF",
      "Lucide Icons"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "freelancer-os",
    title: "Freelancer OS — نظام إدارة أعمال المستقلين وحماية العقود",
    category: "Full-Stack Business OS / Operations System",
    tagline: "منصة ويب سحابية متقدمة لأتمتة العمليات الإدارية والمالية مع حماية نطاق العمل (Scope Guard) وفوترة التجاوزات آلياً",
    coverImage: "/projects/freelancer-os/cover.png",
    videoUrl: "/videos/freelancer-os.mp4",
    videoDuration: "فيديو النظام (47s)",
    description:
      "منصة ويب سحابية متقدمة ونظام تشغيلي متكامل (Business Operating System) صُمم خصيصاً لأتمتة دورة العمليات الإدارية والمالية للمستقلين، الاستشاريين، والوكالات التقنية الصغيرة، مع حماية الإيرادات وضبط نطاق العمل (Scope Guard) لفوترة أي تعديلات إضافية آلياً، ودعم محاسبي كامل متعدد العملات (SAR / USD / YER) وخزنة آمنة لبيانات الاعتماد الحساسة.",
    bulletPoints: [
      "لوحة تحكم تفاعلية ومؤشرات أداء لحظية (Interactive Dashboard & Real-Time KPIs): عرض التدفقات النقدية، الساعات المفعلة، التكاليف التشغيلية، ومتابعة المشاريع والاشتراكات بنظام مصدر وحيد للحقيقة (Single Source of Truth) لحساب الحالات والأرصدة ديناميكياً بدون تضارب.",
      "محرك حماية النطاق والفوترة التلقائية (Scope Guard & Overage Billing): خوارزمية ذكية لمتابعة جولات التعديل (Revision Rounds) وساعات العمل المشمولة في العقود (Retainers / Subscriptions)، وحساب التجاوزات وفوترتها بنقرة زر مع ربط البند بالجولة لمنع تكرار الفوترة أو نسيانها.",
      "معمارية الشرائح الرأسية والتحقق الصارم (Vertical-Slice Architecture & Strict Typing): بنية معمارية قائمة على عزل الميزات عمودياً (Feature-Driven) مع منع استخدام any بنسبة 100%، والتحقق الشامل من كل البيانات الصادرة والواردة باستخدام Zod، وفرض معايير جودة نظيفة تحد من حجم الملفات لسهولة الصيانة وقابلية التوسع.",
      "بوابة العميل الرقمية للاعتماد (Token-Scoped Client Portal): روابط مشفرة آمنة ومحدودة الصلاحية تُمنح للعملاء لمتابعة التسليمات وتقديم الملاحظات وتوثيق الاعتماد الرقمي للمراحل بدون الحاجة لإنشاء حسابات مستخدمين معقدة.",
      "خزنة آمنة لبيانات الاعتماد الحساسة (AES-256-GCM Encrypted Vault): حماية وتخزين بيانات وصول العملاء وبيئات عملهم الحساسة بأحدث معايير التشفير العسكري المتماثل مع إدارة المفاتيح محلياً للحفاظ على أقصى درجات الخصوصية والأمان.",
      "نظام محاسبي دقيق خالي من أخطاء الفاصلة العائمة (Zero Float-Drift Financials): إدارة كافة العمليات الحسابية بالأعداد الصحيحة (Minor Units - هللة/سنت)، وتجميد أسعار الصرف التاريخية لحظة إنشاء السند لضمان استقرار التقارير المالية عند تقلب أسعار العملات (SAR / USD / YER)."
    ],
    galleryImages: [
      "/projects/freelancer-os/cover.png",
      "/projects/freelancer-os/screen-1.png",
      "/projects/freelancer-os/screen-2.png",
      "/projects/freelancer-os/screen-3.png",
      "/projects/freelancer-os/screen-4.png"
    ],
    tags: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Hono",
      "Tailwind CSS",
      "Drizzle ORM",
      "SQLite (WAL)",
      "TanStack Query",
      "Zod",
      "AES-256-GCM"
    ],
    liveUrl: "#",
    githubUrl: "#"
  }
];
