'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Filter, ShoppingCart, Info, Star } from 'lucide-react'
import { mockProducts } from '@/lib/mock-data'
import { useCart } from '@/contexts/cart-context'
import { useState } from 'react'
import type { Product } from '@/types'

const categories = ['All', 'Chocolate', 'Fruit', 'Classic', 'Floral', 'Seasonal']
const seasons = ['All', 'all-year', 'spring', 'summer', 'autumn', 'winter']

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-150 ease-out transform flex flex-col h-full">
      <div className="relative h-48 bg-gradient-to-br from-warm-wheat/60 to-warm-honey/40">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-warm-coffee">
            <div className="text-5xl mb-2">🧁</div>
            <p className="text-sm font-medium">Product Image</p>
          </div>
        </div>
        {product.season !== 'all-year' && (
          <span className="absolute top-3 right-3 bg-warm-caramel text-white px-2 py-1 rounded-full text-xs font-semibold capitalize">
            {product.season}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/menu/${product.id}`} className="hover:text-warm-caramel transition-colors">
            <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{product.name}</h3>
          </Link>
          <div className="flex items-center ml-2">
            <Star className="h-4 w-4 text-warm-honey fill-current" />
            <span className="text-sm text-gray-600 ml-1">4.9</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{product.description}</p>

        {/* Ingredients & Info */}
        <div className="mb-4">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Info className="h-4 w-4 mr-1" />
            Serves {product.serving_size}
          </div>
          <div className="flex flex-wrap gap-1 mb-2">
            {(product.allergens || []).map((allergen) => (
              <span key={allergen} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                {allergen}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-auto">
          <span className="text-2xl font-bold text-warm-caramel">₹{product.price}</span>
          <Button
            size="sm"
            className="inline-flex items-center gap-2"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            {addedToCart ? 'Added!' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedSeason, setSelectedSeason] = useState('All')

  // Filter products based on availability and archive status
  const activeProducts = mockProducts.filter(product =>
    product.is_available && !product.is_archived
  )

  // Apply filters
  const filteredProducts = activeProducts.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory
    const seasonMatch = selectedSeason === 'All' || product.season === selectedSeason
    return categoryMatch && seasonMatch
  })

  return (
    <main className="pt-20 pb-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-warm-cream to-warm-butter py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Seasonal Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully crafted collection of cakes, made with seasonal ingredients
            and time-honored techniques. Each creation tells its own delicious story.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center text-gray-700 font-medium">
                <Filter className="h-5 w-5 mr-2" />
                Category:
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    className={selectedCategory === category
                      ? "bg-warm-caramel text-white"
                      : "border-warm-wheat/60 hover:bg-warm-wheat/30"
                    }
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Season Filter */}
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Season:</span>
              <div className="flex gap-2">
                {seasons.slice(0, 4).map((season) => (
                  <Button
                    key={season}
                    variant={selectedSeason === season ? "default" : "outline"}
                    size="sm"
                    className={selectedSeason === season
                      ? "bg-warm-caramel text-white capitalize"
                      : "border-warm-wheat/60 hover:bg-warm-wheat/30 capitalize"
                    }
                    onClick={() => setSelectedSeason(season)}
                  >
                    {season === 'all-year' ? 'All Year' : season}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more products.</p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-16 bg-warm-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don't see what you're looking for?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We'd love to create something special just for you! Our custom orders allow you to work
            directly with our bakers to design the perfect cake for your occasion.
          </p>
          <Button size="lg" asChild>
            <Link href="/custom-orders">Request Custom Order</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}