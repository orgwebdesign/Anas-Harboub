import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Project, PageTab } from '../types';
import { ArrowUpRight, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  initialCategory?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  initialCategory = 'All',
}) => {
  const { projects } = usePortfolio();
  const [selectedFilter, setSelectedFilter] = useState<string>(initialCategory);

  const desktopFilterOptions = ['All', 'Web Design', 'Vibe No Code', 'Infographiste', 'UI/UX'];
  const mobileFilterOptions = ['Web Design', 'Vibe No Code', 'Infographiste'];

  const isProjectInFilter = (project: Project, filterName: string) => {
    if (filterName === 'All') return true;
    const f = filterName.toLowerCase();
    if (f === 'web design') {
      return project.category === 'Web Design' || project.tags.includes('Web Design');
    }
    if (f === 'vibe no code' || f === 'no vibe code' || f === 'no code') {
      return project.category === 'Vibe No Code' || project.tags.includes('Vibe No Code') || project.tags.includes('Framer');
    }
    if (f === 'infographiste' || f === 'designer' || f === 'ui/ux') {
      return (
        project.category === 'Infographiste' ||
        (project.category as string) === 'Designer' ||
        project.category === 'UI/UX' ||
        project.tags.includes('Infographiste') ||
        project.tags.includes('Designer') ||
        project.tags.includes('UI/UX')
      );
    }
    return project.category === filterName || project.tags.includes(filterName);
  };

  const getCount = (filterName: string) => {
    if (filterName === 'All') return projects.length;
    return projects.filter((p) => isProjectInFilter(p, filterName)).length;
  };

  const filteredProjects = projects.filter((project) =>
    isProjectInFilter(project, selectedFilter)
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              Crafted with <span className="text-[#FF8A00]">Purpose & Precision</span>
            </h2>
          </div>

          {/* Desktop Category Filter Tabs */}
          <div className="hidden sm:flex flex-nowrap items-center gap-1.5 sm:gap-2 bg-[#121318]/90 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-2xl overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-w-full shrink-0">
            {desktopFilterOptions.map((filter) => {
              const isActive = selectedFilter === filter;
              const count = getCount(filter);

              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`relative shrink-0 px-3.5 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer select-none whitespace-nowrap ${
                    isActive ? 'text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeFilterTabDesktop"
                      className="absolute inset-0 bg-[#FF8A00] rounded-full shadow-[0_0_20px_rgba(255,138,0,0.35)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                    <span>{filter}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold transition-colors ${
                        isActive
                          ? 'bg-black/20 text-black'
                          : 'bg-white/10 text-gray-400 group-hover:text-white'
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Category Filter Tabs - Exactly 3 tabs in 1 row without 'All' */}
          <div className="flex sm:hidden items-center justify-between w-full bg-[#121318]/90 p-1 rounded-full border border-white/10 backdrop-blur-md shadow-2xl">
            {mobileFilterOptions.map((filter) => {
              // On mobile, if selectedFilter is 'All', default active highlight to 'Web Design' or check exact match
              const isActive =
                selectedFilter === filter ||
                (selectedFilter === 'All' && filter === 'Web Design');
              const count = getCount(filter);

              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`relative flex-1 py-2 px-1 rounded-full text-xs font-semibold transition-colors cursor-pointer select-none text-center whitespace-nowrap ${
                    isActive ? 'text-black font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeFilterTabMobile"
                      className="absolute inset-0 bg-[#FF8A00] rounded-full shadow-[0_0_15px_rgba(255,138,0,0.35)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-1 whitespace-nowrap">
                    <span>{filter}</span>
                    <span
                      className={`text-[9px] px-1 py-0.2 rounded-full font-mono font-bold ${
                        isActive
                          ? 'bg-black/20 text-black'
                          : 'bg-white/10 text-gray-400'
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => onSelectProject(project)}
                className="group rounded-[24px] bg-[#141519] border border-white/10 overflow-hidden hover:border-[#FF8A00]/50 transition-all duration-500 hover:-translate-y-1.5 shadow-xl cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Hover Scale */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />

                    {/* Category Overlay Pill */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#FF8A00] font-bold text-xs border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* Year Tag */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-gray-300 font-mono text-xs">
                        {project.year}
                      </span>
                    </div>

                    {/* Quick Hover Arrow Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#FF8A00] text-black flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-400">
                        {project.client}
                      </span>
                      {project.featured && (
                        <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#FF8A00] bg-[#FF8A00]/10 px-2 py-0.5 rounded-md">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-extrabold text-white font-heading group-hover:text-[#FF8A00] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Tags Footer */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#1E1F26] text-gray-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-[#1E1F26] text-gray-500 text-xs font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
