import React from 'react';
import { Project } from '../types';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Palette,
  Share2,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Printer
} from 'lucide-react';
import { LogoCloud, Logo } from './ui/logo-cloud-2';
import KineticGrid from './ui/kinetic-grid';
import { BrandCommercialVideoSection } from './BrandCommercialVideoSection';
import { SiFigma } from 'react-icons/si';
import { TbBrandAdobeIllustrator, TbBrandAdobePhotoshop } from 'react-icons/tb';

// Brand logos for Graphic Design section
import avidsLogo from '../assets/images/logo graphics design/logo avids.png';
import bootvibLogo from '../assets/images/logo graphics design/bootvib.png';
import natuliqueLogo from '../assets/images/logo graphics design/natulique.png';
import jeremieBMonogramLogo from '../assets/images/logo graphics design/gerimi boulaire.png';
import csePaulLogo from '../assets/images/logo graphics design/cse paule.png';
import chronoMobileLogo from '../assets/images/logo graphics design/chrono mobile.png';
import designMeLogo from '../assets/images/logo graphics design/design me.png';
import kineGuelizLogo from '../assets/images/logo graphics design/logo kine gueliz.png';

const graphicLogos: Logo[] = [
  {
    src: avidsLogo,
    alt: 'Avids Logo',
    className: 'h-14 sm:h-17 md:h-20 max-w-[210px] sm:max-w-[245px] md:max-w-[275px]',
  },
  {
    src: bootvibLogo,
    alt: 'Boostvib Logo',
    className: 'h-16 sm:h-20 md:h-24 max-w-[210px] sm:max-w-[250px] md:max-w-[280px]',
  },
  {
    src: natuliqueLogo,
    alt: 'Natulique Logo',
    className: 'h-20 sm:h-24 md:h-28 max-w-[210px] sm:max-w-[250px] md:max-w-[280px]',
  },
  {
    src: jeremieBMonogramLogo,
    alt: 'Jérémie Boulaire Logo',
    className: 'h-22 sm:h-28 md:h-32 max-w-[160px] sm:max-w-[190px] md:max-w-[220px]',
  },
  {
    src: csePaulLogo,
    alt: 'CSE Paul Logo',
    className: 'h-18 sm:h-22 md:h-26 max-w-[220px] sm:max-w-[260px] md:max-w-[290px]',
  },
  {
    src: chronoMobileLogo,
    alt: 'Chrono Mobile Logo',
    className: 'h-15 sm:h-18 md:h-21 max-w-[210px] sm:max-w-[250px] md:max-w-[280px]',
  },
  {
    src: designMeLogo,
    alt: 'Design Me Logo',
    className: 'h-18 sm:h-22 md:h-26 max-w-[200px] sm:max-w-[240px] md:max-w-[270px]',
  },
  {
    src: kineGuelizLogo,
    alt: 'Kiné Guéliz Logo',
    className: 'h-20 sm:h-24 md:h-28 max-w-[210px] sm:max-w-[250px] md:max-w-[280px]',
  },
];

interface DesignerPageProps {
  onSelectProject?: (project: Project) => void;
  onOpenContact: () => void;
}

