import React, { useState } from 'react';
import { Project, Language, Discipline } from '../types';
import { translations } from '../i18n/translations';
import {
  Code2,
  Server,
  TrendingUp,
  Sparkles,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Building2,
  Layers,
  ChevronRight,
} from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  language: Language;
  activeFilter: Discipline | 'hybrid';
  onFilterChange: (filter: Discipline | 'hybrid') => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  language,
  activeFilter,
  onFilterChange,
  onSelectProject,
}) => {
  const t = translations[language];
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3 border border-blue-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.projects.sectionTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {language === 'ar'
              ? 'أعمال منجزة ونتائج حقيقية لعملائنا'
              : 'Verified Case Studies & Measurable Deliverables'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.projects.sectionSubtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            id="filter-proj-all"
            onClick={() => onFilterChange('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            {t.projects.filterAll}
          </button>

          <button
            id="filter-proj-software"
            onClick={() => onFilterChange('software')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeFilter === 'software'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{t.projects.filterSoftware}</span>
          </button>

          <button
            id="filter-proj-it"
            onClick={() => onFilterChange('it-support')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeFilter === 'it-support'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/25'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>{t.projects.filterIT}</span>
          </button>

          <button
            id="filter-proj-marketing"
            onClick={() => onFilterChange('marketing')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeFilter === 'marketing'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{t.projects.filterMarketing}</span>
          </button>

          <button
            id="filter-proj-hybrid"
            onClick={() => onFilterChange('hybrid')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeFilter === 'hybrid'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-500/25'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.projects.filterHybrid}</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const title = isRtl ? project.titleAr : project.titleEn;
            const tagline = isRtl ? project.taglineAr : project.taglineEn;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={project.image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 flex items-center gap-2">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${
                          project.category === 'software'
                            ? 'bg-blue-600/90 text-white'
                            : project.category === 'it-support'
                            ? 'bg-emerald-600/90 text-white'
                            : project.category === 'marketing'
                            ? 'bg-purple-600/90 text-white'
                            : 'bg-amber-600/90 text-white'
                        }`}
                      >
                        {project.category === 'software'
                          ? isRtl ? 'برمجيات' : 'Software'
                          : project.category === 'it-support'
                          ? isRtl ? 'دعم فني' : 'IT Support'
                          : project.category === 'marketing'
                          ? isRtl ? 'تسويق رقمي' : 'Marketing'
                          : isRtl ? 'مشروع متكامل' : 'Triple Threat'}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 rtl:left-auto rtl:right-3 flex items-center gap-1.5 text-white text-xs font-semibold drop-shadow-md">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{project.client}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2 leading-relaxed">
                      {tagline}
                    </p>

                    {/* Metric Highlights in Card */}
                    <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-100 dark:border-slate-800">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-base font-extrabold text-blue-600 dark:text-blue-400">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">
                            {isRtl ? m.labelAr : m.labelEn}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] text-slate-400 font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group-hover:shadow-sm"
                  >
                    <span>{t.projects.viewDetails}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
