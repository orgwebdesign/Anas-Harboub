import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const GREETINGS = [
  { text: "Hello", lang: "English" },
  { text: "Bonjour", lang: "French" },
  { text: "مرحباً", lang: "Arabic" },
  { text: "Ciao", lang: "Italian" },
  { text: "Hallo", lang: "German" }
];

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';

    setDimension({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Words rotation effect across 5 languages (~680ms per language)
  useEffect(() => {
    if (index === GREETINGS.length - 1) return;

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 680);

    return () => clearTimeout(timeout);
  }, [index]);

  // Overall preloader duration (exactly 4s)
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const initialCurve = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 250} 0 ${dimension.height} L0 0`;
  const exitCurve = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curveVariants = {
    initial: {
      d: initialCurve,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: exitCurve,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
    }
  };

  const containerVariants = {
    initial: {
      top: 0
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.15 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0B0C0E] select-none pointer-events-auto"
    >
      {/* Ambient center radial glow in brand color */}
      <div className="absolute w-[500px] h-[500px] bg-[#C4D600]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Centered Multilingual Greetings */}
      {dimension.width > 0 && (
        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
          <div className="flex items-center justify-center min-h-[90px] sm:min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={GREETINGS[index].text}
                initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -35, filter: "blur(6px)" }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center"
              >
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tight">
                  {GREETINGS[index].text}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Curved Liquid Wave SVG Attached to Bottom for Smooth Slide-up Exit */}
      {dimension.width > 0 && (
        <svg
          className="absolute top-full left-0 w-full h-[250px] pointer-events-none fill-[#0B0C0E] overflow-visible"
        >
          <motion.path
            variants={curveVariants}
            initial="initial"
            exit="exit"
          />
          {/* Subtle Green Liquid Edge Wave Line */}
          <motion.path
            variants={curveVariants}
            initial="initial"
            exit="exit"
            fill="none"
            stroke="#C4D600"
            strokeWidth="3"
            strokeOpacity="0.75"
          />
        </svg>
      )}
    </motion.div>
  );
};
