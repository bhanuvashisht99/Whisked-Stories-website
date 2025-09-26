import { NextRequest, NextResponse } from 'next/server'
import { subscribeToNewsletter } from '@/lib/data/forms'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      )
    }

    const subscription = await subscribeToNewsletter(email)

    return NextResponse.json({
      message: 'Successfully subscribed to newsletter!',
      subscription
    })

  } catch (error: any) {
    console.error('Newsletter API error:', error)

    // Handle specific error messages
    if (error.message.includes('already subscribed')) {
      return NextResponse.json(
        { error: error.message },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}