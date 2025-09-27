'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle, Package, Truck, Clock, Phone, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function OrderSuccessPage() {
  const [orderNumber, setOrderNumber] = useState('')

  useEffect(() => {
    // Get order number from localStorage (set during checkout)
    const savedOrderNumber = localStorage.getItem('lastOrderNumber')
    if (savedOrderNumber) {
      setOrderNumber(savedOrderNumber)
      // Clean up
      localStorage.removeItem('lastOrderNumber')
      localStorage.removeItem('lastOrderId')
    } else {
      // Fallback if no order number found
      setOrderNumber('WS' + Math.random().toString(36).substr(2, 9).toUpperCase())
    }
  }, [])

  return (
    <main className="pt-20 pb-12 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Icon and Message */}
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-lg text-gray-600 mb-2">
            Thank you for your order. We're excited to create something special for you!
          </p>
          <p className="text-amber-600 font-semibold">
            Order Number: {orderNumber}
          </p>
        </div>

        {/* Order Status Timeline */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">What happens next?</h2>

          <div className="space-y-6">
            {[
              {
                icon: CheckCircle,
                title: "Order Confirmed",
                description: "We've received your order and payment",
                status: "completed",
                time: "Just now"
              },
              {
                icon: Package,
                title: "Baking in Progress",
                description: "Our bakers are crafting your delicious order",
                status: "pending",
                time: "Within 2-4 hours"
              },
              {
                icon: Truck,
                title: "Out for Delivery",
                description: "Your fresh cakes are on their way to you",
                status: "pending",
                time: "On delivery date"
              },
              {
                icon: CheckCircle,
                title: "Delivered",
                description: "Enjoy your delicious Whisked Stories creation!",
                status: "pending",
                time: "As scheduled"
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step.status === 'completed'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`font-medium ${
                      step.status === 'completed' ? 'text-green-600' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h3>
                    <span className="text-sm text-gray-500">{step.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Call Us</p>
                  <p className="text-gray-600">+91 12345 67890</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email Support</p>
                  <p className="text-gray-600">support@whiskedstories.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Support Hours</p>
                  <p className="text-gray-600">Mon-Sat, 9 AM - 8 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Notes</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <p>You will receive SMS and email updates about your order status</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <p>Our delivery team will call 30 minutes before arrival</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <p>Please ensure someone is available to receive the order</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <p>Refrigerate cakes immediately upon delivery for best quality</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                <p>Contact us within 2 hours for any quality concerns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/menu">
                Order More Cakes
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            Save this page or take a screenshot for your records
          </p>
        </div>

        {/* Social Sharing */}
        <div className="mt-12 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Share Your Experience!</h3>
          <p className="text-gray-600 mb-4">
            Tag us @whiskedstories when you share your cake photos on social media
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://instagram.com/whiskedstories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/whiskedstories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}