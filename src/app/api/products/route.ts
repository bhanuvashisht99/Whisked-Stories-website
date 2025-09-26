import { NextRequest, NextResponse } from 'next/server'
import { getProducts, getProductCategories, getAvailableSeasons } from '@/lib/data/products'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const season = searchParams.get('season')
    const action = searchParams.get('action')

    // Handle special actions
    if (action === 'categories') {
      const categories = await getProductCategories()
      return NextResponse.json({ categories })
    }

    if (action === 'seasons') {
      const seasons = await getAvailableSeasons()
      return NextResponse.json({ seasons })
    }

    // Get products with filters
    const filters: any = {
      available: true,
      archived: false
    }

    if (category && category !== 'all') {
      filters.category = category
    }

    if (season && season !== 'all') {
      filters.season = season
    }

    const products = await getProducts(filters)
    return NextResponse.json({ products })

  } catch (error) {
    console.error('Products API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}