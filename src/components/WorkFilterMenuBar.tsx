import React from 'react';
import { 
  Globe, 
  LayoutDashboard, 
  Video, 
  ShoppingBag, 
  Smartphone,
  Sparkles
} from 'lucide-react';

export type WorkFilterCategory = 'all' | 'landing-page' | 'dashboard' | 'vsl' | 'ecommerce' | 'mobile-app';

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
  return (
    <div className="w-full my-8">
      {/* Sticky/Floating Styled Menu Bar */}
      <div className="max-w-4xl mx-auto">
        <div className="p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-[#141519]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto no-scrollbar">
          {FILTER_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeFilter === item.id;
            const count = counts?.[item.id];

            return (
              <button
                key={item.id}
                onClick={() => onFilterChange(item.id)}
                type="button"
                className={`relative group px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#C4D600] text-black font-extrabold shadow-[0_0_20px_rgba(196,214,0,0.4)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isActive
                      ? 'text-black scale-110'
                      : 'text-gray-400 group-hover:text-[#C4D600] group-hover:scale-110'
                  }`}
                />
                <span>{item.label}</span>

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
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
