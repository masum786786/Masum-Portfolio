import React, { useState, useEffect } from 'react';
import { Language, Discipline, Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TripleThreatBanner } from './components/TripleThreatBanner';
import { PillarsSection } from './components/PillarsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import {
  projectsData,
  servicesData,
  skillsData,
  testimonialsData,
  pricingPlans,
} from './data/portfolioData';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return saved === 'ar' || saved === 'en' ? saved : 'en';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('portfolio_theme');
    return savedTheme !== null ? savedTheme === 'dark' : true;
  });

  const [activeDiscipline, setActiveDiscipline] = useState<Discipline>('all');
  const [activeProjectFilter, setActiveProjectFilter] = useState<Discipline | 'hybrid'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [prefilledMessage, setPrefilledMessage] = useState<string | undefined>(undefined);

  // Sync RTL / LTR and Language attribute on HTML root
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('portfolio_lang', language);
  }, [language]);

  // Sync Dark mode class on root
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [isDark]);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
  };

  const handleToggleDark = () => {
    setIsDark(!isDark);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = (service?: string, customMessage?: string) => {
    if (service) {
      setPrefilledService(service);
    }
    if (customMessage) {
      setPrefilledMessage(customMessage);
    }
    scrollTo('contact');
  };

  const handleScrollToProjectsWithFilter = (filter: Discipline) => {
    setActiveProjectFilter(filter);
    scrollTo('projects');
  };

  const handleProceedWithEstimate = (details: {
    selectedServices: string[];
    scale: string;
    estimatedCost: string;
    timeline: string;
  }) => {
    const msg =
      language === 'ar'
        ? `أرغب في مناقشة تفاصيل التقدير المحسوب:\n- الخدمات المحددة: ${details.selectedServices.join(
            ', '
          )}\n- حجم المشروع: ${details.scale}\n- التكلفة التقديرية: ${
            details.estimatedCost
          }\n- الجدول الزمني: ${details.timeline}`
        : `I would like to proceed with the estimated project scope:\n- Selected Services: ${details.selectedServices.join(
            ', '
          )}\n- Scale: ${details.scale}\n- Estimated Investment: ${
            details.estimatedCost
          }\n- Estimated Timeline: ${details.timeline}`;

    handleOpenContact('Triple Threat Bundle', msg);
  };

  return (
    <div
      id="app-root-container"
      className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-blue-600 selection:text-white"
    >
      {/* Top Navbar */}
      <Navbar
        language={language}
        onLanguageChange={handleLanguageChange}
        activeDiscipline={activeDiscipline}
        onSelectDiscipline={(d) => {
          setActiveDiscipline(d);
          scrollTo('pillars');
        }}
        onOpenContact={() => handleOpenContact()}
        isDark={isDark}
        onToggleDark={handleToggleDark}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero */}
        <Hero
          language={language}
          selectedDiscipline={activeDiscipline}
          onSelectDiscipline={(d) => {
            setActiveDiscipline(d);
            setActiveProjectFilter(d);
            scrollTo('pillars');
          }}
          onOpenContact={() => handleOpenContact()}
          onScrollTo={scrollTo}
        />

        {/* Triple-Threat Value Banner */}
        <TripleThreatBanner language={language} />

        {/* Pillars Section: Software, IT, Marketing */}
        <PillarsSection
          language={language}
          selectedDiscipline={activeDiscipline}
          onSelectDiscipline={setActiveDiscipline}
          onScrollToProjects={handleScrollToProjectsWithFilter}
        />

        {/* Featured Case Studies & Filterable Portfolio */}
        <ProjectsSection
          projects={projectsData}
          language={language}
          activeFilter={activeProjectFilter}
          onFilterChange={setActiveProjectFilter}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* End-to-End Capabilities & Services */}
        <ServicesSection
          services={servicesData}
          language={language}
          onSelectService={(serviceTitle) => handleOpenContact(serviceTitle)}
        />

        {/* Interactive Scope & Cost Estimator */}
        <ProjectEstimator
          language={language}
          onProceedWithEstimate={handleProceedWithEstimate}
        />

        {/* Technical Arsenal & Certifications */}
        <SkillsSection skills={skillsData} language={language} />

        {/* Verified Client Testimonials */}
        <TestimonialsSection
          testimonials={testimonialsData}
          language={language}
        />

        {/* Transparent Pricing Packages */}
        <PricingSection
          plans={pricingPlans}
          language={language}
          onSelectPlan={(planName) =>
            handleOpenContact(
              planName,
              language === 'ar'
                ? `مرحباً، أود الاشتراك في باقة: ${planName}`
                : `Hello, I would like to inquire about the ${planName} package.`
            )
          }
        />

        {/* Contact & Consultation Form */}
        <ContactSection
          language={language}
          prefilledService={prefilledService}
          prefilledMessage={prefilledMessage}
        />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onLanguageChange={handleLanguageChange}
        onScrollTo={scrollTo}
      />

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        language={language}
        onClose={() => setSelectedProject(null)}
        onInquire={(title) =>
          handleOpenContact(
            title,
            language === 'ar'
              ? `أرغب في مناقشة مشروع مشابه لدراسة الحالة: ${title}`
              : `I would like to discuss a project similar to the case study: ${title}`
          )
        }
      />
    </div>
  );
}
