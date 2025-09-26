import { supabase } from '@/lib/supabase'
import type { Product } from '@/lib/supabase'

// Get all products with filtering options
export async function getProducts(filters?: {
  category?: string
  season?: string
  available?: boolean
  archived?: boolean
}) {
  let query = supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (filters?.category) {
    query = query.eq('category', filters.category)
  }

  if (filters?.season) {
    query = query.eq('season', filters.season)
  }

  if (filters?.available !== undefined) {
    query = query.eq('is_available', filters.available)
  }

  if (filters?.archived !== undefined) {
    query = query.eq('is_archived', filters.archived)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching products:', error)
    throw new Error('Failed to fetch products')
  }

  return data || []
}

// Get a single product by ID
export async function getProduct(id: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching product:', error)
    throw new Error('Failed to fetch product')
  }

  return data
}

// Get products by category
export async function getProductsByCategory(category: string) {
  return getProducts({ category, available: true, archived: false })
}

// Get seasonal products
export async function getSeasonalProducts(season: string) {
  return getProducts({ season, available: true, archived: false })
}

// Get featured/available products for homepage
export async function getFeaturedProducts(limit: number = 3) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_available', true)
    .eq('is_archived', false)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching featured products:', error)
    throw new Error('Failed to fetch featured products')
  }

  return data || []
}

// Get product categories
export async function getProductCategories() {
  const { data, error } = await supabase
    .from('products')
    .select('category')
    .eq('is_available', true)
    .eq('is_archived', false)

  if (error) {
    console.error('Error fetching categories:', error)
    throw new Error('Failed to fetch categories')
  }

  // Get unique categories
  const categories = [...new Set(data?.map(item => item.category) || [])]
  return categories
}

// Get available seasons
export async function getAvailableSeasons() {
  const { data, error } = await supabase
    .from('products')
    .select('season')
    .eq('is_available', true)
    .eq('is_archived', false)

  if (error) {
    console.error('Error fetching seasons:', error)
    throw new Error('Failed to fetch seasons')
  }

  // Get unique seasons
  const seasons = [...new Set(data?.map(item => item.season) || [])]
  return seasons
}