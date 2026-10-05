import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Share2,
  ThumbsUp,
  Repeat2,
  MapPin,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Move
} from 'lucide-react';

// Brand logos for marquee and ecosystem cards
import avidsLogo from '../assets/images/logo graphics design/logo avids.png';
import bootvibLogo from '../assets/images/logo graphics design/bootvib.png';
import natuliqueLogo from '../assets/images/logo graphics design/natulique.png';
import jeremieBLogo from '../assets/images/logo graphics design/gerimi boulaire.png';
import csePaulLogo from '../assets/images/logo graphics design/cse paule.png';
import chronoMobileLogo from '../assets/images/logo graphics design/chrono mobile.png';
import designMeLogo from '../assets/images/logo graphics design/design me.png';
import kineGuelizLogo from '../assets/images/logo graphics design/logo kine gueliz.png';
import gonzagueLogo from '../assets/images/Gonzague Havet logo.png';
import qualyxLogo from '../assets/images/qualix logo.png';

// Creative visuals for mockups
import graphicSocialMockup from '../assets/images/graphic_social_mockup.jpg';
import natuliqueHero from '../assets/images/natulique_swiss_hero.png';
import havetHero from '../assets/images/gonzague_havet_hero.png';
import carsHero from '../assets/images/cars_and_co_hero.png';
import mtcHero from '../assets/images/mtc_holistique_hero.png';

interface ClientEcosystem {
  id: string;
  name: string;
  industry: string;
  logo: string;
  location: string;
  description: string;
  scopeTags: string[];
  metrics: { label: string; value: string };
  instagram: {
    handle: string;
    caption: string;
    likes: string;
    comments: string;
    image: string;
    tag: string;
  };
  linkedin: {
    author: string;
    headline: string;
    title: string;
    slideInfo: string;
    reactions: string;
    image: string;
  };
  metaAd: {
    title: string;
    headline: string;
    ctaText: string;
    roas: string;
    image: string;
  };
}

