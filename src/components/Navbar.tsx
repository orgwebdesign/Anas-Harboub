import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { ArrowUpRight, Menu, X, Sparkles, Home, Settings } from 'lucide-react';
import { AnassLogo } from './AnassLogo';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; tab: PageTab }[] = [
    { label: 'Web Design', tab: 'web-design' },
    { label: 'Vibe No Code', tab: 'vibe-nocode' },
    { label: 'Infographiste', tab: 'designer' },
    { label: 'Admin', tab: 'admin' },
  ];

  // Compact state is active only when scrolled down AND user is not hovering over the navbar
  const isCompact = scrolled && !isHovered;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
        isCompact ? 'pt-2.5 pb-1' : 'pt-4 sm:pt-5 pb-2'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`mx-auto transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
          isCompact ? 'max-w-[340px] sm:max-w-[370px] w-full scale-[0.98]' : 'max-w-[1200px] w-full scale-100'
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-full transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
            isCompact
              ? 'px-4 py-2 gap-2 bg-[#0E0F13]/90 backdrop-blur-xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)] ring-1 ring-white/10'
              : 'px-5 py-3 gap-4 bg-[#141519]/80 backdrop-blur-md border border-white/10 shadow-xl'
          }`}
        >
          {/* Logo / Brand */}
          <button
            onClick={() => setActiveTab('all')}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none py-1 transition-opacity hover:opacity-90 shrink-0"
            aria-label="Anass Harboub Home"
          >
            <AnassLogo height={isCompact ? 34 : 42} />
          </button>

          {/* Desktop Links - Liquid Smooth Expansion on Hover or Top */}
          <div
            className={`hidden md:flex items-center bg-[#0B0C0E]/70 rounded-full border gap-1 transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] origin-center overflow-hidden ${
              isCompact
                ? 'max-w-0 opacity-0 scale-95 p-0 border-transparent pointer-events-none'
                : 'max-w-[700px] opacity-100 scale-100 p-1.5 border-white/10'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeTab === link.tab;
              return (
                <button
                  key={link.tab}
                  onClick={() => setActiveTab(link.tab)}
                  className={`rounded-full font-medium transition-all duration-300 cursor-pointer px-5 py-2 text-sm whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#FF8A00] text-black font-semibold shadow-[0_0_15px_rgba(255,138,0,0.3)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA Button (Contact me) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenContact}
              className={`group relative inline-flex items-center gap-2 rounded-full bg-white text-black font-semibold transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:bg-[#FF8A00] hover:text-black hover:shadow-[0_0_20px_rgba(255,138,0,0.5)] cursor-pointer whitespace-nowrap ${
                isCompact ? 'px-4 py-1.5 text-xs sm:text-sm' : 'px-5 py-2.5 text-sm'
              }`}
            >
              <span>Contact me</span>
              <div
                className={`rounded-full bg-black/10 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all duration-500 ${
                  isCompact ? 'w-5 h-5' : 'w-6 h-6'
                }`}
              >
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </button>

            {/* Mobile Hamburger / Toggle Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isCompact ? 'flex' : 'md:hidden flex'} p-2 rounded-full bg-white/5 text-gray-200 hover:text-white border border-white/10 transition-colors`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#141519] border border-white/10 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2">
            <button
              onClick={() => {
                setActiveTab('all');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'all' ? 'bg-[#FF8A00]/20 text-[#FF8A00] border border-[#FF8A00]/30' : 'text-gray-300 hover:bg-white/5'
              }`}
            >
              <Home className="w-4 h-4 text-[#FF8A00]" />
              <span>All Overview</span>
            </button>

            {navLinks.map((link) => (
              <button
                key={link.tab}
                onClick={() => {
                  setActiveTab(link.tab);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === link.tab
                    ? 'bg-[#FF8A00] text-black font-semibold'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-[#FF8A00] text-black font-bold text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Contact me</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
