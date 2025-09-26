import { NextRequest, NextResponse } from 'next/server'
import { supabase, supabaseAdmin } from '@/lib/supabase'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) {
      throw new Error('Failed to fetch blog post')
    }

    if (!data) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ post: data })

  } catch (error) {
    console.error('Blog post fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Check if new slug conflicts with existing posts (excluding current post)
    if (slug) {
      const { data: existingPost } = await supabase
        .from('blog_posts')
        .select('id')
        .eq('slug', slug)
        .neq('id', params.id)
        .single()

      if (existingPost) {
        return NextResponse.json(
          { error: 'A post with this slug already exists' },
          { status: 400 }
        )
      }
    }

    // Update blog post
    const { data, error } = await supabaseAdmin
      .from('blog_posts')
      .update({
        title,
        slug,
        excerpt,
        content,
        featured_image,
        tags: tags || [],
        reading_time: reading_time || 1,
        is_published: is_published || false,
        updated_at: new Date().toISOString()
      })
      .eq('id', params.id)
      .select()
      .single()

    if (error) {
      throw new Error('Failed to update blog post')
    }

    if (!data) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ post: data })

  } catch (error) {
    console.error('Blog post update error:', error)
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await supabaseAdmin
      .from('blog_posts')
      .delete()
      .eq('id', params.id)

    if (error) {
      throw new Error('Failed to delete blog post')
    }

    return NextResponse.json({ message: 'Blog post deleted successfully' })

  } catch (error) {
    console.error('Blog post deletion error:', error)
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    )
  }
}