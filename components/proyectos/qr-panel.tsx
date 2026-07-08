'use client'

import { useEffect, useState } from 'react'
import { Smartphone } from 'lucide-react'

interface QrPanelProps {
  arUrl: string
  projectName: string
}

export function QrPanel({ arUrl, projectName }: QrPanelProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [QrCode, setQrCode] = useState<typeof import('qrcode') | null>(null)
  const [qrDataUrl, setQrDataUrl] = useState('')

  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent))

    import('qrcode').then(mod => {
      setQrCode(mod)
      mod.toDataURL(arUrl, {
        width: 280,
        margin: 1,
        color: {
          dark: '#ffffff',
          light: '#040506',
        },
      }).then(url => setQrDataUrl(url))
    })
  }, [arUrl])

  return (
    <div className="rounded-[16px] bg-[#07080a] key-card p-8 text-center">
      <h3 className="text-xl font-medium text-white mb-2">Experiencia AR</h3>
      <p className="text-sm text-[#9c9c9d] mb-6 max-w-[320px] mx-auto">
        Escanea con la cámara de tu celular para ver{' '}
        <span className="text-white">{projectName}</span> en tu espacio.
      </p>

      {qrDataUrl && (
        <div className="inline-flex rounded-[16px] bg-[#040506] p-4 mb-6 key-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={qrDataUrl} alt={`QR para ${projectName}`} className="w-[200px] h-[200px]" />
        </div>
      )}

      {isMobile && (
        <a
          href={arUrl}
          className="inline-flex items-center gap-2 h-10 px-6 rounded-[8px] bg-[#e6e6e6] text-[#454647] text-[13px] font-medium hover:bg-[#d4d4d4] transition-colors"
        >
          <Smartphone className="w-4 h-4" />
          Abrir en este dispositivo
        </a>
      )}

      <p className="mt-4 text-[11px] text-[#6a6b6c] font-[family-name:var(--font-geistmono)]">
        WebXR · AR.js · Sin app nativa
      </p>
    </div>
  )
}
