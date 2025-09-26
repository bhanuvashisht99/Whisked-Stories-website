'use client'

import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options
      }
    )

    observer.observe(element)

    return () => observer.unobserve(element)
  }, [options])

  return elementRef
}

export function useScrollRevealMultiple(selector: string, options = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            // Unobserve once revealed to improve performance
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px',
        ...options
      }
    )

    elements.forEach((el) => {
      if (!el.classList.contains('revealed')) {
        observer.observe(el)
      }
    })

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [selector, options])
}