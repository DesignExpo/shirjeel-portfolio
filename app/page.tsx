import Image from 'next/image'
import Hero from '@/components/Hero'
import Works from '@/components/Works'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='bg-indigo-700 pb-32 rounded-t-[5rem]'>
        <About />
        <Works />
      </div>
      <Contact />
    </main>
  )
}
