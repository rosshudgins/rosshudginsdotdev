export interface SiteMeta {
  title: string;
  description: string;
  author: string;
  logo: string;
  language: string;
  lang: string;
  url: string;
  ogImage: string;
  twitterCreator: string;
}

export interface NavigationItem {
  label: string;
  subLabel: string;
  href: string;
}

export interface SocialItem {
  name: string;
  href: string;
  icon?: string;
}

export interface HeroInfo {
  label: string;
  value: string;
}

export interface HeroCard {
  icon: string;
  label: string;
  value: string;
}

export interface HeroConfig {
  greeting: string;
  description: string;
  infos: HeroInfo[];
  cards: HeroCard[];
}

export interface FooterConfig {
  copyright: string;
  credit: string;
}

export interface FeaturesConfig {
  search: boolean;
  rss: boolean;
}

export interface CommentsConfig {
  enabled: boolean;
}

export interface ToolConfig {
  name: string;
  description: string;
}

export interface SiteLabels {
  latestPosts: string;
  viewAll: string;
  categories: string;
  tags: string;
  tools: string;
  friends: string;
  search: string;
  noResults: string;
  toc: string;
  notFoundTitle: string;
  notFoundDescription: string;
  goHome: string;
}

export interface SiteConfig {
  meta: SiteMeta;
  navigation: NavigationItem[];
  social: SocialItem[];
  hero: HeroConfig;
  footer: FooterConfig;
  features: FeaturesConfig;
  comments: CommentsConfig;
  tools: ToolConfig[];
  labels: SiteLabels;
}

export interface HeadProps {
  title: string;
  description: string;
  image?: string;
}

export interface ToolLogoVariant {
  light?: string;
  dark?: string;
}

export type ToolLogoSource = string | ToolLogoVariant;
