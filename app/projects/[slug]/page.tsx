import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Lightbulb,
  Tag,
  Target,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Footer } from '@/components/Footer'
import { Stagger, StaggerItem } from '@/components/motion'
import { Navbar } from '@/components/Navbar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { projects } from '@/lib/data'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12.03 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.758-1.333-1.758-1.09-.745.084-.729.084-.729 1.205.086 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.336-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.535-1.526.117-3.176 0 0 1.006-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.293-1.552 3.3-1.23 3.3-1.23.652 1.65.241 2.873.118 3.176.768.84 1.235 1.91 1.235 3.22 0 4.605-2.803 5.624-5.475 5.922.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.825.576C20.565 22.124 24 17.627 24 12.324c0-6.657-5.373-12.027-12-12.027z" />
    </svg>
  )
}

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | MD Raisul Islam Rahad`,
    description: project.description,
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  const projectIndex = projects.findIndex((p) => p.slug === project.slug)
  const nextProject = projects[(projectIndex + 1) % projects.length]
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length]

  const meta = [
    { icon: Tag, label: 'Category', value: project.category },
    { icon: Layers, label: 'Technologies', value: `${project.techStack.length} tools` },
    { icon: Target, label: 'Year', value: String(project.year) },
  ]

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

          <div className="max-w-5xl mx-auto px-6">
            {/* Back Button */}
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-accent hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back to Projects
            </Link>

            <ScrollReveal>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {project.category}
                </span>
                <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-sm font-medium text-muted-foreground">
                  {project.year}
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
                <span className="text-gradient">{project.title}</span>
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
                  >
                    <GitHubIcon className="h-5 w-5" />
                    View Source
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-muted/40"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ───────────────────────  Showcase image  ─────────────────────── */}
        <section className="px-6">
          <ScrollReveal direction="scale" delay={0.05}>
            <div className="group relative mx-auto max-w-5xl">
              {/* glow */}
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-primary/10 to-transparent opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.6)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ────────────────────────  Meta strip  ───────────────────────── */}
        <section className="px-6 pt-14">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
                {meta.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4 bg-card/70 px-6 py-5">
                    <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        {label}
                      </p>
                      <p className="font-semibold">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─────────────────────  Challenge & Solution  ─────────────────── */}
        <section className="px-6 pt-20">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <ScrollReveal direction="up">
              <div className="h-full rounded-2xl border border-border bg-card/60 p-8">
                <div className="mb-5 inline-flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-destructive/10">
                    <Target className="h-5 w-5 text-destructive" />
                  </div>
                  <h2 className="text-2xl font-bold">The Challenge</h2>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                  {project.problem}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.08}>
              <div className="h-full rounded-2xl border border-accent/30 bg-accent/5 p-8">
                <div className="mb-5 inline-flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15">
                    <Lightbulb className="h-5 w-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold">The Solution</h2>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                  {project.solution}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ────────────────────────  Key Features  ─────────────────────── */}
        <section className="px-6 pt-20">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="mb-8">
                <p className="font-medium text-accent">What it does</p>
                <h2 className="text-3xl font-bold lg:text-4xl">Key Features</h2>
              </div>
            </ScrollReveal>

            <Stagger className="grid gap-4 sm:grid-cols-2">
              {project.features.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="group flex h-full items-start gap-3 rounded-xl border border-border bg-card/50 p-5 card-hover hover:border-accent">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                      {feature}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ─────────────────────  Deep dive / How it works  ─────────────── */}
        {project.details && project.details.length > 0 && (
          <section className="px-6 pt-20">
            <div className="mx-auto max-w-5xl">
              <ScrollReveal>
                <div className="mb-8">
                  <p className="font-medium text-accent">Under the hood</p>
                  <h2 className="text-3xl font-bold lg:text-4xl">How it works</h2>
                </div>
              </ScrollReveal>

              <Stagger className="space-y-4">
                {project.details.map((detail, index) => (
                  <StaggerItem key={detail.title}>
                    <div className="group relative flex gap-5 rounded-2xl border border-border bg-card/50 p-6 card-hover hover:border-accent">
                      <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-accent/10 font-heading text-lg font-bold text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="mb-1.5 text-lg font-bold transition-colors group-hover:text-accent">
                          {detail.title}
                        </h3>
                        <p className="leading-relaxed text-muted-foreground">
                          {detail.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>
        )}

        {/* ────────────────────────  Tech stack  ───────────────────────── */}
        <section className="px-6 pt-20">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 p-8 lg:p-10">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
                <div className="relative">
                  <div className="mb-6 inline-flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10">
                      <Layers className="h-5 w-5 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold">Built with</h2>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ──────────────────────  Prev / Next nav  ─────────────────────── */}
        <section className="px-6 pb-24 pt-20">
          <div className="mx-auto max-w-5xl border-t border-border pt-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-6 card-hover hover:border-accent"
              >
                <ArrowLeft className="h-5 w-5 flex-shrink-0 text-accent transition-transform group-hover:-translate-x-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Previous Project</p>
                  <h3 className="font-bold transition-colors group-hover:text-accent">
                    {prevProject.title}
                  </h3>
                </div>
              </Link>

              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card/50 p-6 text-left card-hover hover:border-accent md:justify-end md:text-right"
              >
                <div>
                  <p className="text-sm text-muted-foreground">Next Project</p>
                  <h3 className="font-bold transition-colors group-hover:text-accent">
                    {nextProject.title}
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
