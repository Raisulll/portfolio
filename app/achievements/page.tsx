import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Achievements } from '@/components/sections/Achievements'

export const metadata: Metadata = {
  title: 'Achievements | MD Raisul Islam Rahad',
  description: 'Explore my achievements in robotics competitions, competitive programming, and leadership.',
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
