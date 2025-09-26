import { NextRequest, NextResponse } from 'next/server'
import { getProducts, getProductCategories, getAvailableSeasons } from '@/lib/data/products'
import { supabaseAdmin } from '@/lib/supabase'

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, price, category, season, serving_size, allergens, is_available, is_archived } = body

    // Validate required fields
    if (!name || !description || !price || !category || !serving_size) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create new product
    const { data, error } = await supabaseAdmin
      .from('products')
      .insert({
        name,
        description,
        price,
        category,
        season: season || 'all-year',
        serving_size,
        allergens: allergens || [],
        is_available: is_available !== undefined ? is_available : true,
        is_archived: is_archived !== undefined ? is_archived : false
      })
      .select()
      .single()

    if (error) {
      throw new Error('Failed to create product')
    }

    return NextResponse.json({ product: data })

  } catch (error) {
    console.error('Product creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
}