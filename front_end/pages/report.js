import React from 'react'
import ImageNtext from '../components/hero/imageNtext'

export default function report() {
    return (
        <ImageNtext
            color1="#7FA1B8"
            color2="#B7C9D1"
            imageUrl="/../public/img/hero_images/annual_report.jpg"
            textParent='Who We Are'
            textChild='Annual Report'
            headerText='We are transparent with our spending and finances'
            subText='We are here to make a difference in the world. Not make a profit.'
        />
    )
}
