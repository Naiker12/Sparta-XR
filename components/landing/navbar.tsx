'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePrefersReducedMotion } from '@/lib/use-scroll-reveal'

const navLinks = [
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Cómo funciona', href: '#como-funciona' },
]

export function Navbar() {
  const reduced = usePrefersReducedMotion()

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[720px] px-4 ${!reduced ? 'animate-fade-in-up' : ''}`}
      style={!reduced ? { animationDelay: '0.1s', animationFillMode: 'both' } : undefined}
    >
      <div className="glass-nav rounded-[8px] flex items-center h-12 px-4">
        <Link href="/" className="flex items-center gap-2 mr-auto group">
          <div className="w-5 h-5 rounded-full bg-[#ff6363] transition-transform duration-200 group-hover:scale-110" />
          <span className="text-[13px] font-medium text-white font-inter">Sparta XR</span>
        </Link>
        <div className="hidden sm:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors',
                'text-[#9c9c9d] hover:text-white',
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/proyectos"
          className="ml-4 inline-flex items-center gap-1.5 h-8 px-3 rounded-[8px] bg-[#e6e6e6] text-[#454647] text-[13px] font-medium hover:bg-[#d4d4d4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6363] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040506]"
        >
          Ver proyectos
        </Link>
      </div>
    </nav>
  )
}
