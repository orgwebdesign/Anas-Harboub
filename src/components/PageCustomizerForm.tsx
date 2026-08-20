import React, { useState, useRef } from 'react';
import { PageConfig, PagesConfig } from '../context/PortfolioContext';
import { Project } from '../types';
import {
  Sparkles,
  Save,
  RotateCcw,
  Image as ImageIcon,
  Upload,
  Link,
  Plus,
  Trash2,
  Edit,
  ExternalLink,
  Eye,
  CheckCircle2,
  Layers,
  Palette,
  Zap,
  Tag
} from 'lucide-react';
import { motion } from 'motion/react';

const PRESET_IMAGES = [
  { name: 'SaaS Web Platform', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80' },
  { name: 'AI No-Code App', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Design System & Tokens', url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80' },
  { name: 'E-Commerce Luxury', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Mobile UI/UX App', url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Creative Agency Dashboard', url: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1200&q=80' }
];

interface PageCustomizerFormProps {
  pageKey: keyof PagesConfig;
  pageTitle: string;
  pageBadgeText: string;
  icon: React.ElementType;
  config: PageConfig;
  onSave: (updated: Partial<PageConfig>) => void;
  relatedProjects: Project[];
  onOpenCreateProject: () => void;
  onOpenEditProject: (p: Project) => void;
  onOpenQuickImageModal: (p: Project) => void;
  onDeleteProject: (id: string) => void;
}

export const PageCustomizerForm: React.FC<PageCustomizerFormProps> = ({
  pageKey,
  pageTitle,
  pageBadgeText,
  icon: Icon,
  config,
  onSave,
  relatedProjects,
  onOpenCreateProject,
  onOpenEditProject,
  onOpenQuickImageModal,
  onDeleteProject
}) => {
  const [formData, setFormData] = useState<PageConfig>({ ...config });
  const [isSaved, setIsSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: keyof PageConfig, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setIsSaved(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        handleChange('heroImage', result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header Banner */}
      <div className="p-6 sm:p-8 rounded-[32px] bg-[#141519] border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF8A00]/10 border border-[#FF8A00]/30 text-xs font-mono font-bold text-[#FF8A00]">
              <Icon className="w-3.5 h-3.5" />
              <span>{pageBadgeText}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Personnaliser la <span className="text-[#FF8A00]">{pageTitle}</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Modifiez le titre, le sous-titre, l'image principale, la description et les piliers de services affichés sur cette page.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              className={`px-6 py-3 rounded-full font-extrabold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-lg ${
                isSaved
                  ? 'bg-green-500 text-black'
                  : 'bg-[#FF8A00] text-black hover:bg-[#ffa026]'
              }`}
            >
              {isSaved ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Enregistré !</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Enregistrer la Page</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Inputs (Left - 7 cols) */}
        <form onSubmit={handleSave} className="lg:col-span-7 space-y-6">
          {/* Main Hero Card Settings */}
          <div className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <Sparkles className="w-4 h-4 text-[#FF8A00]" />
              <h3 className="text-lg font-bold text-white font-heading">
                Hero Section (Textes & Badges)
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Badge Supérieur (Tagline)
                </label>
                <input
                  type="text"
                  value={formData.badge}
                  onChange={(e) => handleChange('badge', e.target.value)}
                  placeholder="Ex: Web Design Specialization"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white font-medium text-sm focus:border-[#FF8A00] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Titre Principal (Headline)
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  placeholder="Ex: Web Experiences Built to Stand Out"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white font-extrabold text-base focus:border-[#FF8A00] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Description Principale
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  placeholder="Ecrivez un court paragraphe descriptif pour cette page..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white font-medium text-sm focus:border-[#FF8A00] focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* Image & Visual Media Settings */}
          <div className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <ImageIcon className="w-4 h-4 text-[#FF8A00]" />
              <h3 className="text-lg font-bold text-white font-heading">
                Image / Bannières de la Page
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                  URL de l'image ou Banner
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={formData.heroImage}
                    onChange={(e) => handleChange('heroImage', e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white font-mono text-xs focus:border-[#FF8A00] focus:outline-none"
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2.5 rounded-xl bg-[#1A1B20] border border-white/10 text-white text-xs font-bold hover:border-[#FF8A00] hover:text-[#FF8A00] transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload</span>
                  </button>
                </div>
              </div>

              {/* Preset Image Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-2">
                  Ou Choisir parmi les Images Prédéfinies :
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PRESET_IMAGES.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleChange('heroImage', preset.url)}
                      className={`group relative rounded-xl overflow-hidden border text-left transition-all cursor-pointer ${
                        formData.heroImage === preset.url
                          ? 'border-[#FF8A00] ring-2 ring-[#FF8A00]/50'
                          : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <img src={preset.url} alt={preset.name} className="w-full h-16 object-cover" />
                      <div className="absolute inset-0 bg-black/60 p-1 flex items-end">
                        <span className="text-[10px] text-white font-bold truncate">
                          {preset.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature Pillars Settings */}
          <div className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <Layers className="w-4 h-4 text-[#FF8A00]" />
              <h3 className="text-lg font-bold text-white font-heading">
                Piliers de Service & Avantages Clés (3 Caractéristiques)
              </h3>
            </div>

            <div className="space-y-4">
              {/* Feature 1 */}
              <div className="p-4 rounded-xl bg-[#0B0C0E] border border-white/5 space-y-3">
                <span className="text-xs font-mono font-bold text-[#FF8A00]">Pilier 01</span>
                <div>
                  <input
                    type="text"
                    value={formData.feature1Title}
                    onChange={(e) => handleChange('feature1Title', e.target.value)}
                    placeholder="Titre Pilier 1"
                    className="w-full px-3 py-2 rounded-lg bg-[#141519] border border-white/10 text-white font-bold text-sm focus:border-[#FF8A00] focus:outline-none mb-2"
                  />
                  <textarea
                    rows={2}
                    value={formData.feature1Desc}
                    onChange={(e) => handleChange('feature1Desc', e.target.value)}
                    placeholder="Description Pilier 1"
                    className="w-full px-3 py-2 rounded-lg bg-[#141519] border border-white/10 text-gray-300 text-xs focus:border-[#FF8A00] focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-4 rounded-xl bg-[#0B0C0E] border border-white/5 space-y-3">
                <span className="text-xs font-mono font-bold text-[#FF8A00]">Pilier 02</span>
                <div>
                  <input
                    type="text"
                    value={formData.feature2Title}
                    onChange={(e) => handleChange('feature2Title', e.target.value)}
                    placeholder="Titre Pilier 2"
                    className="w-full px-3 py-2 rounded-lg bg-[#141519] border border-white/10 text-white font-bold text-sm focus:border-[#FF8A00] focus:outline-none mb-2"
                  />
                  <textarea
                    rows={2}
                    value={formData.feature2Desc}
                    onChange={(e) => handleChange('feature2Desc', e.target.value)}
                    placeholder="Description Pilier 2"
                    className="w-full px-3 py-2 rounded-lg bg-[#141519] border border-white/10 text-gray-300 text-xs focus:border-[#FF8A00] focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-4 rounded-xl bg-[#0B0C0E] border border-white/5 space-y-3">
                <span className="text-xs font-mono font-bold text-[#FF8A00]">Pilier 03</span>
                <div>
                  <input
                    type="text"
                    value={formData.feature3Title}
                    onChange={(e) => handleChange('feature3Title', e.target.value)}
                    placeholder="Titre Pilier 3"
                    className="w-full px-3 py-2 rounded-lg bg-[#141519] border border-white/10 text-white font-bold text-sm focus:border-[#FF8A00] focus:outline-none mb-2"
                  />
                  <textarea
                    rows={2}
                    value={formData.feature3Desc}
                    onChange={(e) => handleChange('feature3Desc', e.target.value)}
                    placeholder="Description Pilier 3"
                    className="w-full px-3 py-2 rounded-lg bg-[#141519] border border-white/10 text-gray-300 text-xs focus:border-[#FF8A00] focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-[#FF8A00] text-black font-extrabold text-sm hover:bg-[#ffa026] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
          >
            <Save className="w-4 h-4" />
            <span>Enregistrer Toutes les Modifications de la Page</span>
          </button>
        </form>

        {/* Preview & Associated Works (Right - 5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Live Preview Card */}
          <div className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#FF8A00]" />
                <h3 className="text-sm font-bold text-white font-heading">
                  Aperçu En Direct
                </h3>
              </div>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#FF8A00]/10 text-[#FF8A00] font-bold">
                Live Preview
              </span>
            </div>

            {/* Simulated Hero Header */}
            <div className="p-5 rounded-xl bg-[#0B0C0E] border border-white/10 text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1B20] border border-white/10 text-[10px] font-bold text-[#FF8A00]">
                <Icon className="w-3 h-3" />
                <span>{formData.badge || 'Badge Text'}</span>
              </div>
              <h4 className="text-xl font-extrabold text-white font-heading leading-tight">
                {formData.title || 'Headline Text'}
              </h4>
              <p className="text-gray-300 text-xs line-clamp-2">
                {formData.description || 'Description paragraph...'}
              </p>

              {formData.heroImage && (
                <div className="pt-2">
                  <img
                    src={formData.heroImage}
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-lg border border-white/10"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Associated Works Section */}
          <div className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="text-sm font-bold text-white font-heading">
                  Projets Associés à cette Page ({relatedProjects.length})
                </h3>
                <p className="text-[11px] text-gray-400">
                  Affiche tous les projets sous cette catégorie
                </p>
              </div>

              <button
                onClick={onOpenCreateProject}
                className="px-3 py-1.5 rounded-lg bg-[#FF8A00] text-black font-bold text-xs hover:bg-[#ffa026] transition-all flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Ajouter</span>
              </button>
            </div>

            {relatedProjects.length === 0 ? (
              <div className="p-6 text-center rounded-xl bg-[#0B0C0E] border border-white/5 space-y-2">
                <p className="text-xs text-gray-400">Aucun projet trouvé pour cette page.</p>
                <button
                  onClick={onOpenCreateProject}
                  className="text-xs text-[#FF8A00] font-bold hover:underline"
                >
                  + Ajouter le premier projet
                </button>
              </div>
            ) : (
              <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                {relatedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="p-3 rounded-xl bg-[#0B0C0E] border border-white/5 flex items-center justify-between gap-3 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-12 h-12 rounded-lg object-cover border border-white/10 shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">
                          {project.title}
                        </h4>
                        <span className="text-[10px] text-gray-400 block truncate">
                          {project.client} • {project.year}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => onOpenQuickImageModal(project)}
                        className="p-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-[#FF8A00] hover:bg-white/10 transition-all cursor-pointer"
                        title="Changer l'image"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onOpenEditProject(project)}
                        className="p-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                        title="Modifier"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Supprimer "${project.title}"?`)) {
                            onDeleteProject(project.id);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-red-400 hover:bg-white/10 transition-all cursor-pointer"
                        title="Supprimer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
