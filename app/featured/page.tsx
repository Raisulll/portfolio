import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Featured } from '@/components/sections/Featured'

export const metadata: Metadata = {
  title: 'Feature | MD Raisul Islam Rahad',
  description:
    'Press, broadcast and recognition coverage of MIST Mongol Barota across national and international robotics competitions.',
}

export default function FeaturedPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Featured />
      </main>
      <Footer />
    </>
  )
}
