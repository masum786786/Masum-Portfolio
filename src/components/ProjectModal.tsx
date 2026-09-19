import React, { useEffect } from 'react';
import { Project, Language } from '../types';
import { translations } from '../i18n/translations';
import {
  X,
  ExternalLink,
  Github,
  MapPin,
  Calendar,
  Building2,
  CheckCircle2,
  AlertCircle,
  Cpu,
  BarChart3,
  PhoneCall,
  Sparkles,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  language: Language;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  language,
  onClose,
  onInquire,
}) => {
  const t = translations[language];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isRtl = language === 'ar';
  const title = isRtl ? project.titleAr : project.titleEn;
  const tagline = isRtl ? project.taglineAr : project.taglineEn;
  const description = isRtl ? project.descriptionAr : project.descriptionEn;
  const challenges = isRtl ? project.challengesAr : project.challengesEn;
  const solutions = isRtl ? project.solutionsAr : project.solutionsEn;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="project-modal-content"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
      >
        {/* Modal Header Bar with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                project.category === 'software'
                  ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                  : project.category === 'it-support'
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                  : project.category === 'marketing'
                  ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                  : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
              }`}
            >
              {project.category === 'software'
                ? isRtl ? 'تطوير برمجيات' : 'Software Engineering'
                : project.category === 'it-support'
                ? isRtl ? 'دعم فني وسحابة' : 'IT Support & Systems'
                : project.category === 'marketing'
                ? isRtl ? 'تسويق رقمي' : 'Digital Marketing'
                : isRtl ? 'مشروع شامل (Triple-Threat)' : 'Hybrid Ecosystem'}
            </span>
            {project.featured && (
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <Sparkles className="w-3 h-3" />
                <span>Featured</span>
              </span>
            )}
          </div>

          <button
            id="btn-close-project-modal"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Title & Client Metadata */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium mb-4">
              {tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 py-3 border-y border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-blue-500" />
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  {project.client}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span>{project.duration}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-200 dark:border-slate-800 shadow-md">
            <img
              src={project.image}
              alt={title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Key Impact & Metrics */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-500" />
              <span>{t.projects.resultsLabel}</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-center"
                >
                  <div className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400 mb-1">
                    {m.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-slate-600 dark:text-slate-300">
                    {isRtl ? m.labelAr : m.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Summary */}
          <div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Challenge */}
            <div className="p-5 rounded-xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/20">
              <h4 className="text-sm font-bold text-red-600 dark:text-red-400 flex items-center gap-2 mb-3">
                <AlertCircle className="w-4 h-4" />
                <span>{t.projects.challengesTitle}</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {challenges.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Architecture & Solution */}
            <div className="p-5 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20">
              <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t.projects.solutionsTitle}</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {solutions.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-slate-400" />
              <span>{t.projects.techUsed}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t.projects.liveDemo}</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{t.projects.github}</span>
                </a>
              )}
            </div>

            <button
              onClick={() => {
                onClose();
                onInquire(title);
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 flex items-center gap-1.5 shadow-md shadow-blue-500/20 active:scale-95 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{isRtl ? 'طلب مشروع مماثل' : 'Inquire for Similar Project'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
