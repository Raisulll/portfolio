import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Biography } from '@/components/sections/Biography'

export const metadata: Metadata = {
  title: 'Biography | Raisul Islam Rahad — MD Raisul Islam Rahad',
  description:
    'Learn about Raisul Islam Rahad (MD Raisul Islam Rahad) — Embedded Software Engineer at Siliconova, MIST graduate, URC 2026 finalist (11th globally), Mars Rover Society lead, and ICPC contestant from Bangladesh.',
  alternates: {
    canonical: 'https://raisulrahad.vercel.app/biography',
  },
  openGraph: {
    title: 'Biography | Raisul Islam Rahad',
    description: 'Background, education, and experience of Raisul Islam Rahad — Embedded Software Engineer at Siliconova.',
    url: 'https://raisulrahad.vercel.app/biography',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function BiographyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Biography />
      </main>
      <Footer />
    </>
  )
}
