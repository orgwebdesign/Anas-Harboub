import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, CheckCircle2, Calendar, User, Sparkles, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#141519] border border-white/10 rounded-[32px] p-6 sm:p-10 shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/40 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer z-20 border border-white/10"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-8">
            {/* Top Banner & Header */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-[#FF8A00] text-black font-extrabold text-xs">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#1A1B20] text-gray-300 font-mono text-xs border border-white/10">
                  {project.year}
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
                {project.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#FF8A00]" />
                  <span>Client: {project.client}</span>
                </div>
              </div>
            </div>

            {/* High Res Preview */}
            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/50 relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Metrics Grid */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="p-4 rounded-xl bg-[#0B0C0E] border border-white/5">
                    <span className="text-2xl font-extrabold font-heading text-[#FF8A00] block">
                      {m.value}
                    </span>
                    <span className="text-xs text-gray-400 block mt-1">{m.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Long Description */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white font-heading">Project Overview & Challenge</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Deliverables List */}
            {project.deliverables && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white font-heading">Key Deliverables</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-[#1A1B20] text-xs font-semibold text-gray-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial px-5 py-3 rounded-full bg-white/10 text-white font-extrabold text-xs hover:bg-white/20 transition-all cursor-pointer flex items-center justify-center gap-2 border border-white/20"
                  >
                    <span>Voir en live</span>
                    <ExternalLink className="w-4 h-4 text-[#FF8A00]" />
                  </a>
                )}
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="flex-1 sm:flex-initial px-6 py-3 rounded-full bg-[#FF8A00] text-black font-extrabold text-xs hover:bg-[#ffa026] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Build Similar Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
