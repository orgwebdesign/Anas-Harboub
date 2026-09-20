import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ScrambleButtonProps {
  onClick?: () => void;
}

function ScrambleButton({ onClick }: ScrambleButtonProps) {
  const originalText = "Start Your Project";
  const [displayText, setDisplayText] = useState(originalText);
  const [isScrambling, setIsScrambling] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = originalText.length;

    const interval = setInterval(() => {
      setDisplayText(() =>
        originalText
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iteration) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iteration += 1 / 2;
    }, 35);
  };

  return (
    <button
      onMouseEnter={scramble}
      onClick={onClick}
      className="group px-8 py-3.5 bg-[#C4D600] text-black font-extrabold rounded-full hover:bg-[#d2e500] hover:shadow-[0_0_30px_rgba(196, 214, 0,0.5)] transition-all cursor-pointer inline-flex items-center gap-3 text-sm sm:text-base"
    >
      <span>{displayText}</span>
      <div className="w-6 h-6 rounded-full bg-black text-[#C4D600] flex items-center justify-center transition-transform group-hover:rotate-45">
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </button>
  );
}

interface HeroWithMarqueeProps {
  onOpenContact?: () => void;
}

export function HeroWithMarquee({ onOpenContact }: HeroWithMarqueeProps) {
  return (
    <div className="relative w-full rounded-[32px] bg-[#141519] border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl my-12">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C4D600]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10 text-center max-w-3xl space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
          Selected Web Design <span className="text-[#C4D600]">Projects</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          A selection of websites and digital experiences I've designed, focused on clarity, usability and strong visual direction.
        </p>

        <div className="pt-2 flex justify-center">
          <ScrambleButton onClick={onOpenContact} />
        </div>
      </div>
    </div>
  );
}

export default HeroWithMarquee;
