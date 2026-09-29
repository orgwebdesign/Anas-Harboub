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

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section className="w-full py-8 relative" style={{ perspective: 1800 }}>
      {filteredProjects.length === 0 ? (
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

                      {/* Default State Bottom Gradient Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-0 pointer-events-none space-y-1.5">
                        <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase text-white/70">
                          <span className="truncate">{project.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white font-heading tracking-tight leading-snug line-clamp-1">
                          {project.title}
                        </h3>
                      </div>

                      {/* Default State Top Year Badge */}
                      <div className="absolute top-4 left-4 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono font-semibold">
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
              {filteredProjects.length > 4 && (
                <div className="pt-10 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowAll(!showAll)}
                    className="group px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-bold text-sm transition-all duration-300 cursor-pointer inline-flex items-center gap-2.5 shadow-xl hover:scale-105"
                  >
                    <span>{showAll ? 'Show Less' : `View More (${filteredProjects.length - 4})`}</span>
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

                {/* RIGHT SIDE (7 Columns): GOOGLE CHROME BROWSER WINDOW MOCKUP */}
                <div className="lg:col-span-7">
                  <div className="rounded-[28px] bg-[#141519] border border-white/15 shadow-[0_30px_70px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col">
                    {/* Google Chrome Window Top Bar */}
                    <div className="bg-[#18191D] px-4 py-3 border-b border-white/10 flex items-center gap-3 select-none">
                      {/* Chrome Window Traffic Lights */}
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                        <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                      </div>

                      {/* Browser Navigation Arrows */}
                      <div className="hidden sm:flex items-center gap-2 text-gray-400 pl-2">
                        <ArrowLeft className="w-3.5 h-3.5 text-gray-500" />
                        <ArrowRight className="w-3.5 h-3.5 text-gray-600" />
                        <RotateCw className="w-3.5 h-3.5 text-gray-400" />
                      </div>

                      {/* Google Chrome URL Omnibox */}
                      <div className="flex-1 max-w-lg mx-auto bg-[#0B0C0E] rounded-full px-4 py-1.5 border border-white/10 flex items-center justify-between text-xs text-gray-300 shadow-inner">
                        <div className="flex items-center gap-2 truncate">
                          <Lock className="w-3 h-3 text-[#27C93F] shrink-0" />
                          <span className="text-gray-500 font-mono text-[11px] shrink-0">https://</span>
                          <span className="font-mono text-white text-[11px] truncate">
                            {getProjectUrl(selectedDetailProject.id, selectedDetailProject.liveUrl)}
                          </span>
                        </div>
                        <Sparkles className="w-3 h-3 text-[#C4D600] shrink-0 ml-2" />
                      </div>

                      {/* User Profile Emblem */}
                      <div className="hidden sm:flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] font-bold text-white">
                          AH
                        </div>
                      </div>
                    </div>

                    {/* Google Window Viewport: Cleanly frames the website screenshot without empty black space */}
                    <div 
                      className="relative bg-[#08080A] w-full overflow-hidden group/browser cursor-pointer"
                      onClick={() => selectedDetailProject.previewButtons?.[0] && setFigmaModal({ 
                        url: selectedDetailProject.previewButtons[0].url, 
                        title: `${selectedDetailProject.title} (${selectedDetailProject.previewButtons[0].label})` 
                      })}
                    >
                      <img
                        src={selectedDetailProject.projectRef.imageUrl}
                        alt={selectedDetailProject.title}
                        className="w-full h-auto block select-none transition-transform duration-500 group-hover/browser:scale-[1.015]"
                      />

                      {/* Subtle hover overlay to preview interactive prototype */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/browser:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm backdrop-blur-xs">
                        <Eye className="w-5 h-5 text-white" />
                        <span>Click to Preview Figma Prototype</span>
                      </div>
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
