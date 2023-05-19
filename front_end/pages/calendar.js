import React from 'react'
import ImageNtext from '../components/hero/imageNtext'

export default function Calendar() {
    return (
        <ImageNtext
            color1="#040504"
            color2="#050502"
            imageUrl="/../public/img/hero_images/events.jpg"
            textParent='Events'
            textChild='Calendar'
            headerText='Upcoming Events'
            subText='Discover important dates for events happening soon and in the future.'
            imageFocus={'center 40%'}
        />
    )
}
