import React from 'react'
import ImageNtext from '../components/hero/imageNtext'

export default function Gallery() {
  return (
    <ImageNtext
            color1="#B4C5CD"
            color2="#B4C5CD"
            imageUrl="/../public/img/hero_images/gallery.jpg"
            textParent='Resources'
            textChild='Gallery'
            headerText='View our contributions in digital format'
            subText='Explore our work on the ground in Belarus, Ukraine, Israel and the States'
            imageFocus={'center 40%'}
        />
  )
}
