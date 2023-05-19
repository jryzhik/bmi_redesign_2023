import React from 'react'
import ImageNtext from '../components/hero/imageNtext'

export default function Donate() {
  return (
    <ImageNtext
            color1="#383B39"
            color2="#383B39"
            imageUrl="/../public/img/hero_images/donate.jpg"
            textParent='Donate'
            textChild='General Donation'
            headerText='Support us in changing the world for Christ'
            subText='"Go into all the world and proclaim the gospel to the whole creation"'
            imageFocus={'center 45%'}
        />
  )
}
