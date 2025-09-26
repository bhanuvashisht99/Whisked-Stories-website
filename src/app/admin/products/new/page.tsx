'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Save, X } from 'lucide-react'
import Link from 'next/link'

interface ProductForm {
  name: string
  description: string
  price: number
  category: string
  season: string
  serving_size: string
  allergens: string[]
  is_available: boolean
  is_archived: boolean
}

const categories = ['Chocolate', 'Fruit', 'Classic', 'Floral', 'Seasonal', 'Custom']
const seasons = ['all-year', 'spring', 'summer', 'autumn', 'winter']
const commonAllergens = ['Gluten', 'Dairy', 'Eggs', 'Nuts', 'Soy']

export default function NewProductPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<ProductForm>({
    name: '',
    description: '',
    price: 0,
    category: 'Chocolate',
    season: 'all-year',
    serving_size: '',
    allergens: [],
    is_available: true,
    is_archived: false
  })

  const handleAllergenToggle = (allergen: string) => {
    setFormData(prev => ({
      ...prev,
      allergens: prev.allergens.includes(allergen)
        ? prev.allergens.filter(a => a !== allergen)
        : [...prev.allergens, allergen]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        alert('Product created successfully!')
        router.push('/admin/products')
      } else {
        alert(result.error || 'Error creating product. Please try again.')
      }
    } catch (error) {
      console.error('Error creating product:', error)
      alert('Error creating product. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Link href="/admin/products" className="mr-4">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Button>
            </Link>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">Add New Product</h1>
          <p className="mt-2 text-sm text-gray-700">
            Create a new product for your bakery catalog.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white shadow rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div className="md:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Product Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="e.g., Chocolate Fudge Delight"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description *
                </label>
                <textarea
                  id="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Describe your product in detail..."
                />
              </div>

              {/* Price */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price (₹) *
                </label>
                <input
                  type="number"
                  id="price"
                  required
                  min="0"
                  step="50"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: Number(e.target.value) }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="1200"
                />
              </div>

              {/* Serving Size */}
              <div>
                <label htmlFor="serving_size" className="block text-sm font-medium text-gray-700">
                  Serving Size *
                </label>
                <input
                  type="text"
                  id="serving_size"
                  required
                  value={formData.serving_size}
                  onChange={(e) => setFormData(prev => ({ ...prev, serving_size: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Serves 6-8 people"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category *
                </label>
                <select
                  id="category"
                  required
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Season */}
              <div>
                <label htmlFor="season" className="block text-sm font-medium text-gray-700">
                  Season *
                </label>
                <select
                  id="season"
                  required
                  value={formData.season}
                  onChange={(e) => setFormData(prev => ({ ...prev, season: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                >
                  {seasons.map(season => (
                    <option key={season} value={season}>
                      {season === 'all-year' ? 'All Year' : season.charAt(0).toUpperCase() + season.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Allergens */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Allergens
                </label>
                <div className="flex flex-wrap gap-2">
                  {commonAllergens.map(allergen => (
                    <label key={allergen} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.allergens.includes(allergen)}
                        onChange={() => handleAllergenToggle(allergen)}
                        className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-2"
                      />
                      <span className="text-sm text-gray-700">{allergen}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Status toggles */}
              <div className="md:col-span-2 flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.is_available}
                    onChange={(e) => setFormData(prev => ({ ...prev, is_available: e.target.checked }))}
                    className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-2"
                  />
                  <span className="text-sm text-gray-700">Available for order</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.is_archived}
                    onChange={(e) => setFormData(prev => ({ ...prev, is_archived: e.target.checked }))}
                    className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-2"
                  />
                  <span className="text-sm text-gray-700">Archive this product</span>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
              <Button variant="outline" type="button" asChild>
                <Link href="/admin/products">
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Link>
              </Button>
              <Button type="submit" disabled={loading}>
                <Save className="h-4 w-4 mr-2" />
                {loading ? 'Creating...' : 'Create Product'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}