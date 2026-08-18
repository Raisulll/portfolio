'use client'

import { Tilt } from '@/components/motion'
import { ScrollReveal } from '@/components/ScrollReveal'
import { featuredProjects } from '@/lib/data'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function FeaturedProject() {
  const [lead, ...rest] = featuredProjects

  if (!lead) return null

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-12 max-w-2xl">
            <p className="text-accent font-medium mb-2">Featured Work</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Selected <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              A few things I&apos;ve built end to end — a full-stack platform, a
              live SaaS, a cross-platform AI app, and an autonomous robot — with
              the engineering decisions behind each.
            </p>
          </div>
        </ScrollReveal>

        {/* Lead feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <ScrollReveal direction="left">
            <Tilt strength={7}>
              <Link
                href={`/projects/${lead.slug}`}
                className="relative block rounded-xl overflow-hidden border border-border/50 glass group cursor-pointer"
              >
                <Image
                  src={lead.image}
                  alt={lead.title}
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Tilt>
          </ScrollReveal>

          {/* Project Details */}
          <ScrollReveal direction="right" delay={0.08}>
            <div className="space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  {lead.category}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-3">{lead.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {lead.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {lead.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Key Features</p>
                <ul className="space-y-2">
                  {lead.features.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={`/projects/${lead.slug}`}
                  className="btn-shine inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-all group"
                >
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                {lead.liveDemo && (
                  <a
                    href={lead.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted/50 hover:border-accent transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                )}
                {lead.github && (
                  <a
                    href={lead.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted/50 hover:border-accent transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* More highlighted projects */}
        {rest.length > 0 && (
          <div className="mt-20">
            <ScrollReveal>
              <h3 className="text-2xl font-bold mb-8">More highlights</h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.08} className="h-full">
                  <div className="spotlight group h-full rounded-xl border border-border overflow-hidden glass card-hover hover:border-accent flex flex-col">
                    <Link href={`/projects/${project.slug}`} className="flex flex-1 flex-col">
                      {/* Project Image */}
                      <div className="relative h-44 overflow-hidden bg-muted/50">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Project Info */}
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <div className="inline-block px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                            {project.category}
                          </div>
                          <h4 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.shortDesc}
                          </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 3 && (
                              <span className="px-2 py-1 rounded text-xs text-muted-foreground">
                                +{project.techStack.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Links */}
                    <div className="px-6 pb-6 flex gap-3 pt-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm border border-border rounded-lg hover:bg-muted/50 hover:border-accent transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Code
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm border border-border rounded-lg hover:bg-muted/50 hover:border-accent transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* View All Projects Link */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all group"
            >
              Explore all projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
