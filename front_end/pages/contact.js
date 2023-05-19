import React from 'react'
import ImageNtext from '../components/hero/imageNtext'

export default function Contact() {
  return (
    <ImageNtext
            color1="#1F2010"
            color2="#786E33"
            imageUrl="/../public/img/hero_images/contact.jpg"
            textParent='contact us'
            textChild=''
            headerText='We’d love to hear any questions you have'
            subText='The purpose of the corporation is to provide support services for orphan children and help construct church buildings in the countries of Belarus and Ukraine.'
            imageFocus={'center 40%'}
        />
  )
}
