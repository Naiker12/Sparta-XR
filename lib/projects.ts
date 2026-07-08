import projectsData from '@/data/projects.json'

export interface Project {
  slug: string
  name: string
  category: string
  status: string
  description: string
  techDescription: string
  thumbnail: string
  images: string[]
  modelFormat: string
  modelSize: string
  compatibility: string
  tags: string[]
  featured: boolean
  date: string
}

export function getAllProjects(): Project[] {
  return projectsData as Project[]
}

export function getFeaturedProjects(): Project[] {
  return (projectsData as Project[]).filter(p => p.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find(p => p.slug === slug)
}

export function getCategories(): string[] {
  const categories = new Set((projectsData as Project[]).map(p => p.category))
  return Array.from(categories)
}
