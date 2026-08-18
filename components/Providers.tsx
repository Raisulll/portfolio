'use client'

import { ThemeProvider } from 'next-themes'
import { InteractiveFX } from './InteractiveFX'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <InteractiveFX />
    </ThemeProvider>
  )
}
