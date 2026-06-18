'use client'

import { ScrollReveal } from '@/components/ScrollReveal'
import { siteConfig, socialLinks } from '@/lib/data'
import { Code, Link, Loader2, Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.023 4.388 11.026 10.125 11.93v-8.437H7.078v-3.493h3.047V9.413c0-3.03 1.794-4.7 4.533-4.7 1.312 0 2.686.236 2.686.236v2.994h-1.513c-1.49 0-1.953.93-1.953 1.887v2.267h3.323l-.531 3.493h-2.792v8.437C19.612 23.1 24 18.097 24 12.073z" />
    </svg>
  )
}

const socialIconMap = {
  github: Code,
  linkedin: Link,
  facebook: FacebookIcon,
  mail: Mail,
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Request failed')

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => setSubmitStatus('idle'), 4000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-14 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Available for new projects
            </div>
            <h1 className="mt-6 text-5xl font-bold text-balance lg:text-7xl">
              Let&apos;s build something that feels{' '}
              <span className="text-gradient">intentional.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Whether it&apos;s a robotics system, a full-stack product, or a collaboration idea,
              I&apos;m open to conversations that have real scope and clear goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="rounded-full border border-border bg-card/70 px-4 py-2">
                Typical reply: within 24 hours
              </span>
              <span className="rounded-full border border-border bg-card/70 px-4 py-2">
                Based in Dhaka, Bangladesh
              </span>
              <span className="rounded-full border border-border bg-card/70 px-4 py-2">
                Open to remote and on-site work
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1.35fr]">
          <ScrollReveal direction="left">
            <div className="relative h-full rounded-3xl border border-border/80 bg-card/80 p-8 shadow-[0_24px_90px_-50px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              <div className="absolute right-0 top-0 h-44 w-44 translate-x-1/3 -translate-y-1/3 rounded-full bg-accent/10 blur-3xl" />

              <div className="relative space-y-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                      Direct Contact
                    </p>
                    <h2 className="mt-2 text-3xl font-bold">Reach out the way that fits best.</h2>
                  </div>
                  <div className="hidden rounded-2xl border border-border bg-background/70 p-3 sm:block">
                    <Code className="h-5 w-5 text-accent" />
                  </div>
                </div>

                <div className="grid gap-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-background/60 p-5 transition-all hover:border-accent hover:bg-muted/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-accent/10 p-3 transition-colors group-hover:bg-accent/20">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-base font-semibold">{siteConfig.email}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      Send mail
                    </span>
                  </a>

                  <div className="rounded-2xl border border-border bg-background/60 p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-xl bg-accent/10 p-2.5">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <p className="font-semibold">Location</p>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {siteConfig.location}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background/60 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Social links
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {socialLinks.map((link) => {
                        const Icon = socialIconMap[link.icon as keyof typeof socialIconMap] || Code

                        return (
                          <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                            aria-label={link.name}
                          >
                            <Icon className="h-4 w-4" />
                            {link.name}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.08}>
            <div className="relative rounded-3xl border border-border/80 bg-card/80 p-8 shadow-[0_24px_90px_-50px_rgba(0,0,0,0.45)] backdrop-blur-sm lg:p-10">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                    Send a message
                  </p>
                  <h2 className="mt-2 text-3xl font-bold">Tell me what you&apos;re building.</h2>
                </div>
                <div className="hidden rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-medium text-muted-foreground sm:block">
                  Secure form
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3.5 text-foreground placeholder-muted-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3.5 text-foreground placeholder-muted-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3.5 text-foreground placeholder-muted-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
                    placeholder="Share your idea, timeline, or what kind of help you need..."
                  />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-muted-foreground">
                    I usually reply with a short plan, next steps, or a request for more detail.
                  </p>

                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className={`group inline-flex items-center justify-center rounded-full px-6 py-3.5 font-medium transition-all duration-200 ${
                      submitStatus === 'success'
                        ? 'border border-green-500/50 bg-green-500/15 text-green-500'
                        : submitStatus === 'error'
                          ? 'border border-red-500/50 bg-red-500/15 text-red-500'
                          : 'bg-accent text-accent-foreground hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20'
                    } disabled:cursor-not-allowed disabled:opacity-60`}
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      'Message sent!'
                    ) : submitStatus === 'error' ? (
                      'Try again'
                    ) : (
                      <>
                        Send message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-muted-foreground">
                  Prefer email? Write directly to <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">{siteConfig.email}</a>.
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
