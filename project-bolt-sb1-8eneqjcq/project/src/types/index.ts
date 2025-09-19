export interface User {
  id: string;
  email: string;
  role: 'buyer' | 'seller';
  profile?: SellerProfile;
}

export interface SellerProfile {
  id: string;
  user_id: string;
  business_name: string;
  description: string;
  avatar_url?: string;
  created_at: string;
}

export interface Product {
  id: string;
  seller_id: string;
  name: string;
  description: string;
  price: number;
  original_price?: number;
  category: string;
  image_url: string;
  rating: number;
  reviews_count: number;
  badge?: string;
  views: number;
  clicks: number;
  created_at: string;
}

export interface Article {
  id: string;
  seller_id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  published_date: string;
  image_url?: string;
  reading_time: number;
  views: number;
  clicks: number;
  created_at: string;
}

export interface Analytics {
  total_views: number;
  total_clicks: number;
  top_products: Product[];
  top_articles: Article[];
  recent_activity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  type: 'view' | 'click';
  item_type: 'product' | 'article';
  item_id: string;
  item_title: string;
  timestamp: string;
}