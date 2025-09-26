import { supabase } from '@/lib/supabase'
import type { Testimonial } from '@/lib/supabase'

// Get all approved testimonials
export async function getTestimonials(featured?: boolean) {
  let query = supabase
    .from('testimonials')
    .select('*')
    .eq('is_approved', true)
    .order('created_at', { ascending: false })

  if (featured !== undefined) {
    query = query.eq('is_featured', featured)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching testimonials:', error)
    throw new Error('Failed to fetch testimonials')
  }

  return data || []
}

// Get featured testimonials for homepage
export async function getFeaturedTestimonials() {
  return getTestimonials(true)
}

// Get testimonials for a specific product
export async function getProductTestimonials(productId: string) {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('product_id', productId)
    .eq('is_approved', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching product testimonials:', error)
    throw new Error('Failed to fetch product testimonials')
  }

  return data || []
}

// Submit a new testimonial (for customers)
export async function submitTestimonial(testimonial: {
  customer_name: string
  review: string
  rating: number
  product_id?: string
  customer_image?: string
}) {
  const { data, error } = await supabase
    .from('testimonials')
    .insert([{
      ...testimonial,
      is_featured: false,
      is_approved: false // Requires admin approval
    }])
    .select()
    .single()

  if (error) {
    console.error('Error submitting testimonial:', error)
    throw new Error('Failed to submit testimonial')
  }

  return data
}