'use client'

import { ScrollReveal } from '@/components/ScrollReveal'
import { education, skills } from '@/lib/data'
import { Code2, GraduationCap, MapPin, Rocket, Sparkles, Trophy, Zap } from 'lucide-react'

export function About() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <p className="text-accent font-medium mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
              <Sparkles className="w-4 h-4" />
              Get to know me
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-balance mb-6">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              From production web platforms to ROS-powered rovers that have
              competed on an international stage — I build software that works
              in the real world.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-20">
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
                        I'm a Computer Science & Engineering graduate from MIST
                        with a focus on robotic systems and full-stack
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
                          Whether it's an autonomous navigation stack or a
                          full-stack web platform, I care about the same things
                          — clean architecture, reliable under pressure, and
                          built for the people using it.
                        </p>
                      </div>
                    </div>

                    {/* <div className="space-y-4">
                      <h2 className="text-2xl font-bold">What drives me</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        I&apos;m drawn to problems where getting it wrong has
                        real consequences — a rover that fails mid-mission, a
                        backend that drops requests under load, a navigation
                        stack that can&apos;t recover from sensor noise. That
                        pressure sharpens how I work: every design decision has
                        a reason, every layer has a job, and reliability
                        isn&apos;t something you add at the end.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Beyond code</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        I&apos;ve solved 500+ problems across Codeforces,
                        CodeChef, and LeetCode — not out of obligation, but
                        because I genuinely enjoy the puzzle. I compete in ICPC,
                        mentor students at the MIST Computer Club, and try to
                        give back the kind of guidance I wish I had earlier.
                        Most of what I know about building systems, I learned by
                        breaking them first.
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="xl:col-span-5 space-y-6">
            <ScrollReveal direction="right">
              <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.35)] sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-2xl bg-accent/10 p-3">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    {/* <p className="text-sm text-muted-foreground">
                      Current chapter
                    </p> */}
                    <h3 className="text-xl font-bold">Education</h3>
                  </div>
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

            <ScrollReveal direction="right" delay={0.1}>
              <div className="rounded-3xl border border-border bg-card/80 p-8">
                <p className="text-accent font-medium mb-3 inline-flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  How I work
                </p>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    I like to start with the shape of the system, then tighten
                    the edges: data flow, performance, interaction, and
                    maintainability.
                  </p>
                  <p>
                    I value shipping, but I prefer thoughtful shipping over
                    rushed shipping.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div>
          <ScrollReveal>
            <div className="mb-12 max-w-2xl">
              <p className="text-accent font-medium mb-2">Expertise</p>
              <h2 className="text-4xl font-bold">Technical Skills</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <ScrollReveal key={skillGroup.category} delay={index * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-card/70 p-6 card-hover hover:border-accent shadow-[0_16px_50px_-35px_rgba(0,0,0,0.4)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl bg-accent/10 p-2.5 group-hover:bg-accent/20 transition-colors">
                      <Code2 className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-accent transition-colors">
                      {skillGroup.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-muted/60 text-muted-foreground text-sm font-medium group-hover:bg-accent/10 group-hover:text-accent transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

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
                className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3 font-medium text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 whitespace-nowrap"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
