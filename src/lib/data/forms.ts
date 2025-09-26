import { supabase } from '@/lib/supabase'

// Newsletter subscription
export async function subscribeToNewsletter(email: string) {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email }])
    .select()
    .single()

  if (error) {
    // Handle duplicate email gracefully
    if (error.code === '23505') {
      throw new Error('This email is already subscribed to our newsletter.')
    }
    console.error('Error subscribing to newsletter:', error)
    throw new Error('Failed to subscribe to newsletter')
  }

  return data
}

// Unsubscribe from newsletter
export async function unsubscribeFromNewsletter(email: string) {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .update({
      status: 'unsubscribed',
      unsubscribed_at: new Date().toISOString()
    })
    .eq('email', email)
    .select()
    .single()

  if (error) {
    console.error('Error unsubscribing from newsletter:', error)
    throw new Error('Failed to unsubscribe from newsletter')
  }

  return data
}

// Submit contact form
export async function submitContactForm(data: {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}) {
  const { data: submission, error } = await supabase
    .from('contact_submissions')
    .insert([data])
    .select()
    .single()

  if (error) {
    console.error('Error submitting contact form:', error)
    throw new Error('Failed to submit contact form')
  }

  return submission
}

// Submit custom order inquiry
export async function submitCustomOrderInquiry(data: {
  name: string
  email: string
  phone: string
  event_type: string
  event_date: string
  guest_count: number
  cake_description: string
  budget_range?: string
  additional_notes?: string
}) {
  const { data: inquiry, error } = await supabase
    .from('custom_order_inquiries')
    .insert([data])
    .select()
    .single()

  if (error) {
    console.error('Error submitting custom order inquiry:', error)
    throw new Error('Failed to submit custom order inquiry')
  }

  return inquiry
}

// Get custom order inquiry status (for customers to check)
export async function getCustomOrderInquiry(id: string) {
  const { data, error } = await supabase
    .from('custom_order_inquiries')
    .select('id, status, created_at')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching custom order inquiry:', error)
    throw new Error('Failed to fetch inquiry status')
  }

  return data
}