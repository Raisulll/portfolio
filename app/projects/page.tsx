import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Projects } from '@/components/sections/Projects'

export const metadata: Metadata = {
  title: 'Projects | MD Raisul Islam Rahad',
  description: 'Explore my portfolio of robotics projects, web applications, and AI-powered systems.',
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Projects />
      </main>
      <Footer />
    </>
  )
}
