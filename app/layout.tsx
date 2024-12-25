'use client'

import '@/styles/globals.css'
import Script from 'next/script'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thor Services - Transform IT Complexity into Results-Driven Simplicity',
  description: 'Thor Services helps organizations take control of IT chaos, simplify operations, enhance security, and drive success through innovative IT solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
        
        {/* HubSpot Tracking Code */}
        <Script
          strategy="afterInteractive"
          src="//js.hs-scripts.com/4864825.js"
          id="hs-script-loader"
        />
      </body>
    </html>
  )
}
