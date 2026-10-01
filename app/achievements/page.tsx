import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Achievements } from '@/components/sections/Achievements'

export const metadata: Metadata = {
  title: "Raisul's Achievements | MD Raisul Islam Rahad — Awards & Recognition",
  description:
    "Achievements of Raisul Islam Rahad: URC 2026 (11th globally), Mars Rover Challenge, ICPC competitive programming, robotics leadership at MIST, Bangladesh. Full list of awards and recognition.",
  alternates: {
    canonical: 'https://raisulrahad.vercel.app/achievements',
  },
  openGraph: {
    title: "Raisul's Achievements | MD Raisul Islam Rahad",
    description: "Awards, competition results, and recognition of Raisul Islam Rahad.",
    url: 'https://raisulrahad.vercel.app/achievements',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function AchievementsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Achievements />
      </main>
      <Footer />
    </>
  )
}
