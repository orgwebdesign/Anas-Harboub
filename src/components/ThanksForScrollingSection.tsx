import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThumbsUp, Eye, MessageSquare, Sparkles } from 'lucide-react';
import { SiFigma, SiFramer } from 'react-icons/si';

interface ThanksForScrollingSectionProps {
  onOpenContact?: () => void;
}

export const ThanksForScrollingSection: React.FC<ThanksForScrollingSectionProps> = ({ onOpenContact }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(12418);
  const [showHearts, setShowHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleLikeClick = (e: React.MouseEvent) => {
    if (!liked) {
      setLiked(true);
      setLikesCount((prev) => prev + 1);

      // Create burst particle effect
      const rect = e.currentTarget.getBoundingClientRect();
      const newHearts = Array.from({ length: 6 }).map((_, i) => ({
        id: Date.now() + i,
        x: (Math.random() - 0.5) * 80,
        y: -30 - Math.random() * 60,
      }));
      setShowHearts(newHearts);
      setTimeout(() => setShowHearts([]), 1200);
    } else {
      setLiked(false);
      setLikesCount((prev) => prev - 1);
    }
  };

  const formatCount = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#08080A] overflow-hidden border-t border-white/5 select-none">
      {/* Background Radial Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C4D600]/4 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* TOP HANDWRITTEN NOTE: "Let's Work Together" WITH CURVED ARROW */}
        <div className="flex flex-col items-center mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3 translate-x-[-40px] sm:translate-x-[-120px]">
            <div className="text-left font-ananda text-[#C4D600] text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-[0_0_15px_rgba(196,214,0,0.6)] rotate-[-6deg] leading-tight">
              <div>Let's Work</div>
              <div>Together</div>
            </div>

            {/* Hand-drawn neon lime curved arrow */}
            <svg
              viewBox="0 0 65 50"
              className="w-12 h-10 sm:w-16 sm:h-12 text-[#C4D600] drop-shadow-[0_0_10px_rgba(196,214,0,0.5)] overflow-visible"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12,8 C14,28 28,42 50,42" />
              <path d="M40,36 L52,42 L42,48" />
            </svg>
          </div>
        </div>

        {/* BOUNDING BOX SELECTION FRAME (FIGMA / CANVAS STYLE) */}
        <div className="relative inline-block w-full max-w-[850px] mx-auto my-2">
          
          {/* FLOATING 3D ICON 1: FIGMA BADGE (Top Right) */}
          <motion.div
            initial={{ y: 0, rotate: 12 }}
            animate={{ y: [-4, 6, -4], rotate: [12, 8, 12] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-10 sm:-top-14 right-4 sm:right-12 z-20 pointer-events-none"
          >
            <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-[#18191E]/90 border border-white/20 shadow-[0_20px_45px_rgba(0,0,0,0.9)] backdrop-blur-md flex items-center justify-center p-3 transform transition-transform hover:scale-110">
              <span className="text-[#F24E1E] drop-shadow-[0_0_12px_rgba(242,78,30,0.6)]">
                <SiFigma size={34} />
              </span>
            </div>
          </motion.div>

          {/* FLOATING 3D ICON 2: ADOBE XD BADGE (Bottom Left) */}
          <motion.div
            initial={{ y: 0, rotate: -14 }}
            animate={{ y: [6, -4, 6], rotate: [-14, -10, -14] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute -bottom-8 sm:-bottom-12 left-2 sm:left-10 z-20 pointer-events-none"
          >
            <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-[#360027]/90 border border-[#FF61F6]/50 shadow-[0_20px_45px_rgba(255,97,246,0.3)] backdrop-blur-md flex items-center justify-center p-2.5">
              <div className="font-heading font-black text-2xl sm:text-3xl text-[#FF61F6] tracking-tighter drop-shadow-[0_0_12px_rgba(255,97,246,0.8)]">
                Xd
              </div>
            </div>
          </motion.div>

          {/* FLOATING 3D ICON 3: FRAMER BADGE (Mid/Right Side) */}
          <motion.div
            initial={{ y: 0, rotate: -8 }}
            animate={{ y: [-5, 5, -5], rotate: [-8, -4, -8] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            className="absolute -top-6 sm:-top-8 left-6 sm:left-16 z-20 pointer-events-none"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#0055FF]/15 border border-[#0055FF]/50 shadow-[0_15px_35px_rgba(0,85,255,0.35)] backdrop-blur-md flex items-center justify-center p-3">
              <span className="text-[#0055FF] drop-shadow-[0_0_12px_rgba(0,85,255,0.7)]">
                <SiFramer size={30} />
              </span>
            </div>
          </motion.div>

          {/* The Dashed Selection Box Container */}
          <div className="relative border border-dashed border-white/35 sm:border-white/45 rounded-xs p-6 sm:p-12 md:p-16 bg-white/[0.015] backdrop-blur-[2px]">
            
            {/* 8 Lime Green Resize Handles (#C4D600) */}
            {/* 4 Corners */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#C4D600] border border-black/80 shadow-md" />
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#C4D600] border border-black/80 shadow-md" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#C4D600] border border-black/80 shadow-md" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#C4D600] border border-black/80 shadow-md" />

            {/* 4 Midpoints */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#C4D600] border border-black/80 shadow-md" />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#C4D600] border border-black/80 shadow-md" />
            <div className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-3 h-3 bg-[#C4D600] border border-black/80 shadow-md" />
            <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-[#C4D600] border border-black/80 shadow-md" />

            {/* Bottom-right diagonal resize crosshair cursor */}
            <div className="absolute -bottom-6 -right-6 pointer-events-none opacity-80">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 5L5 19" strokeLinecap="round" />
                <path d="M19 11V5H13" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 13V19H11" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Large Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white font-heading tracking-tight drop-shadow-xl">
              Thank's For Scrolling!
            </h2>
          </div>
        </div>

        {/* SUBTITLE */}
        <p className="mt-8 sm:mt-10 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Don't forget that{' '}
          <span className="text-[#C4D600] font-extrabold tracking-wide uppercase">
            LIKE BUTTON
          </span>{' '}
          below if you like my portfolio! <br className="hidden sm:inline" />
          I really appreciate it!
        </p>

        {/* BEHANCE-STYLE INTERACTIVE BLUE LIKE BUTTON & STATS */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center">
          
          {/* Circular Blue Like Button with Particle Burst */}
          <div className="relative">
            <button
              type="button"
              onClick={handleLikeClick}
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-2xl ${
                liked
                  ? 'bg-[#0057FF] scale-110 shadow-[0_0_40px_rgba(0,87,255,0.85)] ring-4 ring-[#0057FF]/40'
                  : 'bg-[#0057FF] hover:bg-[#0047D4] hover:scale-105 shadow-[0_0_25px_rgba(0,87,255,0.5)]'
              }`}
              title="Click to appreciate!"
              aria-label="Like this portfolio"
            >
              <ThumbsUp
                className={`w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-300 ${
                  liked ? 'fill-current scale-110' : 'group-hover:scale-110'
                }`}
              />
            </button>

            {/* Floating Particles on Click */}
            <AnimatePresence>
              {showHearts.map((heart) => (
                <motion.div
                  key={heart.id}
                  initial={{ opacity: 1, scale: 0.5, x: 0, y: 0 }}
                  animate={{ opacity: 0, scale: 1.4, x: heart.x, y: heart.y }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <ThumbsUp className="w-5 h-5 text-[#0057FF] fill-current drop-shadow-[0_0_10px_rgba(0,87,255,0.8)]" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Project Title */}
          <h3 className="text-white font-extrabold text-lg sm:text-2xl font-heading mt-6 tracking-tight">
            UX/UI Design Portfolio 2026
          </h3>

          {/* Stats Row: Likes, Views, Comments */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 mt-3 text-xs sm:text-sm font-mono text-gray-400">
            {/* Likes */}
            <div className={`flex items-center gap-1.5 transition-colors ${liked ? 'text-[#0057FF] font-bold' : ''}`}>
              <ThumbsUp className={`w-4 h-4 ${liked ? 'fill-current text-[#0057FF]' : 'text-gray-400'}`} />
              <span>{formatCount(likesCount)}</span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-gray-400" />
              <span>456.4K</span>
            </div>

            {/* Comments */}
            <div className="flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-gray-400" />
              <span>549</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ThanksForScrollingSection;
