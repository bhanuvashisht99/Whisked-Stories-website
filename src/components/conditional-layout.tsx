'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import PageTransition from "@/components/page-transition"
import { CartProvider } from "@/contexts/cart-context"

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdminPage = pathname.startsWith('/admin')

  if (isAdminPage) {
    // Admin pages get no navbar/footer - completely clean
    return <>{children}</>
  }

  // Regular pages get full layout with cart context
  return (
    <CartProvider>
      <Navbar />
      <PageTransition>
        {children}
      </PageTransition>
      <Footer />
    </CartProvider>
  )
}