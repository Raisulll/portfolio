import { siteConfig, socialLinks } from '@/lib/data'
import { Award, Code, Mail } from 'lucide-react'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12.03 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.758-1.333-1.758-1.09-.745.084-.729.084-.729 1.205.086 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.336-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.535-1.526.117-3.176 0 0 1.006-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.293-1.552 3.3-1.23 3.3-1.23.652 1.65.241 2.873.118 3.176.768.84 1.235 1.91 1.235 3.22 0 4.605-2.803 5.624-5.475 5.922.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.825.576C20.565 22.124 24 17.627 24 12.324c0-6.657-5.373-12.027-12-12.027z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.038-1.851-3.038-1.851 0-2.134 1.445-2.134 2.94v5.667H9.354V9h3.414v1.561h.048c.476-.9 1.637-1.849 3.37-1.849 3.6 0 4.264 2.37 4.264 5.455v6.285zM5.337 7.433A2.062 2.062 0 1 1 5.337 3.31a2.062 2.062 0 0 1 0 4.123zM7.119 20.452H3.554V9h3.565v11.452z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.023 4.388 11.026 10.125 11.93v-8.437H7.078v-3.493h3.047V9.413c0-3.03 1.794-4.7 4.533-4.7 1.312 0 2.686.236 2.686.236v2.994h-1.513c-1.49 0-1.953.93-1.953 1.887v2.267h3.323l-.531 3.493h-2.792v8.437C19.612 23.1 24 18.097 24 12.073z" />
    </svg>
  )
}

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  mail: Mail,
  code: Code,
  award: Award,
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-heading text-lg font-bold text-accent mb-2">
              Raisul
            </h3>
            <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="link-underline hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="link-underline hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/experience" className="link-underline hover:text-accent transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="/contact" className="link-underline hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Let&apos;s Talk</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Interested in collaborating? Reach out for opportunities.
            </p>
            <a
              href="mailto:raisul.dev@gmail.com"
              className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border transition-all hover:-translate-y-0.5 hover:bg-muted/50 hover:border-accent text-muted-foreground hover:text-accent"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
