import { NextRequest, NextResponse } from 'next/server'
import { submitCustomOrderInquiry } from '@/lib/data/forms'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const {
      name,
      email,
      phone,
      event_type,
      event_date,
      guest_count,
      cake_description,
      budget_range,
      additional_notes
    } = data

    // Validate required fields
    if (!name || !email || !phone || !event_type || !event_date || !guest_count || !cake_description) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      )
    }

    // Validate event date is in the future
    const eventDate = new Date(event_date)
    const today = new Date()
    if (eventDate <= today) {
      return NextResponse.json(
        { error: 'Event date must be in the future' },
        { status: 400 }
      )
    }

    // Validate guest count is positive
    if (guest_count <= 0) {
      return NextResponse.json(
        { error: 'Guest count must be a positive number' },
        { status: 400 }
      )
    }

    const inquiry = await submitCustomOrderInquiry({
      name,
      email,
      phone,
      event_type,
      event_date,
      guest_count: parseInt(guest_count),
      cake_description,
      budget_range,
      additional_notes
    })

    return NextResponse.json({
      message: 'Custom order inquiry submitted successfully!',
      inquiry: {
        id: inquiry.id,
        status: inquiry.status,
        created_at: inquiry.created_at
      }
    })

  } catch (error) {
    console.error('Custom order API error:', error)
    return NextResponse.json(
      { error: 'Failed to submit custom order inquiry' },
      { status: 500 }
    )
  }
}