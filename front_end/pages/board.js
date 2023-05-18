import React from 'react'
import ImageNtext from '../components/hero/imageNtext'

export default function Board() {
    return (
        <ImageNtext
            color1="#B1BFBD"
            color2="#B6C2BE"
            imageUrl="/../public/img/hero_images/board.jpg"
            textParent='Who We Are'
            textChild='Board Members'
            headerText='Discover our team leading the charge'
            subText='Board members are responsible in keeping the organization’s goals and activity in check.'
        />
    )
}
