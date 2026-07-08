export default function ProyectosLoading() {
  return (
    <div className="min-h-screen bg-[#040506] flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#363739] border-t-[#ff6363] animate-spin mx-auto mb-4" />
        <p className="text-[11px] font-[family-name:var(--font-geistmono)] text-[#6a6b6c] tracking-[0.05em]">
          CARGANDO PROYECTOS...
        </p>
      </div>
    </div>
  )
}
