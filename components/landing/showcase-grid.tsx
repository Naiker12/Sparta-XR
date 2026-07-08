'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { getFeaturedProjects } from '@/lib/projects'

const projects = getFeaturedProjects()

export function ShowcaseGrid() {
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
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-normal text-white leading-[1.15]">
            Proyectos destacados
          </h2>
          <p className="mt-4 text-[#9c9c9d] max-w-[480px] mx-auto">
            Explora algunos de los proyectos AR más impactantes creados con Sparta XR.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <Link key={project.slug} href={`/proyectos/${project.slug}`} className="group">
              <div className="rounded-[16px] bg-[#07080a] key-card p-6 h-full transition-all duration-300 hover:bg-[#0a0b0e]">
                <div className="rounded-[12px] bg-[#111214] aspect-[16/10] mb-4 flex items-center justify-center overflow-hidden">
                  <div className="text-[#6a6b6c] text-sm font-[family-name:var(--font-geistmono)]">
                    {project.modelFormat} · {project.modelSize}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="accent" className="text-[10px] uppercase tracking-[0.05em]">
                    AR
                  </Badge>
                  <span className="text-[12px] text-[#6a6b6c]">{project.category}</span>
                  {project.status === 'Nuevo' && (
                    <Badge variant="default" className="text-[10px]">{project.status}</Badge>
                  )}
                </div>
                <h3 className="text-lg font-medium text-white mb-1.5">{project.name}</h3>
                <p className="text-sm text-[#9c9c9d] line-clamp-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 h-10 px-6 rounded-[8px] border border-[#363739] text-[#9c9c9d] text-[13px] font-medium hover:text-white hover:bg-[#111214] transition-colors"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}
