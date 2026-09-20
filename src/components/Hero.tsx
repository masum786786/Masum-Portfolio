import React, { useState } from 'react';
import { Language, Discipline } from '../types';
import { translations } from '../i18n/translations';
import {
  Code2,
  Server,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  Award,
  Calendar,
  DollarSign,
  ChevronDown,
} from 'lucide-react';

interface HeroProps {
  language: Language;
  selectedDiscipline: Discipline;
  onSelectDiscipline: (d: Discipline) => void;
  onOpenContact: (service?: string) => void;
  onScrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  selectedDiscipline,
  onSelectDiscipline,
  onOpenContact,
  onScrollTo,
}) => {
  const t = translations[language];
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background Ambient Glows (Subtle, purposeful slate & indigo) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Live Status & Triple-Threat Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/5 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t.nav.statusAvailable}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.hero.badgePill}</span>
          </div>
        </div>

        {/* Main Hero Typography */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2] mb-6">
            <span className="block text-slate-500 dark:text-slate-400 text-lg sm:text-2xl font-semibold mb-2">
              {t.hero.greeting}{' '}
              <strong className="text-slate-900 dark:text-white font-bold">
                {t.hero.name}
              </strong>
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500">
              {language === 'ar'
                ? 'مهندس برمجيات • دعم فني وخوادم • تسويق رقمي'
                : 'Software Developer • IT Support Specialist • Digital Marketing'}
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {t.hero.description}
          </p>
        </div>

        {/* Triple-Discipline Interactive Interactive Switcher */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-2 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md">
            {/* 1. Software Developer Card */}
            <button
              id="hero-select-software"
              onClick={() => onSelectDiscipline('software')}
              className={`p-4 rounded-xl text-left rtl:text-right transition-all duration-200 cursor-pointer border ${
                selectedDiscipline === 'software'
                  ? 'bg-white dark:bg-slate-800 border-blue-500 shadow-md shadow-blue-500/10'
                  : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  {t.hero.roleDev}
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {t.hero.roleDevSub}
              </p>
            </button>

            {/* 2. IT Support Card */}
            <button
              id="hero-select-it-support"
              onClick={() => onSelectDiscipline('it-support')}
              className={`p-4 rounded-xl text-left rtl:text-right transition-all duration-200 cursor-pointer border ${
                selectedDiscipline === 'it-support'
                  ? 'bg-white dark:bg-slate-800 border-emerald-500 shadow-md shadow-emerald-500/10'
                  : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Server className="w-5 h-5" />
                </div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  {t.hero.roleIT}
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {t.hero.roleITSub}
              </p>
            </button>

            {/* 3. Digital Marketing Card */}
            <button
              id="hero-select-marketing"
              onClick={() => onSelectDiscipline('marketing')}
              className={`p-4 rounded-xl text-left rtl:text-right transition-all duration-200 cursor-pointer border ${
                selectedDiscipline === 'marketing'
                  ? 'bg-white dark:bg-slate-800 border-purple-500 shadow-md shadow-purple-500/10'
                  : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  {t.hero.roleMktg}
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {t.hero.roleMktgSub}
              </p>
            </button>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            id="hero-cta-projects"
            onClick={() => onScrollTo('projects')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 active:scale-95 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all"
          >
            <span>{t.hero.ctaPrimary}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>

          <button
            id="hero-cta-contact"
            onClick={() => onOpenContact()}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 active:scale-95 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center gap-2 transition-all"
          >
            <Calendar className="w-4 h-4 text-blue-500" />
            <span>{t.hero.ctaSecondary}</span>
          </button>

          <button
            id="hero-cta-estimator"
            onClick={() => onScrollTo('estimator')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-amber-700 dark:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 active:scale-95 border border-amber-500/30 flex items-center justify-center gap-2 transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{t.hero.ctaCalculator}</span>
          </button>
        </div>

        {/* Live Metrics Grid */}
        <div
          id="hero-stats-grid"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-6 border-t border-slate-200/80 dark:border-slate-800"
        >
          <div className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">
              {t.hero.stats.experienceYears}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              {t.hero.stats.experienceLabel}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-1">
              {t.hero.stats.projectsCompleted}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              {t.hero.stats.projectsLabel}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400 mb-1">
              {t.hero.stats.adSpendManaged}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              {t.hero.stats.adSpendLabel}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 mb-1">
              {t.hero.stats.clientSatisfaction}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              {t.hero.stats.clientSatisfactionLabel}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
