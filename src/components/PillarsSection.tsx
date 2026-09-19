import React from 'react';
import { Language, Discipline } from '../types';
import { translations } from '../i18n/translations';
import {
  Code2,
  Server,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Activity,
  BarChart3,
  Search,
  Database,
  Cloud,
  Zap,
  Lock,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

interface PillarsSectionProps {
  language: Language;
  selectedDiscipline: Discipline;
  onSelectDiscipline: (d: Discipline) => void;
  onScrollToProjects: (filter: Discipline) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({
  language,
  selectedDiscipline,
  onSelectDiscipline,
  onScrollToProjects,
}) => {
  const t = translations[language];
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="pillars" className="py-20 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3 border border-blue-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.pillars.sectionTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {language === 'ar'
              ? 'ثلاث ركائز أساسية لإنجاح أي منظومة رقمية'
              : 'Three Specialized Pillars for Complete Digital Excellence'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.pillars.sectionSubtitle}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            id="tab-pillar-all"
            onClick={() => onSelectDiscipline('all')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedDiscipline === 'all'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
            }`}
          >
            {t.pillars.tabAll}
          </button>
          <button
            id="tab-pillar-software"
            onClick={() => onSelectDiscipline('software')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              selectedDiscipline === 'software'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
            }`}
          >
            <Code2 className="w-4 h-4 text-blue-400" />
            <span>{t.pillars.tabSoftware}</span>
          </button>
          <button
            id="tab-pillar-it"
            onClick={() => onSelectDiscipline('it-support')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              selectedDiscipline === 'it-support'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
            }`}
          >
            <Server className="w-4 h-4 text-emerald-400" />
            <span>{t.pillars.tabIT}</span>
          </button>
          <button
            id="tab-pillar-marketing"
            onClick={() => onSelectDiscipline('marketing')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              selectedDiscipline === 'marketing'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span>{t.pillars.tabMarketing}</span>
          </button>
        </div>

        {/* Pillars Detailed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 1: Software Development */}
          {(selectedDiscipline === 'all' || selectedDiscipline === 'software') && (
            <div className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Code2 className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                    {language === 'ar' ? 'تطوير البرمجيات' : 'Software Engineering'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {language === 'ar'
                    ? 'تطبيقات الويب والجوال وقواعد البيانات'
                    : 'Full-Stack Web & Mobile Engineering'}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {language === 'ar'
                    ? 'بناء أنظمة برمجية سريعة وقابلة للنمو تعتمد على TypeScript، معمارية خوادم نظيفة، وواجهات مستخدم متجاوبة تتوافق مع أفضل ممارسات الصناعة.'
                    : 'Engineering clean, scalable web applications using TypeScript, modern React architectures, resilient APIs, and battle-tested databases.'}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? 'تطوير واجهات React و Next.js و TypeScript' : 'React, Next.js & TypeScript Frontend'}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? 'خوادم Node.js و Express و Python REST APIs' : 'Node.js, Express & Python REST/GraphQL'}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? 'قواعد بيانات PostgreSQL و MongoDB و Redis' : 'PostgreSQL, Redis & MongoDB Architecture'}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? 'ربط بوابات الدفع (Stripe، مدى، Apple Pay)' : 'Stripe & Regional Payment Gateways'}</span>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind', 'Docker'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onScrollToProjects('software')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>{language === 'ar' ? 'مشاهدة مشاريع البرمجة' : 'View Software Projects'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Pillar 2: IT Support & Infrastructure */}
          {(selectedDiscipline === 'all' || selectedDiscipline === 'it-support') && (
            <div className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Server className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                    {language === 'ar' ? 'الدعم الفني والأنظمة' : 'IT & Infrastructure'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {language === 'ar'
                    ? 'الدعم الفني، الخوادم، والأمان السيبراني'
                    : 'Enterprise IT Support & Cloud Networks'}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {language === 'ar'
                    ? 'حماية أجهزة وخوادم شركتك من التوقف والاختراق مع إدارة مركزية للهويات والنسخ الاحتياطي وحل المشاكل الفنية للموظفين خلال دقائق.'
                    : 'Safeguarding mission-critical systems with 99.9% uptime, rapid remote helpdesk ticket resolution, secure VPNs, and disaster recovery.'}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? 'دعم فني سريع وحل بلاغات خلال أقل من 15 دقيقة' : '<15 Minute SLA Remote Helpdesk'}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? 'إدارة خوادم Linux (Ubuntu/Debian) و Windows' : 'Linux & Windows Server Administration'}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? 'إعداد Microsoft 365 و Azure AD و Intune MDM' : 'Microsoft 365, Azure AD & MDM Security'}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? 'خطط نسخ احتياطي مؤتمت واستعادة فورية عند الطوارئ' : 'Automated Cloud Backups & Disaster Recovery'}</span>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Linux', 'AWS Cloud', 'Microsoft 365', 'Azure AD', 'Cisco/Mikrotik', 'Helpdesk'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onScrollToProjects('it-support')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>{language === 'ar' ? 'مشاهدة مشاريع الدعم الفني' : 'View IT & Cloud Projects'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Pillar 3: Digital Marketing & SEO */}
          {(selectedDiscipline === 'all' || selectedDiscipline === 'marketing') && (
            <div className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-800">
                    {language === 'ar' ? 'التسويق الرقمي' : 'Growth Marketing'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {language === 'ar'
                    ? 'إعلانات الأداء، السيو، ومضاعفة المبيعات'
                    : 'Performance Ads, SEO & CRO Scaling'}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {language === 'ar'
                    ? 'تحويل الزوار إلى عملاء فعليين عبر إعلانات جوجل وميتا المدروسة، تصدر محركات البحث (SEO)، وتهيئة صفحات الهبوط لتحقيق أعلى عائد استثماري.'
                    : 'Scaling customer acquisition with profitable Google & Meta ad campaigns, high-authority technical SEO, and conversion rate optimization.'}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? 'إعلانات جوجل عالية الاستهداف (Search, PMax, Shopping)' : 'High-Intent Google Ads (Search/PMax)'}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? 'إعلانات ميتا المربحة (Instagram & Facebook Ads)' : 'Meta Advantage+ Ad Campaigns (ROAS >4x)'}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? 'سيو تقني وتصدر كلمات البحث والخرائط المحلية' : 'Technical, On-Page & Local SEO Strategy'}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    <span>{language === 'ar' ? 'تتبع خادمي دقيق (GA4 و GTM و Meta CAPI)' : 'Server-Side GTM & Meta CAPI Precision Tracking'}</span>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {['Google Ads', 'Meta Ads', 'GA4 & GTM', 'Technical SEO', 'CRO Funnels', 'Klaviyo'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onScrollToProjects('marketing')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>{language === 'ar' ? 'مشاهدة نتائج التسويق' : 'View Marketing Results'}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