const CLIENT_ECOSYSTEMS: ClientEcosystem[] = [
  {
    id: 'bootvib',
    name: 'Boostvib Energy & Lifestyle',
    industry: 'Consumer Goods & Energy Tech',
    logo: bootvibLogo,
    location: 'Paris, France / Global Remote',
    description: 'Engineered a viral, dynamic social content machine for Boostvib. We established a high-contrast dark visual identity across Instagram and Meta ads, driving authentic engagement among active lifestyle demographics.',
    scopeTags: ['Brand Identity', 'Social Strategy', 'Paid Meta Ads', 'Reels Art Direction', 'Figma Design System'],
    metrics: { label: 'Social Reach Growth', value: '+340% in 90 Days' },
    instagram: {
      handle: 'boostvib.official',
      caption: 'Fuel your highest frequency. Zero artificial compromises, 100% focused energy designed for leaders. ⚡ #BoostYourVibe',
      likes: '4,892',
      comments: '186',
      image: graphicSocialMockup,
      tag: 'Product Drop 01'
    },
    linkedin: {
      author: 'Boostvib Global',
      headline: 'Brand Strategy & Consumer Innovation',
      title: 'How We Scaled Direct-to-Consumer Visual Identity by 340%',
      slideInfo: 'Swipe for Case Study [1/6]',
      reactions: '1,420',
      image: carsHero
    },
    metaAd: {
      title: 'Boostvib Performance Energy',
      headline: 'Experience Pure Clean Focus. Claim Your Exclusive Sample Kit Today.',
      ctaText: 'Claim Your Kit',
      roas: '4.8x Verified ROAS',
      image: graphicSocialMockup
    }
  },
  {
    id: 'natulique',
    name: 'Natulique Swiss Skincare',
    industry: 'Certified Organic Clean Beauty',
    logo: natuliqueLogo,
    location: 'Geneva, Switzerland',
    description: 'Crafted an ethereal, botanical content ecosystem emphasizing certified organic purity. The visual language blends Swiss minimalist typographic hierarchies with macro botanical photography for prestige skincare positioning.',
    scopeTags: ['Organic Branding', 'Packaging 3D Renders', 'Carousel Decks', 'Educational Stories', 'Clean Beauty Ads'],
    metrics: { label: 'Organic Saves & Shares', value: '+520% Ratio' },
    instagram: {
      handle: 'natulique.swiss',
      caption: 'Formulated in the Swiss Alps with pure glacial botanicals. Your skin barrier deserves uncompromised purity. 🌿 #SwissCleanBeauty',
      likes: '3,210',
      comments: '142',
      image: natuliqueHero,
      tag: 'Ecocert Certified'
    },
    linkedin: {
      author: 'Natulique Swiss Labs',
      headline: 'Biotech & Clean Cosmetics Innovation',
      title: 'The Clean Beauty Shift: Why Formulation Transparency Wins Consumers',
      slideInfo: 'Editorial Report [1/8]',
      reactions: '980',
      image: natuliqueHero
    },
    metaAd: {
      title: 'Natulique Swiss Botanical Serum',
      headline: 'Swiss Certified Organic Purity. Clinically Proven 72h Moisture Barrier.',
      ctaText: 'Discover Serum',
      roas: '5.2x Campaign ROAS',
      image: natuliqueHero
    }
  },
  {
    id: 'gonzague',
    name: 'Gonzague Havet Advisory',
    industry: 'Executive M&A & Private Equity',
    logo: gonzagueLogo,
    location: 'Paris, France / International',
    description: 'Positioned top-tier M&A dealmaker Gonzague Havet as a definitive authority on LinkedIn. Produced bespoke editorial carousel decks, panoramic cover suites, and authoritative quote cards that generate high-value inbound advisory mandates.',
    scopeTags: ['Personal Branding', 'B2B LinkedIn Carousels', 'Keynote Decks', 'Infographics', 'Executive Identity'],
    metrics: { label: 'Inbound Qualified Leads', value: '+84% Mandates' },
    instagram: {
      handle: 'gonzague.havet.advisory',
      caption: 'Precision in valuation is not merely mathematics—it is strategic storytelling. Unlocking maximum enterprise value. #PrivateEquity #MandA',
      likes: '1,840',
      comments: '95',
      image: havetHero,
      tag: 'Executive Insight'
    },
    linkedin: {
      author: 'Gonzague Havet',
      headline: 'Managing Director & Strategic M&A Advisor',
      title: 'Cross-Border M&A Valuation Playbook: 5 Critical Negotiation Levers',
      slideInfo: 'Executive Deck [1/10]',
      reactions: '2,640',
      image: havetHero
    },
    metaAd: {
      title: 'Gonzague Havet Executive Advisory',
      headline: 'Strategic M&A and Capital Advisory for High-Growth Technology Leaders.',
      ctaText: 'Schedule Confidential Review',
      roas: '+84% Inbound Deals',
      image: havetHero
    }
  },
  {
    id: 'avids',
    name: 'Avids.co Agency',
    industry: 'Growth Marketing & Tech Studio',
    logo: avidsLogo,
    location: 'Global Remote',
    description: 'Designed a bold, geometric marketing ecosystem tailored for B2B tech founders. Vibrant lime chromatic accents and dynamic kinetic typography emphasize conversion speed, positioning Avids as an indispensable growth partner.',
    scopeTags: ['Creative Strategy', 'Growth Marketing', 'Multi-Platform Ad Suite', 'Figma Kits', 'Motion Overlays'],
    metrics: { label: 'Ad Click-Through Rate', value: '+4.2% Avg CTR' },
    instagram: {
      handle: 'avids.co',
      caption: 'Stop relying on outdated marketing playbooks. Engineered design systems built to turn cold traffic into loyal brand advocates. ⚡ #GrowthDesign',
      likes: '2,780',
      comments: '114',
      image: graphicSocialMockup,
      tag: 'Framework 2.0'
    },
    linkedin: {
      author: 'Avids Studio',
      headline: 'High-Impact Growth Marketing & Creative Systems',
      title: 'The Modern Brand Architecture: Balancing Conversion & Long-Term Equity',
      slideInfo: 'Growth Blueprint [1/7]',
      reactions: '1,890',
      image: carsHero
    },
    metaAd: {
      title: 'Avids Creative Engine',
      headline: 'Scale Your Brand With Tailored Design Systems Engineered for Conversion.',
      ctaText: 'Scale Your Brand',
      roas: '3.9x Direct Return',
      image: graphicSocialMockup
    }
  },
  {
    id: 'kinegueliz',
    name: 'Kiné Guéliz Clinic',
    industry: 'Holistic Physical Therapy & Wellness',
    logo: kineGuelizLogo,
    location: 'Marrakech, Morocco',
    description: 'Elevated a premier physiotherapy and physical rehabilitation center into a refined, trustworthy sanctuary. Serene botanical aesthetics, educational posture carousels, and patient reassurance content create warm, continuous patient flow.',
    scopeTags: ['Clinic Branding', 'Educational Carousels', 'Local SEO Creatives', 'Instagram Grid', 'Treatment Menus'],
    metrics: { label: 'Appointment Bookings', value: '+195% Growth' },
    instagram: {
      handle: 'kine.gueliz.marrakech',
      caption: 'Retrouvez votre liberté de mouvement. Approche sur-mesure combinant kinésithérapie avancée et soins bien-être ciblés. 🦋 #KineGueliz',
      likes: '1,960',
      comments: '88',
      image: mtcHero,
      tag: 'Soin Sur-Mesure'
    },
    linkedin: {
      author: 'Kiné Guéliz Centre',
      headline: 'Rééducation & Kinésithérapie Spécialisée',
      title: 'Prévention Posturale au Travail : 4 Exercices Pratiques en Entreprise',
      slideInfo: 'Guide Bien-Être [1/5]',
      reactions: '760',
      image: mtcHero
    },
    metaAd: {
      title: 'Centre Kiné Guéliz Marrakech',
      headline: 'Consultations Spécialisées & Soins Ciblés. Prenez Rendez-Vous Facilement.',
      ctaText: 'Réserver Votre Séance',
      roas: '+195% Nouveaux Patients',
      image: mtcHero
    }
  }
];

