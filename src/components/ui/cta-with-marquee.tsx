import React from 'react';
import { 
  Globe, 
  LayoutDashboard, 
  Video, 
  ShoppingBag, 
  Smartphone 
} from 'lucide-react';
import { motion } from 'motion/react';
import { WorkFilterCategory } from '../WorkFilterMenuBar';

export interface CategoryFilterItem {
  id: WorkFilterCategory;
  label: string;
  icon: React.ElementType;
}

export const CATEGORY_ITEMS: CategoryFilterItem[] = [
  { id: 'landing-page', label: 'Landing Page', icon: Globe },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'vsl', label: 'Page VSL', icon: Video },
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingBag },
  { id: 'mobile-app', label: 'App Mobile', icon: Smartphone },
];

interface HeroWithMarqueeProps {
  onOpenContact?: () => void;
  activeFilter?: WorkFilterCategory;
  onFilterChange?: (filter: WorkFilterCategory) => void;
}

export function HeroWithMarquee({ 
  activeFilter = 'landing-page',
  onFilterChange 
}: HeroWithMarqueeProps) {
  return (
    <div className="relative w-full py-6 sm:py-10 my-2">
      <div className="container mx-auto relative z-10 text-center max-w-4xl">
        {/* Title with generous spacing below */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight mb-10 sm:mb-14 md:mb-16">
          Featured Design <span className="text-[#C4D600]">Projects</span>
        </h2>

        {/* Square Glass Effect Category Cards */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6">
          {CATEGORY_ITEMS.map((item) => {
            const Icon = item.icon;
            const isSelected = activeFilter === item.id;

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => onFilterChange && onFilterChange(item.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`group relative flex flex-col items-center justify-center aspect-square w-24 sm:w-28 md:w-32 rounded-lg p-3 sm:p-4 cursor-pointer select-none backdrop-blur-xl transition-all duration-300 ${
                  isSelected ? 'opacity-100' : 'opacity-45 hover:opacity-90'
                }`}
              >
                {/* Static Background Tile (constant border prevents any size shift) */}
                <div className="absolute inset-0 rounded-lg bg-white/[0.04] border border-white/20 group-hover:border-white/40 transition-colors duration-300 pointer-events-none" />

                {/* Smooth Animated Active Highlight Frame */}
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryHighlight"
                    className="absolute inset-0 rounded-lg border-2 border-white bg-white/[0.12] shadow-[0_0_20px_rgba(255,255,255,0.25)] pointer-events-none z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Top Glass Reflection Edge */}
                <div className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-10" />

                {/* White Icon */}
                <div className="relative z-10 mb-2 sm:mb-2.5 flex items-center justify-center">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]" />
                </div>

                {/* Category Text Under Icon */}
                <span
                  className={`relative z-10 text-[11px] sm:text-xs md:text-sm font-semibold text-center leading-tight tracking-wide text-white transition-all duration-300 ${
                    isSelected ? 'font-bold' : 'group-hover:font-bold'
                  }`}
                >
                  {item.label}
                </span>

                {/* Active Indicator Glow Dot with Spring Motion */}
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryDot"
                    className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.95)] z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeroWithMarquee;

