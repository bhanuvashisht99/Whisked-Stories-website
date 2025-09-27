'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useCart } from '@/contexts/cart-context'
import { RazorpayButton } from '@/components/payment/razorpay-button'
import { ArrowLeft, ShoppingCart, User, MapPin, Phone, Mail, CreditCard, Truck, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

interface CustomerInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  pincode: string
  deliveryDate: string
  deliveryTime: string
  specialInstructions: string
}

export default function CheckoutPage() {
  const { state, clearCart } = useCart()
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('online')

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    deliveryDate: '',
    deliveryTime: '',
    specialInstructions: ''
  })

  // Redirect to menu if cart is empty
  if (state.items.length === 0) {
    return (
      <main className="pt-20 pb-12 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-lg text-gray-600 mb-8">Add some delicious cakes to your cart before checkout</p>
            <Button asChild>
              <Link href="/menu">Browse Menu</Link>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  const deliveryCharge = state.total >= 2000 ? 0 : 100
  const codCharge = paymentMethod === 'cod' ? 50 : 0
  const totalAmount = state.total + deliveryCharge + codCharge

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }))
  }

  const validateStep1 = () => {
    return customerInfo.firstName && customerInfo.lastName && customerInfo.email && customerInfo.phone
  }

  const validateStep2 = () => {
    return customerInfo.address && customerInfo.city && customerInfo.pincode && customerInfo.deliveryDate
  }

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
    }
  }

  const handlePlaceOrder = async () => {
    setLoading(true)

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerInfo,
          items: state.items,
          totalAmount,
          deliveryCharge,
          codCharge,
          paymentMethod: 'cod'
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create order')
      }

      const result = await response.json()

      // Store order info for success page
      localStorage.setItem('lastOrderId', result.orderId)
      localStorage.setItem('lastOrderNumber', result.orderNumber)

      // Clear cart and redirect to success page
      clearCart()
      router.push('/checkout/success')

    } catch (error) {
      console.error('Order creation failed:', error)
      alert('Failed to place order. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="pt-20 pb-12 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/menu" className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { step: 1, title: 'Customer Info', icon: User },
              { step: 2, title: 'Delivery Details', icon: Truck },
              { step: 3, title: 'Payment', icon: CreditCard }
            ].map(({ step: stepNum, title, icon: Icon }) => (
              <div key={stepNum} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                  step >= stepNum
                    ? 'bg-amber-600 border-amber-600 text-white'
                    : 'border-gray-300 text-gray-400'
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className={`ml-2 font-medium ${step >= stepNum ? 'text-amber-600' : 'text-gray-400'}`}>
                  {title}
                </span>
                {stepNum < 3 && (
                  <div className={`w-20 h-1 mx-4 ${step > stepNum ? 'bg-amber-600' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Step 1: Customer Information */}
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Customer Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerInfo.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerInfo.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline h-4 w-4 mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={customerInfo.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline h-4 w-4 mr-1" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={customerInfo.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <Button
                      onClick={handleNextStep}
                      disabled={!validateStep1()}
                      className="bg-amber-600 hover:bg-amber-700"
                    >
                      Continue to Delivery Details
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Delivery Details */}
              {step === 2 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Delivery Details</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="inline h-4 w-4 mr-1" />
                        Delivery Address *
                      </label>
                      <textarea
                        required
                        value={customerInfo.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        rows={3}
                        placeholder="Enter your complete address"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          required
                          value={customerInfo.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="Delhi"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          PIN Code *
                        </label>
                        <input
                          type="text"
                          required
                          value={customerInfo.pincode}
                          onChange={(e) => handleInputChange('pincode', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          placeholder="110001"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Calendar className="inline h-4 w-4 mr-1" />
                          Delivery Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={customerInfo.deliveryDate}
                          onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                          min={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Clock className="inline h-4 w-4 mr-1" />
                          Preferred Time
                        </label>
                        <select
                          value={customerInfo.deliveryTime}
                          onChange={(e) => handleInputChange('deliveryTime', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        >
                          <option value="">Select time slot</option>
                          <option value="10:00-12:00">10:00 AM - 12:00 PM</option>
                          <option value="12:00-14:00">12:00 PM - 2:00 PM</option>
                          <option value="14:00-16:00">2:00 PM - 4:00 PM</option>
                          <option value="16:00-18:00">4:00 PM - 6:00 PM</option>
                          <option value="18:00-20:00">6:00 PM - 8:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Special Instructions
                      </label>
                      <textarea
                        value={customerInfo.specialInstructions}
                        onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        rows={3}
                        placeholder="Any special delivery instructions or cake customizations..."
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleNextStep}
                      disabled={!validateStep2()}
                      className="bg-amber-600 hover:bg-amber-700"
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Details</h2>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-blue-800 font-medium">Secure Payment with Razorpay</span>
                    </div>
                    <p className="text-blue-700 text-sm mt-1">
                      Your payment information is secure and encrypted
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className={`border rounded-lg p-4 ${paymentMethod === 'online' ? 'border-amber-500 bg-amber-50' : 'border-gray-200'}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="online"
                            name="payment"
                            className="mr-3"
                            checked={paymentMethod === 'online'}
                            onChange={() => setPaymentMethod('online')}
                          />
                          <label htmlFor="online" className="font-medium">Pay Online (Recommended)</label>
                        </div>
                        <div className="flex space-x-2">
                          <img src="/api/placeholder/40/25" alt="Visa" className="h-6 rounded" />
                          <img src="/api/placeholder/40/25" alt="Mastercard" className="h-6 rounded" />
                          <img src="/api/placeholder/40/25" alt="UPI" className="h-6 rounded" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Pay securely using Credit Card, Debit Card, Net Banking, or UPI
                      </p>
                    </div>

                    <div className={`border rounded-lg p-4 ${paymentMethod === 'cod' ? 'border-amber-500 bg-amber-50' : 'border-gray-200'}`}>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="cod"
                          name="payment"
                          className="mr-3"
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                        />
                        <label htmlFor="cod" className="font-medium">Cash on Delivery</label>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Pay when your order is delivered (Additional ₹50 handling charges apply)
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setStep(2)}
                    >
                      Back
                    </Button>
                    {paymentMethod === 'online' ? (
                      <RazorpayButton
                        amount={totalAmount}
                        productName="Whisked Stories Order"
                        productDescription={`Order containing ${state.itemCount} items`}
                        customerName={`${customerInfo.firstName} ${customerInfo.lastName}`}
                        customerEmail={customerInfo.email}
                        customerPhone={customerInfo.phone}
                        onSuccess={async (response) => {
                          console.log('Payment successful:', response)

                          try {
                            const orderResponse = await fetch('/api/orders', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                customerInfo,
                                items: state.items,
                                totalAmount,
                                deliveryCharge,
                                codCharge,
                                paymentMethod: 'online',
                                paymentId: response.razorpay_payment_id
                              }),
                            })

                            if (!orderResponse.ok) {
                              throw new Error('Failed to create order')
                            }

                            const result = await orderResponse.json()

                            // Store order info for success page
                            localStorage.setItem('lastOrderId', result.orderId)
                            localStorage.setItem('lastOrderNumber', result.orderNumber)

                            // Clear cart and redirect to success page
                            clearCart()
                            router.push('/checkout/success')

                          } catch (error) {
                            console.error('Order creation failed:', error)
                            alert('Payment successful but failed to save order. Please contact support.')
                          }
                        }}
                        onFailure={(error) => {
                          console.error('Payment failed:', error)
                          alert('Payment failed. Please try again.')
                        }}
                        className="bg-amber-600 hover:bg-amber-700 px-8"
                      >
                        Pay Now - ₹{totalAmount.toLocaleString()}
                      </RazorpayButton>
                    ) : (
                      <Button
                        onClick={handlePlaceOrder}
                        disabled={loading}
                        className="bg-amber-600 hover:bg-amber-700 px-8"
                      >
                        {loading ? 'Processing...' : `Place Order (COD) - ₹${(totalAmount + 50).toLocaleString()}`}
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>

              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🧁</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹{state.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery</span>
                  <span className={deliveryCharge === 0 ? 'text-green-600' : ''}>
                    {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
                  </span>
                </div>
                {codCharge > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>COD Charges</span>
                    <span>₹{codCharge}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-medium border-t border-gray-200 pt-2">
                  <span>Total</span>
                  <span>₹{totalAmount.toLocaleString()}</span>
                </div>
              </div>

              {state.total < 2000 && (
                <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800">
                    Add ₹{(2000 - state.total).toLocaleString()} more for free delivery!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}