export const DesignerPage: React.FC<DesignerPageProps> = ({ onSelectProject, onOpenContact }) => {
  const { pagesConfig } = usePortfolio();

  const scrollToProjects = () => {
    const el = document.getElementById('graphic-design-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNextSection = () => {
    const el = document.getElementById('brand-commercial-section') || document.getElementById('graphic-brands') || document.getElementById('graphic-design-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const CORE_PILLARS = [
    {
      number: '01',
      icon: Palette,
      title: 'Branding & Visual Identity',
      description: 'Creating memorable, lasting brand identities that position your business as an undeniable industry leader.',
      features: [
        'Custom vector logo suite (Monograms, Emblems, Wordmarks)',
        'Comprehensive brand guidelines & detailed brand books',
        'Typographic hierarchies and harmonious color palettes',
        'Global art direction and application blueprints'
      ]
    },
    {
      number: '02',
      icon: Printer,
      title: 'Print Media & Physical Collateral',
      description: 'Designing high-end tactile print assets with bespoke finishes, engineered for premier print houses.',
      features: [
        'Product packaging, luxury labels, and bespoke boxes',
        'Editorial catalogs, brochures, lookbooks, and luxury menus',
        'Prestige stationery (Soft-touch cards, spot UV, gold foil)',
        'Certified prepress files (CMYK 300 DPI with trim & bleed)'
      ]
    },
    {
      number: '03',
      icon: Share2,
      title: 'Social Media Content & Digital Assets',
      description: 'High-impact creatives engineered to stop the scroll, drive engagement, and convert your target audience.',
      features: [
        'Educational & narrative LinkedIn & Instagram carousels (1080x1350)',
        'High-converting ad creatives for Meta & LinkedIn campaigns',
        'Story templates, cover banners, and Reels thumbnails',
        'Harmonized content grids for cohesive visual branding'
      ]
    }
  ];

  return (
    <div className="pb-20">

      {/* ========================================================================= */}
      {/* SECTION 1: HERO KINETIC GRID (INTERACTIVE CURSOR WARP & GREEN RIPPLE)    */}
      {/* ========================================================================= */}
      <KineticGrid globalColor="green" className="min-h-screen">
        <section className="relative flex flex-col items-center justify-center flex-1 w-full max-w-5xl px-4 sm:px-6 z-10 pt-40 sm:pt-48 md:pt-56 pb-28 sm:pb-36 text-center">
          {/* Subtle Ambient Radial Lime Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-[#C4D600]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

          {/* Hero Content (No card container background) */}
          <div className="w-full max-w-4xl mx-auto text-center px-4">
            {/* Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-white/70 tracking-tight leading-[1.12] mb-6 sm:mb-8 max-w-4xl mx-auto">
              Stop Losing High-Ticket{' '}
              <span className="text-[#C4D600] drop-shadow-[0_0_25px_rgba(196,214,0,0.45)]">
                Clients
              </span>{' '}
              to Mediocre Design.
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-white/40 font-sans leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-12 font-normal">
              Specialized in crafting brand systems that scale. Combining identity design, tactile packaging, social content, and precision print to make your brand impossible to ignore.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
              {/* Primary CTA with Liquid Water Fill Effect */}
              <button
                type="button"
                onClick={onOpenContact}
                className="btn-liquid-fill px-7 sm:px-9 py-4 rounded-full font-extrabold text-sm sm:text-base inline-flex items-center justify-center gap-3 cursor-pointer group shadow-xl"
              >
                <span>Start Your Brand Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Scroll Down CTA */}
              <button
                type="button"
                onClick={scrollToNextSection}
                className="btn-liquid-fill w-14 h-14 rounded-full inline-flex items-center justify-center cursor-pointer group shadow-xl shrink-0"
                title="Scroll to next section"
                aria-label="Scroll to next section"
              >
                <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
              </button>

              {/* Figma CTA */}
              <button
                type="button"
                onClick={scrollToNextSection}
                className="btn-liquid-fill w-14 h-14 rounded-full inline-flex items-center justify-center cursor-pointer group shadow-xl shrink-0"
                title="Figma"
                aria-label="Figma"
              >
                {React.createElement(SiFigma as any, { className: "w-5 h-5 transition-transform duration-300 group-hover:scale-110" })}
              </button>

              {/* Illustrator CTA */}
              <button
                type="button"
                onClick={scrollToNextSection}
                className="btn-liquid-fill w-14 h-14 rounded-full inline-flex items-center justify-center cursor-pointer group shadow-xl shrink-0"
                title="Adobe Illustrator"
                aria-label="Adobe Illustrator"
              >
                {React.createElement(TbBrandAdobeIllustrator as any, { className: "w-6 h-6 transition-transform duration-300 group-hover:scale-110" })}
              </button>

              {/* Canva CTA */}
              <button
                type="button"
                onClick={scrollToNextSection}
                className="btn-liquid-fill w-14 h-14 rounded-full inline-flex items-center justify-center cursor-pointer group shadow-xl shrink-0"
                title="Canva"
                aria-label="Canva"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.89 16.5c-1.34 0-2.31-.49-3.23-1.63-.73-.91-1.37-2.32-1.78-3.95l-.12-.48c-.28-1.12-.57-1.92-.88-2.42-.31-.5-.65-.75-1.04-.75-.41 0-.69.21-.86.63-.17.42-.23 1.15-.18 2.19.04.85.15 1.83.33 2.94.06.36.01.62-.15.78-.16.16-.38.24-.66.24-.31 0-.54-.1-.7-.3-.16-.2-.25-.53-.27-1-.05-1.09-.02-2.12.09-3.09.11-.97.35-1.76.72-2.37.47-.79 1.14-1.19 2.01-1.19.78 0 1.4.35 1.86 1.05.46.7.83 1.73 1.11 3.09l.11.53c.27 1.25.59 2.18.96 2.79.37.61.81.92 1.32.92.51 0 .91-.25 1.2-.75.29-.5.48-1.28.57-2.34.03-.35.12-.59.27-.72.15-.13.37-.19.66-.19.26 0 .47.08.63.24.16.16.2.39.12.69-.15 1.63-.52 2.87-1.11 3.72-.59.85-1.33 1.28-2.22 1.28z" />
                </svg>
              </button>

              {/* Photoshop CTA */}
              <button
                type="button"
                onClick={scrollToNextSection}
                className="btn-liquid-fill w-14 h-14 rounded-full inline-flex items-center justify-center cursor-pointer group shadow-xl shrink-0"
                title="Adobe Photoshop"
                aria-label="Adobe Photoshop"
              >
                {React.createElement(TbBrandAdobePhotoshop as any, { className: "w-6 h-6 transition-transform duration-300 group-hover:scale-110" })}
              </button>
            </div>
          </div>
        </section>
      </KineticGrid>

      {/* ========================================================================= */}
      {/* SECTION 1.2: COMMERCIAL VIDEO SHOWCASE (Full width with side gradients)  */}
      {/* ========================================================================= */}
      <div id="brand-commercial-section">
        <BrandCommercialVideoSection />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1.5: LOGO CLOUD (Selected brands I've designed for)              */}
      {/* ========================================================================= */}
      <section id="graphic-brands" className="relative w-full py-16 sm:py-20 px-4 overflow-hidden border-b border-white/10 bg-[#0B0C0E]">
        <div className="relative mx-auto max-w-6xl text-center">
          <h2 className="mb-8 sm:mb-10 text-center font-medium text-base sm:text-lg md:text-xl text-gray-400 tracking-tight">
            Selected{' '}
            <span className="font-semibold text-[#C4D600]">brands</span> I’ve designed for.
          </h2>

          <LogoCloud logos={graphicLogos} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MAIN CONTAINER: PILLARS & CALL TO ACTION                                  */}
      {/* ========================================================================= */}
      <div
        id="graphic-design-projects"
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 mt-16"
      >

        {/* ========================================================================= */}
        {/* SECTION 4: THE 3 CORE PILLARS (Branding, Print Media, Social Media)       */}
        {/* ========================================================================= */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C4D600] font-mono font-bold">
              Areas of Expertise & Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              A Comprehensive Vision for <span className="text-[#C4D600]">Your Brand</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              From the initial logo sketch to final printed collateral and high-impact digital content strategy.
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
            Ready to bring your brand's visual identity to life?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            From logo creation to premium print media and engaging social content, let’s discuss your vision.
          </p>
          <div>
            <button
              onClick={onOpenContact}
              className="btn-liquid-fill px-8 py-4 rounded-lg font-extrabold text-sm sm:text-base cursor-pointer inline-flex items-center gap-2.5 shadow-xl group"
            >
              <span>Let's talk today</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default DesignerPage;
