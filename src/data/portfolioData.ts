import { Project, Service } from '../types';

import portraitImg from '../assets/images/designer_portrait_png_1786282854102.jpg';
import anassPortraitImg from '../assets/images/regenerated_image_1786287595697.png';
import saasWebImg from '../assets/images/project_saas_web_1786228043768.jpg';
import noCodeAppImg from '../assets/images/project_nocode_app_1786228055167.jpg';
import designSystemImg from '../assets/images/project_design_system_1786228068168.jpg';
import qualyxHero from '../assets/images/qualyx_hero.png';
import iacrmHero from '../assets/images/iacrm_hero.png';
import mtcHero from '../assets/images/mtc_holistique_hero.png';
import carsHero from '../assets/images/cars_and_co_hero.png';
import natuliqueHero from '../assets/images/natulique_swiss_hero.png';
import jeremieHero from '../assets/images/jeremie_boulaire_hero.png';
import mccpVslHero from '../assets/images/mccp_natulique_vsl_hero.png';
import yachtsHero from '../assets/images/lm_luxe_yachts_hero.png';
import havetHero from '../assets/images/gonzague_havet_hero.png';
import mooineHero from '../assets/images/institut_mooine_hero.png';

export const fallbackPortrait = portraitImg;

export const ANASS_BIO = {
  name: "Anass Harboub",
  role: "UI/UX Designer, Web Designer & Infographiste",
  location: "Morocco",
  tagline: "I design digital experiences people remember.\nFrom intuitive products to immersive websites, I blend UI/UX, motion and AI to turn ideas into experiences.",
  heroQuote: "Designing clear, modern and memorable digital experiences with strong visual direction.",
  heroBadge: "✦ UI/UX • Web Designer • Infographiste",
  aboutHeadline: "Who is Anass Harboub?",
  aboutDescription: "I'm a multidisciplinary designer focused on UI/UX, web design and modern digital experiences. I combine visual design, interaction, no-code tools and AI workflows to turn ideas into polished products.",
  aboutExtended: "With a deep appreciation for typographic hierarchy, dark luxury aesthetics, and seamless user journeys, I bridge the gap between creative visual direction and production-ready code. Whether crafting bespoke web applications or rapid no-code AI prototypes, every detail is engineered for clarity, emotion, and performance.",
  stats: [
    { label: "Completed Projects", value: "50+" },
    { label: "Design System Tokens", value: "1.2k+" },
    { label: "Client Satisfaction", value: "99%" },
    { label: "Years Experience", value: "6+" }
  ],
  socials: {
    behance: "https://behance.net",
    dribbble: "https://dribbble.net",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/212600000000",
    email: "anass.harboub.design@gmail.com"
  },
  portrait: anassPortraitImg
};

