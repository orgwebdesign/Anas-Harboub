import React, { useState } from 'react';
import { Project } from '../types';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Palette,
  Layers,
  Share2,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Printer,
  Smartphone,
  Eye,
  X,
  LayoutGrid,
  FileCheck,
  Check,
  Shapes
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoCloud } from './ui/logo-cloud-2';
import { GraphicScrollVideoHero } from './GraphicScrollVideoHero';

// Import curated graphics assets
import graphicBrandingMockup from '../assets/images/graphic_branding_mockup.jpg';
import graphicPrintMockup from '../assets/images/graphic_print_mockup.jpg';
import graphicSocialMockup from '../assets/images/graphic_social_mockup.jpg';
import qualyxHero from '../assets/images/qualyx_hero.png';
import carsHero from '../assets/images/cars_and_co_hero.png';
import natuliqueHero from '../assets/images/natulique_swiss_hero.png';
import yachtsHero from '../assets/images/lm_luxe_yachts_hero.png';
import jeremieHero from '../assets/images/jeremie_boulaire_hero.png';
import mtcHero from '../assets/images/mtc_holistique_hero.png';
import havetHero from '../assets/images/gonzague_havet_hero.png';

export type GraphicDesignCategory = 'all' | 'branding' | 'print' | 'social';

interface GraphicProject {
  id: string;
  number: string;
  categoryFilter: GraphicDesignCategory;
  categoryLabel: string;
  title: string;
  client: string;
  description: string;
  year: string;
  imageUrl: string;
  tags: string[];
  deliverables: string[];
  colorPalette?: string[];
  highlights: { label: string; value: string }[];
}

interface DesignerPageProps {
  onSelectProject?: (project: Project) => void;
  onOpenContact: () => void;
}

