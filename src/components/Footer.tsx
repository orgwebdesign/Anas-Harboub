import React from 'react';
import { PageTab } from '../types';
import { ANASS_BIO } from '../data/portfolioData';
import { ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { AnassLogo } from './AnassLogo';

interface FooterProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ activeTab, setActiveTab, onOpenContact }) => {
  return (
    <footer className="bg-[#0B0C0E] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand Left: Logo + "Let's work together" */}
          <div className="flex items-center gap-5 sm:gap-6">
            <button
              onClick={() => {
                setActiveTab('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="shrink-0 cursor-pointer focus:outline-none transition-transform hover:scale-105"
              title="Return to top"
            >
              <AnassLogo height={54} />
            </button>
            <div>
              <h2
                onClick={onOpenContact}
                className="text-[32px] sm:text-[43px] font-extrabold text-white font-heading tracking-tight leading-[1.05] cursor-pointer hover:text-[#C4D600] transition-colors"
              >
                Let’s work<br />together
              </h2>
            </div>
          </div>

          {/* Nav Links (3 Pages) */}
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => setActiveTab('web-design')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'web-design' ? 'text-[#C4D600]' : 'text-gray-300 hover:text-white'
              }`}
            >
              Web Design
            </button>
            <button
              onClick={() => setActiveTab('vibe-nocode')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'vibe-nocode' ? 'text-[#C4D600]' : 'text-gray-300 hover:text-white'
              }`}
            >
              Vibe No Code
            </button>
            <button
              onClick={() => setActiveTab('designer')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'designer' ? 'text-[#C4D600]' : 'text-gray-300 hover:text-white'
              }`}
            >
              Graphics Designer
            </button>
          </div>

          {/* Contact Button */}
          <button
            onClick={onOpenContact}
            className="btn-liquid-fill px-7 py-3.5 rounded-full font-bold text-xs cursor-pointer flex items-center gap-2 shadow-lg group"
          >
            <span>Contact me</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Anass Harboub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={ANASS_BIO.socials.behance} target="_blank" rel="noreferrer" className="hover:text-[#C4D600] transition-colors">Behance</a>
            <a href={ANASS_BIO.socials.dribbble} target="_blank" rel="noreferrer" className="hover:text-[#C4D600] transition-colors">Dribbble</a>
            <a href={ANASS_BIO.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#C4D600] transition-colors">LinkedIn</a>
            <a href={ANASS_BIO.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-[#C4D600] transition-colors">Instagram</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
