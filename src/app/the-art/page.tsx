'use client'

import { Leaf, Heart, ChefHat, Award, Clock, Sparkles } from 'lucide-react'

export default function TheArtPage() {
  return (
    <main className="pt-20">
      {/* Hero Section with Large Cake Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-orange-50/60 to-yellow-50/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(193,150,83,0.2),rgba(255,255,255,0))]" />

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-200/15 to-orange-200/15 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-200/15 to-amber-200/15 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-orange-200/15 to-yellow-200/15 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

              {/* Content Side */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-3 text-sm text-neutral-600 bg-white/70 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg">
                    <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                    <span className="font-medium">Artisan Craftsmanship</span>
                  </div>

                  <h1 className="text-5xl lg:text-6xl font-light leading-[0.9] text-neutral-900">
                    The{' '}
                    <span className="italic bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent font-serif">Art</span>
                    <br />
                    of Cake Making
                  </h1>

                  <p className="text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed">
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
              </div>

              {/* Large Cake Visual */}
              <div className="lg:col-span-7">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-primary/5 p-8 flex items-center justify-center border border-amber-100/50 shadow-2xl">
                    <div className="text-center space-y-4">
                      <div className="text-9xl opacity-80">🍰</div>
                      <div className="space-y-2">
                        <p className="font-serif text-xl text-neutral-700">Signature Creation</p>
                        <p className="text-sm text-neutral-500 max-w-md">Beautiful cake photography showcasing our artisan techniques and seasonal ingredients</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Overlay Cards */}
                  <div className="absolute -left-6 top-1/4 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-neutral-100 animate-fade-in transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <Leaf className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-800">Fresh Ingredients</div>
                        <div className="text-xs text-neutral-500">Locally sourced daily</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-6 top-1/3 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-neutral-100 animate-fade-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-red-50 rounded-lg">
                        <Heart className="h-6 w-6 text-red-500" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-800">Made with Love</div>
                        <div className="text-xs text-neutral-500">Every single creation</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -left-4 bottom-1/4 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-neutral-100 animate-fade-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.4s' }}>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-amber-50 rounded-lg">
                        <ChefHat className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-800">Master Techniques</div>
                        <div className="text-xs text-neutral-500">Traditional & innovative</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-8 bottom-1/3 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-neutral-100 animate-fade-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.6s' }}>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-800">Time & Patience</div>
                        <div className="text-xs text-neutral-500">Perfection takes time</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 right-1/4 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-neutral-100 animate-fade-in transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.8s' }}>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <Award className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-800">Award Winning</div>
                        <div className="text-xs text-neutral-500">Recognized excellence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-white to-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-4xl font-light text-neutral-900 mb-6">Our Artisan Process</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Each creation follows our time-honored process, blending traditional techniques
                with innovative approaches to create something truly extraordinary.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🌾</span>
                </div>
                <h3 className="text-xl font-medium text-neutral-800">Source</h3>
                <p className="text-neutral-600 text-sm">Carefully selecting the finest seasonal ingredients from trusted local suppliers</p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <h3 className="text-xl font-medium text-neutral-800">Craft</h3>
                <p className="text-neutral-600 text-sm">Applying artisan techniques passed down through generations of bakers</p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-medium text-neutral-800">Perfect</h3>
                <p className="text-neutral-600 text-sm">Refining every detail until each creation meets our exacting standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}