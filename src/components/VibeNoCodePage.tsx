import React, { useState } from 'react';
import { Project } from '../types';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUpRight, Zap, Sparkles, Globe, Cpu, Palette, Layout, Rocket, Terminal, Play } from 'lucide-react';
import { motion } from 'motion/react';

interface VibeNoCodePageProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

const NO_CODE_TOOLS = [
  { name: "Framer", desc: "Interactive Web Publishing & Motion", Icon: Sparkles },
  { name: "Webflow", desc: "Custom Visual CMS & Dynamic Code", Icon: Globe },
  { name: "Lovable & v0", desc: "AI Visual Interface Generation", Icon: Zap },
  { name: "AI Studio & Cursor", desc: "AI-Powered Fullstack Development", Icon: Cpu },
  { name: "Figma", desc: "UI/UX Architecture & Prototyping", Icon: Palette },
  { name: "Relume", desc: "AI Wireframing & Site Architecture", Icon: Layout }
];

export const VibeNoCodePage: React.FC<VibeNoCodePageProps> = ({ onSelectProject, onOpenContact }) => {
  const { projects, pagesConfig } = usePortfolio();
  const config = pagesConfig.vibeNoCode;
  const [promptInput, setPromptInput] = useState('Create a dark mode luxury watch store with orange accent buttons and smooth scroll...');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationOutput, setGenerationOutput] = useState<string | null>(null);

  const noCodeProjects = projects.filter(
    (p) => p.category === 'Vibe No Code' || p.tags.includes('Vibe No Code') || p.tags.includes('AI Workflow')
  );

  const handleSimulateGeneration = () => {
    setIsGenerating(true);
    setGenerationOutput(null);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerationOutput(`✨ Anass No-Code AI Engine: Synthesized fullstack Framer & React code components with 100% responsive design tokens, zero-drag layout, and orange theme system.`);
    }, 1500);
  };

  const processSteps = [
    {
      step: "01",
      title: config.feature1Title || "10x Rapid Prototyping",
      desc: config.feature1Desc || "Transforming natural language prompts and sketch wireframes into live interactive interfaces instantly."
    },
    {
      step: "02",
      title: config.feature2Title || "AI-Assisted Workflows",
      desc: config.feature2Desc || "Automating code generation, design token sync, and smart responsive layout adjustments."
    },
    {
      step: "03",
      title: config.feature3Title || "Full Client Autonomy",
      desc: config.feature3Desc || "Empowering clients to edit text, update media, and manage content effortlessly post-launch."
    }
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
            {config.title}
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl font-medium">
            {config.description}
          </p>
        </div>

        {/* Interactive AI No-Code Sandbox Simulator */}
        <div className="p-6 sm:p-8 rounded-[32px] bg-[#141519] border border-white/10 shadow-2xl relative overflow-hidden space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#FF8A00]" />
              <h3 className="text-xl font-bold text-white font-heading">
                Vibe No-Code & AI Workflow Engine
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF8A00]/10 text-[#FF8A00] font-bold">
              AI Powered
            </span>
          </div>

          <div className="space-y-3">
            <label className="text-xs text-gray-400 font-semibold block">
              Test Prompt Idea for Instant UI Generation:
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-[#0B0C0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF8A00]"
                placeholder="Describe your app idea..."
              />
              <button
                onClick={handleSimulateGeneration}
                disabled={isGenerating}
                className="px-6 py-3 rounded-xl bg-[#FF8A00] text-black font-extrabold text-sm hover:bg-[#ffa026] transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                    <span>Synthesizing...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-black" />
                    <span>Generate Prototype</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {generationOutput && (
            <div className="p-4 rounded-xl bg-[#0B0C0E] border border-[#FF8A00]/30 text-xs font-mono text-gray-200 animate-in fade-in">
              {generationOutput}
            </div>
          )}
        </div>

        {/* No-Code Tool Ecosystem Grid */}
        <div>
          <h2 className="text-2xl font-bold text-white font-heading mb-8">
            The Vibe No-Code Tool Matrix
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NO_CODE_TOOLS.map((tool) => {
              const ToolIcon = tool.Icon;
              return (
                <div
                  key={tool.name}
                  className="p-6 rounded-2xl bg-[#141519] border border-white/10 hover:border-[#FF8A00]/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF8A00]/10 border border-[#FF8A00]/20 flex items-center justify-center text-[#FF8A00] mb-4 group-hover:bg-[#FF8A00] group-hover:text-black transition-all duration-300">
                    <ToolIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#FF8A00] transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">{tool.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rapid Process Steps */}
        <div>
          <h2 className="text-2xl font-bold text-white font-heading mb-8">
            How Anass Delivers Live Sites in 3–5 Days
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-3">
                <span className="font-mono font-bold text-2xl text-[#FF8A00]">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold text-white font-heading">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured No-Code Projects */}
        <div>
          <h2 className="text-2xl font-bold text-white font-heading mb-8">
            Featured Vibe No-Code Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {noCodeProjects.map((project) => (
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
                    <span>View Interactive Project</span>
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
            Have an Idea You Want Built Fast?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Skip months of development. Launch an AI-powered, high-converting product in days.
          </p>
          <button
            onClick={onOpenContact}
            className="px-8 py-3.5 rounded-full bg-[#FF8A00] text-black font-extrabold text-sm hover:bg-[#ffa026] transition-all cursor-pointer inline-flex items-center gap-2 shadow-xl"
          >
            <span>Launch Your No-Code Build</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
