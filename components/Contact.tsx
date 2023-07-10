
import Image from 'next/image'
import Instagram from '@/public/instagram.png'
import Facebook from '@/public/facebook.png'
import Fiverr from '@/public/fiverr.png'

export default function Contact() {
  return (
    <section id='contact' className="flex flex-col justify-around mt-10 md:mt-0 md:flex-row md:items-center pl-7">
        <div className='pr-5 w-full'>
            <h2 className='text-3xl font-semibold'>Get in touch</h2>
            <p className='mt-2 text-gray-300'>Want to work together or just want to say hi? Feel free to reach out to me.</p>
        </div>
        <div className='flex items-center w-full justify-around h-32 md:h-64'>
            <a target='_blank' href="https://www.instagram.com/shirjeelshots/"><Image src={Instagram} alt='Instagram' height={60} width={60} /></a>
            <a target='_blank' href="https://www.facebook.com/Shirjeeelahmad?mibextid=ZbWKwL"><Image src={Facebook} alt='Facebook' height={60} width={60} /></a>
            <a target='_blank' href="https://www.fiverr.com/thedesignexpo?"><Image src={Fiverr} alt='Fiverr' height={60} width={60} /></a>
        </div>
    </section>
  )
}
