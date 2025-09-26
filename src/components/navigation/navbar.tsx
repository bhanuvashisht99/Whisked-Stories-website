'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ShoppingCart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useCart } from '@/contexts/cart-context'
import { CartDropdown } from '@/components/cart-dropdown'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Archive', href: '/archive' },
  { name: 'Custom Orders', href: '/custom-orders' },
  { name: 'Events', href: '/events' },
  { name: 'Journal', href: '/journal' },
  { name: 'About', href: '/about' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { state } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled
        ? "bg-white/95 backdrop-blur-md border-b border-neutral-200"
        : "bg-white"
    )}>
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group">
              <div className="flex flex-col">
                <h1 className="font-serif text-2xl font-light text-neutral-900 group-hover:text-primary transition-colors">
                  Whisked Stories
                </h1>
                <span className="text-sm text-neutral-500 -mt-1">Artisan Bakery</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative group transform hover:scale-105 active:scale-95",
                  pathname === item.href
                    ? "text-primary bg-gradient-to-br from-primary/10 to-amber-50 shadow-sm"
                    : "text-neutral-700 hover:text-primary hover:bg-gradient-to-br hover:from-neutral-50 hover:to-amber-50/30 hover:shadow-sm"
                )}
                style={{ backfaceVisibility: 'hidden' }}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                )}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <CartDropdown />
            <Button variant="ghost" size="sm" className="hover:bg-neutral-50">
              <User className="h-5 w-5" />
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-6 rounded-full"
              asChild
            >
              <Link href="/login">Sign In</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              className="p-2 text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "lg:hidden transition-all duration-300 overflow-hidden",
        mobileMenuOpen
          ? "max-h-96 border-t border-neutral-200 bg-white/95 backdrop-blur-md"
          : "max-h-0"
      )}>
        <div className="container py-4">
          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 transform active:scale-95",
                  pathname === item.href
                    ? "text-primary bg-gradient-to-br from-primary/10 to-amber-50 shadow-sm"
                    : "text-neutral-700 hover:text-primary hover:bg-gradient-to-br hover:from-neutral-50 hover:to-amber-50/30"
                )}
                onClick={() => setMobileMenuOpen(false)}
                style={{ backfaceVisibility: 'hidden' }}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-neutral-200 pt-4 mt-4">
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" className="flex-1 mr-2">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart ({state.itemCount})
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 mr-2">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
                <Button
                  className="bg-primary hover:bg-primary/90 text-white px-6 rounded-full flex-1"
                  asChild
                >
                  <Link href="/login">Sign In</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}