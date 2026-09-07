import React from 'react';
import { StaggerTestimonials } from './ui/stagger-testimonials';
import { Sparkles, MessageSquareQuote } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenContact?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#0B0C0E] border-t border-white/5">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF8A00]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Ce Que Disent <span className="text-[#FF8A00] relative inline-block">
              Mes Clients
              <Sparkles className="w-5 h-5 text-[#FF8A00] absolute -top-3 -right-6 animate-pulse" />
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Retours d'expérience et témoignages de fondateurs, directeurs et marques innovantes qui ont confié leurs projets digitaux à mon expertise.
          </p>
        </div>

        {/* Stagger Carousel Component */}
        <div className="relative">
          <StaggerTestimonials />
        </div>

        {/* Bottom CTA prompt */}
        {onOpenContact && (
          <div className="mt-10 text-center">
            <p className="text-gray-400 text-sm">
              Prêt à concevoir une expérience mémorable pour votre projet ?{' '}
              <button
                onClick={onOpenContact}
                className="text-[#FF8A00] hover:underline font-semibold cursor-pointer transition-colors inline-flex items-center gap-1"
              >
                Parlons-en dès aujourd'hui &rarr;
              </button>
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
