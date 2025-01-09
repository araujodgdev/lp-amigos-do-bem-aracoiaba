'use client'    
import { CldImage, CldImageProps } from 'next-cloudinary'

export default function PictureContainer(props: CldImageProps) {
    return (
        <CldImage
            className="rounded-md w-96 hover:cursor-zoom-in md:brightness-75 md:hover:brightness-110 md:hover:scale-105 transition-transform"
            {...props}
        />
    )
}