import React, { useState } from 'react';
import { Project } from '../types';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  ArrowUpRight, 
  Film, 
  Play, 
  Video, 
  Sparkles, 
  Layers, 
  Sliders, 
  Eye,
  Tv,
  Clapperboard
} from 'lucide-react';
import { motion } from 'motion/react';

interface MotionGraphicsPageProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

const MOTION_CAPABILITIES = [
  { name: "Kinetic Typography", desc: "Dynamic text animations, rhythmic title cards & typography reels", Icon: Sparkles },
  { name: "UI & Product Motion", desc: "Micro-interactions, 3D device mockups & smooth feature walkthroughs", Icon: Layers },
  { name: "Promotional Video Ads", desc: "High-energy social media ads, TikTok/Reels motion & ad creatives", Icon: Film },
  { name: "Logo & Brand Reveal", desc: "Expressive animated logo stings, openers & brand visual signatures", Icon: Tv },
  { name: "VFX & Compositing", desc: "Visual effects, color grading, tracking & 2D/3D compositing", Icon: Clapperboard },
  { name: "Lottie & Web Animation", desc: "Lightweight JSON/SVG animations ready for native web and mobile apps", Icon: Sliders }
];

export const MotionGraphicsPage: React.FC<MotionGraphicsPageProps> = ({ onSelectProject, onOpenContact }) => {
  const { projects, pagesConfig } = usePortfolio();
  const config = pagesConfig.motionGraphics;
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

  const pillars = [
    {
      step: "01",
      title: config.feature1Title || "Kinetic Typography & Branding",
      desc: config.feature1Desc || "Engaging title sequences, brand reveal animations, and social video creative."
    },
    {
      step: "02",
      title: config.feature2Title || "Interactive UI Animations",
      desc: config.feature2Desc || "Fluid micro-animations, GSAP transitions, and interactive physics that elevate digital interfaces."
    },
    {
      step: "03",
      title: config.feature3Title || "Video Production & VFX",
      desc: config.feature3Desc || "After Effects, Premiere Pro, and Blender visual effects tailored for high-converting ads and showreels."
    }
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C4D600]/10 border border-[#C4D600]/30 text-[#C4D600] text-xs font-mono font-bold uppercase tracking-wider">
            <Film className="w-3.5 h-3.5" />
            <span>{config.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
            {config.title}
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl font-medium">
            {config.description}
          </p>
        </div>

        {/* Motion Showcase Stage / Reel Card */}
        <div className="p-6 sm:p-8 rounded-[32px] bg-[#141519] border border-white/10 shadow-2xl relative overflow-hidden space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C4D600] font-bold block">
                Visual Reel & Motion Lab
              </span>
              <h3 className="text-xl font-bold text-white font-heading mt-1">
                High-Impact Kinetic Sequences & 3D Transitions
              </h3>
            </div>
            <button
              onClick={() => setIsPlayingDemo(!isPlayingDemo)}
              className="btn-liquid-fill px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isPlayingDemo ? "Pause Reel" : "Play Reel"}</span>
            </button>
          </div>

          {/* Video / Animation Preview Stage */}
          <div className="aspect-[16/9] w-full rounded-2xl bg-black border border-white/10 relative overflow-hidden flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none z-10" />
            
            {/* Animated Canvas / Dynamic Shapes */}
            <motion.div
              animate={{ 
                rotate: isPlayingDemo ? [0, 180, 360] : 0,
                scale: isPlayingDemo ? [1, 1.1, 1] : 1
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-dashed border-[#C4D600]/40 flex items-center justify-center opacity-60 pointer-events-none"
            >
              <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-[radial-gradient(circle,#C4D600_0%,transparent_70%)] opacity-30 blur-xl" />
            </motion.div>

            <div className="absolute z-20 text-center space-y-3 px-4">
              <span className="text-[#C4D600] text-3xl sm:text-5xl font-extrabold font-heading block drop-shadow-[0_0_20px_rgba(196,214,0,0.6)]">
                MOTION IN HARMONY
              </span>
              <p className="text-gray-300 text-xs sm:text-sm max-w-md mx-auto">
                After Effects · Premiere Pro · Cinema 4D · Lottie · WebGL Interactions
              </p>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div>
          <h2 className="text-2xl font-bold text-white font-heading mb-8">
            Motion Graphics & Video Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOTION_CAPABILITIES.map((cap) => {
              const CapIcon = cap.Icon;
              return (
                <div
                  key={cap.name}
                  className="p-6 rounded-2xl bg-[#141519] border border-white/10 hover:border-[#C4D600]/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C4D600]/10 border border-[#C4D600]/20 flex items-center justify-center text-[#C4D600] mb-4 group-hover:bg-[#C4D600] group-hover:text-black transition-all duration-300">
                    <CapIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#C4D600] transition-colors">
                    {cap.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Motion Production Pillars */}
        <div>
          <h2 className="text-2xl font-bold text-white font-heading mb-8">
            Creative Direction & Animation Pipeline
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-3">
                <span className="font-mono font-bold text-2xl text-[#C4D600]">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold text-white font-heading">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-10 rounded-[32px] bg-gradient-to-r from-[#1E1F26] to-[#141519] border border-white/10 text-center space-y-4">
          <h2 className="text-3xl font-extrabold text-white font-heading">
            Need Motion That Captivates?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            From animated brand reveals to product showreels and kinetic video ads, let's create motion that stands out.
          </p>
          <button
            onClick={onOpenContact}
            className="btn-liquid-fill px-8 py-3.5 rounded-full font-extrabold text-sm cursor-pointer inline-flex items-center gap-2 shadow-xl group"
          >
            <span>Start Your Motion Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </button>
        </div>

      </div>
    </div>
  );
};
