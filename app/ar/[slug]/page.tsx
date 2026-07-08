import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/projects'
import { ARViewer } from '@/components/ar/ar-viewer'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'AR — Sparta XR' }
  return {
    title: `${project.name} — Experiencia AR | Sparta XR`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Experiencia AR`,
      description: project.description,
    },
  }
}

export default async function ARPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="fixed inset-0 bg-[#040506]">
      <ARViewer
        projectName={project.name}
        projectDescription={project.description}
        modelFormat={project.modelFormat}
      />
    </div>
  )
}
