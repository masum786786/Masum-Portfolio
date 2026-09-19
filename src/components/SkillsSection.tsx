import React, { useState } from 'react';
import { SkillItem, Language } from '../types';
import { translations } from '../i18n/translations';
import {
  Code2,
  Server,
  TrendingUp,
  Cpu,
  Award,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface SkillsSectionProps {
  skills: SkillItem[];
  language: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, language }) => {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState<'all' | 'software' | 'it-support' | 'marketing'>('all');

  const filteredSkills = skills.filter((s) => {
    if (activeTab === 'all') return true;
    return s.category === activeTab;
  });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3 border border-blue-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.skills.sectionTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {language === 'ar'
              ? 'الترسانة التقنية والشهادات المعتمدة'
              : 'Battle-Tested Tech Arsenal & Industry Certifications'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.skills.sectionSubtitle}
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {language === 'ar' ? 'جميع المهارات' : 'All Technologies'}
          </button>
          <button
            onClick={() => setActiveTab('software')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'software'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{t.nav.software}</span>
          </button>
          <button
            onClick={() => setActiveTab('it-support')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'it-support'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>{t.nav.itSupport}</span>
          </button>
          <button
            onClick={() => setActiveTab('marketing')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              activeTab === 'marketing'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{t.nav.marketing}</span>
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Track */}
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      skill.category === 'software'
                        ? 'bg-blue-600'
                        : skill.category === 'it-support'
                        ? 'bg-emerald-600'
                        : 'bg-purple-600'
                    }`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                <span>
                  {skill.experienceYears} {language === 'ar' ? 'سنوات خبرة' : 'yrs experience'}
                </span>
                {skill.highlight && (
                  <span className="font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                    {skill.highlight}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Badges */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">
                {t.skills.certificationsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {language === 'ar'
                  ? 'اعتمادات رسمية صادرة من كبرى الشركات العالمية'
                  : 'Formally accredited by global cloud & media platforms'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-xs sm:text-sm">{t.skills.cert1}</div>
                <div className="text-[11px] text-slate-400">Amazon Web Services</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-xs sm:text-sm">{t.skills.cert2}</div>
                <div className="text-[11px] text-slate-400">Google Academy</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-xs sm:text-sm">{t.skills.cert3}</div>
                <div className="text-[11px] text-slate-400">Meta Blueprint</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-xs sm:text-sm">{t.skills.cert4}</div>
                <div className="text-[11px] text-slate-400">CompTIA Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
