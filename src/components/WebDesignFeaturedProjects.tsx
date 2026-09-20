import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight, Calendar, Layout, Search, Eye, X, ExternalLink, Monitor, Smartphone } from 'lucide-react';
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

interface WebDesignFeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

export const WebDesignFeaturedProjects: React.FC<WebDesignFeaturedProjectsProps> = ({
  onSelectProject,
  onOpenContact,
}) => {
  const [figmaModal, setFigmaModal] = useState<{ url: string; title: string } | null>(null);

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

  return (
    <section className="w-full space-y-24 py-8 relative">
      {projectsData.map((project) => (
        <div
          key={project.id}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-white/10 pb-20 last:border-b-0"
        >
          {/* Left Project Info (5 Columns on Desktop) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Category Tag */}
            <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase">
              <span className="text-[#C4D600]">{project.number}</span>
              <span className="text-gray-500">/</span>
              <span className="text-gray-400">{project.category}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight leading-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
              {project.description}
            </p>

            {/* Metadata Row */}
            <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                <span>{project.year}</span>
              </div>
              <span className="text-gray-600">•</span>
              <div className="flex items-center gap-1.5">
                <Layout className="w-3.5 h-3.5 text-gray-500" />
                <span>{project.type}</span>
              </div>
            </div>

            {/* Tags Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-[#141519] border border-white/10 text-gray-300 text-xs font-mono font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons Row (Voir en live / View Case Study & Preview Figma Popups) */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-liquid-fill group px-6 py-3 rounded-full font-bold text-xs sm:text-sm cursor-pointer inline-flex items-center gap-2 shadow-lg"
                >
                  <span>{project.buttonText || "Voir en live"}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <button
                  onClick={() => onSelectProject(project.projectRef)}
                  className="btn-liquid-fill group px-6 py-3 rounded-full font-bold text-xs sm:text-sm cursor-pointer inline-flex items-center gap-2 shadow-lg"
                >
                  <span>{project.buttonText || "View Case Study"}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              )}

              {project.previewButtons?.map((btn, idx) => {
                const BtnIcon = btn.icon || Eye;
                return (
                  <button
                    key={idx}
                    onClick={() => setFigmaModal({ url: btn.url, title: `${project.title} (${btn.label})` })}
                    className="group px-5 py-3 rounded-full bg-[#1A1B20] border border-white/20 text-white hover:border-[#C4D600] hover:text-[#C4D600] font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer inline-flex items-center gap-2 shadow-lg"
                  >
                    <BtnIcon className="w-4 h-4 text-[#C4D600]" />
                    <span>{btn.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Visual Showcase Mockups (7 Columns on Desktop) */}
          <div className="lg:col-span-7">
            {project.id === 'qualyx' && (
              <div 
                className="relative p-2 sm:p-4 rounded-[28px] bg-[#101115] border border-white/10 shadow-2xl overflow-hidden group cursor-pointer"
                onClick={() => project.previewButtons?.[0] && setFigmaModal({ url: project.previewButtons[0].url, title: project.title })}
              >
                {/* Main Hero Screenshot */}
                <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden border border-white/15 bg-black shadow-2xl">
                  <img
                    src={qualyxHero}
                    alt="Qualyx AI Landing Page Hero"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm backdrop-blur-xs">
                    <Eye className="w-5 h-5 text-[#C4D600]" />
                    <span>Click to Preview Figma Presentation</span>
                  </div>
                </div>

                {/* VIP Signup Overlaid Card */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-44 sm:w-60 aspect-[16/10] rounded-[18px] overflow-hidden border-2 border-[#D4E839]/60 bg-[#0B0C0E] shadow-[0_20px_50px_rgba(0,0,0,0.95)] group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={qualyxSignup}
                    alt="Qualyx VIP Funnel Interface"
                    className="w-full h-full object-cover object-left-top"
                  />
                </div>
              </div>
            )}

            {project.id === 'iacrm' && (
              <div 
                className="relative p-2 sm:p-4 rounded-[28px] bg-[#0A0D14] border border-cyan-500/20 shadow-2xl overflow-hidden group cursor-pointer"
                onClick={() => project.previewButtons?.[0] && setFigmaModal({ url: project.previewButtons[0].url, title: project.title })}
              >
                {/* Ambient Blue Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,180,255,0.15),transparent_70%)] pointer-events-none" />

                {/* IACRM Hero Screenshot Card */}
                <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden border border-cyan-500/30 bg-black shadow-2xl">
                  <img
                    src={iacrmHero}
                    alt="IACRM Artificial Intelligence Customer Growth Hero"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm backdrop-blur-xs">
                    <Eye className="w-5 h-5 text-[#C4D600]" />
                    <span>Click to Preview Figma Presentation</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'mtc-holistique' && (
              <div className="relative p-2 sm:p-4 rounded-[28px] bg-[#0E1315] border border-teal-500/20 shadow-2xl overflow-hidden group">
                {/* Soft Warm Teal Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.12),transparent_75%)] pointer-events-none" />

                {/* MTC Holistique Hero Screenshot Card with Interactive Hover Buttons */}
                <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden border border-teal-500/30 bg-black shadow-2xl">
                  <img
                    src={mtcHero}
                    alt="MTC Holistique Center for Physiotherapy & Massage"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

                  {/* Hover Buttons Bar */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-xs">
                    {project.previewButtons?.map((btn, idx) => {
                      const BtnIcon = btn.icon || Eye;
                      return (
                        <button
                          key={idx}
                          onClick={() => setFigmaModal({ url: btn.url, title: `${project.title} (${btn.label})` })}
                          className="px-4 py-2.5 rounded-full bg-[#C4D600] text-black font-extrabold text-xs hover:bg-[#d2e500] transition-all flex items-center gap-2 shadow-xl cursor-pointer"
                        >
                          <BtnIcon className="w-4 h-4" />
                          <span>{btn.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {project.id === 'cars-and-co' && (
              <div className="relative p-2 sm:p-4 rounded-[28px] bg-[#14120D] border border-amber-500/20 shadow-2xl overflow-hidden group">
                {/* Gold Ambient Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.15),transparent_75%)] pointer-events-none" />

                {/* Cars & Co Hero Screenshot Card */}
                <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden border border-amber-500/30 bg-black shadow-2xl">
                  <img
                    src={carsHero}
                    alt="Cars & Co Premium Luxury Car Rental"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

                  {/* Hover Buttons Bar */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-xs">
                    {project.previewButtons?.map((btn, idx) => {
                      const BtnIcon = btn.icon || Eye;
                      return (
                        <button
                          key={idx}
                          onClick={() => setFigmaModal({ url: btn.url, title: `${project.title} (${btn.label})` })}
                          className="px-4 py-2.5 rounded-full bg-[#C4D600] text-black font-extrabold text-xs hover:bg-[#d2e500] transition-all flex items-center gap-2 shadow-xl cursor-pointer"
                        >
                          <BtnIcon className="w-4 h-4" />
                          <span>{btn.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {project.id === 'natulique-swiss' && (
              <div 
                className="relative p-2 sm:p-4 rounded-[28px] bg-[#141311] border border-stone-500/20 shadow-2xl overflow-hidden group cursor-pointer"
                onClick={() => project.previewButtons?.[0] && setFigmaModal({ url: project.previewButtons[0].url, title: project.title })}
              >
                {/* Warm Sand Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.12),transparent_75%)] pointer-events-none" />

                {/* Natulique Swiss Hero Screenshot Card */}
                <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden border border-stone-500/30 bg-black shadow-2xl">
                  <img
                    src={natuliqueHero}
                    alt="Natulique Swiss Certified Organic Haircare Distribution"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm backdrop-blur-xs">
                    <Eye className="w-5 h-5 text-[#C4D600]" />
                    <span>Click to Preview Figma Presentation</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'jeremie-boulaire' && (
              <div 
                className="relative p-2 sm:p-4 rounded-[28px] bg-[#121316] border border-white/10 shadow-2xl overflow-hidden group cursor-pointer"
                onClick={() => project.previewButtons?.[0] && setFigmaModal({ url: project.previewButtons[0].url, title: project.title })}
              >
                {/* Monochrome Elegance Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_75%)] pointer-events-none" />

                {/* Jérémie Boulaire Hero Screenshot Card */}
                <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden border border-white/15 bg-black shadow-2xl">
                  <img
                    src={jeremieHero}
                    alt="Maître Jérémie Boulaire Legal Counsel"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm backdrop-blur-xs">
                    <Eye className="w-5 h-5 text-[#C4D600]" />
                    <span>Click to Preview Figma Presentation</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'mccp-natulique-vsl' && (
              <div className="relative p-2 sm:p-4 rounded-[28px] bg-[#14100E] border border-amber-800/30 shadow-2xl overflow-hidden group">
                {/* Warm Espresso Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,83,9,0.15),transparent_75%)] pointer-events-none" />

                {/* MCCP Natulique VSL Hero Screenshot Card */}
                <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden border border-amber-700/40 bg-black shadow-2xl">
                  <img
                    src={mccpVslHero}
                    alt="MCCP Natulique Head Spa VSL & Giveaway Funnel"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

                  {/* Hover Buttons Bar */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-xs">
                    {project.previewButtons?.map((btn, idx) => {
                      const BtnIcon = btn.icon || Eye;
                      return (
                        <button
                          key={idx}
                          onClick={() => setFigmaModal({ url: btn.url, title: `${project.title} (${btn.label})` })}
                          className="px-4 py-2.5 rounded-full bg-[#C4D600] text-black font-extrabold text-xs hover:bg-[#d2e500] transition-all flex items-center gap-2 shadow-xl cursor-pointer"
                        >
                          <BtnIcon className="w-4 h-4" />
                          <span>{btn.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {project.id === 'lm-luxe-yachts' && (
              <div 
                className="relative p-2 sm:p-4 rounded-[28px] bg-[#0B1216] border border-cyan-500/20 shadow-2xl overflow-hidden group cursor-pointer"
                onClick={() => project.previewButtons?.[0] && setFigmaModal({ url: project.previewButtons[0].url, title: project.title })}
              >
                {/* Deep Cyan Ocean Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_75%)] pointer-events-none" />

                {/* LM Luxe Yachts Ibiza Hero Screenshot Card */}
                <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden border border-cyan-500/30 bg-black shadow-2xl">
                  <img
                    src={yachtsHero}
                    alt="LM Luxe Yachts Ibiza Premium Yacht Brokerage"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm backdrop-blur-xs">
                    <Eye className="w-5 h-5 text-[#C4D600]" />
                    <span>Click to Preview Figma Presentation</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'gonzague-havet' && (
              <div className="relative p-2 sm:p-4 rounded-[28px] bg-[#0A0D16] border border-blue-600/25 shadow-2xl overflow-hidden group">
                {/* Deep Navy Corporate Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_75%)] pointer-events-none" />

                {/* Gonzague Havet Hero Screenshot Card */}
                <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden border border-blue-500/30 bg-black shadow-2xl">
                  <img
                    src={havetHero}
                    alt="Gonzague Havet Digital Ecosystem & VSL"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

                  {/* Hover Buttons Bar */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-xs">
                    {project.previewButtons?.map((btn, idx) => {
                      const BtnIcon = btn.icon || Eye;
                      return (
                        <button
                          key={idx}
                          onClick={() => setFigmaModal({ url: btn.url, title: `${project.title} (${btn.label})` })}
                          className="px-4 py-2.5 rounded-full bg-[#C4D600] text-black font-extrabold text-xs hover:bg-[#d2e500] transition-all flex items-center gap-2 shadow-xl cursor-pointer"
                        >
                          <BtnIcon className="w-4 h-4" />
                          <span>{btn.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {project.id === 'institut-mooine' && (
              <div className="relative p-2 sm:p-4 rounded-[28px] bg-[#0D1515] border border-teal-500/20 shadow-2xl overflow-hidden group">
                {/* Warm Turquoise Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(13,148,136,0.15),transparent_75%)] pointer-events-none" />

                {/* Institut Mooine Hero Screenshot Card */}
                <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden border border-teal-500/30 bg-black shadow-2xl">
                  <img
                    src={mooineHero}
                    alt="Institut Mooine Health & Wellness Center"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

                  {/* Hover Buttons Bar */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-xs">
                    {project.previewButtons?.map((btn, idx) => {
                      const BtnIcon = btn.icon || Eye;
                      return (
                        <button
                          key={idx}
                          onClick={() => setFigmaModal({ url: btn.url, title: `${project.title} (${btn.label})` })}
                          className="px-4 py-2.5 rounded-full bg-[#C4D600] text-black font-extrabold text-xs hover:bg-[#d2e500] transition-all flex items-center gap-2 shadow-xl cursor-pointer"
                        >
                          <BtnIcon className="w-4 h-4" />
                          <span>{btn.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

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
