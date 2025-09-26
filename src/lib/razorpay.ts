import Razorpay from 'razorpay'

// Razorpay configuration
export const razorpayConfig = {
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
}

// Initialize Razorpay instance (server-side only)
export const razorpay = razorpayConfig.key_id ? new Razorpay({
  key_id: razorpayConfig.key_id,
  key_secret: razorpayConfig.key_secret,
}) : null

// Razorpay payment options interface
export interface RazorpayOptions {
  amount: number // Amount in paise (1 INR = 100 paise)
  currency: string
  order_id: string
  name: string
  description: string
  image?: string
  prefill?: {
    name?: string
    email?: string
    contact?: string
  }
  theme?: {
    color?: string
  }
}

// Create Razorpay order
export async function createRazorpayOrder(amount: number, receipt: string, currency = 'INR') {
  if (!razorpay) {
    throw new Error('Razorpay not configured')
  }

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to paise
      currency,
      receipt,
      payment_capture: 1, // Auto capture payments
    })
    return order
  } catch (error) {
    console.error('Error creating Razorpay order:', error)
    throw error
  }
}

// Verify Razorpay payment signature
export function verifyRazorpaySignature(
  razorpay_order_id: string,
  razorpay_payment_id: string,
  razorpay_signature: string
): boolean {
  const crypto = require('crypto')
  const body = razorpay_order_id + '|' + razorpay_payment_id
  const expectedSignature = crypto
    .createHmac('sha256', razorpayConfig.key_secret)
    .update(body.toString())
    .digest('hex')

  return expectedSignature === razorpay_signature
}