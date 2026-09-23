import React, { useState } from 'react';
import { PageTab } from '../types';

interface RightFixedToggleProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  isContactOpen?: boolean;
  onOpenContact: () => void;
}

export const RightFixedToggle: React.FC<RightFixedToggleProps> = ({
  activeTab,
  setActiveTab,
  isContactOpen = false,
  onOpenContact,
}) => {
  // Desktop state:
  // In normal stage ('all'), ALL buttons are gray (#b2b2b2).
  // Clicking any button switches its color to orange (#c4d600).
  const isDot1Active = activeTab === 'web-design';
  const isDot2Active = activeTab === 'vibe-nocode';
  const isDot3Active = activeTab === 'designer';

  const [hoveredItem, setHoveredItem] = useState<'web-design' | 'vibe-nocode' | 'designer' | 'contact' | null>(null);

  const handleDotClick = (tab: PageTab) => {
    if (activeTab === tab) {
      // Toggle back to normal state ('all') so all buttons return to gray
      setActiveTab('all');
    } else {
      setActiveTab(tab);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Page navigation"
      className="fixed z-50 flex flex-col items-center select-none pointer-events-auto bottom-6 right-5 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-7"
    >
      {/* 3-Dot Vertical White Pill Capsule Container: HIDDEN ON MOBILE (hidden md:flex) */}
      <div className="relative hidden md:flex items-center justify-center">
        
        {/* "Clic her" Arrow: Desktop-only, animates by opacity & soft glow without changing size */}
        <div className="hidden md:block absolute bottom-[calc(100%+7px)] right-[15px] w-[115px] sm:w-[125px] pointer-events-none select-none animate-text-arrow-pulse">
          <svg viewBox="0 0 100.46 64.8" className="w-full h-auto overflow-visible">
            <text
              fill="#fefefe"
              transform="translate(6 17.35) rotate(3.73)"
              className="font-ananda text-[15.5px] sm:text-[16.5px] font-bold select-none drop-shadow-[0_2px_8px_rgba(255,255,255,0.45)]"
            >
              Click here
            </text>
            <g fill="#ffffff">
              <path d="M91.01,54c-1.26-4.78-3.42-8.3-6.59-10.76-1.39-1.14-2.97-2.27-4.65-3.47-3.56-2.54-7.42-5.29-10-8.65-10.28,3.61-20.74-.17-26.06-2.76l.2-.42c5.23,2.54,15.48,6.25,25.56,2.78-1.45-1.99-2.45-4.2-2.68-6.7-.13-3.05,1.35-5.98,3.69-7.3,1.29-.75,2.86-.87,4.32-.32,1.53.58,2.7,1.78,3.21,3.29.58,1.75.44,3.51-.43,5.23-1.51,3.02-4.81,5.09-7.36,6.03,2.54,3.25,6.32,5.94,9.81,8.43,1.69,1.2,3.28,2.34,4.67,3.49,3.25,2.53,5.46,6.13,6.75,11.01l-.45.12ZM74.03,16.65c-1.14-.27-2.32-.1-3.31.47-2.19,1.24-3.58,4-3.46,6.86.22,2.44,1.22,4.61,2.67,6.57,2.48-.89,5.76-2.9,7.24-5.85.81-1.61.94-3.25.4-4.87-.46-1.38-1.53-2.47-2.93-3-.2-.08-.41-.14-.61-.19Z" />
              <path d="M92.26,59.51c-1.48-2.42-3.76-5.34-5.91-7.01l4.68.73,4.07-2.44c-1.36,2.35-2.38,5.92-2.84,8.72Z" />
            </g>
          </svg>
        </div>

        {/* Tooltip for Dot 1 (Web Design) */}
        {hoveredItem === 'web-design' && (
          <div className="absolute right-full top-[21.5%] -translate-y-1/2 mr-4 pointer-events-none font-ananda whitespace-nowrap z-50 animate-in fade-in slide-in-from-right-2 duration-150">
            <span className="text-[#c4d600] text-2xl sm:text-3xl font-bold drop-shadow-[0_0_15px_rgba(196, 214, 0,0.85)]">
              Web Design
            </span>
          </div>
        )}

        {/* Tooltip for Dot 2 (Vibe no Code) */}
        {hoveredItem === 'vibe-nocode' && (
          <div className="absolute right-full top-[50.3%] -translate-y-1/2 mr-4 pointer-events-none font-ananda whitespace-nowrap z-50 animate-in fade-in slide-in-from-right-2 duration-150">
            <span className="text-[#c4d600] text-2xl sm:text-3xl font-bold drop-shadow-[0_0_15px_rgba(196, 214, 0,0.85)]">
              Vibe no Code
            </span>
          </div>
        )}

        {/* Tooltip for Dot 3 (Graphics Designer) */}
        {hoveredItem === 'designer' && (
          <div className="absolute right-full top-[79.1%] -translate-y-1/2 mr-4 pointer-events-none font-ananda whitespace-nowrap z-50 animate-in fade-in slide-in-from-right-2 duration-150">
            <span className="text-[#c4d600] text-2xl sm:text-3xl font-bold drop-shadow-[0_0_15px_rgba(196, 214, 0,0.85)]">
              Graphics Designer
            </span>
          </div>
        )}

        {/* 3-Dot Vertical White Pill Capsule Container (Strictly constant size) */}
        <div className="w-[50px] sm:w-[56px] drop-shadow-[0_12px_35px_rgba(0,0,0,0.85)]">
          <svg viewBox="0 0 32.57 75.09" className="w-full h-auto overflow-visible block">
            {/* White Pill Capsule Container from SVG */}
            <path
              fill="#fefefe"
              d="M2.65,15.75v44.03c0,2.87.95,5.48,2.51,7.61,2.54,3.46,6.74,5.65,11.22,5.59,4.65-.07,8.85-2.52,11.25-6.24,1.32-2.05,2.1-4.5,2.1-7.14V16c0-7.59-6.25-13.42-13.53-13.45-7.18-.02-13.56,5.74-13.56,13.2ZM16.18,68.37c-4.96,0-8.98-4.02-8.98-8.98s4.02-8.97,8.98-8.97,8.97,4.02,8.97,8.97-4.02,8.98-8.97,8.98Z"
            />

            {/* Dot 1 (Web Design) - Interactive Group */}
            <g
              className="cursor-pointer group"
              onMouseEnter={() => setHoveredItem('web-design')}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleDotClick('web-design')}
            >
              {/* Generous hit target area */}
              <rect x="0" y="0" width="32.57" height="26" fill="transparent" />
              
              {/* Base circle: gray (#b2b2b2) when inactive, orange (#c4d600) when active */}
              <circle
                cx="16.19"
                cy="16.13"
                r="8.97"
                fill={isDot1Active ? '#c4d600' : '#b2b2b2'}
                className="transition-colors duration-300 transform origin-center"
              />

              {/* Orange beacon pulse overlay: strictly animates opacity, NO size change */}
              {!isDot1Active && (
                <circle
                  cx="16.19"
                  cy="16.13"
                  r="8.97"
                  fill="#c4d600"
                  className="animate-orange-pulse pointer-events-none"
                />
              )}

              {/* White dot indicator when active */}
              {isDot1Active && <circle cx="16.19" cy="16.13" r="2.61" fill="#fefefe" />}
            </g>

            {/* Dot 2 (Vibe no Code) - Interactive Group */}
            <g
              className="cursor-pointer group"
              onMouseEnter={() => setHoveredItem('vibe-nocode')}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleDotClick('vibe-nocode')}
            >
              {/* Generous hit target area */}
              <rect x="0" y="26" width="32.57" height="22" fill="transparent" />
              
              {/* Base circle */}
              <circle
                cx="16.19"
                cy="37.77"
                r="8.97"
                fill={isDot2Active ? '#c4d600' : '#b2b2b2'}
                className="transition-colors duration-300 transform origin-center"
              />

              {/* Orange beacon pulse overlay: strictly animates opacity, NO size change */}
              {!isDot2Active && (
                <circle
                  cx="16.19"
                  cy="37.77"
                  r="8.97"
                  fill="#c4d600"
                  className="animate-orange-pulse pointer-events-none"
                />
              )}

              {/* White dot indicator when active */}
              {isDot2Active && <circle cx="16.19" cy="37.77" r="2.61" fill="#fefefe" />}
            </g>

            {/* Dot 3 (Graphiste) - Interactive Group */}
            <g
              className="cursor-pointer group"
              onMouseEnter={() => setHoveredItem('designer')}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleDotClick('designer')}
            >
              {/* Generous hit target area */}
              <rect x="0" y="48" width="32.57" height="27" fill="transparent" />
              
              {/* Base circle */}
              <circle
                cx="16.19"
                cy="59.40"
                r="8.97"
                fill={isDot3Active ? '#c4d600' : '#b2b2b2'}
                className="transition-colors duration-300 transform origin-center"
              />

              {/* Orange beacon pulse overlay: strictly animates opacity, NO size change */}
              {!isDot3Active && (
                <circle
                  cx="16.19"
                  cy="59.40"
                  r="8.97"
                  fill="#c4d600"
                  className="animate-orange-pulse pointer-events-none"
                />
              )}

              {/* White dot indicator when active */}
              {isDot3Active && <circle cx="16.19" cy="59.40" r="2.61" fill="#fefefe" />}
            </g>
          </svg>
        </div>
      </div>

      {/* Contact Me Button (4th Button):
          - On Mobile: Placed at bottom right ("on bas") and colored ORANGE (#c4d600).
          - On Desktop: Base gray (#b2b2b2) with slow orange opacity beacon overlay. NO size change! */}
      <div className="relative flex items-center justify-center mt-2 md:mt-2">
        {/* Tooltip for Contact */}
        {hoveredItem === 'contact' && (
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 whitespace-nowrap pointer-events-none font-ananda z-50 hidden md:block animate-in fade-in slide-in-from-right-2 duration-150">
            <span className="text-[#c4d600] text-2xl sm:text-3xl font-bold drop-shadow-[0_0_15px_rgba(196, 214, 0,0.85)]">
              Contact Me
            </span>
          </div>
        )}

        <button
          onClick={onOpenContact}
          onMouseEnter={() => setHoveredItem('contact')}
          onMouseLeave={() => setHoveredItem(null)}
          className="cursor-pointer focus:outline-none drop-shadow-[0_8px_20px_rgba(0,0,0,0.65)] block"
          title="Contact Me"
          aria-label="Contact Me"
        >
          {/* Exact Smile SVG:
              - Mobile: ALWAYS orange (#c4d600)
              - Desktop: gray (#b2b2b2) in normal stage with orange opacity overlay beacon pulsing slowly */}
          <div className="w-[50px] sm:w-[56px] flex items-center justify-center">
            <svg viewBox="0 0 33.26 32.91" className="w-full h-auto overflow-visible block">
              {/* White smile background */}
              <rect fill="#fefefe" x="7.18" y="15" width="17.81" height="8.9" />
              
              {/* Base bubble body: Orange on mobile, dynamic (gray/orange) on desktop */}
              <path
                fill="currentColor"
                className={`transition-colors duration-300 ${
                  isContactOpen
                    ? 'text-[#c4d600]'
                    : 'text-[#c4d600] md:text-[#b2b2b2]'
                }`}
                d="M28.83,12.77c-1.51-6.04-6.91-10-13.01-9.65-5.85.34-11.07,4.77-11.74,10.87-.34,3.12-.44,11.41.12,14.5l12.9-.08c8.07-.05,13.64-8.03,11.73-15.65ZM15.83,23.05c-4.19-.2-7.66-4.07-5.86-4.76,1.36-.53,2.09,2.85,5.9,2.98,4.25.14,5.03-3.08,6.2-2.91,2.55.36-1.49,4.94-6.24,4.7Z"
              />

              {/* Orange opacity beacon overlay on desktop (pure opacity animation, NO size change) */}
              {!isContactOpen && (
                <path
                  fill="#c4d600"
                  className="hidden md:block animate-orange-pulse pointer-events-none"
                  d="M28.83,12.77c-1.51-6.04-6.91-10-13.01-9.65-5.85.34-11.07,4.77-11.74,10.87-.34,3.12-.44,11.41.12,14.5l12.9-.08c8.07-.05,13.64-8.03,11.73-15.65ZM15.83,23.05c-4.19-.2-7.66-4.07-5.86-4.76,1.36-.53,2.09,2.85,5.9,2.98,4.25.14,5.03-3.08,6.2-2.91,2.55.36-1.49,4.94-6.24,4.7Z"
                />
              )}
            </svg>
          </div>
        </button>
      </div>
    </aside>
  );
};
