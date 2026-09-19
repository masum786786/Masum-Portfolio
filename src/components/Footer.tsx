import React from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import {
  ArrowUp,
  Code2,
  Server,
  TrendingUp,
  Globe,
  Mail,
  Phone,
  Github,
  Linkedin,
} from 'lucide-react';

interface FooterProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onLanguageChange,
  onScrollTo,
}) => {
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 text-white font-bold text-base flex items-center justify-center shadow-md">
                MR
              </div>
              <span className="font-extrabold text-lg text-white">
                {language === 'ar' ? 'معصوم رضا' : 'Masum Raza'}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {language === 'ar'
                ? 'شريكك التقني الموثوق في تطوير برمجيات الويب، إدارة الخوادم والدعم الفني للمؤسسات، وإطلاق حملات التسويق الرقمي عالية الربحية.'
                : 'Your trusted partner bridging full-stack software development, resilient enterprise IT support, and high-ROAS performance digital marketing.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/masumraza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/masum-raza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:masumraz84@gmail.com"
                aria-label="Email Me"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Core Disciplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {language === 'ar' ? 'المسارات التخصصية' : 'Three Core Pillars'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onScrollTo('pillars')}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.footer.discipline1}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('pillars')}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Server className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.footer.discipline2}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('pillars')}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                  <span>{t.footer.discipline3}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onScrollTo('projects')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.projects}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('services')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('estimator')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.estimator}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('pricing')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.pricing}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('contact')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-500">
            © {new Date().getFullYear()} Masum Raza. {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded font-semibold ${
                  language === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-2 py-0.5 rounded font-semibold ${
                  language === 'ar' ? 'bg-emerald-600 text-white' : 'text-slate-400'
                }`}
              >
                العربية
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
              aria-label="Scroll back to top"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
