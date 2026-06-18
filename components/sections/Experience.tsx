'use client'

import { ScrollReveal } from '@/components/ScrollReveal'
import { experience } from '@/lib/data'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { useRef } from 'react'

const MONTHS: Record<string, number> = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
}

// Turn the start of a period ("June 2025 - Present") into a sortable number.
function startValue(period: string) {
  const start = period.split('-')[0].trim()
  const [month, year] = start.split(/\s+/)
  return Number(year) * 12 + (MONTHS[month?.toLowerCase()] ?? 0)
}

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.85', 'end 0.55'],
  })
  // Smooth the raw scroll progress so the progress line eases as it fills.
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  // Standard resume convention: most recent first.
  const items = [...experience].sort((a, b) => startValue(b.period) - startValue(a.period))

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-accent font-medium mb-2">My Journey</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-balance">
              <span className="text-gradient">Experience</span>
            </h1>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Track (background line) */}
          <div className="absolute left-[23px] top-3 bottom-3 w-0.5 rounded-full bg-border" />
          {/* Progress line (fills as you scroll) */}
          <motion.div
            style={{ scaleY: progress }}
            className="absolute left-[23px] top-3 bottom-3 w-0.5 origin-top rounded-full bg-gradient-to-b from-accent via-accent to-primary"
          />

          <div className="space-y-10">
            {items.map((exp, index) => {
              const isPresent = /present/i.test(exp.period)
              return (
                <div key={exp.id} className="relative pl-16 md:pl-20">
                  {/* Node */}
                  <div className="absolute left-0 top-1 grid h-12 w-12 place-items-center rounded-full border border-border bg-card shadow-sm">
                    {isPresent && (
                      <span className="absolute inline-flex h-12 w-12 animate-ping rounded-full bg-accent/30" />
                    )}
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/10">
                      <Briefcase className="h-4.5 w-4.5 text-accent" />
                    </span>
                  </div>

                  <ScrollReveal direction="left" delay={index * 0.05}>
                    <article className="group relative overflow-hidden rounded-2xl border border-border glass p-6 card-hover hover:border-accent">
                      {/* Period badge */}
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                            isPresent
                              ? 'bg-accent/15 text-accent'
                              : 'bg-muted/60 text-muted-foreground'
                          }`}
                        >
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>
                        {isPresent && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-500">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            Current
                          </span>
                        )}
                      </div>

                      {/* Role + organization */}
                      <h3 className="text-xl font-bold leading-snug transition-colors group-hover:text-accent">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-accent">
                        {exp.organization}
                      </p>

                      {/* Description */}
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-5 space-y-2.5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                          Key accomplishments
                        </p>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                            >
                              <span className="mt-0.5 flex-shrink-0 font-bold text-accent">
                                →
                              </span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </ScrollReveal>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal direction="scale">
          <div className="mt-20 p-12 rounded-xl border border-border glass bg-card/50 text-center space-y-4">
            <h2 className="text-2xl font-bold">Ready to build something amazing?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I&apos;m interested in opportunities where I can contribute technical expertise and leadership to impactful projects.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-medium rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              Get in Touch
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
