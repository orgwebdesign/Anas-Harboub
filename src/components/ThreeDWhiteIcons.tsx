import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * 3D White Figma Icon
 * Volumetric 3D clay/ceramic finish with multi-layered depth,
 * specular rim highlights, and ambient occlusion.
 */
export const Figma3DIcon: React.FC<IconProps> = ({ className = '', size = 64 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 transform-gpu hover:scale-110 hover:-translate-y-1 drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)] hover:drop-shadow-[0_16px_32px_rgba(255,255,255,0.25)] ${className}`}
    >
      <defs>
        {/* Soft 3D Clay Drop Shadow */}
        <filter id="figma-3d-shadow" x="-20%" y="-10%" width="140%" height="150%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.5" />
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.3" />
        </filter>

        {/* 3D Extrusion Gradient */}
        <linearGradient id="figma-extrusion" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* 3D White Face Gradient */}
        <linearGradient id="figma-white-face" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#F8FAFC" />
          <stop offset="85%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>

        {/* Specular Radial Highlight */}
        <radialGradient id="figma-specular" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g filter="url(#figma-3d-shadow)">
        {/* 1. 3D EXTRUSION / DEPTH LAYER (Y + 4.5) */}
        <g fill="url(#figma-extrusion)" transform="translate(0, 4.5)">
          {/* Top-Left */}
          <path d="M 46,18 H 60 V 46 H 46 A 14,14 0 0 1 32,32 A 14,14 0 0 1 46,18 Z" />
          {/* Top-Right */}
          <path d="M 60,18 H 74 A 14,14 0 0 1 88,32 A 14,14 0 0 1 74,46 H 60 V 18 Z" />
          {/* Mid-Left */}
          <path d="M 46,46 H 60 V 74 H 46 A 14,14 0 0 1 32,60 A 14,14 0 0 1 46,46 Z" />
          {/* Mid-Right (Circle) */}
          <circle cx="74" cy="60" r="14" />
          {/* Bottom-Left */}
          <path d="M 46,74 H 60 V 88 A 14,14 0 0 1 46,102 A 14,14 0 0 1 32,88 A 14,14 0 0 1 46,74 Z" />
        </g>

        {/* 2. 3D FRONT WHITE FACES */}
        <g fill="url(#figma-white-face)">
          {/* Top-Left */}
          <path d="M 46,18 H 60 V 46 H 46 A 14,14 0 0 1 32,32 A 14,14 0 0 1 46,18 Z" />
          {/* Top-Right */}
          <path d="M 60,18 H 74 A 14,14 0 0 1 88,32 A 14,14 0 0 1 74,46 H 60 V 18 Z" />
          {/* Mid-Left */}
          <path d="M 46,46 H 60 V 74 H 46 A 14,14 0 0 1 32,60 A 14,14 0 0 1 46,46 Z" />
          {/* Mid-Right (Circle) */}
          <circle cx="74" cy="60" r="14" />
          {/* Bottom-Left */}
          <path d="M 46,74 H 60 V 88 A 14,14 0 0 1 46,102 A 14,14 0 0 1 32,88 A 14,14 0 0 1 46,74 Z" />
        </g>

        {/* 3. SPECULAR HIGHLIGHT OVERLAYS FOR VOLUMETRIC ROUNDING */}
        <g fill="url(#figma-specular)" pointerEvents="none">
          <circle cx="44" cy="28" r="10" />
          <circle cx="72" cy="28" r="10" />
          <circle cx="44" cy="56" r="10" />
          <circle cx="72" cy="56" r="10" />
          <circle cx="44" cy="84" r="10" />
        </g>

        {/* 4. CRISP WHITE SPECULAR RIM STROKES */}
        <g stroke="#FFFFFF" strokeWidth="1.2" fill="none" opacity="0.85" pointerEvents="none">
          <path d="M 34,30 A 14,14 0 0 1 46,19 H 59" />
          <path d="M 61,19 H 74 A 14,14 0 0 1 86,30" />
          <path d="M 34,58 A 14,14 0 0 1 46,47 H 59" />
          <path d="M 62,50 A 14,14 0 0 1 84,52" />
          <path d="M 34,86 A 14,14 0 0 1 46,75 H 59" />
        </g>
      </g>
    </svg>
  );
};

/**
 * 3D White Framer Icon
 * Layered geometric facets with beveled 3D extrusion,
 * directional lighting, and pure white ceramic/glass look.
 */
export const Framer3DIcon: React.FC<IconProps> = ({ className = '', size = 64 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 transform-gpu hover:scale-110 hover:-translate-y-1 drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)] hover:drop-shadow-[0_16px_32px_rgba(255,255,255,0.25)] ${className}`}
    >
      <defs>
        <filter id="framer-3d-shadow" x="-20%" y="-10%" width="140%" height="150%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.5" />
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.3" />
        </filter>

        <linearGradient id="framer-ext-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Facet 1 (Top) - High Light */}
        <linearGradient id="framer-facet-1" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        {/* Facet 2 (Middle) - Mid Tone with subtle bevel */}
        <linearGradient id="framer-facet-2" x1="0.9" y1="0" x2="0.1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>

        {/* Facet 3 (Bottom) - Lower chevron */}
        <linearGradient id="framer-facet-3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>

      <g filter="url(#framer-3d-shadow)">
        {/* 1. 3D EXTRUDED BEVEL UNDERNEATH (Y + 4.5) */}
        <g fill="url(#framer-ext-grad)" transform="translate(0, 4.5)">
          <path d="M 34,22 H 86 L 60,48 H 34 Z" />
          <path d="M 34,48 H 60 L 86,74 H 34 Z" />
          <path d="M 34,74 H 60 L 34,100 Z" />
        </g>

        {/* 2. 3D WHITE FACETS */}
        {/* Facet 3 (Bottom) */}
        <path d="M 34,74 H 60 L 34,100 Z" fill="url(#framer-facet-3)" />

        {/* Facet 2 (Middle) */}
        <path d="M 34,48 H 60 L 86,74 H 34 Z" fill="url(#framer-facet-2)" />

        {/* Facet 1 (Top) */}
        <path d="M 34,22 H 86 L 60,48 H 34 Z" fill="url(#framer-facet-1)" />

        {/* 3. SPECULAR RIM HIGHLIGHTS */}
        <path d="M 35,23 H 84" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" opacity="0.95" />
        <path d="M 35,49 H 58" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
        <path d="M 35,75 H 58" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
        <path d="M 35,24 V 98" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  );
};

