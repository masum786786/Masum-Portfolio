import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import {
  Sparkles,
  Calculator,
  CheckSquare,
  Square,
  Clock,
  DollarSign,
  ArrowRight,
  ArrowLeft,
  Info,
  Layers,
} from 'lucide-react';

interface ProjectEstimatorProps {
  language: Language;
  onProceedWithEstimate: (details: {
    selectedServices: string[];
    scale: string;
    estimatedCost: string;
    timeline: string;
  }) => void;
}

interface ServiceOption {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'software' | 'it' | 'marketing';
  baseCost: number; // in USD
  baseWeeks: number;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  // Software
  { id: 'custom-web-app', titleEn: 'Custom React/Next.js Web Application', titleAr: 'تطبيق ويب مخصص React / Next.js', category: 'software', baseCost: 1800, baseWeeks: 3 },
  { id: 'database-api', titleEn: 'Scalable Database & REST/GraphQL API', titleAr: 'قواعد بيانات سريعة وواجهات برمجية API', category: 'software', baseCost: 1100, baseWeeks: 2 },
  { id: 'payment-gateway', titleEn: 'Stripe & Regional Payment Integration', titleAr: 'بوابات الدفع الإلكتروني (Stripe، مدى)', category: 'software', baseCost: 650, baseWeeks: 1 },
  // IT
  { id: 'cloud-server', titleEn: 'Linux/AWS Cloud Server & Nginx Setup', titleAr: 'إعداد خادم سحابي لينكس و AWS و Nginx', category: 'it', baseCost: 850, baseWeeks: 1 },
  { id: 'm365-azure', titleEn: 'Microsoft 365, Email & Azure AD Security', titleAr: 'تجهيز Microsoft 365 والبريد و Azure AD', category: 'it', baseCost: 600, baseWeeks: 1 },
  { id: 'backup-dr', titleEn: 'Automated Daily Off-Site Cloud Backups', titleAr: 'نسخ احتياطي سحابي تلقائي وخطة طوارئ', category: 'it', baseCost: 500, baseWeeks: 1 },
  // Marketing
  { id: 'google-ads-launch', titleEn: 'High-Intent Google Ads Campaign Setup', titleAr: 'إطلاق وتدشين حملات إعلانات جوجل الاحترافية', category: 'marketing', baseCost: 950, baseWeeks: 1.5 },
  { id: 'meta-ads-scaling', titleEn: 'Meta (FB/Instagram) Advantage+ Ad Scaling', titleAr: 'إعلانات ميتا (انستغرام وفيسبوك) عالية العائد', category: 'marketing', baseCost: 950, baseWeeks: 1.5 },
  { id: 'seo-audit-engine', titleEn: 'Full Technical SEO & Content Optimization', titleAr: 'تحسين محركات البحث SEO التقني والمحتوى', category: 'marketing', baseCost: 1100, baseWeeks: 2 },
  { id: 'ga4-capi-tracking', titleEn: 'Server-Side GTM & Meta CAPI Tracking', titleAr: 'ربط التتبع الخادمي Server-Side GTM و CAPI', category: 'marketing', baseCost: 600, baseWeeks: 1 },
];

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  language,
  onProceedWithEstimate,
}) => {
  const t = translations[language];
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [selectedIds, setSelectedIds] = useState<string[]>([
    'custom-web-app',
    'cloud-server',
    'seo-audit-engine',
  ]);
  const [scaleMultiplier, setScaleMultiplier] = useState<number>(1.0); // 1 = MVP, 1.4 = Growth, 1.9 = Enterprise

  const toggleService = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedServices = SERVICE_OPTIONS.filter((s) => selectedIds.includes(s.id));

  const totalBaseCost = selectedServices.reduce((acc, curr) => acc + curr.baseCost, 0);
  const totalBaseWeeks = selectedServices.reduce((acc, curr) => acc + curr.baseWeeks, 0);

  const adjustedCost = Math.round(totalBaseCost * scaleMultiplier);
  const adjustedWeeks = Math.max(1, Math.round(totalBaseWeeks * (scaleMultiplier > 1 ? 0.85 : 0.95)));

  // Currency conversion: USD or SAR (~3.75 rate)
  const formattedCostUSD = `$${adjustedCost.toLocaleString()}`;
  const formattedCostSAR = `${Math.round(adjustedCost * 3.75).toLocaleString()} ر.س`;
  const displayCost = isRtl ? formattedCostSAR : formattedCostUSD;

  const timelineText = isRtl
    ? `${adjustedWeeks} - ${adjustedWeeks + 2} أسابيع عمل`
    : `${adjustedWeeks} - ${adjustedWeeks + 2} Business Weeks`;

  const scaleName =
    scaleMultiplier === 1.0
      ? t.estimator.scaleStartup
      : scaleMultiplier === 1.4
      ? t.estimator.scaleMedium
      : t.estimator.scaleEnterprise;

  const handleBook = () => {
    const serviceNames = selectedServices.map((s) => (isRtl ? s.titleAr : s.titleEn));
    onProceedWithEstimate({
      selectedServices: serviceNames,
      scale: scaleName,
      estimatedCost: displayCost,
      timeline: timelineText,
    });
  };

  return (
    <section id="estimator" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-500/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.estimator.sectionTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
            {language === 'ar'
              ? 'احسب تكلفة وجدول مشروعك بدقة وشفافية'
              : 'Calculate Your Custom Project Scope & Investment'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t.estimator.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Service Checkboxes & Scale Picker */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Services List */}
            <div className="p-6 rounded-2xl bg-slate-800/70 border border-slate-700/80 backdrop-blur-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-500/30 text-blue-400 text-xs flex items-center justify-center font-bold">
                  1
                </span>
                <span>{t.estimator.step1Title}</span>
              </h3>

              <div className="space-y-2.5">
                {SERVICE_OPTIONS.map((opt) => {
                  const isChecked = selectedIds.includes(opt.id);
                  const title = isRtl ? opt.titleAr : opt.titleEn;

                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleService(opt.id)}
                      className={`w-full p-3.5 rounded-xl text-left rtl:text-right flex items-center justify-between gap-3 transition-all border ${
                        isChecked
                          ? 'bg-blue-600/15 border-blue-500 text-white'
                          : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-blue-600 text-white'
                              : 'border border-slate-600'
                          }`}
                        >
                          {isChecked && <CheckSquare className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">{title}</span>
                      </div>

                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                          opt.category === 'software'
                            ? 'bg-blue-500/20 text-blue-400'
                            : opt.category === 'it'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-purple-500/20 text-purple-400'
                        }`}
                      >
                        {opt.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scale Multiplier */}
            <div className="p-6 rounded-2xl bg-slate-800/70 border border-slate-700/80 backdrop-blur-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-400 text-xs flex items-center justify-center font-bold">
                  2
                </span>
                <span>{t.estimator.step2Title}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { value: 1.0, label: t.estimator.scaleStartup, desc: isRtl ? 'بناء نموذج أولي أو نسخة أساسية' : 'Early stage or prototype launch' },
                  { value: 1.4, label: t.estimator.scaleMedium, desc: isRtl ? 'شركة قائمة بحاجة لأعلى أداء' : 'Growing business with active users' },
                  { value: 1.9, label: t.estimator.scaleEnterprise, desc: isRtl ? 'أنظمة معقدة وتكاملات متعددة' : 'Mission critical & high compliance' },
                ].map((tier) => (
                  <button
                    key={tier.value}
                    onClick={() => setScaleMultiplier(tier.value)}
                    className={`p-3.5 rounded-xl text-left rtl:text-right border transition-all ${
                      scaleMultiplier === tier.value
                        ? 'bg-white text-slate-900 border-white shadow-lg'
                        : 'bg-slate-800/40 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm mb-1">{tier.label}</div>
                    <div className={`text-[11px] ${scaleMultiplier === tier.value ? 'text-slate-600' : 'text-slate-400'}`}>
                      {tier.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Live Estimate Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>{t.estimator.step3Title}</span>
                </span>
                <span className="text-xs text-slate-400">
                  {selectedServices.length} {language === 'ar' ? 'خدمات محددة' : 'modules'}
                </span>
              </div>

              {/* Price & Timeline Display */}
              <div className="space-y-5 mb-8">
                <div>
                  <div className="text-xs text-slate-400 mb-1">
                    {t.estimator.priceRangeLabel}
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">
                    {displayCost}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400">{t.estimator.timelineLabel}</div>
                    <div className="text-sm font-bold text-white">{timelineText}</div>
                  </div>
                </div>
              </div>

              {/* Included Scope Summary Pills */}
              <div className="mb-6">
                <div className="text-xs font-bold text-slate-300 mb-2">
                  {language === 'ar' ? 'الخدمات المشمولة في التقدير:' : 'Included Scope:'}
                </div>
                <div className="max-h-40 overflow-y-auto space-y-1.5 pr-1">
                  {selectedServices.map((s) => (
                    <div
                      key={s.id}
                      className="text-xs text-slate-300 flex items-center gap-2 p-1.5 rounded bg-slate-900/40"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span className="truncate">{isRtl ? s.titleAr : s.titleEn}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[11px] text-slate-400 italic mb-6 leading-relaxed">
                {t.estimator.note}
              </div>

              <button
                id="btn-confirm-estimate"
                onClick={handleBook}
                className="w-full py-3.5 px-5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>{t.estimator.ctaEstimate}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
