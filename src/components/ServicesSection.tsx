import React from 'react';
import { ServiceItem, Language } from '../types';
import { translations } from '../i18n/translations';
import {
  Code2,
  ServerCrash,
  TrendingUp,
  CheckCircle2,
  PackageCheck,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

interface ServicesSectionProps {
  services: ServiceItem[];
  language: Language;
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  language,
  onSelectService,
}) => {
  const t = translations[language];
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-8 h-8 text-blue-500" />;
      case 'ServerCrash':
        return <ServerCrash className="w-8 h-8 text-emerald-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-8 h-8 text-purple-500" />;
      default:
        return <Sparkles className="w-8 h-8 text-blue-500" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3 border border-blue-500/20">
            <PackageCheck className="w-3.5 h-3.5" />
            <span>{t.services.sectionTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {language === 'ar'
              ? 'خدمات متكاملة تغطي دورة حياة عملك الرقمي'
              : 'End-to-End Capabilities Built for Growth & Stability'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.services.sectionSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const title = isRtl ? service.titleAr : service.titleEn;
            const badge = isRtl ? service.badgeAr : service.badgeEn;
            const description = isRtl ? service.descriptionAr : service.descriptionEn;
            const features = isRtl ? service.featuresAr : service.featuresEn;
            const deliverables = isRtl ? service.deliverablesAr : service.deliverablesEn;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                      {getIcon(service.iconName)}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        service.discipline === 'software'
                          ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                          : service.discipline === 'it-support'
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                          : 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                      }`}
                    >
                      {badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {description}
                  </p>

                  {/* Included Features */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                      {t.services.featuresHeading}
                    </h4>
                    <ul className="space-y-2.5">
                      {features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              service.discipline === 'software'
                                ? 'text-blue-500'
                                : service.discipline === 'it-support'
                                ? 'text-emerald-500'
                                : 'text-purple-500'
                            }`}
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-8 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                      <PackageCheck className="w-3.5 h-3.5 text-blue-500" />
                      <span>{t.services.deliverablesHeading}</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                      {deliverables.map((deliv, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => onSelectService(title)}
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>{t.services.requestQuote}</span>
                    <ArrowIcon className="w-4 h-4" />
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
