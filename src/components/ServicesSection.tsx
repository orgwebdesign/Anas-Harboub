import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUpRight, Sparkles, ArrowRight, X } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onInquireService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquireService }) => {
  const { services } = usePortfolio();

  // Filter out "Wireframing" and "Application" sections
  const displayServices = services.filter(
    (s) =>
      !s.title.toLowerCase().includes('wireframing') &&
      !s.title.toLowerCase().includes('application')
  );

  const [activeId, setActiveId] = useState<string>(displayServices[0]?.id || 's1');

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              How I Bring <span className="text-[#FF8A00] relative inline-block">
                Ideas to Life
                <Sparkles className="w-5 h-5 text-[#FF8A00] absolute -top-3 -right-6 animate-bounce" />
              </span>
            </h2>
          </div>

          <button
            onClick={() => onInquireService('General Services')}
            className="self-start md:self-auto px-6 py-3 rounded-full bg-[#1A1B20] border border-white/10 text-white font-semibold text-sm hover:border-[#FF8A00] hover:text-[#FF8A00] transition-all flex items-center gap-2 cursor-pointer group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Accordion Cards Stack */}
        <div className="space-y-4">
          {displayServices.map((service) => {
            const isOpen = activeId === service.id;

            return (
              <div key={service.id} className="transition-all duration-300">
                {isOpen ? (
                  /* Expanded Orange Card with Notched Angled Corners */
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="notched-card-orange p-6 sm:p-10 text-black shadow-2xl relative"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="space-y-4 max-w-2xl">
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-lg opacity-70">
                            {service.number}
                          </span>
                          <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-black tracking-tight">
                            {service.title}
                          </h3>
                        </div>

                        {/* Capability Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3.5 py-1.5 rounded-full bg-black/10 text-black font-semibold text-xs sm:text-sm border border-black/10 backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p className="text-black/80 text-base sm:text-lg font-medium leading-relaxed pt-2">
                          {service.fullDesc}
                        </p>
                      </div>

                      {/* Right Action inside Expanded Card */}
                      <div className="flex md:flex-col items-center justify-between md:justify-start gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-black/10">
                        <button
                          onClick={() => setActiveId('')}
                          className="w-10 h-10 rounded-full bg-black/20 hover:bg-black hover:text-white text-black flex items-center justify-center transition-colors cursor-pointer"
                          aria-label="Collapse Service"
                        >
                          <X className="w-5 h-5" />
                        </button>

                        <button
                          onClick={() => onInquireService(service.title)}
                          className="px-6 py-3 rounded-full bg-black text-white font-bold text-sm hover:bg-neutral-900 transition-all flex items-center gap-2 cursor-pointer shadow-xl"
                        >
                          <span>Start Project</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* Slim Dark Horizontal Accordion Row */
                  <button
                    onClick={() => setActiveId(service.id)}
                    className="w-full text-left p-6 sm:p-8 rounded-2xl bg-[#141519] border border-white/10 hover:border-[#FF8A00]/50 transition-all duration-300 flex items-center justify-between gap-4 group cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-mono font-bold text-gray-500 text-lg sm:text-xl group-hover:text-[#FF8A00] transition-colors">
                        {service.number}
                      </span>
                      <h3 className="text-xl sm:text-3xl font-extrabold text-white font-heading tracking-tight group-hover:text-[#FF8A00] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#1A1B20] border border-white/10 group-hover:bg-[#FF8A00] group-hover:text-black group-hover:border-[#FF8A00] text-gray-400 flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                    </div>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
