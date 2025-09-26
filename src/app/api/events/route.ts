import { NextRequest, NextResponse } from 'next/server'
import { getEvents, getAllEvents } from '@/lib/data/events'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured')
    const admin = searchParams.get('admin')

    let featuredFilter: boolean | undefined
    if (featured === 'true') featuredFilter = true
    if (featured === 'false') featuredFilter = false

    const events = admin === 'true'
      ? await getAllEvents(featuredFilter)
      : await getEvents(featuredFilter)

    return NextResponse.json({ events })

  } catch (error) {
    console.error('Events API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      description,
      event_date,
      event_time,
      location,
      max_attendees,
      current_attendees,
      price,
      is_featured,
      is_active
    } = body

    // Validate required fields
    if (!title || !description || !event_date) {
      return NextResponse.json(
        { error: 'Missing required fields: title, description, and event_date are required' },
        { status: 400 }
      )
    }

    // Create new event
    const { data, error } = await supabaseAdmin
      .from('events')
      .insert({
        title,
        description,
        event_date,
        event_time: event_time || null,
        location: location || null,
        max_attendees: max_attendees || null,
        current_attendees: current_attendees || 0,
        price: price || 0,
        is_featured: is_featured !== undefined ? is_featured : false,
        is_active: is_active !== undefined ? is_active : true
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      throw new Error('Failed to create event')
    }

    return NextResponse.json({ event: data })

  } catch (error) {
    console.error('Event creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    )
  }
}