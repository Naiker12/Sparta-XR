import type { MetadataRoute } from 'next'
import { getAllProjects } from '@/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects()

  const projectEntries: MetadataRoute.Sitemap = projects.map(project => ({
    url: `https://sparta-xr.app/proyectos/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://sparta-xr.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://sparta-xr.app/proyectos',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...projectEntries,
  ]
}
