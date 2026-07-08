'use client'

import Link from 'next/link'
import { useScrollReveal } from '@/lib/use-scroll-reveal'

const footerLinks = {
  Producto: [
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Cómo funciona', href: '/#como-funciona' },
    { label: 'Casos de uso', href: '/#casos-de-uso' },
  ],
  Conectar: [
    { label: 'Twitter', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Contacto', href: '#' },
  ],
}

export function FooterSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 })

  return (
    <footer className="border-t border-[#363739] bg-[#040506]">
      <div
        ref={ref}
        className={`container py-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-[#ff6363]" />
              <span className="text-sm font-medium text-white">Sparta XR</span>
            </div>
            <p className="text-sm text-[#9c9c9d] max-w-[240px] leading-relaxed">
              Plataforma de realidad aumentada para proyectos. Sin apps, solo un QR.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-medium text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[#9c9c9d] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-[#363739] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] font-[family-name:var(--font-geistmono)] text-[#6a6b6c]">
            v0.1.0 | Sparta XR · {new Date().getFullYear()}
          </p>
          <p className="text-[12px] font-[family-name:var(--font-geistmono)] text-[#6a6b6c]">
            WebXR · AR.js · Sin app nativa
          </p>
        </div>
      </div>
    </footer>
  )
}
