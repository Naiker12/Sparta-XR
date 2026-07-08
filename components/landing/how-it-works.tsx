'use client'

import { Search, QrCode, Eye, Hand } from 'lucide-react'
import { useScrollReveal } from '@/lib/use-scroll-reveal'

const steps = [
  {
    icon: Search,
    title: 'Explora un proyecto',
    description: 'Entra al catálogo y elige el proyecto que más te interese.',
  },
  {
    icon: QrCode,
    title: 'Escanea el QR',
    description: 'Con la cámara de tu celular, sin necesidad de descargar ninguna app.',
  },
  {
    icon: Eye,
    title: 'Ve el modelo en tu espacio',
    description: 'El navegador abre la experiencia AR usando WebXR en tu dispositivo.',
  },
  {
    icon: Hand,
    title: 'Interactúa',
    description: 'Rota, escala y explora el objeto en tiempo real con gestos táctiles.',
  },
]

export function HowItWorks() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 })

  return (
    <section className="py-24 bg-[#040506]" id="como-funciona">
      <div className="container">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-[32px] font-normal text-white leading-[1.15]">
            Cómo funciona
          </h2>
          <p className="mt-4 text-[#9c9c9d] max-w-[480px] mx-auto">
            Cuatro pasos simples para llevar cualquier proyecto a la realidad aumentada.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px"
            style={{
              background: `repeating-linear-gradient(90deg, #363739 0px, #363739 8px, transparent 8px, transparent 16px)`,
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <StepCard
                key={step.title}
                icon={<Icon className="w-6 h-6 text-[#e6e6e6]" />}
                number={i + 1}
                title={step.title}
                description={step.description}
                delay={i * 120}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function StepCard({
  icon,
  number,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode
  number: number
  title: string
  description: string
  delay: number
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: '600ms' }}
    >
      <div className="relative inline-flex items-center justify-center mb-5">
        <div className="w-14 h-14 rounded-full bg-[#111214] flex items-center justify-center key-card">
          {icon}
        </div>
        <span
          className="absolute -top-1.5 -right-1.5 w-5.5 h-5.5 rounded-md bg-[#111214] border border-[#363739] flex items-center justify-center"
          style={{ fontFamily: "'GeistMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}
        >
          <span className="text-[10px] text-[#7CF2B0] font-medium">{String(number).padStart(2, '0')}</span>
        </span>
      </div>
      <h3 className="text-base font-medium text-white mb-2">{title}</h3>
      <p className="text-sm text-[#9c9c9d] max-w-[220px] mx-auto leading-relaxed">{description}</p>
    </div>
  )
}
