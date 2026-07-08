'use client'

import { useState, useEffect, Suspense } from 'react'
import { Loader2, Maximize2, Minimize2, RotateCw } from 'lucide-react'

interface ARViewerProps {
  projectName: string
  projectDescription: string
  modelFormat: string
}

export function ARViewer({ projectName, projectDescription, modelFormat }: ARViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [useFallback, setUseFallback] = useState(false)

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isAndroid = /Android/.test(navigator.userAgent)
    const hasWebXR = 'xr' in navigator

    if (!hasWebXR && !isIOS && !isAndroid) {
      setUseFallback(true)
    }

    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
      setIsFullscreen(true)
    } else {
      document.exitFullscreen().catch(() => {})
      setIsFullscreen(false)
    }
  }

  const reloadViewer = () => {
    setIsLoading(true)
    setError(null)
    setTimeout(() => setIsLoading(false), 1000)
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <p className="text-[#9c9c9d] mb-4">{error}</p>
        <button
          onClick={reloadViewer}
          className="inline-flex items-center gap-2 h-10 px-6 rounded-[8px] bg-[#e6e6e6] text-[#454647] text-[13px] font-medium hover:bg-[#d4d4d4] transition-colors"
        >
          <RotateCw className="w-4 h-4" />
          Reintentar
        </button>
      </div>
    )
  }

  return (
    <div className="relative h-full flex flex-col">
      <div className="absolute top-4 left-4 right-4 z-20 flex items-start justify-between">
        <div>
          <h1 className="text-lg font-medium text-white drop-shadow-lg">{projectName}</h1>
          <p className="text-sm text-[#9c9c9d] drop-shadow-lg max-w-md">{projectDescription}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className="w-9 h-9 rounded-[8px] bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#040506]">
          <Loader2 className="w-8 h-8 text-[#ff6363] animate-spin mb-4" />
          <p className="text-sm text-[#9c9c9d]">Preparando experiencia AR...</p>
          <p className="text-[11px] text-[#6a6b6c] mt-2 font-[family-name:var(--font-geistmono)]">
            WebXR · {modelFormat}
          </p>
        </div>
      )}

      <div className={`flex-1 ${isLoading ? 'invisible' : 'visible'}`}>
        {useFallback ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <div className="rounded-[16px] bg-[#07080a] key-card p-8 max-w-md">
              <div className="w-16 h-16 rounded-full bg-[#111214] flex items-center justify-center mx-auto mb-4 key-card">
                <span className="text-2xl">📱</span>
              </div>
              <h2 className="text-xl font-medium text-white mb-2">Escanea el QR</h2>
              <p className="text-sm text-[#9c9c9d] mb-4">
                Esta experiencia AR funciona mejor en un dispositivo móvil.
                Escanea el código QR desde tu celular para ver{' '}
                <span className="text-white">{projectName}</span> en tu espacio.
              </p>
              <p className="text-[11px] text-[#6a6b6c] font-[family-name:var(--font-geistmono)]">
                Compatible con iOS (AR Quick Look) y Android (Scene Viewer)
              </p>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center bg-gradient-to-b from-[#040506] via-[#0a0b10] to-[#040506]">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-[#111214] key-card flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 rounded-full bg-[#ff6363] animate-pulse" />
              </div>
              <p className="text-white text-lg font-medium mb-2">
                Apunta tu cámara a una superficie plana
              </p>
              <p className="text-sm text-[#9c9c9d] mb-6 max-w-sm mx-auto">
                {projectName} aparecerá en tu espacio. Muévete para explorarlo desde todos los ángulos.
              </p>
              <div className="flex items-center justify-center gap-6 text-[11px] text-[#6a6b6c] font-[family-name:var(--font-geistmono)]">
                <span>Girar · Rotar con un dedo</span>
                <span>Escalar · Pellizcar</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="glass-nav rounded-[8px] px-4 py-2 flex items-center gap-4">
          <span className="text-[11px] text-[#6a6b6c] font-[family-name:var(--font-geistmono)]">
            {modelFormat}
          </span>
          <span className="text-[#363739]">|</span>
          <span className="text-[11px] text-[#6a6b6c] font-[family-name:var(--font-geistmono)]">
            Sparta XR
          </span>
        </div>
      </div>
    </div>
  )
}
