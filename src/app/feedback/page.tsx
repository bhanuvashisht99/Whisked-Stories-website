'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle, CheckCircle, Heart, Star } from 'lucide-react'

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    experience: '',
    suggestions: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
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
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your feedback means the world to us. We read every response and use your insights to keep improving our baking and service.
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
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-amber-700 bg-amber-100 px-4 py-2 rounded-full mb-6">
            <Heart className="h-4 w-4" />
            <span>We Value Your Voice</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Share Your Feedback
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Your thoughts help us grow and improve. Whether it's about a cake you loved,
            a workshop you attended, or ideas for new flavors, we want to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Share Your Experience</h3>
              <p className="text-sm text-gray-600">Tell us what you loved about your visit</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Suggest Improvements</h3>
              <p className="text-sm text-gray-600">Help us serve you better</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Be Part of Our Story</h3>
              <p className="text-sm text-gray-600">Your feedback shapes our journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple 2-Question Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-amber-50 px-8 py-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Quick Feedback</h2>
              <p className="text-gray-600 mt-1">Just two simple questions to help us improve</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              {/* Question 1: Experience */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-700 mb-4">
                  1. How was your experience with Whisked Stories?
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Tell us about your experience... What did you love? What stood out? How did we make you feel?"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Share your thoughts about our cakes, service, workshops, or overall experience
                </p>
              </div>

              {/* Question 2: Suggestions */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-700 mb-4">
                  2. What would make your experience even better?
                </label>
                <textarea
                  rows={4}
                  value={formData.suggestions}
                  onChange={(e) => handleInputChange('suggestions', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Any suggestions for improvement? New flavors you'd like to see? Ideas for workshops? Anything at all!"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Help us improve by sharing your ideas, suggestions, or any areas where we can do better
                </p>
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
                      <MessageCircle className="h-5 w-5 mr-2 animate-pulse" />
                      Sending Feedback...
                    </>
                  ) : (
                    <>
                      <Heart className="h-5 w-5 mr-2" />
                      Submit Feedback
                    </>
                  )}
                </Button>
                <p className="text-sm text-gray-500 mt-3">
                  Your feedback helps us create even more delightful experiences
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Feedback Matters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Your Feedback Matters
            </h2>
            <p className="text-lg text-gray-600">
              Every piece of feedback contributes to making Whisked Stories better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Growth</h3>
              <p className="text-gray-600 text-sm">
                Your insights help us evolve our recipes, techniques, and service to better serve you
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">New Ideas</h3>
              <p className="text-gray-600 text-sm">
                Many of our seasonal flavors and workshop topics come directly from customer suggestions
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Building</h3>
              <p className="text-gray-600 text-sm">
                Your feedback helps us create experiences that bring our community closer together
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Alternatives */}
      <section className="py-12 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Other Ways to Connect
          </h2>
          <p className="text-amber-100 mb-6">
            Prefer a different way to share your thoughts? We're always listening.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="mailto:hello@whiskedstories.com">Email Us</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://instagram.com/whiskedstories" target="_blank" rel="noopener noreferrer" className="text-white border-white hover:bg-white hover:text-amber-600">
                DM on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}