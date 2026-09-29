import React from 'react';
import { 
  Globe, 
  LayoutDashboard, 
  Video, 
  ShoppingBag, 
  Smartphone 
} from 'lucide-react';
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
          Selected Web Design <span className="text-[#C4D600]">Projects</span>
        </h2>

        {/* Square Glass Effect Category Cards */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6">
          {CATEGORY_ITEMS.map((item) => {
            const Icon = item.icon;
            const isSelected = activeFilter === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onFilterChange && onFilterChange(item.id)}
                className={`group relative flex flex-col items-center justify-center aspect-square w-24 sm:w-28 md:w-32 rounded-2xl sm:rounded-3xl p-3 sm:p-4 transition-all duration-300 cursor-pointer select-none backdrop-blur-xl
                  ${
                    isSelected
                      ? 'opacity-100 bg-white/[0.12] border-2 border-white shadow-[0_0_25px_rgba(255,255,255,0.25)] scale-105 text-white'
                      : 'opacity-40 hover:opacity-100 bg-white/[0.04] border border-white/20 hover:border-white/60 hover:bg-white/[0.08] hover:scale-105 text-white'
                  }
                `}
              >
                {/* Top Glass Reflection Edge */}
                <div className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                {/* White Icon */}
                <div className="relative mb-2 sm:mb-2.5 flex items-center justify-center">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]" />
                </div>

                {/* Category Text Under Icon */}
                <span
                  className={`text-[11px] sm:text-xs md:text-sm font-semibold text-center leading-tight tracking-wide text-white transition-colors ${
                    isSelected ? 'font-bold' : 'group-hover:font-bold'
                  }`}
                >
                  {item.label}
                </span>

                {/* Active Indicator Glow Dot */}
                {isSelected && (
                  <div className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeroWithMarquee;

