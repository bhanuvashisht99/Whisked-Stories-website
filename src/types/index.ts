// User types
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: 'admin' | 'customer';
  created_at: string;
}

// Product/Cake types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  season: string;
  is_archived: boolean;
  images: string[];
  ingredients: string[];
  allergens: string[];
  serving_size: string;
  nutritional_info?: NutritionalInfo;
  is_available: boolean;
  created_at: string;
  updated_at: string;
}

export interface NutritionalInfo {
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  sugar: number;
}

// Order types
export interface Order {
  id: string;
  user_id: string;
  items: OrderItem[];
  total_amount: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  delivery_address: Address;
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded';
  stripe_payment_intent_id?: string;
  notes?: string;
  delivery_date?: string;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  product_id: string;
  product_name: string;
  quantity: number;
  price: number;
  customizations?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

// Blog/Journal types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  author_id: string;
  is_published: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
}

// Event types
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  images: string[];
  is_featured: boolean;
  max_attendees?: number;
  current_attendees: number;
  price?: number;
  created_at: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  customer_name: string;
  customer_image?: string;
  rating: number;
  review: string;
  product_id?: string;
  is_featured: boolean;
  created_at: string;
}

// Feedback types
export interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
  type: 'general' | 'suggestion' | 'complaint' | 'compliment';
  is_read: boolean;
  created_at: string;
}

// Custom order inquiry types
export interface CustomOrderInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string;
  guest_count: number;
  cake_description: string;
  budget_range: string;
  additional_notes?: string;
  status: 'new' | 'reviewed' | 'quoted' | 'accepted' | 'declined';
  created_at: string;
}