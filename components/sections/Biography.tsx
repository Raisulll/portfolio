'use client'

import { ScrollReveal } from '@/components/ScrollReveal'
import { education, experience } from '@/lib/data'
import { motion, useScroll, useSpring } from 'framer-motion'
import {
  Briefcase,
  Calendar,
  GraduationCap,
  MapPin,
  Rocket,
  Sparkles,
  Zap,
} from 'lucide-react'
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

function ExperienceTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.85', 'end 0.55'],
  })
  // Smooth the raw scroll progress so the progress line eases as it fills.
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  // Standard resume convention: most recent first.
  const items = [...experience].sort(
    (a, b) => startValue(b.period) - startValue(a.period),
  )

  return (
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
                <article className="spotlight group relative overflow-hidden rounded-2xl border border-border glass p-6 card-hover hover:border-accent">
                  {/* Period + location */}
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
                    {exp.location && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    )}
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
  )
}

export function Biography() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-background" />

      <div className="max-w-6xl mx-auto px-6">
        {/* ─────────────────────────────  Intro  ───────────────────────────── */}
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="text-accent font-medium mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
              <Sparkles className="w-4 h-4" />
              Get to know me
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-balance mb-6">
              Bio<span className="text-gradient">graphy</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              From production web platforms to ROS-powered rovers that have
              competed on an international stage — I build software that works
              in the real world.
            </p>
          </div>
        </ScrollReveal>

        {/* ────────────────────────  Background + Education  ──────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-24">
          <div className="xl:col-span-7">
            <ScrollReveal direction="left">
              <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card/80 p-8 lg:p-10 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.35)]">
                <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/3 translate-x-1/3 rounded-full bg-accent/10 blur-3xl" />

                <div className="relative space-y-8">
                  <div className="space-y-5">
                    <div>
                      <p className="text-accent font-medium mb-2">Background</p>
                      <h2 className="text-2xl font-bold mb-4">
                        Embedded systems to scalable backends
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        I&apos;m a Computer Science &amp; Engineering graduate
                        from MIST with a focus on robotic systems and full-stack
                        development. During my degree, I led a 50+ member
                        cross-functional engineering team to international
                        robotics competitions — 11th at University Rover
                        Challenge 2026. I build web products with the same
                        precision I bring to embedded systems: clean
                        architecture, reliable under load, and built to last.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-border/70 bg-background/60 p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <Rocket className="w-5 h-5 text-accent" />
                          <p className="font-semibold">Leadership</p>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Led a 50+ member cross-functional team to URC 2026 and
                          the Anatolian Rover Challenge. I build teams the same
                          way I build systems — clear roles, tight
                          communication, and a high bar for what ships.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-border/70 bg-background/60 p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <MapPin className="w-5 h-5 text-accent" />
                          <p className="font-semibold">Approach</p>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Whether it&apos;s an autonomous navigation stack or a
                          full-stack web platform, I care about the same things
                          — clean architecture, reliable under pressure, and
                          built for the people using it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="xl:col-span-5">
            <ScrollReveal direction="right">
              <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.35)] sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-2xl bg-accent/10 p-3">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">Education</h3>
                </div>

                <div className="space-y-4">
                  {education.map((edu) => (
                    <div
                      key={edu.institution}
                      className="rounded-2xl border border-border/70 bg-background/60 p-5"
                    >
                      <p className="font-semibold text-lg">{edu.degree}</p>
                      <p className="text-accent text-sm font-medium mt-1">
                        {edu.field}
                      </p>
                      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <p>{edu.institution}</p>
                        <p>{edu.period}</p>
                        <p className="italic leading-relaxed">{edu.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ─────────────────────────────  Experience  ───────────────────────────── */}
        <div className="mb-24 max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-accent font-medium mb-2">My Journey</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-balance">
                <span className="text-gradient">Experience</span>
              </h2>
            </div>
          </ScrollReveal>

          <ExperienceTimeline />
        </div>

        {/* ─────────────────────────────  CTA  ───────────────────────────── */}
        <ScrollReveal>
          <div className="mt-20 overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <h3 className="text-2xl lg:text-3xl font-bold flex items-center gap-2">
                  <Zap className="w-6 h-6 text-accent" />
                  Interested in collaborating?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <a
                href="/contact"
                className="btn-shine inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3 font-medium text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 whitespace-nowrap"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
