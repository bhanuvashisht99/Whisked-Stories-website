'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { RazorpayOptions } from '@/lib/razorpay'
import { Loader2 } from 'lucide-react'

declare global {
  interface Window {
    Razorpay: any
  }
}

interface RazorpayButtonProps {
  amount: number // Amount in INR
  productName: string
  productDescription: string
  customerName?: string
  customerEmail?: string
  customerPhone?: string
  onSuccess?: (response: any) => void
  onFailure?: (error: any) => void
  className?: string
  children?: React.ReactNode
}

export function RazorpayButton({
  amount,
  productName,
  productDescription,
  customerName,
  customerEmail,
  customerPhone,
  onSuccess,
  onFailure,
  className = '',
  children
}: RazorpayButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true)
        return
      }

      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handlePayment = async () => {
    setIsLoading(true)

    try {
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript()
      if (!scriptLoaded) {
        throw new Error('Razorpay script failed to load')
      }

      // Create order on server
      const orderResponse = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          currency: 'INR',
          receipt: `receipt_${Date.now()}`,
        }),
      })

      if (!orderResponse.ok) {
        throw new Error('Failed to create order')
      }

      const order = await orderResponse.json()

      // Razorpay options
      const options: RazorpayOptions = {
        amount: amount * 100, // Convert to paise
        currency: 'INR',
        order_id: order.id,
        name: 'Whisked Stories',
        description: productDescription,
        image: '/images/Ws.png', // Your logo
        prefill: {
          name: customerName,
          email: customerEmail,
          contact: customerPhone,
        },
        theme: {
          color: '#c19653', // Your primary color
        },
      }

      const razorpay = new window.Razorpay({
        ...options,
        handler: async (response: any) => {
          try {
            // Verify payment on server
            const verifyResponse = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            })

            if (verifyResponse.ok) {
              onSuccess?.(response)
            } else {
              throw new Error('Payment verification failed')
            }
          } catch (error) {
            onFailure?.(error)
          } finally {
            setIsLoading(false)
          }
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false)
            onFailure?.({ message: 'Payment cancelled by user' })
          },
        },
      })

      razorpay.open()
    } catch (error) {
      console.error('Payment error:', error)
      onFailure?.(error)
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handlePayment}
      disabled={isLoading}
      className={`${className} ${isLoading ? 'cursor-not-allowed' : ''}`}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        children || `Pay ₹${amount}`
      )}
    </Button>
  )
}