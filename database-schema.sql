-- Whisked Stories Database Schema
-- Run this in Supabase SQL Editor

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price INTEGER NOT NULL, -- Price in paisa (₹12.50 = 1250)
  category VARCHAR(100) NOT NULL,
  season VARCHAR(50) NOT NULL DEFAULT 'all-year',
  serving_size VARCHAR(100) NOT NULL,
  allergens TEXT[] DEFAULT '{}', -- Array of allergen strings
  ingredients TEXT[] DEFAULT '{}', -- Array of ingredients
  images TEXT[] DEFAULT '{}', -- Array of image URLs
  nutritional_info JSONB, -- JSON object with nutritional information
  is_available BOOLEAN DEFAULT true,
  is_archived BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image VARCHAR(500),
  author_id VARCHAR(100) DEFAULT 'ayushi',
  tags TEXT[] DEFAULT '{}',
  reading_time INTEGER DEFAULT 1,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Orders table (for future use)
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(20),
  total_amount INTEGER NOT NULL, -- Price in paisa
  status VARCHAR(50) DEFAULT 'pending', -- pending, confirmed, preparing, ready, completed, cancelled
  order_date DATE NOT NULL,
  delivery_date DATE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Order items table
CREATE TABLE IF NOT EXISTS order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  unit_price INTEGER NOT NULL, -- Price at time of order
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Custom order inquiries table
CREATE TABLE IF NOT EXISTS custom_order_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  event_type VARCHAR(100) NOT NULL,
  event_date DATE NOT NULL,
  guest_count INTEGER NOT NULL,
  cake_description TEXT NOT NULL,
  budget_range VARCHAR(50),
  additional_notes TEXT,
  status VARCHAR(50) DEFAULT 'new', -- new, reviewed, quoted, confirmed, declined
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  event_date DATE NOT NULL,
  event_time VARCHAR(50),
  location VARCHAR(255),
  images TEXT[] DEFAULT '{}',
  max_attendees INTEGER,
  current_attendees INTEGER DEFAULT 0,
  price INTEGER DEFAULT 0, -- Price in paisa
  is_featured BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_image VARCHAR(500),
  review TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) DEFAULT 5,
  product_id UUID REFERENCES products(id),
  is_featured BOOLEAN DEFAULT false,
  is_approved BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Insert sample data
-- Add newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(50) DEFAULT 'active',
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Add contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Insert sample data
INSERT INTO products (name, description, price, category, season, serving_size, allergens, ingredients, nutritional_info, is_available, is_archived) VALUES
('Classic Chocolate Fudge Cake', 'Rich, moist chocolate cake layered with creamy chocolate fudge frosting. A timeless favorite that melts in your mouth.', 1200, 'Chocolate', 'all-year', '8-10 people', ARRAY['Eggs', 'Dairy', 'Gluten'], ARRAY['Dark chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour', 'Cream'], '{"calories": 380, "protein": 5.2, "carbohydrates": 45, "fat": 18, "sugar": 32}', true, false),
('Seasonal Mango Passion Cake', 'Light sponge cake infused with fresh mango puree and passion fruit, topped with mango buttercream.', 1500, 'Fruit', 'summer', '8-10 people', ARRAY['Eggs', 'Dairy', 'Gluten'], ARRAY['Fresh mango', 'Passion fruit', 'Butter', 'Eggs', 'Sugar', 'Flour'], '{"calories": 320, "protein": 4.8, "carbohydrates": 42, "fat": 15, "sugar": 28}', true, false),
('Red Velvet Classic', 'Velvety smooth red velvet cake with layers of tangy cream cheese frosting. A perfect balance of sweet and tart.', 1400, 'Classic', 'all-year', '8-10 people', ARRAY['Eggs', 'Dairy', 'Gluten'], ARRAY['Cocoa powder', 'Red food coloring', 'Buttermilk', 'Cream cheese', 'Butter'], '{"calories": 360, "protein": 4.5, "carbohydrates": 48, "fat": 17, "sugar": 35}', true, false),
('Lemon Lavender Delight', 'Delicate lemon sponge infused with culinary lavender, topped with lemon curd and lavender buttercream.', 1600, 'Floral', 'spring', '8-10 people', ARRAY['Eggs', 'Dairy', 'Gluten'], ARRAY['Fresh lemons', 'Culinary lavender', 'Butter', 'Eggs', 'Sugar', 'Flour'], '{"calories": 340, "protein": 4.2, "carbohydrates": 44, "fat": 16, "sugar": 30}', true, false);

