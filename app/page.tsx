import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { Highlights } from '@/components/sections/Highlights'
import { FeaturedProject } from '@/components/sections/FeaturedProject'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Highlights />
        <FeaturedProject />
      </main>
      <Footer />
    </>
  )
}
