import React, { useEffect, useState } from 'react'
import ImageNGradient from '../components/hero/imageNGradient'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import styles from '../styles/Hero/Hero.module.css';



export default function brest() {
    const [offsetY1, setoffsetY1] = useState(630)
    const [offsetX1, setoffsetX1] = useState(0)
    const [scale1, setscale1] = useState(1)
    const [offsetY2, setoffsetY2] = useState(630)
    const [offsetX2, setoffsetX2] = useState(0)
    const [scale2, setscale2] = useState(1)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth >= 1350) {
            setoffsetY1(-570)
            setoffsetX1(0)
            setscale1(1)
            setoffsetY2(50)
            setoffsetX2(150)
            setscale2(1.9)
        }
        else if (window.innerWidth <= 450) {
            setoffsetY1(-130)
            setoffsetX1(-150)
            setscale1(1.5)
            setoffsetY2(50)
            setoffsetX2(60)
            setscale2(3)
        }
        else {
            // setoffsetY1(Math.ceil((630 - (1350 - window.innerWidth ) / 1.523) / 10.0) * 10)
            setoffsetY1(-570 + (1350 - window.innerWidth) / 2.181818)
            setoffsetX1(0 - (1350 - window.innerWidth) / 9.4)
            setscale1(1 + (1350 - window.innerWidth) * .0005208333333)
            setoffsetY2(50 - (1350 - window.innerWidth) / 16)
            setoffsetX2(150 - (1350 - window.innerWidth) / 5.3)
            setscale2(1 + (1350 - window.innerWidth) * .00375)

        }
        // console.log("scale1:", scale1, "offsetX1:", offsetX1, "OFFESETY:", offsetY1, "Window Size: ", window.innerWidth)
        console.log("scale2:", scale1, "offsetX:", offsetX2, "OFFESETY:", offsetY2, "Window Size: ", window.innerWidth)
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
            imageFocus={offsetX1 + 'px ' + offsetY1 + 'px'}
            scale1={scale1}
            scale2={scale2}
            content={
                <div className={styles.paddingContent}>
                    <HeaderNComponent
                        primaryHeaderText='Integrity'
                        SecondaryComponent={
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.WHITE} />
                        }
                        secondaryAllign='center'
                        color={theme.colors.WHITE}
                    />
                    <HeaderNComponent
                        primaryHeaderText='Integrity'
                        SecondaryComponent={
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                        }
                        secondaryAllign='center'
                    />
                    <HeaderNComponent
                        primaryHeaderText='Integrity'
                        SecondaryComponent={
                            <>
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            </>
                        }
                        secondaryAllign='center'
                    />
                    <HeaderNComponent
                        primaryHeaderText='Integrity'
                        SecondaryComponent={
                            <>
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            </>
                        }
                        secondaryAllign='center'
                    />
                    <HeaderNComponent
                        primaryHeaderText='Integrity'
                        SecondaryComponent={
                            <>
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            </>
                        }
                        secondaryAllign='center'
                    />
                    <HeaderNComponent
                        primaryHeaderText='Integrity'
                        SecondaryComponent={
                            <>
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            </>
                        }
                        secondaryAllign='center'
                    />                    
                </div>
            }
        />
    )
}
