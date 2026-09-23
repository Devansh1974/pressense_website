export interface Category {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  heroImage?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  images: string[];
  features: string[];
  applications: string[];
  specifications: Record<string, string>;
  featured?: boolean;
  badge?: string;
  modelCode?: string;
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  applicableCategories: string[];
  keyEquipment: string[];
}

export interface SearchResult {
  product: Product;
  category: Category;
  matchScore: number;
}