export const DesignerPage: React.FC<DesignerPageProps> = ({ onSelectProject, onOpenContact }) => {
  const { pagesConfig } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState<GraphicDesignCategory>('all');
  const [selectedGraphicProject, setSelectedGraphicProject] = useState<GraphicProject | null>(null);

  const scrollToProjects = () => {
    const el = document.getElementById('graphic-design-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const GRAPHIC_PROJECTS: GraphicProject[] = [
    // --- BRANDING PROJECTS ---
    {
      id: 'g-elemental-branding',
      number: '01',
      categoryFilter: 'branding',
      categoryLabel: 'Branding & Identité Visuelle',
      title: 'Elemental Identity — Dark Luxury Brand & Design System',
      client: 'Elemental Tech Studio',
      description: 'Charte graphique complète, logo vectoriel épuré, papeterie de prestige mate avec tranche fluo verte, et guide typographique exhaustif.',
      year: '2026',
      imageUrl: graphicBrandingMockup,
      tags: ['Branding', 'Logo Design', 'Brand Book', 'Illustrator', 'Figma'],
      deliverables: [
        'Logo suite vectoriel complet (SVG, AI, EPS, PNG)',
        'Brand Guidelines & Règles d\'usage typographique',
        'Set de papeterie corporative haut de gamme & cartes de visite',
        'Palette chromatique Obsidian & Electric Lime'
      ],
      colorPalette: ['#C4D600', '#0B0C0E', '#1F2026', '#E5E7EB'],
      highlights: [
        { label: 'Supports créés', value: '25+ Assets' },
        { label: 'Format export', value: 'Vector / Print' }
      ]
    },
    {
      id: 'g-qualyx-brand',
      number: '02',
      categoryFilter: 'branding',
      categoryLabel: 'Branding & Logo Suite',
      title: 'Qualyx AI — Modern SaaS Brandmark & Color Identity',
      client: 'Qualyx AI',
      description: 'Conception de l\'emblème minimaliste, univers chromatique vert électrique et système d\'iconographie sur-mesure pour plateforme commerciale IA.',
      year: '2026',
      imageUrl: qualyxHero,
      tags: ['Branding', 'SaaS Identity', 'Logo Suite', 'Vector'],
      deliverables: [
        'Logotype responsive & monogramme d\'application',
        'Système d\'icônes vectorielles personnalisées',
        'Guide d\'application digitale et déclinaisons dark mode',
        'Bannières de marque et assets de lancement'
      ],
      colorPalette: ['#C4D600', '#0B0C0E', '#FFFFFF'],
      highlights: [
        { label: 'Adhésion marque', value: '100% Validé' },
        { label: 'Déclinaisons', value: 'Dark / Light' }
      ]
    },
    {
      id: 'g-lm-yachts-brand',
      number: '03',
      categoryFilter: 'branding',
      categoryLabel: 'Branding & Luxe Maritime',
      title: 'LM Luxe Yachts Ibiza — Identité Visuelle Or & Prestige',
      client: 'LM Luxe Yachts Ibiza',
      description: 'Emblème nautique haut de gamme, signature typographique raffinée et déclinaisons luxueuses pour agence de yachting aux Baléares.',
      year: '2025',
      imageUrl: yachtsHero,
      tags: ['Branding', 'Luxury Emblem', 'Gold Accents', 'Stationery'],
      deliverables: [
        'Emblème yachting & Logotype champagne gold',
        'Badging de coque & signalétique pour yachts',
        'Papeterie VIP avec marquage à chaud doré',
        'Charte éditoriale maritime'
      ],
      colorPalette: ['#D4AF37', '#0A1118', '#FFFFFF'],
      highlights: [
        { label: 'Secteur', value: 'Ultra Luxe' },
        { label: 'Zone', value: 'Ibiza & France' }
      ]
    },
    {
      id: 'g-jeremie-brand',
      number: '04',
      categoryFilter: 'branding',
      categoryLabel: 'Branding & Droit',
      title: 'Cabinet Jérémie Boulaire — Monogramme Juridique & Papeterie',
      client: 'Cabinet Jérémie Boulaire',
      description: 'Création d\'un monogramme JB entrelacé à l\'élégance intemporelle, identité monochrome sobre et papeterie officielle pour docteur en droit.',
      year: '2026',
      imageUrl: jeremieHero,
      tags: ['Branding', 'Legal Identity', 'Monogram', 'Minimalist'],
      deliverables: [
        'Monogramme typographique gravé "JB"',
        'En-têtes de lettres officiels et cartes de correspondance',
        'Sceau officiel pour dossiers contractuels',
        'Direction artistique des portraits & photographie'
      ],
      colorPalette: ['#FFFFFF', '#121316', '#C4D600'],
      highlights: [
        { label: 'Style', value: 'Monochrome Élégant' },
        { label: 'Usage', value: 'Print & Digital' }
      ]
    },

    // --- PRINT MEDIA PROJECTS ---
    {
      id: 'g-aurelia-print',
      number: '05',
      categoryFilter: 'print',
      categoryLabel: 'Print Media & Packaging',
      title: 'Aurelia Haute Parfumerie — Packaging & Catalogue Éditorial',
      client: 'Aurelia Fragrances',
      description: 'Packaging de boîte de parfum de luxe avec gaufrage à chaud et dorure, accompagné d\'un catalogue éditorial A4 relié pour boutiques exclusives.',
      year: '2026',
      imageUrl: graphicPrintMockup,
      tags: ['Print Media', 'Packaging Luxe', 'Catalogue A4', 'InDesign', 'Gaufrage'],
      deliverables: [
        'Gabarits de packaging boîte de parfum avec tracés de découpe (Dieline)',
        'Catalogue éditorial 48 pages prêt à l\'impression (CMJN, 300 DPI)',
        'Cartes de visite avec dorure à chaud & tranche teintée',
        'Spécifications techniques d\'impression et nuancier Pantone'
      ],
      colorPalette: ['#C5A059', '#151515', '#F5F2EB'],
      highlights: [
        { label: 'Résolution', value: '300 DPI CMJN' },
        { label: 'Finition', value: 'Dorure & Emboss' }
      ]
    },
    {
      id: 'g-natulique-print',
      number: '06',
      categoryFilter: 'print',
      categoryLabel: 'Print Media & Édition',
      title: 'Natulique Swiss — Brochures Salons & Packaging Éco-Certifié',
      client: 'Natulique Switzerland',
      description: 'Conception de brochures professionnelles B2B pour salons de coiffure suisses, étiquettes de flacons et guides de coloration capillaire bio.',
      year: '2025',
      imageUrl: natuliqueHero,
      tags: ['Print Media', 'Brochures B2B', 'Packaging', 'Illustrator', 'InDesign'],
      deliverables: [
        'Brochure de présentation partenaire B2B (3 volets)',
        'Nuancier de coloration capillaire grand format',
        'Étiquettes flacons conformes aux normes suisses',
        'Fichiers d\'impression haute résolution certifiés PDF/X-1a'
      ],
      colorPalette: ['#5C4033', '#E6D7C3', '#2D5A27'],
      highlights: [
        { label: 'Partenaires', value: '120+ Salons' },
        { label: 'Norme', value: 'Éco-responsable' }
      ]
    },
    {
      id: 'g-cars-print',
      number: '07',
      categoryFilter: 'print',
      categoryLabel: 'Print Media & Luxe',
      title: 'Cars & Co Marrakech — Brochure Flotte VIP & Dossiers Véhicules',
      client: 'Cars & Co Marrakech',
      description: 'Brochure de présentation de la flotte de prestige (Porsche, Range Rover, Mercedes) avec vernis sélectif, porte-clés et pochettes VIP.',
      year: '2025',
      imageUrl: carsHero,
      tags: ['Print Media', 'Brochure Flotte', 'Vernis Sélectif', 'Papeterie VIP'],
      deliverables: [
        'Dossier de présentation flotte automobile premium',
        'Pochettes de contrats de location avec dorure à chaud',
        'Cartes de membre VIP Soft-Touch',
        'Signalétique et drapeaux d\'agence Marrakech'
      ],
      colorPalette: ['#C4D600', '#111215', '#FFFFFF'],
      highlights: [
        { label: 'Finition', value: 'Pelliculage Soft-Touch' },
        { label: 'Grammage', value: '350g Couché Mat' }
      ]
    },

    // --- CONTENT SOCIAL MEDIA PROJECTS ---
    {
      id: 'g-creative-social',
      number: '08',
      categoryFilter: 'social',
      categoryLabel: 'Content Social Media',
      title: 'Dark Mode Aesthetic — Suite de Carrousels & Posts Instagram',
      client: 'Growth Media Agency',
      description: 'Série de 10 carrousels Instagram & LinkedIn axés sur le design, l\'UX et le marketing digital avec typographie impactante et hooks viraux.',
      year: '2026',
      imageUrl: graphicSocialMockup,
      tags: ['Social Media', 'Carrousels 1080x1350', 'Instagram Growth', 'Photoshop'],
      deliverables: [
        '10 carrousels narratifs swipe-through (1080x1350px)',
        'Pack de 25 templates de stories animées modifiables',
        'Vignettes de couverture Reels & YouTube optimisées CTR',
        'Grille Instagram harmonieuse avec fil conducteur visuel'
      ],
      colorPalette: ['#C4D600', '#0B0C0E', '#FFFFFF'],
      highlights: [
        { label: 'Engagement', value: '+140%' },
        { label: 'Format', value: '4:5 Carrousel HD' }
      ]
    },
    {
      id: 'g-mtc-social',
      number: '09',
      categoryFilter: 'social',
      categoryLabel: 'Content Social Media',
      title: 'MTC Holistique — Campagne Visuelle Bien-être & Story Ads',
      client: 'MTC Holistique',
      description: 'Direction artistique des publications Instagram & Facebook : conseils kinésithérapie, posts éducatifs et bannières promotionnelles relaxantes.',
      year: '2026',
      imageUrl: mtcHero,
      tags: ['Social Media', 'Instagram Kit', 'Meta Ads', 'Story Templates'],
      deliverables: [
        'Kits de 30 visuels mensuels pour réseaux sociaux',
        'Campagne publicitaire Meta Ads ciblée conversion',
        'Visuels de mise en avant des soins et témoignages patients',
        'Bannières de couverture Facebook & LinkedIn coordonnées'
      ],
      colorPalette: ['#17A2B8', '#F8F9FA', '#212529'],
      highlights: [
        { label: 'Réservations via Insta', value: '+54%' },
        { label: 'Cohérence visuelle', value: '100% Harmonisé' }
      ]
    },
    {
      id: 'g-havet-social',
      number: '10',
      categoryFilter: 'social',
      categoryLabel: 'Content Social Media',
      title: 'Gonzague Havet — Personal Branding & Bannières LinkedIn',
      client: 'Gonzague Havet Consulting',
      description: 'Kit de personal branding pour dirigeant tech : bannières LinkedIn haute autorité, carrousels de cas clients et infographies de transformation digitale.',
      year: '2025',
      imageUrl: havetHero,
      tags: ['Personal Branding', 'LinkedIn Kit', 'Infographies', 'Carrousels B2B'],
      deliverables: [
        'Bannières de profil et page entreprise LinkedIn (1584x396px)',
        'Templates d\'infographies stratégiques pour publications B2B',
        'Visuels de citations d\'autorité et de podcasts',
        'Kit complet de bannières web publicitaires'
      ],
      colorPalette: ['#0A2540', '#635BFF', '#FFFFFF'],
      highlights: [
        { label: 'Réseau', value: 'LinkedIn Leader' },
        { label: 'Leads B2B', value: '+84%' }
      ]
    }
  ];

  const filteredProjects = GRAPHIC_PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.categoryFilter === activeFilter;
  });

  const FILTER_ITEMS = [
    { id: 'all' as GraphicDesignCategory, label: 'Tous les projets', icon: LayoutGrid },
    { id: 'branding' as GraphicDesignCategory, label: 'Branding & Identité', icon: Palette },
    { id: 'print' as GraphicDesignCategory, label: 'Print & Édition', icon: Printer },
    { id: 'social' as GraphicDesignCategory, label: 'Content Social Media', icon: Share2 },
  ];

  const CORE_PILLARS = [
    {
      number: '01',
      icon: Palette,
      title: 'Branding & Identité Visuelle',
      description: 'Création d\'identités de marque mémorables et durables qui positionnent votre entreprise en leader de son secteur.',
      features: [
        'Logo suite vectoriel sur-mesure (Monogrammes, Emblèmes, Wordmarks)',
        'Chartes graphiques complètes & Brand Books détaillés',
        'Systèmes typographiques et harmonies de couleurs chromatiques',
        'Direction artistique globale et guide d\'application'
      ]
    },
    {
      number: '02',
      icon: Printer,
      title: 'Print Media & Supports Physiques',
      description: 'Conception de supports imprimés haut de gamme avec finitions d\'exception, prêts pour les meilleures imprimeries.',
      features: [
        'Packaging produits, étiquettes luxe et boîtes personnalisées',
        'Catalogues éditoriaux, brochures, magazines et menus de prestige',
        'Papeterie de prestige (Cartes Soft-Touch, vernis sélectif, dorure)',
        'Fichiers pré-presse certifiés CMJN 300 DPI avec traits de coupe'
      ]
    },
    {
      number: '03',
      icon: Share2,
      title: 'Content Social Media & Digital',
      description: 'Visuels à fort impact conçus pour capter l\'attention dans le feed, stimuler l\'engagement et convertir votre audience.',
      features: [
        'Carrousels éducatifs et narratifs LinkedIn & Instagram (1080x1350)',
        'Visuels publicitaires à haute conversion pour campagnes Meta Ads',
        'Templates de stories, bannières de couverture et vignettes Reels',
        'Grilles de contenu harmonisées pour une identité visuelle cohérente'
      ]
    }
  ];

  return (
    <div className="pb-20">

      {/* ========================================================================= */}
      {/* SECTION 1: HERO GSAP SCROLLTRIGGER 3D VIDEO                               */}
      {/* ========================================================================= */}
      <GraphicScrollVideoHero 
        onScrollToProjects={scrollToProjects} 
        onOpenContact={onOpenContact} 
      />

      {/* ========================================================================= */}
      {/* SECTION 1.5: LOGO CLOUD (Selected brands I've designed for)              */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-20 px-4 overflow-hidden border-b border-white/10 bg-[#0B0C0E]">
        <div className="relative mx-auto max-w-5xl text-center">
          <h2 className="mb-8 sm:mb-10 text-center font-medium text-base sm:text-lg md:text-xl text-gray-400 tracking-tight">
            Selected{' '}
            <span className="font-semibold text-[#C4D600]">brands</span> I’ve designed for.
          </h2>

          <LogoCloud />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MAIN CONTAINER: FILTERS, PROJECTS & PILLARS                               */}
      {/* ========================================================================= */}
      <div
        id="graphic-design-projects"
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 mt-12"
      >

        {/* ========================================================================= */}
        {/* SECTION 2: CATEGORY FILTER BAR (Classic rounded-lg style)                 */}
        {/* ========================================================================= */}
        <div className="relative w-full py-6 text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
            Featured Graphic <span className="text-[#C4D600]">Projects</span>
          </h2>

          {/* Square Glass Effect Category Filter Cards with classic rounded-lg */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6">
            {FILTER_ITEMS.map((item) => {
              const Icon = item.icon;
              const isSelected = activeFilter === item.id;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveFilter(item.id)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className={`group relative flex flex-col items-center justify-center aspect-square w-24 sm:w-28 md:w-32 rounded-lg p-3 sm:p-4 cursor-pointer select-none backdrop-blur-xl transition-all duration-300 ${isSelected ? 'opacity-100' : 'opacity-45 hover:opacity-90'
                    }`}
                >
                  {/* Static Background Tile with classic rounded-lg */}
                  <div className="absolute inset-0 rounded-lg bg-white/[0.04] border border-white/20 group-hover:border-white/40 transition-colors duration-300 pointer-events-none" />

                  {/* Smooth Animated Active Highlight Frame with classic rounded-lg */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeGraphicCategoryHighlight"
                      className="absolute inset-0 rounded-lg border-2 border-white bg-white/[0.12] shadow-[0_0_20px_rgba(255,255,255,0.25)] pointer-events-none z-0"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Top Glass Reflection Edge */}
                  <div className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-10" />

                  {/* White Icon */}
                  <div className="relative z-10 mb-2 sm:mb-2.5 flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]" />
                  </div>

                  {/* Category Text Under Icon */}
                  <span
                    className={`relative z-10 text-[11px] sm:text-xs font-semibold text-center leading-tight tracking-wide text-white transition-all duration-300 ${isSelected ? 'font-bold' : 'group-hover:font-bold'
                      }`}
                  >
                    {item.label}
                  </span>

                  {/* Active Indicator Glow Dot */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeGraphicCategoryDot"
                      className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.95)] z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3: SHOWCASE CARDS (Classic rounded-lg styling)                    */}
        {/* ========================================================================= */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  key={project.id}
                  onClick={() => setSelectedGraphicProject(project)}
                  className="group relative rounded-lg bg-[#121318] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex flex-col h-[480px] cursor-pointer"
                >
                  {/* Card Image Showcase */}
                  <div className="relative w-full h-full overflow-hidden bg-black">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                    />

                    {/* Category badge in top left */}
                    <div className="absolute top-5 left-5 z-10">
                      <span className="px-3.5 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/20 text-[#C4D600] text-xs font-mono font-semibold tracking-wider shadow-lg">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Year badge in bottom right */}
                    <div className="absolute bottom-5 right-5 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none z-10">
                      <span className="px-3.5 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-semibold tracking-wider shadow-lg">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* HOVER OVERLAY: Detailed Info & Green Action Button */}
                  <div className="absolute inset-0 bg-[#0B0C0E]/94 backdrop-blur-md p-7 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out pointer-events-none group-hover:pointer-events-auto z-10">
                    <div className="space-y-4">
                      {/* Brand Logo Initials */}
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center font-heading font-extrabold text-xl text-white shadow-xl">
                        {project.title.slice(0, 2).toUpperCase()}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight tracking-tight">
                        {project.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-gray-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Deliverables snippet */}
                      <div className="pt-1 flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-300 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Green View Details Button */}
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedGraphicProject(project);
                        }}
                        className="w-full py-3.5 px-6 rounded-lg bg-[#C4D600] text-black font-extrabold text-sm sm:text-base hover:bg-[#d2e500] hover:shadow-[0_0_25px_rgba(196,214,0,0.5)] transition-all cursor-pointer inline-flex items-center justify-center gap-2.5 shadow-xl hover:scale-102"
                      >
                        <span>Inspecter le projet</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 4: THE 3 CORE PILLARS (Branding, Print Media, Social Media)       */}
        {/* ========================================================================= */}
        <div className="space-y-10 pt-8 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C4D600] font-mono font-bold">
              Champs d'intervention & Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Une vision globale pour <span className="text-[#C4D600]">votre marque</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Du premier trait de crayon sur votre logo jusqu'à la livraison de vos supports imprimés et votre stratégie de contenu digitale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {CORE_PILLARS.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="p-8 rounded-lg bg-[#141519] border border-white/10 hover:border-[#C4D600]/40 transition-all duration-300 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-lg bg-[#C4D600]/10 border border-[#C4D600]/20 flex items-center justify-center text-[#C4D600] group-hover:scale-110 transition-transform">
                        <PillarIcon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-gray-500 font-bold tracking-widest">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#C4D600] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-white/5">
                    {pillar.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#C4D600] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 5: BOTTOM CALL TO ACTION (Matching Web Design Page)                */}
        {/* ========================================================================= */}
        <div className="p-10 sm:p-14 rounded-lg bg-gradient-to-r from-[#1E1F26] to-[#141519] border border-white/10 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading max-w-2xl mx-auto leading-snug tracking-tight">
            Prêt à donner vie à l'identité visuelle de votre marque ?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            De la création de votre logo à la confection de vos supports print et de vos contenus réseaux sociaux, échangeons sur vos objectifs.
          </p>
          <div>
            <button
              onClick={onOpenContact}
              className="btn-liquid-fill px-8 py-4 rounded-lg font-extrabold text-sm sm:text-base cursor-pointer inline-flex items-center gap-2.5 shadow-xl group"
            >
              <span>Parlons-en dès aujourd'hui</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE DETAIL MODAL                                                  */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedGraphicProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-[#141519] border border-white/20 rounded-lg p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedGraphicProject(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-white/10 relative bg-black">
                <img
                  src={selectedGraphicProject.imageUrl}
                  alt={selectedGraphicProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-[#C4D600] text-xs font-mono font-semibold">
                    {selectedGraphicProject.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Header Info */}
              <div className="space-y-2 text-left">
                <span className="text-xs text-[#C4D600] font-mono uppercase tracking-wider block">
                  Client : {selectedGraphicProject.client} · {selectedGraphicProject.year}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
                  {selectedGraphicProject.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {selectedGraphicProject.description}
                </p>
              </div>

              {/* Highlights & Metrics */}
              <div className="grid grid-cols-2 gap-3 text-left">
                {selectedGraphicProject.highlights.map((h, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-[#0B0C0E] border border-white/10">
                    <span className="text-[10px] text-gray-400 font-mono block uppercase">{h.label}</span>
                    <span className="text-base font-bold text-white font-heading">{h.value}</span>
                  </div>
                ))}
              </div>

              {/* Deliverables List */}
              <div className="space-y-3 text-left">
                <h4 className="text-xs uppercase tracking-widest text-[#C4D600] font-mono font-bold">
                  Livrables & Spécifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedGraphicProject.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-[#C4D600] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-white/10">
                <button
                  onClick={() => setSelectedGraphicProject(null)}
                  className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Fermer
                </button>
                <button
                  onClick={() => {
                    setSelectedGraphicProject(null);
                    onOpenContact();
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#C4D600] text-black font-extrabold text-xs hover:bg-[#d2e500] transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Commander un projet similaire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default DesignerPage;
