'use client'

import { useEffect } from 'react'
import { RotateCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#040506] flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-[12px] font-[family-name:var(--font-geistmono)] text-[#ff6363] mb-6 tracking-[0.1em]">
          ERROR · INESPERADO
        </p>
        <h1 className="text-[32px] font-normal text-white leading-[1.15] mb-4">
          Algo salió mal
        </h1>
        <p className="text-base text-[#9c9c9d] max-w-[400px] mx-auto mb-8 leading-relaxed">
          Ocurrió un error inesperado. Puede ser un problema temporal.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 h-10 px-6 rounded-[8px] bg-[#e6e6e6] text-[#454647] text-[13px] font-medium hover:bg-[#d4d4d4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6363] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040506]"
        >
          <RotateCw className="w-4 h-4" />
          Reintentar
        </button>
      </div>
    </div>
  )
}
