import { NextRequest, NextResponse } from 'next/server'
import { submitContactForm } from '@/lib/data/forms'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { name, email, phone, subject, message } = data

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      )
    }

    const submission = await submitContactForm({
      name,
      email,
      phone,
      subject,
      message
    })

    return NextResponse.json({
      message: 'Contact form submitted successfully!',
      submission
    })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}