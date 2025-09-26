import { supabase } from '@/lib/supabase'
import type { BlogPost } from '@/lib/supabase'

// Get all published blog posts
export async function getBlogPosts(limit?: number) {
  let query = supabase
    .from('blog_posts')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching blog posts:', error)
    throw new Error('Failed to fetch blog posts')
  }

  return data || []
}

// Get a single blog post by slug
export async function getBlogPost(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()

  if (error) {
    console.error('Error fetching blog post:', error)
    throw new Error('Failed to fetch blog post')
  }

  return data
}

// Get featured blog posts for homepage
export async function getFeaturedBlogPosts(limit: number = 2) {
  return getBlogPosts(limit)
}

// Get blog posts by tag
export async function getBlogPostsByTag(tag: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .contains('tags', [tag])
    .eq('is_published', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching blog posts by tag:', error)
    throw new Error('Failed to fetch blog posts by tag')
  }

  return data || []
}

// Get all unique tags
export async function getBlogTags() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('tags')
    .eq('is_published', true)

  if (error) {
    console.error('Error fetching blog tags:', error)
    throw new Error('Failed to fetch blog tags')
  }

  // Flatten and get unique tags
  const allTags = data?.flatMap(post => post.tags || []) || []
  const uniqueTags = [...new Set(allTags)]
  return uniqueTags
}