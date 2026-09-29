import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ArrowUpRight, ArrowLeft, ArrowRight, RotateCw, Lock, Sparkles, Calendar, Layout, Eye, X, ExternalLink, Monitor, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import qualyxHero from '../assets/images/qualyx_hero.png';
import qualyxSignup from '../assets/images/qualyx_signup.png';
import iacrmHero from '../assets/images/iacrm_hero.png';
import mtcHero from '../assets/images/mtc_holistique_hero.png';
import carsHero from '../assets/images/cars_and_co_hero.png';
import natuliqueHero from '../assets/images/natulique_swiss_hero.png';
import jeremieHero from '../assets/images/jeremie_boulaire_hero.png';
import mccpVslHero from '../assets/images/mccp_natulique_vsl_hero.png';
import yachtsHero from '../assets/images/lm_luxe_yachts_hero.png';
import havetHero from '../assets/images/gonzague_havet_hero.png';
import mooineHero from '../assets/images/institut_mooine_hero.png';

import { WorkFilterCategory } from './WorkFilterMenuBar';

interface WebDesignFeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
  activeFilter?: WorkFilterCategory;
}

export const WebDesignFeaturedProjects: React.FC<WebDesignFeaturedProjectsProps> = ({
  onSelectProject,
  onOpenContact,
  activeFilter = 'all',
}) => {
  const [figmaModal, setFigmaModal] = useState<{ url: string; title: string } | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [selectedDetailProject, setSelectedDetailProject] = useState<typeof projectsData[0] | null>(null);

  const handleCardClick = (project: typeof projectsData[0]) => {
    setSelectedDetailProject(project);
    const el = document.getElementById('web-design-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBackToGrid = () => {
    setSelectedDetailProject(null);
  };

  const getProjectUrl = (id: string, liveUrl?: string) => {
    if (liveUrl) {
      try {
        const u = new URL(liveUrl);
        return u.hostname + (u.pathname === '/' ? '' : u.pathname);
      } catch {
        return liveUrl.replace(/^https?:\/\//, '');
      }
    }
    const urls: Record<string, string> = {
      'qualyx': 'qualyx.ai/en/platform',
      'iacrm': 'iacrm.io/growth-intelligence',
      'mtc-holistique': 'mtcholistique.ch/treatments',
      'cars-and-co': 'carsandco-conciergerie.com',
      'natulique-swiss': 'natuliqueswiss.ch/boutique',
      'jeremie-boulaire': 'jeremieboulaire.fr/cabinet',
      'mccp-natulique-vsl': 'natulique-headspa.com/vsl',
      'lm-luxe-yachts': 'lmluxeyachts.com/fleet',
      'gonzague-havet': 'gonzaguehavet.com/ecosystem',
      'institut-mooine': 'mooine.com/center',
    };
    return urls[id] || 'project-preview.com';
  };

  useEffect(() => {
    setShowAll(false);
    setSelectedDetailProject(null);
  }, [activeFilter]);

  const projectsData = [
    {
      id: 'qualyx',
      number: '01',
      category: 'LANDING PAGE & SAAS',
      title: 'Qualyx — Native AI That Converts Leads into Clients',
      description: 'Revolutionize your B2B lead generation with a native sales AI platform. Designed for dynamic persona creation, hyper-personalized sales funnels, and high-converting landing page experiences.',
      year: '2026',
      type: 'Web Design · UI/UX',
      tags: ['Figma', 'Landing Page', 'WordPress', 'HTML', 'CSS'],
      buttonText: 'View Case Study',
      previewButtons: [
        {
          label: 'Preview',
          icon: Eye,
          url: 'https://www.figma.com/proto/ipb4SrqTEHTXSxBbx3dHx7/landing-page-Qualix?node-id=2-83&viewport=374%2C-1461%2C0.47&t=qfJfejrF345AbaWo-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2%3A83&page-id=0%3A1'
        }
      ],
      projectRef: {
        id: 'p1',
        title: 'Qualyx — Native AI That Converts Leads into Clients',
        category: 'Web Design',
        description: 'Revolutionize your B2B lead generation with a native sales AI platform. Designed for dynamic persona creation, hyper-personalized sales funnels, and high-converting landing page experiences.',
        longDescription: 'Designed and developed the official landing page and platform UI for Qualyx — the premier native sales AI platform. Features custom lime-green accents, conversion metric badges (+120% conversion rate, -24% sales cycle), dynamic AI persona generators, and a VIP early-access lead funnel.',
        imageUrl: qualyxHero,
        tags: ['Figma', 'Landing Page', 'WordPress', 'HTML', 'CSS'],
        client: 'Qualyx AI',
        year: '2026',
        metrics: [
          { label: 'Conversion Boost', value: '+120%' },
          { label: 'Sales Cycle', value: '-24%' }
        ],
        deliverables: [
          'High-converting Landing Page Architecture',
          'WordPress & HTML/CSS Custom Integration',
          'AI Persona & Funnel Mockups',
          'Brand Identity & Lime Accent Design System'
        ]
      } as Project
    },
    {
      id: 'iacrm',
      number: '02',
      category: 'LANDING PAGE & CRM',
      title: 'IACRM — Artificial Intelligence at the Heart of Customer Growth',
      description: 'From first contact to long-term retention: a modular, predictive AI-powered CRM landing page engineered to transform customer data into measurable revenue growth.',
      year: '2025',
      type: 'Web Design · UI/UX',
      tags: ['Figma', 'Landing Page', 'WordPress', 'HTML', 'CSS', 'Framer'],
      buttonText: 'View Case Study',
      previewButtons: [
        {
          label: 'Preview',
          icon: Eye,
          url: 'https://www.figma.com/proto/HBGTkaYAZlcI64CG9Jc2FY/page-de-pr%C3%A9sentation-IRCM?node-id=1-2&page-id=0%3A1&starting-point-node-id=1%3A2&scaling=contain&content-scaling=responsive&t=6fYewU4XZqtYgYRY-1'
        }
      ],
      projectRef: {
        id: 'p2',
        title: 'IACRM — Artificial Intelligence at the Heart of Customer Growth',
        category: 'Web Design',
        description: 'From first contact to long-term retention: a modular, predictive AI-powered CRM landing page engineered to transform customer data into measurable revenue growth.',
        longDescription: 'Designed and architected the high-converting landing page for IACRM. Features deep navy blue lighting glows, futuristic circuit frame graphics, interactive CRM feature pillars, and modular conversion funnels.',
        imageUrl: iacrmHero,
        tags: ['Figma', 'Landing Page', 'WordPress', 'HTML', 'CSS', 'Framer'],
        client: 'IACRM Platform',
        year: '2025',
        metrics: [
          { label: 'Customer Retention', value: '+38%' },
          { label: 'Predictive Insights', value: 'Real-time' }
        ],
        deliverables: [
          'Editorial Navy Blue Hero & Micro-animations',
          'Interactive CRM Feature Showcase & Framer Motion',
          'WordPress & Custom HTML/CSS Landing Page Integration',
          'Responsive Lead Capture & VIP List Funnel'
        ]
      } as Project
    },
    {
      id: 'mtc-holistique',
      number: '03',
      category: 'LANDING PAGE & HEALTHCARE',
      title: 'MTC Holistique — Center for Physiotherapy & Therapeutic Massage',
      description: 'Serene, high-converting digital experience for a holistic wellness center specializing in physiotherapy, therapeutic massage, and restorative care.',
      year: '2026',
      type: 'Web Design · UI/UX',
      tags: ['Figma', 'Landing Page', 'WordPress', 'HTML', 'CSS', 'JS'],
      buttonText: 'View Case Study',
      previewButtons: [
        {
          label: 'Preview Desktop',
          icon: Monitor,
          url: 'https://www.figma.com/proto/IrHFdBTIXfg3p5QJaABIGQ/page-reservation?node-id=4-1739&viewport=-208%2C140%2C0.1&t=GHMjuhC7pYSGBadZ-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=25%3A299&page-id=0%3A1'
        },
        {
          label: 'Preview Mobile',
          icon: Smartphone,
          url: 'https://www.figma.com/proto/IrHFdBTIXfg3p5QJaABIGQ/page-reservation?node-id=25-299&viewport=-208%2C140%2C0.1&t=3NAukApU37OU2IQI-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=25%3A299&page-id=0%3A1'
        }
      ],
      projectRef: {
        id: 'p3',
        title: 'MTC Holistique — Center for Physiotherapy & Therapeutic Massage',
        category: 'Web Design',
        description: 'Serene, high-converting digital experience for a holistic wellness center specializing in physiotherapy, therapeutic massage, and restorative care.',
        longDescription: 'Designed the brand identity and official landing page for MTC Holistique. Crafted with warm organic tones, turquoise call-to-actions, online session booking funnels, and mobile-first responsive architecture.',
        imageUrl: mtcHero,
        tags: ['Figma', 'Landing Page', 'WordPress', 'HTML', 'CSS', 'JS'],
        client: 'MTC Holistique Center',
        year: '2026',
        metrics: [
          { label: 'Online Bookings', value: '+54%' },
          { label: 'Client Rating', value: '4.9★' }
        ],
        deliverables: [
          'Serene Organic Landing Page Design',
          'WordPress & HTML/CSS/JS Custom Development',
          'Online Appointment & Session Booking Flow',
          'Mobile & Tablet Responsive Typography'
        ]
      } as Project
    },
    {
      id: 'cars-and-co',
      number: '04',
      category: 'LANDING PAGE & AUTOMOTIVE',
      title: 'Cars & Co — Premium Luxury Car Rental Experience',
      description: 'High-end car rental platform offering luxury, city, and professional chauffeur vehicles. Features interactive vehicle fleet search, instant online booking, and premium gold-accented dark UI.',
      year: '2025',
      type: 'Web Design · UI/UX',
      tags: ['Figma', 'Landing Page', 'WordPress', 'HTML', 'CSS', 'Framer', 'Illustrator'],
      liveUrl: 'https://cars-and-co.com/',
      buttonText: 'Voir en live',
      previewButtons: [
        {
          label: 'Preview Desktop',
          icon: Monitor,
          url: 'https://www.figma.com/proto/jjcv3JO87Kkc42m8S3MTqd/Cars-And-Co-2025?node-id=162-849&viewport=543%2C265%2C0.03&t=esTWUcZfB4UyKyNn-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=162%3A849&page-id=162%3A848'
        },
        {
          label: 'Preview Mobile',
          icon: Smartphone,
          url: 'https://www.figma.com/proto/gt40ZDi2avcfUd7lXUAraS/mobile?node-id=16-665&page-id=0%3A1&starting-point-node-id=16%3A665&t=foOw8s4NDQ5rBzqy-1'
        }
      ],
      projectRef: {
        id: 'p4',
        title: 'Cars & Co — Premium Luxury Car Rental Experience',
        category: 'Web Design',
        description: 'High-end car rental platform offering luxury, city, and professional chauffeur vehicles. Features interactive vehicle fleet search, instant online booking, and premium gold-accented dark UI.',
        longDescription: 'Designed and developed the digital brand experience and online booking platform for Cars & Co in Marrakech. Features high-end luxury vehicle showcases (Mercedes Class A, Range Rover, Porsche), instant delivery options, and responsive multi-page booking flows.',
        imageUrl: carsHero,
        tags: ['Figma', 'Landing Page', 'WordPress', 'HTML', 'CSS', 'Framer', 'Illustrator'],
        client: 'Cars & Co Marrakech',
        year: '2025',
        liveUrl: 'https://cars-and-co.com/',
        metrics: [
          { label: 'Direct Bookings', value: '+62%' },
          { label: 'Fleet Rating', value: '4.9★' }
        ],
        deliverables: [
          'Luxury Gold-Accented Dark Interface',
          'Vehicle Fleet Filter & Instant Reservation System',
          'WordPress & Framer Responsive Development',
          'Custom Vector Illustration & Branding'
        ]
      } as Project
    },
    {
      id: 'natulique-swiss',
      number: '05',
      category: 'E-COMMERCE & BEAUTY',
      title: 'Natulique Swiss — Certified Organic Haircare Distribution',
      description: 'Official Swiss e-commerce & distribution platform for certified organic hair products. Features elegant warm beige editorial design, professional salon partner portals, and seamless product catalog browsing.',
      year: '2025',
      type: 'Web Design · UI/UX',
      tags: ['Figma', 'Landing Page', 'WordPress', 'HTML', 'CSS', 'Framer', 'Illustrator'],
      liveUrl: 'https://natuliquesuisse.ch/',
      buttonText: 'Voir en live',
      previewButtons: [
        {
          label: 'Preview',
          icon: Eye,
          url: 'https://www.figma.com/proto/OvuACTKch4kH3xUUF3nvh5/MCCP-Natulique---E-Commerce-Website?node-id=1387-780&viewport=2910%2C-10714%2C0.2&t=HI46mXMFVNjRTldW-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1387%3A780&page-id=0%3A1'
        }
      ],
      projectRef: {
        id: 'p5',
        title: 'Natulique Swiss — Certified Organic Haircare Distribution',
        category: 'Web Design',
        description: 'Official Swiss e-commerce & distribution platform for certified organic hair products. Features elegant warm beige editorial design, professional salon partner portals, and seamless product catalog browsing.',
        longDescription: 'Designed and developed the Swiss e-commerce platform and B2B professional portal for Natulique. Features editorial product photography showcases, ammonia-free hair color guides, salon partner registration, and responsive shopping carts.',
        imageUrl: natuliqueHero,
        tags: ['Figma', 'Landing Page', 'WordPress', 'HTML', 'CSS', 'Framer', 'Illustrator'],
        client: 'Natulique Switzerland',
        year: '2025',
        liveUrl: 'https://natuliquesuisse.ch/',
        metrics: [
          { label: 'Salon Partners', value: '120+' },
          { label: 'Organic Rating', value: '100% Certified' }
        ],
        deliverables: [
          'Warm Beige Editorial E-Commerce UI',
          'B2B Professional Salon Partner Portal',
          'WordPress & Framer Responsive Development',
          'Custom Product Catalog & Routine Filter'
        ]
      } as Project
    },
    {
      id: 'jeremie-boulaire',
      number: '06',
      category: 'LANDING PAGE & LEGAL',
      title: 'Jérémie Boulaire — Legal Counsel & Doctor of Law',
      description: 'Editorial website and digital presence for Maître Jérémie Boulaire, Doctor of Law specializing in contract and consumer law. Designed with refined monochrome elegance, gold CTA highlights, and authoritative legal expertise positioning.',
      year: '2026',
      type: 'Web Design · UI/UX',
      tags: ['Figma', 'Landing Page', 'WordPress'],
      liveUrl: 'https://jeremieboulaire.fr/',
      buttonText: 'Voir en live',
      previewButtons: [
        {
          label: 'Preview',
          icon: Eye,
          url: 'https://www.figma.com/proto/Avxv92ldflBeGqWsXo4VCq/Boulaire-J%C3%A9r%C3%A9mie-site-web-origine?node-id=5-639&page-id=0%3A1&starting-point-node-id=5%3A639&scaling=scale-down-width&content-scaling=fixed&t=jbI2O3lelTj3MEOX-1'
        }
      ],
      projectRef: {
        id: 'p6',
        title: 'Jérémie Boulaire — Legal Counsel & Doctor of Law',
        category: 'Web Design',
        description: 'Editorial website and digital presence for Maître Jérémie Boulaire, Doctor of Law specializing in contract and consumer law. Designed with refined monochrome elegance, gold CTA highlights, and authoritative legal expertise positioning.',
        longDescription: 'Designed and developed the professional legal practice website for Maître Jérémie Boulaire. Features high-end portrait art direction, contract expertise breakdown, client consultation scheduling, and mobile-optimized typography.',
        imageUrl: jeremieHero,
        tags: ['Figma', 'Landing Page', 'WordPress'],
        client: 'Cabinet Jérémie Boulaire',
        year: '2026',
        liveUrl: 'https://jeremieboulaire.fr/',
        metrics: [
          { label: 'Legal Consultations', value: '+45%' },
          { label: 'Degree', value: 'Docteur en Droit' }
        ],
        deliverables: [
          'Refined Monochrome Legal Practice UI',
          'Contract & Consumer Law Expertise Architecture',
          'WordPress Responsive Integration',
          'Gold CTA & Portrait Art Direction'
        ]
      } as Project
    },
    {
      id: 'mccp-natulique-vsl',
      number: '07',
      category: 'VSL & LANDING PAGE',
      title: 'MCCP Natulique — Head Spa Luxury VSL & Giveaway Page',
      description: 'High-converting Video Sales Letter (VSL) and giveaway landing page for Natulique Head Spa. Combines Japanese scalp therapy traditions with Danish organic science into an exclusive B2B partner funnel.',
      year: '2026',
      type: 'Web Design · UI/UX',
      tags: ['Figma', 'Landing Page', 'WordPress'],
      buttonText: 'View Case Study',
      previewButtons: [
        {
          label: 'Preview Desktop',
          icon: Monitor,
          url: 'https://www.figma.com/proto/bCyOZzcBtfLHYraJy6aOOn/MCCP---VSL?node-id=381-452&viewport=416%2C237%2C0.02&t=wZNhIQdQ6gzigI5z-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=381%3A452&page-id=1%3A14089'
        },
        {
          label: 'Preview Mobile',
          icon: Smartphone,
          url: 'https://www.figma.com/proto/bCyOZzcBtfLHYraJy6aOOn/MCCP---VSL?node-id=393-5711&viewport=416%2C237%2C0.02&t=wZNhIQdQ6gzigI5z-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=393%3A5711&page-id=1%3A14089&show-proto-sidebar=1'
        }
      ],
      projectRef: {
        id: 'p7',
        title: 'MCCP Natulique — Head Spa Luxury VSL & Giveaway Page',
        category: 'Web Design',
        description: 'High-converting Video Sales Letter (VSL) and giveaway landing page for Natulique Head Spa. Combines Japanese scalp therapy traditions with Danish organic science into an exclusive B2B partner funnel.',
        longDescription: 'Designed and developed the high-impact VSL sales funnel and giveaway landing page for Natulique Head Spa in Switzerland. Features a rich espresso brown and cream luxury palette, embedded video sales letter layout, partner bonus badges, and lead capture architecture.',
        imageUrl: mccpVslHero,
        tags: ['Figma', 'Landing Page', 'WordPress'],
        client: 'MCCP Natulique',
        year: '2026',
        metrics: [
          { label: 'VSL Watch Time', value: '78%' },
          { label: 'Partner Leads', value: '+52%' }
        ],
        deliverables: [
          'Rich Espresso & Cream Luxury Palette',
          'Video Sales Letter (VSL) Funnel Layout',
          'WordPress Responsive Integration',
          'Giveaway & Lead Capture Architecture'
        ]
      } as Project
    },
    {
      id: 'lm-luxe-yachts',
      number: '08',
      category: 'E-COMMERCE & LUXURY',
      title: 'LM Luxe Yachts Ibiza — Premium Luxury Yacht Brokerage & Sales',
      description: 'High-end maritime e-commerce and charter platform for luxury yachts in Ibiza and France. Designed with immersive aerial photography, gold-champagne accents, interactive fleet viewports, and VIP booking funnels.',
      year: '2025',
      type: 'Web Design · UI/UX',
      tags: ['Figma', 'Landing Page', 'WordPress'],
      liveUrl: 'https://lmluxeyachtsibiza.com/',
      buttonText: 'Voir en live',
      previewButtons: [
        {
          label: 'Preview',
          icon: Eye,
          url: 'https://www.figma.com/proto/vqfVLTMALUS1MrEwYQqQHk/LM-Luxe-yacht-ibiza--Website?node-id=385-3430&viewport=283%2C109%2C0.02&t=H3yaYjgl4PoV34oH-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=385%3A3430&page-id=119%3A2675'
        }
      ],
      projectRef: {
        id: 'p8',
        title: 'LM Luxe Yachts Ibiza — Premium Luxury Yacht Brokerage & Sales',
        category: 'Web Design',
        description: 'High-end maritime e-commerce and charter platform for luxury yachts in Ibiza and France. Designed with immersive aerial photography, gold-champagne accents, interactive fleet viewports, and VIP booking funnels.',
        longDescription: 'Designed and developed the luxury maritime showcase and charter reservation platform for LM Luxe Yachts Ibiza. Features high-resolution aerial video integration, custom yacht specification filters, champagne gold editorial UI, and multi-currency inquiry funnels.',
        imageUrl: yachtsHero,
        tags: ['Figma', 'Landing Page', 'WordPress'],
        client: 'LM Luxe Yachts Ibiza',
        year: '2025',
        liveUrl: 'https://lmluxeyachtsibiza.com/',
        metrics: [
          { label: 'Charter Inquiries', value: '+68%' },
          { label: 'Fleet Value', value: '€45M+' }
        ],
        deliverables: [
          'Champagne Gold Luxury Maritime UI',
          'Interactive Fleet Specification & Charter Filter',
          'WordPress Responsive Integration',
          'Aerial Photography & Video Art Direction'
        ]
      } as Project
    },
    {
      id: 'gonzague-havet',
      number: '09',
      category: 'VSL & DIGITAL ECOSYSTEM',
      title: 'Gonzague Havet — Digital Ecosystem for HD Communication & IT Solutions',
      description: 'High-impact VSL and digital transformation ecosystem landing page for Gonzague Havet. Integrates HD Communication, HD IT Development, and HD Solutions into a unified high-converting consultancy funnel.',
      year: '2025',
      type: 'Web Design · UI/UX',
      tags: ['Figma', 'Landing Page', 'WordPress', 'HTML', 'CSS', 'JS', 'Framer'],
      liveUrl: 'https://gonzaguehavet.com/',
      buttonText: 'Voir en live',
      previewButtons: [
        {
          label: 'Preview Desktop',
          icon: Monitor,
          url: 'https://www.figma.com/proto/G2nNEvsmW0nNRjUuJNiE0p/VSL-HAVET-DIGITAL-2025-version-text-old?node-id=37-2794&viewport=469%2C268%2C0.06&t=ZhCBYyyzhXAiQJu1-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=37%3A2794&page-id=0%3A1'
        },
        {
          label: 'Preview Mobile',
          icon: Smartphone,
          url: 'https://www.figma.com/proto/G2nNEvsmW0nNRjUuJNiE0p/VSL-HAVET-DIGITAL-2025-version-text-old?node-id=185-123&viewport=469%2C268%2C0.06&t=ZhCBYyyzhXAiQJu1-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=185%3A123&page-id=0%3A1'
        }
      ],
      projectRef: {
        id: 'p9',
        title: 'Gonzague Havet — Digital Ecosystem for HD Communication & IT Solutions',
        category: 'Web Design',
        description: 'High-impact VSL and digital transformation ecosystem landing page for Gonzague Havet. Integrates HD Communication, HD IT Development, and HD Solutions into a unified high-converting consultancy funnel.',
        longDescription: 'Designed and developed the executive consulting portal and VSL sales ecosystem for Gonzague Havet. Features corporate navy blue styling, multi-entity branding (HD Communication, HD Dev, HD Solutions), strategy case study showcases, and executive appointment scheduling.',
        imageUrl: havetHero,
        tags: ['Figma', 'Landing Page', 'WordPress', 'HTML', 'CSS', 'JS', 'Framer'],
        client: 'Gonzague Havet Consulting',
        year: '2025',
        liveUrl: 'https://gonzaguehavet.com/',
        metrics: [
          { label: 'Enterprise Leads', value: '+84%' },
          { label: 'Ecosystem Entities', value: '3 Platforms' }
        ],
        deliverables: [
          'Corporate Deep Navy & Blue Art Direction',
          'Multi-entity Digital Ecosystem Architecture',
          'WordPress & Framer Responsive Development',
          'Video Sales Letter & Executive Booking Funnel'
        ]
      } as Project
    },
    {
      id: 'institut-mooine',
      number: '10',
      category: 'LANDING PAGE & HEALTHCARE',
      title: 'Institut Mooine — Health & Wellness Center',
      description: 'Tailored digital experience for a premium health and wellness institute specializing in slimming, pain management, and acupuncture care. Features warm teal gradients, session booking funnels, and wellness care guides.',
      year: '2025',
      type: 'Web Design · UI/UX',
      tags: ['Figma', 'Landing Page', 'WordPress'],
      liveUrl: 'https://www.mooine.com/',
      buttonText: 'Voir en live',
      previewButtons: [
        {
          label: 'Preview Desktop',
          icon: Monitor,
          url: 'https://www.figma.com/proto/74SpnQIwDOvt0z2Dz9LAXi/mooine---Website-design?node-id=96-49699&viewport=452%2C260%2C0.02&t=oks6e6jIB0R8WHug-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=96%3A49699&page-id=0%3A1'
        },
        {
          label: 'Preview Mobile',
          icon: Smartphone,
          url: 'https://www.figma.com/proto/74SpnQIwDOvt0z2Dz9LAXi/mooine---Website-design?node-id=290-13793&viewport=525%2C605%2C0.17&t=57pWaLSM7jRVk7uh-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=290%3A9982&page-id=290%3A9731'
        }
      ],
      projectRef: {
        id: 'p10',
        title: 'Institut Mooine — Health & Wellness Center',
        category: 'Web Design',
        description: 'Tailored digital experience for a premium health and wellness institute specializing in slimming, pain management, and acupuncture care. Features warm teal gradients, session booking funnels, and wellness care guides.',
        longDescription: 'Designed and developed the official website and consultation booking funnel for Institut Mooine. Features serene turquoise-teal gradients, customized treatment consultation paths, patient testimonial showcases, and mobile booking integration.',
        imageUrl: mooineHero,
        tags: ['Figma', 'Landing Page', 'WordPress'],
        client: 'Institut Mooine',
        year: '2025',
        liveUrl: 'https://www.mooine.com/',
        metrics: [
          { label: 'Care Bookings', value: '+58%' },
          { label: 'Patient Satisfaction', value: '4.9★' }
        ],
        deliverables: [
          'Serene Teal & Peach Health & Wellness UI',
          'Customized Slimming & Pain Care Filter',
          'WordPress Responsive Integration',
          'Online Consultation Booking Architecture'
        ]
      } as Project
    }
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true;

    const catUpper = p.category.toUpperCase();
    const titleUpper = p.title.toUpperCase();
    const descUpper = p.description.toUpperCase();
    const tagsUpper = p.tags.map((t) => t.toUpperCase());
    const hasTag = (tag: string) => tagsUpper.some((t) => t.includes(tag.toUpperCase()));

    if (activeFilter === 'landing-page') {
      return (
        catUpper.includes('LANDING PAGE') ||
        hasTag('LANDING PAGE') ||
        titleUpper.includes('LANDING PAGE')
      );
    }

    if (activeFilter === 'dashboard') {
      return (
        catUpper.includes('CRM') ||
        catUpper.includes('SAAS') ||
        catUpper.includes('DASHBOARD') ||
        titleUpper.includes('CRM') ||
        descUpper.includes('CRM') ||
        descUpper.includes('DASHBOARD') ||
        hasTag('SAAS') ||
        hasTag('CRM')
      );
    }

    if (activeFilter === 'vsl') {
      return (
        catUpper.includes('VSL') ||
        titleUpper.includes('VSL') ||
        descUpper.includes('VSL') ||
        descUpper.includes('VIDEO SALES LETTER') ||
        hasTag('VSL')
      );
    }

    if (activeFilter === 'ecommerce') {
      return (
        catUpper.includes('E-COMMERCE') ||
        catUpper.includes('COMMERCE') ||
        descUpper.includes('E-COMMERCE') ||
        descUpper.includes('SHOPPING') ||
        titleUpper.includes('DISTRIBUTION') ||
        titleUpper.includes('E-COMMERCE')
      );
    }

    if (activeFilter === 'mobile-app') {
      return (
        p.previewButtons.some((b) => b.label.toLowerCase().includes('mobile')) ||
        descUpper.includes('MOBILE') ||
        titleUpper.includes('MOBILE')
      );
    }

    if (activeFilter === 'motion-graphics') {
      return (
        catUpper.includes('MOTION') ||
        catUpper.includes('VIDEO') ||
        descUpper.includes('MOTION') ||
        descUpper.includes('ANIMATION') ||
        titleUpper.includes('MOTION') ||
        hasTag('Motion') ||
        hasTag('After Effects') ||
        hasTag('VSL')
      );
    }

    return true;
  });

  // Sort projects: newest first (tartibe: li jdad ikouno homa lowlin)
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const yearA = parseInt(a.year || '0', 10);
    const yearB = parseInt(b.year || '0', 10);
    return yearB - yearA;
  });

  const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, 4);

  return (
    <section className="w-full py-8 relative" style={{ perspective: 1800 }}>
      {sortedProjects.length === 0 ? (
        <div className="py-20 text-center rounded-3xl bg-[#141519] border border-white/10 p-8 space-y-4">
          <p className="text-gray-400 text-base">Aucun projet trouvé dans cette catégorie pour le moment.</p>
          <button
            onClick={() => onOpenContact()}
            className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors"
          >
            Discuter d'un projet sur-mesure
          </button>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          {!selectedDetailProject ? (
            /* VIEW 1: 2-CARDS-PER-ROW GRID WITH 3D FLIP TRANSITION */
            <motion.div
              key="cards-grid"
              initial={{ opacity: 0, rotateY: -80, scale: 0.95 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: 80, scale: 0.95 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
              className="w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                {displayedProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => handleCardClick(project)}
                    className="group relative rounded-3xl bg-[#121318] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex flex-col h-[480px] cursor-pointer"
                  >
                    {/* Card Image Showcase */}
                    <div className="relative w-full h-full overflow-hidden bg-black">
                      <img
                        src={project.projectRef.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                        loading="lazy"
                      />

                      {/* Year badge in bottom right (jenb limen f te7t) */}
                      <div className="absolute bottom-5 right-5 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none z-10">
                        <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-semibold tracking-wider shadow-lg">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* HOVER OVERLAY: Shows just Logo, Title, and Green View More Button */}
                    <div className="absolute inset-0 bg-[#0B0C0E]/94 backdrop-blur-md p-7 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out pointer-events-none group-hover:pointer-events-auto z-10">
                      {/* Logo and Title */}
                      <div className="space-y-4">
                        {/* Logo of site web */}
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center font-heading font-extrabold text-xl text-white shadow-xl">
                          {project.title.slice(0, 2).toUpperCase()}
                        </div>

                        {/* Title of site web */}
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight tracking-tight">
                          {project.title}
                        </h3>
                      </div>

                      {/* Green View More Button */}
                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(project);
                          }}
                          className="w-full py-3.5 px-6 rounded-full bg-[#C4D600] text-black font-extrabold text-sm sm:text-base hover:bg-[#d2e500] hover:shadow-[0_0_25px_rgba(196,214,0,0.5)] transition-all cursor-pointer inline-flex items-center justify-center gap-2.5 shadow-xl hover:scale-102"
                        >
                          <span>View More</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View More / View All Button */}
              {sortedProjects.length > 4 && (
                <div className="pt-10 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowAll(!showAll)}
                    className="group px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-bold text-sm transition-all duration-300 cursor-pointer inline-flex items-center gap-2.5 shadow-xl hover:scale-105"
                  >
                    <span>{showAll ? 'Show Less' : `View More (${sortedProjects.length - 4})`}</span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${showAll ? '-rotate-90' : 'group-hover:rotate-45'}`} />
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            /* VIEW 2: DEDICATED GOOGLE BROWSER MOCKUP & LOGO DETAIL VIEW WITH 3D FLIP */
            <motion.div
              key="detail-view"
              initial={{ opacity: 0, rotateY: 80, scale: 0.95 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -80, scale: 0.95 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
              className="w-full"
            >
              {/* 2-Column Split: Left Side Logo & Info / Right Side Google Chrome Window Mockup */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* LEFT SIDE (5 Columns): Logo, Project Info, Paragraph & Actions */}
                <div className="lg:col-span-5 space-y-6 text-left">
                  {/* Website Brand Logo & Category */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center font-heading font-extrabold text-xl text-white shadow-xl shrink-0">
                      {selectedDetailProject.title.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-white font-extrabold text-lg sm:text-xl font-heading tracking-wide truncate">
                        {selectedDetailProject.projectRef.client || selectedDetailProject.title.split('—')[0].trim()}
                      </h4>
                      <span className="text-xs text-[#C4D600] font-mono font-semibold uppercase tracking-wider block">
                        {selectedDetailProject.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading leading-tight tracking-tight">
                    {selectedDetailProject.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {selectedDetailProject.projectRef.longDescription || selectedDetailProject.description}
                  </p>

                  {/* Deliverables / Metrics Row if available */}
                  {selectedDetailProject.projectRef.metrics && (
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {selectedDetailProject.projectRef.metrics.map((m, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                          <div className="text-base sm:text-lg font-extrabold text-white font-heading">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-gray-400 font-mono">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons: Preview Figma & Back */}
                  <div className="pt-4 space-y-3">
                    {/* Preview Figma Prototype Buttons */}
                    {selectedDetailProject.previewButtons && selectedDetailProject.previewButtons.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {selectedDetailProject.previewButtons.map((btn, idx) => {
                          const isDesktop = btn.label.toLowerCase().includes('desktop');
                          const isMobile = btn.label.toLowerCase().includes('mobile');
                          const BtnIcon = isDesktop ? Monitor : isMobile ? Smartphone : (btn.icon || Eye);

                          return (
                            <button
                              key={idx}
                              type="button"
                              title={btn.label}
                              onClick={() => setFigmaModal({ url: btn.url, title: `${selectedDetailProject.title} (${btn.label})` })}
                              className="flex-1 min-w-[180px] py-3.5 px-6 rounded-full bg-white text-black font-extrabold text-sm hover:bg-gray-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all cursor-pointer inline-flex items-center justify-center gap-2.5 shadow-xl hover:scale-102"
                            >
                              <BtnIcon className="w-5 h-5 text-black shrink-0" />
                              <span>Preview Figma</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    <div className="flex items-center gap-3">
                      {/* Visit Live Website if liveUrl exists */}
                      {selectedDetailProject.liveUrl && (
                        <a
                          href={selectedDetailProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-3 px-5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center justify-center gap-2 hover:scale-102"
                        >
                          <span>Visit Live Website</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      {/* Back Button */}
                      <button
                        type="button"
                        onClick={handleBackToGrid}
                        className="flex-1 py-3 px-5 rounded-full bg-transparent hover:bg-white/10 border border-white/20 text-gray-300 hover:text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE (7 Columns): REALISTIC MACBOOK PRO LAPTOP MOCKUP ON WOODEN STAND */}
                <div className="lg:col-span-7 flex justify-center items-center">
                  <div className="relative w-full max-w-[660px] mx-auto select-none group/laptop cursor-pointer">
                    {/* Ambient Glow */}
                    <div className="absolute -inset-4 bg-[#C4D600]/10 blur-[80px] rounded-full pointer-events-none -z-10" />

                    {/* 1. MACBOOK SCREEN (LID) */}
                    <div className="relative rounded-t-[20px] sm:rounded-t-[24px] bg-[#16171c] p-2.5 sm:p-3 pb-0 border-t border-x border-[#363842] shadow-[0_12px_45px_rgba(0,0,0,0.85)]">
                      {/* Screen Outer Aluminum Lip */}
                      <div className="relative rounded-t-[14px] sm:rounded-t-[16px] bg-black p-1 sm:p-1.5 pb-0 border border-black/90">
                        {/* Top FaceTime Camera Dot */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none">
                          <div className="w-2 h-2 rounded-full bg-[#0a0a0d] border border-white/10 flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-[#1e3a5f]" />
                          </div>
                        </div>

                        {/* Screen Glass Display Frame: Shows the website screenshot */}
                        <div 
                          className="relative rounded-t-[10px] sm:rounded-t-[12px] overflow-hidden bg-[#0B0C0E] aspect-[16/10] w-full"
                          onClick={() => selectedDetailProject.previewButtons?.[0] && setFigmaModal({ 
                            url: selectedDetailProject.previewButtons[0].url, 
                            title: `${selectedDetailProject.title} (${selectedDetailProject.previewButtons[0].label})` 
                          })}
                        >
                          <img
                            src={selectedDetailProject.projectRef.imageUrl}
                            alt={selectedDetailProject.title}
                            className="w-full h-full object-cover object-top block transition-transform duration-700 ease-out group-hover/laptop:scale-[1.02]"
                          />

                          {/* Realistic Screen Glass Sheen / Reflection */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.1] pointer-events-none" />

                          {/* Hover Figma Preview Badge */}
                          <div className="absolute inset-0 bg-black/45 opacity-0 group-hover/laptop:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-bold text-xs sm:text-sm backdrop-blur-[2px]">
                            <Eye className="w-4 h-4 text-[#C4D600]" />
                            <span>Click to Preview Figma Prototype</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2. LAPTOP HINGE */}
                    <div className="relative h-[8px] sm:h-[10px] bg-gradient-to-b from-[#0d0e11] via-[#14151a] to-[#1c1d24] border-x border-[#33353e] z-10">
                      <div className="absolute inset-x-8 sm:inset-x-16 top-0 h-[2px] bg-black/90 rounded-full" />
                    </div>

                    {/* 3. LAPTOP LOWER CHASSIS (KEYBOARD DECK & TRACKPAD) */}
                    <div className="relative rounded-b-[18px] sm:rounded-b-[22px] bg-gradient-to-b from-[#21232b] via-[#1b1c23] to-[#14151a] p-3 sm:p-4 pt-2 border border-[#363842] shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-10">
                      {/* Keyboard Deck Recess */}
                      <div className="rounded-lg sm:rounded-xl bg-[#0f1014] p-2 sm:p-2.5 border border-black/70 shadow-inner max-w-[90%] mx-auto mb-2 sm:mb-3">
                        {/* Keyboard Key Rows Simulation */}
                        <div className="space-y-1 sm:space-y-1.5 opacity-70">
                          {/* Function keys row */}
                          <div className="flex gap-1 justify-between h-2 sm:h-2.5">
                            {Array.from({ length: 14 }).map((_, i) => (
                              <div key={i} className="flex-1 rounded-xs bg-[#1a1b20] border-t border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
                            ))}
                          </div>
                          {/* Number keys row */}
                          <div className="flex gap-1 justify-between h-2.5 sm:h-3">
                            {Array.from({ length: 14 }).map((_, i) => (
                              <div key={i} className="flex-1 rounded-xs bg-[#1a1b20] border-t border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
                            ))}
                          </div>
                          {/* QWERTY row */}
                          <div className="flex gap-1 justify-between h-2.5 sm:h-3">
                            {Array.from({ length: 13 }).map((_, i) => (
                              <div key={i} className="flex-1 rounded-xs bg-[#1a1b20] border-t border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
                            ))}
                          </div>
                          {/* ASDF row */}
                          <div className="flex gap-1 justify-between h-2.5 sm:h-3">
                            {Array.from({ length: 12 }).map((_, i) => (
                              <div key={i} className="flex-1 rounded-xs bg-[#1a1b20] border-t border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
                            ))}
                          </div>
                          {/* Spacebar row */}
                          <div className="flex gap-1 items-center justify-between h-2.5 sm:h-3">
                            <div className="w-[12%] h-full rounded-xs bg-[#1a1b20] border-t border-white/10" />
                            <div className="w-[12%] h-full rounded-xs bg-[#1a1b20] border-t border-white/10" />
                            <div className="flex-1 h-full rounded-xs bg-[#1a1b20] border-t border-white/10 shadow-[0_1px_2px_rgba(0,0,0,0.8)]" />
                            <div className="w-[12%] h-full rounded-xs bg-[#1a1b20] border-t border-white/10" />
                            <div className="w-[12%] h-full rounded-xs bg-[#1a1b20] border-t border-white/10" />
                          </div>
                        </div>
                      </div>

                      {/* Apple Glass Trackpad */}
                      <div className="w-28 sm:w-36 h-12 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-b from-[#1e1f26] to-[#18191f] border border-white/10 shadow-inner mx-auto relative">
                        <div className="absolute inset-x-2 top-0 h-[1px] bg-white/10" />
                      </div>

                      {/* Front Edge Thumb Opening Notch */}
                      <div className="absolute inset-x-0 bottom-0 flex justify-center">
                        <div className="w-16 sm:w-24 h-1.5 sm:h-2 rounded-t-sm bg-[#0e0f13] border-t border-[#363842]" />
                      </div>
                    </div>

                    {/* 4. REALISTIC WOODEN PEDESTAL / STAND (Matching reference photo) */}
                    <div className="relative -mt-2 mx-auto w-[96%] sm:w-[94%] rounded-b-2xl sm:rounded-b-3xl bg-gradient-to-b from-[#8f6847] via-[#755235] to-[#593d25] pt-4 pb-6 sm:pb-8 px-6 border-t border-[#b88c62]/50 shadow-[0_35px_70px_rgba(0,0,0,0.95)]">
                      {/* Wood grain highlight lines & soft reflections */}
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#f3c89c]/40 to-transparent" />
                      <div className="absolute inset-0 rounded-b-2xl sm:rounded-b-3xl opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
                      
                      {/* Laptop base shadow onto wood */}
                      <div className="w-3/4 mx-auto h-3 rounded-full bg-black/60 blur-md -mt-2" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* FIGMA PRESENTATION PROTOTYPE POPUP MODAL */}
      <AnimatePresence>
        {figmaModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-6xl h-[85vh] rounded-[28px] bg-[#141519] border border-white/15 shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#0E0F13]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C4D600]/10 text-[#C4D600] flex items-center justify-center">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-white font-heading truncate max-w-md sm:max-w-xl">
                      {figmaModal.title}
                    </h3>
                    <span className="text-[10px] text-gray-400 font-mono block">
                      Interactive Figma Prototype Preview
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={figmaModal.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#C4D600] text-gray-300 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>Open in Figma</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C4D600]" />
                  </a>

                  <button
                    onClick={() => setFigmaModal(null)}
                    className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Frame Body */}
              <div className="flex-1 bg-black relative">
                <iframe
                  src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaModal.url)}`}
                  className="w-full h-full border-none"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
