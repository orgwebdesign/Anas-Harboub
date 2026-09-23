import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, Service } from '../types';
import { PROJECTS_DATA, SERVICES_DATA, ANASS_BIO } from '../data/portfolioData';

export interface HomeConfig {
  name: string;
  role: string;
  location: string;
  tagline: string;
  heroQuote: string;
  heroBadge: string;
  portrait: string;
  aboutHeadline: string;
  aboutDescription: string;
  aboutExtended: string;
  yearsExperience: string;
  completedProjects: string;
}

export const DEFAULT_HOME_CONFIG: HomeConfig = {
  name: ANASS_BIO.name,
  role: ANASS_BIO.role,
  location: ANASS_BIO.location,
  tagline: ANASS_BIO.tagline,
  heroQuote: ANASS_BIO.heroQuote,
  heroBadge: ANASS_BIO.heroBadge,
  portrait: ANASS_BIO.portrait,
  aboutHeadline: ANASS_BIO.aboutHeadline,
  aboutDescription: ANASS_BIO.aboutDescription,
  aboutExtended: ANASS_BIO.aboutExtended,
  yearsExperience: "6+",
  completedProjects: "50+"
};

export interface PageConfig {
  badge: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;
}

export interface PagesConfig {
  webDesign: PageConfig;
  webDevelopment: PageConfig;
  infographiste: PageConfig;
  motionGraphics: PageConfig;
}

export const DEFAULT_PAGES_CONFIG: PagesConfig = {
  webDesign: {
    badge: 'Web Design Specialization',
    title: 'What I Design for the Web From ideas to polished digital experiences.',
    subtitle: 'Services Web Designer',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    description: 'Explore the web experiences I design — from landing pages and SaaS platforms to dashboards and complete digital products.',
    feature1Title: 'Landing Pages & Conversion UI',
    feature1Desc: 'Bespoke high-converting hero sections, micro-animations, and trust architecture engineered for performance.',
    feature2Title: 'Corporate & Brand Websites',
    feature2Desc: 'Editorial multi-page digital experiences that position your brand as an industry leader.',
    feature3Title: 'Responsive & Accessibility First',
    feature3Desc: 'WCAG AAA contrast ratios, fluid rem layouts, and sub-second page loading speeds.'
  },
  webDevelopment: {
    badge: 'Web Development & Modern Tech',
    title: 'Clean Code, Modern Stacks & Scalable Web Solutions',
    subtitle: 'Full-Stack & Frontend Engineering with Speed & Precision',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    description: 'Transforming designs into performant, responsive, and robust digital products with React, TypeScript, Tailwind CSS, Next.js, and modern APIs.',
    feature1Title: 'Modern Frontend Architecture',
    feature1Desc: 'Component-driven development with React, TypeScript, and fluid GSAP/Framer animations.',
    feature2Title: 'Full-Stack & Headless CMS',
    feature2Desc: 'Connecting headless platforms, WordPress REST APIs, and modern databases for seamless data handling.',
    feature3Title: 'Performance & SEO First',
    feature3Desc: 'Lightning-fast load times, semantic HTML5, perfect Core Web Vitals, and responsive cross-browser precision.'
  },
  infographiste: {
    badge: 'Infographiste & Visual Designer',
    title: 'Design Across Screens, Brands and Experiences',
    subtitle: 'Création Graphique & Expériences Visuelles Impactantes',
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    description: 'Conception graphique complète: identité visuelle, charte graphique, branding, supports de communication web et print, systèmes de design et direction artistique.',
    feature1Title: 'Brand & Visual Identity',
    feature1Desc: 'Logos, brand guidelines, color palettes, and editorial art direction.',
    feature2Title: 'Design Systems & Figma Tokens',
    feature2Desc: 'Scalable Figma component libraries with tokenized variables and developer handoffs.',
    feature3Title: 'Infographie & Supports Print/Web',
    feature3Desc: 'Visual storytelling, print materials, social media kits, and high-impact graphic design.'
  },
  motionGraphics: {
    badge: 'Motion Graphics & Dynamic Visuals',
    title: 'Bringing Brands to Life Through Motion',
    subtitle: 'Kinetic Typography, 3D Renders & Visual Storytelling',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    description: 'High-end motion design, micro-interactions, promotional videos, and animated UI elements that captivate audiences and boost engagement.',
    feature1Title: 'Kinetic Typography & Branding',
    feature1Desc: 'Engaging title sequences, brand reveal animations, and social video creative.',
    feature2Title: 'Interactive UI Animations',
    feature2Desc: 'Fluid micro-animations, GSAP transitions, and interactive physics that elevate digital interfaces.',
    feature3Title: 'Video Production & VFX',
    feature3Desc: 'After Effects, Premiere Pro, and Blender visual effects tailored for high-converting ads and showreels.'
  }
};

