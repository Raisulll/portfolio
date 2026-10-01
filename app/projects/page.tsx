import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Projects } from '@/components/sections/Projects'

export const metadata: Metadata = {
  title: "Raisul's Projects | MD Raisul Islam Rahad — Portfolio",
  description:
    "Explore the robotics, embedded systems, and web development projects of Raisul Islam Rahad — including Mars Rover systems for URC 2026, autonomous robots, and full-stack web platforms.",
  alternates: {
    canonical: 'https://raisulrahad.vercel.app/projects',
  },
  openGraph: {
    title: "Raisul's Projects | MD Raisul Islam Rahad",
    description: "Robotics, embedded systems, and web projects by Raisul Islam Rahad.",
    url: 'https://raisulrahad.vercel.app/projects',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
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
