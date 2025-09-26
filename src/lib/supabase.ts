import { createClient } from '@supabase/supabase-js'
import type { Database } from './supabase-types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Create typed clients
export const supabase = createClient<Database>(supabaseUrl, supabaseKey)

// For admin operations
export const supabaseAdmin = createClient<Database>(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

// Helper types
export type Product = Database['public']['Tables']['products']['Row']
export type BlogPost = Database['public']['Tables']['blog_posts']['Row']
export type Event = Database['public']['Tables']['events']['Row']
export type Testimonial = Database['public']['Tables']['testimonials']['Row']
export type CustomOrderInquiry = Database['public']['Tables']['custom_order_inquiries']['Row']