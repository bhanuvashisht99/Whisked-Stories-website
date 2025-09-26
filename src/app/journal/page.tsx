import Link from 'next/link'
import { mockBlogPosts } from '@/lib/mock-data'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'

const featuredPost = mockBlogPosts[0]
const otherPosts = mockBlogPosts.slice(1)

const categories = [
  'All Stories',
  'Seasonal Insights',
  'Behind the Scenes',
  'Techniques',
  'Ingredients',
  'Community'
]

export default function JournalPage() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 text-sm text-neutral-600 bg-primary/10 px-4 py-2 rounded-full">
              <span>Our Kitchen Journal</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-light text-neutral-900">
              Stories from Our
              <br />
              <span className="font-serif italic text-primary">Kitchen</span>
            </h1>

            <p className="text-lg lg:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Discover the inspiration behind our seasonal creations, learn about our techniques,
              and follow our journey as artisan bakers.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-neutral-100">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 text-sm font-medium rounded-full border border-neutral-200 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-primary/5 p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl opacity-60">📝</div>
                    <div className="space-y-2">
                      <p className="font-serif text-lg text-neutral-700">Featured Article Image</p>
                      <p className="text-sm text-neutral-500">High-quality photography showcasing the story</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-neutral-500">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      Featured Story
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.created_at).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>5 min read</span>
                    </div>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center space-x-1 text-xs text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full"
                      >
                        <Tag className="h-3 w-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <Button
  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full"
  asChild
>
  <Link href={`/journal/${featuredPost.slug}`} className="flex items-center gap-2">
    Read Full Story
    <ArrowRight className="h-4 w-4" />
  </Link>
</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-light text-neutral-900 mb-4">
                Recent Stories
              </h2>
              <p className="text-neutral-600">
                Insights from our kitchen and the world of artisan baking
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-neutral-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-accent to-primary/5 p-8 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-4xl opacity-60">📖</div>
                      <p className="text-sm text-neutral-600">Story Image</p>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-4 text-xs text-neutral-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.created_at).toLocaleDateString('en-IN', {
                          month: 'short',
                          day: 'numeric'
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>3 min read</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-medium text-neutral-900 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/journal/${post.slug}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white border-t border-neutral-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-light text-neutral-900">
                Never Miss a Story
              </h2>
              <p className="text-neutral-600">
                Subscribe to our journal for weekly insights, seasonal recipes,
                and behind-the-scenes stories from our kitchen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full">
                Subscribe
              </Button>
            </div>

            <p className="text-xs text-neutral-500">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}