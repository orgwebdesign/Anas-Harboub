import React, { useState, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Project, Service, PageTab } from '../types';
import { PageCustomizerForm } from './PageCustomizerForm';
import { HomePageCustomizerForm } from './HomePageCustomizerForm';
import {
  Plus,
  Trash2,
  Edit,
  Image as ImageIcon,
  Upload,
  Link,
  Sparkles,
  Zap,
  Palette,
  Check,
  Search,
  RotateCcw,
  Star,
  ExternalLink,
  Tag,
  Briefcase,
  Layers,
  ArrowUpRight,
  Eye,
  X,
  Filter,
  CheckCircle2,
  AlertCircle,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AdminPageProps {
  onNavigateHome: () => void;
}

// Preset high quality cover images for quick selection
const PRESET_IMAGES = [
  { name: 'SaaS Web Platform', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80' },
  { name: 'AI No-Code App', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Design System & Tokens', url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80' },
  { name: 'E-Commerce Luxury', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Mobile UI/UX App', url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Creative Agency Dashboard', url: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1200&q=80' }
];

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigateHome }) => {
  const {
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
    resetToDefault
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState<
    'homepage' | 'web-design-page' | 'vibe-nocode-page' | 'infographiste-page' | 'works' | 'services'
  >('homepage');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Toast message state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Quick Replace Image Modal state
  const [quickImageProject, setQuickImageProject] = useState<Project | null>(null);
  const [newImageUrlInput, setNewImageUrlInput] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Add / Edit Project Modal state
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [projectFormData, setProjectFormData] = useState<{
    title: string;
    client: string;
    category: Project['category'];
    year: string;
    description: string;
    longDescription: string;
    imageUrl: string;
    tags: string;
    liveUrl: string;
    featured: boolean;
    deliverables: string;
  }>({
    title: '',
    client: '',
    category: 'Web Design',
    year: new Date().getFullYear().toString(),
    description: '',
    longDescription: '',
    imageUrl: PRESET_IMAGES[0].url,
    tags: '',
    liveUrl: '',
    featured: true,
    deliverables: ''
  });

  // Add / Edit Service Modal state
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [serviceFormData, setServiceFormData] = useState<{
    number: string;
    title: string;
    shortDesc: string;
    fullDesc: string;
    tags: string;
    categoryTab: PageTab;
  }>({
    number: '06.',
    title: '',
    shortDesc: '',
    fullDesc: '',
    tags: '',
    categoryTab: 'web-design'
  });

  // Filter projects for the Works tab
  const categoriesList = ['All', 'Web Design', 'Vibe No Code', 'Infographiste', 'UI/UX', 'AI Design'];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategoryFilter === 'All' ||
      project.category === selectedCategoryFilter ||
      project.tags.includes(selectedCategoryFilter);

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter((p) => p.featured);

  // Handle image upload from file picker
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, isForProjectModal = false) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast('⚠️ Image file is large (>5MB). Consider using a smaller image or URL.');
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        if (isForProjectModal) {
          setProjectFormData((prev) => ({ ...prev, imageUrl: result }));
        } else if (quickImageProject) {
          setNewImageUrlInput(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Open Edit Modal for Project
  const handleOpenEditProject = (p: Project) => {
    setEditingProject(p);
    setProjectFormData({
      title: p.title,
      client: p.client,
      category: p.category,
      year: p.year,
      description: p.description,
      longDescription: p.longDescription,
      imageUrl: p.imageUrl,
      tags: p.tags.join(', '),
      liveUrl: p.liveUrl || '',
      featured: !!p.featured,
      deliverables: p.deliverables ? p.deliverables.join(', ') : ''
    });
    setIsProjectModalOpen(true);
  };

  // Open Create Modal for Project
  const handleOpenCreateProject = (preselectedCategory?: Project['category']) => {
    setEditingProject(null);
    setProjectFormData({
      title: '',
      client: '',
      category: preselectedCategory || 'Web Design',
      year: new Date().getFullYear().toString(),
      description: '',
      longDescription: '',
      imageUrl: PRESET_IMAGES[Math.floor(Math.random() * PRESET_IMAGES.length)].url,
      tags: 'Web Design, Figma, Modern',
      liveUrl: '',
      featured: true,
      deliverables: 'Hero Landing Page, Mobile Responsive Layout'
    });
    setIsProjectModalOpen(true);
  };

  // Save Project Form
  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectFormData.title.trim()) {
      showToast('⚠️ Please enter a title for the project.');
      return;
    }

    const tagsArray = projectFormData.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const deliverablesArray = projectFormData.deliverables
      .split(',')
      .map((d) => d.trim())
      .filter(Boolean);

    if (editingProject) {
      updateProject(editingProject.id, {
        title: projectFormData.title,
        client: projectFormData.client || 'Client',
        category: projectFormData.category,
        year: projectFormData.year,
        description: projectFormData.description,
        longDescription: projectFormData.longDescription || projectFormData.description,
        imageUrl: projectFormData.imageUrl,
        tags: tagsArray.length > 0 ? tagsArray : [projectFormData.category],
        liveUrl: projectFormData.liveUrl,
        featured: projectFormData.featured,
        deliverables: deliverablesArray
      });
      showToast(`✅ Updated work "${projectFormData.title}" successfully!`);
    } else {
      addProject({
        title: projectFormData.title,
        client: projectFormData.client || 'Client',
        category: projectFormData.category,
        year: projectFormData.year,
        description: projectFormData.description,
        longDescription: projectFormData.longDescription || projectFormData.description,
        imageUrl: projectFormData.imageUrl,
        tags: tagsArray.length > 0 ? tagsArray : [projectFormData.category],
        liveUrl: projectFormData.liveUrl,
        featured: projectFormData.featured,
        deliverables: deliverablesArray
      });
      showToast(`✨ Added new work "${projectFormData.title}"!`);
    }

    setIsProjectModalOpen(false);
  };

  // Quick Replace Image submission
  const handleApplyQuickImageReplace = () => {
    if (!quickImageProject || !newImageUrlInput.trim()) return;
    updateProject(quickImageProject.id, { imageUrl: newImageUrlInput.trim() });
    showToast(`📸 Replaced image for "${quickImageProject.title}"!`);
    setQuickImageProject(null);
    setNewImageUrlInput('');
  };

  // Open Edit Modal for Service
  const handleOpenEditService = (s: Service) => {
    setEditingService(s);
    setServiceFormData({
      number: s.number,
      title: s.title,
      shortDesc: s.shortDesc,
      fullDesc: s.fullDesc,
      tags: s.tags.join(', '),
      categoryTab: s.categoryTab
    });
    setIsServiceModalOpen(true);
  };

  // Open Create Modal for Service
  const handleOpenCreateService = () => {
    setEditingService(null);
    const nextNum = (services.length + 1).toString().padStart(2, '0') + '.';
    setServiceFormData({
      number: nextNum,
      title: '',
      shortDesc: '',
      fullDesc: '',
      tags: 'Design, Development, Strategy',
      categoryTab: 'web-design'
    });
    setIsServiceModalOpen(true);
  };

  // Save Service Form
  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceFormData.title.trim()) {
      showToast('⚠️ Please enter a title for the service.');
      return;
    }

    const tagsArray = serviceFormData.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    if (editingService) {
      updateService(editingService.id, {
        number: serviceFormData.number,
        title: serviceFormData.title,
        shortDesc: serviceFormData.shortDesc,
        fullDesc: serviceFormData.fullDesc,
        tags: tagsArray,
        categoryTab: serviceFormData.categoryTab
      });
      showToast(`✅ Updated service "${serviceFormData.title}"!`);
    } else {
      addService({
        number: serviceFormData.number,
        title: serviceFormData.title,
        shortDesc: serviceFormData.shortDesc,
        fullDesc: serviceFormData.fullDesc,
        tags: tagsArray,
        categoryTab: serviceFormData.categoryTab
      });
      showToast(`✨ Added new service "${serviceFormData.title}"!`);
    }

    setIsServiceModalOpen(false);
  };

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#0B0C0E] text-[#F3F4F6]">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-4 z-50 px-5 py-3 rounded-xl bg-[#FF8A00] text-black font-bold text-sm shadow-2xl flex items-center gap-2 border border-black/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Admin Header */}
        <div className="p-6 sm:p-8 rounded-[32px] bg-[#141519] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF8A00]/10 border border-[#FF8A00]/30 text-xs font-mono font-bold text-[#FF8A00] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Admin Control Dashboard</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                Gestion des <span className="text-[#FF8A00]">Travaux & Services</span>
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Gérez les projets de chaque service, modifiez ou remplacez les images de la section Home Page ("Crafted with Purpose & Precision").
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleOpenCreateProject()}
                className="px-5 py-2.5 rounded-full bg-[#FF8A00] text-black font-extrabold text-xs hover:bg-[#ffa026] transition-all flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Ajouter un Travail</span>
              </button>

              <button
                onClick={onNavigateHome}
                className="px-5 py-2.5 rounded-full bg-[#1A1B20] border border-white/15 text-white font-bold text-xs hover:border-[#FF8A00] hover:text-[#FF8A00] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Voir le Site</span>
              </button>

              <button
                onClick={() => {
                  if (window.confirm('Voulez-vous réinitialiser toutes les données aux valeurs par défaut?')) {
                    resetToDefault();
                    showToast('Réinitialisé aux données de démonstration!');
                  }
                }}
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-red-400 hover:border-red-500/50 transition-all cursor-pointer"
                title="Réinitialiser les données"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Admin Navigation Tabs - Each Page Separated */}
        <div className="flex flex-wrap items-center gap-2 bg-[#121318] p-1.5 rounded-2xl border border-white/10">
          <button
            onClick={() => setActiveTab('homepage')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'homepage'
                ? 'bg-[#FF8A00] text-black shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Page Home (Accueil)</span>
          </button>

          <button
            onClick={() => setActiveTab('web-design-page')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'web-design-page'
                ? 'bg-[#FF8A00] text-black shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Page Web Design</span>
          </button>

          <button
            onClick={() => setActiveTab('vibe-nocode-page')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'vibe-nocode-page'
                ? 'bg-[#FF8A00] text-black shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Page Vibe No Code</span>
          </button>

          <button
            onClick={() => setActiveTab('infographiste-page')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'infographiste-page'
                ? 'bg-[#FF8A00] text-black shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Page Infographiste</span>
          </button>

          <div className="w-px h-6 bg-white/10 mx-1 hidden sm:block" />

          <button
            onClick={() => setActiveTab('works')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'works'
                ? 'bg-[#FF8A00] text-black shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Tous les Travaux ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'services'
                ? 'bg-[#FF8A00] text-black shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Les Services ({services.length})</span>
          </button>
        </div>

        {/* TAB 1: ALL WORKS / PROJECTS MANAGER */}
        {activeTab === 'works' && (
          <div className="space-y-6">
            {/* Filter and Search Bar */}
            <div className="p-4 rounded-2xl bg-[#141519] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
                {categoriesList.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedCategoryFilter === cat
                        ? 'bg-[#FF8A00] text-black'
                        : 'bg-[#0B0C0E] text-gray-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Rechercher par titre ou client..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF8A00]"
                />
              </div>
            </div>

            {/* Works Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-[#141519] border border-white/10 overflow-hidden hover:border-[#FF8A00]/40 transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    {/* Thumbnail & Quick Replace Overlay */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />

                      <div className="absolute top-3 left-3 z-10 flex gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#FF8A00] font-bold text-[11px] border border-white/10">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-2.5 py-1 rounded-full bg-[#FF8A00] text-black font-extrabold text-[10px] uppercase">
                            Home Featured
                          </span>
                        )}
                      </div>

                      {/* Quick Image Replace Button */}
                      <button
                        onClick={() => {
                          setQuickImageProject(project);
                          setNewImageUrlInput(project.imageUrl);
                        }}
                        className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-white hover:text-[#FF8A00] font-bold text-xs border border-white/20 flex items-center gap-1.5 transition-all shadow-lg cursor-pointer"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>Changer l'image</span>
                      </button>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-2">
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>Client: <strong className="text-gray-200">{project.client}</strong></span>
                        <span className="font-mono text-gray-500">{project.year}</span>
                      </div>

                      <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#FF8A00] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="p-5 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                    {/* Home Page Featured Toggle */}
                    <button
                      onClick={() => {
                        updateProject(project.id, { featured: !project.featured });
                        showToast(
                          project.featured
                            ? `Retiré de la Home Page "${project.title}"`
                            : `Ajouté à la Home Page "${project.title}"`
                        );
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        project.featured
                          ? 'bg-[#FF8A00]/20 text-[#FF8A00] border border-[#FF8A00]/40'
                          : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
                      }`}
                    >
                      <Star className={`w-3.5 h-3.5 ${project.featured ? 'fill-[#FF8A00]' : ''}`} />
                      <span>{project.featured ? 'Featured Home' : '+ Featured'}</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenEditProject(project)}
                        className="p-2 rounded-lg bg-white/5 hover:bg-[#FF8A00] text-gray-300 hover:text-black transition-colors cursor-pointer"
                        title="Modifier le travail"
                      >
                        <Edit className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          if (window.confirm(`Supprimer le travail "${project.title}"?`)) {
                            deleteProject(project.id);
                            showToast(`Supprimé "${project.title}"`);
                          }
                        }}
                        className="p-2 rounded-lg bg-white/5 hover:bg-red-500 text-gray-300 hover:text-white transition-colors cursor-pointer"
                        title="Supprimer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="p-12 text-center rounded-2xl bg-[#141519] border border-white/10 space-y-3">
                <AlertCircle className="w-10 h-10 text-gray-500 mx-auto" />
                <p className="text-gray-300 font-bold">Aucun travail trouvé pour cette recherche.</p>
                <button
                  onClick={() => handleOpenCreateProject()}
                  className="px-5 py-2 rounded-full bg-[#FF8A00] text-black font-bold text-xs"
                >
                  Ajouter un projet maintenant
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 1: HOME PAGE CUSTOMIZER */}
        {activeTab === 'homepage' && (
          <HomePageCustomizerForm
            config={homeConfig}
            onSave={(updated) => {
              updateHomeConfig(updated);
              showToast('✅ Page d\'Accueil mise à jour avec succès!');
            }}
            featuredProjects={featuredProjects}
            allProjects={projects}
            onToggleFeatured={(project) => {
              updateProject(project.id, { featured: !project.featured });
              showToast(
                project.featured
                  ? `Retiré de la Home Page "${project.title}"`
                  : `Mis en avant sur la Home Page "${project.title}"`
              );
            }}
            onOpenCreateProject={() => handleOpenCreateProject()}
            onOpenEditProject={(p) => handleOpenEditProject(p)}
            onOpenQuickImageModal={(p) => {
              setQuickImageProject(p);
              setNewImageUrlInput(p.imageUrl);
            }}
            onDeleteProject={(id) => {
              deleteProject(id);
              showToast('Projet supprimé');
            }}
          />
        )}

        {/* TAB 3: SERVICES MANAGER */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white font-heading">
                Gérer les Services Proposés ({services.length})
              </h2>
              <button
                onClick={handleOpenCreateService}
                className="px-4 py-2 rounded-full bg-[#FF8A00] text-black font-extrabold text-xs hover:bg-[#ffa026] transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Ajouter un Service</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => {
                const serviceWorksCount = projects.filter(
                  (p) =>
                    p.category.toLowerCase().includes(service.title.toLowerCase()) ||
                    p.tags.some((t) => t.toLowerCase().includes(service.title.toLowerCase()))
                ).length;

                return (
                  <div
                    key={service.id}
                    className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-4 hover:border-[#FF8A00]/40 transition-all shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono font-bold text-[#FF8A00] text-sm">
                          {service.number}
                        </span>
                        <h3 className="text-2xl font-extrabold text-white font-heading">
                          {service.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenEditService(service)}
                          className="p-2 rounded-lg bg-white/5 hover:bg-[#FF8A00] text-gray-300 hover:text-black transition-colors cursor-pointer"
                          title="Éditer le service"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Supprimer le service "${service.title}"?`)) {
                              deleteService(service.id);
                              showToast(`Supprimé service "${service.title}"`);
                            }
                          }}
                          className="p-2 rounded-lg bg-white/5 hover:bg-red-500 text-gray-300 hover:text-white transition-colors cursor-pointer"
                          title="Supprimer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-gray-300 font-medium">{service.shortDesc}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{service.fullDesc}</p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#1E1F26] text-gray-300 text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                      <span>Travaux associés: <strong className="text-[#FF8A00]">{serviceWorksCount}</strong></span>
                      <button
                        onClick={() => {
                          handleOpenCreateProject(
                            service.title.includes('Web')
                              ? 'Web Design'
                              : service.title.includes('Vibe')
                              ? 'Vibe No Code'
                              : service.title.includes('UI')
                              ? 'UI/UX'
                              : 'Infographiste'
                          );
                        }}
                        className="text-[#FF8A00] hover:underline font-bold cursor-pointer"
                      >
                        + Ajouter un travail pour ce service
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: PAGE WEB DESIGN CUSTOMIZER */}
        {activeTab === 'web-design-page' && (
          <PageCustomizerForm
            pageKey="webDesign"
            pageTitle="Page Web Design"
            pageBadgeText="Web Design Specialization"
            icon={Sparkles}
            config={pagesConfig.webDesign}
            onSave={(updated) => {
              updatePageConfig('webDesign', updated);
              showToast('✅ Page Web Design mise à jour avec succès!');
            }}
            relatedProjects={projects.filter(
              (p) => p.category === 'Web Design' || p.tags.includes('Web Design')
            )}
            onOpenCreateProject={() => handleOpenCreateProject('Web Design')}
            onOpenEditProject={(p) => handleOpenEditProject(p)}
            onOpenQuickImageModal={(p) => {
              setQuickImageProject(p);
              setNewImageUrlInput(p.imageUrl);
            }}
            onDeleteProject={(id) => {
              deleteProject(id);
              showToast('Projet supprimé');
            }}
          />
        )}

        {/* TAB 5: PAGE VIBE NO CODE CUSTOMIZER */}
        {activeTab === 'vibe-nocode-page' && (
          <PageCustomizerForm
            pageKey="vibeNoCode"
            pageTitle="Page Vibe No Code"
            pageBadgeText="Vibe No Code & AI Speed"
            icon={Zap}
            config={pagesConfig.vibeNoCode}
            onSave={(updated) => {
              updatePageConfig('vibeNoCode', updated);
              showToast('✅ Page Vibe No Code mise à jour avec succès!');
            }}
            relatedProjects={projects.filter(
              (p) => p.category === 'Vibe No Code' || p.tags.includes('Vibe No Code')
            )}
            onOpenCreateProject={() => handleOpenCreateProject('Vibe No Code')}
            onOpenEditProject={(p) => handleOpenEditProject(p)}
            onOpenQuickImageModal={(p) => {
              setQuickImageProject(p);
              setNewImageUrlInput(p.imageUrl);
            }}
            onDeleteProject={(id) => {
              deleteProject(id);
              showToast('Projet supprimé');
            }}
          />
        )}

        {/* TAB 6: PAGE INFOGRAPHISTE CUSTOMIZER */}
        {activeTab === 'infographiste-page' && (
          <PageCustomizerForm
            pageKey="infographiste"
            pageTitle="Page Infographiste"
            pageBadgeText="Infographiste & Visual Designer"
            icon={Palette}
            config={pagesConfig.infographiste}
            onSave={(updated) => {
              updatePageConfig('infographiste', updated);
              showToast('✅ Page Infographiste mise à jour avec succès!');
            }}
            relatedProjects={projects.filter(
              (p) =>
                p.category === 'Infographiste' ||
                p.tags.includes('Infographiste') ||
                (p.category as string) === 'Designer'
            )}
            onOpenCreateProject={() => handleOpenCreateProject('Infographiste')}
            onOpenEditProject={(p) => handleOpenEditProject(p)}
            onOpenQuickImageModal={(p) => {
              setQuickImageProject(p);
              setNewImageUrlInput(p.imageUrl);
            }}
            onDeleteProject={(id) => {
              deleteProject(id);
              showToast('Projet supprimé');
            }}
          />
        )}
      </div>

      {/* QUICK IMAGE REPLACE MODAL */}
      <AnimatePresence>
        {quickImageProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg p-6 rounded-3xl bg-[#141519] border border-[#FF8A00]/40 shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#FF8A00]">
                    Remplacer l'image
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading">
                    {quickImageProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setQuickImageProject(null)}
                  className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Current Preview */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 block">Aperçu de l'image:</label>
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-black border border-white/10">
                  <img
                    src={newImageUrlInput || quickImageProject.imageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Option A: Upload file from computer */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 block">Option 1: Téléverser depuis l'ordinateur</label>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, false)}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-2.5 rounded-xl bg-[#1E1F26] border border-white/10 hover:border-[#FF8A00] text-gray-200 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Upload className="w-4 h-4 text-[#FF8A00]" />
                  <span>Choisir un fichier image</span>
                </button>
              </div>

              {/* Option B: Enter Image URL */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 block">Option 2: Coller une URL d'image</label>
                <input
                  type="text"
                  value={newImageUrlInput}
                  onChange={(e) => setNewImageUrlInput(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                />
              </div>

              {/* Option C: Presets */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 block">Option 3: Choisir parmi les exemples</label>
                <div className="grid grid-cols-3 gap-2">
                  {PRESET_IMAGES.map((preset) => (
                    <button
                      key={preset.url}
                      onClick={() => setNewImageUrlInput(preset.url)}
                      className="p-1.5 rounded-lg bg-[#0B0C0E] border border-white/10 hover:border-[#FF8A00] text-[10px] text-gray-300 truncate cursor-pointer text-left"
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setQuickImageProject(null)}
                  className="px-5 py-2.5 rounded-full bg-white/5 text-gray-300 text-xs font-bold cursor-pointer"
                >
                  Annuler
                </button>
                <button
                  onClick={handleApplyQuickImageReplace}
                  className="px-6 py-2.5 rounded-full bg-[#FF8A00] text-black font-extrabold text-xs cursor-pointer hover:bg-[#ffa026]"
                >
                  Enregistrer l'image
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CREATE / EDIT PROJECT MODAL */}
      <AnimatePresence>
        {isProjectModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-[#141519] border border-white/10 shadow-2xl space-y-6 my-8"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-2xl font-bold text-white font-heading">
                  {editingProject ? 'Éditer le Travail' : 'Nouveau Travail / Projet'}
                </h3>
                <button
                  onClick={() => setIsProjectModalOpen(false)}
                  className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProject} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Title */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold text-gray-300 block">Titre du projet *</label>
                    <input
                      type="text"
                      required
                      value={projectFormData.title}
                      onChange={(e) =>
                        setProjectFormData({ ...projectFormData, title: e.target.value })
                      }
                      placeholder="Ex: Aura AI Landing Page"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>

                  {/* Client */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-300 block">Nom du Client</label>
                    <input
                      type="text"
                      value={projectFormData.client}
                      onChange={(e) =>
                        setProjectFormData({ ...projectFormData, client: e.target.value })
                      }
                      placeholder="Ex: Aura Labs Inc."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-300 block">Catégorie de Service *</label>
                    <select
                      value={projectFormData.category}
                      onChange={(e) =>
                        setProjectFormData({
                          ...projectFormData,
                          category: e.target.value as Project['category']
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                    >
                      <option value="Web Design">Web Design</option>
                      <option value="Vibe No Code">Vibe No Code</option>
                      <option value="Infographiste">Infographiste</option>
                      <option value="UI/UX">UI/UX</option>
                      <option value="AI Design">AI Design</option>
                    </select>
                  </div>

                  {/* Year */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-300 block">Année</label>
                    <input
                      type="text"
                      value={projectFormData.year}
                      onChange={(e) =>
                        setProjectFormData({ ...projectFormData, year: e.target.value })
                      }
                      placeholder="2026"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>

                  {/* Live URL */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-300 block">Lien Démo / Live (optionnel)</label>
                    <input
                      type="text"
                      value={projectFormData.liveUrl}
                      onChange={(e) =>
                        setProjectFormData({ ...projectFormData, liveUrl: e.target.value })
                      }
                      placeholder="https://..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>
                </div>

                {/* Short Description */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Description courte</label>
                  <textarea
                    rows={2}
                    value={projectFormData.description}
                    onChange={(e) =>
                      setProjectFormData({ ...projectFormData, description: e.target.value })
                    }
                    placeholder="Brève description affichée sur la carte..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>

                {/* Long Description */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Description détaillée (Modal Case Study)</label>
                  <textarea
                    rows={3}
                    value={projectFormData.longDescription}
                    onChange={(e) =>
                      setProjectFormData({ ...projectFormData, longDescription: e.target.value })
                    }
                    placeholder="Détails complets sur la réalisation..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>

                {/* Image Section */}
                <div className="space-y-2 p-4 rounded-xl bg-[#0B0C0E] border border-white/10">
                  <label className="text-xs font-bold text-[#FF8A00] block">Image du Projet</label>
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <div className="w-24 h-16 rounded-lg overflow-hidden bg-black shrink-0 border border-white/10">
                      <img
                        src={projectFormData.imageUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 space-y-2 w-full">
                      <input
                        type="text"
                        value={projectFormData.imageUrl}
                        onChange={(e) =>
                          setProjectFormData({ ...projectFormData, imageUrl: e.target.value })
                        }
                        placeholder="https://..."
                        className="w-full px-3 py-1.5 rounded-lg bg-[#141519] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                      />
                      <input
                        type="file"
                        id="modalFileInput"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, true)}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => document.getElementById('modalFileInput')?.click()}
                        className="px-3 py-1.5 rounded-lg bg-[#1A1B20] border border-white/10 text-xs font-bold text-gray-300 hover:text-white hover:border-[#FF8A00] flex items-center gap-1.5 cursor-pointer"
                      >
                        <Upload className="w-3.5 h-3.5 text-[#FF8A00]" />
                        <span>Téléverser une image locale</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Tags & Deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-300 block">Tags (séparés par des virgules)</label>
                    <input
                      type="text"
                      value={projectFormData.tags}
                      onChange={(e) =>
                        setProjectFormData({ ...projectFormData, tags: e.target.value })
                      }
                      placeholder="Web Design, Figma, React"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-300 block">Livrables (séparés par des virgules)</label>
                    <input
                      type="text"
                      value={projectFormData.deliverables}
                      onChange={(e) =>
                        setProjectFormData({ ...projectFormData, deliverables: e.target.value })
                      }
                      placeholder="Hero Landing, Design System"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>
                </div>

                {/* Home Page Featured Toggle */}
                <div className="p-3 rounded-xl bg-[#0B0C0E] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#FF8A00]" />
                    <span className="text-xs font-bold text-white">Afficher sur la Home Page ("Purpose & Precision")</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={projectFormData.featured}
                    onChange={(e) =>
                      setProjectFormData({ ...projectFormData, featured: e.target.checked })
                    }
                    className="w-5 h-5 accent-[#FF8A00] cursor-pointer"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setIsProjectModalOpen(false)}
                    className="px-6 py-2.5 rounded-full bg-white/5 text-gray-300 text-xs font-bold cursor-pointer"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-2.5 rounded-full bg-[#FF8A00] text-black font-extrabold text-xs hover:bg-[#ffa026] cursor-pointer shadow-lg"
                  >
                    Enregistrer le travail
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CREATE / EDIT SERVICE MODAL */}
      <AnimatePresence>
        {isServiceModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#141519] border border-white/10 shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-2xl font-bold text-white font-heading">
                  {editingService ? 'Éditer le Service' : 'Nouveau Service'}
                </h3>
                <button
                  onClick={() => setIsServiceModalOpen(false)}
                  className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveService} className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-300 block">Numéro</label>
                    <input
                      type="text"
                      value={serviceFormData.number}
                      onChange={(e) =>
                        setServiceFormData({ ...serviceFormData, number: e.target.value })
                      }
                      placeholder="01."
                      className="w-full px-3 py-2 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>
                  <div className="space-y-1 col-span-2">
                    <label className="text-xs font-bold text-gray-300 block">Titre du Service *</label>
                    <input
                      type="text"
                      required
                      value={serviceFormData.title}
                      onChange={(e) =>
                        setServiceFormData({ ...serviceFormData, title: e.target.value })
                      }
                      placeholder="Ex: Brand Identity Design"
                      className="w-full px-3 py-2 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Description courte</label>
                  <input
                    type="text"
                    value={serviceFormData.shortDesc}
                    onChange={(e) =>
                      setServiceFormData({ ...serviceFormData, shortDesc: e.target.value })
                    }
                    placeholder="Brève accroche..."
                    className="w-full px-3 py-2 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Description complète</label>
                  <textarea
                    rows={3}
                    value={serviceFormData.fullDesc}
                    onChange={(e) =>
                      setServiceFormData({ ...serviceFormData, fullDesc: e.target.value })
                    }
                    placeholder="Explication globale du service..."
                    className="w-full px-3 py-2 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Tags / Compétences (séparés par des virgules)</label>
                  <input
                    type="text"
                    value={serviceFormData.tags}
                    onChange={(e) =>
                      setServiceFormData({ ...serviceFormData, tags: e.target.value })
                    }
                    placeholder="Figma, Wireframing, User Testing"
                    className="w-full px-3 py-2 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300 block">Onglet de destination</label>
                  <select
                    value={serviceFormData.categoryTab}
                    onChange={(e) =>
                      setServiceFormData({
                        ...serviceFormData,
                        categoryTab: e.target.value as PageTab
                      })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-[#0B0C0E] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF8A00]"
                  >
                    <option value="web-design">Web Design</option>
                    <option value="vibe-nocode">Vibe No Code</option>
                    <option value="designer">Designer</option>
                  </select>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setIsServiceModalOpen(false)}
                    className="px-5 py-2.5 rounded-full bg-white/5 text-gray-300 text-xs font-bold cursor-pointer"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#FF8A00] text-black font-extrabold text-xs cursor-pointer hover:bg-[#ffa026]"
                  >
                    Enregistrer le Service
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
