import React from 'react'
import ImageNtext from '../components/hero/imageNtext'

export default function Letter() {
    return (
        <ImageNtext
            color1="#404E26"
            color2="#404E26"
            imageUrl="/../public/img/hero_images/fundraising.jpg"
            textParent='Resources'
            textChild='Fundraising Letter'
            headerText='Assistance Writing A Fundraising Letter'
            subText='Join us on a Mission Trip to Belarus and Israel! Use our resources to help you raise the necessary funds to travel.'
            imageFocus='center 30%'
        />
    )
}
