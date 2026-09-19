export type Language = 'en' | 'ar';

export type Discipline = 'all' | 'software' | 'it-support' | 'marketing';

export interface Project {
  id: string;
  titleEn: string;
  titleAr: string;
  taglineEn: string;
  taglineAr: string;
  category: 'software' | 'it-support' | 'marketing' | 'hybrid';
  client: string;
  location: string;
  duration: string;
  metrics: {
    labelEn: string;
    labelAr: string;
    value: string;
  }[];
  descriptionEn: string;
  descriptionAr: string;
  challengesEn: string[];
  challengesAr: string[];
  solutionsEn: string[];
  solutionsAr: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  discipline: 'software' | 'it-support' | 'marketing';
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  iconName: string;
  featuresEn: string[];
  featuresAr: string[];
  deliverablesEn: string[];
  deliverablesAr: string[];
  badgeEn: string;
  badgeAr: string;
}

export interface SkillItem {
  name: string;
  category: 'software' | 'it-support' | 'marketing' | 'cloud-tools';
  level: number; // 1-100
  experienceYears: number;
  highlight?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  roleEn: string;
  roleAr: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  quoteEn: string;
  quoteAr: string;
  discipline: 'software' | 'it-support' | 'marketing' | 'hybrid';
  metricAchieved: string;
}

export interface PricingPlan {
  id: string;
  nameEn: string;
  nameAr: string;
  taglineEn: string;
  taglineAr: string;
  priceEn: string;
  priceAr: string;
  billingPeriodEn: string;
  billingPeriodAr: string;
  discipline: 'software' | 'it-support' | 'marketing' | 'hybrid';
  popular?: boolean;
  featuresEn: string[];
  featuresAr: string[];
}
