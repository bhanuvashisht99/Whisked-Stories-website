import Link from 'next/link'
import { mockProducts } from '@/lib/mock-data'
import { Calendar, Leaf, Snowflake, Sun, Wind, Star } from 'lucide-react'

const archivedProducts = mockProducts.filter(product => product.is_archived)

const seasonIcons = {
  spring: Leaf,
  summer: Sun,
  autumn: Wind,
  winter: Snowflake,
}

const seasonColors = {
  spring: 'text-green-600 bg-green-50 border-green-200',
  summer: 'text-orange-600 bg-orange-50 border-orange-200',
  autumn: 'text-amber-600 bg-amber-50 border-amber-200',
  winter: 'text-blue-600 bg-blue-50 border-blue-200',
}

const timelineByYear = archivedProducts.reduce((acc, product) => {
  const year = new Date(product.created_at).getFullYear()
  if (!acc[year]) acc[year] = []
  acc[year].push(product)
  return acc
}, {} as Record<number, typeof archivedProducts>)

export default function ArchivePage() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 text-sm text-neutral-600 bg-primary/10 px-4 py-2 rounded-full">
              <Calendar className="h-4 w-4" />
              <span>Seasonal Archive</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-light text-neutral-900">
              A Journey Through
              <br />
              <span className="font-serif italic text-primary">Past Seasons</span>
            </h1>

            <p className="text-lg lg:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Explore our collection of seasonal creations from years past.
              Each cake represents a moment in time, capturing the essence of its season.
            </p>
          </div>
        </div>
      </section>

      {/* Season Stats */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries({
                spring: archivedProducts.filter(p => p.season === 'spring').length,
                summer: archivedProducts.filter(p => p.season === 'summer').length,
                autumn: archivedProducts.filter(p => p.season === 'autumn').length,
                winter: archivedProducts.filter(p => p.season === 'winter').length,
              }).map(([season, count]) => {
                const Icon = seasonIcons[season as keyof typeof seasonIcons]
                return (
                  <div key={season} className="text-center space-y-3">
                    <div className={`w-12 h-12 mx-auto rounded-2xl border flex items-center justify-center ${seasonColors[season as keyof typeof seasonColors]}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-light text-neutral-900">{count}</div>
                      <div className="text-sm text-neutral-500 capitalize">{season} Creations</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-light text-neutral-900 mb-4">
                Our Seasonal Timeline
              </h2>
              <p className="text-neutral-600">
                A chronological journey through our archived seasonal offerings
              </p>
            </div>

            <div className="space-y-16">
              {Object.entries(timelineByYear)
                .sort(([a], [b]) => Number(b) - Number(a))
                .map(([year, products]) => (
                  <div key={year} className="relative">
                    {/* Year marker */}
                    <div className="flex items-center mb-8">
                      <div className="bg-primary text-white px-4 py-2 rounded-full font-medium">
                        {year}
                      </div>
                      <div className="flex-1 h-px bg-neutral-200 ml-4" />
                    </div>

                    {/* Products grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {products.map((product) => {
                        const Icon = seasonIcons[product.season as keyof typeof seasonIcons] || Calendar
                        return (
                          <div
                            key={product.id}
                            className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-accent to-primary/5 p-6 flex items-center justify-center relative">
                              <div className="text-center space-y-2">
                                <div className="text-5xl opacity-60">🧁</div>
                                <p className="text-sm text-neutral-600">Product Image</p>
                              </div>

                              {/* Season badge */}
                              <div className={`absolute top-3 right-3 px-3 py-1 rounded-full border text-xs font-medium flex items-center space-x-1 ${seasonColors[product.season as keyof typeof seasonColors]}`}>
                                <Icon className="h-3 w-3" />
                                <span className="capitalize">{product.season}</span>
                              </div>
                            </div>

                            <div className="p-6 space-y-4">
                              <div className="space-y-2">
                                <h3 className="text-lg font-medium text-neutral-900 group-hover:text-primary transition-colors">
                                  {product.name}
                                </h3>
                                <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                                  {product.description}
                                </p>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                  <div className="text-lg font-medium text-primary">
                                    ₹{product.price}
                                  </div>
                                  <div className="text-xs text-neutral-500">
                                    {new Date(product.created_at).toLocaleDateString('en-IN', {
                                      month: 'short',
                                      year: 'numeric'
                                    })}
                                  </div>
                                </div>

                                <div className="flex items-center space-x-1 text-xs text-neutral-500">
                                  <Star className="h-3 w-3 text-amber-400 fill-current" />
                                  <span>4.9</span>
                                  <span className="text-neutral-300">•</span>
                                  <span>{Math.floor(Math.random() * 50) + 10} orders</span>
                                </div>
                              </div>

                              <div className="pt-3 border-t border-neutral-100">
                                <Link
                                  href={`/menu/${product.id}`}
                                  className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                                >
                                  View Details →
                                </Link>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      {/* Bring Back CTA */}
      <section className="py-16 bg-white border-t border-neutral-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-light text-neutral-900">
                Found Something You Love?
              </h2>
              <p className="text-neutral-600">
                While these seasonal items are no longer available,
                we can recreate them for special orders or bring them back for their next season.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/custom-orders"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-colors"
              >
                Request Custom Recreation
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center px-8 py-3 border border-neutral-300 hover:bg-neutral-50 text-neutral-700 rounded-full font-medium transition-colors"
              >
                View Current Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}