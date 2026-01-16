/**
 * Type Definitions
 * Comprehensive type system for the application
 */

export interface Program {
  id: number;
  title: string;
  category: 'education' | 'healthcare' | 'social';
  categoryLabel: string;
  image: string;
  progress: number;
  raised: number;
  target: number;
  donors: number;
  description: string;
  impact: string;
  urgent: boolean;
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

export interface CoreValue {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export interface ImpactArea {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
  stats: {
    number: string;
    label: string;
  };
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface DonationTier {
  amount: number;
  title: string;
  icon: string;
  benefits: string[];
  color: 'primary' | 'secondary' | 'accent' | 'gray';
  popular?: boolean;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  phone2?: string;
  address: string;
}

export interface SocialLinks {
  facebook: string;
  youtube: string;
  instagram: string;
}

export interface Stats {
  yearsActive: number;
  childrenHelped: number;
  totalDonations: string;
  volunteers: number;
  projects: number;
}

export interface SiteConfig {
  name: string;
  nameEn: string;
  shortName: string;
  tagline: string;
  mission: string;
  contact: ContactInfo;
  social: SocialLinks;
  stats: Stats;
}

// Animation types
export type AnimationVariant = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'scaleIn' | 'slideInLeft' | 'slideInRight';

export interface AnimationConfig {
  variant: AnimationVariant;
  delay?: number;
  duration?: number;
}

// Component Props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'elevated' | 'bordered' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
}

export interface HeroProps extends BaseComponentProps {
  title: string | React.ReactNode;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt?: string;
  overlay?: 'light' | 'dark' | 'gradient';
  height?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  actions?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  id?: string;
  background?: 'white' | 'gray' | 'primary' | 'secondary' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  container?: boolean;
}

// Type aliases for component variants
export type CardVariant = CardProps['variant'];
export type CardPadding = CardProps['padding'];
export type ButtonVariant = ButtonProps['variant'];
export type ButtonSize = ButtonProps['size'];
export type HeroHeight = HeroProps['height'];
export type HeroOverlay = HeroProps['overlay'];
export type SectionBackground = SectionProps['background'];
export type SectionPadding = SectionProps['padding'];

// Legacy types (to be deprecated)
export interface FinancialStat {
  totalIncome: number;
  totalExpense: number;
  currentBalance: number;
  beneficiaries: number;
}

export interface DonationFrequency {
  value: 'once' | 'monthly';
  label: string;
}

export interface DonationAmount {
  value: number;
  label: string;
}