interface PortfolioContextType {
  projects: Project[];
  services: Service[];
  pagesConfig: PagesConfig;
  homeConfig: HomeConfig;
  addProject: (project: Omit<Project, 'id'>) => Project;
  updateProject: (id: string, updated: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  addService: (service: Omit<Service, 'id'>) => Service;
  updateService: (id: string, updated: Partial<Service>) => void;
  deleteService: (id: string) => void;
  updatePageConfig: (pageKey: keyof PagesConfig, updated: Partial<PageConfig>) => void;
  updateHomeConfig: (updated: Partial<HomeConfig>) => void;
  resetToDefault: () => void;
}

const STORAGE_PROJECTS_KEY = 'anass_harboub_projects_v3';
const STORAGE_SERVICES_KEY = 'anass_harboub_services_v4';
const STORAGE_PAGES_KEY = 'anass_harboub_pages_v5';
const STORAGE_HOME_KEY = 'anass_harboub_home_v4';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PROJECTS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load projects from localStorage', e);
    }
    return PROJECTS_DATA;
  });

  const [services, setServices] = useState<Service[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_SERVICES_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((s: Service) => (s.id === 's2' && s.title === 'UI/UX Design' ? SERVICES_DATA[1] : s));
        }
      }
    } catch (e) {
      console.error('Failed to load services from localStorage', e);
    }
    return SERVICES_DATA;
  });

  const [pagesConfig, setPagesConfig] = useState<PagesConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PAGES_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          return { ...DEFAULT_PAGES_CONFIG, ...parsed };
        }
      }
    } catch (e) {
      console.error('Failed to load pages config from localStorage', e);
    }
    return DEFAULT_PAGES_CONFIG;
  });

  const [homeConfig, setHomeConfig] = useState<HomeConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_HOME_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          return { ...DEFAULT_HOME_CONFIG, ...parsed };
        }
      }
    } catch (e) {
      console.error('Failed to load home config from localStorage', e);
    }
    return DEFAULT_HOME_CONFIG;
  });

  // Persist projects
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_PROJECTS_KEY, JSON.stringify(projects));
    } catch (e) {
      console.error('Failed to save projects to localStorage', e);
    }
  }, [projects]);

  // Persist services
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SERVICES_KEY, JSON.stringify(services));
    } catch (e) {
      console.error('Failed to save services to localStorage', e);
    }
  }, [services]);

  // Persist pages config
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_PAGES_KEY, JSON.stringify(pagesConfig));
    } catch (e) {
      console.error('Failed to save pages config to localStorage', e);
    }
  }, [pagesConfig]);

  // Persist home config
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_HOME_KEY, JSON.stringify(homeConfig));
    } catch (e) {
      console.error('Failed to save home config to localStorage', e);
    }
  }, [homeConfig]);

  const addProject = (projectData: Omit<Project, 'id'>): Project => {
    const newProject: Project = {
      ...projectData,
      id: `proj_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    };
    setProjects((prev) => [newProject, ...prev]);
    return newProject;
  };

  const updateProject = (id: string, updated: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
    );
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const addService = (serviceData: Omit<Service, 'id'>): Service => {
    const newService: Service = {
      ...serviceData,
      id: `serv_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    };
    setServices((prev) => [...prev, newService]);
    return newService;
  };

  const updateService = (id: string, updated: Partial<Service>) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updated } : s))
    );
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  const updatePageConfig = (pageKey: keyof PagesConfig, updated: Partial<PageConfig>) => {
    setPagesConfig((prev) => ({
      ...prev,
      [pageKey]: {
        ...prev[pageKey],
        ...updated,
      },
    }));
  };

  const updateHomeConfig = (updated: Partial<HomeConfig>) => {
    setHomeConfig((prev) => ({
      ...prev,
      ...updated,
    }));
  };

  const resetToDefault = () => {
    setProjects(PROJECTS_DATA);
    setServices(SERVICES_DATA);
    setPagesConfig(DEFAULT_PAGES_CONFIG);
    setHomeConfig(DEFAULT_HOME_CONFIG);
    localStorage.removeItem(STORAGE_PROJECTS_KEY);
    localStorage.removeItem(STORAGE_SERVICES_KEY);
    localStorage.removeItem(STORAGE_PAGES_KEY);
    localStorage.removeItem(STORAGE_HOME_KEY);
  };

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        services,
        pagesConfig,
        homeConfig,
        addProject,
        updateProject,
        deleteProject,
        addService,
        updateService,
        deleteService,
        updatePageConfig,
        updateHomeConfig,
        resetToDefault,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
