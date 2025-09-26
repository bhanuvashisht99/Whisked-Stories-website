'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { BlogPost } from '@/lib/supabase'
import {
  Plus,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Calendar,
  FileText
} from 'lucide-react'

export default function AdminJournalPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog?includeUnpublished=true')
      const data = await response.json()
      if (data.posts) {
        setPosts(data.posts)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeletePost = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      const response = await fetch(`/api/blog/${postId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setPosts(posts.filter(post => post.id !== postId))
      } else {
        alert('Failed to delete post')
      }
    } catch (error) {
      console.error('Error deleting post:', error)
      alert('Failed to delete post')
    }
  }

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' ||
                         (statusFilter === 'published' && post.is_published) ||
                         (statusFilter === 'draft' && !post.is_published)

    return matchesSearch && matchesStatus
  })

  if (loading) {
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center">Loading posts...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold text-gray-900">Journal Posts</h1>
            <p className="mt-2 text-sm text-gray-700">
              Manage your bakery's blog posts and stories to engage with your customers.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Button asChild>
              <Link href="/admin/journal/new" className="flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                Write New Post
              </Link>
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center space-x-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="all">All Posts</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>

        {/* Posts List */}
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="space-y-0">
            {filteredPosts.map((post) => (
              <div key={post.id} className="border-b border-gray-200 hover:bg-gray-50">
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 bg-amber-100 rounded-lg flex items-center justify-center">
                            <FileText className="h-5 w-5 text-amber-600" />
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center space-x-2">
                            <p className="text-lg font-medium text-gray-900 truncate">
                              {post.title}
                            </p>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              post.is_published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {post.is_published ? 'Published' : 'Draft'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{post.excerpt}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(post.created_at).toLocaleDateString('en-IN')}
                            </div>
                            {post.reading_time && (
                              <span className="text-sm text-gray-500">
                                {post.reading_time} min read
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/journal/${post.slug}`} target="_blank">
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/admin/journal/${post.id}/edit`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No posts found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {searchTerm || statusFilter !== 'all'
                    ? 'Try adjusting your search or filter criteria.'
                    : 'Get started by writing your first blog post.'
                  }
                </p>
                {!searchTerm && statusFilter === 'all' && (
                  <div className="mt-6">
                    <Button asChild>
                      <Link href="/admin/journal/new" className="flex items-center">
                        <Plus className="h-4 w-4 mr-2" />
                        Write New Post
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        {filteredPosts.length > 0 && (
          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Showing {filteredPosts.length} of {posts.length} posts
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                Export
              </Button>
              <Button variant="outline" size="sm">
                Bulk Actions
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}