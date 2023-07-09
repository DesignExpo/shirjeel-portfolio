import Image from 'next/image'
import Hero from '@/components/Hero'
import Works from '@/components/Design/Works'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  )
}
