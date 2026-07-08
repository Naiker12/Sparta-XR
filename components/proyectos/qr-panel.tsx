'use client'

import { useEffect, useState } from 'react'
import { Smartphone, Loader2 } from 'lucide-react'
import { ViewfinderFrame } from '@/components/ui/viewfinder-frame'

interface QrPanelProps {
  arUrl: string
  projectName: string
}

export function QrPanel({ arUrl, projectName }: QrPanelProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [qrDataUrl, setQrDataUrl] = useState('')
  const [isGenerating, setIsGenerating] = useState(true)

  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent))

    import('qrcode').then(mod => {
      mod.toDataURL(arUrl, {
        width: 280,
        margin: 1,
        color: { dark: '#ffffff', light: '#040506' },
      }).then(url => {
        setQrDataUrl(url)
        setTimeout(() => setIsGenerating(false), 500)
      })
    })
  }, [arUrl])

  return (
    <div className="rounded-[16px] bg-[#07080a] key-card p-8 text-center relative overflow-hidden">
      <ViewfinderFrame color="#7CF2B0" size={18} thickness={1.5} gap={6} />

      <h3 className="text-xl font-medium text-white mb-2">Experiencia AR</h3>
      <p className="text-sm text-[#9c9c9d] mb-6 max-w-[320px] mx-auto">
        Escanea con la cámara de tu celular para ver{' '}
        <span className="text-white">{projectName}</span> en tu espacio.
      </p>

      <div className="inline-flex rounded-[16px] bg-[#040506] p-4 mb-6 key-card relative overflow-hidden">
        {isGenerating ? (
          <div className="w-[200px] h-[200px] flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-6 h-6 text-[#7CF2B0] animate-spin" />
            <span className="text-[11px] font-[family-name:var(--font-geistmono)] text-[#6a6b6c]">
              GENERANDO QR...
            </span>
          </div>
        ) : (
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={qrDataUrl} alt={`QR para ${projectName}`} className="w-[200px] h-[200px]" />
            <div
              className="absolute inset-0 pointer-events-none animate-qr-scan"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(124, 242, 176, 0.15) 50%, transparent 100%)',
              }}
            />
          </div>
        )}
      </div>

      <a
        href={arUrl}
        className="inline-flex items-center gap-2 h-10 px-6 rounded-[8px] bg-[#e6e6e6] text-[#454647] text-[13px] font-medium hover:bg-[#d4d4d4] transition-colors mb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6363] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040506]"
      >
        <Smartphone className="w-4 h-4" />
        {isMobile ? 'Abrir en este dispositivo' : 'Abrir en el celular'}
      </a>

      <p className="mt-4 text-[11px] font-[family-name:var(--font-geistmono)] text-[#6a6b6c]">
        WebXR · AR.js · Sin app nativa
      </p>
    </div>
  )
}
