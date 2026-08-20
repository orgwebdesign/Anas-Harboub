import React from 'react';
import { LogoLoop, LogoItem } from './LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiFramer,
  SiWebflow,
  SiJavascript,
  SiVite,
  SiGithub,
  SiVercel,
  SiWordpress,
} from 'react-icons/si';

const itemContainerClass =
  'flex items-center gap-2.5 h-8 text-gray-300 hover:text-[#FF8A00] transition-colors shrink-0';

const techLogos: LogoItem[] = [
  {
    node: (
      <div className={itemContainerClass}>
        <span className="text-[#F24E1E] flex items-center justify-center shrink-0">
          <SiFigma size={24} />
        </span>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">Figma</span>
      </div>
    ),
    title: 'Figma',
  },
  {
    node: (
      <div className={itemContainerClass}>
        <span className="text-[#61DAFB] flex items-center justify-center shrink-0">
          <SiReact size={24} />
        </span>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">React</span>
      </div>
    ),
    title: 'React',
  },
  {
    node: (
      <div className={itemContainerClass}>
        <span className="text-white flex items-center justify-center shrink-0">
          <SiNextdotjs size={24} />
        </span>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">Next.js</span>
      </div>
    ),
    title: 'Next.js',
  },
  {
    node: (
      <div className={itemContainerClass}>
        <span className="text-[#3178C6] flex items-center justify-center shrink-0">
          <SiTypescript size={24} />
        </span>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">TypeScript</span>
      </div>
    ),
    title: 'TypeScript',
  },
  {
    node: (
      <div className={itemContainerClass}>
        <span className="text-[#06B6D4] flex items-center justify-center shrink-0">
          <SiTailwindcss size={24} />
        </span>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">Tailwind CSS</span>
      </div>
    ),
    title: 'Tailwind CSS',
  },
  {
    node: (
      <div className={itemContainerClass}>
        <span className="text-[#0055FF] flex items-center justify-center shrink-0">
          <SiFramer size={24} />
        </span>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">Framer</span>
      </div>
    ),
    title: 'Framer',
  },
  {
    node: (
      <div className={itemContainerClass}>
        <span className="text-[#4353FF] flex items-center justify-center shrink-0">
          <SiWebflow size={24} />
        </span>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">Webflow</span>
      </div>
    ),
    title: 'Webflow',
  },
  // Adobe Photoshop
  {
    node: (
      <div className={itemContainerClass}>
        <div className="w-6 h-6 rounded bg-[#001E36] border border-[#31A8FF]/50 text-[#31A8FF] font-black text-[11px] flex items-center justify-center shadow-sm shrink-0 leading-none">
          Ps
        </div>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">Photoshop</span>
      </div>
    ),
    title: 'Photoshop',
  },
  // Adobe Illustrator
  {
    node: (
      <div className={itemContainerClass}>
        <div className="w-6 h-6 rounded bg-[#330000] border border-[#FF9A00]/50 text-[#FF9A00] font-black text-[11px] flex items-center justify-center shadow-sm shrink-0 leading-none">
          Ai
        </div>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">Illustrator</span>
      </div>
    ),
    title: 'Illustrator',
  },
  // Adobe Premiere Pro
  {
    node: (
      <div className={itemContainerClass}>
        <div className="w-6 h-6 rounded bg-[#00005C] border border-[#EA77FF]/50 text-[#EA77FF] font-black text-[11px] flex items-center justify-center shadow-sm shrink-0 leading-none">
          Pr
        </div>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">Premiere Pro</span>
      </div>
    ),
    title: 'Premiere Pro',
  },
  // ChatGPT
  {
    node: (
      <div className={itemContainerClass}>
        <div className="w-6 h-6 rounded-full bg-[#10A37F]/10 border border-[#10A37F]/50 text-[#10A37F] flex items-center justify-center shrink-0">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.796.796 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.067L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zm-1.04-10.22A4.477 4.477 0 0 1 4.9 6.136v5.688a.771.771 0 0 0 .388.67l5.843 3.375-2.023 1.168a.076.076 0 0 1-.073.005l-4.839-2.795a4.504 4.504 0 0 1-1.636-6.143zM17.85 11.2l-5.843-3.37 2.023-1.168a.076.076 0 0 1 .073-.005l4.839 2.795a4.5 4.5 0 0 1 1.636 6.143 4.477 4.477 0 0 1-2.34 1.948V11.87a.771.771 0 0 0-.388-.67zm2.55-2.482l-.141-.085-4.784-2.759a.771.771 0 0 0-.78 0L8.852 9.243V6.911a.08.08 0 0 1 .033-.067l4.84-2.791a4.5 4.5 0 0 1 6.675 4.665zM10.74 1.57a4.5 4.5 0 0 1 4.494 4.494v2.758l-2.02-1.168a.071.071 0 0 1-.038-.052V2.02a4.504 4.504 0 0 1-2.436-.45zm-.507 8.354l3.072-1.771 3.07 1.771v3.542l-3.07 1.773-3.072-1.773v-3.542z"/>
          </svg>
        </div>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">ChatGPT</span>
      </div>
    ),
    title: 'ChatGPT',
  },
  // Google Gemini
  {
    node: (
      <div className={itemContainerClass}>
        <svg className="w-6 h-6 text-[#4E88FF] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
        </svg>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">Gemini</span>
      </div>
    ),
    title: 'Gemini',
  },
  // OpenCode
  {
    node: (
      <div className={itemContainerClass}>
        <div className="w-6 h-6 rounded bg-[#131E19] border border-[#00F5A0]/50 text-[#00F5A0] font-mono font-bold text-[10px] flex items-center justify-center shrink-0 leading-none">
          &lt;/&gt;
        </div>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">OpenCode</span>
      </div>
    ),
    title: 'OpenCode',
  },
  {
    node: (
      <div className={itemContainerClass}>
        <span className="text-[#F7DF1E] flex items-center justify-center shrink-0">
          <SiJavascript size={24} />
        </span>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">JavaScript</span>
      </div>
    ),
    title: 'JavaScript',
  },
  {
    node: (
      <div className={itemContainerClass}>
        <span className="text-[#646CFF] flex items-center justify-center shrink-0">
          <SiVite size={24} />
        </span>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">Vite</span>
      </div>
    ),
    title: 'Vite',
  },
  {
    node: (
      <div className={itemContainerClass}>
        <span className="text-white flex items-center justify-center shrink-0">
          <SiVercel size={24} />
        </span>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">Vercel</span>
      </div>
    ),
    title: 'Vercel',
  },
  {
    node: (
      <div className={itemContainerClass}>
        <span className="text-white flex items-center justify-center shrink-0">
          <SiGithub size={24} />
        </span>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">GitHub</span>
      </div>
    ),
    title: 'GitHub',
  },
  {
    node: (
      <div className={itemContainerClass}>
        <span className="text-[#21759B] flex items-center justify-center shrink-0">
          <SiWordpress size={24} />
        </span>
        <span className="text-sm font-bold font-mono text-gray-300 leading-none">WordPress</span>
      </div>
    ),
    title: 'WordPress',
  },
];

export const TechLogosSection: React.FC = () => {
  return (
    <section className="py-8 bg-[#0B0C0E] border-y border-white/5 overflow-hidden flex items-center">
      <LogoLoop
        logos={techLogos}
        speed={70}
        direction="left"
        logoHeight={32}
        gap={48}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#0B0C0E"
        ariaLabel="Technology tools and stack"
      />
    </section>
  );
};
