'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Save, Eye, X } from 'lucide-react'
import Link from 'next/link'

interface BlogPostForm {
  title: string
  slug: string
  excerpt: string
  content: string
  is_published: boolean
  reading_time?: number
}

export default function NewJournalPostPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<BlogPostForm>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    is_published: false
  })

  // Auto-generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  // Estimate reading time (roughly 200 words per minute)
  const estimateReadingTime = (content: string) => {
    const words = content.trim().split(/\s+/).length
    return Math.max(1, Math.round(words / 200))
  }

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const postData = {
        ...formData,
        reading_time: estimateReadingTime(formData.content),
        tags: []
      }

      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })

      const result = await response.json()

      if (response.ok) {
        alert('Blog post created successfully!')
        router.push('/admin/journal')
      } else {
        alert(result.error || 'Error creating post. Please try again.')
      }
    } catch (error) {
      console.error('Error creating post:', error)
      alert('Error creating post. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSaveDraft = async () => {
    const draftData = { ...formData, is_published: false }
    setFormData(draftData)
    // Auto-save draft logic here
    console.log('Saving draft:', draftData)
  }

  return (
    <div className="py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Link href="/admin/journal" className="mr-4">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Journal
              </Button>
            </Link>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">Write New Post</h1>
          <p className="mt-2 text-sm text-gray-700">
            Share stories, recipes, and insights from your bakery.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white shadow rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Post Title *
              </label>
              <input
                type="text"
                id="title"
                required
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                placeholder="Enter your post title..."
              />
            </div>

            {/* Slug */}
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                URL Slug *
              </label>
              <div className="mt-1 flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  whiskedstories.com/journal/
                </span>
                <input
                  type="text"
                  id="slug"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                  className="flex-1 block w-full border border-gray-300 rounded-r-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="post-url-slug"
                />
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
                Excerpt *
              </label>
              <textarea
                id="excerpt"
                required
                rows={3}
                value={formData.excerpt}
                onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                placeholder="A brief summary of your post (will appear in post previews)..."
              />
              <p className="mt-1 text-sm text-gray-500">
                {formData.excerpt.length}/200 characters
              </p>
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content *
              </label>
              <textarea
                id="content"
                required
                rows={15}
                value={formData.content}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500 font-mono text-sm"
                placeholder="Write your post content here... (Markdown supported)"
              />
              <p className="mt-1 text-sm text-gray-500">
                ~{estimateReadingTime(formData.content)} min read • {formData.content.trim().split(/\s+/).length} words
              </p>
            </div>

            {/* Publishing Options */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="is_published"
                  checked={formData.is_published}
                  onChange={(e) => setFormData(prev => ({ ...prev, is_published: e.target.checked }))}
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-3"
                />
                <label htmlFor="is_published" className="text-sm font-medium text-gray-700">
                  Publish immediately
                </label>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {formData.is_published
                  ? 'This post will be visible to all visitors.'
                  : 'Save as draft - only visible to admins.'
                }
              </p>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <Button type="button" variant="outline" onClick={handleSaveDraft}>
                Save Draft
              </Button>

              <div className="flex space-x-3">
                <Button variant="outline" type="button" asChild>
                  <Link href="/admin/journal">
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Link>
                </Button>

                {formData.title && (
                  <Button type="button" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                )}

                <Button type="submit" disabled={loading}>
                  <Save className="h-4 w-4 mr-2" />
                  {loading
                    ? 'Saving...'
                    : formData.is_published
                      ? 'Publish Post'
                      : 'Save Draft'
                  }
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Writing Tips */}
        <div className="mt-8 bg-amber-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-amber-800 mb-3">Writing Tips</h3>
          <ul className="text-sm text-amber-700 space-y-2">
            <li>• Share behind-the-scenes stories from your bakery</li>
            <li>• Include seasonal recipes and baking tips</li>
            <li>• Tell the story behind your featured products</li>
            <li>• Share customer success stories and testimonials</li>
            <li>• Write about local ingredients and suppliers</li>
          </ul>
        </div>
      </div>
    </div>
  )
}