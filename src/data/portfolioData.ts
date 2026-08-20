import { Project, Service } from '../types';

import portraitImg from '../assets/images/designer_portrait_png_1786282854102.jpg';
import anassPortraitImg from '../assets/images/regenerated_image_1786287595697.png';
import saasWebImg from '../assets/images/project_saas_web_1786228043768.jpg';
import noCodeAppImg from '../assets/images/project_nocode_app_1786228055167.jpg';
import designSystemImg from '../assets/images/project_design_system_1786228068168.jpg';

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
    title: "UI/UX Design",
    shortDesc: "User research, wireframing, high-fidelity prototypes & design systems.",
    fullDesc: "Architecting intuitive digital interfaces that balance sleek visual aesthetics with frictionless user journeys across desktop and mobile screens.",
    tags: [
      "User Experience Strategy",
      "Wireframing & Flowmaps",
      "Figma Design Systems",
      "Micro-Interactions",
      "Usability Testing"
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
    featured: true
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
