import { supabase } from '@/lib/supabase'
import type { Event } from '@/lib/supabase'

// Get all active events
export async function getEvents(featured?: boolean) {
  let query = supabase
    .from('events')
    .select('*')
    .eq('is_active', true)
    .gte('event_date', new Date().toISOString().split('T')[0]) // Only future events
    .order('event_date', { ascending: true })

  if (featured !== undefined) {
    query = query.eq('is_featured', featured)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching events:', error)
    throw new Error('Failed to fetch events')
  }

  return data || []
}

// Get all events for admin (including past events)
export async function getAllEvents(featured?: boolean) {
  let query = supabase
    .from('events')
    .select('*')
    .order('event_date', { ascending: false }) // Most recent first for admin

  if (featured !== undefined) {
    query = query.eq('is_featured', featured)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching all events:', error)
    throw new Error('Failed to fetch events')
  }

  return data || []
}

// Get a single event by ID
export async function getEvent(id: string) {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .eq('is_active', true)
    .single()

  if (error) {
    console.error('Error fetching event:', error)
    throw new Error('Failed to fetch event')
  }

  return data
}

// Get featured events for homepage
export async function getFeaturedEvents() {
  return getEvents(true)
}

// Check if event has available spots
export function hasAvailableSpots(event: Event): boolean {
  if (!event.max_attendees) return true
  return (event.current_attendees || 0) < event.max_attendees
}

// Get events with availability status
export async function getEventsWithAvailability() {
  const events = await getEvents()
  return events.map(event => ({
    ...event,
    hasAvailableSpots: hasAvailableSpots(event),
    spotsRemaining: event.max_attendees ? event.max_attendees - (event.current_attendees || 0) : null
  }))
}