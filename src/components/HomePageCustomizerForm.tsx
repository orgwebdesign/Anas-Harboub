import React, { useState, useRef } from 'react';
import { HomeConfig } from '../context/PortfolioContext';
import { Project } from '../types';
import {
  Sparkles,
  Save,
  Image as ImageIcon,
  Upload,
  User,
  Star,
  Plus,
  Trash2,
  Edit,
  CheckCircle2,
  Layers,
  Award,
  Globe
} from 'lucide-react';

const PRESET_PORTRAITS = [
  { name: 'Studio Portrait (Default)', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' },
  { name: 'Creative Designer Workstation', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80' },
  { name: 'Dark Studio Aesthetic', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80' }
];

interface HomePageCustomizerFormProps {
  config: HomeConfig;
  onSave: (updated: Partial<HomeConfig>) => void;
  featuredProjects: Project[];
  allProjects: Project[];
  onToggleFeatured: (project: Project) => void;
  onOpenCreateProject: () => void;
  onOpenEditProject: (p: Project) => void;
  onOpenQuickImageModal: (p: Project) => void;
  onDeleteProject: (id: string) => void;
}

export const HomePageCustomizerForm: React.FC<HomePageCustomizerFormProps> = ({
  config,
  onSave,
  featuredProjects,
  allProjects,
  onToggleFeatured,
  onOpenCreateProject,
  onOpenEditProject,
  onOpenQuickImageModal,
  onDeleteProject
}) => {
  const [formData, setFormData] = useState<HomeConfig>({ ...config });
  const [isSaved, setIsSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: keyof HomeConfig, value: string) => {
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
        handleChange('portrait', result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-[32px] bg-[#141519] border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF8A00]/10 border border-[#FF8A00]/30 text-xs font-mono font-bold text-[#FF8A00]">
              <User className="w-3.5 h-3.5" />
              <span>Page d'Accueil (Home)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Gestionnaire de la <span className="text-[#FF8A00]">Page d'Accueil</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Personnalisez le titre, la biographie, la photo de profil, la citation hero et la sélection de vos projets phares.
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
                  <span>Enregistrer la Home</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Controls (7 cols) */}
        <form onSubmit={handleSave} className="lg:col-span-7 space-y-6">
          {/* Identity & Hero Texts */}
          <div className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <Sparkles className="w-4 h-4 text-[#FF8A00]" />
              <h3 className="text-lg font-bold text-white font-heading">
                Hero Section & Identité Visuelle
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Nom d'Artiste / Concepteur
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Ex: Anass Harboub"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white font-bold text-sm focus:border-[#FF8A00] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Localisation
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  placeholder="Ex: Morocco / Worldwide"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white font-medium text-sm focus:border-[#FF8A00] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                Badge du Hero
              </label>
              <input
                type="text"
                value={formData.heroBadge}
                onChange={(e) => handleChange('heroBadge', e.target.value)}
                placeholder="Ex: ✦ UI/UX • Web Designer • Infographiste"
                className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white font-mono text-xs focus:border-[#FF8A00] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                Slogan Animer (Falling Text)
              </label>
              <textarea
                rows={3}
                value={formData.tagline}
                onChange={(e) => handleChange('tagline', e.target.value)}
                placeholder="I design digital experiences people remember..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white font-medium text-sm focus:border-[#FF8A00] focus:outline-none resize-none"
              />
            </div>
          </div>

          {/* Portrait & Media */}
          <div className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <ImageIcon className="w-4 h-4 text-[#FF8A00]" />
              <h3 className="text-lg font-bold text-white font-heading">
                Photo de Profil & Portrait Studio
              </h3>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                URL de la Photo de Profil
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={formData.portrait}
                  onChange={(e) => handleChange('portrait', e.target.value)}
                  placeholder="https://..."
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
          </div>

          {/* About Section Customizer */}
          <div className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <User className="w-4 h-4 text-[#FF8A00]" />
              <h3 className="text-lg font-bold text-white font-heading">
                Section Biographique ("Who is Anass?")
              </h3>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                Titre Principal de la Bio
              </label>
              <input
                type="text"
                value={formData.aboutHeadline}
                onChange={(e) => handleChange('aboutHeadline', e.target.value)}
                placeholder="Who is Anass Harboub?"
                className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white font-bold text-base focus:border-[#FF8A00] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                Paragraphe Résumé (Présentation)
              </label>
              <textarea
                rows={3}
                value={formData.aboutDescription}
                onChange={(e) => handleChange('aboutDescription', e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white font-medium text-sm focus:border-[#FF8A00] focus:outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                Paragraphe Approche & Philosophie
              </label>
              <textarea
                rows={3}
                value={formData.aboutExtended}
                onChange={(e) => handleChange('aboutExtended', e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-gray-300 text-xs focus:border-[#FF8A00] focus:outline-none resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Années d'Expérience
                </label>
                <input
                  type="text"
                  value={formData.yearsExperience}
                  onChange={(e) => handleChange('yearsExperience', e.target.value)}
                  placeholder="6+"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white font-bold text-sm focus:border-[#FF8A00] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Projets Réalisés
                </label>
                <input
                  type="text"
                  value={formData.completedProjects}
                  onChange={(e) => handleChange('completedProjects', e.target.value)}
                  placeholder="50+"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B0C0E] border border-white/10 text-white font-bold text-sm focus:border-[#FF8A00] focus:outline-none"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-[#FF8A00] text-black font-extrabold text-sm hover:bg-[#ffa026] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl"
          >
            <Save className="w-4 h-4" />
            <span>Enregistrer la Page d'Accueil</span>
          </button>
        </form>

        {/* Featured Showcase Projects (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Live Preview Portrait Card */}
          <div className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-4">
            <h3 className="text-sm font-bold text-white font-heading pb-2 border-b border-white/10">
              Aperçu Portrait Studio
            </h3>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] bg-[#0B0C0E] flex items-end">
              <img
                src={formData.portrait}
                alt="Preview Portrait"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h4 className="text-lg font-extrabold text-white font-heading">
                  {formData.name}
                </h4>
                <p className="text-xs text-[#FF8A00] font-bold">
                  {formData.location} • {formData.yearsExperience} Exp.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Projects Showcase Manager */}
          <div className="p-6 rounded-2xl bg-[#141519] border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="text-sm font-bold text-white font-heading flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-[#FF8A00]" />
                  <span>Projets Phares (Home Showcase)</span>
                </h3>
                <p className="text-[11px] text-gray-400">
                  {featuredProjects.length} projets mis en avant sur la page d'accueil
                </p>
              </div>

              <button
                onClick={onOpenCreateProject}
                className="px-3 py-1.5 rounded-lg bg-[#FF8A00] text-black font-bold text-xs hover:bg-[#ffa026] transition-all flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Nouveau</span>
              </button>
            </div>

            <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
              {allProjects.map((project) => {
                const isFeatured = project.featured;
                return (
                  <div
                    key={project.id}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                      isFeatured
                        ? 'bg-[#1A1B20] border-[#FF8A00]/50'
                        : 'bg-[#0B0C0E] border-white/5 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-12 h-12 rounded-lg object-cover border border-white/10 shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-white truncate flex items-center gap-1">
                          <span>{project.title}</span>
                          {isFeatured && <Star className="w-3 h-3 text-[#FF8A00] fill-[#FF8A00]" />}
                        </h4>
                        <span className="text-[10px] text-gray-400 block truncate">
                          {project.category} • {project.year}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => onToggleFeatured(project)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold transition-all cursor-pointer ${
                          isFeatured
                            ? 'bg-[#FF8A00] text-black'
                            : 'bg-white/5 text-gray-400 hover:text-white'
                        }`}
                        title={isFeatured ? 'Retirer de la Home' : 'Mettre en avant sur la Home'}
                      >
                        {isFeatured ? '★ Phare' : '☆ Ajouter'}
                      </button>
                      <button
                        onClick={() => onOpenEditProject(project)}
                        className="p-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                        title="Modifier"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
