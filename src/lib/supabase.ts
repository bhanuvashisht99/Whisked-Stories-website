import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Database type definitions
export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          category: string
          season: string
          serving_size: string
          allergens: string[]
          ingredients: string[]
          images: string[]
          nutritional_info: any
          is_available: boolean
          is_archived: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          category: string
          season?: string
          serving_size: string
          allergens?: string[]
          ingredients?: string[]
          images?: string[]
          nutritional_info?: any
          is_available?: boolean
          is_archived?: boolean
        }
        Update: {
          name?: string
          description?: string
          price?: number
          category?: string
          season?: string
          serving_size?: string
          allergens?: string[]
          ingredients?: string[]
          images?: string[]
          nutritional_info?: any
          is_available?: boolean
          is_archived?: boolean
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string
          content: string
          featured_image: string | null
          author_id: string
          tags: string[]
          reading_time: number
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          title: string
          slug: string
          excerpt: string
          content: string
          featured_image?: string | null
          author_id?: string
          tags?: string[]
          reading_time?: number
          is_published?: boolean
        }
        Update: {
          title?: string
          slug?: string
          excerpt?: string
          content?: string
          featured_image?: string | null
          author_id?: string
          tags?: string[]
          reading_time?: number
          is_published?: boolean
        }
      }
      events: {
        Row: {
          id: string
          title: string
          description: string
          event_date: string
          event_time: string | null
          location: string | null
          images: string[]
          max_attendees: number | null
          current_attendees: number
          price: number
          is_featured: boolean
          is_active: boolean
          created_at: string
          updated_at: string
        }
      }
      testimonials: {
        Row: {
          id: string
          customer_name: string
          customer_image: string | null
          review: string
          rating: number
          product_id: string | null
          is_featured: boolean
          is_approved: boolean
          created_at: string
          updated_at: string
        }
      }
      custom_order_inquiries: {
        Row: {
          id: string
          name: string
          email: string
          phone: string
          event_type: string
          event_date: string
          guest_count: number
          cake_description: string
          budget_range: string | null
          additional_notes: string | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          name: string
          email: string
          phone: string
          event_type: string
          event_date: string
          guest_count: number
          cake_description: string
          budget_range?: string | null
          additional_notes?: string | null
        }
      }
      newsletter_subscribers: {
        Row: {
          id: string
          email: string
          status: string
          subscribed_at: string
          unsubscribed_at: string | null
        }
        Insert: {
          email: string
          status?: string
        }
      }
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          subject: string | null
          message: string
          status: string
          created_at: string
        }
        Insert: {
          name: string
          email: string
          phone?: string | null
          subject?: string | null
          message: string
        }
      }
    }
  }
}

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