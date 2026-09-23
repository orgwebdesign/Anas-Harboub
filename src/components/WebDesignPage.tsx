import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { StickyServicesCards } from './StickyServicesCards';
import { HeroWithMarquee } from './ui/cta-with-marquee';
import { WorkFilterMenuBar, WorkFilterCategory } from './WorkFilterMenuBar';
import { WebDesignFeaturedProjects } from './WebDesignFeaturedProjects';

interface WebDesignPageProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

export const WebDesignPage: React.FC<WebDesignPageProps> = ({ onSelectProject, onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<WorkFilterCategory>('all');

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Sticky Pinned 3D Flip & Dismiss Services Cards */}
        <StickyServicesCards onInquireService={() => onOpenContact()} />

        {/* Section 2: Selected Web Design Projects Header Banner */}
        <HeroWithMarquee onOpenContact={onOpenContact} />

        {/* Section 2.5: Interactive Filter Menu Bar with Icons */}
        <WorkFilterMenuBar
          activeFilter={activeFilter}
          onFilterChange={(filter) => setActiveFilter(filter)}
        />

        {/* Section 3: Featured Web Design Showcase Cards */}
        <WebDesignFeaturedProjects 
          onSelectProject={onSelectProject} 
          onOpenContact={onOpenContact}
          activeFilter={activeFilter}
        />

        {/* Bottom Call to Action */}
        <div className="p-10 rounded-[32px] bg-gradient-to-r from-[#1E1F26] to-[#141519] border border-white/10 text-center space-y-4">
          <h2 className="text-3xl font-extrabold text-white font-heading">
            Need a Web Experience That Converts?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Let's design a custom website tailored specifically to your audience and business goals.
          </p>
          <button
            onClick={onOpenContact}
            className="btn-liquid-fill px-8 py-3.5 rounded-full font-extrabold text-sm cursor-pointer inline-flex items-center gap-2 shadow-xl group"
          >
            <span>Start Your Web Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </button>
        </div>

      </div>
    </div>
  );
};
