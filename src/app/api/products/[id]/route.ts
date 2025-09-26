import { NextRequest, NextResponse } from 'next/server'
import { getProduct } from '@/lib/data/products'
import { getProductTestimonials } from '@/lib/data/testimonials'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    // Get product details
    const product = await getProduct(id)

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    // Get product testimonials
    const testimonials = await getProductTestimonials(id)

    return NextResponse.json({
      product,
      testimonials
    })

  } catch (error) {
    console.error('Product API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}