INSERT INTO blog_posts (title, slug, excerpt, content, tags, reading_time, is_published) VALUES
('The Art of Seasonal Baking: Why We Change Our Menu', 'art-of-seasonal-baking', 'Discover why we embrace seasonal baking and how it creates unique flavors throughout the year.', 'At Whisked Stories, we believe that baking should celebrate the seasons. Each season brings its own unique flavors, ingredients, and emotions...', ARRAY['Seasonal', 'Philosophy', 'Ingredients'], 5, true),
('Behind the Scenes: Creating Our Signature Chocolate Fudge', 'signature-chocolate-fudge', 'The heartwarming story and technique behind our bestselling chocolate fudge cake.', 'Today I want to share the story behind our most popular cake - the Classic Chocolate Fudge. It all started with my grandmother''s recipe...', ARRAY['Recipe', 'Chocolate', 'Family'], 3, true),
('Sourcing Local: Our Partnership with Indian Mango Farmers', 'sourcing-local-mango-farmers', 'How we source the best local ingredients to create authentic flavors in our seasonal cakes.', 'This summer, we''re excited to introduce our partnership with local mango farmers from Maharashtra...', ARRAY['Local Sourcing', 'Mango', 'Sustainability'], 4, true);

INSERT INTO events (title, description, event_date, event_time, location, max_attendees, current_attendees, price, is_featured) VALUES
('Spring Baking Workshop: Learn to Make Floral Cakes', 'Join us for a hands-on workshop where you''ll learn to create beautiful floral-themed cakes perfect for spring celebrations.', '2024-04-15', '10:00 AM - 2:00 PM', 'Whisked Stories Kitchen, Mumbai', 12, 8, 2500, true),
('Mother''s Day Cake Decorating Class', 'Create a special cake for your mother with our expert guidance. All materials included.', '2024-05-12', '2:00 PM - 5:00 PM', 'Whisked Stories Kitchen, Mumbai', 15, 3, 1800, false);

INSERT INTO testimonials (customer_name, review, rating, is_featured, is_approved) VALUES
('Priya Sharma', 'The chocolate fudge cake was absolutely divine! Perfect for my daughter''s birthday. The texture was so moist and the flavor was rich without being overwhelming.', 5, true, true),
('Rajesh Kumar', 'Whisked Stories made our anniversary extra special. The red velvet cake was not just beautiful but tasted amazing. Highly recommend!', 5, true, true),
('Anita Desai', 'Great quality cakes with unique flavors. The seasonal mango cake was a hit at our summer party. Will definitely order again!', 4, false, true);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE custom_order_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can read products" ON products FOR SELECT USING (true);
CREATE POLICY "Public can read published blog posts" ON blog_posts FOR SELECT USING (is_published = true);
CREATE POLICY "Public can read approved testimonials" ON testimonials FOR SELECT USING (is_approved = true);
CREATE POLICY "Public can read active events" ON events FOR SELECT USING (is_active = true);

-- Allow public to submit forms
CREATE POLICY "Anyone can subscribe to newsletter" ON newsletter_subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can submit contact form" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can submit custom order inquiry" ON custom_order_inquiries FOR INSERT WITH CHECK (true);

-- Create policies for admin access (you'll need to set up authentication)
-- For now, allowing all operations (you should restrict this later)
CREATE POLICY "Admin can manage products" ON products FOR ALL USING (true);
CREATE POLICY "Admin can manage blog posts" ON blog_posts FOR ALL USING (true);
CREATE POLICY "Admin can manage orders" ON orders FOR ALL USING (true);
CREATE POLICY "Admin can manage order items" ON order_items FOR ALL USING (true);
CREATE POLICY "Admin can manage inquiries" ON custom_order_inquiries FOR ALL USING (true);
CREATE POLICY "Admin can manage events" ON events FOR ALL USING (true);
CREATE POLICY "Admin can manage testimonials" ON testimonials FOR ALL USING (true);
CREATE POLICY "Admin can manage newsletter" ON newsletter_subscribers FOR ALL USING (true);
CREATE POLICY "Admin can manage contact submissions" ON contact_submissions FOR ALL USING (true);

-- Create indexes for performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_season ON products(season);
CREATE INDEX idx_products_available ON products(is_available, is_archived);
CREATE INDEX idx_blog_posts_published ON blog_posts(is_published);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_date ON orders(order_date);
CREATE INDEX idx_custom_inquiries_status ON custom_order_inquiries(status);
CREATE INDEX idx_events_date ON events(event_date);
CREATE INDEX idx_testimonials_featured ON testimonials(is_featured, is_approved);