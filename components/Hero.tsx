"use client"


export default function Hero() {

  return (
    <section id="home" className="bg-slate-900">
      <div className="relative isolate px-6 pt-15 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0077cb] to-[#4c3fff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl py-32 sm:py-40 lg:pt-44 lg:pb-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-wide leading-1 bg-gradient-to-tr from-indigo-700 to-indigo-100 text-transparent bg-clip-text sm:text-7xl md:text-8xl">
              Hi, I&apos;m Shirjeel Ahmad Azam
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-8 ">
              I&apos;m a designer and Photographer from Pakistan.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 md:gap-x-12">
              <a
                href="#contact"
                className="rounded-full bg-indigo-600 px-7 py-2.5 duration-100 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Me
              </a>
              <a href="#works" className="text-sm hover:text-indigo-300 font-semibold leading-6 ">
                My Works <span aria-hidden="true" className="pl-1">→</span>
              </a>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  )
}
