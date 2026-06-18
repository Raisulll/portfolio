import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Contact } from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact | MD Raisul Islam Rahad',
  description: 'Get in touch for collaboration opportunities, project inquiries, or just to say hello.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  )
}
