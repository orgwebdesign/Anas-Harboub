import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  ChevronDown, 
  Rocket, 
  AppWindow, 
  LayoutDashboard, 
  ShoppingBag 
} from 'lucide-react';

interface StickyServicesCardsProps {
  onInquireService?: (serviceName: string) => void;
}

export const StickyServicesCards: React.FC<StickyServicesCardsProps> = ({ onInquireService }) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const { pagesConfig } = usePortfolio();
  const webConfig = pagesConfig.webDesign;

  useEffect(() => {
    if (!rootRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    const heroHeadline = root.querySelector<HTMLDivElement>('.hero-content');
    const stickyCards = root.querySelectorAll<HTMLDivElement>('.card');
    const frontStickyCard = root.querySelector<HTMLDivElement>('.card-front');
    const backStickyCards = root.querySelectorAll<HTMLDivElement>('.card-back');

    if (!frontStickyCard || backStickyCards.length === 0) return;

    const stickyCardCount = 4;
    const CARD_FLIP_TRIGGER = 200;
    const CARD_DISMISS_START = 300;
    const CARD_DISMISS_DURATION = 100;
    const TOTAL_SCROLL_SVH = CARD_DISMISS_START + stickyCardCount * CARD_DISMISS_DURATION; // 700
    const svhToProgress = (svh: number) => svh / TOTAL_SCROLL_SVH;

    // Window height total scroll
    const totalScroll = window.innerHeight * (TOTAL_SCROLL_SVH / 100);

    // Calculate responsive tilt angles for mobile vs desktop
    const isMobile = window.innerWidth < 640;
    const cardFlipTiltAngles = isMobile ? [-5, -10, -3, 5] : [-10, -20, -5, 10];
    const cardDismissTiltAngles = isMobile ? [-25, -35, -20, 25] : [-50, -60, -45, 50];

    const ctx = gsap.context((self) => {
      let isFlipped = false;

      // Initial card faces and alignment setup
      gsap.set(stickyCards, { xPercent: -50 });
      gsap.set(frontStickyCard, { rotationY: 0 });
      gsap.set(backStickyCards, { rotationY: -180 });

      const revealBackCards = () => {
        gsap.to(frontStickyCard, {
          rotationY: 180,
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
        });
        backStickyCards.forEach((card, i) => {
          gsap.to(card, {
            rotationY: 0,
            rotationZ: cardFlipTiltAngles[i],
            duration: 1,
            ease: 'elastic.out(1, 0.5)',
          });
        });
      };

      const concealBackCards = () => {
        gsap.to(frontStickyCard, {
          rotationY: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
        });
        backStickyCards.forEach((card) => {
          gsap.to(card, {
            rotationY: -180,
            rotationZ: 0,
            duration: 1,
            ease: 'elastic.out(1, 0.5)',
          });
        });
      };

      ScrollTrigger.create({
        trigger: root.querySelector('.hero-section-pin'),
        start: 'top top',
        end: `+=${totalScroll}px`,
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        onUpdate: ({ progress }) => {
          // 1. Enter phase: cards rise up, headline slides out top
          const enterProgress = gsap.utils.clamp(
            0,
            1,
            gsap.utils.mapRange(0, svhToProgress(100), 0, 1, progress)
          );

          gsap.set(stickyCards, {
            xPercent: -50,
            y: gsap.utils.mapRange(0, 1, 50, -50, enterProgress) + '%',
          });

          if (heroHeadline) {
            gsap.set(heroHeadline, {
              y: gsap.utils.mapRange(0, 1, 0, -120, enterProgress) + '%',
              opacity: gsap.utils.mapRange(0, 1, 1, 0, enterProgress),
            });
          }

          // 2. Flip trigger (one-shot elastic flip)
          if (progress > svhToProgress(CARD_FLIP_TRIGGER) && !isFlipped) {
            self.add(() => revealBackCards());
            isFlipped = true;
          } else if (progress <= svhToProgress(CARD_FLIP_TRIGGER) && isFlipped) {
            self.add(() => concealBackCards());
            isFlipped = false;
          }

          // 3. Staggered per-card dismiss (reverse DOM order)
          backStickyCards.forEach((card, i) => {
            const dismissOrder = stickyCardCount - 1 - i; // Card-4 (i=3) dismisses first
            const dismissStart = svhToProgress(CARD_DISMISS_START + dismissOrder * 100);
            const dismissEnd = svhToProgress(CARD_DISMISS_START + (dismissOrder + 1) * 100);
            const dismissProgress = gsap.utils.clamp(
              0,
              1,
              gsap.utils.mapRange(dismissStart, dismissEnd, 0, 1, progress)
            );

            gsap.set(card, {
              xPercent: -50,
              y: gsap.utils.mapRange(0, 1, -50, -250, dismissProgress) + '%',
              rotationZ: gsap.utils.mapRange(
                0,
                1,
                cardFlipTiltAngles[i],
                cardDismissTiltAngles[i],
                dismissProgress
              ),
              opacity: gsap.utils.mapRange(0, 1, 1, 0, dismissProgress),
            });
          });
        },
      });
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const backCardsData = [
    {
      id: 'card-1',
      index: '01',
      title: 'Landing Pages & VSL',
      desc: 'Landing pages, sales pages, VSL pages, campaign pages',
      icon: Rocket,
      bgClass: 'bg-[#C4D600] text-black border border-white/20 shadow-[0_20px_50px_rgba(196, 214, 0,0.4)]',
      badgeClass: 'bg-black text-[#C4D600]',
      iconClass: 'bg-black text-[#C4D600]',
    },
    {
      id: 'card-2',
      index: '02',
      title: 'SaaS & Web Apps',
      desc: 'SaaS platforms, web applications, client portals',
      icon: AppWindow,
      bgClass: 'bg-[#181920] text-white border border-[#C4D600]/30 shadow-2xl',
      badgeClass: 'bg-[#C4D600] text-black',
      iconClass: 'bg-[#C4D600] text-black',
    },
    {
      id: 'card-3',
      index: '03',
      title: 'Dashboards & Admin Panels',
      desc: 'Admin dashboards, analytics, CRM & management interfaces',
      icon: LayoutDashboard,
      bgClass: 'bg-[#0E0F13] text-white border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)]',
      badgeClass: 'bg-white/10 text-[#C4D600] border border-white/10',
      iconClass: 'bg-[#C4D600]/20 text-[#C4D600] border border-[#C4D600]/30',
    },
    {
      id: 'card-4',
      index: '04',
      title: 'Corporate & E-commerce',
      desc: 'Business websites, corporate sites & online stores',
      icon: ShoppingBag,
      bgClass: 'bg-[#C4D600] text-black border border-white/20 shadow-[0_20px_50px_rgba(196, 214, 0,0.5)]',
      badgeClass: 'bg-black text-[#C4D600]',
      iconClass: 'bg-black text-[#C4D600]',
    },
  ];

  return (
    <div ref={rootRef} className="relative w-full text-white selection:bg-[#C4D600] selection:text-black">
      {/* Pinned Scroll Region */}
      <section className="hero-section-pin relative w-full h-screen bg-[#0B0C0E] overflow-hidden flex items-center justify-center border border-white/10 rounded-[24px] sm:rounded-[32px]">
        {/* Subtle Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#C4D600_1px,transparent_1px)] [background-size:32px_32px] sm:[background-size:40px_40px] opacity-10 pointer-events-none" />
        <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#C4D600]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

        {/* Hero Content (Headline overlay centered cleanly) */}
        <div className="hero-content absolute inset-x-0 top-1/2 -translate-y-1/2 w-full px-4 sm:px-6 text-center z-10 pointer-events-none space-y-3 sm:space-y-4">

          <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight max-w-4xl mx-auto px-2">
            What I{' '}
            <motion.span
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-[#C4D600] inline-block"
            >
              Design
            </motion.span>{' '}
            for the Web
            <br className="hidden sm:inline" /> From{' '}
            <motion.span
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="text-[#C4D600] inline-block"
            >
              ideas
            </motion.span>{' '}
            to polished digital experiences.
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-medium px-4">
            {webConfig.description || "Explore the web experiences I design — from landing pages and SaaS platforms to dashboards and complete digital products."}
          </p>
        </div>

        {/* Sticky Cards Container (Preserves 3D Perspective) */}
        <div 
          className="sticky-cards absolute inset-0 w-full h-full flex items-center justify-center z-20 pointer-events-auto px-4"
          style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
        >
          {/* Front Card */}
          <div
            className="card card-front absolute top-1/2 left-1/2 w-[84vw] max-w-[360px] aspect-[4/5] p-5 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[28px] bg-[#C4D600] text-black border border-white/30 flex flex-col justify-between items-center text-center shadow-[0_25px_60px_rgba(196, 214, 0,0.45)] cursor-pointer"
            style={{ 
              transform: 'translate(-50%, 50%) rotateY(0deg)',
              backfaceVisibility: 'hidden',
              willChange: 'transform'
            }}
          >
            <div className="flex items-center justify-between w-full">
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black text-[#C4D600] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider">
                00 — START HERE
              </span>
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase text-black/70">Overview</span>
            </div>

            <div className="space-y-2 sm:space-y-3 my-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading text-black leading-tight">
                {webConfig.subtitle || "Services Web Designer"}
              </h3>
              <p className="text-[11px] sm:text-xs md:text-sm font-medium text-black/80 leading-relaxed max-w-[260px] mx-auto">
                Scroll down to explore my core web design offerings &amp; specialization frameworks.
              </p>
            </div>

            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black text-[#C4D600] flex items-center justify-center border border-white/20 animate-bounce">
              <ChevronDown className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
          </div>

          {/* Back Cards (4 Stacked Cards) */}
          {backCardsData.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                id={card.id}
                onClick={() => onInquireService?.(card.title)}
                className={`card card-back absolute top-1/2 left-1/2 w-[84vw] max-w-[360px] aspect-[4/5] p-5 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[28px] flex flex-col justify-between items-center text-center transition-shadow hover:scale-105 cursor-pointer ${card.bgClass}`}
                style={{
                  transform: 'translate(-50%, 50%) rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                  willChange: 'transform',
                }}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest ${card.badgeClass}`}>
                    {card.index}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider opacity-70">Specialization</span>
                </div>

                <div className="space-y-2 sm:space-y-3 my-auto">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs md:text-sm font-medium opacity-90 leading-relaxed max-w-[260px] mx-auto">
                    {card.desc}
                  </p>
                </div>

                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg ${card.iconClass}`}>
                  <IconComponent className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
