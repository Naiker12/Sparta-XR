'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { ProjectCard } from './project-card'
import { getAllProjects, getCategories } from '@/lib/projects'
import type { Project } from '@/lib/projects'

const projects = getAllProjects()
const categories = getCategories()

export function ProjectGrid() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = projects.filter(p => {
    const matchesSearch = search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
    const matchesCategory = activeCategory === null || p.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6a6b6c]" />
          <input
            type="text"
            placeholder="Buscar proyectos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-[8px] bg-[rgba(255,255,255,0.05)] border border-[#363739] text-white text-sm placeholder:text-[#9c9c9d] focus:outline-none focus:ring-2 focus:ring-[#ff6363] focus:border-transparent transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-[6px] text-[12px] font-medium transition-colors ${
              activeCategory === null
                ? 'bg-[#ff6363] text-white'
                : 'bg-[#111214] text-[#9c9c9d] hover:text-white'
            }`}
          >
            Todos
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(prev => prev === cat ? null : cat)}
              className={`px-3 py-1.5 rounded-[6px] text-[12px] font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-[#ff6363] text-white'
                  : 'bg-[#111214] text-[#9c9c9d] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-[#9c9c9d]">No se encontraron proyectos con esos criterios.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}
