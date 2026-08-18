import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Biography } from '@/components/sections/Biography'

export const metadata: Metadata = {
  title: 'Biography | MD Raisul Islam Rahad',
  description:
    'Background, education, professional experience, and technical skills of MD Raisul Islam Rahad — software engineer and robotics team lead.',
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
