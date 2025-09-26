'use client'

import { useState } from 'react'
import { RazorpayButton } from '@/components/payment/razorpay-button'
import { Button } from '@/components/ui/button'
import { ShoppingCart, CheckCircle, XCircle } from 'lucide-react'

export default function PaymentDemo() {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'failed'>('idle')
  const [paymentDetails, setPaymentDetails] = useState<any>(null)

  const handlePaymentSuccess = (response: any) => {
    console.log('Payment successful:', response)
    setPaymentStatus('success')
    setPaymentDetails(response)
  }

  const handlePaymentFailure = (error: any) => {
    console.error('Payment failed:', error)
    setPaymentStatus('failed')
    setPaymentDetails(error)
  }

  const resetDemo = () => {
    setPaymentStatus('idle')
    setPaymentDetails(null)
  }

  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-to-br from-warm-cream to-warm-butter min-h-screen">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-neutral-900 mb-8">
              Razorpay Payment Demo
            </h1>
            <p className="text-lg text-neutral-600 mb-12">
              Test the Razorpay integration with UPI, Cards, Net Banking, and Wallets
            </p>

            {paymentStatus === 'idle' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Sample Products */}
                <div className="bg-warm-cream p-6 rounded-2xl shadow-lg border border-warm-coffee/20">
                  <div className="text-6xl mb-4">🍰</div>
                  <h3 className="text-xl font-semibold mb-2">Chocolate Cake</h3>
                  <p className="text-neutral-600 mb-4">Rich chocolate cake with ganache</p>
                  <p className="text-2xl font-bold text-primary mb-4">₹899</p>
                  <RazorpayButton
                    amount={899}
                    productName="Chocolate Cake"
                    productDescription="Rich chocolate cake with ganache"
                    customerName="Demo User"
                    customerEmail="demo@example.com"
                    customerPhone="9876543210"
                    onSuccess={handlePaymentSuccess}
                    onFailure={handlePaymentFailure}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy Now - ₹899
                  </RazorpayButton>
                </div>

                <div className="bg-warm-cream p-6 rounded-2xl shadow-lg border border-warm-coffee/20">
                  <div className="text-6xl mb-4">🧁</div>
                  <h3 className="text-xl font-semibold mb-2">Cupcake Box</h3>
                  <p className="text-neutral-600 mb-4">Box of 6 assorted cupcakes</p>
                  <p className="text-2xl font-bold text-primary mb-4">₹549</p>
                  <RazorpayButton
                    amount={549}
                    productName="Cupcake Box"
                    productDescription="Box of 6 assorted cupcakes"
                    customerName="Demo User"
                    customerEmail="demo@example.com"
                    customerPhone="9876543210"
                    onSuccess={handlePaymentSuccess}
                    onFailure={handlePaymentFailure}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy Now - ₹549
                  </RazorpayButton>
                </div>

                <div className="bg-warm-cream p-6 rounded-2xl shadow-lg border border-warm-coffee/20">
                  <div className="text-6xl mb-4">🍪</div>
                  <h3 className="text-xl font-semibold mb-2">Cookie Jar</h3>
                  <p className="text-neutral-600 mb-4">Fresh baked cookies assortment</p>
                  <p className="text-2xl font-bold text-primary mb-4">₹299</p>
                  <RazorpayButton
                    amount={299}
                    productName="Cookie Jar"
                    productDescription="Fresh baked cookies assortment"
                    customerName="Demo User"
                    customerEmail="demo@example.com"
                    customerPhone="9876543210"
                    onSuccess={handlePaymentSuccess}
                    onFailure={handlePaymentFailure}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy Now - ₹299
                  </RazorpayButton>
                </div>
              </div>
            )}

            {paymentStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-800 mb-4">Payment Successful!</h2>
                <p className="text-green-700 mb-6">
                  Your order has been confirmed. You will receive a confirmation email shortly.
                </p>
                {paymentDetails && (
                  <div className="bg-green-100 rounded-lg p-4 mb-6 text-left max-w-md mx-auto">
                    <h3 className="font-semibold text-green-800 mb-2">Payment Details:</h3>
                    <p><strong>Payment ID:</strong> {paymentDetails.razorpay_payment_id}</p>
                    <p><strong>Order ID:</strong> {paymentDetails.razorpay_order_id}</p>
                  </div>
                )}
                <Button onClick={resetDemo} className="bg-green-600 hover:bg-green-700 text-white">
                  Try Another Payment
                </Button>
              </div>
            )}

            {paymentStatus === 'failed' && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <XCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-red-800 mb-4">Payment Failed</h2>
                <p className="text-red-700 mb-6">
                  {paymentDetails?.message || 'Something went wrong with your payment. Please try again.'}
                </p>
                <Button onClick={resetDemo} className="bg-red-600 hover:bg-red-700 text-white">
                  Try Again
                </Button>
              </div>
            )}

            <div className="mt-16 text-left max-w-2xl mx-auto bg-warm-cream p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-bold mb-4">💳 Supported Payment Methods:</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl mb-1">📱</div>
                  <div>UPI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">💳</div>
                  <div>Cards</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🏛️</div>
                  <div>Net Banking</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">👛</div>
                  <div>Wallets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}