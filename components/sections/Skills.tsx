'use client'

import { Stagger, StaggerItem } from '@/components/motion'
import { ScrollReveal } from '@/components/ScrollReveal'
import { skills } from '@/lib/data'
import {
  BrainCircuit,
  Cpu,
  Database,
  Server,
  Terminal,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

const categoryIcons: Record<string, LucideIcon> = {
  'Programming Languages': Terminal,
  'Web & Backend': Server,
  Databases: Database,
  'Robotics & Embedded': Cpu,
  'AI & Computer Vision': BrainCircuit,
  'Tools & Platforms': Wrench,
}

// All technologies, de-duplicated, for the scrolling marquee strip.
const allTechs = Array.from(new Set(skills.flatMap((group) => group.techs)))

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="marquee-mask pause-on-hover overflow-hidden py-1">
      <div
        className={`flex w-max gap-3 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {[...items, ...items].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const mid = Math.ceil(allTechs.length / 2)

  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12 max-w-2xl">
            <p className="text-accent font-medium mb-2">Toolbox</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Skills &amp; <span className="text-gradient">Technologies</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              The languages, frameworks, and hardware I reach for — from
              full-stack web platforms to autonomous robotics stacks.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-bleed marquee strips */}
      <ScrollReveal blur={false}>
        <div className="space-y-3">
          <MarqueeRow items={allTechs.slice(0, mid)} />
          <MarqueeRow items={allTechs.slice(mid)} reverse />
        </div>
      </ScrollReveal>

      {/* Category breakdown */}
      <div className="max-w-6xl mx-auto px-6">
        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => {
            const Icon = categoryIcons[group.category] ?? Wrench
            return (
              <StaggerItem key={group.category} className="h-full">
                <div className="spotlight group h-full rounded-2xl border border-border bg-card/60 p-6 card-hover hover:border-accent">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold leading-tight">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border/70 bg-background/60 px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-accent/60 hover:text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
