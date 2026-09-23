import React, { useState } from 'react';
import { Project } from '../types';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  ArrowUpRight, 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Terminal, 
  Play, 
  CheckCircle2, 
  Zap,
  Server,
  FileCode,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

interface WebDevelopmentPageProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

const DEV_STACK = [
  { name: "React & Next.js", desc: "Modern SSR/SSG apps with responsive UX & server components", Icon: Code2 },
  { name: "TypeScript", desc: "Strict type safety, scalable interfaces, and robust logic", Icon: FileCode },
  { name: "Tailwind CSS", desc: "Pixel-perfect utility-first design tokens & fluid animations", Icon: Zap },
  { name: "Node.js & APIs", desc: "RESTful endpoints, GraphQL, and microservice architectures", Icon: Server },
  { name: "GSAP & Framer Motion", desc: "High-performance GPU-accelerated motion & interactive physics", Icon: Sparkles },
  { name: "Headless CMS", desc: "Strapi, Sanity, WordPress REST & flexible dynamic content", Icon: Layers }
];

export const WebDevelopmentPage: React.FC<WebDevelopmentPageProps> = ({ onSelectProject, onOpenContact }) => {
  const { projects, pagesConfig } = usePortfolio();
  const config = pagesConfig.webDevelopment;
  const [activeTab, setActiveTab] = useState<'frontend' | 'fullstack' | 'performance'>('frontend');

  const devProjects = projects.filter(
    (p) =>
      p.category === 'Web Development' ||
      p.category === 'Web Design' ||
      p.tags.some(tag => ['HTML', 'CSS', 'JS', 'WordPress', 'React', 'Framer'].includes(tag))
  );

  const pillars = [
    {
      step: "01",
      title: config.feature1Title || "Modern Frontend Architecture",
      desc: config.feature1Desc || "Component-driven development with React, TypeScript, and fluid GSAP/Framer animations."
    },
    {
      step: "02",
      title: config.feature2Title || "Full-Stack & Headless CMS",
      desc: config.feature2Desc || "Connecting headless platforms, WordPress REST APIs, and modern databases for seamless data handling."
    },
    {
      step: "03",
      title: config.feature3Title || "Performance & SEO First",
      desc: config.feature3Desc || "Lightning-fast load times, semantic HTML5, perfect Core Web Vitals, and responsive cross-browser precision."
    }
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C4D600]/10 border border-[#C4D600]/30 text-[#C4D600] text-xs font-mono font-bold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>{config.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
            {config.title}
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl font-medium">
            {config.description}
          </p>
        </div>

        {/* Interactive Code & Architecture Inspector */}
        <div className="p-6 sm:p-8 rounded-[32px] bg-[#141519] border border-white/10 shadow-2xl relative overflow-hidden space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C4D600]/10 border border-[#C4D600]/20 flex items-center justify-center text-[#C4D600]">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-heading">
                  Architecture & Code Standards
                </h3>
                <p className="text-xs text-gray-400">Clean principles, scalable patterns & sub-second performance</p>
              </div>
            </div>

            <div className="flex gap-2 bg-[#0B0C0E] p-1.5 rounded-full border border-white/10">
              <button
                onClick={() => setActiveTab('frontend')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'frontend' ? 'bg-[#C4D600] text-black shadow-md' : 'text-gray-400 hover:text-white'
                }`}
              >
                Frontend Stack
              </button>
              <button
                onClick={() => setActiveTab('fullstack')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'fullstack' ? 'bg-[#C4D600] text-black shadow-md' : 'text-gray-400 hover:text-white'
                }`}
              >
                Integrations
              </button>
              <button
                onClick={() => setActiveTab('performance')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'performance' ? 'bg-[#C4D600] text-black shadow-md' : 'text-gray-400 hover:text-white'
                }`}
              >
                Performance
              </button>
            </div>
          </div>

          {/* Interactive Tab Visualizer */}
          <div className="bg-[#0B0C0E] p-6 rounded-2xl border border-white/10 font-mono text-xs text-gray-300 space-y-3">
            {activeTab === 'frontend' && (
              <div className="space-y-2">
                <span className="text-[#C4D600] font-bold block">// Frontend Architecture:</span>
                <p className="text-gray-400">⚡ React 19 + TypeScript + Tailwind CSS design tokens</p>
                <p className="text-gray-400">⚡ Smooth micro-interactions powered by GSAP and Motion</p>
                <p className="text-gray-400">⚡ Clean component hierarchy with 100% modular reusability</p>
              </div>
            )}
            {activeTab === 'fullstack' && (
              <div className="space-y-2">
                <span className="text-[#C4D600] font-bold block">// CMS & API Integrations:</span>
                <p className="text-gray-400">⚡ Custom WordPress REST API & Headless CMS architectures</p>
                <p className="text-gray-400">⚡ Secure serverless functions, form handlers & webhook processing</p>
                <p className="text-gray-400">⚡ Third-party analytics, CRM synchronizations & payment gateways</p>
              </div>
            )}
            {activeTab === 'performance' && (
              <div className="space-y-2">
                <span className="text-[#C4D600] font-bold block">// Core Web Vitals & Optimization:</span>
                <p className="text-gray-400">⚡ 95+ Google PageSpeed score across Mobile & Desktop</p>
                <p className="text-gray-400">⚡ Hardware-accelerated GPU transforms with zero layout shift</p>
                <p className="text-gray-400">⚡ Semantic HTML5, accessible ARIA roles & automated SEO tags</p>
              </div>
            )}
          </div>
        </div>

        {/* Tech Ecosystem Matrix */}
        <div>
          <h2 className="text-2xl font-bold text-white font-heading mb-8">
            Core Development Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEV_STACK.map((tech) => {
              const TechIcon = tech.Icon;
              return (
                <div
                  key={tech.name}
                  className="p-6 rounded-2xl bg-[#141519] border border-white/10 hover:border-[#C4D600]/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C4D600]/10 border border-[#C4D600]/20 flex items-center justify-center text-[#C4D600] mb-4 group-hover:bg-[#C4D600] group-hover:text-black transition-all duration-300">
                    <TechIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#C4D600] transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Development Process Steps */}
        <div>
          <h2 className="text-2xl font-bold text-white font-heading mb-8">
            Development & Delivery Workflow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-3">
                <span className="font-mono font-bold text-2xl text-[#C4D600]">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold text-white font-heading">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Development Projects */}
        <div>
          <h2 className="text-2xl font-bold text-white font-heading mb-8">
            Featured Development Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {devProjects.slice(0, 4).map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group rounded-[24px] bg-[#141519] border border-white/10 overflow-hidden hover:border-[#C4D600] transition-all duration-300 cursor-pointer shadow-xl"
              >
                <div className="aspect-[16/10] overflow-hidden bg-black/50 relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#C4D600] text-black font-bold text-xs">
                      Web Development
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#C4D600] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.description}</p>
                  <div className="pt-3 flex items-center gap-2 text-xs font-bold text-[#C4D600]">
                    <span>View Project Details</span>
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
            Need High-End Web Development?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            From sleek landing pages to complete custom web platforms, let's engineer your project with clean code and high performance.
          </p>
          <button
            onClick={onOpenContact}
            className="btn-liquid-fill px-8 py-3.5 rounded-full font-extrabold text-sm cursor-pointer inline-flex items-center gap-2 shadow-xl group"
          >
            <span>Start Your Web Development</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </button>
        </div>

      </div>
    </div>
  );
};
