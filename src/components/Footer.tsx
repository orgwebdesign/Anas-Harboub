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
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand Left */}
          <div>
            <div className="mb-2">
              <AnassLogo height={42} />
            </div>
            <p className="text-sm text-gray-400 font-medium">
              Designer &amp; Digital Creative based in Morocco
            </p>
          </div>

          {/* Nav Links (3 Pages) */}
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => setActiveTab('web-design')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'web-design' ? 'text-[#FF8A00]' : 'text-gray-300 hover:text-white'
              }`}
            >
              Web Design
            </button>
            <button
              onClick={() => setActiveTab('vibe-nocode')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'vibe-nocode' ? 'text-[#FF8A00]' : 'text-gray-300 hover:text-white'
              }`}
            >
              Vibe No Code
            </button>
            <button
              onClick={() => setActiveTab('designer')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'designer' ? 'text-[#FF8A00]' : 'text-gray-300 hover:text-white'
              }`}
            >
              Infographiste
            </button>
          </div>

          {/* Contact Button */}
          <button
            onClick={onOpenContact}
            className="px-6 py-3 rounded-full bg-[#FF8A00] text-black font-bold text-xs hover:bg-[#ffa026] transition-all cursor-pointer flex items-center gap-2 shadow-lg"
          >
            <span>Contact me</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Anass Harboub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={ANASS_BIO.socials.behance} target="_blank" rel="noreferrer" className="hover:text-[#FF8A00] transition-colors">Behance</a>
            <a href={ANASS_BIO.socials.dribbble} target="_blank" rel="noreferrer" className="hover:text-[#FF8A00] transition-colors">Dribbble</a>
            <a href={ANASS_BIO.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#FF8A00] transition-colors">LinkedIn</a>
            <a href={ANASS_BIO.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-[#FF8A00] transition-colors">Instagram</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
