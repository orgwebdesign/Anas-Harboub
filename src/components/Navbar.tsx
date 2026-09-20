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
    { label: 'Graphics Designer', tab: 'designer' },
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
          scrolled ? 'max-w-[80px] sm:max-w-[90px] w-full scale-100' : 'max-w-[400px] sm:max-w-[440px] w-full scale-100'
        }`}
      >
        <nav
          className={`flex items-center rounded-full transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? 'p-2 justify-center bg-[#0E0F13]/90 backdrop-blur-xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)] ring-1 ring-white/10'
              : 'px-5 py-2.5 justify-between gap-6 sm:gap-8 bg-[#141519]/80 backdrop-blur-md border border-white/10 shadow-xl'
          }`}
        >
          {/* Logo / Brand - Always visible, clicking smoothly returns to top */}
          <button
            onClick={() => {
              setActiveTab('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center justify-center group cursor-pointer focus:outline-none transition-transform hover:scale-105 shrink-0"
            aria-label="Anass Harboub Home"
          >
            <AnassLogo height={scrolled ? 34 : 42} />
          </button>

          {/* CTA Button (Contact me) & Mobile Menu: smoothly hidden when scrolled */}
          <div
            className={`transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex items-center shrink-0 ${
              scrolled
                ? 'max-w-0 opacity-0 pointer-events-none p-0 scale-90'
                : 'max-w-[240px] opacity-100 scale-100 gap-3'
            }`}
          >
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 rounded-full bg-white text-black font-semibold transition-all duration-500 hover:bg-[#C4D600] hover:text-black hover:shadow-[0_0_20px_rgba(196, 214, 0,0.5)] cursor-pointer whitespace-nowrap px-5 py-2.5 text-sm"
            >
              <span>Contact me</span>
              <div className="rounded-full bg-black/10 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all duration-500 w-6 h-6">
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </button>

            {/* Mobile Hamburger / Toggle Menu (only visible at top on mobile) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex p-2 rounded-full bg-white/5 text-gray-200 hover:text-white border border-white/10 transition-colors"
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
                activeTab === 'all' ? 'bg-[#C4D600]/20 text-[#C4D600] border border-[#C4D600]/30' : 'text-gray-300 hover:bg-white/5'
              }`}
            >
              <Home className="w-4 h-4 text-[#C4D600]" />
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
                    ? 'bg-[#C4D600] text-black font-semibold'
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
                className="w-full py-3 rounded-xl bg-[#C4D600] text-black font-bold text-center flex items-center justify-center gap-2 shadow-lg"
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
