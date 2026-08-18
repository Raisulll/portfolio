import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, ArrowUpRight, Film, Newspaper, Share2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { formatPressDate, pressItems, type PressSource } from '@/lib/data'

interface FeaturedDetailProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return pressItems.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: FeaturedDetailProps): Promise<Metadata> {
  const { slug } = await params
  const item = pressItems.find((p) => p.slug === slug)

  if (!item) {
    return { title: 'Feature Not Found' }
  }

  return {
    title: `${item.title} | MD Raisul Islam Rahad`,
    description: item.summary,
  }
}

const SOURCE_ICON: Record<PressSource['kind'], typeof Newspaper> = {
  article: Newspaper,
  video: Film,
  social: Share2,
}

function sourceVerb(kind: PressSource['kind']) {
  if (kind === 'video') return 'Watch on'
  if (kind === 'social') return 'View on'
  return 'Read on'
}

export default async function FeaturedDetailPage({ params }: FeaturedDetailProps) {
  const { slug } = await params
  const item = pressItems.find((p) => p.slug === slug)

  if (!item) {
    notFound()
  }

  const index = pressItems.findIndex((p) => p.slug === item.slug)
  const prev = pressItems[(index - 1 + pressItems.length) % pressItems.length]
  const next = pressItems[(index + 1) % pressItems.length]

  const paragraphs = item.body && item.body.length > 0 ? item.body : [item.summary]

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* ───────────────────────────  Hero  ─────────────────────────── */}
        <section className="relative overflow-hidden pt-28 pb-12">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[120px] animate-float-slow" />
            <div className="absolute -top-10 right-1/4 h-72 w-72 rounded-full bg-primary/15 blur-[120px] animate-aurora" />
          </div>

          <div className="max-w-4xl mx-auto px-6">
            {/* Back Button */}
            <Link
              href="/featured"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-accent hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back to Feature
            </Link>

            <ScrollReveal>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {item.category}
                </span>
                <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-sm font-medium text-muted-foreground">
                  {item.outlet}
                </span>
                <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-sm font-medium text-muted-foreground">
                  {formatPressDate(item.date)}
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-bold leading-[1.12] text-balance sm:text-4xl lg:text-5xl">
                <span className="text-gradient">{item.title}</span>
              </h1>
              {item.titleGloss && (
                <p className="mt-3 text-lg italic text-muted-foreground">{item.titleGloss}</p>
              )}
            </ScrollReveal>
          </div>
        </section>

        {/* ───────────────────────  Showcase image  ─────────────────────── */}
        <section className="px-6">
          <ScrollReveal direction="scale" delay={0.05}>
            <div className="group relative mx-auto max-w-4xl">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-primary/10 to-transparent opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.6)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ────────────────────────────  Body  ─────────────────────────── */}
        <section className="px-6 pt-16">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                {paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ───────────────────────────  Sources  ───────────────────────── */}
        <section className="px-6 pt-14">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-card/60 p-8">
                <h2 className="text-xl font-bold">Sources</h2>
                {item.sources.length > 0 ? (
                  <>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Read or watch the original coverage.
                    </p>
                    <div className="mt-5 flex flex-col gap-3">
                      {item.sources.map((source) => {
                        const Icon = SOURCE_ICON[source.kind]
                        return (
                          <a
                            key={source.url}
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 rounded-xl border border-border bg-background/60 px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent"
                          >
                            <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                              <Icon className="h-5 w-5" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                                {sourceVerb(source.kind)}
                              </span>
                              <span className="block truncate font-semibold transition-colors group-hover:text-accent">
                                {source.label}
                              </span>
                            </span>
                            <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                          </a>
                        )
                      })}
                    </div>
                  </>
                ) : (
                  <p className="mt-1 text-sm text-muted-foreground">
                    This coverage isn&apos;t available at a public link.
                  </p>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────  Prev / Next nav  ─────────────────────── */}
        <section className="px-6 pb-24 pt-16">
          <div className="mx-auto max-w-4xl border-t border-border pt-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Link
                href={`/featured/${prev.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-6 card-hover hover:border-accent"
              >
                <ArrowLeft className="h-5 w-5 flex-shrink-0 text-accent transition-transform group-hover:-translate-x-1" />
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">Previous</p>
                  <h3 className="truncate font-bold transition-colors group-hover:text-accent">
                    {prev.title}
                  </h3>
                </div>
              </Link>

              <Link
                href={`/featured/${next.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card/50 p-6 text-left card-hover hover:border-accent md:justify-end md:text-right"
              >
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">Next</p>
                  <h3 className="truncate font-bold transition-colors group-hover:text-accent">
                    {next.title}
                  </h3>
                </div>
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
