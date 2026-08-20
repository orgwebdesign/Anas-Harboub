import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import userPortrait from '../assets/images/regenerated_image_1786287595697.png';

export const RotatingHeroSection: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on('scroll', onLenisScroll);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(500, 33);

    const ctx = gsap.context((self) => {
      const stickySection = rootRef.current?.querySelector('.sticky');
      const handContainer = rootRef.current?.querySelector('.hand-container');
      const hand = handContainer?.querySelector('.hand');
      const handImage = hand?.querySelector('img');
      const intro = rootRef.current?.querySelector('.intro');
      const h1Element = intro?.querySelector('h1');
      const introCopy = intro?.querySelectorAll('p');
      const websiteContent = rootRef.current?.querySelector('.website-content');

      const pinnedHeight = window.innerHeight * 4.5;
      let h1Span = h1Element?.querySelector('span');
      let currentCycle = 0;
      let imageRevealed = false;

      const introHeaders = [
        '<span class="text-white/60 font-normal mr-2">time to</span><span class="text-[#FF8A00] font-extrabold">meet Anass</span>',
        '<span class="text-white/60 font-normal mr-2">time to</span><span class="text-[#FF8A00] font-extrabold">design experiences</span>',
        '<span class="text-white/60 font-normal mr-2">time to</span><span class="text-[#FF8A00] font-extrabold">build for the web</span>',
        '<span class="text-white/60 font-normal mr-2">time to</span><span class="text-[#FF8A00] font-extrabold">shape the brand</span>',
        '<span class="text-white/60 font-normal mr-2">time to</span><span class="text-[#FF8A00] font-extrabold">make it move</span>',
        '<span class="text-white/60 font-normal mr-2">time to</span><span class="text-[#FF8A00] font-extrabold">work together</span>',
      ];

      function updateHeaderText() {
        if (h1Element) {
          h1Element.innerHTML = introHeaders[Math.min(currentCycle, introHeaders.length - 1)];
          h1Span = h1Element.querySelector('span');
        }
      }

      let stTrigger: ScrollTrigger | null = null;

      const onProgress = self.add('onProgress', () => {
        if (!stTrigger) return;
        const progress = stTrigger.progress; // 0 -> 1

        // 1. Rotation (0 -> 5/8)
        const rotationProgress = Math.min((progress * 8) / 5, 1);
        const totalRotation = rotationProgress * (360 * 6) - 90;
        const rotationInCycle = ((totalRotation + 90) % 360) - 90;
        if (handContainer) {
          gsap.set(handContainer, { rotationZ: rotationInCycle });
        }

        // 2. Cycle detection / headline swap
        const newCycle = Math.floor((totalRotation + 90) / 360);
        if (newCycle !== currentCycle && newCycle >= 0 && newCycle < 6) {
          currentCycle = newCycle;
          updateHeaderText();

          // Reveal image and copy during cycle 0 and onwards
          if (newCycle >= 0 && !imageRevealed) {
            if (handImage) gsap.to(handImage, { opacity: 1, duration: 0.3 });
            if (introCopy && introCopy.length) {
              gsap.to(introCopy, { x: 0, opacity: 1, duration: 0.5, stagger: 0.1 });
            }
            imageRevealed = true;
          }
        }

        // 3. Rod stretch + headline fade (5/8 -> 6/8)
        if (progress <= 6 / 8) {
          const animationProgress = Math.max(0, (progress - 5 / 8) / (1 / 8));
          const newHeight = gsap.utils.interpolate(52.75, 100, animationProgress);
          if (hand) gsap.set(hand, { height: newHeight + '%' });
          if (intro) gsap.set(intro, { opacity: 1 });

          const fadeVal = gsap.utils.interpolate(1, 0, animationProgress);
          if (h1Element) gsap.set(h1Element, { opacity: fadeVal });
          if (h1Span) gsap.set(h1Span, { opacity: fadeVal });
        } else {
          if (intro) gsap.set(intro, { opacity: 0 });
        }

        // 4. Rod scale-up (6/8 -> 7/8)
        if (progress <= 7 / 8) {
          const scaleProgress = Math.max(0, (progress - 6 / 8) / (1 / 8));
          const newScale = gsap.utils.interpolate(1, 20, scaleProgress);
          if (hand) gsap.set(hand, { scale: newScale });
        }

        // 5. Rod fade-out (7/8 -> 7.5/8)
        if (progress <= 7.5 / 8) {
          const opacityProgress = Math.max(0, (progress - 7 / 8) / (0.5 / 8));
          const opacityVal = gsap.utils.interpolate(1, 0, opacityProgress);
          if (hand) gsap.set(hand, { opacity: opacityVal });
        }

        // 6. Wordmark reveal (7.5/8 -> 1)
        if (progress > 7.5 / 8) {
          const revealProgress = Math.min(1, (progress - 7.5 / 8) / (0.5 / 8));
          if (websiteContent) {
            gsap.set(websiteContent, { opacity: gsap.utils.interpolate(0, 1, revealProgress) });
          }
        } else {
          if (websiteContent) gsap.set(websiteContent, { opacity: 0 });
        }
      });

      stTrigger = ScrollTrigger.create({
        trigger: stickySection,
        start: 'top top',
        end: `+=${pinnedHeight}`,
        pin: true,
        pinSpacing: true,
        onUpdate: () => onProgress(),
      });

      updateHeaderText();
    }, rootRef);

    return () => {
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.off('scroll', onLenisScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={rootRef} className="relative w-full text-white selection:bg-[#FF8A00] selection:text-black">
      {/* Sticky Pinned Hero Section */}
      <section className="sticky relative w-full h-screen bg-[#0B0C0E] overflow-hidden flex items-center justify-center">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

        {/* Hand Container (Clock Hand) */}
        <div
          className="hand-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] flex justify-center items-start z-10 pointer-events-none"
          style={{ transformOrigin: 'center center', transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
          <div
            className="hand absolute w-[6%] h-[52.75%] bg-[#E5E7EB] rounded-full overflow-hidden opacity-100 shadow-[0_0_25px_rgba(255,138,0,0.3)] border border-white/20"
            style={{ willChange: 'transform' }}
          >
            <img
              src={userPortrait}
              alt="Anass Harboub Portrait"
              className="w-full h-full object-cover opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Intro Section - Headline & Copy */}
        <div className="intro absolute top-[calc(50%-20px)] left-[8%] sm:left-[15%] md:left-[22%] w-[84%] sm:w-[50%] md:w-[28%] z-20 pointer-events-none space-y-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            <span className="text-white/60 font-normal mr-2">time to</span>
            <span className="text-[#FF8A00]">meet Anass</span>
          </h1>
          <div className="space-y-3">
            <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed opacity-100 transition-all duration-300">
              Crafting bespoke digital interfaces that bridge functional performance with bold aesthetic execution. Every detail is engineered around user engagement.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed opacity-100 transition-all duration-300">
              From high-converting web applications to intuitive brand platforms, I transform concepts into responsive web experiences.
            </p>
          </div>
        </div>

        {/* Revealed Brand Wordmark */}
        <div className="website-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0 z-30 pointer-events-none w-full px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF8A00]/10 border border-[#FF8A00]/30 text-[#FF8A00] text-xs font-mono tracking-widest uppercase mb-4">
            Interactive Showcase
          </span>
          <h1 className="text-[11vw] sm:text-[10vw] font-black uppercase tracking-tight text-[#FF8A00] font-heading leading-none drop-shadow-[0_10px_40px_rgba(255,138,0,0.4)]">
            ANASS HARBOUB
          </h1>
          <p className="text-xs sm:text-base font-mono uppercase tracking-[0.25em] text-gray-400 mt-4">
            Creative Web Designer &amp; Digital Developer
          </p>
        </div>
      </section>

      {/* Follow-up Section */}
      <section id="about" className="relative w-full min-h-[60vh] bg-[#141519] border-t border-white/10 py-20 px-6 flex flex-col items-center justify-center text-center space-y-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FF8A00]">
            <span>05</span>
            <span className="w-1 h-1 rounded-full bg-[#FF8A00]" />
            <span>Next Generation Web Development</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Ready to Build Your Next Digital Experience?
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            I combine clean frontend code, fluid motion design, and conversion-focused UI to create web experiences that stand out.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RotatingHeroSection;
