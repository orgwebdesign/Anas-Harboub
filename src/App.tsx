import React, { useState } from 'react';
import { PageTab, Project } from './types';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ServicesSection } from './components/ServicesSection';
import { TechLogosSection } from './components/TechLogosSection';
import { AboutSection } from './components/AboutSection';
import { FlowingMenuCurtain } from './components/FlowingMenuCurtain';
import { WebDesignPage } from './components/WebDesignPage';
import { WebDevelopmentPage } from './components/WebDevelopmentPage';
import { DesignerPage } from './components/DesignerPage';
import { MotionGraphicsPage } from './components/MotionGraphicsPage';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { Footer } from './components/Footer';
import { TestimonialsSection } from './components/TestimonialsSection';
import { RightFixedToggle } from './components/RightFixedToggle';
import { Preloader } from './components/Preloader';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<PageTab>('all');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenContactWithService = (serviceName: string) => {
    setSelectedServiceForInquiry(serviceName);
    setIsContactOpen(true);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab('all');
    }
  };

  return (
    <PortfolioProvider>
      {/* 4-Second Multilingual Preloader with Fluid Water Wave Slide-up Reveal */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen bg-[#0B0C0E] text-[#F3F4F6] font-sans selection:bg-[#C4D600] selection:text-black">
        {/* Top Navbar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Right Side Fixed Navigation Bar */}
        <RightFixedToggle
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          isContactOpen={isContactOpen}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Main View Router */}
        <main className="relative">
          <AnimatePresence mode="wait">
            {activeTab === 'all' && (
              <motion.div
                key="all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hero Section */}
                <HeroSection
                  onExploreClick={scrollToProjects}
                  onHireClick={() => setIsContactOpen(true)}
                />

                {/* Ticker */}
                <MarqueeTicker />

                {/* Accordion Services Section with Notched Orange Cards (How I Bring Ideas to Life) */}
                <ServicesSection
                  onInquireService={handleOpenContactWithService}
                />

                {/* Tech Logos Loop */}
                <TechLogosSection />

                {/* About Section */}
                <AboutSection
                  onHireClick={() => setIsContactOpen(true)}
                />

                {/* Flowing Menu Curtain (closest-edge marquee sheet) */}
                <FlowingMenuCurtain
                  onExploreMore={() => {
                    setActiveTab('web-design');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </motion.div>
            )}

            {activeTab === 'web-design' && (
              <motion.div
                key="web-design"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <WebDesignPage
                  onSelectProject={(project) => setSelectedProject(project)}
                  onOpenContact={() => setIsContactOpen(true)}
                />
              </motion.div>
            )}

            {activeTab === 'web-development' && (
              <motion.div
                key="web-development"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <WebDevelopmentPage
                  onSelectProject={(project) => setSelectedProject(project)}
                  onOpenContact={() => setIsContactOpen(true)}
                />
              </motion.div>
            )}

            {activeTab === 'designer' && (
              <motion.div
                key="designer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <DesignerPage
                  onSelectProject={(project) => setSelectedProject(project)}
                  onOpenContact={() => setIsContactOpen(true)}
                />
              </motion.div>
            )}

            {activeTab === 'motion-graphics' && (
              <motion.div
                key="motion-graphics"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <MotionGraphicsPage
                  onSelectProject={(project) => setSelectedProject(project)}
                  onOpenContact={() => setIsContactOpen(true)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Client Testimonials Section: Placed right before Footer */}
        <TestimonialsSection onOpenContact={() => setIsContactOpen(true)} />

        {/* Footer */}
        <Footer
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Interactive Contact Modal */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          preselectedService={selectedServiceForInquiry}
        />

        {/* Project Case Study Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </div>
    </PortfolioProvider>
  );
}

