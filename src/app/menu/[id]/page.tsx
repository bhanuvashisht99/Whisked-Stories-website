'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { mockProducts } from '@/lib/mock-data'
import { ArrowLeft, ShoppingCart, Star, Clock, Users, AlertTriangle, Leaf, ChefHat } from 'lucide-react'
import { notFound } from 'next/navigation'
import { useCart } from '@/contexts/cart-context'
import { useState } from 'react'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { addItem } = useCart()
  const [addedToCart, setAddedToCart] = useState(false)
  const product = mockProducts.find(p => p.id === params.id)

  if (!product) {
    notFound()
  }

  const ingredients = {
    '1': {
      main: ['Premium Dark Chocolate (54% Cocoa)', 'Fresh Cream', 'Organic Eggs', 'Refined Wheat Flour', 'Cane Sugar', 'Unsalted Butter', 'Pure Vanilla Extract', 'Sea Salt'],
      garnish: ['Belgian Chocolate Shavings', 'Edible Gold Dust', 'Fresh Berries']
    },
    '2': {
      main: ['Seasonal Mixed Berries', 'Organic Eggs', 'Fresh Cream', 'Refined Wheat Flour', 'Cane Sugar', 'Unsalted Butter', 'Vanilla Bean Paste'],
      garnish: ['Fresh Mint Leaves', 'Berry Compote', 'Powdered Sugar']
    },
    '3': {
      main: ['Madagascar Vanilla Bean', 'Organic Eggs', 'Fresh Cream', 'Refined Wheat Flour', 'Cane Sugar', 'Unsalted Butter', 'Milk'],
      garnish: ['Vanilla Bean Pods', 'White Chocolate Curls']
    },
    '4': {
      main: ['Rose Water', 'Green Cardamom', 'Organic Eggs', 'Fresh Cream', 'Refined Wheat Flour', 'Cane Sugar', 'Unsalted Butter', 'Milk'],
      garnish: ['Dried Rose Petals', 'Pistachios', 'Silver Leaf']
    },
    '5': {
      main: ['Fresh Lemons', 'Culinary Lavender', 'Organic Eggs', 'Fresh Cream', 'Refined Wheat Flour', 'Cane Sugar', 'Unsalted Butter'],
      garnish: ['Lemon Zest', 'Dried Lavender', 'White Chocolate']
    },
    '6': {
      main: ['Pumpkin Puree', 'Cinnamon', 'Nutmeg', 'Organic Eggs', 'Fresh Cream', 'Refined Wheat Flour', 'Maple Syrup'],
      garnish: ['Candied Pecans', 'Cinnamon Dust', 'Maple Drizzle']
    }
  }

  const currentIngredients = ingredients[product.id as keyof typeof ingredients] || ingredients['1']

  const nutritionInfo = {
    calories: '320 per serving',
    fat: '18g',
    carbs: '35g',
    protein: '6g',
    sugar: '28g'
  }

  return (
    <main className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/menu" className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-amber-700">
                  <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-300">🧁</div>
                  <p className="text-lg font-medium">High-quality product image</p>
                  <p className="text-sm opacity-75">Professional photography</p>
                </div>
              </div>
            </div>

            {/* Thumbnail gallery */}
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🧁</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                {product.season !== 'all-year' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 capitalize">
                    {product.season} Special
                  </span>
                )}
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(24 reviews)</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{product.serving_size}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>2-3 hours prep</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <ChefHat className="h-5 w-5 mr-2" />
                  <span>Handcrafted</span>
                </div>
              </div>

              <div className="text-3xl font-bold text-amber-600 mb-6">₹{product.price.toLocaleString()}</div>
            </div>

            {/* Add to Cart / Order */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                  onClick={() => {
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price
                    })
                    setAddedToCart(true)
                    setTimeout(() => setAddedToCart(false), 2000)
                  }}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {addedToCart ? 'Added to Cart! ✓' : 'Add to Cart'}
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/custom-orders">Customize Order</Link>
                </Button>
              </div>

              <p className="text-sm text-gray-600 text-center">
                💚 Free delivery on orders above ₹2000 • 📞 Call for same-day delivery
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-amber-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Fresh Ingredients</span>
              </div>
              <div className="flex items-center space-x-2">
                <ChefHat className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-medium">Handcrafted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Made to Order</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button className="border-transparent text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 border-amber-500 font-medium text-sm">
                Ingredients
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                Nutrition
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                Care Instructions
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                Reviews
              </button>
            </nav>
          </div>

          <div className="py-8">
            {/* Ingredients Tab */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Main Ingredients</h3>
                <ul className="space-y-2">
                  {currentIngredients.main.map((ingredient, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Garnish & Decoration</h3>
                <ul className="space-y-2">
                  {currentIngredients.garnish.map((ingredient, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Allergen Information */}
            <div className="mt-8 p-6 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-red-800 font-semibold mb-2">Allergen Information</h4>
                  <p className="text-red-700 text-sm mb-2">
                    <strong>Contains:</strong> {product.allergens.join(', ')}
                  </p>
                  <p className="text-red-600 text-xs">
                    Please inform us of any allergies when placing your order. Our kitchen handles multiple allergens.
                  </p>
                </div>
              </div>
            </div>

            {/* Nutrition Information */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Nutritional Information (Per Serving)</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {Object.entries(nutritionInfo).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{value.split(' ')[0]}</div>
                      <div className="text-sm text-gray-600 capitalize">{key}</div>
                      <div className="text-xs text-gray-500">{value.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Care Instructions */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Storage & Care Instructions</h3>
              <div className="bg-blue-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Storage:</strong> Refrigerate immediately upon delivery. Can be stored for up to 3 days.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Serving:</strong> Remove from refrigerator 30-45 minutes before serving for optimal taste and texture.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span><strong>Best Enjoyed:</strong> Within 24 hours of delivery for maximum freshness and flavor.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockProducts.filter(p => p.id !== product.id).slice(0, 3).map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/menu/${relatedProduct.id}`} className="group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🧁</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">{relatedProduct.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{relatedProduct.description}</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-lg font-bold text-amber-600">₹{relatedProduct.price}</span>
                      <span className="text-sm text-gray-500">{relatedProduct.serving_size}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}