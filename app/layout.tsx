import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sparta XR — Realidad Aumentada para tus proyectos',
  description: 'Plataforma que muestra proyectos de Realidad Aumentada. Escanea el QR y vive la experiencia en tu espacio, sin descargar ninguna app.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body>
        {children}
      </body>
    </html>
  )
}
