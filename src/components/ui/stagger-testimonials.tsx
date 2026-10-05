"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '../../lib/utils';

const SQRT_5000 = Math.sqrt(5000);

export interface TestimonialItem {
  id: number;
  testimonial: string;
  by: string;
  role: string;
  country: string;
  lang: 'ar' | 'fr' | 'en';
  imgSrc: string;
}

export const defaultTestimonials: TestimonialItem[] = [
  // Middle East & North Africa Testimonials
  {
    id: 0,
    testimonial: "Outstanding service and utmost professionalism! Anass is one of the best designers I've worked with—he transformed our idea into a modern website that surpassed every expectation.",
    by: "Yassine Benjelloun",
    role: "Startup Founder",
    country: "Casablanca 🇲🇦",
    lang: 'en',
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 1,
    testimonial: "Ultra-precise user interface design with lightning-fast execution. I highly recommend Anass for all high-end web design and digital product development.",
    by: "Omar Al-Hashimi",
    role: "Head of Digital Marketing",
    country: "Dubai 🇦🇪",
    lang: 'en',
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    testimonial: "Partnering with Anass was an exceptional experience. He understood our visual identity from our very first discovery call and crafted a cohesive brand that commands attention.",
    by: "Sara Al-Mansoori",
    role: "Tech Entrepreneur",
    country: "Riyadh 🇸🇦",
    lang: 'en',
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    testimonial: "Impressive mastery of modern design tools and no-code architectures. The result was a fast, visually captivating platform delivered with zero launch friction.",
    by: "Mehdi El Fassi",
    role: "Chief Technology Officer",
    country: "Tangier 🇲🇦",
    lang: 'en',
    imgSrc: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    testimonial: "Rare artistic sensibility and effortless communication throughout the entire sprint. Anass consistently places client satisfaction and high visual standards above all else.",
    by: "Karim Bouzid",
    role: "Strategic Consultant",
    country: "Doha 🇶🇦",
    lang: 'en',
    imgSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80"
  },

  // European & Global Testimonials
  {
    id: 5,
    testimonial: "An extraordinary collaboration! Anass transformed our vision into an ultra-modern, fluid, and captivating web experience that resonated immediately.",
    by: "Maxime Laurent",
    role: "CEO at NovaTech",
    country: "Paris 🇫🇷",
    lang: 'en',
    imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    testimonial: "Anass's meticulous eye for UI/UX detail is remarkable. Our conversion rates increased by 40% in the first month following our website overhaul.",
    by: "Sophie Mercier",
    role: "Marketing Director",
    country: "Lyon 🇫🇷",
    lang: 'en',
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    testimonial: "Fast turnaround, clean design architecture, and unmatched creativity. A genuine specialist in modern product design and responsive web systems.",
    by: "Julien De Smet",
    role: "Co-Founder at Vibe Studio",
    country: "Brussels 🇧🇪",
    lang: 'en',
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    testimonial: "Anass architected our brand identity and website from A to Z. The feedback from both our customers and investors has been unanimously glowing!",
    by: "Camille Roche",
    role: "Founder at Studio Éclat",
    country: "Geneva 🇨🇭",
    lang: 'en',
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 9,
    testimonial: "Exemplary professionalism, active listening, and high-end aesthetic restraint. Anass brings tremendous tangible value to ambitious digital ventures.",
    by: "Thomas Bernard",
    role: "Product Manager at SaaSify",
    country: "Bordeaux 🇫🇷",
    lang: 'en',
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80"
  },

  // English Testimonials
  {
    id: 10,
    testimonial: "Anass delivered a breathtaking landing page that blew our investors away. High-end dark aesthetic and pixel-perfect execution.",
    by: "Alexander Wright",
    role: "Founder & CEO at NextGen",
    country: "London 🇬🇧",
    lang: 'en',
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 11,
    testimonial: "Working with Anass was seamless. He took our rough ideas and turned them into a stunning, responsive Framer web experience.",
    by: "Sarah Jenkins",
    role: "Creative Director at Nexus",
    country: "New York 🇺🇸",
    lang: 'en',
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 12,
    testimonial: "The best UI/UX designer we've partnered with. 5x faster workflow and incredible attention to micro-interactions and performance.",
    by: "David Miller",
    role: "Head of Product at CloudScale",
    country: "San Francisco 🇺🇸",
    lang: 'en',
    imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 13,
    testimonial: "Outstanding aesthetic, smooth communication, and punctual delivery. An absolute master of modern premium dark-mode web design.",
    by: "Liam Carter",
    role: "Growth Lead at Fintech Horizons",
    country: "Toronto 🇨🇦",
    lang: 'en',
    imgSrc: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: 14,
    testimonial: "Anass elevated our brand identity to a luxury standard. Highly recommended for any tech startup or ambitious agency.",
    by: "Elena Rostova",
    role: "Brand Strategist at Aura Studios",
    country: "Berlin 🇩🇪",
    lang: 'en',
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: TestimonialItem;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  // Performance Optimization: Never render cards that are outside view frustum (-2 to +2)
  if (Math.abs(position) > 2) {
    return null;
  }

  const isCenter = position === 0;
  const isArabic = testimonial.lang === 'ar';

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 sm:p-8 transition-transform duration-500 ease-out select-none will-change-transform",
        isCenter 
          ? "z-20 bg-[#C4D600] text-black border-[#C4D600] shadow-[0_15px_35px_rgba(196, 214, 0,0.4)]" 
          : "z-10 bg-[#131418] text-gray-200 border-white/10 hover:border-[#C4D600]/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(45px 0%, calc(100% - 45px) 0%, 100% 45px, 100% 100%, calc(100% - 45px) 100%, 45px 100%, 0 100%, 0 0)`,
        transform: `
          translate3d(
            calc(-50% + ${(cardSize / 1.45) * position}px),
            calc(-50% + ${isCenter ? -65 : position % 2 ? 15 : -15}px),
            0
          )
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 10px 0px 4px rgba(0,0,0,0.35)" : "0px 0px 0px 0px transparent"
      }}
    >
      {/* Chamfer diagonal accent */}
      <span
        className={cn(
          "absolute block origin-top-right rotate-45 pointer-events-none",
          isCenter ? "bg-black/20" : "bg-white/10"
        )}
        style={{
          right: -2,
          top: 44,
          width: SQRT_5000,
          height: 2
        }}
      />

      {/* Top Header: Avatar + Rating + Country */}
      <div className={cn("flex items-center justify-between mb-4", isArabic && "flex-row-reverse")}>
        <div className={cn("flex items-center gap-3", isArabic && "flex-row-reverse")}>
          <img
            src={testimonial.imgSrc}
            alt={testimonial.by}
            loading="lazy"
            decoding="async"
            width={48}
            height={48}
            className={cn(
              "h-11 w-11 sm:h-12 sm:w-12 rounded-lg object-cover object-top border",
              isCenter ? "border-black/20" : "border-white/15"
            )}
          />
          <div className={isArabic ? "text-right" : "text-left"}>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-3.5 h-3.5 fill-current",
                    isCenter ? "text-black" : "text-[#C4D600]"
                  )}
                />
              ))}
            </div>
            <span className={cn(
              "text-xs font-mono font-semibold uppercase tracking-wider block mt-0.5",
              isCenter ? "text-black/70" : "text-gray-400"
            )}>
              {testimonial.country}
            </span>
          </div>
        </div>

        {/* Verified Review Badge */}
        <span className={cn(
          "text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border",
          isCenter
            ? "bg-black/10 border-black/20 text-black"
            : "bg-white/5 border-white/10 text-[#C4D600]"
        )}>
          Verified Client
        </span>
      </div>

      {/* Testimonial Quote Content */}
      <div
        dir={isArabic ? 'rtl' : 'ltr'}
        className={cn(
          "overflow-hidden max-h-[145px] sm:max-h-[160px]",
          isArabic ? "text-right" : "text-left"
        )}
      >
        <p className={cn(
          "text-sm sm:text-base leading-relaxed font-medium",
          isCenter ? "text-black font-semibold" : "text-gray-200"
        )}>
          "{testimonial.testimonial}"
        </p>
      </div>

      {/* Author Details at the bottom */}
      <div
        dir={isArabic ? 'rtl' : 'ltr'}
        className={cn(
          "absolute bottom-5 sm:bottom-6 left-6 sm:left-7 right-6 sm:right-7 pt-3 border-t",
          isCenter ? "border-black/15" : "border-white/10",
          isArabic ? "text-right" : "text-left"
        )}
      >
        <p className={cn(
          "text-sm font-bold truncate",
          isCenter ? "text-black" : "text-white"
        )}>
          {testimonial.by}
        </p>
        <p className={cn(
          "text-xs truncate font-medium",
          isCenter ? "text-black/75" : "text-gray-400"
        )}>
          {testimonial.role}
        </p>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(380);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = defaultTestimonials.length;

  const handleMove = useCallback((steps: number) => {
    setCurrentIndex((prev) => (prev + steps + total) % total);
  }, [total]);

  // Responsive size listener with debounce
  useEffect(() => {
    const updateSize = () => {
      setCardSize(window.innerWidth >= 640 ? 380 : 300);
    };

    updateSize();
    window.addEventListener("resize", updateSize, { passive: true });
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Performance-optimized auto-advance timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleMove(1);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, handleMove]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 580 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Testimonial Cards Rendered with Stable Keys & GPU translate3d */}
      {defaultTestimonials.map((testimonial, index) => {
        let position = index - currentIndex;
        const half = Math.floor(total / 2);
        if (position > half) position -= total;
        if (position < -half) position += total;

        return (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 z-30">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full text-2xl transition-colors duration-200 cursor-pointer",
            "bg-[#141519] text-white border-2 border-white/15 hover:border-[#C4D600] hover:bg-[#C4D600] hover:text-black",
            "shadow-[0_8px_25px_rgba(0,0,0,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4D600]"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full text-2xl transition-colors duration-200 cursor-pointer",
            "bg-[#141519] text-white border-2 border-white/15 hover:border-[#C4D600] hover:bg-[#C4D600] hover:text-black",
            "shadow-[0_8px_25px_rgba(0,0,0,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4D600]"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
