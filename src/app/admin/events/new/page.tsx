'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Save, X } from 'lucide-react'
import Link from 'next/link'

interface EventForm {
  title: string
  description: string
  event_date: string
  event_time: string
  location: string
  max_attendees: number | string
  current_attendees: number
  price: number | string
  is_featured: boolean
  is_active: boolean
}

export default function NewEventPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<EventForm>({
    title: '',
    description: '',
    event_date: '',
    event_time: '',
    location: '',
    max_attendees: '',
    current_attendees: 0,
    price: '',
    is_featured: false,
    is_active: true
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const eventData = {
        ...formData,
        max_attendees: formData.max_attendees ? Number(formData.max_attendees) : null,
        price: formData.price ? Number(formData.price) : 0,
        event_time: formData.event_time || null,
        location: formData.location || null
      }

      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      })

      const result = await response.json()

      if (response.ok) {
        alert('Event created successfully!')
        router.push('/admin/events')
      } else {
        alert(result.error || 'Error creating event. Please try again.')
      }
    } catch (error) {
      console.error('Error creating event:', error)
      alert('Error creating event. Please try again.')
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
            <Link href="/admin/events" className="mr-4">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Button>
            </Link>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">Create New Event</h1>
          <p className="mt-2 text-sm text-gray-700">
            Create a new event, workshop, or special occasion for your bakery.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white shadow rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Event Title */}
              <div className="md:col-span-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Event Title *
                </label>
                <input
                  type="text"
                  id="title"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="e.g., Spring Baking Workshop"
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
                  placeholder="Describe your event in detail..."
                />
              </div>

              {/* Event Date */}
              <div>
                <label htmlFor="event_date" className="block text-sm font-medium text-gray-700">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="event_date"
                  required
                  value={formData.event_date}
                  onChange={(e) => setFormData(prev => ({ ...prev, event_date: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              {/* Event Time */}
              <div>
                <label htmlFor="event_time" className="block text-sm font-medium text-gray-700">
                  Event Time
                </label>
                <input
                  type="text"
                  id="event_time"
                  value={formData.event_time}
                  onChange={(e) => setFormData(prev => ({ ...prev, event_time: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="e.g., 2:00 PM - 5:00 PM"
                />
              </div>

              {/* Location */}
              <div className="md:col-span-2">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="e.g., Whisked Stories Studio or Virtual Event"
                />
              </div>

              {/* Max Attendees */}
              <div>
                <label htmlFor="max_attendees" className="block text-sm font-medium text-gray-700">
                  Max Attendees
                </label>
                <input
                  type="number"
                  id="max_attendees"
                  min="1"
                  value={formData.max_attendees}
                  onChange={(e) => setFormData(prev => ({ ...prev, max_attendees: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Leave empty for unlimited"
                />
              </div>

              {/* Price */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price (₹)
                </label>
                <input
                  type="number"
                  id="price"
                  min="0"
                  step="50"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="0 for free events"
                />
              </div>

              {/* Current Attendees */}
              <div>
                <label htmlFor="current_attendees" className="block text-sm font-medium text-gray-700">
                  Current Attendees
                </label>
                <input
                  type="number"
                  id="current_attendees"
                  min="0"
                  value={formData.current_attendees}
                  onChange={(e) => setFormData(prev => ({ ...prev, current_attendees: Number(e.target.value) }))}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              {/* Status toggles */}
              <div className="md:col-span-2 flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.is_featured}
                    onChange={(e) => setFormData(prev => ({ ...prev, is_featured: e.target.checked }))}
                    className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-2"
                  />
                  <span className="text-sm text-gray-700">Featured Event</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.is_active}
                    onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))}
                    className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 mr-2"
                  />
                  <span className="text-sm text-gray-700">Active Event</span>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
              <Button variant="outline" type="button" asChild>
                <Link href="/admin/events">
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Link>
              </Button>
              <Button type="submit" disabled={loading}>
                <Save className="h-4 w-4 mr-2" />
                {loading ? 'Creating...' : 'Create Event'}
              </Button>
            </div>
          </form>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-amber-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-amber-800 mb-3">Event Tips</h3>
          <ul className="text-sm text-amber-700 space-y-2">
            <li>• Featured events appear prominently on your events page</li>
            <li>• Set realistic max attendees to avoid overbooking</li>
            <li>• Include clear date, time, and location information</li>
            <li>• Free events (₹0) can help build community engagement</li>
            <li>• Virtual events should include platform details in location</li>
          </ul>
        </div>
      </div>
    </div>
  )
}