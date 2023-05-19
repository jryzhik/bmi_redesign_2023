import React from 'react'
import ImageNtext from '../components/hero/imageNtext'

export default function Brief() {
  return (
    <ImageNtext
            color1="#2C372F"
            color2="#2C372F"
            imageUrl="/../public/img/hero_images/brief.jpg"
            textParent='Resources'
            textChild='Things to Know'
            headerText='A helpful guide in all you should know before traveling '
            subText='Each country has their own specific rules and regulations. Know them before you visit the country!'
            imageFocus='center 40%'
        />
  )
}
