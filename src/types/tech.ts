export type TechCategory = 
  | 'ai_data' 
  | 'hardware_robotics' 
  | 'network_cloud' 
  | 'bio_green' 
  | 'future_frontier';

export interface TechItem {
  id: string;
  name: string;
  englishName: string;
  category: TechCategory;
  categoryLabel: string;
  shortDesc: string;
  iconName: string;
  accentColor: string; // Tailwind color token or hex
  maturityLevel: 'Thử nghiệm' | 'Đang phát triển nhanh' | 'Thương mại hóa' | 'Phổ biến rộng rãi';
  maturityPercent: number; // 0 - 100
  trendScore: number; // e.g. +42%
  applications: {
    title: string;
    description: string;
    domain: string;
  }[];
  howItWorks: string;
  benefits: string[];
  challenges: string[];
  socialImpact: string;
  futureOutlook: string;
  keyStats: {
    label: string;
    value: string;
  }[];
}

export interface TechTrend {
  id: string;
  rank: number;
  techId: string;
  name: string;
  category: string;
  growthRate: string;
  impactScore: number; // 1-100
  status: 'Bùng nổ' | 'Tăng tốc' | 'Trưởng thành' | 'Đột phá mới';
  description: string;
  primaryDrivers: string[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  techGroup: string;
  summary: string;
  expectedBreakthroughs: string[];
  readinessLevel: string;
}
