import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Mail, Phone, PhoneCall, ArrowUpRight, Sparkles } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
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
    budget: '5,000 – 15,000 MAD',
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
              <div className="w-16 h-16 rounded-full bg-[#C4D600]/20 text-[#C4D600] flex items-center justify-center mx-auto">
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
                className="px-8 py-3 rounded-full bg-[#C4D600] text-black font-extrabold text-sm hover:bg-[#d2e500] transition-all cursor-pointer mt-4"
              >
                Back to Portfolio
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                  Have a project in mind? <br />
                  <span className="text-[#C4D600]">Let's build something great.</span>
                </h2>
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
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C4D600]"
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
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C4D600]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-gray-300 font-semibold">Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C4D600]"
                  >
                    <option value="< 5,000 MAD">&lt; 5,000 MAD</option>
                    <option value="5,000 – 15,000 MAD">5,000 – 15,000 MAD</option>
                    <option value="15,000 – 30,000 MAD">15,000 – 30,000 MAD</option>
                    <option value="30,000+ MAD">30,000+ MAD</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-gray-300 font-semibold">Project Details</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your goals, timeline, and vision..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C4D600]"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-start gap-3 pt-2">
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-liquid-fill w-14 h-14 rounded-full flex items-center justify-center cursor-pointer group shadow-xl shrink-0"
                    title="Send Project Inquiry"
                    aria-label="Send Project Inquiry"
                  >
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5" />
                  </button>

                  {/* Email Button */}
                  <a
                    href="mailto:orgwebdesign@gmail.com"
                    className="btn-liquid-fill w-14 h-14 rounded-full flex items-center justify-center cursor-pointer group shadow-xl shrink-0"
                    title="Email: orgwebdesign@gmail.com"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/212698855924"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-liquid-fill w-14 h-14 rounded-full flex items-center justify-center cursor-pointer group shadow-xl shrink-0"
                    title="WhatsApp"
                    aria-label="WhatsApp"
                  >
                    <SiWhatsapp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>

                  {/* Phone Call Button */}
                  <a
                    href="tel:+212698855924"
                    className="btn-liquid-fill w-14 h-14 rounded-full flex items-center justify-center cursor-pointer group shadow-xl shrink-0"
                    title="Call: +212698855924"
                    aria-label="Call"
                  >
                    <PhoneCall className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
