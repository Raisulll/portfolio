'use client'

import { ScrollReveal } from '@/components/ScrollReveal'
import { formatPressDate, pressItems, type PressItem } from '@/lib/data'
import { ArrowRight, Film, Newspaper } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function PressCard({ item }: { item: PressItem }) {
  const hasVideo = item.sources.some((source) => source.kind === 'video')
  const sourceCount = item.sources.length

  return (
    <Link
      href={`/featured/${item.slug}`}
      className="spotlight group flex h-full flex-col rounded-xl border border-border overflow-hidden glass card-hover hover:border-accent"
    >
      {/* Cover */}
      <div className="relative h-52 overflow-hidden bg-muted/40">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/85 backdrop-blur text-accent text-xs font-semibold">
          {item.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <span className="font-semibold text-foreground/80">{item.outlet}</span>
          <span aria-hidden="true">•</span>
          <time dateTime={item.date}>{formatPressDate(item.date)}</time>
        </div>

        <h3 className="text-lg font-bold leading-snug group-hover:text-accent transition-colors">
          {item.title}
        </h3>
        {item.titleGloss && (
          <p className="mt-1 text-sm italic text-muted-foreground/80">{item.titleGloss}</p>
        )}

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-4">
          {item.summary}
        </p>

        <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between text-sm">
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            {hasVideo ? <Film className="w-4 h-4" /> : <Newspaper className="w-4 h-4" />}
            {sourceCount > 0
              ? `${sourceCount} source${sourceCount > 1 ? 's' : ''}`
              : 'Coverage'}
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium text-accent">
            Read more
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export function Featured() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12 max-w-2xl">
            <p className="text-accent font-medium mb-2">Press &amp; Media</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Feature
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Selected press, broadcast and recognition coverage of MIST Mongol
              Barota — our teams&apos; journey through international robotics
              competitions, from national newspapers and TV to the University
              and Anatolian Rover Challenges.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.06} className="h-full">
              <PressCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
