import React from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { Code2, Server, TrendingUp, CheckCircle, Zap, Shield, Sparkles } from 'lucide-react';

interface TripleThreatBannerProps {
  language: Language;
}

export const TripleThreatBanner: React.FC<TripleThreatBannerProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section className="py-12 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>{language === 'ar' ? 'القوة الثلاثية المتكاملة' : 'The Unified Triple-Threat Advantage'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
            {t.tripleThreatBanner.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t.tripleThreatBanner.subline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Software */}
          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-sm relative group hover:border-blue-500/60 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                01. {language === 'ar' ? 'البناء' : 'BUILD'}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">
              {t.tripleThreatBanner.point1Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.tripleThreatBanner.point1Desc}
            </p>
          </div>

          {/* Pillar 2: IT Support */}
          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-sm relative group hover:border-emerald-500/60 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                <Server className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                02. {language === 'ar' ? 'الحماية' : 'PROTECT'}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">
              {t.tripleThreatBanner.point2Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.tripleThreatBanner.point2Desc}
            </p>
          </div>

          {/* Pillar 3: Marketing */}
          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-sm relative group hover:border-purple-500/60 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
                03. {language === 'ar' ? 'النمو' : 'GROW'}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">
              {t.tripleThreatBanner.point3Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.tripleThreatBanner.point3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
