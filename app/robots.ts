import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://raisulrahad.vercel.app/sitemap.xml',
    host: 'https://raisulrahad.vercel.app',
  }
}
