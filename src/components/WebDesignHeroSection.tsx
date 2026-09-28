"use client";

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';
import heroVideo from '../assets/Person_walking_with_glowing_eyes_20260928181508.mp4';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface WebDesignHeroSectionProps {
  onOpenContact?: () => void;
  onExploreClick?: () => void;
}

export const WebDesignHeroSection: React.FC<WebDesignHeroSectionProps> = ({
  onOpenContact,
  onExploreClick,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP((context) => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Ensure video is strictly paused and ready for frame-by-frame scrub
    video.pause();
    video.currentTime = 0;

    const buildTimeline = () => {
      context.add(() => {
        const videoDuration = video.duration && !isNaN(video.duration) ? video.duration : 4;

        // Subtle initial entrance animation on load for Step 1
        gsap.from('.ux-design-badge', {
          opacity: 0,
          y: -15,
          duration: 0.8,
          ease: 'power3.out',
        });

        gsap.from('.ux-design-title', {
          opacity: 0,
          scale: 0.9,
          filter: 'blur(12px)',
          duration: 1.1,
          ease: 'power3.out',
          delay: 0.1,
        });

        gsap.from('.ux-design-scroll-cue', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.35,
        });

        // Master Timeline mapped directly to scroll distance
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '+=2500',
            pin: true,
            scrub: 1, // Smooth deceleration scrub
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // -------------------------------------------------------------
        // 1. Direct Video Scrubbing (Plays frame-by-frame across scroll)
        // -------------------------------------------------------------
        tl.to(
          video,
          {
            currentTime: videoDuration,
            ease: 'none',
            duration: 10,
          },
          0
        );

        // -------------------------------------------------------------
        // 2. Step 1 to Step 2 (Scroll 0% to 25%):
        // Center "UX DESIGN" fades out and scales back
        // -------------------------------------------------------------
        tl.to(
          '.ux-design-center',
          {
            opacity: 0,
            scale: 0.75,
            filter: 'blur(8px)',
            duration: 2.5,
            ease: 'power2.inOut',
          },
          0.2
        );

        // -------------------------------------------------------------
        // 3. Step 2 (Scroll 25% to 60%):
        // Left side text animates in using a smooth split/stagger reveal
        // -------------------------------------------------------------
        tl.fromTo(
          '.reveal-eyebrow',
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' },
          2.2
        )
        .fromTo(
          '.reveal-heading',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 3.2, ease: 'power3.out' },
          2.6
        )
        .fromTo(
          '.reveal-subtitle',
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 2.8, ease: 'power3.out' },
          3.6
        );

        // -------------------------------------------------------------
        // 4. Step 3 (Scroll 70% to 100%):
        // Reveal single horizontal line of monochrome white tool icons
        // (Figma, Framer, Adobe XD) with clean staggered pop/fade
        // -------------------------------------------------------------
        tl.fromTo(
          '.reveal-icons-title',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
          6.5
        )
        .fromTo(
          '.tool-icon-badge',
          { opacity: 0, y: 30, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.45,
            duration: 1.8,
            ease: 'back.out(1.7)',
          },
          6.8
        )
        .fromTo(
          '.reveal-cta-row',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' },
          8.6
        );

        ScrollTrigger.refresh();
      });
    };

    // Wait for video metadata to calculate precise duration before constructing timeline
    if (video.readyState >= 1) {
      buildTimeline();
    } else {
      video.addEventListener('loadedmetadata', buildTimeline, { once: true });
    }

    return () => {
      video.removeEventListener('loadedmetadata', buildTimeline);
    };
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#0B0C0E] select-none"
    >
      {/* 1. Cinematic Video Background Canvas (Pinned during scroll) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none will-change-transform">
        <video
          ref={videoRef}
          src={heroVideo}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        />

        {/* Cinematic Vignettes for High-Contrast Dark Theme Aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-[#0B0C0E]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E]/90 via-[#0B0C0E]/40 to-transparent" />
        <div className="absolute inset-0 bg-[#0B0C0E]/30" />
      </div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

      {/* ========================================================================= */}
      {/* STEP 1 (Start - Scroll 0%): Centered large hero title "UX DESIGN"         */}
      {/* ========================================================================= */}
      <div className="ux-design-center absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-20 pointer-events-none will-change-transform">
        {/* Intro Badge */}
        <div className="ux-design-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-gray-300">
            Web & Experience Design · 2026
          </span>
        </div>

        {/* Centered Large "UX DESIGN" in accent green #22C55E */}
        <div className="max-w-6xl mx-auto space-y-3">
          <h1 className="ux-design-title text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black font-heading tracking-tighter uppercase leading-none select-none text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] via-[#10B981] to-[#4ade80] drop-shadow-[0_0_50px_rgba(34,197,94,0.45)]">
            UX DESIGN
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto pt-2 leading-relaxed font-normal">
            Bespoke interfaces engineered for clarity, human intuition, and measurable conversion.
          </p>
        </div>

        {/* Minimal Scroll Down Cue */}
        <div className="ux-design-scroll-cue absolute bottom-8 sm:bottom-12 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-[11px] font-mono tracking-widest uppercase text-gray-400/80">
            Scroll to scrub
          </span>
          <div className="w-5 h-9 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1.5 h-2 rounded-full bg-[#22C55E] animate-bounce" />
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 animate-pulse -mt-1" />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* STEP 2 & 3: Left-Aligned Split Layout (Revealed as user scrolls down)     */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-4xl z-20 pointer-events-auto">
        <div className="space-y-6 text-left">
          {/* Eyebrow */}
          <div className="reveal-eyebrow inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-[#22C55E]">
            <Sparkles className="w-4 h-4" />
            <span>Design Methodology & Vision</span>
          </div>

          {/* Step 2 Heading: "What I Design for the Web" */}
          <div className="overflow-hidden py-1">
            <h2 className="reveal-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.08]">
              What I Design for the <span className="text-[#22C55E]">Web</span>
            </h2>
          </div>

          {/* Step 2 Subtitle: "From ideas to polished digital experiences." */}
          <div className="overflow-hidden py-1">
            <p className="reveal-subtitle text-lg sm:text-2xl text-gray-300 font-light leading-relaxed max-w-xl">
              From ideas to polished digital experiences.
            </p>
          </div>

          {/* ===================================================================== */}
          {/* STEP 3 (Scroll 70% to 100%): Single Horizontal Line of Monochrome     */}
          {/* White Icons for Figma, Framer, and Adobe XD                           */}
          {/* ===================================================================== */}
          <div className="pt-6 space-y-4">
            <div className="reveal-icons-title text-xs uppercase font-mono tracking-widest text-gray-400">
              Core Design Stack
            </div>

            {/* Single Horizontal Line of Monochrome White Tool Icons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4">
              {/* Tool 1: Figma */}
              <div
                className="tool-icon-badge group flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-lg hover:bg-white/[0.1] hover:border-white/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                title="Figma — Design Systems & UI Architecture"
              >
                <div className="w-6 h-6 flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-6">
                  {/* Figma Monochrome White SVG */}
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white"
                    viewBox="0 0 38 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Figma</span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-gray-400">Interface & Systems</span>
                </div>
              </div>

              {/* Tool 2: Framer */}
              <div
                className="tool-icon-badge group flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-lg hover:bg-white/[0.1] hover:border-white/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                title="Framer — Interactive Motion & Prototyping"
              >
                <div className="w-6 h-6 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                  {/* Framer Monochrome White SVG */}
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 0H20V8H12L4 0Z" fill="currentColor" />
                    <path d="M4 8H12L20 16H4V8Z" fill="currentColor" />
                    <path d="M12 16V24L4 16H12Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Framer</span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-gray-400">Motion & No-Code</span>
                </div>
              </div>

              {/* Tool 3: Adobe XD */}
              <div
                className="tool-icon-badge group flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-lg hover:bg-white/[0.1] hover:border-white/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                title="Adobe XD — Wireframing & Specs"
              >
                <div className="w-6 h-6 flex items-center justify-center text-white transition-transform duration-300 group-hover:-rotate-6">
                  {/* Adobe XD Monochrome White SVG */}
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2.5"
                      y="2.5"
                      width="19"
                      height="19"
                      rx="3.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M6.2 7.5h2.2l1.7 3.4 1.7-3.4h2.2l-2.8 5.2 3 5.3h-2.3l-1.8-3.6-1.8 3.6H6l2.9-5.4L6.2 7.5z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.4 7.5h1.9c1.6 0 2.9 1.2 2.9 2.9v3.8c0 1.6-1.3 2.9-2.9 2.9h-1.9V7.5zm1.8 8.1c.7 0 1.3-.6 1.3-1.3v-3.8c0-.7-.6-1.3-1.3-1.3h-.5v6.4h.5z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Adobe XD</span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-gray-400">Prototypes & Specs</span>
                </div>
              </div>
            </div>

            {/* Quick Action Navigation CTAs */}
            <div className="reveal-cta-row pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              {onOpenContact && (
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="px-6 py-3 rounded-full bg-[#22C55E] text-black font-extrabold text-sm hover:bg-[#16a34a] hover:scale-105 transition-all shadow-[0_0_25px_rgba(34,197,94,0.35)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Start a Web Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              )}
              {onExploreClick && (
                <button
                  type="button"
                  onClick={onExploreClick}
                  className="px-6 py-3 rounded-full bg-white/10 text-white font-bold text-sm hover:bg-white/20 hover:scale-105 transition-all border border-white/15 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Showcase</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignHeroSection;
