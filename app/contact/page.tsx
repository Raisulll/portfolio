import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Contact } from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact Raisul | MD Raisul Islam Rahad',
  description:
    "Get in touch with Raisul Islam Rahad (MD Raisul Islam Rahad) — Embedded Software Engineer at Siliconova. Open to collaboration, project inquiries, and opportunities.",
  alternates: {
    canonical: 'https://raisulrahad.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Raisul | MD Raisul Islam Rahad',
    description: "Reach out to Raisul Islam Rahad for collaboration or project inquiries.",
    url: 'https://raisulrahad.vercel.app/contact',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
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
