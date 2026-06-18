import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Experience } from '@/components/sections/Experience'

export const metadata: Metadata = {
  title: 'Experience | MD Raisul Islam Rahad',
  description: 'Explore my professional experience including roles at MIST Mars Rover Society and Computer Club.',
}

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Experience />
      </main>
      <Footer />
    </>
  )
}
