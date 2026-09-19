import React from 'react';
import { Testimonial, Language } from '../types';
import { translations } from '../i18n/translations';
import { Star, MessageSquareQuote, CheckCircle2, Building2 } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  language: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  language,
}) => {
  const t = translations[language];
  const isRtl = language === 'ar';

  return (
    <section id="reviews" className="py-20 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3 border border-blue-500/20">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{t.testimonials.sectionTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {language === 'ar'
              ? 'ثقة شركاء النجاح وأصحاب الأعمال'
              : 'Endorsements from Founders & Technology Leaders'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.testimonials.sectionSubtitle}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi) => {
            const quote = isRtl ? testi.quoteAr : testi.quoteEn;
            const role = isRtl ? testi.roleAr : testi.roleEn;

            return (
              <div
                key={testi.id}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all"
              >
                <div>
                  {/* Star Rating & Verified Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(testi.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{t.testimonials.verifiedClient}</span>
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed">
                    "{quote}"
                  </p>
                </div>

                <div>
                  {/* Metric Pill */}
                  <div className="p-2.5 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-600 dark:text-blue-400 mb-4 text-center">
                    {testi.metricAchieved}
                  </div>

                  {/* Author Profile */}
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <img
                      src={testi.avatar}
                      alt={testi.name}
                      className="w-11 h-11 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white">
                        {testi.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {role} • {testi.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