export const SERVICES_DATA: Service[] = [
  {
    id: "s1",
    number: "01.",
    title: "Web Design",
    shortDesc: "Landing pages, bespoke portfolios & corporate web platforms.",
    fullDesc: "I design modern, responsive and conversion-focused websites for businesses and startups in Morocco and worldwide. From landing pages and portfolio websites to interactive UI/UX experiences, every website is built for performance, usability and results.",
    tags: [
      "Landing Page Design",
      "Responsive Website Design",
      "Portfolio Websites",
      "Creative Direction",
      "Design Systems",
      "Interactive UI"
    ],
    categoryTab: "web-design"
  },
  {
    id: "s2",
    number: "02.",
    title: "Graphics Designer",
    shortDesc: "Brand visual identity, logos, print media, social kits & marketing graphics.",
    fullDesc: "Crafting distinctive brand identities, bespoke logo systems, brand guidelines, and high-impact graphic design across digital and print media that elevate brand presence and command attention.",
    tags: [
      "Brand & Visual Identity",
      "Logo Design",
      "Print & Editorial Design",
      "Social Media & Ad Creatives",
      "Packaging & Merchandising",
      "Typography & Art Direction"
    ],
    categoryTab: "designer"
  },
  {
    id: "s3",
    number: "03.",
    title: "Vibe No Code",
    shortDesc: "Rapid production-ready websites and AI prototypes built at lightning speed.",
    fullDesc: "Transforming complex concepts into fully functional, high-performance web products using modern no-code engines, Framer, Webflow, and AI workflows.",
    tags: [
      "Framer & Webflow",
      "AI-Assisted Prototyping",
      "Cursor & v0 Integration",
      "Interactive Web Apps",
      "Custom Animations"
    ],
    categoryTab: "vibe-nocode"
  },
  {
    id: "s4",
    number: "04.",
    title: "Application & Dashboard Design",
    shortDesc: "Complex web applications, SaaS dashboards & data visualizers.",
    fullDesc: "Turning dense data structures and intricate workflows into clean, accessible dashboard interfaces that empower users to act with speed.",
    tags: [
      "SaaS Interfaces",
      "Analytics Dashboards",
      "Data Visualization",
      "Component Libraries",
      "Design Systems"
    ],
    categoryTab: "designer"
  },
  {
    id: "s5",
    number: "05.",
    title: "Wireframing & Prototyping",
    shortDesc: "Rapid structural ideation and clickable high-fidelity prototypes.",
    fullDesc: "Building interactive end-to-end user flows to test hypotheses, align stakeholders, and validate user interactions before entering production.",
    tags: [
      "Clickable Prototypes",
      "User Flow Architecture",
      "Interaction Design",
      "Design Handoff",
      "Design Tokens"
    ],
    categoryTab: "designer"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "p_qualyx",
    title: "Qualyx — Native AI That Converts Leads into Clients",
    client: "Qualyx AI",
    category: "Web Design",
    year: "2026",
    description: "Revolutionize your B2B lead generation with a native sales AI platform. Designed for dynamic persona creation and high-converting landing pages.",
    longDescription: "Designed and developed the official landing page and platform UI for Qualyx — the premier native sales AI platform. Features custom lime-green accents, conversion metric badges (+120% conversion rate, -24% sales cycle), dynamic AI persona generators, and a VIP early-access lead funnel.",
    imageUrl: qualyxHero,
    tags: ["Web Design", "Figma", "Landing Page", "WordPress", "HTML/CSS"],
    metrics: [
      { label: "Conversion Boost", value: "+120%" },
      { label: "Sales Cycle", value: "-24%" }
    ],
    deliverables: [
      "High-converting Landing Page Architecture",
      "WordPress & HTML/CSS Custom Integration",
      "AI Persona & Funnel Mockups",
      "Brand Identity & Lime Accent Design System"
    ],
    featured: true
  },
  {
    id: "p_cars",
    title: "Cars & Co — Premium Luxury Car Rental Experience",
    client: "Cars & Co Marrakech",
    category: "Web Design",
    year: "2025",
    description: "High-end car rental platform offering luxury, city, and professional chauffeur vehicles with instant online booking.",
    longDescription: "Designed and developed the digital brand experience and online booking platform for Cars & Co in Marrakech. Features high-end luxury vehicle showcases (Mercedes Class A, Range Rover, Porsche), instant delivery options, and responsive multi-page booking flows.",
    imageUrl: carsHero,
    tags: ["Web Design", "Figma", "WordPress", "Framer", "Illustrator"],
    metrics: [
      { label: "Direct Bookings", value: "+62%" },
      { label: "Fleet Rating", value: "4.9★" }
    ],
    deliverables: [
      "Luxury Gold-Accented Dark Interface",
      "Vehicle Fleet Filter & Instant Reservation System",
      "WordPress & Framer Responsive Development",
      "Custom Vector Illustration & Branding"
    ],
    liveUrl: "https://cars-and-co.com/",
    featured: true
  },
  {
    id: "p_iacrm",
    title: "IACRM — AI at the Heart of Customer Growth",
    client: "IACRM Platform",
    category: "Web Design",
    year: "2025",
    description: "From first contact to long-term retention: a modular, predictive AI-powered CRM landing page engineered for revenue growth.",
    longDescription: "Designed and architected the high-converting landing page for IACRM. Features deep navy blue lighting glows, futuristic circuit frame graphics, interactive CRM feature pillars, and modular conversion funnels.",
    imageUrl: iacrmHero,
    tags: ["Web Design", "Figma", "Landing Page", "WordPress", "Framer"],
    metrics: [
      { label: "Customer Retention", value: "+38%" },
      { label: "Predictive Insights", value: "Real-time" }
    ],
    deliverables: [
      "Editorial Navy Blue Hero & Micro-animations",
      "Interactive CRM Feature Showcase & Framer Motion",
      "WordPress & Custom HTML/CSS Landing Page Integration",
      "Responsive Lead Capture & VIP List Funnel"
    ],
    featured: true
  },
  {
    id: "p_natulique",
    title: "Natulique Swiss — Certified Organic Haircare Distribution",
    client: "Natulique Switzerland",
    category: "Web Design",
    year: "2025",
    description: "Official Swiss e-commerce & distribution platform for certified organic hair products. Features warm beige design and partner portals.",
    longDescription: "Designed and developed the Swiss e-commerce platform and B2B professional portal for Natulique. Features editorial product photography showcases, ammonia-free hair color guides, salon partner registration, and responsive shopping carts.",
    imageUrl: natuliqueHero,
    tags: ["Web Design", "E-Commerce", "Figma", "WordPress", "Framer"],
    metrics: [
      { label: "Salon Partners", value: "120+" },
      { label: "Organic Rating", value: "100% Certified" }
    ],
    deliverables: [
      "Warm Beige Editorial E-Commerce UI",
      "B2B Professional Salon Partner Portal",
      "WordPress & Framer Responsive Development",
      "Custom Product Catalog & Routine Filter"
    ],
    liveUrl: "https://natuliquesuisse.ch/",
    featured: true
  },
  {
    id: "p_yachts",
    title: "LM Luxe Yachts Ibiza — Premium Luxury Yacht Brokerage",
    client: "LM Luxe Yachts Ibiza",
    category: "Web Design",
    year: "2025",
    description: "High-end maritime e-commerce and charter platform for luxury yachts in Ibiza and France with aerial visuals.",
    longDescription: "Designed and developed the luxury maritime showcase and charter reservation platform for LM Luxe Yachts Ibiza. Features high-resolution aerial video integration, custom yacht specification filters, champagne gold editorial UI, and multi-currency inquiry funnels.",
    imageUrl: yachtsHero,
    tags: ["Web Design", "Luxury UI", "Figma", "WordPress", "E-Commerce"],
    metrics: [
      { label: "Charter Inquiries", value: "+68%" },
      { label: "Fleet Value", value: "€45M+" }
    ],
    deliverables: [
      "Champagne Gold Luxury Maritime UI",
      "Interactive Fleet Specification & Charter Filter",
      "WordPress Responsive Integration",
      "Aerial Photography & Video Art Direction"
    ],
    liveUrl: "https://lmluxeyachtsibiza.com/",
    featured: true
  },
  {
    id: "p_mtc",
    title: "MTC Holistique — Center for Physiotherapy & Massage",
    client: "MTC Holistique Center",
    category: "Web Design",
    year: "2026",
    description: "Serene digital experience for a holistic wellness center specializing in physiotherapy and restorative care.",
    longDescription: "Designed the brand identity and official landing page for MTC Holistique. Crafted with warm organic tones, turquoise call-to-actions, online session booking funnels, and mobile-first responsive architecture.",
    imageUrl: mtcHero,
    tags: ["Web Design", "Healthcare", "Figma", "WordPress", "HTML/CSS"],
    metrics: [
      { label: "Online Bookings", value: "+54%" },
      { label: "Client Rating", value: "4.9★" }
    ],
    deliverables: [
      "Serene Organic Landing Page Design",
      "WordPress & HTML/CSS/JS Custom Development",
      "Online Appointment & Session Booking Flow",
      "Mobile & Tablet Responsive Typography"
    ],
    featured: false
  },
  {
    id: "p_jeremie",
    title: "Jérémie Boulaire — Legal Counsel & Doctor of Law",
    client: "Cabinet Jérémie Boulaire",
    category: "Web Design",
    year: "2026",
    description: "Editorial website for Doctor of Law Jérémie Boulaire. Designed with monochrome elegance and gold highlights.",
    longDescription: "Designed and developed the professional legal practice website for Maître Jérémie Boulaire. Features high-end portrait art direction, contract expertise breakdown, client consultation scheduling, and mobile-optimized typography.",
    imageUrl: jeremieHero,
    tags: ["Web Design", "Legal UI", "Figma", "WordPress", "Branding"],
    metrics: [
      { label: "Legal Consultations", value: "+45%" },
      { label: "Degree", value: "Docteur en Droit" }
    ],
    deliverables: [
      "Refined Monochrome Legal Practice UI",
      "Contract & Consumer Law Expertise Architecture",
      "WordPress Responsive Integration",
      "Gold CTA & Portrait Art Direction"
    ],
    liveUrl: "https://jeremieboulaire.fr/",
    featured: false
  },
  {
    id: "p_mccp",
    title: "MCCP Natulique — Head Spa Luxury VSL & Giveaway",
    client: "MCCP Natulique",
    category: "Web Design",
    year: "2026",
    description: "High-converting Video Sales Letter and giveaway landing page combining Japanese scalp therapy with organic science.",
    longDescription: "Designed and developed the high-impact VSL sales funnel and giveaway landing page for Natulique Head Spa in Switzerland. Features a rich espresso brown and cream luxury palette, embedded video sales letter layout, partner bonus badges, and lead capture architecture.",
    imageUrl: mccpVslHero,
    tags: ["Web Design", "VSL Funnel", "Figma", "WordPress", "Conversion"],
    metrics: [
      { label: "VSL Watch Time", value: "78%" },
      { label: "Partner Leads", value: "+52%" }
    ],
    deliverables: [
      "Rich Espresso & Cream Luxury Palette",
      "Video Sales Letter (VSL) Funnel Layout",
      "WordPress Responsive Integration",
      "Giveaway & Lead Capture Architecture"
    ],
    featured: false
  },
  {
    id: "p_havet",
    title: "Gonzague Havet — Digital Transformation Ecosystem",
    client: "Gonzague Havet Consulting",
    category: "Web Design",
    year: "2025",
    description: "High-impact VSL and digital transformation ecosystem page integrating HD Communication and IT Development.",
    longDescription: "Designed and developed the executive consulting portal and VSL sales ecosystem for Gonzague Havet. Features corporate navy blue styling, multi-entity branding (HD Communication, HD Dev, HD Solutions), strategy case study showcases, and executive appointment scheduling.",
    imageUrl: havetHero,
    tags: ["Web Design", "Ecosystem", "Figma", "WordPress", "Framer"],
    metrics: [
      { label: "Enterprise Leads", value: "+84%" },
      { label: "Ecosystem Entities", value: "3 Platforms" }
    ],
    deliverables: [
      "Corporate Deep Navy & Blue Art Direction",
      "Multi-entity Digital Ecosystem Architecture",
      "WordPress & Framer Responsive Development",
      "Video Sales Letter & Executive Booking Funnel"
    ],
    liveUrl: "https://gonzaguehavet.com/",
    featured: false
  },
  {
    id: "p_mooine",
    title: "Institut Mooine — Health & Wellness Center",
    client: "Institut Mooine",
    category: "Web Design",
    year: "2025",
    description: "Tailored digital experience for a health and wellness institute with session booking funnels.",
    longDescription: "Designed and developed the official website and consultation booking funnel for Institut Mooine. Features serene turquoise-teal gradients, customized treatment consultation paths, patient testimonial showcases, and mobile booking integration.",
    imageUrl: mooineHero,
    tags: ["Web Design", "Wellness", "Figma", "WordPress", "UI/UX"],
    metrics: [
      { label: "Care Bookings", value: "+58%" },
      { label: "Patient Rating", value: "4.9★" }
    ],
    deliverables: [
      "Serene Teal & Peach Health & Wellness UI",
      "Customized Slimming & Pain Care Filter",
      "WordPress Responsive Integration",
      "Online Consultation Booking Architecture"
    ],
    liveUrl: "https://www.mooine.com/",
    featured: false
  },
  {
    id: "p1",
    title: "Aura AI — Next Gen SaaS Platform",
    client: "Aura Labs Inc.",
    category: "Web Design",
    year: "2026",
    description: "High-contrast dark mode SaaS landing page and interactive portal with orange highlights.",
    longDescription: "Aura AI needed a visual identity and conversion-driven landing page that communicated high technology with artistic restraint. Designed with bespoke dark glass surfaces, neon orange accent highlights, fluid responsive layouts, and interactive AI demo components.",
    imageUrl: saasWebImg,
    tags: ["Web Design", "Figma", "SaaS", "Interactive UI", "Dark Theme"],
    metrics: [
      { label: "Conversion Lift", value: "+42%" },
      { label: "Page Load Time", value: "0.8s" },
      { label: "User Session", value: "4m 12s" }
    ],
    deliverables: [
      "Hero Landing Page",
      "Interactive Feature Showcase",
      "Dark Mode Component System",
      "Framer No-Code Export"
    ],
    liveUrl: "https://aura-ai-demo.example.com",
    featured: false
  },
  {
    id: "p2",
    title: "VibeStudio — AI Creative Generator",
    client: "Vibe Media Studio",
    category: "Vibe No Code",
    year: "2026",
    description: "Fast-built interactive web app with AI audio-visual generation built via Framer and Cursor.",
    longDescription: "A cutting-edge studio application built using AI-assisted no-code workflows. Enables creators to generate visual prompts, tweak color palettes in real-time, and export design tokens effortlessly.",
    imageUrl: noCodeAppImg,
    tags: ["Vibe No Code", "AI Workflow", "Framer", "Web App", "Prototyping"],
    metrics: [
      { label: "Build Time", value: "3 Days" },
      { label: "Active Users", value: "15k+" },
      { label: "Lighthouse Score", value: "99/100" }
    ],
    deliverables: [
      "No-Code Web Application",
      "Real-time Prompt Interface",
      "Interactive Token Generator",
      "Responsive Mobile Layout"
    ],
    liveUrl: "https://vibestudio-app.example.com",
    featured: true
  },
  {
    id: "p3",
    title: "Orbit Design System & Component Library",
    client: "Orbit Digital Ecosystems",
    category: "Infographiste",
    year: "2025",
    description: "Multi-brand dark theme design system with 1,200+ Figma components and token architecture.",
    longDescription: "A unified design system engineered for a suite of digital products. Features comprehensive typography scales, WCAG-compliant color tokens, dark mode elevation guidelines, and modular React component mappings.",
    imageUrl: designSystemImg,
    tags: ["Infographiste", "Design System", "Figma", "Tokens", "UI/UX"],
    metrics: [
      { label: "Components Built", value: "1,200+" },
      { label: "Team Efficiency", value: "+3.5x" },
      { label: "WCAG Rating", value: "AAA" }
    ],
    deliverables: [
      "Figma Master UI Library",
      "Token Architecture Specs",
      "Interactive Style Guide",
      "Developer Documentation"
    ],
    liveUrl: "https://orbit-design-system.example.com",
    featured: true
  },
  {
    id: "p4",
    title: "Chronos — Luxury Watchmaker E-Commerce",
    client: "Chronos Atelier",
    category: "Web Design",
    year: "2025",
    description: "Editorial, high-fashion e-commerce experience with smooth scroll triggers and 3D product viewer.",
    longDescription: "An immersive digital storefront for bespoke luxury horology. Built with high-contrast typography, dark editorial canvas, custom cursor effects, and subtle orange accents highlighting horological details.",
    imageUrl: saasWebImg,
    tags: ["Web Design", "E-Commerce", "Luxury UI", "Motion Design"],
    metrics: [
      { label: "Cart Value", value: "+65%" },
      { label: "Awwwards Site of the Day", value: "Nominee" }
    ],
    deliverables: [
      "Bespoke E-Commerce UX",
      "3D Product Viewer",
      "Checkout Flow Redesign"
    ],
    liveUrl: "https://chronos-watch.example.com",
    featured: false
  },
  {
    id: "p5",
    title: "Pulse — AI Fitness & Health Companion",
    client: "Pulse Health AI",
    category: "UI/UX",
    year: "2025",
    description: "Mobile app experience for personalized biometric tracking, AI coaching, and habit loops.",
    longDescription: "Designed to make biometric data feel human and inspiring. Features dark mode OLED black backgrounds, warm orange energy meters, intuitive gesture navigation, and biometric summary widgets.",
    imageUrl: noCodeAppImg,
    tags: ["UI/UX", "Mobile App", "Health AI", "iOS Design"],
    metrics: [
      { label: "App Store Rating", value: "4.9/5" },
      { label: "Daily Active Users", value: "45k" }
    ],
    deliverables: [
      "iOS & Android UI Design",
      "Habit Loop UX Framework",
      "Interactive Micro-Animations"
    ],
    liveUrl: "https://pulse-health.example.com",
    featured: false
  },
  {
    id: "p6",
    title: "Atlas No-Code Agency Portal",
    client: "Atlas Creative Studio",
    category: "Vibe No Code",
    year: "2025",
    description: "Dynamic client portal & portfolio site built in Framer with CMS synchronization.",
    longDescription: "An agency showcase featuring smooth page transitions, webgl background shaders, client project dashboard, and instant inquiry booking integration.",
    imageUrl: designSystemImg,
    tags: ["Vibe No Code", "Framer CMS", "Agency", "Web Design"],
    metrics: [
      { label: "Inquiries/Month", value: "120+" }
    ],
    deliverables: [
      "Framer Website & CMS",
      "Client Dashboard Integration",
      "SEO & Speed Optimization"
    ],
    liveUrl: "https://atlas-agency.example.com",
    featured: false
  }
];

