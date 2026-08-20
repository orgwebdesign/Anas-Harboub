import React, { useState } from 'react';
import { Project } from '../types';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { StickyServicesCards } from './StickyServicesCards';
import { HeroWithMarquee } from './ui/cta-with-marquee';
import { WebDesignFeaturedProjects } from './WebDesignFeaturedProjects';

interface WebDesignPageProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

export const WebDesignPage: React.FC<WebDesignPageProps> = ({ onSelectProject, onOpenContact }) => {
  const { projects, pagesConfig } = usePortfolio();
  const config = pagesConfig.webDesign;

  const webProjects = projects.filter(
    (p) => p.category === 'Web Design' || p.tags.includes('Web Design')
  );

  const capabilities = [
    {
      title: config.feature1Title || "Landing Pages & Conversion UI",
      desc: config.feature1Desc || "Bespoke high-converting hero sections, micro-animations, and trust architecture engineered for performance."
    },
    {
      title: config.feature2Title || "Corporate & Brand Websites",
      desc: config.feature2Desc || "Editorial multi-page digital experiences that position your brand as an industry leader."
    },
    {
      title: config.feature3Title || "Responsive & Accessibility First",
      desc: config.feature3Desc || "WCAG AAA contrast ratios, fluid rem layouts, and sub-second page loading speeds."
    }
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Sticky Pinned 3D Flip & Dismiss Services Cards */}
        <StickyServicesCards onInquireService={() => onOpenContact()} />

        {/* Section 2: Selected Web Design Projects Header Banner */}
        <HeroWithMarquee onOpenContact={onOpenContact} />

        {/* Section 3: Featured Web Design Showcase Cards (Aura AI, Chronos, Orbit) */}
        <WebDesignFeaturedProjects onSelectProject={onSelectProject} onOpenContact={onOpenContact} />

        {/* Core Capabilities */}
        <div>
          <h2 className="text-2xl font-bold text-white font-heading mb-8">
            Web Design Architecture & Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-[#141519] border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF8A00]/10 text-[#FF8A00] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">{item.title}</h3>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Web Design Projects */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white font-heading">
              Featured Web Design Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group rounded-[24px] bg-[#141519] border border-white/10 overflow-hidden hover:border-[#FF8A00] transition-all duration-300 cursor-pointer shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden bg-black/50 relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/80 text-[#FF8A00] font-bold text-xs">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#FF8A00] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.description}</p>
                  <div className="pt-3 flex items-center gap-2 text-xs font-bold text-[#FF8A00]">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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
            className="px-8 py-3.5 rounded-full bg-[#FF8A00] text-black font-extrabold text-sm hover:bg-[#ffa026] transition-all cursor-pointer inline-flex items-center gap-2 shadow-xl"
          >
            <span>Start Your Web Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
