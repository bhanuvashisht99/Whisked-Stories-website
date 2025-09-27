'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, Check, AlertCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'

interface ContactFormProps {
  variant?: 'full' | 'compact'
  className?: string
}

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  inquiry_type: 'general' | 'custom_order' | 'events' | 'press'
}

export function ContactForm({ variant = 'full', className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiry_type: 'general'
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'custom_order', label: 'Custom Order' },
    { value: 'events', label: 'Events & Gatherings' },
    { value: 'press', label: 'Press & Media' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          subject: formData.subject,
          message: formData.message
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setMessage('Thank you! We\'ll get back to you within 24 hours.')

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiry_type: 'general'
      })

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)

    } catch (error: any) {
      console.error('Contact form error:', error)
      setStatus('error')
      setMessage(error.message || 'Something went wrong. Please try again or call us directly.')

      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-white p-6 rounded-xl shadow-lg border border-amber-100 ${className}`}>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Contact</h3>
          <p className="text-gray-600">Have a question? We'd love to hear from you.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              disabled={status === 'loading'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              disabled={status === 'loading'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            required
            rows={4}
            disabled={status === 'loading'}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50 resize-none"
          />

          <Button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white disabled:opacity-50"
          >
            {status === 'loading' ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="flex items-center space-x-2 text-green-600 text-sm">
              <Check className="h-4 w-4" />
              <span>{message}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center space-x-2 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{message}</span>
            </div>
          )}
        </form>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 lg:p-12 text-white">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Let's Create Something Sweet Together</h2>
              <p className="text-amber-100 text-lg">
                Have a custom order in mind? Planning an event? Or just want to say hello?
                We'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-amber-100">+91 12345 67890</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-amber-100">hello@whiskedstories.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-amber-100">Delhi, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Response Time</h4>
                  <p className="text-amber-100">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-sm text-amber-100 italic">
                "We believe every conversation is the beginning of a sweet story.
                Whether it's a birthday cake or a wedding celebration, let's make it memorable together."
              </p>
              <p className="text-amber-200 font-medium mt-3">— Ayushi, Founder</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50"
                  placeholder="+91 12345 67890"
                />
              </div>

              <div>
                <label htmlFor="inquiry_type" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiry_type"
                  name="inquiry_type"
                  value={formData.inquiry_type}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50"
                >
                  {inquiryTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50"
                placeholder="What can we help you with?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                disabled={status === 'loading'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50 resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <Button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white disabled:opacity-50 py-3 text-lg"
            >
              {status === 'loading' ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-3" />
                  Send Message
                </>
              )}
            </Button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-center space-x-3 text-green-600 bg-green-50 p-4 rounded-lg">
                <Check className="h-5 w-5" />
                <span>{message}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center space-x-3 text-red-600 bg-red-50 p-4 rounded-lg">
                <AlertCircle className="h-5 w-5" />
                <span>{message}</span>
              </div>
            )}

            <p className="text-xs text-gray-500 text-center">
              We respect your privacy and will never share your information with third parties.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}