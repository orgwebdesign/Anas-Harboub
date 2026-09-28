import React, { useRef, useState, useEffect, useCallback } from 'react';
import { 
  Globe, 
  LayoutDashboard, 
  Video, 
  ShoppingBag, 
  Smartphone, 
  Film,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export type WorkFilterCategory = 'all' | 'landing-page' | 'dashboard' | 'vsl' | 'ecommerce' | 'mobile-app' | 'motion-graphics';

interface FilterItem {
  id: WorkFilterCategory;
  label: string;
  count?: number;
  icon: React.ElementType;
}

const FILTER_ITEMS: FilterItem[] = [
  { id: 'all', label: 'All Works', icon: Sparkles },
  { id: 'landing-page', label: 'Landing Page', icon: Globe },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'vsl', label: 'Page VSL', icon: Video },
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingBag },
  { id: 'mobile-app', label: 'App Mobile', icon: Smartphone },
  { id: 'motion-graphics', label: 'Motion Graphics', icon: Film },
];

interface WorkFilterMenuBarProps {
  activeFilter: WorkFilterCategory;
  onFilterChange: (filter: WorkFilterCategory) => void;
  counts?: Record<WorkFilterCategory, number>;
}

export const WorkFilterMenuBar: React.FC<WorkFilterMenuBarProps> = ({
  activeFilter,
  onFilterChange,
  counts,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    // Native wheel handling to allow horizontal scroll on desktop wheel
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && el.scrollWidth > el.clientWidth) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
      el.removeEventListener('wheel', handleWheel);
    };
  }, [checkScroll]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 240;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleItemClick = (id: WorkFilterCategory, e: React.MouseEvent<HTMLButtonElement>) => {
    onFilterChange(id);
    e.currentTarget.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  return (
    <div className="w-full my-8 relative">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 relative group/menu">
        {/* Left Scroll Navigation Button (shown on overflow) */}
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-[#141519]/95 border border-white/15 text-white/80 hover:text-white hover:border-[#C4D600] hover:scale-110 transition-all items-center justify-center shadow-lg backdrop-blur-md cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Right Scroll Navigation Button (shown on overflow) */}
        {canScrollRight && (
          <button
            type="button"
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-[#141519]/95 border border-white/15 text-white/80 hover:text-white hover:border-[#C4D600] hover:scale-110 transition-all items-center justify-center shadow-lg backdrop-blur-md cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {/* Scrollable Container with Hidden Scrollbars */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto no-scrollbar scroll-smooth py-2 px-1 flex items-center [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Centered Pill Capsule with Auto Margins (Safely aligns to left when overflowing, centers when fitting) */}
          <div className="inline-flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-full bg-[#141519]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)] shrink-0 min-w-max mx-auto">
            {FILTER_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeFilter === item.id;
              const count = counts?.[item.id];

              return (
                <button
                  key={item.id}
                  onClick={(e) => handleItemClick(item.id, e)}
                  type="button"
                  className={`relative group px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-200 flex items-center gap-2 shrink-0 cursor-pointer select-none whitespace-nowrap ${
                    isActive ? 'text-black' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {/* Sliding Pill Active Background */}
                  {isActive && (
                    <motion.span
                      layoutId="activeWorkFilterPill"
                      className="absolute inset-0 bg-[#C4D600] rounded-full shadow-[0_0_20px_rgba(196,214,0,0.4)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <Icon
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isActive
                          ? 'text-black scale-105'
                          : 'text-gray-400 group-hover:text-[#C4D600] group-hover:scale-105'
                      }`}
                    />
                    <span className={isActive ? 'font-extrabold' : 'font-medium'}>{item.label}</span>

                    {typeof count === 'number' && (
                      <span
                        className={`ml-0.5 px-1.5 py-0.5 text-[10px] rounded-full font-mono transition-colors ${
                          isActive
                            ? 'bg-black/20 text-black font-bold'
                            : 'bg-white/10 text-gray-400 group-hover:bg-[#C4D600]/20 group-hover:text-[#C4D600]'
                        }`}
                      >
                        {count}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
