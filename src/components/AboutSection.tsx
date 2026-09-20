import React from 'react';
import { ANASS_BIO } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onHireClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onHireClick }) => {
  const { homeConfig } = usePortfolio();
  const portraitUrl = homeConfig.portrait || ANASS_BIO.portrait;

  return (
    <section id="about" className="py-24 relative bg-[#0B0C0E] border-t border-white/10 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C4D600]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Chamfered Notched Card & Right Bio Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Chamfered Notched Orange Card with Black Interior */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Outer 5px Orange Border Frame */}
            <div
              className="relative w-full max-w-[380px] sm:max-w-[420px] bg-[#C4D600] p-[5px] shadow-[0_25px_60px_rgba(196, 214, 0,0.25)] min-h-[460px] sm:min-h-[500px] overflow-hidden"
              style={{
                clipPath: 'polygon(32px 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%, 0 32px)'
              }}
            >
              {/* Inner Black Card Container */}
              <div
                className="relative w-full h-full bg-[#111115] p-4 sm:p-5 pt-8 flex flex-col justify-between overflow-hidden"
                style={{
                  clipPath: 'polygon(29px 0, calc(100% - 29px) 0, 100% 29px, 100% 100%, 0 100%, 0 29px)'
                }}
              >
                {/* Semi-transparent decorative flower/cross background symbols */}
                <div className="absolute top-10 left-6 text-[#C4D600]/25 text-2xl font-bold select-none pointer-events-none">✦</div>
                <div className="absolute top-16 right-8 text-[#C4D600]/25 text-xl font-bold select-none pointer-events-none">✦</div>
                <div className="absolute bottom-28 left-4 text-[#C4D600]/20 text-lg font-bold select-none pointer-events-none">✦</div>

                {/* Portrait Image */}
                <div className="relative z-10 w-full flex justify-center items-end mt-2">
                  <img
                    src={portraitUrl}
                    alt={`${homeConfig.name} - UI/UX & Web Designer`}
                    className="w-full h-[360px] sm:h-[400px] object-cover object-top rounded-t-2xl drop-shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* 7 Tilted Floating Pill Badges Overlaid */}
                <div className="absolute bottom-3 left-2 right-2 z-20 flex flex-col items-center gap-1.5 pointer-events-none">
                  {/* Row 1 */}
                  <div className="flex items-center gap-2 -mb-1">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#1A1A20] text-white font-bold text-xs border border-white/20 shadow-xl -rotate-6 transform">
                      Mobile App Design
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-[#1A1A20] text-white font-bold text-xs border border-white/20 shadow-xl -rotate-3 transform">
                      UX/UI Design
                    </span>
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-center justify-center gap-2 -mb-1">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#C4D600] text-black font-extrabold text-xs border border-black/30 shadow-xl -rotate-3 transform">
                      Website Design
                    </span>
                  </div>

                  {/* Row 3 */}
                  <div className="flex flex-wrap items-center justify-center gap-2 -mb-1">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#C4D600] text-black font-extrabold text-xs border border-black/30 shadow-xl -rotate-6 transform">
                      Design System
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-[#1A1A20] text-white font-bold text-xs border border-white/20 shadow-xl -rotate-6 transform">
                      Prototype
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-[#1A1A20] text-white font-bold text-xs border border-white/20 shadow-xl -rotate-6 transform">
                      Dashboard
                    </span>
                  </div>

                  {/* Row 4 */}
                  <div className="flex justify-center">
                    <span className="px-4 py-1.5 rounded-full bg-[#C4D600] text-black font-extrabold text-xs border border-black/30 shadow-xl -rotate-1 transform">
                      Wireframe Design
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Sub-Header Badge */}
            <div className="inline-flex items-center gap-2">
              <div className="flex items-center text-[#C4D600]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C4D600] inline-block mr-1" />
                <span className="text-xs font-bold tracking-tighter">❯❯</span>
              </div>
              <span className="text-gray-300 text-sm font-semibold tracking-wide">About Me</span>
            </div>

            {/* Main Headline */}
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight flex flex-wrap items-center gap-x-3">
                <span>Who is</span>
                <span className="text-[#C4D600] relative inline-flex items-center gap-2">
                  {homeConfig.name || "Anass Harboub"}?
                  <span className="text-[#C4D600] text-2xl -mt-4 font-bold select-none">✦</span>
                </span>
              </h2>
            </div>

            {/* Bio Description Paragraphs */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              Hey there, I'm <strong className="text-white">{homeConfig.name}</strong> — a UI/UX & Web Designer passionate about creating intuitive digital experiences that blend aesthetics with functionality.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {homeConfig.aboutExtended || ANASS_BIO.aboutExtended}
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button
                onClick={onHireClick}
                className="inline-flex items-center rounded-full bg-[#1A1A1E] border border-white/15 p-1.5 pl-6 hover:border-[#C4D600]/50 transition-all cursor-pointer group shadow-xl"
              >
                <span className="text-white text-sm font-bold mr-4">Contact Me</span>
                <div className="w-10 h-10 rounded-full bg-[#C4D600] text-black flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