export const NO_CODE_TOOLS = [
  { name: "Framer", desc: "Interactive Web Publishing & Motion", icon: "✨" },
  { name: "Webflow", desc: "Custom Visual CMS & Dynamic Code", icon: "🌐" },
  { name: "Lovable & v0", desc: "AI Visual Interface Generation", icon: "⚡" },
  { name: "AI Studio & Cursor", desc: "AI-Powered Fullstack Development", icon: "🤖" },
  { name: "Figma", desc: "UI/UX Architecture & Prototyping", icon: "🎨" },
  { name: "Relume", desc: "AI Wireframing & Site Architecture", icon: "📐" }
];

export const DESIGN_PILLARS = [
  {
    title: "Web Design",
    subtitle: "Web Experiences Built to Stand Out",
    description: "Crafting bespoke landing pages, portfolios, and corporate web platforms that captivate audiences with strong typographic contrast, deliberate negative space, and smooth interactions."
  },
  {
    title: "Vibe No Code",
    subtitle: "Ideas to Product — Faster.",
    description: "Leveraging cutting-edge AI generators and no-code publication engines (Framer, Webflow, Cursor) to transform creative design concepts into production-ready live web products in days."
  },
  {
    title: "Infographiste",
    subtitle: "Création Graphique & Expériences Visuelles",
    description: "Conception graphique complète: identité visuelle, charte graphique, branding, supports de communication web et print, systèmes de design et direction artistique."
  }
];
