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
  SiSupabase,
  SiPostgresql,
  SiNodedotjs,
} from 'react-icons/si';

const itemContainerClass =
  'flex items-center justify-center h-10 w-10 text-gray-400 hover:text-white hover:scale-115 transition-all duration-300 shrink-0 cursor-pointer group relative';

const techLogos: LogoItem[] = [
  {
    node: (
      <div className={itemContainerClass} title="Figma">
        <span className="text-[#F24E1E] group-hover:drop-shadow-[0_0_12px_rgba(242,78,30,0.6)] transition-all">
          <SiFigma size={32} />
        </span>
      </div>
    ),
    title: 'Figma',
  },
  {
    node: (
      <div className={itemContainerClass} title="React">
        <span className="text-[#61DAFB] group-hover:drop-shadow-[0_0_12px_rgba(97,218,251,0.6)] transition-all">
          <SiReact size={32} />
        </span>
      </div>
    ),
    title: 'React',
  },
  {
    node: (
      <div className={itemContainerClass} title="Next.js">
        <span className="text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all">
          <SiNextdotjs size={32} />
        </span>
      </div>
    ),
    title: 'Next.js',
  },
  {
    node: (
      <div className={itemContainerClass} title="TypeScript">
        <span className="text-[#3178C6] group-hover:drop-shadow-[0_0_12px_rgba(49,120,198,0.6)] transition-all">
          <SiTypescript size={30} />
        </span>
      </div>
    ),
    title: 'TypeScript',
  },
  {
    node: (
      <div className={itemContainerClass} title="Tailwind CSS">
        <span className="text-[#06B6D4] group-hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.6)] transition-all">
          <SiTailwindcss size={32} />
        </span>
      </div>
    ),
    title: 'Tailwind CSS',
  },
  {
    node: (
      <div className={itemContainerClass} title="Framer">
        <span className="text-[#0055FF] group-hover:drop-shadow-[0_0_12px_rgba(0,85,255,0.6)] transition-all">
          <SiFramer size={30} />
        </span>
      </div>
    ),
    title: 'Framer',
  },
  {
    node: (
      <div className={itemContainerClass} title="Webflow">
        <span className="text-[#4353FF] group-hover:drop-shadow-[0_0_12px_rgba(67,83,255,0.6)] transition-all">
          <SiWebflow size={32} />
        </span>
      </div>
    ),
    title: 'Webflow',
  },
  {
    node: (
      <div className={itemContainerClass} title="Adobe Photoshop">
        <div className="w-8 h-8 rounded-lg bg-[#001E36] border border-[#31A8FF]/60 text-[#31A8FF] font-black text-xs flex items-center justify-center shadow-md group-hover:drop-shadow-[0_0_12px_rgba(49,168,255,0.7)] transition-all">
          Ps
        </div>
      </div>
    ),
    title: 'Adobe Photoshop',
  },
  {
    node: (
      <div className={itemContainerClass} title="Adobe Illustrator">
        <div className="w-8 h-8 rounded-lg bg-[#330000] border border-[#FF9A00]/60 text-[#FF9A00] font-black text-xs flex items-center justify-center shadow-md group-hover:drop-shadow-[0_0_12px_rgba(255,154,0,0.7)] transition-all">
          Ai
        </div>
      </div>
    ),
    title: 'Adobe Illustrator',
  },
  {
    node: (
      <div className={itemContainerClass} title="Adobe After Effects">
        <div className="w-8 h-8 rounded-lg bg-[#00005C] border border-[#9999FF]/60 text-[#9999FF] font-black text-xs flex items-center justify-center shadow-md group-hover:drop-shadow-[0_0_12px_rgba(153,153,255,0.7)] transition-all">
          Ae
        </div>
      </div>
    ),
    title: 'Adobe After Effects',
  },
  {
    node: (
      <div className={itemContainerClass} title="Adobe Premiere Pro">
        <div className="w-8 h-8 rounded-lg bg-[#00005C] border border-[#EA77FF]/60 text-[#EA77FF] font-black text-xs flex items-center justify-center shadow-md group-hover:drop-shadow-[0_0_12px_rgba(234,119,255,0.7)] transition-all">
          Pr
        </div>
      </div>
    ),
    title: 'Adobe Premiere Pro',
  },
  {
    node: (
      <div className={itemContainerClass} title="OpenAI / ChatGPT">
        <span className="text-[#10A37F] group-hover:drop-shadow-[0_0_12px_rgba(16,163,127,0.6)] transition-all">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.796.796 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.067L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zm-1.04-10.22A4.477 4.477 0 0 1 4.9 6.136v5.688a.771.771 0 0 0 .388.67l5.843 3.375-2.023 1.168a.076.076 0 0 1-.073.005l-4.839-2.795a4.504 4.504 0 0 1-1.636-6.143zM17.85 11.2l-5.843-3.37 2.023-1.168a.076.076 0 0 1 .073-.005l4.839 2.795a4.5 4.5 0 0 1 1.636 6.143 4.477 4.477 0 0 1-2.34 1.948V11.87a.771.771 0 0 0-.388-.67zm2.55-2.482l-.141-.085-4.784-2.759a.771.771 0 0 0-.78 0L8.852 9.243V6.911a.08.08 0 0 1 .033-.067l4.84-2.791a4.5 4.5 0 0 1 6.675 4.665zM10.74 1.57a4.5 4.5 0 0 1 4.494 4.494v2.758l-2.02-1.168a.071.071 0 0 1-.038-.052V2.02a4.504 4.504 0 0 1-2.436-.45zm-.507 8.354l3.072-1.771 3.07 1.771v3.542l-3.07 1.773-3.072-1.773v-3.542z"/>
          </svg>
        </span>
      </div>
    ),
    title: 'OpenAI',
  },
  {
    node: (
      <div className={itemContainerClass} title="Google Gemini">
        <svg className="w-8 h-8 text-[#4E88FF] group-hover:drop-shadow-[0_0_12px_rgba(78,136,255,0.6)] transition-all shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
        </svg>
      </div>
    ),
    title: 'Gemini',
  },
  {
    node: (
      <div className={itemContainerClass} title="JavaScript">
        <span className="text-[#F7DF1E] group-hover:drop-shadow-[0_0_12px_rgba(247,223,30,0.6)] transition-all">
          <SiJavascript size={30} />
        </span>
      </div>
    ),
    title: 'JavaScript',
  },
  {
    node: (
      <div className={itemContainerClass} title="Node.js">
        <span className="text-[#339933] group-hover:drop-shadow-[0_0_12px_rgba(51,153,51,0.6)] transition-all">
          <SiNodedotjs size={30} />
        </span>
      </div>
    ),
    title: 'Node.js',
  },
  {
    node: (
      <div className={itemContainerClass} title="Vite">
        <span className="text-[#646CFF] group-hover:drop-shadow-[0_0_12px_rgba(100,108,255,0.6)] transition-all">
          <SiVite size={30} />
        </span>
      </div>
    ),
    title: 'Vite',
  },
  {
    node: (
      <div className={itemContainerClass} title="Supabase">
        <span className="text-[#3FCF8E] group-hover:drop-shadow-[0_0_12px_rgba(63,207,142,0.6)] transition-all">
          <SiSupabase size={30} />
        </span>
      </div>
    ),
    title: 'Supabase',
  },
  {
    node: (
      <div className={itemContainerClass} title="PostgreSQL">
        <span className="text-[#4169E1] group-hover:drop-shadow-[0_0_12px_rgba(65,105,225,0.6)] transition-all">
          <SiPostgresql size={30} />
        </span>
      </div>
    ),
    title: 'PostgreSQL',
  },
  {
    node: (
      <div className={itemContainerClass} title="Vercel">
        <span className="text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all">
          <SiVercel size={28} />
        </span>
      </div>
    ),
    title: 'Vercel',
  },
  {
    node: (
      <div className={itemContainerClass} title="GitHub">
        <span className="text-gray-200 group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all">
          <SiGithub size={30} />
        </span>
      </div>
    ),
    title: 'GitHub',
  },
  {
    node: (
      <div className={itemContainerClass} title="WordPress">
        <span className="text-[#21759B] group-hover:drop-shadow-[0_0_12px_rgba(33,117,155,0.6)] transition-all">
          <SiWordpress size={30} />
        </span>
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
        speed={60}
        direction="left"
        logoHeight={40}
        gap={64}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#0B0C0E"
        ariaLabel="Technology tools and stack"
      />
    </section>
  );
};
