'use client'

import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#040506]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[26%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-70"
          style={{
            background: `
              radial-gradient(ellipse at 30% 50%, rgba(4, 63, 150, 0.7) 0%, rgba(6, 18, 37, 0.25) 60%),
              radial-gradient(ellipse at 70% 50%, rgba(255, 99, 99, 0.15) 0%, transparent 50%)
            `,
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute top-[40%] left-[20%] w-[200px] h-[600px] bg-[#ff6363] opacity-10"
          style={{ filter: 'blur(40px)', transform: 'rotate(25deg)' }}
        />
        <div
          className="absolute top-[30%] right-[20%] w-[200px] h-[500px] bg-[#63a1ff] opacity-10"
          style={{ filter: 'blur(40px)', transform: 'rotate(-20deg)' }}
        />
      </div>

      <div className="relative z-10 container text-center px-4">
        <h1
          className="text-[56px] font-normal text-white leading-[1.17] tracking-[0.22px] max-w-[800px] mx-auto"
          style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
        >
          Lleva tus proyectos a la{' '}
          <span className="text-[#ff6363]">realidad aumentada</span>
        </h1>
        <p className="mt-6 text-base text-[#9c9c9d] max-w-[480px] mx-auto leading-[1.15]">
          Crea experiencias AR inmersivas y compártelas con un simple código QR.
          Sin apps, sin complicaciones.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 h-10 px-6 rounded-[8px] bg-[#e6e6e6] text-[#454647] text-[13px] font-medium hover:bg-[#d4d4d4] transition-colors"
          >
            Ver proyectos
          </Link>
          <Link
            href="#como-funciona"
            className="inline-flex items-center gap-2 h-10 px-6 rounded-[8px] border border-[#363739] text-[#9c9c9d] text-[13px] font-medium hover:text-white hover:bg-[#111214] transition-colors"
          >
            Cómo funciona
          </Link>
        </div>
        <p className="mt-8 text-[12px] font-[family-name:var(--font-geistmono)] text-[#6a6b6c]">
          v0.1.0 | WebXR + AR.js | Sin app nativa
        </p>
      </div>
    </section>
  )
}
