'use client'

import { Tilt } from '@/components/motion'
import { ScrollReveal } from '@/components/ScrollReveal'
import { projects } from '@/lib/data'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function FeaturedProject() {
  const featured = projects[0] // Autonomous Trolley

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-12">
            <p className="text-accent font-medium mb-2">Featured Work</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Standout <span className="text-gradient">Project</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <ScrollReveal direction="left">
            <Tilt strength={7}>
              <Link
                href={`/projects/${featured.slug}`}
                className="relative block rounded-xl overflow-hidden border border-border/50 glass group cursor-pointer"
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
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
                  {featured.category}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-3">{featured.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {featured.description}
                </p>
              </div>

            {/* Tech Stack */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {featured.techStack.map((tech) => (
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
                {featured.features.slice(0, 3).map((feature, index) => (
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
                <a
                  href={`/projects/${featured.slug}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-all group"
                >
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                {featured.github && (
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted/50 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>

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
