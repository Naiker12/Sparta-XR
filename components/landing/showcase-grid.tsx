'use client'

import Link from 'next/link'
import { Box } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { ViewfinderFrame } from '@/components/ui/viewfinder-frame'
import { useScrollReveal } from '@/lib/use-scroll-reveal'
import { getFeaturedProjects } from '@/lib/projects'

const projects = getFeaturedProjects()

function ProjectThumbnail({ format, size }: { format: string; size: string }) {
  return (
    <div className="rounded-[12px] bg-gradient-to-br from-[#111214] via-[#141518] to-[#111214] aspect-[16/10] mb-4 flex items-center justify-center overflow-hidden relative group/thumb">
      <Box className="w-12 h-12 text-[#2f3031] transition-all duration-500 group-hover:scale-110 group-hover:text-[#454647]" />
      <div className="absolute bottom-2 right-2 text-[10px] font-[family-name:var(--font-geistmono)] text-[#454647] tracking-[0.05em]">
        {format} · {size}
      </div>
    </div>
  )
}

function ShowcaseCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link href={`/proyectos/${project.slug}`} className="group block">
        <div className="rounded-[16px] bg-[#07080a] key-card p-6 h-full transition-all duration-300 hover:bg-[#0a0b0e] relative overflow-hidden">
          <div className="relative">
            <ProjectThumbnail format={project.modelFormat} size={project.modelSize} />
            <ViewfinderFrame
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px]"
              color="#7CF2B0"
              size={16}
              thickness={1.5}
              gap={6}
            />
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="accent" className="text-[10px] uppercase tracking-[0.05em]">AR</Badge>
            <span className="text-[12px] text-[#6a6b6c]">{project.category}</span>
            {project.status === 'Nuevo' && (
              <Badge variant="default" className="text-[10px]">{project.status}</Badge>
            )}
          </div>
          <h3 className="text-lg font-medium text-white mb-1.5">{project.name}</h3>
          <p className="text-sm text-[#9c9c9d] line-clamp-2 leading-relaxed">{project.description}</p>
        </div>
      </Link>
    </div>
  )
}

export function ShowcaseGrid() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 })

  if (projects.length === 0) {
    return (
      <section className="py-24 bg-[#040506]" id="proyectos">
        <div className="container">
          <h2 className="text-[32px] font-normal text-white leading-[1.15] text-center">
            Proyectos destacados
          </h2>
          <p className="mt-4 text-center text-[#9c9c9d] max-w-[480px] mx-auto">
            Próximamente proyectos disponibles.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-[#040506]" id="proyectos">
      <div className="container">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-[32px] font-normal text-white leading-[1.15]">
            Proyectos destacados
          </h2>
          <p className="mt-4 text-[#9c9c9d] max-w-[480px] mx-auto">
            Explora algunos de los proyectos AR más impactantes creados con Sparta XR.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ShowcaseCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 h-10 px-6 rounded-[8px] border border-[#363739] text-[#9c9c9d] text-[13px] font-medium hover:text-white hover:bg-[#111214] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6363] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040506]"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}
