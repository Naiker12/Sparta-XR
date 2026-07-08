import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#040506] flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-[12px] font-[family-name:var(--font-geistmono)] text-[#7CF2B0] mb-6 tracking-[0.1em]">
          ERROR · 404
        </p>
        <h1 className="text-[56px] font-normal text-white leading-[1.17] tracking-[0.22px] mb-4">
          Página no encontrada
        </h1>
        <p className="text-base text-[#9c9c9d] max-w-[400px] mx-auto mb-8 leading-relaxed">
          El proyecto o página que buscas no existe o ha sido movido.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 h-10 px-6 rounded-[8px] bg-[#e6e6e6] text-[#454647] text-[13px] font-medium hover:bg-[#d4d4d4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6363] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040506]"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
