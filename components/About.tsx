
import Image from "next/image"
import Link from "next/link"

import picture from '@/public/picture.jpg'
import Photo7 from '@/public/Photo7.jpg'

export default function About() {
  return (
    <section id="about" className="pb-14">
      <div className="px-3 pb-8 bg-indigo-700 md:mx-4 h-fit rounded-t-[5rem] pt-14 sm:px-12">
        <h2 className="text-xl text-center sm:text-start sm:text-3xl uppercase font-bold">About Me</h2>
        <div className="flex mt-6 md:pt-3 md:mt-0 items-center flex-col gap-16 md:flex-row">
          <div className="md:w-2/3 text-lg text-center md:text-start gap-12 md:pb-5 flex items-center md:items-start flex-col">
            <p>I&apos;m <strong> Shirjeel Ahmad Azam </strong>, a multi-talented creative who specializes in both social media design and photography. With a passion for visual storytelling, I bring a unique blend of artistic skills to the table. <br className="mb-4" /> As a <strong>social media designer</strong>, I leverage my expertise in aesthetics, composition, and digital trends to create captivating and innovative designs. I understand the importance of effectively communicating brand messages and capturing the attention of audiences in todays digital landscape. From eye-catching banners to attention-grabbing posts and compelling infographics, I know how to create visuals that leave a lasting impression.</p>
            <Link className="bg-white px-6 py-3 w-fit rounded-full duration-150 hover:bg-gray-200 text-md text-gray-700" href="/designer">View my Designer Portfolio</Link>
          </div>
          <Image className="w-1/2 rounded-full lg:w-1/3" src={picture} width={1000} height={1000} alt="my picture" />
        </div>
      </div>
      <div className="custom-shape-divider-top-1688923280 md:px-4 box-border w-full">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
    </div>
    <div className="px-10 mt-10 flex flex-col gap-8 items-center lg:flex-row">
      <Image className="max-w-md w-11/12 md:w-fit md:max-w-xl min-w-0 rounded-xl" src={Photo7} width={4000} height={3000} alt="" />
      <div className="flex items-center lg:items-start flex-col gap-9">
        <p className="text-lg ">In addition to my design skills, I&apos;m also an avid photographer. With a keen eye for detail and a knack for capturing moments, I strive to create impactful and visually stunning images. Whether it&apos;s landscapes, portraits, or product photography, I know how to use lighting, composition, and perspective to create compelling visuals. <br /> Being well-versed in both social media design and photography allows me to offer a unique perspective and deliver comprehensive visual solutions. I understand the importance of adapting to different platforms, whether it&apos;s designing shareable content or capturing attention-grabbing images tailored to specific social media channels.</p>
        <Link className="bg-white px-6 py-3 w-fit rounded-full duration-150 hover:bg-gray-200 text-md text-gray-700" href="/photographer">View my Photographer Portfolio</Link>
      </div>
    </div>
    </section>
  )
}
