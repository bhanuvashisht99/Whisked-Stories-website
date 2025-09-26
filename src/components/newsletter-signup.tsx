'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Check, AlertCircle } from 'lucide-react'

interface NewsletterSignupProps {
  variant?: 'default' | 'hero' | 'footer'
  className?: string
}

export function NewsletterSignup({ variant = 'default', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      setStatus('success')
      setMessage('Welcome to our story! Check your email for a sweet surprise.')
      setEmail('')

      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    } catch (error: any) {
      console.error('Newsletter signup error:', error)
      setStatus('error')
      setMessage(error.message || 'Something went wrong. Please try again.')

      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    }
  }

  const variants = {
    default: {
      container: 'bg-white p-6 rounded-xl shadow-lg border border-neutral-200',
      title: 'text-xl font-semibold text-gray-900 mb-2',
      description: 'text-gray-600 mb-4',
      form: 'flex flex-col sm:flex-row gap-3',
      input: 'flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary',
      button: 'bg-gradient-to-r from-primary to-warm-coffee hover:from-warm-coffee hover:to-warm-cocoa text-white px-6 py-3'
    },
    hero: {
      container: 'bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-neutral-200/40 shadow-lg',
      title: 'text-2xl font-bold text-neutral-800 mb-3',
      description: 'text-neutral-600 mb-6',
      form: 'flex flex-col sm:flex-row gap-4',
      input: 'flex-1 px-4 py-3 bg-white border border-neutral-300 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary',
      button: 'bg-gradient-to-r from-primary to-warm-coffee hover:from-warm-coffee hover:to-warm-cocoa text-white font-medium px-8 py-3'
    },
    footer: {
      container: 'bg-gray-800/50 p-6 rounded-lg border border-gray-700',
      title: 'text-lg font-semibold text-white mb-2',
      description: 'text-gray-300 mb-4 text-sm',
      form: 'flex flex-col sm:flex-row gap-3',
      input: 'flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary',
      button: 'bg-gradient-to-r from-primary to-warm-coffee hover:from-warm-coffee hover:to-warm-cocoa text-white px-6 py-2'
    }
  }

  const currentVariant = variants[variant]

  return (
    <div className={`${currentVariant.container} ${className}`}>
      <div className={currentVariant.title}>
        {variant === 'hero' ? 'Join Our Sweet Journey' : 'Stay in the Loop'}
      </div>
      <p className={currentVariant.description}>
        {variant === 'hero'
          ? 'Get first dibs on seasonal flavors, baking tips, and exclusive stories from our kitchen.'
          : variant === 'footer'
          ? 'Weekly stories, seasonal menus & baking tips'
          : 'Be the first to know about new flavors, seasonal specials, and heartwarming stories from our kitchen.'
        }
      </p>

      <form onSubmit={handleSubmit} className={currentVariant.form}>
        <div className="flex-1 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            disabled={status === 'loading'}
            className={`${currentVariant.input} ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
        </div>

        <Button
          type="submit"
          disabled={status === 'loading' || !email}
          className={`${currentVariant.button} disabled:opacity-50 disabled:cursor-not-allowed relative`}
        >
          {status === 'loading' ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
              Subscribing...
            </>
          ) : (
            <>
              <Mail className="h-4 w-4 mr-2" />
              Subscribe
            </>
          )}
        </Button>
      </form>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="mt-4 flex items-center space-x-2 text-green-600">
          <Check className="h-4 w-4" />
          <span className="text-sm">{message}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-4 flex items-center space-x-2 text-red-600">
          <AlertCircle className="h-4 w-4" />
          <span className="text-sm">{message}</span>
        </div>
      )}

      {variant === 'default' && (
        <p className="text-xs text-gray-500 mt-3">
          We respect your privacy. Unsubscribe anytime with just one click.
        </p>
      )}
    </div>
  )
}