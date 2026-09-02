/**
 * Portfolio Projects Data Repository
 * Real-world projects & practical software experience
 * Author: Nazmus Sakib (Junior Web Developer & Support Engineer)
 */
const projectsData = [
  {
    id: "tims-lms",
    title: "TIMS - Training Institute Management System",
    category: "laravel",
    categoryLabel: "Training Institute Management",
    featured: true,
    description: "Training Institute Management System featuring course and cohort management, student registration, certificate generation, dynamic custom fields, and GDPR tools.",
    fullDescription: "A comprehensive Training Institute Management System built with PHP and Laravel. Includes course and cohort management, student registration workflows, certificate management, dynamic custom fields, email marketing functionality, PDF presentation module, drag-and-drop ordering, soft deletes, and complete GDPR-related compliance features such as cookie consent and personal data export.",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "GDPR Tools", "PDF Module"],
    highlights: {
      "Type": "Training Institute Management",
      "Key Modules": "Courses, Cohorts, Certificates",
      "Features": "GDPR Tools & PDF Module"
    },
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://lms.rovixor.com/",
    liveNote: "Demo system available (Note: Some administrative modules require login credentials).",
    isPrivateRepo: true
  },
  {
    id: "shopperzz",
    title: "Shopperzz - PWA eCommerce CMS with POS",
    category: "ecommerce",
    categoryLabel: "eCommerce / POS / PWA",
    featured: true,
    description: "Progressive Web App eCommerce CMS featuring an integrated POS system, WhatsApp ordering, cart management, and inventory tracking.",
    fullDescription: "Contributed to developing and maintaining a modern PWA eCommerce CMS. Worked on the POS interface using Vue 3 and Pinia state management, cart processing, barcode scanner support, receipt printing, WhatsApp ordering workflows, and MySQL database structure.",
    tags: ["Laravel", "Vue 3", "Pinia", "JavaScript", "MySQL", "PWA", "POS"],
    highlights: {
      "Frontend": "Vue 3 & Pinia State",
      "Ordering": "Web & WhatsApp Ordering",
      "Features": "POS Cart & Receipt Printing"
    },
    image: "https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "",
    liveNote: "Production eCommerce product.",
    isPrivateRepo: true
  },
  {
    id: "foodking",
    title: "FoodKing - Restaurant eCommerce & Ordering System",
    category: "ecommerce",
    categoryLabel: "Restaurant eCommerce & Support",
    featured: true,
    description: "Laravel-based multi-branch restaurant eCommerce product, online food ordering platform, and POS system.",
    fullDescription: "Developed, maintained, and provided technical support for FoodKing. Worked on eCommerce functionality, admin control panels, customer-facing web application features, receipt printing (PrintNode integration), cooking station printing, payment workflows, and server troubleshooting on cPanel and Linux environments.",
    tags: ["Laravel", "PHP", "MySQL", "Vue.js", "PrintNode", "POS", "Support"],
    highlights: {
      "Type": "Restaurant eCommerce Software",
      "Features": "POS, Admin & Customer App",
      "Role": "Development & Technical Support"
    },
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "",
    liveNote: "Production software product.",
    isPrivateRepo: true
  },
  {
    id: "goschool-erp",
    title: "GoSchool ERP - School & Education Management System",
    category: "systems",
    categoryLabel: "Education Management ERP",
    featured: true,
    description: "Multi-module school management ERP covering student and teacher records, classes, attendance, examinations, fee collection, and institutional reporting.",
    fullDescription: "Contributed to feature development, maintenance, and bug fixes across multiple functional modules of GoSchool ERP, including Students, Parents, Teachers, Classes, Sections, Subjects, Attendance tracking, Examinations & Results, Fees/Payments, Accounts, Library, Transport, HR/Staff, Communication, and Reports.",
    tags: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript", "ERP"],
    highlights: {
      "Domain": "School & Education ERP",
      "Key Modules": "Students, Exams, Fees, HR",
      "Database": "Relational MySQL"
    },
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "",
    liveNote: "Enterprise institutional ERP.",
    isPrivateRepo: true
  },
  {
    id: "shopking",
    title: "ShopKing - eCommerce & Retail Software Product",
    category: "ecommerce",
    categoryLabel: "Retail & eCommerce",
    featured: false,
    description: "eCommerce and retail management product featuring catalog management, multi-payment options, customer accounts, and order processing.",
    fullDescription: "Implemented features, resolved application-level issues, and assisted with customer deployments and hosting setup for ShopKing. Handled catalog management, cart logic, payment processing workflows, and administrative dashboards.",
    tags: ["Laravel", "PHP", "MySQL", "Vue.js", "REST API", "Tailwind CSS"],
    highlights: {
      "Type": "eCommerce & Retail Software",
      "Backend": "Laravel & MySQL",
      "Role": "Feature Updates & Maintenance"
    },
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "",
    liveNote: "Production retail product.",
    isPrivateRepo: true
  },
  {
    id: "quickpass",
    title: "QuickPass - Visitor Management System",
    category: "systems",
    categoryLabel: "Enterprise Web Application",
    featured: false,
    description: "Digital visitor logging and security pass management system designed for corporate offices and institutions.",
    fullDescription: "Laravel-based visitor management application streamlining guest check-ins, visitor pass generation, host notifications, and check-out logs with a secure administrative dashboard.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    highlights: {
      "Type": "Visitor Management System",
      "Panel": "Admin Management Console",
      "Stack": "PHP, Laravel, MySQL"
    },
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "",
    liveNote: "Corporate visitor management.",
    isPrivateRepo: true
  },
  {
    id: "foodscan",
    title: "FoodScan - Digital Menu & Food Ordering",
    category: "ecommerce",
    categoryLabel: "Web Application",
    featured: false,
    description: "Digital food menu and order management application designed for restaurants and dining establishments.",
    fullDescription: "Contributed to developing and maintaining the web-based menu catalog, category browsing, order submission, and administrative product management.",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5/CSS3"],
    highlights: {
      "Category": "Dining & Menu Management",
      "Database": "MySQL Relational Structure",
      "Role": "Development & Bug Fixing"
    },
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "",
    liveNote: "Food menu & ordering software.",
    isPrivateRepo: true
  },
  {
    id: "itest-exam",
    title: "iTest - Online Examination Platform",
    category: "systems",
    categoryLabel: "Assessment Platform",
    featured: false,
    description: "Online assessment platform featuring timed question sets, candidate management, automated scoring, and performance analytics.",
    fullDescription: "Developed and maintained features for online assessment delivery, question bank management, dynamic exam generation, timed submission handling, and automated grading reports.",
    tags: ["Laravel", "PHP", "MySQL", "JavaScript", "CRUD / MVC"],
    highlights: {
      "Capability": "Timed Assessments & Grading",
      "Data Model": "Question Banks & Results",
      "Backend": "Laravel & MySQL"
    },
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "",
    liveNote: "Online examination system.",
    isPrivateRepo: true
  },
  {
    id: "bontado",
    title: "Bontado - Multi-Tenant SaaS Web Application",
    category: "laravel",
    categoryLabel: "Multi-Tenant SaaS",
    featured: false,
    description: "Multi-tenant software application with tenant data isolation, subscription management, and centralized administration.",
    fullDescription: "Contributed to maintaining multi-tenant database operations, tenant onboarding workflows, bug fixing, and backend feature enhancements using Laravel and MySQL.",
    tags: ["Laravel", "PHP", "MySQL", "Multi-Tenancy", "REST API"],
    highlights: {
      "Model": "Multi-Tenant SaaS",
      "Data": "Tenant Data Isolation",
      "Stack": "PHP, Laravel, MySQL"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "",
    liveNote: "Multi-tenant SaaS project.",
    isPrivateRepo: true
  }
];