// Marquee logos list
const MARQUEE_LOGOS = [
  { name: 'Boostvib', src: bootvibLogo },
  { name: 'Natulique Swiss', src: natuliqueLogo },
  { name: 'Avids.co', src: avidsLogo },
  { name: 'Jérémie Boulaire', src: jeremieBLogo },
  { name: 'Gonzague Havet', src: gonzagueLogo },
  { name: 'Kiné Guéliz', src: kineGuelizLogo },
  { name: 'Qualyx AI', src: qualyxLogo },
  { name: 'CSE Paul', src: csePaulLogo },
  { name: 'Chrono Mobile', src: chronoMobileLogo },
  { name: 'Design Me', src: designMeLogo }
];

interface SocialBrandEcosystemProps {
  onOpenContact?: () => void;
}

export const SocialBrandEcosystemSection: React.FC<SocialBrandEcosystemProps> = ({ onOpenContact }) => {
  const [selectedClient, setSelectedClient] = useState<ClientEcosystem>(CLIENT_ECOSYSTEMS[0]);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [activeMobileFormat, setActiveMobileFormat] = useState<'instagram' | 'linkedin' | 'meta'>('instagram');

  // Physics interaction constraints reference
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt / Parallax physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const tiltX = useTransform(smoothMouseY, [-0.5, 0.5], [6, -6]);
  const tiltY = useTransform(smoothMouseX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const toggleLike = (key: string) => {
    setLikedPosts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="social-brand-ecosystem" className="relative w-full py-20 sm:py-28 overflow-hidden bg-[#07080A] text-white">
      {/* Ambient background lime glow spot */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-[#C4D600]/6 rounded-full blur-[160px] pointer-events-none" />

      {/* ========================================================================= */}
      {/* 1. SECTION HEADER & COPYWRITING                                           */}
      {/* ========================================================================= */}
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#C4D600] animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-gray-300 font-semibold">
            Social Media & Brand Ecosystem
          </span>
        </div>

        {/* H2 Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.12]">
          Engineered for <span className="text-[#C4D600] drop-shadow-[0_0_25px_rgba(196,214,0,0.35)]">Engagement</span>. Scaled for <span className="text-[#C4D600] drop-shadow-[0_0_25px_rgba(196,214,0,0.35)]">Impact</span>.
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 font-sans leading-relaxed max-w-3xl mx-auto">
          High-performance social content crafted to capture attention, stop the infinite scroll, and position your brand as the undisputed authority across LinkedIn, Instagram, and Meta.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* 2. HORIZONTAL INFINITE MARQUEE (COMPANY LOGOS)                            */}
      {/* ========================================================================= */}
      <div className="relative w-full my-14 sm:my-20 py-7 border-y border-white/10 bg-[#000000]/80 overflow-hidden group">
        {/* Left & Right gradient edge fades for smooth infinite scroll */}
        <div className="absolute left-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-r from-[#07080A] via-[#07080A]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-l from-[#07080A] via-[#07080A]/90 to-transparent z-10 pointer-events-none" />

        {/* Continuous horizontal scrolling track with pause-on-hover */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-20">
          {/* First loop */}
          {MARQUEE_LOGOS.map((logo, idx) => (
            <div
              key={`logo-a-${idx}`}
              className="flex items-center justify-center shrink-0 transition-all duration-300 group/logo cursor-pointer"
            >
              <img
                src={logo.src}
                alt={`${logo.name} Logo`}
                className="h-10 sm:h-12 w-auto max-w-[150px] sm:max-w-[180px] object-contain select-none grayscale opacity-50 brightness-100 transition-all duration-300 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-108 dark:brightness-0 dark:invert drop-shadow-[0_0_0_transparent] group-hover/logo:drop-shadow-[0_0_12px_rgba(196,214,0,0.35)]"
                loading="lazy"
              />
            </div>
          ))}

          {/* Duplicate loop for infinite seamless scroll */}
          {MARQUEE_LOGOS.map((logo, idx) => (
            <div
              key={`logo-b-${idx}`}
              className="flex items-center justify-center shrink-0 transition-all duration-300 group/logo cursor-pointer"
            >
              <img
                src={logo.src}
                alt={`${logo.name} Logo`}
                className="h-10 sm:h-12 w-auto max-w-[150px] sm:max-w-[180px] object-contain select-none grayscale opacity-50 brightness-100 transition-all duration-300 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-108 dark:brightness-0 dark:invert drop-shadow-[0_0_0_transparent] group-hover/logo:drop-shadow-[0_0_12px_rgba(196,214,0,0.35)]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. TWO-TIER CONTENT ARCHITECTURE & FLOATING PHYSICS                       */}
      {/* ========================================================================= */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Client Ecosystem Tabs Selector with smooth horizontal scroll on mobile */}
        <div className="flex items-center gap-2 sm:gap-3.5 pb-2 overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center w-full px-1">
          {CLIENT_ECOSYSTEMS.map((client) => {
            const isSelected = selectedClient.id === client.id;
            return (
              <button
                key={client.id}
                type="button"
                onClick={() => setSelectedClient(client)}
                className={`group relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer select-none inline-flex items-center gap-2.5 border shrink-0 ${
                  isSelected
                    ? 'bg-[#C4D600] text-black border-[#C4D600] shadow-[0_0_20px_rgba(196,214,0,0.4)] font-bold scale-102'
                    : 'bg-white/[0.03] text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`h-4 w-auto object-contain transition-all ${
                    isSelected ? 'brightness-0' : 'opacity-70 group-hover:opacity-100 dark:brightness-0 dark:invert'
                  }`}
                />
                <span>{client.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Grid: Tier 1 (Context Card) + Tier 2 (Antigravity Physics Showcase) */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >

          {/* ===================================================================== */}
          {/* TIER 1: CLIENT METADATA & CONTEXT CARD (Left Column - 5 cols)         */}
          {/* ===================================================================== */}
          <div className="lg:col-span-5 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedClient.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative rounded-2xl bg-[#121317]/90 border border-white/10 p-5 sm:p-7 md:p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-between space-y-6 hover:border-white/20 transition-colors"
              >
                {/* Brand Header */}
                <div className="space-y-4">
                  {/* Brand Mark Container with subtle #222222 outline */}
                  <div className="w-16 h-16 rounded-xl bg-[#090A0D] border border-[#222222] p-3 flex items-center justify-center shadow-inner">
                    <img
                      src={selectedClient.logo}
                      alt={selectedClient.name}
                      className="max-h-full max-w-full object-contain dark:brightness-0 dark:invert"
                    />
                  </div>

                  {/* Company Name & Industry */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white leading-tight">
                      {selectedClient.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#C4D600] font-mono mt-1 font-semibold">
                      {selectedClient.industry}
                    </p>
                  </div>

                  {/* Location / Market Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs text-gray-300 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#C4D600]" />
                    <span>{selectedClient.location}</span>
                  </div>

                  {/* Core Description (2-3 concise sentences) */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed pt-1">
                    {selectedClient.description}
                  </p>
                </div>

                {/* Scope Tags */}
                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block font-semibold">
                    Scope of Deliverables:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedClient.scopeTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-gray-300 font-sans hover:border-[#C4D600]/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance Metric Badge */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#171920] to-[#0E1015] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block">
                      {selectedClient.metrics.label}
                    </span>
                    <span className="text-xl sm:text-2xl font-extrabold text-[#C4D600] font-heading">
                      {selectedClient.metrics.value}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#C4D600]/10 border border-[#C4D600]/20 flex items-center justify-center text-[#C4D600]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                {/* Action CTA */}
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="w-full btn-liquid-fill py-3.5 px-6 rounded-xl font-extrabold text-sm cursor-pointer inline-flex items-center justify-center gap-2 group shadow-xl"
                >
                  <span>Build Your Social Ecosystem</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ===================================================================== */}
          {/* TIER 2: SOCIAL CREATIVE SHOWCASE & ANTIGRAVITY PHYSICS (Right - 7 cols)*/}
          {/* ===================================================================== */}
          <div className="lg:col-span-7 relative flex flex-col items-center justify-center w-full min-h-[500px] sm:min-h-[640px]">

            {/* Mobile Format Switcher (< sm screens) */}
            <div className="flex sm:hidden items-center justify-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10 mb-4 w-full max-w-[340px]">
              <button
                type="button"
                onClick={() => setActiveMobileFormat('instagram')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeMobileFormat === 'instagram' ? 'bg-[#C4D600] text-black font-bold shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                Instagram
              </button>
              <button
                type="button"
                onClick={() => setActiveMobileFormat('linkedin')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeMobileFormat === 'linkedin' ? 'bg-[#C4D600] text-black font-bold shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                LinkedIn
              </button>
              <button
                type="button"
                onClick={() => setActiveMobileFormat('meta')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeMobileFormat === 'meta' ? 'bg-[#C4D600] text-black font-bold shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                Meta Ad
              </button>
            </div>

            {/* Micro hint overlay */}
            <div className="absolute top-0 right-2 z-20 hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono text-gray-400 backdrop-blur-md pointer-events-none select-none">
              <Move className="w-3 h-3 text-[#C4D600]" />
              <span>Interactive: Drag & Inspect Physics</span>
            </div>

            <motion.div
              style={{ rotateX: tiltX, rotateY: tiltY }}
              className="relative w-full h-full flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 p-1 sm:p-2"
            >

              {/* --------------------------------------------------------------- */}
              {/* CARD A: INSTAGRAM CAROUSEL & FEED POST FRAME                    */}
              {/* --------------------------------------------------------------- */}
              <motion.div
                drag
                dragConstraints={containerRef}
                dragElastic={0.25}
                whileDrag={{ scale: 1.04, zIndex: 50, cursor: 'grabbing' }}
                animate={{
                  y: [0, -12, 0],
                  x: [0, 5, 0],
                  rotate: [-1.2, 1.2, -1.2]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6.8,
                  ease: 'easeInOut'
                }}
                className={`w-full max-w-[340px] sm:max-w-none sm:w-[310px] lg:w-[320px] rounded-2xl bg-[#141519]/95 backdrop-blur-xl border border-white/10 p-3.5 sm:p-4 shadow-2xl hover:border-[#C4D600]/50 hover:shadow-[0_15px_35px_rgba(196,214,0,0.15)] transition-all cursor-grab select-none z-20 shrink-0 touch-pan-y ${
                  activeMobileFormat === 'instagram' ? 'block' : 'hidden sm:block'
                }`}
              >
                {/* Platform Chrome: Instagram Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    {/* Story Gradient Ring */}
                    <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
                      <div className="w-full h-full rounded-full bg-black overflow-hidden flex items-center justify-center">
                        <img
                          src={selectedClient.logo}
                          alt={selectedClient.name}
                          className="w-5 h-5 object-contain dark:brightness-0 dark:invert"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-white tracking-tight">
                          {selectedClient.instagram.handle}
                        </span>
                        <span className="text-[#C4D600] text-[10px]">●</span>
                      </div>
                      <span className="text-[10px] text-gray-400 block font-mono">Original Audio</span>
                    </div>
                  </div>
                  <span className="text-gray-400 font-bold tracking-widest text-xs">•••</span>
                </div>

                {/* Artwork Display Container */}
                <div className="relative my-3 rounded-xl overflow-hidden aspect-[4/5] bg-black border border-white/10 group">
                  <img
                    src={selectedClient.instagram.image}
                    alt="Social Creative"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Slide Pill Indicator */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono text-white border border-white/20">
                    1/5
                  </div>
                  {/* Badge */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-[#C4D600] text-black text-[10px] font-bold tracking-wider uppercase font-mono">
                    {selectedClient.instagram.tag}
                  </div>
                </div>

                {/* Interactive Action Bar */}
                <div className="flex items-center justify-between py-1 text-gray-300">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => toggleLike('ig')}
                      className="cursor-pointer transition-transform active:scale-125"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          likedPosts['ig'] ? 'text-red-500 fill-red-500' : 'hover:text-red-400'
                        }`}
                      />
                    </button>
                    <MessageCircle className="w-5 h-5 hover:text-white cursor-pointer" />
                    <Send className="w-5 h-5 hover:text-white cursor-pointer" />
                  </div>
                  <Bookmark className="w-5 h-5 hover:text-white cursor-pointer" />
                </div>

                {/* Likes & Caption Preview */}
                <div className="pt-2 text-xs space-y-1">
                  <span className="font-bold text-white block">
                    {likedPosts['ig']
                      ? `${(parseInt(selectedClient.instagram.likes.replace(',', '')) + 1).toLocaleString()} likes`
                      : `${selectedClient.instagram.likes} likes`}
                  </span>
                  <p className="text-gray-300 line-clamp-2 text-[11px] leading-relaxed">
                    <span className="font-bold text-white mr-1.5">{selectedClient.instagram.handle}</span>
                    {selectedClient.instagram.caption}
                  </p>
                </div>
              </motion.div>

              {/* --------------------------------------------------------------- */}
              {/* CARD B: LINKEDIN B2B THOUGHT LEADERSHIP CAROUSEL FRAME          */}
              {/* --------------------------------------------------------------- */}
              <motion.div
                drag
                dragConstraints={containerRef}
                dragElastic={0.25}
                whileDrag={{ scale: 1.04, zIndex: 50, cursor: 'grabbing' }}
                animate={{
                  y: [0, 14, 0],
                  x: [0, -6, 0],
                  rotate: [1.5, -1.2, 1.5]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8.2,
                  ease: 'easeInOut'
                }}
                className={`w-full max-w-[340px] sm:max-w-none sm:w-[320px] lg:w-[330px] rounded-2xl bg-[#141519]/95 backdrop-blur-xl border border-white/10 p-3.5 sm:p-4 shadow-2xl hover:border-[#C4D600]/50 hover:shadow-[0_15px_35px_rgba(196,214,0,0.15)] transition-all cursor-grab select-none z-30 shrink-0 touch-pan-y sm:-ml-8 sm:mt-12 ${
                  activeMobileFormat === 'linkedin' ? 'block' : 'hidden sm:block'
                }`}
              >
                {/* Platform Chrome: LinkedIn Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 overflow-hidden flex items-center justify-center p-1.5">
                      <img
                        src={selectedClient.logo}
                        alt={selectedClient.name}
                        className="w-full h-full object-contain dark:brightness-0 dark:invert"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-white tracking-tight">
                          {selectedClient.linkedin.author}
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">· 1st</span>
                      </div>
                      <span className="text-[9px] text-gray-400 block line-clamp-1">
                        {selectedClient.linkedin.headline}
                      </span>
                    </div>
                  </div>
                  {/* LinkedIn Icon */}
                  <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>

                {/* B2B Document Preview */}
                <div className="my-3 p-4 rounded-xl bg-gradient-to-br from-[#1A1C24] to-[#0D0E12] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#C4D600]">
                    <span>{selectedClient.linkedin.slideInfo}</span>
                    <span className="uppercase tracking-widest">Document</span>
                  </div>
                  <h4 className="text-sm font-extrabold text-white font-heading leading-snug">
                    {selectedClient.linkedin.title}
                  </h4>
                  <div className="rounded-lg overflow-hidden h-28 bg-black/60 border border-white/5 relative">
                    <img
                      src={selectedClient.linkedin.image}
                      alt="Deck Slide"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[10px] text-gray-200 font-mono">
                        Key Strategy Blueprint · Tap to expand
                      </span>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Engagement Footer */}
                <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[11px] text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <div className="flex -space-x-1">
                      <span className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white">👍</span>
                      <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[8px] text-white">💡</span>
                    </div>
                    <span>{selectedClient.linkedin.reactions}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => toggleLike('li')}
                      className={`inline-flex items-center gap-1 cursor-pointer ${
                        likedPosts['li'] ? 'text-[#C4D600] font-bold' : 'hover:text-white'
                      }`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{likedPosts['li'] ? 'Reacted' : 'Like'}</span>
                    </button>
                    <span className="inline-flex items-center gap-1 hover:text-white cursor-pointer">
                      <Repeat2 className="w-3.5 h-3.5" />
                      <span>Repost</span>
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* --------------------------------------------------------------- */}
              {/* CARD C: META DIRECT-RESPONSE AD CREATIVE FRAME                  */}
              {/* --------------------------------------------------------------- */}
              <motion.div
                drag
                dragConstraints={containerRef}
                dragElastic={0.25}
                whileDrag={{ scale: 1.04, zIndex: 50, cursor: 'grabbing' }}
                animate={{
                  y: [0, -8, 0],
                  x: [0, 7, 0],
                  rotate: [-0.8, 1.0, -0.8]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7.4,
                  ease: 'easeInOut'
                }}
                className={`w-full max-w-[340px] sm:max-w-none sm:w-[270px] lg:w-[280px] rounded-2xl bg-[#141519]/95 backdrop-blur-xl border border-white/10 p-3.5 sm:p-4 shadow-2xl hover:border-[#C4D600]/50 hover:shadow-[0_15px_35px_rgba(196,214,0,0.15)] transition-all cursor-grab select-none z-10 shrink-0 touch-pan-y sm:-ml-10 sm:-mt-10 ${
                  activeMobileFormat === 'meta' ? 'block' : 'hidden sm:block'
                }`}
              >
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C4D600] font-bold">
                      Sponsored Ad
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">{selectedClient.metaAd.roas}</span>
                </div>

                <p className="text-[11px] text-gray-300 line-clamp-2 leading-relaxed mb-2.5">
                  {selectedClient.metaAd.headline}
                </p>

                {/* Ad Creative Image */}
                <div className="relative rounded-lg overflow-hidden aspect-[16/10] bg-black border border-white/10 mb-2.5">
                  <img
                    src={selectedClient.metaAd.image}
                    alt="Paid Ad Creative"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] font-mono text-[#C4D600] border border-white/20">
                    High-CTR Format
                  </div>
                </div>

                {/* Direct-Response Call to Action Bar */}
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-white line-clamp-1">
                    {selectedClient.metaAd.title}
                  </span>
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="px-2.5 py-1 rounded bg-[#C4D600] text-black text-[10px] font-extrabold hover:bg-[#d2e500] transition-colors shrink-0 cursor-pointer"
                  >
                    {selectedClient.metaAd.ctaText}
                  </button>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SocialBrandEcosystemSection;
