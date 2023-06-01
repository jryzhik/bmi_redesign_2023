import React, { useEffect, useState } from 'react'
import ImageNGradient from '../components/hero/imageNGradient'

export default function brest() {
    const [offsetY, setoffsetY] = useState(630)
    const [offsetX, setoffsetX] = useState(0)
    const [scale, setScale] = useState(1)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth >= 1350) {
            setoffsetY(630)
            setoffsetX(0)
            setScale(1)
        } else if (window.innerWidth <= 390) {
            setoffsetY(0)
            setoffsetX(-30)
            setScale(1.5)
        }
        else {
            // setoffsetY(Math.ceil((630 - (1350 - window.innerWidth ) / 1.523) / 10.0) * 10)
            setoffsetY(630 - (1350 - window.innerWidth) / 1.523)
            setoffsetX(0 - (1350 - window.innerWidth) / 32)
            setScale(1 + (1350 - window.innerWidth) * .0005208333333)

        }
        console.log("OFFSETX:", offsetX, "OFFESETY:", offsetY, "Window Size: ", window.innerWidth)
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    // calculate values on initial load
    useEffect(() => {
        handleResize()
    }, [])

    return (
        <ImageNGradient
            color1="#312822"
            color2="#63351A"
            imageUrlTop="/../public/img/hero_images/brest_bible_church.jpg"
            imageUrlBottom="/../public/img/hero_images/brest_bible_church_bottom.jpg"
            textParent='Donate'
            textChild='BBC'
            headerText='Brest Bible Church building fund donations'
            subText='Brest Bible Church is developing into a christian stronghold that will change the lives of thousands of young people.'
            // imageFocus={'0 -200px'}
            imageFocus={offsetX + 'px -' + offsetY + 'px'}
            scale={scale}
        />
    )
}
