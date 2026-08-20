export type PageTab = 'all' | 'web-design' | 'vibe-nocode' | 'designer' | 'admin';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Web Design' | 'Vibe No Code' | 'Infographiste' | 'UI/UX' | 'AI Design';
  year: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  deliverables?: string[];
  liveUrl?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  categoryTab: PageTab;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}
