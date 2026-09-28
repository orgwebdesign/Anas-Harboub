'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Figma, Framer } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Simple flat 2D Adobe XD Icon matching Lucide style
const AdobeXdSimpleIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="4.5" />
    <path d="M7.5 8.5L11.5 15.5" />
    <path d="M11.5 8.5L7.5 15.5" />
    <path d="M16.5 7.5V15.5" />
    <path d="M16.5 11.5C14.8 11.5 13.5 12.5 13.5 13.5C13.5 14.5 14.8 15.5 16.5 15.5" />
  </svg>
);

interface ScrollVideoHeroProps {
  onScrollToProjects?: () => void;
}

const TOTAL_FRAMES = 240;

export const ScrollVideoHero: React.FC<ScrollVideoHeroProps> = ({
  onScrollToProjects,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Sequential Step Refs
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<{ frame: number }>({ frame: 0 });

  // 1. Preload WebP frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/frames/frame_${frameNum}.webp`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) setImagesLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) setImagesLoaded(true);
      };
      images.push(img);
    }

    imagesRef.current = images;
    if (images[0]) {
      images[0].onload = () => {
        resizeCanvas();
        drawFrame(0);
      };
    }
  }, []);

  const lastDrawnFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);

  // 2. High-performance Canvas resize (capped at DPR 2 for mobile fluidity)
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(window.innerWidth * dpr);
    canvas.height = Math.round(window.innerHeight * dpr);
    lastDrawnFrameRef.current = -1; // Force redraw on resize
  };

  // 3. Silky-smooth Canvas frame draw decoupled via requestAnimationFrame
  const drawFrame = (index: number) => {
    if (index === lastDrawnFrameRef.current) return;

    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) return;

      const img = imagesRef.current[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = cw / ch;

      let drawWidth = cw;
      let drawHeight = ch;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawHeight = cw / imgRatio;
        offsetY = (ch - drawHeight) / 2;
      } else {
        drawWidth = ch * imgRatio;
        offsetX = (cw - drawWidth) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      lastDrawnFrameRef.current = index;
    });
  };

  // 4. GSAP ScrollTrigger timeline: Smooth Scrubbing + Sequential Text Reveal + 3D Open
  useEffect(() => {
    const container = containerRef.current;
    const sticky = stickyRef.current;
    if (!container || !sticky) return;

    resizeCanvas();

    const handleResize = () => {
      resizeCanvas();
      drawFrame(Math.round(currentFrameRef.current.frame));
    };

    window.addEventListener('resize', handleResize);

    const ctx = gsap.context(() => {
      const obj = currentFrameRef.current;

      // 1. Initial 3D Rotation Open Entrance Animation for "UX DESIGN"
      if (step1Ref.current) {
        gsap.fromTo(
          step1Ref.current,
          {
            opacity: 0,
            rotateX: 80,
            y: 45,
            scale: 0.9,
          },
          {
            opacity: 0.4, // User asked: "ou tkoun opaciter 40%"
            rotateX: 0,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.15,
          }
        );
      }

      // Initial Hidden States for other steps
      if (step2Ref.current) gsap.set(step2Ref.current, { opacity: 0, x: -25 });
      if (step3Ref.current) gsap.set(step3Ref.current, { opacity: 0, x: -25 });

      // 2. Main ScrollTrigger Scrubbing Timeline (Silky-smooth deceleration)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=450%',
          pin: sticky,
          scrub: 0.4, // Ultra smooth deceleration (salisa mat9alch)
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
          onUpdate: () => {
            const frameIndex = Math.min(
              TOTAL_FRAMES - 1,
              Math.max(0, Math.round(obj.frame))
            );
            drawFrame(frameIndex);
          },
        },
      });

      // Canvas Frame Scrubbing track
      tl.to(obj, { frame: TOTAL_FRAMES - 1, snap: 'frame', ease: 'none', duration: 1 }, 0);

      // Scroll Indicator fade out
      if (scrollIndicatorRef.current) {
        tl.to(scrollIndicatorRef.current, { opacity: 0, duration: 0.06 }, 0.04);
      }

      // STEP 1: UX DESIGN (Fades out smoothly from 0.4 opacity on scroll: 0.10 -> 0.28)
      if (step1Ref.current) {
        tl.to(
          step1Ref.current,
          {
            opacity: 0,
            y: -35,
            rotateX: -25,
            ease: 'power2.inOut',
            duration: 0.14,
          },
          0.12
        );
      }

      // STEP 2: WHAT I DESIGN FOR THE WEB (0.30 -> 0.76)
      if (step2Ref.current) {
        tl.to(step2Ref.current, { opacity: 1, x: 0, ease: 'power2.out', duration: 0.12 }, 0.30);
        tl.to(step2Ref.current, { opacity: 0, x: -20, ease: 'power2.in', duration: 0.08 }, 0.72);
      }

      // STEP 3: 3 SIMPLE ICONS ON THE LEFT (Appears strictly at the end: 0.88 -> 1.0)
      if (step3Ref.current) {
        tl.to(
          step3Ref.current,
          {
            opacity: 1,
            x: 0,
            ease: 'power3.out',
            duration: 0.10,
          },
          0.88
        );
      }
    }, container);

    drawFrame(0);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [imagesLoaded]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full bg-[#0A0908] text-white selection:bg-emerald-500 selection:text-black overflow-hidden"
      style={{ height: '550vh' }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen h-[100svh] min-h-[100svh] w-full overflow-hidden flex items-center justify-center bg-[#0A0908]"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover block pointer-events-none"
          style={{ width: '100vw', height: '100vh' }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/75 pointer-events-none z-10" />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 pointer-events-none">
          {/* STEP 1: UX DESIGN (WHITE, OPACITY 40%, 3D ROTATION OPEN ANIMATION) */}
          <div
            ref={step1Ref}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 pointer-events-auto [perspective:1200px]"
            style={{ opacity: 0.4 }}
          >
            <h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[110px] tracking-tight leading-none text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] select-none">
              UX DESIGN
            </h1>
          </div>

          {/* STEP 2: WHAT I DESIGN FOR THE WEB (LEFT-ALIGNED, MOBILE COMPATIBLE, PORTFOLIO GREEN #C4D600) */}
          <div
            ref={step2Ref}
            className="absolute inset-0 flex flex-col justify-center items-start text-left px-5 sm:px-14 lg:px-24 pointer-events-auto"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[84px] font-black tracking-tight text-white max-w-4xl leading-[1.12] drop-shadow-2xl">
              <span className="block">What I</span>
              <span className="block my-0.5 sm:my-1">
                <span className="font-signature text-[#C4D600] text-5xl sm:text-7xl md:text-8xl lg:text-[112px] font-normal tracking-wide animate-signature-green leading-none">
                  Design
                </span>
              </span>
              <span className="block">for the Web</span>
            </h2>
            <p className="mt-3 sm:mt-6 text-sm sm:text-xl md:text-2xl font-light text-white/85 max-w-2xl leading-relaxed drop-shadow-lg">
              From{' '}
              <span className="font-signature text-[#C4D600] text-xl sm:text-3xl md:text-4xl font-normal animate-signature-green mx-1">
                ideas
              </span>{' '}
              to polished digital experiences.
            </p>
          </div>

          {/* STEP 3: SIMPLE 2D ICONS (FIGMA, FRAMER, ADOBE XD) IN PORTFOLIO GREEN #C4D600 VERTICALLY, MOBILE FRIENDLY */}
          <div
            ref={step3Ref}
            className="absolute inset-0 flex flex-col justify-center items-start text-left px-5 sm:px-14 lg:px-24 pointer-events-auto"
          >
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-7 items-start">
              {/* Figma */}
              <div
                className="cursor-pointer transition-all duration-300 hover:scale-115 hover:translate-x-1.5 p-1"
                title="Figma"
              >
                <Figma className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 text-[#C4D600] drop-shadow-[0_0_16px_rgba(196,214,0,0.55)] transition-transform" />
              </div>

              {/* Framer */}
              <div
                className="cursor-pointer transition-all duration-300 hover:scale-115 hover:translate-x-1.5 p-1"
                title="Framer"
              >
                <Framer className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 text-[#C4D600] drop-shadow-[0_0_16px_rgba(196,214,0,0.55)] transition-transform" />
              </div>

              {/* Adobe XD */}
              <div
                className="cursor-pointer transition-all duration-300 hover:scale-115 hover:translate-x-1.5 p-1"
                title="Adobe XD"
              >
                <AdobeXdSimpleIcon className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 text-[#C4D600] drop-shadow-[0_0_16px_rgba(196,214,0,0.55)] transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 sm:gap-2 text-white/70 text-[10px] sm:text-xs tracking-widest uppercase pointer-events-none animate-pulse"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C4D600]" />
        </div>
      </div>
    </section>
  );
};

export default ScrollVideoHero;
