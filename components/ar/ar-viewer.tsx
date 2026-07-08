'use client'

import { useState, useEffect, useCallback } from 'react'
import { Loader2, Maximize2, Minimize2, RotateCw, Smartphone, Monitor } from 'lucide-react'
import { ViewfinderFrame } from '@/components/ui/viewfinder-frame'

interface ARViewerProps {
  projectName: string
  projectDescription: string
  modelFormat: string
}

type ARStatus = 'loading' | 'ready' | 'fallback' | 'unsupported' | 'error'

function getDeviceInfo() {
  const ua = navigator.userAgent
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (/Mac/.test(ua) && 'ontouchend' in document)
  const isAndroid = /Android/.test(ua)
  const isMobile = isIOS || isAndroid
  const hasWebXR = 'xr' in navigator
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua)

  return { isIOS, isAndroid, isMobile, hasWebXR, isSafari }
}

export function ARViewer({ projectName, projectDescription, modelFormat }: ARViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [status, setStatus] = useState<ARStatus>('loading')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [deviceInfo, setDeviceInfo] = useState<ReturnType<typeof getDeviceInfo> | null>(null)

  useEffect(() => {
    const info = getDeviceInfo()
    setDeviceInfo(info)

    if (info.hasWebXR && info.isMobile) {
      setStatus('ready')
    } else if (info.isIOS || info.isAndroid) {
      setStatus('ready')
    } else {
      setStatus('fallback')
    }

    const timer = setTimeout(() => {
      if (status === 'loading') setStatus('fallback')
    }, 3000)

    return () => clearTimeout(timer)
  }, [status])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
      setIsFullscreen(true)
    } else {
      document.exitFullscreen().catch(() => {})
      setIsFullscreen(false)
    }
  }, [])

  const handleRetry = () => {
    setErrorMsg(null)
    setStatus('loading')
    setTimeout(() => {
      const info = getDeviceInfo()
      setDeviceInfo(info)
      if (info.isMobile) setStatus('ready')
      else setStatus('fallback')
    }, 500)
  }

  const handleOpenAR = () => {
    if (deviceInfo?.isIOS) {
      window.location.href = `https://sparta-xr.app/ar/${projectName.toLowerCase().replace(/\s+/g, '-')}.usdz`
    } else {
      window.open(`intent://arvr.google.com/scene-viewer/1.2#file=https://sparta-xr.app/models/${projectName.toLowerCase().replace(/\s+/g, '-')}.glb#title=${encodeURIComponent(projectName)}#mode=ar_only#intent`)
    }
  }

  if (errorMsg) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-[#040506]">
        <div className="rounded-[16px] bg-[#07080a] key-card p-8 max-w-sm">
          <p className="text-sm text-[#9c9c9d] mb-4">{errorMsg}</p>
          <button
            onClick={handleRetry}
            className="inline-flex items-center gap-2 h-10 px-6 rounded-[8px] bg-[#e6e6e6] text-[#454647] text-[13px] font-medium hover:bg-[#d4d4d4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6363]"
          >
            <RotateCw className="w-4 h-4" />
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full flex flex-col bg-[#040506]">
      <div className="absolute top-4 left-4 right-4 z-20 flex items-start justify-between">
        <div>
          <h1 className="text-lg font-medium text-white drop-shadow-lg">{projectName}</h1>
          <p className="text-sm text-[#9c9c9d] drop-shadow-lg max-w-md hidden sm:block">{projectDescription}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className="w-9 h-9 rounded-[8px] bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6363]"
            aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {status === 'loading' && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#040506]">
          <Loader2 className="w-8 h-8 text-[#ff6363] animate-spin mb-4" />
          <p className="text-sm text-[#9c9c9d]">Preparando experiencia AR...</p>
          <p className="text-[11px] text-[#6a6b6c] mt-2 font-[family-name:var(--font-geistmono)]">
            WebXR · {modelFormat}
          </p>
        </div>
      )}

      <div className={`flex-1 ${status === 'loading' ? 'invisible' : 'visible'}`}>
        {status === 'fallback' || status === 'unsupported' ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <div className="rounded-[16px] bg-[#07080a] key-card p-8 max-w-sm relative overflow-hidden">
              <ViewfinderFrame color="#7CF2B0" size={16} thickness={1.5} gap={5} />
              <div className="w-16 h-16 rounded-full bg-[#111214] flex items-center justify-center mx-auto mb-4 key-card">
                <Smartphone className="w-7 h-7 text-[#e6e6e6]" />
              </div>
              <h2 className="text-xl font-medium text-white mb-2">Experiencia AR móvil</h2>
              <p className="text-sm text-[#9c9c9d] mb-6 leading-relaxed">
                Esta experiencia AR está optimizada para dispositivos móviles.
                Escanea el código QR desde tu celular para ver{' '}
                <span className="text-white">{projectName}</span> en tu espacio.
              </p>
              <div className="flex items-center justify-center gap-2 text-[11px] text-[#6a6b6c] font-[family-name:var(--font-geistmono)] mb-4">
                <span>iOS 12+ · ARKit</span>
                <span className="text-[#363739]">|</span>
                <span>Android 8+ · ARCore</span>
              </div>
              {!deviceInfo?.isMobile && (
                <div className="flex items-center gap-2 text-[11px] text-[#6a6b6c]">
                  <Monitor className="w-3 h-3" />
                  <span>Estás en desktop — usa tu celular para la experiencia AR</span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center bg-gradient-to-b from-[#040506] via-[#0a0b10] to-[#040506] relative">
            <ViewfinderFrame
              className="w-[min(80vw,400px)] h-[min(50vh,360px)]"
              color="#7CF2B0"
              size={24}
              thickness={2}
              gap={8}
            />
            <div className="text-center relative z-10">
              <div className="w-20 h-20 rounded-full bg-[#111214] key-card flex items-center justify-center mx-auto mb-6">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#ff6363] animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-[#ff6363] animate-ping opacity-20" />
                </div>
              </div>
              <p className="text-white text-lg font-medium mb-2 px-4">
                Apunta tu cámara a una superficie plana
              </p>
              <p className="text-sm text-[#9c9c9d] mb-6 max-w-sm mx-auto px-4 leading-relaxed">
                {projectName} aparecerá en tu espacio. Muévete para explorarlo desde todos los ángulos.
              </p>

              {deviceInfo?.isMobile && (
                <button
                  onClick={handleOpenAR}
                  className="inline-flex items-center gap-2 h-10 px-6 rounded-[8px] bg-[#e6e6e6] text-[#454647] text-[13px] font-medium hover:bg-[#d4d4d4] transition-colors mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6363]"
                >
                  <Smartphone className="w-4 h-4" />
                  Abrir experiencia AR
                </button>
              )}

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] text-[#6a6b6c] font-[family-name:var(--font-geistmono)] px-4">
                <span>Girar · Un dedo</span>
                <span>Escalar · Pellizcar</span>
                <span>Mover · Arrastrar</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="glass-nav rounded-[8px] px-4 py-2 flex items-center gap-3">
          <span className="text-[10px] sm:text-[11px] text-[#6a6b6c] font-[family-name:var(--font-geistmono)]">
            {modelFormat}
          </span>
          <span className="text-[#363739] hidden sm:inline">|</span>
          <span className="text-[10px] sm:text-[11px] text-[#6a6b6c] font-[family-name:var(--font-geistmono)] hidden sm:inline">
            Sparta XR
          </span>
        </div>
      </div>
    </div>
  )
}
