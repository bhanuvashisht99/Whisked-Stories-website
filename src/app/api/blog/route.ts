import { NextRequest, NextResponse } from 'next/server'
import { getBlogPosts, getBlogTags } from '@/lib/data/blog'
import { supabase, supabaseAdmin } from '@/lib/supabase'
import type { BlogPost } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    const limit = searchParams.get('limit')
    const includeUnpublished = searchParams.get('includeUnpublished') === 'true'

    // Handle special actions
    if (action === 'tags') {
      const tags = await getBlogTags()
      return NextResponse.json({ tags })
    }

    // For admin requests, include unpublished posts
    if (includeUnpublished) {
      let query = supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (limit) {
        query = query.limit(parseInt(limit))
      }

      const { data, error } = await query

      if (error) {
        throw new Error('Failed to fetch blog posts')
      }

      return NextResponse.json({ posts: data || [] })
    }

    // Get published blog posts for public
    const posts = await getBlogPosts(limit ? parseInt(limit) : undefined)
    return NextResponse.json({ posts })

  } catch (error) {
    console.error('Blog API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, slug, excerpt, content, featured_image, tags, reading_time, is_published } = body

    // Validate required fields
    if (!title || !slug || !excerpt || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if slug already exists
    const { data: existingPost } = await supabase
      .from('blog_posts')
      .select('id')
      .eq('slug', slug)
      .single()

    if (existingPost) {
      return NextResponse.json(
        { error: 'A post with this slug already exists' },
        { status: 400 }
      )
    }

    // Create new blog post
    const { data, error } = await supabaseAdmin
      .from('blog_posts')
      .insert({
        title,
        slug,
        excerpt,
        content,
        featured_image,
        tags: tags || [],
        reading_time: reading_time || 1,
        is_published: is_published || false
      })
      .select()
      .single()

    if (error) {
      throw new Error('Failed to create blog post')
    }

    return NextResponse.json({ post: data })

  } catch (error) {
    console.error('Blog creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}