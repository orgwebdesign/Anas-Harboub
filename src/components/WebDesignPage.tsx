import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { ScrollVideoHero } from './ScrollVideoHero';
import { HeroWithMarquee } from './ui/cta-with-marquee';
import type { WorkFilterCategory } from './WorkFilterMenuBar';
import { WebDesignFeaturedProjects } from './WebDesignFeaturedProjects';

interface WebDesignPageProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

export const WebDesignPage: React.FC<WebDesignPageProps> = ({ onSelectProject, onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<WorkFilterCategory>('landing-page');

  const scrollToProjects = () => {
    const el = document.getElementById('web-design-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-20">
      {/* Section 1: Fullscreen Canvas Frame Scrubbing Hero Section */}
      <ScrollVideoHero
        onScrollToProjects={scrollToProjects}
      />

      {/* Main Page Content */}
      <div 
        id="web-design-projects"
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-8"
      >
        {/* Section 2: Selected Web Design Projects Header Banner with Glass Filter Cards */}
        <HeroWithMarquee 
          onOpenContact={onOpenContact} 
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

export default WebDesignPage;
