import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { QrPanel } from '@/components/proyectos/qr-panel'
import { Navbar } from '@/components/landing/navbar'
import { FooterSection } from '@/components/landing/footer-section'
import { getProjectBySlug } from '@/lib/projects'
import { getArUrl } from '@/lib/qr'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Proyecto no encontrado — Sparta XR' }
  return {
    title: `${project.name} — Sparta XR`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const arUrl = getArUrl(slug)

  const statusColors: Record<string, 'default' | 'accent' | 'destructive'> = {
    Activo: 'default',
    Nuevo: 'accent',
    Beta: 'destructive',
  }

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-[#040506] min-h-screen">
        <div className="container">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-1.5 text-sm text-[#9c9c9d] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <Badge variant="accent" className="text-[10px] uppercase tracking-[0.05em]">AR</Badge>
                  <Badge variant={statusColors[project.status] || 'default'} className="text-[10px]">
                    {project.status}
                  </Badge>
                  <span className="text-[12px] text-[#6a6b6c]">{project.category}</span>
                  <span className="text-[12px] text-[#6a6b6c] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.date}
                  </span>
                </div>
                <h1 className="text-[32px] font-normal text-white leading-[1.15] mb-4">
                  {project.name}
                </h1>
                <p className="text-base text-[#9c9c9d] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="rounded-[16px] bg-[#07080a] key-card p-6">
                <h2 className="text-lg font-medium text-white mb-3">Detalle técnico</h2>
                <p className="text-sm text-[#9c9c9d] leading-relaxed mb-4">
                  {project.techDescription}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <span className="text-[11px] text-[#6a6b6c] font-[family-name:var(--font-geistmono)] block mb-1">
                      FORMATO
                    </span>
                    <span className="text-sm text-white">{project.modelFormat}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#6a6b6c] font-[family-name:var(--font-geistmono)] block mb-1">
                      PESO
                    </span>
                    <span className="text-sm text-white">{project.modelSize}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#6a6b6c] font-[family-name:var(--font-geistmono)] block mb-1">
                      COMPATIBILIDAD
                    </span>
                    <span className="text-sm text-white">{project.compatibility}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[12px] text-[#6a6b6c] font-[family-name:var(--font-geistmono)]">#{tag}</span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <QrPanel arUrl={arUrl} projectName={project.name} />
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  )
}
