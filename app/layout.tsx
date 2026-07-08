import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geistmono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: {
    default: 'Sparta XR — Realidad Aumentada para tus proyectos',
    template: '%s | Sparta XR',
  },
  description: 'Plataforma que muestra proyectos de Realidad Aumentada. Escanea el QR y vive la experiencia en tu espacio, sin descargar ninguna app.',
  keywords: ['realidad aumentada', 'AR', 'WebXR', '3D', 'QR', 'modelos 3D', 'experiencia interactiva'],
  authors: [{ name: 'Sparta XR' }],
  openGraph: {
    title: 'Sparta XR — Realidad Aumentada para tus proyectos',
    description: 'Plataforma que muestra proyectos de Realidad Aumentada. Escanea el QR y vive la experiencia en tu espacio, sin descargar ninguna app.',
    url: 'https://sparta-xr.app',
    siteName: 'Sparta XR',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sparta XR — Realidad Aumentada',
    description: 'Proyectos AR con un simple código QR. Sin apps.',
  },
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
