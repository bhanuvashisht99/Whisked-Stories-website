'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '@/contexts/cart-context'
import { cn } from '@/lib/utils'

export function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { state, updateQuantity, removeItem, clearCart } = useCart()

  const handleCheckout = () => {
    // For now, just show an alert - in a real app this would redirect to checkout
    if (state.items.length === 0) {
      alert('Your cart is empty!')
      return
    }
    alert(`Proceeding to checkout with ${state.itemCount} items totaling ₹${state.total.toLocaleString('en-IN')}`)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      {/* Cart Button */}
      <Button
        variant="ghost"
        size="sm"
        className="relative hover:bg-neutral-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ShoppingCart className="h-5 w-5 text-neutral-700 hover:text-primary transition-colors duration-200" />
        {state.itemCount > 0 && (
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
            {state.itemCount}
          </span>
        )}
      </Button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Cart Content */}
          <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-xl border border-neutral-200 z-50">
            <div className="p-4 border-b border-neutral-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-900">Shopping Cart</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-neutral-50"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {state.items.length === 0 ? (
                <div className="p-8 text-center">
                  <ShoppingCart className="h-12 w-12 text-neutral-300 mx-auto mb-4" />
                  <p className="text-neutral-500">Your cart is empty</p>
                  <Button
                    className="mt-4"
                    onClick={() => setIsOpen(false)}
                    asChild
                  >
                    <a href="/menu">Continue Shopping</a>
                  </Button>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="p-4 space-y-4">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-3 bg-neutral-50 rounded-lg">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">🧁</span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-neutral-900 truncate">
                            {item.name}
                          </h4>
                          <p className="text-sm text-neutral-500">
                            ₹{item.price.toLocaleString('en-IN')} each
                          </p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-6 w-6 p-0 hover:bg-neutral-200"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>

                          <span className="text-sm font-medium min-w-[2rem] text-center">
                            {item.quantity}
                          </span>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-6 w-6 p-0 hover:bg-neutral-200"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="text-sm font-semibold text-neutral-900 min-w-[4rem] text-right">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="h-6 w-6 p-0 hover:bg-red-100 hover:text-red-600"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>

                  {/* Cart Footer */}
                  <div className="p-4 border-t border-neutral-200 bg-neutral-50">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-neutral-900">Total:</span>
                      <span className="text-lg font-bold text-primary">
                        ₹{state.total.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        onClick={handleCheckout}
                      >
                        Proceed to Checkout
                      </Button>

                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => setIsOpen(false)}
                          asChild
                        >
                          <a href="/menu">Continue Shopping</a>
                        </Button>

                        {state.items.length > 0 && (
                          <Button
                            variant="outline"
                            onClick={() => {
                              clearCart()
                              setIsOpen(false)
                            }}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            Clear Cart
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}