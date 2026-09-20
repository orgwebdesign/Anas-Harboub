import React from 'react';
import { ANASS_BIO, fallbackPortrait } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUpRight, Globe, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { ExperienceCounterCard } from './ExperienceCounterCard';
import FallingText from './FallingText';

interface HeroSectionProps {
  onExploreClick: () => void;
  onHireClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onHireClick }) => {
  const { homeConfig } = usePortfolio();
  const portraitUrl = homeConfig.portrait || ANASS_BIO.portrait;

  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Ambient background glow shapes - Hardware accelerated radial gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(196, 214, 0,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-heading mb-3">
            I'm <span className="text-[#C4D600] underline decoration-[#C4D600]/30 underline-offset-8">{homeConfig.name}</span>
          </h1>
          <div className="max-w-3xl mx-auto my-2 min-h-[140px]">
            <FallingText
              text={homeConfig.tagline || "I design digital experiences people remember.\nFrom intuitive products to immersive websites, I blend UI/UX, motion and AI to turn ideas into experiences."}
              highlightWords={["digital", "experiences", "UI/UX", "motion", "AI", "remember", "ideas", "products", "websites", "intuitive", "immersive"]}
              highlightClass="highlighted"
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1.35rem"
              mouseConstraintStiffness={0.9}
            />
          </div>
        </motion.div>

        {/* Hero Grid with Central Portrait & Side Features */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* Left Hero Side: Socials & Metric */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Social Links */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block">
                Follow Me On
              </span>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <a
                  href={ANASS_BIO.socials.behance}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1A1B20] border border-white/10 flex items-center justify-center text-gray-300 hover:text-black hover:bg-[#C4D600] hover:border-[#C4D600] transition-all duration-300 text-xs font-bold"
                  title="Behance"
                >
                  Bē
                </a>
                <a
                  href={ANASS_BIO.socials.dribbble}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1A1B20] border border-white/10 flex items-center justify-center text-gray-300 hover:text-black hover:bg-[#C4D600] hover:border-[#C4D600] transition-all duration-300 text-xs font-bold"
                  title="Dribbble"
                >
                  Dr
                </a>
                <a
                  href={ANASS_BIO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1A1B20] border border-white/10 flex items-center justify-center text-gray-300 hover:text-black hover:bg-[#C4D600] hover:border-[#C4D600] transition-all duration-300 text-xs font-bold"
                  title="LinkedIn"
                >
                  in
                </a>
                <a
                  href={ANASS_BIO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1A1B20] border border-white/10 flex items-center justify-center text-gray-300 hover:text-black hover:bg-[#C4D600] hover:border-[#C4D600] transition-all duration-300 text-xs font-bold"
                  title="Instagram"
                >
                  Ig
                </a>
              </div>
            </div>

            {/* Metrics Card */}
            <div className="p-4 rounded-2xl bg-[#141519] border border-white/10 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#C4D600]/10 rounded-full blur-xl group-hover:bg-[#C4D600]/20 transition-colors" />
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#C4D600] text-black font-bold text-xs flex items-center justify-center border-2 border-[#141519]">
                    AH
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-800 text-white font-bold text-xs flex items-center justify-center border-2 border-[#141519]">
                    UI
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 text-[#C4D600] font-bold text-xs flex items-center justify-center border-2 border-[#141519]">
                    AI
                  </div>
                </div>
                <div>
                  <span className="font-heading font-extrabold text-xl text-white block">
                    50+ Projects
                  </span>
                  <span className="text-xs text-gray-400 block">
                    Designed across web, UI/UX & digital products
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Central Portrait Cutout Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex justify-center relative my-4 lg:my-0 order-1 lg:order-2"
          >
            {/* Transparent Background Cutout Portrait Stage */}
            <div className="relative w-[300px] sm:w-[380px] lg:w-[420px] aspect-[3/4] flex items-end justify-center">
              {/* Radial orange glow halo behind subject */}
              <div className="absolute inset-0 bg-[#C4D600]/20 rounded-full blur-[70px] pointer-events-none transform translate-y-6 scale-90" />
              
              {/* Cutout Portrait Image */}
              <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden">
                <img
                  src={portraitUrl}
                  alt={`${homeConfig.name} UI UX Designer`}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 drop-shadow-[0_20px_50px_rgba(196, 214, 0,0.25)]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = fallbackPortrait;
                  }}
                  referrerPolicy="no-referrer"
                />
                {/* Soft bottom blend gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Right Hero Side: GSAP Animated 5 Years Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col justify-center space-y-6 text-center lg:text-left order-3"
          >
            <ExperienceCounterCard />
          </motion.div>

        </div>

        {/* Hero CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA: View Portfolio */}
          <button
            onClick={onExploreClick}
            className="btn-liquid-fill w-full sm:w-[210px] h-[56px] rounded-full font-bold text-base flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <span>View Portfolio</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
          </button>

          {/* Secondary CTA: Hire Me */}
          <button
            onClick={onHireClick}
            className="btn-liquid-fill w-full sm:w-[210px] h-[56px] rounded-full font-bold text-base flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
