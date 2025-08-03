import '@/app/globals.css'

// types
import type { Metadata } from 'next'

// fonts imported
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

// Toaster Provider
import { Toaster } from '@/components/ui/sonner'

const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

// metadata
export const metadata: Metadata = {
  title: 'Study App',
  description: 'For better self-improvement',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${interFont.variable} ${jetbrainsMono.variable} ${jetbrainsMono.className} antialiased`}
      >
        <main>{children}</main>
        <Toaster richColors closeButton />
      </body>
    </html>
  )
}
