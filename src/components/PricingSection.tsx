import React from 'react';
import { PricingPlan, Language } from '../types';
import { translations } from '../i18n/translations';
import { CheckCircle2, Sparkles, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  plans: PricingPlan[];
  language: Language;
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  plans,
  language,
  onSelectPlan,
}) => {
  const t = translations[language];
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3 border border-blue-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.pricing.sectionTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {language === 'ar'
              ? 'خيارات استثمار مرنة بدون أي تكاليف خفية'
              : 'Transparent Investment Plans & Retainers'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.pricing.sectionSubtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {plans.map((plan) => {
            const name = isRtl ? plan.nameAr : plan.nameEn;
            const tagline = isRtl ? plan.taglineAr : plan.taglineEn;
            const price = isRtl ? plan.priceAr : plan.priceEn;
            const period = isRtl ? plan.billingPeriodAr : plan.billingPeriodEn;
            const features = isRtl ? plan.featuresAr : plan.featuresEn;

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-slate-900 text-white dark:bg-slate-900 dark:border-blue-500/50 border-2 border-blue-600 shadow-2xl scale-[1.02] z-10'
                    : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    <span>{t.pricing.mostPopular}</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                        plan.discipline === 'hybrid'
                          ? 'bg-amber-500/20 text-amber-400'
                          : plan.discipline === 'software'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-emerald-500/20 text-emerald-400'
                      }`}
                    >
                      {plan.discipline === 'hybrid'
                        ? isRtl ? 'الباقة الشاملة' : 'Unified Triple Threat'
                        : plan.discipline === 'software'
                        ? isRtl ? 'برمجة وتطوير' : 'Software Build'
                        : isRtl ? 'دعم فني وخوادم' : 'Managed IT'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{name}</h3>
                  <p
                    className={`text-xs sm:text-sm mb-6 ${
                      plan.popular ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-3xl sm:text-4xl font-black">{price}</span>
                    <span
                      className={`text-xs ml-2 rtl:ml-0 rtl:mr-2 ${
                        plan.popular ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      / {period}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.popular ? 'text-emerald-400' : 'text-blue-600 dark:text-blue-400'
                          }`}
                        />
                        <span className={plan.popular ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectPlan(name)}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-900 dark:text-white'
                  }`}
                >
                  <span>{t.pricing.getStarted}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Scope Footer Banner */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          {t.pricing.customQuote}
        </div>
      </div>
    </section>
  );
};
