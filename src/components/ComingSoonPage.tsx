import React from 'react';
import { motion } from 'motion/react';
import { AnassLogo } from './AnassLogo';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Terminal,
  Database,
  Zap,
  Film,
  Video,
  Layers,
  Box,
  Play,
  Clock
} from 'lucide-react';
import {
  SiWordpress,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiCinema4D,
  SiBlender,
  SiFigma
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

interface ComingSoonPageProps {
  type: 'web-development' | 'motion-graphics';
  onOpenContact: () => void;
  onNavigateTab: (tab: 'all' | 'web-design' | 'designer') => void;
}

interface FloatingIcon {
  id: string;
  icon: React.ReactNode;
  label: string;
  positionClass: string;
  duration: number;
  delay: number;
}

export const ComingSoonPage: React.FC<ComingSoonPageProps> = ({
  type,
  onOpenContact,
  onNavigateTab,
}) => {
  const isWebDev = type === 'web-development';

  // Scattered background floating icons for Web Development
  const webDevIcons: FloatingIcon[] = [
    {
      id: 'wordpress',
      label: 'WordPress',
      icon: <SiWordpress className="w-7 h-7 sm:w-8 sm:h-8 text-[#21759B]" />,
      positionClass: 'top-16 sm:top-20 left-[6%] sm:left-[10%]',
      duration: 6.2,
      delay: 0,
    },
    {
      id: 'vscode',
      label: 'VS Code',
      icon: <TbBrandVscode className="w-7 h-7 sm:w-8 sm:h-8 text-[#007ACC]" />,
      positionClass: 'top-20 sm:top-24 right-[6%] sm:right-[12%]',
      duration: 5.8,
      delay: 0.6,
    },
    {
      id: 'react',
      label: 'React',
      icon: <SiReact className="w-7 h-7 sm:w-8 sm:h-8 text-[#61DAFB]" />,
      positionClass: 'top-[42%] left-[4%] sm:left-[8%]',
      duration: 6.8,
      delay: 1.2,
    },
    {
      id: 'typescript',
      label: 'TypeScript',
      icon: <SiTypescript className="w-7 h-7 sm:w-8 sm:h-8 text-[#3178C6]" />,
      positionClass: 'bottom-28 sm:bottom-32 left-[8%] sm:left-[14%]',
      duration: 6.0,
      delay: 0.8,
    },
    {
      id: 'nextjs',
      label: 'Next.js',
      icon: <SiNextdotjs className="w-7 h-7 sm:w-8 sm:h-8 text-white" />,
      positionClass: 'top-[40%] right-[5%] sm:right-[9%]',
      duration: 7.2,
      delay: 1.6,
    },
    {
      id: 'tailwind',
      label: 'Tailwind CSS',
      icon: <SiTailwindcss className="w-7 h-7 sm:w-8 sm:h-8 text-[#38BDF8]" />,
      positionClass: 'bottom-24 sm:bottom-28 right-[8%] sm:right-[14%]',
      duration: 6.4,
      delay: 0.4,
    },
    {
      id: 'nodejs',
      label: 'Node.js',
      icon: <SiNodedotjs className="w-6 h-6 sm:w-7 sm:h-7 text-[#5FA04E]" />,
      positionClass: 'top-14 left-[46%] -translate-x-1/2 hidden md:block',
      duration: 5.5,
      delay: 1.8,
    },
    {
      id: 'git',
      label: 'Git',
      icon: <SiGit className="w-6 h-6 sm:w-7 sm:h-7 text-[#F05032]" />,
      positionClass: 'bottom-16 left-[30%] hidden sm:block',
      duration: 6.6,
      delay: 1.0,
    },
    {
      id: 'terminal',
      label: 'Terminal',
      icon: <Terminal className="w-6 h-6 sm:w-7 sm:h-7 text-[#C4D600]" />,
      positionClass: 'bottom-14 right-[30%] hidden sm:block',
      duration: 7.0,
      delay: 2.1,
    },
    {
      id: 'database',
      label: 'Database',
      icon: <Database className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300" />,
      positionClass: 'top-[26%] left-[22%] hidden lg:block',
      duration: 6.1,
      delay: 1.4,
    },
    {
      id: 'zap',
      label: 'Performance',
      icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-[#C4D600]" />,
      positionClass: 'top-[28%] right-[22%] hidden lg:block',
      duration: 5.7,
      delay: 0.9,
    },
  ];

  // Scattered background floating icons for Motion Graphics
  const motionIcons: FloatingIcon[] = [
    {
      id: 'ae',
      label: 'After Effects',
      icon: (
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#9999FF]/15 border border-[#9999FF]/40 text-[#9999FF] font-black text-xs sm:text-sm flex items-center justify-center font-mono">
          Ae
        </div>
      ),
      positionClass: 'top-16 sm:top-20 left-[6%] sm:left-[10%]',
      duration: 6.0,
      delay: 0.2,
    },
    {
      id: 'pr',
      label: 'Premiere Pro',
      icon: (
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#EA77FF]/15 border border-[#EA77FF]/40 text-[#EA77FF] font-black text-xs sm:text-sm flex items-center justify-center font-mono">
          Pr
        </div>
      ),
      positionClass: 'top-20 sm:top-24 right-[6%] sm:right-[12%]',
      duration: 6.5,
      delay: 0.8,
    },
    {
      id: 'c4d',
      label: 'Cinema 4D',
      icon: <SiCinema4D className="w-7 h-7 sm:w-8 sm:h-8 text-[#0066FF]" />,
      positionClass: 'top-[42%] left-[4%] sm:left-[8%]',
      duration: 6.9,
      delay: 1.4,
    },
    {
      id: 'blender',
      label: 'Blender 3D',
      icon: <SiBlender className="w-7 h-7 sm:w-8 sm:h-8 text-[#E87D0D]" />,
      positionClass: 'bottom-28 sm:bottom-32 left-[8%] sm:left-[14%]',
      duration: 5.9,
      delay: 0.5,
    },
    {
      id: 'figma',
      label: 'Figma',
      icon: <SiFigma className="w-7 h-7 sm:w-8 sm:h-8 text-[#A259FF]" />,
      positionClass: 'top-[40%] right-[5%] sm:right-[9%]',
      duration: 7.1,
      delay: 1.7,
    },
    {
      id: 'box3d',
      label: '3D Objects',
      icon: <Box className="w-7 h-7 sm:w-8 sm:h-8 text-[#C4D600]" />,
      positionClass: 'bottom-24 sm:bottom-28 right-[8%] sm:right-[14%]',
      duration: 6.3,
      delay: 0.3,
    },
    {
      id: 'film',
      label: 'Cinematics',
      icon: <Film className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
      positionClass: 'top-14 left-[46%] -translate-x-1/2 hidden md:block',
      duration: 5.6,
      delay: 1.9,
    },
    {
      id: 'video',
      label: 'Camera Motion',
      icon: <Video className="w-6 h-6 sm:w-7 sm:h-7 text-[#00D26A]" />,
      positionClass: 'bottom-16 left-[30%] hidden sm:block',
      duration: 6.7,
      delay: 1.1,
    },
    {
      id: 'layers',
      label: 'Compositing',
      icon: <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300" />,
      positionClass: 'bottom-14 right-[30%] hidden sm:block',
      duration: 7.3,
      delay: 2.2,
    },
    {
      id: 'play',
      label: 'Showreel',
      icon: <Play className="w-6 h-6 sm:w-7 sm:h-7 text-[#C4D600]" />,
      positionClass: 'top-[28%] left-[22%] hidden lg:block',
      duration: 6.2,
      delay: 1.3,
    },
    {
      id: 'sparkles',
      label: 'Visual FX',
      icon: <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#FFD700]" />,
      positionClass: 'top-[30%] right-[22%] hidden lg:block',
      duration: 5.8,
      delay: 0.7,
    },
  ];

  const floatingIcons = isWebDev ? webDevIcons : motionIcons;

  return (
    <div className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0B0C0E] text-white px-4 py-28 sm:py-36">
      {/* ─── Ambient Glows in Portfolio Accent #C4D600 ──────────────────────── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[500px] bg-[radial-gradient(ellipse,rgba(196,214,0,0.13)_0%,transparent_70%)] blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[radial-gradient(ellipse,rgba(196,214,0,0.06)_0%,transparent_70%)] blur-[120px] pointer-events-none -z-10" />

      {/* Cyber Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#C4D600 1px, transparent 1px), linear-gradient(90deg, #C4D600 1px, transparent 1px)`,
          backgroundSize: '55px 55px',
        }}
      />

      {/* ─── SCATTERED BACKGROUND FLOATING ICONS (ANIMATED OPACITY & FLOAT) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {floatingIcons.map((item) => (
          <motion.div
            key={item.id}
            className={`absolute select-none ${item.positionClass}`}
            initial={{ opacity: 0.15, y: 0 }}
            animate={{
              opacity: [0.18, 0.7, 0.22],
              y: [-12, 14, -12],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="relative p-3.5 sm:p-4 rounded-2xl bg-[#141519]/70 border border-white/10 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" />
              {item.icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ─── CENTER CONTENT: LOGO + COMING SOON + ACTIONS ───────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-3xl w-full mx-auto text-center z-10 flex flex-col items-center"
      >
        {/* Anass Brand Logo with Radiant Lime Aura */}
        <div className="relative mb-6 group cursor-pointer">
          <div className="absolute -inset-6 rounded-full bg-[#C4D600]/20 blur-2xl opacity-80 group-hover:opacity-100 group-hover:scale-115 transition-all duration-700 animate-pulse pointer-events-none" />
          <AnassLogo height={80} className="relative z-10 transition-transform duration-500 group-hover:scale-105" />
        </div>

        {/* Coming Soon Pill with Lime Ping */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#C4D600]/10 border border-[#C4D600]/30 text-[#C4D600] font-mono text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_25px_rgba(196,214,0,0.25)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C4D600] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C4D600]" />
          </span>
          <Sparkles className="w-3.5 h-3.5" />
          <span>Coming Soon</span>
        </div>

        {/* Dynamic Category Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.08] mb-6">
          {isWebDev ? (
            <>
              Web{' '}
              <span className="text-[#C4D600] drop-shadow-[0_0_35px_rgba(196,214,0,0.5)]">
                Development
              </span>
            </>
          ) : (
            <>
              Motion{' '}
              <span className="text-[#C4D600] drop-shadow-[0_0_35px_rgba(196,214,0,0.5)]">
                Graphics
              </span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/50 font-sans leading-relaxed max-w-xl mx-auto mb-10">
          {isWebDev
            ? 'Bespoke web architectures, WordPress systems, and high-performance React platforms are currently being refined for public release.'
            : 'Cinematic 3D motion design, kinetic brand identities, and commercial showreels are currently in final rendering.'}
        </p>

        {/* CTAs with Liquid Water Fill Effect */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <button
            type="button"
            onClick={onOpenContact}
            className="btn-liquid-fill w-full sm:w-auto px-9 py-4 rounded-full font-extrabold text-sm sm:text-base inline-flex items-center justify-center gap-3 cursor-pointer group shadow-xl"
          >
            <span>{isWebDev ? 'Inquire for Web Dev Project' : 'Inquire for Motion Project'}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button
            type="button"
            onClick={() => onNavigateTab('designer')}
            className="btn-liquid-fill w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 cursor-pointer group shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>View Graphics Design</span>
          </button>
        </div>

        {/* Launch Milestone info */}
        <div className="mt-12 inline-flex items-center gap-2 text-xs text-white/35 font-mono">
          <Clock className="w-3.5 h-3.5 text-[#C4D600]" />
          <span>Sprint 2026/2027 // Active Build Phase</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoonPage;
