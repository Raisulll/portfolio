'use client'

import { useEffect } from 'react'

/**
 * Site-wide interaction layer:
 *  - Tracks the pointer over any `.spotlight` element and writes its local
 *    coordinates into `--mx` / `--my`, driving the border-glow defined in
 *    globals.css. Uses event delegation + a single rAF so it stays cheap.
 *  - Renders a faint film-grain overlay for texture.
 *
 * Pointer tracking is skipped on touch/coarse-pointer devices, where a
 * cursor spotlight has no meaning.
 */
export function InteractiveFX() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return

    let frame = 0
    let pending: { el: HTMLElement; x: number; y: number } | null = null

    const flush = () => {
      frame = 0
      if (!pending) return
      const { el, x, y } = pending
      el.style.setProperty('--mx', `${x}px`)
      el.style.setProperty('--my', `${y}px`)
      pending = null
    }

    const handleMove = (e: PointerEvent) => {
      const target = (e.target as Element | null)?.closest?.(
        '.spotlight',
      ) as HTMLElement | null
      if (!target) return
      const rect = target.getBoundingClientRect()
      pending = { el: target, x: e.clientX - rect.left, y: e.clientY - rect.top }
      if (!frame) frame = requestAnimationFrame(flush)
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handleMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return <div className="grain" aria-hidden="true" />
}
