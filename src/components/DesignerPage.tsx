import React, { useState } from 'react';
import { Project } from '../types';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUpRight, Palette, Layers, Grid, Sliders, Type, Check, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface DesignerPageProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

export const DesignerPage: React.FC<DesignerPageProps> = ({ onSelectProject, onOpenContact }) => {
  const { projects, pagesConfig } = usePortfolio();
  const config = pagesConfig.infographiste;
  const [activeTokenTab, setActiveTokenTab] = useState<'colors' | 'typography' | 'components'>('colors');

  const designerProjects = projects.filter(
    (p) => p.category === 'Infographiste' || (p.category as string) === 'Designer' || p.category === 'UI/UX' || p.tags.includes('Design System') || p.tags.includes('Infographiste')
  );

  const pillars = [
    { title: config.feature1Title || "Brand & Visual Identity", desc: config.feature1Desc || "Logos, brand guidelines, color palettes, and editorial art direction." },
    { title: config.feature2Title || "Design Systems & Figma Tokens", desc: config.feature2Desc || "Scalable Figma component libraries with tokenized variables and developer handoffs." },
    { title: config.feature3Title || "Infographie & Supports Print/Web", desc: config.feature3Desc || "Visual storytelling, print, social media kits, and high-impact graphic design." }
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
            {config.title}
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl font-medium">
            {config.description}
          </p>
        </div>

        {/* Interactive Figma Design Token Explorer */}
        <div className="p-6 sm:p-8 rounded-[32px] bg-[#141519] border border-white/10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FF8A00] font-bold block">
                Figma Design Token Explorer
              </span>
              <h3 className="text-xl font-bold text-white font-heading mt-1">
                Anass Harboub Core Design System Architecture
              </h3>
            </div>

            <div className="flex gap-2 bg-[#0B0C0E] p-1.5 rounded-full border border-white/10">
              <button
                onClick={() => setActiveTokenTab('colors')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTokenTab === 'colors' ? 'bg-[#FF8A00] text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                Color Palette
              </button>
              <button
                onClick={() => setActiveTokenTab('typography')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTokenTab === 'typography' ? 'bg-[#FF8A00] text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                Typography
              </button>
              <button
                onClick={() => setActiveTokenTab('components')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTokenTab === 'components' ? 'bg-[#FF8A00] text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                UI Components
              </button>
            </div>
          </div>

          {/* Token Content */}
          <div className="p-6 rounded-2xl bg-[#0B0C0E] border border-white/5">
            {activeTokenTab === 'colors' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#0B0C0E] border border-white/10 space-y-3">
                  <div className="h-16 rounded-lg bg-[#FF8A00] shadow-lg" />
                  <div>
                    <span className="font-mono text-xs text-white font-bold block">#FF8A00</span>
                    <span className="text-[10px] text-gray-400">Vivid Orange Accent</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#0B0C0E] border border-white/10 space-y-3">
                  <div className="h-16 rounded-lg bg-[#0B0C0E] border border-white/20" />
                  <div>
                    <span className="font-mono text-xs text-white font-bold block">#0B0C0E</span>
                    <span className="text-[10px] text-gray-400">Deep Canvas Black</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#0B0C0E] border border-white/10 space-y-3">
                  <div className="h-16 rounded-lg bg-[#141519] border border-white/20" />
                  <div>
                    <span className="font-mono text-xs text-white font-bold block">#141519</span>
                    <span className="text-[10px] text-gray-400">Surface Card Gray</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#0B0C0E] border border-white/10 space-y-3">
                  <div className="h-16 rounded-lg bg-[#F3F4F6]" />
                  <div>
                    <span className="font-mono text-xs text-white font-bold block">#F3F4F6</span>
                    <span className="text-[10px] text-gray-400">High Contrast Text</span>
                  </div>
                </div>
              </div>
            )}

            {activeTokenTab === 'typography' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#141519] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#FF8A00] font-mono">Display H1 (Manrope 64px)</span>
                    <h4 className="text-2xl font-extrabold text-white font-heading">Digital Experiences</h4>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">1.125 Ratio</span>
                </div>
                <div className="p-4 rounded-xl bg-[#141519] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#FF8A00] font-mono">Heading H2 (Manrope 32px)</span>
                    <h5 className="text-lg font-bold text-white font-heading">Designed for Humans</h5>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">1.15 Ratio</span>
                </div>
              </div>
            )}

            {activeTokenTab === 'components' && (
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-6 py-3 rounded-full bg-[#FF8A00] text-black font-extrabold text-sm shadow-xl">
                  Primary Pill Button
                </button>
                <button className="px-6 py-3 rounded-full bg-[#1A1B20] text-white border border-white/20 font-bold text-sm">
                  Secondary Pill Button
                </button>
                <div className="notched-card-orange p-3 text-black font-bold text-xs">
                  Notched Service Card
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-2">
              <h3 className="text-lg font-bold text-white font-heading">{p.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Designer Projects */}
        <div>
          <h2 className="text-2xl font-bold text-white font-heading mb-8">
            Featured Design Systems & UI Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designerProjects.map((project) => (
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
                    <span className="px-3 py-1 rounded-full bg-[#FF8A00] text-black font-bold text-xs">
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
                    <span>Explore Design Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-10 rounded-[32px] bg-gradient-to-r from-[#1E1F26] to-[#141519] border border-white/10 text-center space-y-4">
          <h2 className="text-3xl font-extrabold text-white font-heading">
            Elevate Your Brand's Visual Language
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            From design systems to full product redesigns, let's create something extraordinary.
          </p>
          <button
            onClick={onOpenContact}
            className="px-8 py-3.5 rounded-full bg-[#FF8A00] text-black font-extrabold text-sm hover:bg-[#ffa026] transition-all cursor-pointer inline-flex items-center gap-2 shadow-xl"
          >
            <span>Inquire Design Collaboration</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
