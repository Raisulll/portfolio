import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { About } from '@/components/sections/About'

export const metadata: Metadata = {
  title: 'About | MD Raisul Islam Rahad',
  description: 'Learn more about my background, education, and technical skills in robotics and full-stack development.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <About />
      </main>
      <Footer />
    </>
  )
}
