'use client'

import { siteConfig, socialLinks } from '@/lib/data'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "AI Enthusiast",
  "Robotics Enthusiast"
];

type SocialIconProps = {
  className?: string
}

function GitHubIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12.03 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.758-1.333-1.758-1.09-.745.084-.729.084-.729 1.205.086 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.336-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.535-1.526.117-3.176 0 0 1.006-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.293-1.552 3.3-1.23 3.3-1.23.652 1.65.241 2.873.118 3.176.768.84 1.235 1.91 1.235 3.22 0 4.605-2.803 5.624-5.475 5.922.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.825.576C20.565 22.124 24 17.627 24 12.324c0-6.657-5.373-12.027-12-12.027z" />
    </svg>
  )
}

function LinkedInIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.038-1.851-3.038-1.851 0-2.134 1.445-2.134 2.94v5.667H9.354V9h3.414v1.561h.048c.476-.9 1.637-1.849 3.37-1.849 3.6 0 4.264 2.37 4.264 5.455v6.285zM5.337 7.433A2.062 2.062 0 1 1 5.337 3.31a2.062 2.062 0 0 1 0 4.123zM7.119 20.452H3.554V9h3.565v11.452z" />
    </svg>
  )
}

function FacebookIcon({ className }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.023 4.388 11.026 10.125 11.93v-8.437H7.078v-3.493h3.047V9.413c0-3.03 1.794-4.7 4.533-4.7 1.312 0 2.686.236 2.686.236v2.994h-1.513c-1.49 0-1.953.93-1.953 1.887v2.267h3.323l-.531 3.493h-2.792v8.437C19.612 23.1 24 18.097 24 12.073z" />
    </svg>
  )
}

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const role = roles[currentRole]
    let index = 0

    if (isTyping) {
      const timer = setInterval(() => {
        if (index < role.length) {
          setDisplayText(role.substring(0, index + 1))
          index++
        } else {
          setIsTyping(false)
        }
      }, 50)

      return () => clearInterval(timer)
    } else {
      const timer = setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setDisplayText('')
        setIsTyping(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [currentRole, isTyping])

  const socialIcons = {
    github: GitHubIcon,
    linkedin: LinkedInIcon,
    facebook: FacebookIcon,
    mail: Mail,
  }

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background flex items-center pt-28 pb-16 sm:pt-32 sm:pb-24 min-h-[100svh] lg:min-h-[92vh]"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        {/* Aurora blobs */}
        <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[120px] animate-float-slow" />
        <div className="absolute -top-10 right-0 h-[26rem] w-[26rem] rounded-full bg-primary/15 blur-[120px] animate-aurora" />
        <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-chart-3/10 blur-[120px] animate-glow-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Profile Image — shown on every breakpoint (compact + centered on mobile) */}
          <motion.div
            className="relative order-1 lg:order-2 mx-auto w-44 sm:w-60 lg:mx-0 lg:w-full lg:max-w-md"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Rotating glow ring */}
            <div className="absolute inset-0 -z-10 animate-spin-slow rounded-[2.5rem] bg-[conic-gradient(from_0deg,var(--accent),transparent_40%,var(--primary),transparent_75%,var(--accent))] opacity-30 blur-2xl" />

            <div className="animate-float relative aspect-square overflow-hidden rounded-[1.75rem] lg:rounded-[2rem] border border-border/60 bg-background shadow-[0_24px_100px_-50px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/profile_headshot.png"
                alt={siteConfig.name}
                fill
                sizes="(max-width: 640px) 11rem, (max-width: 1024px) 15rem, 28rem"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(100,255,218,0.14),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_45%)]" />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="order-2 lg:order-1 space-y-6 sm:space-y-7 text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item}>
              <p className="text-accent font-medium mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Aspiring Software Engineer
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] sm:leading-[1.05] text-balance">
                {siteConfig.name.split(' ').map((word, i) => (
                  <span key={i} className={i >= 2 ? 'text-gradient-animated' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
            </motion.div>

            {/* Typewriter Effect */}
            <motion.div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start" variants={item}>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground">
                {displayText}
                <span className="ml-1 inline-block w-[3px] -mb-1 h-6 sm:h-7 bg-accent animate-blink align-middle" />
              </p>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
              variants={item}
            >
              I engineer scalable software — from full stack web platforms to
              robotics systems built for international competition.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start" variants={item}>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://drive.google.com/uc?export=download&id=10Ew7riHhJ0l4VA81fsVY_sUdJAGGg5uD"
                download
                className="group inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted/50 hover:border-accent"
              >
                <Download className="w-4 h-4 mr-2 transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex flex-wrap items-center gap-x-4 gap-y-3 pt-2 justify-center lg:justify-start" variants={item}>
              <p className="text-sm text-muted-foreground">Connect with me:</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon =
                    socialIcons[link.icon as keyof typeof socialIcons] || Mail;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border transition-all hover:-translate-y-0.5 hover:bg-muted/50 hover:border-accent hover:text-accent"
                      aria-label={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/40 p-1.5">
          <span className="block h-2 w-1 rounded-full bg-accent" style={{ animation: 'scroll-cue 1.8s ease-in-out infinite' }} />
        </div>
      </motion.div>
    </section>
  );
}
