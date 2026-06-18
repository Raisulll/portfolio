'use client'

import { motion, type Variants } from 'framer-motion'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'
  duration?: number
  /** Adds a subtle blur-in for a softer entrance. Defaults to true. */
  blur?: boolean
  className?: string
}

// Smooth, slightly "overshooting" ease for a premium feel.
const EASE = [0.22, 1, 0.36, 1] as const

const offsets: Record<string, { x?: number; y?: number; scale?: number }> = {
  up: { y: 44 },
  down: { y: -44 },
  left: { x: 44 },
  right: { x: -44 },
  scale: { scale: 0.92 },
  none: {},
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.65,
  blur = true,
  className,
}: ScrollRevealProps) {
  const { ref, inView } = useInView({
    threshold: 0.12,
    triggerOnce: true,
    rootMargin: '0px 0px -40px 0px',
  })

  const offset = offsets[direction] ?? offsets.up

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x ?? 0,
      y: offset.y ?? 0,
      scale: offset.scale ?? 1,
      filter: blur ? 'blur(8px)' : 'blur(0px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration, delay, ease: EASE },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}
