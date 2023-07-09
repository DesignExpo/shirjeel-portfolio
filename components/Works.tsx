
import Image from 'next/image'

import Show1 from '@/public/Show1.jpg'
import Show2 from '@/public/Show2.jpg'
import Show3 from '@/public/Show3.jpg'
import Show4 from '@/public/Show4.jpg'
import Show5 from '@/public/Show5.jpg'
import Show6 from '@/public/Show6.jpg'
import Show7 from '@/public/Show7.jpg'
import Show8 from '@/public/Show8.jpg'
import Show9 from '@/public/Show9.jpg'

const Images = [Show1, Show2, Show3, Show4, Show5, Show6, Show7, Show8, Show9]

const ImagesSize = [900, 800]

export default function Works() {

  return (
    <section id='works' className='px-5 sm:px-12'>
        <h2 className="text-xl text-center sm:text-start sm:text-3xl uppercase font-bold">My Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-4">
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={Images[0]} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={Images[1]} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={Images[2]} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={Images[3]} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={Images[4]} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={Images[5]} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={Images[6]} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={Images[7]} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-full rounded-lg" src={Images[8]} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
                    </div>
                </div>
            </div>
        </section>
  )
}
