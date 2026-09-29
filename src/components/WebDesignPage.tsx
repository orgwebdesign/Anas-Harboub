import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { ScrollVideoHero } from './ScrollVideoHero';
import { LogoCloud } from './ui/logo-cloud-2';
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

      {/* Section 1.5: Companies We Collaborate With (Logo Cloud) */}
      <section className="relative w-full py-16 sm:py-20 px-4 overflow-hidden border-b border-white/10 bg-[#0B0C0E]">
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="mb-8 sm:mb-10 text-center font-medium text-base sm:text-lg md:text-xl text-gray-400 tracking-tight">
            Companies we{' '}
            <span className="font-semibold text-[#C4D600]">collaborate</span> with.
          </h2>

          <LogoCloud />
        </div>
      </section>

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
        <div className="p-10 sm:p-14 rounded-[32px] bg-gradient-to-r from-[#1E1F26] to-[#141519] border border-white/10 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading max-w-2xl mx-auto leading-snug tracking-tight">
            Prêt à concevoir une expérience mémorable pour votre projet ?
          </h2>
          <div>
            <button
              onClick={onOpenContact}
              className="btn-liquid-fill px-8 py-4 rounded-full font-extrabold text-sm sm:text-base cursor-pointer inline-flex items-center gap-2.5 shadow-xl group"
            >
              <span>Parlons-en dès aujourd'hui</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WebDesignPage;
