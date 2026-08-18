'use client'

import { AnimatedCounter, Stagger, StaggerItem } from '@/components/motion'
import { highlightStats } from '@/lib/data'
import { Award, Trophy, Users } from 'lucide-react'

const icons = [Trophy, Award, Users]

// Split a stat value like "500+" or "11th Place" into a leading number + the rest,
// so the numeric part can count up while text stays intact.
function parseValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { number: null as number | null, suffix: value }
  return { number: Number(match[1]), suffix: match[2] }
}

export function Highlights() {
  return (
    <section className="relative py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {highlightStats.map((stat, index) => {
            const Icon = icons[index % icons.length]
            const { number, suffix } = parseValue(stat.value)
            return (
              <StaggerItem key={stat.label}>
                <div className="spotlight group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 card-hover hover:border-accent">
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-2.5 transition-colors group-hover:bg-accent/20">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <p className="text-3xl lg:text-4xl font-bold text-accent">
                      {number !== null ? (
                        <AnimatedCounter value={number} suffix={suffix} />
                      ) : (
                        stat.value
                      )}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      {stat.label}
                    </p>
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
