'use client'

import { cn } from '@/lib/utils'

interface ViewfinderFrameProps {
  className?: string
  color?: string
  size?: number
  thickness?: number
  gap?: number
}

export function ViewfinderFrame({
  className,
  color = '#7CF2B0',
  size = 20,
  thickness = 2,
  gap = 4,
}: ViewfinderFrameProps) {
  const cornerStyle = (position: 'tl' | 'tr' | 'bl' | 'br') => {
    const base: Record<string, string | number> = {
      position: 'absolute',
      width: size,
      height: size,
      borderColor: color,
      borderStyle: 'solid',
      borderWidth: 0,
    }

    switch (position) {
      case 'tl':
        return { ...base, top: gap, left: gap, borderTopWidth: thickness, borderLeftWidth: thickness }
      case 'tr':
        return { ...base, top: gap, right: gap, borderTopWidth: thickness, borderRightWidth: thickness }
      case 'bl':
        return { ...base, bottom: gap, left: gap, borderBottomWidth: thickness, borderLeftWidth: thickness }
      case 'br':
        return { ...base, bottom: gap, right: gap, borderBottomWidth: thickness, borderRightWidth: thickness }
    }
  }

  return (
    <div className={cn('pointer-events-none absolute inset-0', className)} aria-hidden>
      <div style={cornerStyle('tl')} />
      <div style={cornerStyle('tr')} />
      <div style={cornerStyle('bl')} />
      <div style={cornerStyle('br')} />
    </div>
  )
}
