
import Image from 'next/image'

import {Designer} from '@/components/ImagesData'

const ImagesSize = [900, 800]

export const Images = Designer.map((images, i) => {
    return (
        <div key={i} className="grid gap-4">
            {images.map((image) => {
                return (
                    <div key={image.id}>
                        <Image className="h-auto max-w-full rounded-lg" key={image.id} src={image.link} alt="" width={ImagesSize[0]} height={ImagesSize[1]}/>
                    </div>
                )
            }
        )}
        </div>
    )
})

