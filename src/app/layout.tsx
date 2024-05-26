import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'BJA Members',
  description: 'BJA Dashboard',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistMono.variable, GeistSans.variable)}>{children}</body>
    </html>
  )
}
