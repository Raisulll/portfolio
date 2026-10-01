import { Providers } from '@/components/Providers'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fira_Code, Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: "MD Raisul Islam Rahad | Embedded Software Engineer at Siliconova",
  description:
    "Portfolio of MD Raisul Islam Rahad — Embedded Software Engineer at Siliconova and Full-Stack Developer. URC 2026 (11th globally) finalist, MIST Mars Rover Society lead, ICPC contestant. Building reliable embedded systems and scalable software.",
  metadataBase: new URL("https://raisulrahad.vercel.app"),
  keywords: [
    // Name variants — primary ranking signal
    "Raisul",
    "Raisul Rahad",
    "Raisul Islam",
    "MD Raisul",
    "MD Raisul Islam Rahad",
    "Md. Raisul Islam Rahad",
    "raisulrahad",
    "raisul islam rahad",
    // Role keywords
    "embedded software engineer",
    "embedded software engineer Bangladesh",
    "Siliconova",
    "Siliconova engineer",
    "robotics engineer",
    "full-stack developer",
    "competitive programmer",
    // Achievements
    "University Rover Challenge",
    "URC 2026",
    "URC 2026 Bangladesh",
    "Mars Rover Challenge Bangladesh",
    "MIST Mars Rover Society",
    "MIST",
    "ICPC",
    "ICPC Bangladesh",
    "autonomous systems",
    "Bangladesh developer",
    "Bangladeshi software engineer",
    "portfolio raisul",
  ],
  authors: [{ name: "MD Raisul Islam Rahad", url: "https://raisulrahad.vercel.app" }],
  creator: "MD Raisul Islam Rahad",
  publisher: "MD Raisul Islam Rahad",
  alternates: {
    canonical: "https://raisulrahad.vercel.app",
  },
  openGraph: {
    title: "MD Raisul Islam Rahad | Embedded Software Engineer at Siliconova",
    description:
      "Embedded Software Engineer at Siliconova & Full-Stack Developer. URC 2026 finalist (11th globally), MIST Mars Rover Society lead, ICPC contestant. Building reliable embedded systems and scalable web platforms.",
    url: "https://raisulrahad.vercel.app",
    siteName: "Raisul Islam Rahad — Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MD Raisul Islam Rahad — Embedded Software Engineer at Siliconova",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Raisul Islam Rahad | Embedded Software Engineer at Siliconova",
    description:
      "Embedded Software Engineer at Siliconova & Full-Stack Developer. URC 2026 finalist (11th globally), MIST Mars Rover Society lead, ICPC contestant.",
    images: ["/og-image.jpg"],
    creator: "@raisulrahad",
  },
  verification: {
    google: "d4ZedE-6ZYRD3a7aN7WLygvy--J0w1MEwW9w9Q-KHkA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a192f' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${poppins.variable} ${firaCode.variable}`}
    >
      <head>
        {/* Theme init */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        {/* JSON-LD Person structured data — primary Google ranking signal for name searches */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://raisulrahad.vercel.app/#person",
              name: "MD Raisul Islam Rahad",
              alternateName: ["Raisul", "Raisul Rahad", "Raisul Islam", "MD Raisul", "Md. Raisul Islam Rahad"],
              url: "https://raisulrahad.vercel.app",
              image: "https://raisulrahad.vercel.app/images/profile_headshot.png",
              jobTitle: "Embedded Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Siliconova",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Military Institute of Science and Technology (MIST)",
                alternateName: "MIST",
              },
              nationality: {
                "@type": "Country",
                name: "Bangladesh",
              },
              knowsAbout: [
                "Embedded Systems",
                "Robotics",
                "Full-Stack Development",
                "Competitive Programming",
                "Autonomous Systems",
                "Mars Rover Design",
              ],
              sameAs: [
                "https://github.com/Raisulll",
                "https://www.linkedin.com/in/raisulrahad",
              ],
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://raisulrahad.vercel.app",
              },
            }),
          }}
        />
        {/* WebSite structured data — enables Google Sitelinks & search box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://raisulrahad.vercel.app/#website",
              url: "https://raisulrahad.vercel.app",
              name: "Raisul Islam Rahad — Portfolio",
              description:
                "Portfolio of MD Raisul Islam Rahad — Embedded Software Engineer at Siliconova, URC 2026 finalist, Mars Rover Society Lead.",
              author: {
                "@id": "https://raisulrahad.vercel.app/#person",
              },
              inLanguage: "en-US",
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-background text-foreground">
        <Providers>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </Providers>
      </body>
    </html>
  )
}
