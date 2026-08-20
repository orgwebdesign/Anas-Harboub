import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Mail, Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import { ANASS_BIO } from '../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: preselectedService || 'Web Design',
    budget: '$3k – $5k',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#141519] border border-white/10 rounded-[32px] p-6 sm:p-10 shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Contact Dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FF8A00]/20 text-[#FF8A00] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto">
                Thank you for reaching out, {formData.name}. Anass Harboub will review your project specs and respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 rounded-full bg-[#FF8A00] text-black font-extrabold text-sm hover:bg-[#ffa026] transition-all cursor-pointer mt-4"
              >
                Back to Portfolio
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 text-[#FF8A00] font-bold text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start A Project</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                  Have a project in mind? <br />
                  <span className="text-[#FF8A00]">Let's build something great.</span>
                </h2>
              </div>

              {/* Direct Quick Channels */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`mailto:${ANASS_BIO.socials.email}`}
                  className="px-3.5 py-2 rounded-full bg-[#1A1B20] border border-white/10 text-xs font-semibold text-gray-300 hover:text-[#FF8A00] hover:border-[#FF8A00] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF8A00]" />
                  <span>{ANASS_BIO.socials.email}</span>
                </a>
                <a
                  href={ANASS_BIO.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-full bg-[#1A1B20] border border-white/10 text-xs font-semibold text-gray-300 hover:text-[#FF8A00] hover:border-[#FF8A00] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF8A00]" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-300 font-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-300 font-semibold">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-300 font-semibold">Project Pillar</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF8A00]"
                    >
                      <option value="Web Design">Web Design</option>
                      <option value="Vibe No Code">Vibe No Code</option>
                      <option value="Designer">Designer & UI/UX</option>
                      <option value="Design System">Design System</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-300 font-semibold">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF8A00]"
                    >
                      <option value="<$3k">&lt; $3,000</option>
                      <option value="$3k – $5k">$3,000 – $5,000</option>
                      <option value="$5k – $10k">$5,000 – $10,000</option>
                      <option value="$10k+">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-gray-300 font-semibold">Project Details</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your goals, timeline, and vision..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#FF8A00] text-black font-extrabold text-sm hover:bg-[#ffa026] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                >
                  <span>Send Project Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
