'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Star, ArrowRight, Calendar, Award, Leaf, Heart, ChefHat, ChevronDown, ChevronUp, Clock, Sparkles } from 'lucide-react'
import { useScrollRevealMultiple } from '@/hooks/use-scroll-reveal'
import { useEffect, useState } from 'react'
import { NewsletterSignup } from '@/components/newsletter-signup'
import { ProductCard } from '@/components/product-card'
import { getFeaturedProducts } from '@/lib/data/products'
import { getFeaturedBlogPosts } from '@/lib/data/blog'
import { getFeaturedTestimonials } from '@/lib/data/testimonials'
import type { Product, BlogPost, Testimonial } from '@/lib/supabase'

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([])
  const [featuredTestimonials, setFeaturedTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const [products, posts, testimonials] = await Promise.all([
          getFeaturedProducts(3),
          getFeaturedBlogPosts(2),
          getFeaturedTestimonials()
        ])

        setFeaturedProducts(products)
        setFeaturedPosts(posts)
        setFeaturedTestimonials(testimonials)
      } catch (error) {
        console.error('Error loading homepage data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // Initialize scroll reveal animations
  useScrollRevealMultiple('.scroll-reveal')
  useScrollRevealMultiple('.scroll-reveal-left')
  useScrollRevealMultiple('.scroll-reveal-right')

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-warm-butter to-neutral-100" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,115,85,0.1),rgba(255,255,255,0))]" />

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-warm-honey/20 to-warm-caramel/15 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-warm-butter/20 to-warm-wheat/15 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-warm-honey/15 to-warm-butter/15 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Hero Content */}
              <div className="lg:col-span-7 space-y-8 pr-4 sm:pr-6 lg:pr-0 mt-4">
                <div className="space-y-6">

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.2] text-neutral-900 animate-fade-up">
                    Crafting{' '}
                    <span className="italic bg-gradient-to-r from-warm-coffee via-warm-cocoa to-warm-caramel bg-clip-text text-transparent animate-shimmer pr-2">Stories</span>
                    <br />
                    Through Seasonal
                    <br />
                    <span className="font-serif italic bg-gradient-to-r from-warm-cocoa to-primary bg-clip-text text-transparent pr-2">Confections</span>
                  </h1>

                  <p className="text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed">
                    Every creation at Whisked Stories celebrates the seasons,
                    honoring traditional techniques while embracing innovative flavors
                    that capture the essence of each moment.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-warm-coffee hover:from-warm-coffee hover:to-warm-cocoa text-white px-8 py-4 rounded-full text-base font-medium inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                    asChild
                  >
                    <Link href="/menu" className="inline-flex items-center gap-2">
                      Explore Current Menu
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 rounded-full text-base font-medium border-2 border-neutral-300 hover:border-primary text-neutral-700 hover:bg-neutral-50 backdrop-blur-sm bg-white/70 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/custom-orders">Commission a Cake</Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-8 pt-8">
                  <div className="text-center">
                    <div className="text-2xl font-light text-primary">500+</div>
                    <div className="text-sm text-neutral-500">Cakes Crafted</div>
                  </div>
                  <div className="h-12 w-px bg-neutral-200" />
                  <div className="text-center">
                    <div className="text-2xl font-light text-primary">24</div>
                    <div className="text-sm text-neutral-500">Seasonal Flavors</div>
                  </div>
                  <div className="h-12 w-px bg-neutral-200" />
                  <div className="text-center">
                    <div className="text-2xl font-light text-primary">5★</div>
                    <div className="text-sm text-neutral-500">Average Rating</div>
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="lg:col-span-5">
                <div className="relative flex items-center justify-center">
                  <img
                    src="/images/Ws1.png"
                    alt="Whisked Stories Bakery - Hand-drawn illustration of bakery storefront with cake displays"
                    className="w-full h-auto object-contain filter brightness-90 contrast-110"
                    style={{
                      filter: 'brightness(0.9) contrast(1.1) sepia(0.1) hue-rotate(10deg) saturate(0.95)',
                      mixBlendMode: 'multiply'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Art Section */}
      <section className="py-20 bg-gradient-to-br from-warm-wheat to-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(139,115,85,0.08),transparent)]" />

        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

              {/* Content Side */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-6">

                  <h2 className="text-4xl lg:text-5xl font-light leading-[0.9] text-neutral-900">
                    The{' '}
                    <span className="italic bg-gradient-to-r from-warm-caramel via-warm-coffee to-primary bg-clip-text text-transparent font-serif">Art</span>
                    <br />
                    of Cake Making
                  </h2>

                  <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
                    Every creation begins with passion, precision, and the finest ingredients.
                    Witness the artistry that transforms simple elements into extraordinary experiences.
                  </p>
                </div>

                {/* Process Stats */}
                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-light text-primary">8hrs</div>
                    <div className="text-sm text-neutral-500">Average Creation Time</div>
                  </div>
                  <div className="h-12 w-px bg-neutral-200" />
                  <div className="text-center">
                    <div className="text-2xl font-light text-primary">15+</div>
                    <div className="text-sm text-neutral-500">Artisan Techniques</div>
                  </div>
                  <div className="h-12 w-px bg-neutral-200" />
                  <div className="text-center">
                    <div className="text-2xl font-light text-primary">100%</div>
                    <div className="text-sm text-neutral-500">Handcrafted</div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    className="bg-gradient-to-r from-primary to-warm-coffee hover:from-warm-coffee hover:to-warm-cocoa text-white px-8 py-3 rounded-full text-base font-medium inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/the-art">Explore Our Craft</Link>
                  </Button>
                </div>
              </div>

              {/* Large Cake Visual */}
              <div className="lg:col-span-7">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-100 via-warm-cream to-warm-butter/20 p-8 flex items-center justify-center border border-neutral-200 shadow-2xl">
                    <div className="text-center space-y-4">
                      <div className="text-9xl opacity-80">🍰</div>
                      <div className="space-y-2">
                        <p className="font-serif text-xl text-neutral-700">Signature Creation</p>
                        <p className="text-sm text-neutral-500 max-w-md">Artisan cake photography showcasing our techniques and seasonal ingredients</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Overlay Cards - Extra Small for Mobile */}
                  <div className="absolute -left-1 lg:-left-6 top-1/4 bg-white/95 backdrop-blur-sm p-2 lg:p-5 rounded-lg lg:rounded-2xl shadow-md lg:shadow-xl border border-neutral-200/50 animate-fade-in transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-1.5 lg:space-x-4">
                      <div className="p-0.5 lg:p-2 bg-green-50 rounded">
                        <Leaf className="h-2.5 w-2.5 lg:h-6 lg:w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xs lg:text-sm font-semibold text-neutral-800">Fresh Ingredients</div>
                        <div className="text-xs text-neutral-500 hidden lg:block">Locally sourced daily</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-1 lg:-right-6 top-1/3 bg-white/95 backdrop-blur-sm p-2 lg:p-5 rounded-lg lg:rounded-2xl shadow-md lg:shadow-xl border border-neutral-200/50 animate-fade-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center space-x-1.5 lg:space-x-4">
                      <div className="p-0.5 lg:p-2 bg-red-50 rounded">
                        <Heart className="h-2.5 w-2.5 lg:h-6 lg:w-6 text-red-500" />
                      </div>
                      <div>
                        <div className="text-xs lg:text-sm font-semibold text-neutral-800">Made with Love</div>
                        <div className="text-xs text-neutral-500 hidden lg:block">Every single creation</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-0 lg:-left-4 bottom-1/4 bg-white/95 backdrop-blur-sm p-2 lg:p-5 rounded-lg lg:rounded-2xl shadow-md lg:shadow-xl border border-neutral-200/50 animate-fade-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.4s' }}>
                    <div className="flex items-center space-x-1.5 lg:space-x-4">
                      <div className="p-0.5 lg:p-2 bg-amber-50 rounded">
                        <ChefHat className="h-2.5 w-2.5 lg:h-6 lg:w-6 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-xs lg:text-sm font-semibold text-neutral-800">Master Techniques</div>
                        <div className="text-xs text-neutral-500 hidden lg:block">Traditional & innovative</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-0 lg:-right-8 bottom-1/3 bg-white/95 backdrop-blur-sm p-2 lg:p-5 rounded-lg lg:rounded-2xl shadow-md lg:shadow-xl border border-neutral-200/50 animate-fade-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.6s' }}>
                    <div className="flex items-center space-x-1.5 lg:space-x-4">
                      <div className="p-0.5 lg:p-2 bg-blue-50 rounded">
                        <Clock className="h-2.5 w-2.5 lg:h-6 lg:w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs lg:text-sm font-semibold text-neutral-800">Time & Patience</div>
                        <div className="text-xs text-neutral-500 hidden lg:block">Perfection takes time</div>
                      </div>
                    </div>
                  </div>

                  {/* Award card - only show on larger screens to reduce clutter */}
                  <div className="absolute top-0 right-1/4 bg-white/95 backdrop-blur-sm p-2 lg:p-5 rounded-lg lg:rounded-2xl shadow-md lg:shadow-xl border border-neutral-200/50 animate-fade-in transform hover:scale-105 transition-all duration-300 hidden md:block" style={{ animationDelay: '0.8s' }}>
                    <div className="flex items-center space-x-1.5 lg:space-x-4">
                      <div className="p-0.5 lg:p-2 bg-purple-50 rounded">
                        <Award className="h-2.5 w-2.5 lg:h-6 lg:w-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-xs lg:text-sm font-semibold text-neutral-800">Award Winning</div>
                        <div className="text-xs text-neutral-500 hidden lg:block">Recognized excellence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-br from-warm-butter to-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden scroll-reveal-left">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-xl flex items-center justify-center">
                <div className="text-center text-amber-700">
                  <div className="text-6xl mb-4 animate-float animation-delay-1000">👩‍🍳</div>
                  <p className="text-lg font-medium">Ayushi's Photo</p>
                </div>
              </div>
            </div>
            <div className="scroll-reveal-right">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                Meet Ayushi, Our Head Baker
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every cake at Whisked Stories begins with a passion for creating memorable moments.
                Ayushi brings years of baking expertise and a love for seasonal ingredients to craft
                unique flavors that tell a story.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From experimenting with local Indian flavors to perfecting classic techniques,
                our approach to baking is both traditional and innovative.
              </p>
              <Button className="bg-gradient-to-r from-primary to-warm-coffee hover:from-warm-coffee hover:to-warm-cocoa hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(139,115,85,0.04),transparent)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 scroll-reveal">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
                What Our Customers Say
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-warm-coffee rounded-full mx-auto mb-6"></div>
            </div>
            <p className="text-xl text-gray-600 text-center">
              Stories from our happy customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <div key={testimonial.id}
                className={`bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-neutral-200/40 hover:shadow-xl transition-all duration-500 scroll-reveal ${index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 transition-colors duration-300 ${
                        i < testimonial.rating ? 'text-amber-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{testimonial.review}"</p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-neutral-700 font-bold text-lg">
                      {testimonial.customer_name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900 text-lg">{testimonial.customer_name}</p>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal Preview */}
      <section className="py-20 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Our Kitchen Journal
            </h2>
            <p className="text-xl text-gray-600 text-center">
              Stories, recipes, and insights from behind the scenes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-neutral-200/30">
                <div className="h-48 bg-neutral-100 flex items-center justify-center">
                  <div className="text-center text-neutral-600">
                    <div className="text-5xl mb-2">📝</div>
                    <p className="text-sm">Blog Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.created_at).toLocaleDateString('en-IN')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/journal/${post.slug}`}
                    className="text-primary hover:text-warm-coffee font-medium inline-flex items-center gap-2"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/journal">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-100/80 via-warm-butter/30 to-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.1),transparent)]" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-xl animate-float animation-delay-2000" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <NewsletterSignup variant="hero" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-warm-butter to-warm-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Create Sweet Memories?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-center">
            Whether it's a special occasion or just because, let us craft the perfect cake for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-warm-coffee hover:from-warm-coffee hover:to-warm-cocoa text-white" asChild>
              <Link href="/menu">Browse Menu</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-neutral-50" asChild>
              <Link href="/custom-orders">
                Custom Order
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
