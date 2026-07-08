'use client'

import Link from 'next/link'
import { Box } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { ViewfinderFrame } from '@/components/ui/viewfinder-frame'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusColors: Record<string, 'default' | 'accent' | 'destructive'> = {
    Activo: 'default',
    Nuevo: 'accent',
    Beta: 'destructive',
  }

  return (
    <Link href={`/proyectos/${project.slug}`} className="group block">
      <div className="rounded-[16px] bg-[#07080a] key-card p-6 h-full transition-all duration-300 hover:bg-[#0a0b0e] relative overflow-hidden">
        <div className="relative">
          <div className="rounded-[12px] bg-gradient-to-br from-[#111214] via-[#141518] to-[#111214] aspect-[16/10] mb-4 flex items-center justify-center overflow-hidden group/thumb">
            <Box className="w-10 h-10 text-[#2f3031] transition-all duration-500 group-hover:scale-110 group-hover:text-[#454647]" />
            <div className="absolute bottom-2 right-2 text-[10px] font-[family-name:var(--font-geistmono)] text-[#454647] tracking-[0.05em]">
              {project.modelFormat} · {project.modelSize}
            </div>
          </div>
          <ViewfinderFrame
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px]"
            color="#7CF2B0"
            size={14}
            thickness={1.5}
            gap={5}
          />
        </div>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <Badge variant="accent" className="text-[10px] uppercase tracking-[0.05em]">AR</Badge>
          <Badge variant={statusColors[project.status] || 'default'} className="text-[10px]">
            {project.status}
          </Badge>
          <span className="text-[12px] text-[#6a6b6c]">{project.category}</span>
        </div>
        <h3 className="text-lg font-medium text-white mb-1.5">{project.name}</h3>
        <p className="text-sm text-[#9c9c9d] line-clamp-2 leading-relaxed">{project.description}</p>
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[11px] text-[#6a6b6c] font-[family-name:var(--font-geistmono)]">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
