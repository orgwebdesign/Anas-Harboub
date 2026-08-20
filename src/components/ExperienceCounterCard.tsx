import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const ExperienceCounterCard: React.FC = () => {
  const countRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counterObj = { value: 0 };

    const ctx = gsap.context(() => {
      // Counter animation to 6
      gsap.to(counterObj, {
        value: 6,
        duration: 2.2,
        ease: 'power3.out',
        delay: 0.3,
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.innerText = Math.floor(counterObj.value).toString();
          }
        },
      });

      // Pulse ambient glow
      gsap.to(glowRef.current, {
        scale: 1.3,
        opacity: 0.7,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Subtle float animation
      gsap.to(cardRef.current, {
        y: -6,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="p-6 rounded-2xl bg-[#141519] border border-white/10 relative shadow-2xl overflow-hidden group hover:border-[#FF8A00]/40 transition-colors"
    >
      {/* GSAP Animated Ambient Glow */}
      <div
        ref={glowRef}
        className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF8A00]/25 rounded-full blur-2xl pointer-events-none"
      />

      <div className="flex items-baseline gap-1 my-1">
        <span
          ref={countRef}
          className="font-heading text-5xl sm:text-6xl font-black text-white tracking-tight"
        >
          0
        </span>
        <span className="font-heading text-4xl sm:text-5xl font-black text-[#FF8A00]">
          +
        </span>
        <span className="text-xl sm:text-2xl font-bold text-gray-100 uppercase tracking-wide ml-1">
          Years
        </span>
      </div>

      <div className="text-sm font-bold text-[#FF8A00] uppercase tracking-wider mb-2">
        Experience
      </div>

      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
        6 years crafting intuitive UI/UX, web design, and high-converting digital products.
      </p>

      <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-center">
        <p className="text-base sm:text-lg font-bold tracking-widest text-[#FF8A00] text-center">
          2020 — 2026
        </p>
      </div>
    </div>
  );
};