/**
 * 3D White Adobe XD Icon
 * Volumetric squircle base with 3D extrusion,
 * embossed 3D "Xd" letters, specular edge bevel, and glossy white finish.
 */
export const AdobeXd3DIcon: React.FC<IconProps> = ({ className = '', size = 64 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 transform-gpu hover:scale-110 hover:-translate-y-1 drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)] hover:drop-shadow-[0_16px_32px_rgba(255,255,255,0.25)] ${className}`}
    >
      <defs>
        <filter id="xd-3d-shadow" x="-20%" y="-10%" width="140%" height="150%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.5" />
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.3" />
        </filter>

        <linearGradient id="xd-ext-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        <linearGradient id="xd-white-base" x1="0.15" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F8FAFC" />
          <stop offset="80%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>

        <linearGradient id="xd-letter-depth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
      </defs>

      <g filter="url(#xd-3d-shadow)">
        {/* 1. 3D SQUIRCLE EXTRUSION / BASE DEPTH (Y + 5) */}
        <rect
          x="24"
          y="24"
          width="72"
          height="72"
          rx="18"
          fill="url(#xd-ext-grad)"
          transform="translate(0, 5)"
        />

        {/* 2. 3D FRONT WHITE SQUIRCLE FACE */}
        <rect
          x="24"
          y="24"
          width="72"
          height="72"
          rx="18"
          fill="url(#xd-white-base)"
        />

        {/* 3. SPECULAR TOP & INNER RIM HIGHLIGHT */}
        <rect
          x="25.5"
          y="25.5"
          width="69"
          height="69"
          rx="16.5"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          fill="none"
          opacity="0.9"
        />

        {/* 4. EMBOSSED 3D "Xd" GLYPH */}
        {/* Drop shadow / inset depth for the letters */}
        <g stroke="url(#xd-letter-depth)" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(0, 1.5)" opacity="0.6">
          {/* X */}
          <line x1="42" y1="46" x2="56" y2="74" />
          <line x1="56" y1="46" x2="42" y2="74" />
          {/* d stem & bowl */}
          <line x1="77" y1="40" x2="77" y2="74" />
          <path d="M 77,59 A 9.5,9.5 0 1 0 77,74" fill="none" />
        </g>

        {/* Front 3D Letter Strokes (Deep slate-contrast on white tile for unmistakable XD readability) */}
        <g stroke="#0F172A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          {/* X */}
          <line x1="42" y1="46" x2="56" y2="74" />
          <line x1="56" y1="46" x2="42" y2="74" />
          {/* d stem & bowl */}
          <line x1="77" y1="40" x2="77" y2="74" />
          <path d="M 77,59 A 9.5,9.5 0 1 0 77,74" fill="none" />
        </g>

        {/* Top white specular glint on letters */}
        <g stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" pointerEvents="none">
          <line x1="43" y1="46" x2="55" y2="72" />
          <line x1="78" y1="41" x2="78" y2="60" />
        </g>
      </g>
    </svg>
  );
};
