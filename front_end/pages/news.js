import React from 'react'
import ImageNtext from '../components/hero/imageNtext'

export default function News() {
    return (
        <ImageNtext
            color1="#1C2530"
            color2="#202832"
            imageUrl="/../public/img/hero_images/news.jpg"
            textParent='Resources'
            textChild='News'
            headerText='Stay updated with all we’re doing'
            subText='Our monthly newsletter provides a quick recap of all the great things God is doing through Byelorussian Ministry to impact the next generation.'
            imageFocus={'center 45%'}
        />
    )
}
