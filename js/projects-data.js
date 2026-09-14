/**
 * Portfolio Projects Data Repository
 * Verified Real-World Projects from GitHub: https://github.com/NS-Duronto
 * Developer: Nazmus Sakib (Junior Web Developer & Support Engineer)
 */
const projectsData = [
  {
    id: "realtime-food-delivery-system",
    title: "Realtime Food Delivery & Restaurant Platform",
    category: "laravel",
    categoryLabel: "Realtime Food Delivery & POS",
    featured: true,
    description: "Full-scale multi-branch food delivery and restaurant platform with live order tracking, Kitchen Display System (KDS), rider dispatch, POS counter, and payment gateways.",
    fullDescription: "A high-performance Realtime Food Delivery and Restaurant Management platform developed with PHP, Laravel, and Vue.js. Features live WebSocket / Pusher order tracking, responsive customer ordering portal, Kitchen Display System (KDS) for chef order management, delivery partner dispatch module, and POS counter billing with AutoPrint thermal receipt printing. Integrated with multiple payment gateways (bKash, Nagad, Stripe, PayPal, Cashfree, COD) and SMS notification alerts.",
    tags: ["PHP 8.2", "Laravel", "Vue.js", "Pusher / WebSockets", "MySQL", "POS AutoPrint", "Payment Gateways", "REST APIs"],
    highlights: {
      "Realtime": "Live Order Tracking & Pusher",
      "POS & Print": "Thermal AutoPrint & KDS",
      "Payments": "bKash, Nagad, Stripe, PayPal"
    },
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/NS-Duronto/Restaurant-Management-System",
    liveUrl: "",
    isPrivateRepo: false
  },
  {
    id: "ecommerce-inventory-pos-platform",
    title: "Modern eCommerce & Inventory Management Platform",
    category: "laravel",
    categoryLabel: "eCommerce / POS & Inventory",
    featured: true,
    description: "Full-featured eCommerce web application with dynamic product catalog, inventory tracking, coupon management, POS billing counter, and automated invoice PDF generation.",
    fullDescription: "A production-grade eCommerce and multi-branch inventory management platform engineered with PHP, Laravel, and Vue.js. Features dynamic product catalogs with variants, attributes, and SKU stock tracking. Includes interactive cart workflows, discount vouchers, multi-gateway online checkout (bKash, Nagad, Cards), point-of-sale (POS) terminal with barcode scanner support, automated PDF invoices, and comprehensive sales reporting.",
    tags: ["Laravel", "PHP", "Vue.js", "MySQL", "eCommerce", "Inventory Management", "POS Billing", "REST APIs"],
    highlights: {
      "eCommerce": "Multi-category Catalog & Cart",
      "Inventory": "Stock Alerts & Variant SKUs",
      "POS & Billing": "Barcode & Invoice PDF"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/NS-Duronto",
    liveUrl: "",
    isPrivateRepo: false
  },
  {
    id: "visitor-management-system",
    title: "Visitor Management System",
    category: "systems",
    categoryLabel: "Security & Pass System",
    featured: true,
    description: "Digital visitor logging, entry/exit timestamp tracking, host visit notifications, and security pass management system built with Laravel.",
    fullDescription: "An enterprise-grade Visitor Management System designed to streamline front-desk operations for corporate offices and institutions. Built using PHP, Laravel, and MySQL with responsive Blade views. Features include visitor registration, ID check-in, purpose tracking, entry/exit timestamp logging, and searchable audit trails for facilities security.",
    tags: ["PHP", "Laravel", "MySQL", "Blade", "Bootstrap", "Security"],
    highlights: {
      "Type": "Visitor Management",
      "Panel": "Admin & Front Desk",
      "Stack": "Laravel & MySQL"
    },
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/NS-Duronto/Visitor-Management-System",
    liveUrl: "",
    isPrivateRepo: false
  },
  {
    id: "lms-system",
    title: "Learning Management System (LMS)",
    category: "laravel",
    categoryLabel: "Education Management",
    featured: true,
    description: "Modern learning and training management platform for course cataloging, student enrollments, batch management, and academic tracking.",
    fullDescription: "A full-scale Learning Management System developed with Laravel, Vue.js, and MySQL. Features include course curriculum structuring, lesson categorization, student enrollment workflows, batch assignments, and administrative dashboards for instructors and program administrators.",
    tags: ["PHP", "Laravel", "Vue.js", "MySQL", "Education", "REST API"],
    highlights: {
      "Domain": "Education & Courses",
      "Stack": "Laravel & Vue.js",
      "Architecture": "Clean MVC & APIs"
    },
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/NS-Duronto/LMS",
    liveUrl: "",
    isPrivateRepo: false
  },
  {
    id: "nuxt-practice-app",
    title: "Modern Web App (Nuxt 3 & Vue 3)",
    category: "frontend",
    categoryLabel: "Nuxt / TypeScript / Vue 3",
    featured: true,
    description: "Interactive modern frontend application built with Nuxt 3, Vue 3, and TypeScript exploring server-side rendering (SSR) and reactive UI state.",
    fullDescription: "A modern web application demonstrating frontend engineering with Nuxt 3, Vue 3 Composition API, and TypeScript. Implements server-side rendering (SSR), Pinia reactive state stores, modular component architecture, and responsive CSS for optimal web performance.",
    tags: ["Nuxt 3", "Vue 3", "TypeScript", "Vite", "Pinia", "Modern Frontend"],
    highlights: {
      "Framework": "Nuxt 3 & Vue 3",
      "Language": "TypeScript",
      "Rendering": "SSR & Reactive State"
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/NS-Duronto/Nuxt_Practice",
    liveUrl: "",
    isPrivateRepo: false
  },
  {
    id: "photocard-app",
    title: "Photocard Web Application",
    category: "laravel",
    categoryLabel: "Web Utility Application",
    featured: false,
    description: "Dynamic photocard customization and generation tool developed with Laravel, Blade templates, and JavaScript UI interactions.",
    fullDescription: "A dedicated web utility developed to customize, style, and generate photocards. Implements template layout rendering, responsive real-time previews, and structured data handling using PHP, Laravel, and client-side JavaScript.",
    tags: ["PHP", "Laravel", "Blade", "JavaScript", "HTML5 Canvas"],
    highlights: {
      "Type": "Card Generation Tool",
      "Stack": "Laravel & Blade",
      "Frontend": "Dynamic JS"
    },
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/NS-Duronto/photocard",
    liveUrl: "",
    isPrivateRepo: false
  },
  {
    id: "tafsir-app",
    title: "Tafsir Web Platform",
    category: "systems",
    categoryLabel: "Digital Reference Platform",
    featured: false,
    description: "Digital Quranic tafsir reference web application with structured chapter indexing, reader-optimized styling, and responsive navigation.",
    fullDescription: "A digital reference platform presenting indexed Quranic tafsir texts with high readability typography, search filtering, chapter navigation, and clean, fast-loading responsive web interfaces.",
    tags: ["JavaScript", "HTML5", "CSS3", "JSON", "Responsive Web"],
    highlights: {
      "Category": "Digital Reference App",
      "Interface": "High-Readability UI",
      "Technology": "Vanilla JS & CSS3"
    },
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/NS-Duronto/tafsir",
    liveUrl: "",
    isPrivateRepo: false
  },
  {
    id: "interactive-portfolio",
    title: "Developer Portfolio & CLI Terminal",
    category: "frontend",
    categoryLabel: "Creative Frontend & Canvas",
    featured: false,
    description: "Interactive portfolio featuring real-time particle background, fully functional developer CLI terminal, theme switcher, and responsive UI.",
    fullDescription: "A modern developer portfolio built using semantic HTML5, pure CSS3 design tokens, and modular vanilla JavaScript. Features an interactive terminal emulator, particle canvas background, magnetic cursor effect, dark/light modes, and multi-color accent switcher.",
    tags: ["JavaScript", "HTML5 Canvas", "CSS3", "CLI Terminal", "Aesthetic UI"],
    highlights: {
      "Features": "CLI Terminal & Particle Canvas",
      "Design": "Glassmorphism & Theme Switcher",
      "Stack": "Vanilla JS & CSS3"
    },
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/NS-Duronto/portfolio",
    liveUrl: "",
    isPrivateRepo: false
  }
];
