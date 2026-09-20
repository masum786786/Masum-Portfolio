import React, { useState, useEffect, useRef } from 'react';
import { Language, Discipline } from '../types';
import { translations } from '../i18n/translations';
import {
  Code2,
  Server,
  TrendingUp,
  ChevronDown,
  Sparkles,
  Sun,
  Moon,
  PhoneCall,
  Menu,
  X,
  Layers,
  FolderGit2,
  Wrench,
  Calculator,
  Tag,
  MessageSquareQuote,
  CheckCircle2,
} from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activeDiscipline: Discipline;
  onSelectDiscipline: (d: Discipline) => void;
  onOpenContact: (prefill?: string) => void;
  isDark: boolean;
  onToggleDark: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  activeDiscipline,
  onSelectDiscipline,
  onOpenContact,
  isDark,
  onToggleDark,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expertiseDropdownOpen, setExpertiseDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = translations[language];
  const isRtl = language === 'ar';

  // Track scroll position for glassmorphism navbar and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy for active section
      const sectionIds = ['contact', 'pricing', 'reviews', 'skills', 'estimator', 'services', 'projects', 'pillars', 'hero'];
      const scrollPos = window.scrollY + 120;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExpertiseDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (id: string, discipline?: Discipline) => {
    setMobileMenuOpen(false);
    setExpertiseDropdownOpen(false);
    if (discipline) {
      onSelectDiscipline(discipline);
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/25'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-900/5'
          : isDark
          ? 'bg-slate-950/70 backdrop-blur-sm border-b border-slate-900/50'
          : 'bg-white/75 backdrop-blur-sm border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[70px]">
          {/* Brand Logo & Compact Triple Identity */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
              id="brand-logo"
              className="group flex items-center gap-2.5 sm:gap-3 cursor-pointer text-left rtl:text-right"
              aria-label="Masum Raza - Home"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-600 to-emerald-500 text-white font-black text-base shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <span>MR</span>
                <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border-2 border-white dark:border-slate-950"></span>
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {language === 'ar' ? 'معصوم رضا' : 'Masum Raza'}
                  </span>
                  <span className="hidden xl:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    PRO
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-[10px] xl:text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{language === 'ar' ? 'برمجيات' : 'Dev'}</span>
                  <span>•</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{language === 'ar' ? 'دعم فني' : 'IT'}</span>
                  <span>•</span>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">{language === 'ar' ? 'تسويق' : 'Growth'}</span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links (Clean, Centered, No Overcrowding) */}
          <nav
            id="desktop-nav-menu"
            className="hidden lg:flex items-center gap-1 xl:gap-1.5"
            aria-label="Main Navigation"
          >
            {/* Overview / Home Link */}
            <button
              id="nav-link-overview"
              onClick={() => handleNavClick('hero')}
              className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                activeSection === 'hero'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
              }`}
            >
              {t.nav.overview}
            </button>

            {/* Expertise Dropdown with Software, IT, Marketing */}
            <div className="relative" ref={dropdownRef}>
              <button
                id="nav-dropdown-expertise"
                onClick={() => setExpertiseDropdownOpen(!expertiseDropdownOpen)}
                onMouseEnter={() => setExpertiseDropdownOpen(true)}
                className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                  activeSection === 'pillars' || expertiseDropdownOpen
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                }`}
                aria-expanded={expertiseDropdownOpen}
                aria-haspopup="true"
              >
                <Layers className="w-3.5 h-3.5 text-blue-500" />
                <span>{t.nav.pillars}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    expertiseDropdownOpen ? 'rotate-180 text-blue-500' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Dropdown Menu Flyout */}
              {expertiseDropdownOpen && (
                <div
                  onMouseLeave={() => setExpertiseDropdownOpen(false)}
                  className="absolute top-full left-0 rtl:left-auto rtl:right-0 mt-1.5 w-72 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl shadow-slate-900/10 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-3 py-1.5 mb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {language === 'ar' ? 'التخصصات الأساسية' : 'Core Disciplines'}
                  </div>

                  {/* Software Dev */}
                  <button
                    onClick={() => handleNavClick('pillars', 'software')}
                    className={`w-full p-2.5 rounded-xl flex items-start gap-3 text-left rtl:text-right transition-colors ${
                      activeDiscipline === 'software'
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-blue-500/15 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-tight flex items-center gap-1.5">
                        <span>{t.nav.software}</span>
                        {activeDiscipline === 'software' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {language === 'ar'
                          ? 'تطبيقات الويب، React، Next.js، APIs'
                          : 'React, Next.js, APIs & Mobile apps'}
                      </div>
                    </div>
                  </button>

                  {/* IT Support */}
                  <button
                    onClick={() => handleNavClick('pillars', 'it-support')}
                    className={`w-full p-2.5 rounded-xl flex items-start gap-3 text-left rtl:text-right transition-colors ${
                      activeDiscipline === 'it-support'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-tight flex items-center gap-1.5">
                        <span>{t.nav.itSupport}</span>
                        {activeDiscipline === 'it-support' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {language === 'ar'
                          ? 'خوادم، Microsoft 365، شبكات، أمان'
                          : 'Servers, Microsoft 365, Networks & SLA'}
                      </div>
                    </div>
                  </button>

                  {/* Marketing */}
                  <button
                    onClick={() => handleNavClick('pillars', 'marketing')}
                    className={`w-full p-2.5 rounded-xl flex items-start gap-3 text-left rtl:text-right transition-colors ${
                      activeDiscipline === 'marketing'
                        ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-purple-500/15 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-tight flex items-center gap-1.5">
                        <span>{t.nav.marketing}</span>
                        {activeDiscipline === 'marketing' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {language === 'ar'
                          ? 'إعلانات Google و Meta، SEO، تتبع التحويل'
                          : 'Google/Meta Ads, SEO & High ROAS'}
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Projects / Case Studies */}
            <button
              id="nav-link-projects"
              onClick={() => handleNavClick('projects')}
              className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                activeSection === 'projects'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
              }`}
            >
              {language === 'ar' ? 'المشاريع' : 'Projects'}
            </button>

            {/* Services */}
            <button
              id="nav-link-services"
              onClick={() => handleNavClick('services')}
              className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                activeSection === 'services'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
              }`}
            >
              {t.nav.services}
            </button>

            {/* Estimator Pill Badge */}
            <button
              id="nav-link-estimator"
              onClick={() => handleNavClick('estimator')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-full flex items-center gap-1 transition-all ${
                activeSection === 'estimator'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 hover:bg-amber-500/20'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>{language === 'ar' ? 'حاسبة التكلفة' : 'Estimator'}</span>
            </button>

            {/* Pricing Packages */}
            <button
              id="nav-link-pricing"
              onClick={() => handleNavClick('pricing')}
              className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                activeSection === 'pricing'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
              }`}
            >
              {language === 'ar' ? 'الأسعار' : 'Pricing'}
            </button>

            {/* Testimonials / Reviews */}
            <button
              id="nav-link-reviews"
              onClick={() => handleNavClick('reviews')}
              className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                activeSection === 'reviews'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
              }`}
            >
              {language === 'ar' ? 'الآراء' : 'Reviews'}
            </button>
          </nav>

          {/* Right Action Controls: Language, Dark Mode, Hire CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Language Switcher Pill */}
            <div
              id="language-switcher-wrapper"
              className="flex items-center p-0.5 sm:p-1 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80"
              role="group"
              aria-label="Language selection"
            >
              <button
                id="btn-lang-en"
                onClick={() => onLanguageChange('en')}
                aria-label="Switch to English"
                className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all ${
                  language === 'en'
                    ? 'bg-white dark:bg-slate-950 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                id="btn-lang-ar"
                onClick={() => onLanguageChange('ar')}
                aria-label="التبديل إلى اللغة العربية"
                className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all ${
                  language === 'ar'
                    ? 'bg-white dark:bg-slate-950 text-emerald-600 dark:text-emerald-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                عربي
              </button>
            </div>

            {/* Dark / Light Toggle */}
            {/* <button
              id="btn-toggle-theme"
              onClick={onToggleDark}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-1.5 sm:p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button> */}

            {/* Primary Hire / Book CTA */}
            <button
              id="nav-btn-hire"
              onClick={() => onOpenContact()}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20 active:scale-95 transition-all whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'تواصل معي' : 'Book Call'}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Visible on screens < 1024px) */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-3 duration-200"
        >
          {/* Quick Discipline Pills */}
          <div className="grid grid-cols-3 gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <button
              onClick={() => handleNavClick('pillars', 'software')}
              className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold"
            >
              <Code2 className="w-4 h-4 mb-1" />
              <span>{t.nav.software}</span>
            </button>
            <button
              onClick={() => handleNavClick('pillars', 'it-support')}
              className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold"
            >
              <Server className="w-4 h-4 mb-1" />
              <span>{t.nav.itSupport}</span>
            </button>
            <button
              onClick={() => handleNavClick('pillars', 'marketing')}
              className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold"
            >
              <TrendingUp className="w-4 h-4 mb-1" />
              <span>{t.nav.marketing}</span>
            </button>
          </div>

          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('hero')}
              className="w-full text-left rtl:text-right px-3 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {t.nav.overview}
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className="w-full text-left rtl:text-right px-3 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="w-full text-left rtl:text-right px-3 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => handleNavClick('estimator')}
              className="w-full text-left rtl:text-right px-3 py-2 text-sm font-medium rounded-lg text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.nav.estimator}</span>
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="w-full text-left rtl:text-right px-3 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {t.nav.pricing}
            </button>
            <button
              onClick={() => handleNavClick('reviews')}
              className="w-full text-left rtl:text-right px-3 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {t.nav.reviews}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left rtl:text-right px-3 py-2 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 text-sm shadow-md flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{language === 'ar' ? 'تواصل معي' : 'Book Call / Hire Me'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

