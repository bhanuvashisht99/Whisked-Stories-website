'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Users, IndianRupee, MessageCircle, CheckCircle, Clock, Star } from 'lucide-react'

const eventTypes = [
  'Birthday Party', 'Wedding', 'Anniversary', 'Baby Shower', 'Engagement',
  'Corporate Event', 'Festival Celebration', 'Graduation', 'Other'
]

const budgetRanges = [
  '₹1,000 - ₹2,500', '₹2,500 - ₹5,000', '₹5,000 - ₹10,000',
  '₹10,000 - ₹20,000', '₹20,000+'
]

const faqs = [
  {
    question: "How far in advance should I place my custom order?",
    answer: "We recommend placing custom orders at least 1 week in advance for simple designs, and 2-3 weeks for complex or large orders. This ensures we have enough time to source ingredients and plan the design carefully."
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Absolutely! We can create gluten-free, dairy-free, sugar-free, and vegan versions of most our cakes. Please mention your requirements in the order form so we can provide accurate pricing and timeline."
  },
  {
    question: "What information do you need for a custom design?",
    answer: "The more details, the better! Share photos of designs you like, color preferences, theme details, number of guests, and any special elements you'd like included. We'll work with you to bring your vision to life."
  },
  {
    question: "Do you provide delivery?",
    answer: "Yes, we offer delivery within Delhi and select areas of NCR including Gurgaon and Noida. Delivery charges depend on the distance and order size. We also provide setup services for elaborate cake displays."
  },
  {
    question: "What's your payment process?",
    answer: "We require a 50% advance payment to confirm your order, with the remaining balance due upon delivery. We accept online payments, bank transfers, and cash on delivery."
  }
]

export default function CustomOrdersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    cakeDescription: '',
    budgetRange: '',
    additionalNotes: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/custom-orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          event_type: formData.eventType,
          event_date: formData.eventDate,
          guest_count: parseInt(formData.guestCount),
          cake_description: formData.cakeDescription,
          budget_range: formData.budgetRange || null,
          additional_notes: formData.additionalNotes || null
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit inquiry')
      }

      setIsSubmitted(true)
    } catch (error: any) {
      console.error('Custom order submission error:', error)
      alert(error.message || 'Failed to submit your inquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (isSubmitted) {
    return (
      <main className="pt-16">
        <div className="min-h-screen bg-gradient-to-br from-warm-cream to-warm-wheat/60 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-warm-wheat/60 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-warm-coffee" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your custom order inquiry. We'll review your requirements and get back to you within 24 hours with a detailed quote and timeline.
            </p>
            <div className="space-y-3">
              <Button className="w-full" onClick={() => window.location.href = '/'}>
                Return to Home
              </Button>
              <Button variant="outline" className="w-full" onClick={() => window.location.href = '/menu'}>
                Browse Menu
              </Button>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warm-cream to-warm-butter py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Create Your Dream Cake
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Let's work together to design a cake that perfectly captures your special moment.
            From concept to creation, we'll bring your vision to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-warm-wheat/60 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="h-6 w-6 text-warm-coffee" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Share Your Vision</h3>
              <p className="text-sm text-gray-600">Tell us about your event and cake ideas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-warm-wheat/60 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-warm-coffee" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Design Together</h3>
              <p className="text-sm text-gray-600">We'll create a custom design and quote</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-warm-wheat/60 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-warm-coffee" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Enjoy Your Cake</h3>
              <p className="text-sm text-gray-600">We'll deliver your perfect creation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-warm-cream px-8 py-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Custom Order Inquiry</h2>
              <p className="text-gray-600 mt-1">Fill out the details below and we'll get back to you with a personalized quote.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-caramel focus:border-warm-caramel transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-caramel focus:border-warm-caramel transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-caramel focus:border-warm-caramel transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Event Type *
                  </label>
                  <select
                    required
                    value={formData.eventType}
                    onChange={(e) => handleInputChange('eventType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-caramel focus:border-warm-caramel transition-colors"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => handleInputChange('eventDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-caramel focus:border-warm-caramel transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Users className="inline h-4 w-4 mr-1" />
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.guestCount}
                    onChange={(e) => handleInputChange('guestCount', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-caramel focus:border-warm-caramel transition-colors"
                    placeholder="e.g., 20"
                  />
                </div>
              </div>

              {/* Cake Description */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cake Description & Requirements *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.cakeDescription}
                  onChange={(e) => handleInputChange('cakeDescription', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-caramel focus:border-warm-caramel transition-colors"
                  placeholder="Describe your dream cake... Include details like:
- Preferred flavors (chocolate, vanilla, fruit, etc.)
- Design style (elegant, fun, themed, etc.)
- Colors and decorations
- Any specific elements you'd like included
- Dietary restrictions or preferences"
                />
              </div>

              {/* Budget */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <IndianRupee className="inline h-4 w-4 mr-1" />
                  Budget Range
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-caramel focus:border-warm-caramel transition-colors"
                >
                  <option value="">Select your budget range (optional)</option>
                  {budgetRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                <p className="text-sm text-gray-500 mt-1">
                  This helps us provide more accurate recommendations
                </p>
              </div>

              {/* Additional Notes */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-caramel focus:border-warm-caramel transition-colors"
                  placeholder="Any other details, special requests, or questions you'd like to share..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="px-12 py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="h-5 w-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Custom Order Inquiry'
                  )}
                </Button>
                <p className="text-sm text-gray-500 mt-3">
                  We'll get back to you within 24 hours with a detailed quote
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about custom orders
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Have more questions? We're here to help!
            </p>
            <Button variant="outline" asChild>
              <a href="mailto:hello@whiskedstories.com">
                Contact Us Directly
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}