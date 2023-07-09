import './globals.css'
import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'

const redhat = Red_Hat_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shirjeel Ahmads Portfolio',
  description: 'I am a Designer and Photographer from Pakistan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='text-white bg-slate-900'>
      <body className={redhat.className}>
        <Navbar />
        {children}
        <Contact />
      </body>
    </html>
  )
}
