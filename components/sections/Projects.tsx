'use client'

import { ScrollReveal } from '@/components/ScrollReveal'
import { projects } from '@/lib/data'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const categories = ['All', 'Web', 'AI/Web', 'Robotics', 'Desktop']

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  )

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12">
            <p className="text-accent font-medium mb-2">My Work</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-balance mb-8">
              Featured <span className="text-gradient">Projects</span>
            </h1>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={0.05}>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => {
              const active = activeCategory === category
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                    active
                      ? 'text-accent-foreground'
                      : 'border border-border hover:border-accent text-muted-foreground hover:text-accent'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="category-pill"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="spotlight group h-full rounded-xl border border-border overflow-hidden glass card-hover hover:border-accent flex flex-col"
              >
                <Link href={`/projects/${project.slug}`} className="flex flex-1 flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-muted/50">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-white">
                        View case study <ExternalLink className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="inline-block px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <ScrollReveal>
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
