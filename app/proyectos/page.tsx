import { Navbar } from '@/components/landing/navbar'
import { ProjectGrid } from '@/components/proyectos/project-grid'
import { FooterSection } from '@/components/landing/footer-section'

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-[#040506] min-h-screen">
        <div className="container">
          <div className="mb-12">
            <h1 className="text-[32px] font-normal text-white leading-[1.15]">Proyectos</h1>
            <p className="mt-2 text-[#9c9c9d]">
              Explora todos los proyectos de realidad aumentada disponibles.
            </p>
          </div>
          <ProjectGrid />
        </div>
      </main>
      <FooterSection />
    </>
  )
}
