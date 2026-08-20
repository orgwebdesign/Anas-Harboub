import React from 'react';
import { ANASS_BIO } from '../data/portfolioData';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUpRight, CheckCircle2, Sparkles, Award, Layers, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onHireClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onHireClick }) => {
  const { homeConfig } = usePortfolio();
  const portraitUrl = homeConfig.portrait || ANASS_BIO.portrait;

  const statsList = [
    { label: "Completed Projects", value: homeConfig.completedProjects || "50+" },
    { label: "Design System Tokens", value: "1.2k+" },
    { label: "Client Satisfaction", value: "99%" },
    { label: "Years Experience", value: homeConfig.yearsExperience || "6+" }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#0D0E12]/80 border-y border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait Card with Orange Block backing */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[380px]">
              {/* Backing Orange Frame Shape */}
              <div className="absolute -inset-4 bg-[#FF8A00] rounded-[32px] rotate-3 opacity-90 blur-sm" />
              
              {/* Inner Dark Card */}
              <div className="relative rounded-[28px] bg-[#141519] border border-white/10 overflow-hidden p-3 shadow-2xl">
                <img
                  src={portraitUrl}
                  alt={`${homeConfig.name} UI UX Web Designer`}
                  className="w-full h-[400px] sm:h-[450px] object-cover object-top rounded-[22px]"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Tags */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-black/80 text-white font-bold text-xs border border-white/15 backdrop-blur-md">
                    UI/UX Designer
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-[#FF8A00] text-black font-bold text-xs shadow-lg">
                    Web Designer
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-black/80 text-white font-bold text-xs border border-white/15 backdrop-blur-md">
                    Infographiste
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
                {homeConfig.aboutHeadline || `Who is ${homeConfig.name}?`}
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              {homeConfig.aboutDescription || ANASS_BIO.aboutDescription}
            </p>

            <p className="text-gray-400 text-base leading-relaxed">
              {homeConfig.aboutExtended || ANASS_BIO.aboutExtended}
            </p>

            {/* Core Competency Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#141519] border border-white/5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FF8A00]/10 text-[#FF8A00] flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">Pixel Precision</h4>
                  <p className="text-xs text-gray-400 mt-1">Design systems & component architecture in Figma.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#141519] border border-white/5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FF8A00]/10 text-[#FF8A00] flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">Vibe No Code</h4>
                  <p className="text-xs text-gray-400 mt-1">AI-assisted rapid prototyping in Framer & Webflow.</p>
                </div>
              </div>
            </div>

            {/* Stats Counter Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {statsList.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#FF8A00] block">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-400 block mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Hire Me Button */}
            <div className="pt-2">
              <button
                onClick={onHireClick}
                className="px-8 py-3.5 rounded-full bg-[#FF8A00] text-black font-extrabold text-sm hover:bg-[#ffa026] hover:shadow-[0_0_20px_rgba(255,138,0,0.4)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Let's Build Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
