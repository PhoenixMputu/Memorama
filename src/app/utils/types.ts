export interface User {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface IMetadata {
  title: string;
  description: string;
  author?: string;
  articleAuthor?: string;
  publicationDate?: string;
  articlePublishedTime?: string;
  keywords?: string;
  siteUrl?: string;
  canonicalUrl: string;
  articleModifiedTime?: string;
  ogTwitterImage?: string;
  ogLocale?: string;
  ogType: string;
  ogImageUrl?: string;
  ogUpdatedTime?: string;
  children?: any;
}
