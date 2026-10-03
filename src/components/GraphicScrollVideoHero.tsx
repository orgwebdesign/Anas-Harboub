'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import flowLabVideo from '../assets/images/Flow_Lab_3D_motion_graphics_20261003233729.mp4';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GraphicScrollVideoHeroProps {
  onScrollToProjects?: () => void;
  onOpenContact?: () => void;
}

export const GraphicScrollVideoHero: React.FC<GraphicScrollVideoHeroProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      setIsVideoReady(true);
      try {
        video.pause();
      } catch (e) {
        // ignore
      }
      ScrollTrigger.refresh();
    };

    if (video.readyState >= 1) {
      setIsVideoReady(true);
      try {
        video.pause();
      } catch (e) {
        // ignore
      }
    } else {
      video.addEventListener('loadedmetadata', handleLoaded);
      video.addEventListener('canplay', handleLoaded);
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded);
      video.removeEventListener('canplay', handleLoaded);
    };
  }, []);

  // GSAP ScrollTrigger timeline for silky-smooth video scrubbing
  useEffect(() => {
    const container = containerRef.current;
    const sticky = stickyRef.current;
    const video = videoRef.current;
    if (!container || !sticky || !video) return;

    ScrollTrigger.refresh();
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 350);

    const ctx = gsap.context(() => {
      const duration = video.duration && !isNaN(video.duration) && video.duration > 0 ? video.duration : 6;
      const videoState = { currentTime: 0 };

      // Main GSAP ScrollTrigger Timeline with smooth scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=200%',
          pin: sticky,
          scrub: 0.5, // Ultra smooth scrubbing deceleration
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
          onUpdate: (self) => {
            if (video && video.duration) {
              const targetTime = self.progress * video.duration;
              if (Math.abs(video.currentTime - targetTime) > 0.03) {
                video.currentTime = targetTime;
              }
            }
          },
        },
      });

      // Scrub video time via GSAP tween
      tl.to(
        videoState,
        {
          currentTime: duration,
          ease: 'none',
          duration: 1,
        },
        0
      );

      // Scroll Indicator fades out immediately on first scroll
      if (scrollIndicatorRef.current) {
        tl.to(scrollIndicatorRef.current, { opacity: 0, duration: 0.08 }, 0.02);
      }
    }, container);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [isVideoReady]);

  return (
    <section
      id="graphic-hero"
      ref={containerRef}
      className="relative w-full bg-[#0B0C0E]"
      style={{ height: '300vh' }}
    >
      {/* Sticky viewport pinned by GSAP */}
      <div
        ref={stickyRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#0B0C0E]"
      >
        {/* Background Flow Lab 3D Video Scrubbed by GSAP */}
        <video
          ref={videoRef}
          src={flowLabVideo}
          playsInline
          muted
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none z-0"
        />

        {/* Ambient Dark Gradient Overlay (bg-gradient-to-t) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/40 to-[#0B0C0E]/75 pointer-events-none z-10" />

        {/* Ambient Radial Lime Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-[radial-gradient(ellipse,rgba(196,214,0,0.14)_0%,transparent_70%)] blur-[120px] pointer-events-none z-10" />

        {/* Cinematic Radial Edge Vignette (Keeps center clear & sharp) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(11,12,14,0.6)_100%)] pointer-events-none z-10" />

        {/* Top Navbar Gradient Blend */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#0B0C0E] via-[#0B0C0E]/50 to-transparent pointer-events-none z-10" />

        {/* Bottom Section Gradient Blend */}
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/70 to-transparent pointer-events-none z-10" />

        {/* Minimal Scroll Pill Indicator (Fade out on scroll, No text) */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none transition-opacity duration-300"
        >
          <div className="w-5 h-9 rounded-full border-2 border-white/50 flex items-start justify-center p-1 backdrop-blur-sm shadow-lg">
            <div className="w-1.5 h-2.5 rounded-full bg-[#C4D600] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicScrollVideoHero;
