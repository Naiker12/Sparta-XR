'use client'

import { GraduationCap, ShoppingBag, Building2, Palette, PieChart } from 'lucide-react'
import { ViewfinderFrame } from '@/components/ui/viewfinder-frame'
import { useScrollReveal } from '@/lib/use-scroll-reveal'

const benefits = [
  { icon: GraduationCap, title: 'Educación', description: 'Contenido interactivo que transforma el aprendizaje con visualizaciones 3D en el aula o en casa.' },
  { icon: ShoppingBag, title: 'E-commerce', description: 'Los clientes ven productos en su espacio real antes de comprar, reduciendo devoluciones e incrementando conversión.' },
  { icon: Building2, title: 'Arquitectura', description: 'Visualiza proyectos a escala real sobre el terreno. Recorridos virtuales inmersivos para clientes.' },
  { icon: Palette, title: 'Arte', description: 'Galerías virtuales que convierten cualquier espacio en una sala de exposición interactiva.' },
  { icon: PieChart, title: 'Marketing', description: 'Campañas interactivas con alto impacto. El QR como puente entre lo digital y lo físico.' },
]

function BenefitCard({ icon: Icon, title, description, index }: { icon: React.ElementType; title: string; description: string; index: number }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`rounded-[16px] bg-[#07080a] key-card p-6 text-center transition-all duration-500 hover:bg-[#0a0b0e] hover:scale-[1.02] relative overflow-hidden group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <ViewfinderFrame
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[16px]"
        color="#7CF2B0"
        size={12}
        thickness={1.5}
        gap={4}
      />
      <div className="w-12 h-12 rounded-full bg-[#111214] flex items-center justify-center mx-auto mb-4 key-card group-hover:bg-[#1b1c1e] transition-colors duration-300">
        <Icon className="w-5 h-5 text-[#e6e6e6] transition-transform duration-300 group-hover:scale-110" />
      </div>
      <h3 className="text-sm font-medium text-white mb-2">{title}</h3>
      <p className="text-[12px] text-[#9c9c9d] leading-[1.6]">{description}</p>
    </div>
  )
}

export function Benefits() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 })

  return (
    <section className="py-24 bg-[#040506]">
      <div className="container">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-[32px] font-normal text-white leading-[1.15]">Casos de uso</h2>
          <p className="mt-4 text-[#9c9c9d] max-w-[480px] mx-auto">
            Sparta XR se adapta a cualquier industria que quiera llevar sus proyectos al mundo real.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.title} {...benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
