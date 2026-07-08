'use client'

import { Search, QrCode, Eye, Hand } from 'lucide-react'

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
  return (
    <section className="py-24 bg-[#040506]" id="como-funciona">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-normal text-white leading-[1.15]">
            Cómo funciona
          </h2>
          <p className="mt-4 text-[#9c9c9d] max-w-[480px] mx-auto">
            Cuatro pasos simples para llevar cualquier proyecto a la realidad aumentada.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#111214] flex items-center justify-center key-card">
                    <Icon className="w-7 h-7 text-[#e6e6e6]" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#ff6363] text-white text-[11px] font-medium flex items-center justify-center font-[family-name:var(--font-geistmono)]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
                <p className="text-sm text-[#9c9c9d] max-w-[240px] mx-auto">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
