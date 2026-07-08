'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Cómo funciona', href: '#como-funciona' },
]

export function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[720px] px-4">
      <div className="glass-nav rounded-[8px] flex items-center h-12 px-4">
        <Link href="/" className="flex items-center gap-2 mr-auto">
          <div className="w-5 h-5 rounded-full bg-[#ff6363]" />
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
          className="ml-4 inline-flex items-center gap-1.5 h-8 px-3 rounded-[8px] bg-[#e6e6e6] text-[#454647] text-[13px] font-medium hover:bg-[#d4d4d4] transition-colors"
        >
          Ver proyectos
        </Link>
      </div>
    </nav>
  )
}
