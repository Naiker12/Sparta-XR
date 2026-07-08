'use client'

import { GraduationCap, ShoppingBag, Building2, Palette, PieChart } from 'lucide-react'

const benefits = [
  {
    icon: GraduationCap,
    title: 'Educación',
    description: 'Contenido interactivo que transforma el aprendizaje con visualizaciones 3D en el aula o en casa.',
  },
  {
    icon: ShoppingBag,
    title: 'Comercio',
    description: 'Los clientes ven productos en su espacio real antes de comprar, reduciendo devoluciones.',
  },
  {
    icon: Building2,
    title: 'Arquitectura',
    description: 'Visualiza proyectos a escala real sobre el terreno. Recorridos virtuales inmersivos.',
  },
  {
    icon: Palette,
    title: 'Arte',
    description: 'Galerías virtuales que convierten cualquier espacio en una sala de exposición interactiva.',
  },
  {
    icon: PieChart,
    title: 'Marketing',
    description: 'Campañas interactivas con alto impacto. El QR como puente entre lo digital y lo físico.',
  },
]

export function Benefits() {
  return (
    <section className="py-24 bg-[#040506]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-normal text-white leading-[1.15]">
            Casos de uso
          </h2>
          <p className="mt-4 text-[#9c9c9d] max-w-[480px] mx-auto">
            Sparta XR se adapta a cualquier industria que quiera llevar sus proyectos al mundo real.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {benefits.map(benefit => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="rounded-[16px] bg-[#07080a] key-card p-6 text-center transition-all duration-300 hover:bg-[#0a0b0e]"
              >
                <div className="w-12 h-12 rounded-full bg-[#111214] flex items-center justify-center mx-auto mb-4 key-card">
                  <Icon className="w-5 h-5 text-[#e6e6e6]" />
                </div>
                <h3 className="text-sm font-medium text-white mb-2">{benefit.title}</h3>
                <p className="text-[12px] text-[#9c9c9d] leading-[1.5]">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
