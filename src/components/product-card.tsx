'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useCart } from '@/contexts/cart-context'

interface Product {
  id: string
  name: string
  description: string
  price: number
  season: string
  serving_size: string
}

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { addItem } = useCart()
  const maxLength = 120 // Characters to show before truncating
  const needsTruncation = product.description.length > maxLength

  const displayDescription = needsTruncation && !isExpanded
    ? product.description.slice(0, maxLength).trim()
    : product.description

  return (
    <div
      className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 transform flex flex-col h-full animate-fade-up`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <Link href={`/menu/${product.id}`} className="flex flex-col h-full">
        <div className="h-48 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-transparent group-hover:scale-110 transition-transform duration-500"></div>
          <div className="text-center text-amber-700 relative z-10 group-hover:scale-110 transition-transform duration-300">
            <div className="text-5xl mb-2 animate-float" style={{ animationDelay: `${index * 500}ms` }}>🧁</div>
            <p className="text-sm font-medium">Product Image</p>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          {product.season !== 'all-year' && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 capitalize mb-3 w-fit">
              {product.season} Special
            </span>
          )}

          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
            {product.name}
          </h3>

          <div className="text-gray-600 mb-4 flex-grow">
            <p className="leading-relaxed">
              {displayDescription}
              {needsTruncation && !isExpanded && '...'}
            </p>

            {needsTruncation && (
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIsExpanded(!isExpanded)
                }}
                className="text-amber-600 hover:text-amber-700 text-sm font-medium mt-2 flex items-center gap-1 transition-colors"
              >
                {isExpanded ? (
                  <>
                    Show Less
                    <ChevronUp className="h-3 w-3" />
                  </>
                ) : (
                  <>
                    Read More
                    <ChevronDown className="h-3 w-3" />
                  </>
                )}
              </button>
            )}
          </div>

          <div className="text-sm text-gray-500 mb-4">
            Serves: {product.serving_size}
          </div>

          <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              ₹{product.price}
            </span>

            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="outline"
                className="border-amber-500 text-amber-600 hover:bg-amber-50"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  window.location.href = `/menu/${product.id}`
                }}
              >
                View Details
              </Button>

              <Button
                size="sm"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price
                  })
                  // Show success message
                  const button = e.target as HTMLButtonElement
                  const originalText = button.textContent
                  button.textContent = 'Added! ✓'
                  setTimeout(() => {
                    if (button.textContent === 'Added! ✓') {
                      button.textContent = originalText
                    }
                  }, 2000)
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}