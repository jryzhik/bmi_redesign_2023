import React, { useState, useEffect } from 'react'
import RoundedPhoto from './roundedPhoto'
import styles from '../../styles/Images/Images.module.css';
import Image from 'next/image';
import H2NComponent from '../texts/h2NComponent';
import P from '../fonts/P';
import H4 from '../fonts/H4';
import Link from 'next/link';

export default function SpecificDonationGallery({ fundArray }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [booleanStyle, setBooleanStyle] = useState(styles.notFocusedImageWText)
    const [left, setLeft] = React.useState(0)
    const [right, setRight] = React.useState(0)
    const [center, setCenter] = React.useState(0)
    const [touchPosition, setTouchPosition] = useState(null)
    
    useEffect(() => {
        // Apply styles when the component mounts
        document.body.style.overflowX = "hidden";
    
        // Cleanup by removing the styles when the component unmounts
        return () => {
          document.body.style.overflowX = "";
        };
      }, []); // Empty dependency array ensures the effect runs only once on mount
    

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }
    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 1) {
            setCurrentIndex(currentIndex + 1)
            setRight(1)
            setCenter(1)
        }

        if (diff < -1) {
            setCurrentIndex(currentIndex - 1)
            setLeft(1)
            setCenter(1)
        }

        setTouchPosition(null)
    }


    function handleClickFront() {
        setCurrentIndex(currentIndex + 1)
        setRight(1)
        setCenter(1)
    }
    function handleClickBack() {
        setCurrentIndex(currentIndex - 1)
        setLeft(1)
        setCenter(1)

    }
    function customMod(a, n) {
        return (a - (n * Math.floor(a / n)))
    }
    function setToZero() {
        setLeft(0)
        setRight(0)
        setCenter(0)
    }
    return (
        <>
            <div className={styles.galleryBox}>
                <div className={styles.arrowsNews}>
                    <Image onClick={handleClickBack} src="img/icons/left_arrow_gallery.svg" alt='arrow' width={0} height={0} style={{ width: '50%', height: 'auto' }} />
                    <Image onClick={handleClickFront} src="img/icons/right_arrow_gallery.svg" alt='arrow' width={0} height={0} style={{ width: '50%', height: 'auto' }} />
                </div>
                <Link href={'/' + fundArray[customMod(currentIndex, fundArray.length)].url}>
                    <div className={styles.imageNComp}>
                        <div
                            className={styles.image}
                            onAnimationEnd={() => setToZero()}
                            left={left}
                            right={right}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                        >
                            <RoundedPhoto
                                imageUrl={fundArray[customMod(currentIndex, fundArray.length)].imageUrl}
                                passedStyles={booleanStyle}
                            />
                        </div>
                        <div style={{ opacity: '.7', marginBottom: '7em'}}>
                            <H4
                                text={fundArray[customMod(currentIndex, fundArray.length)].title}
                            />
                        </div>
                    </div>
                </Link>
                <Link href={'/' + fundArray[customMod(currentIndex + 1, fundArray.length)].url}>
                    <div className={styles.imageNComp}>
                        <div
                            className={styles.image}
                            onAnimationEnd={() => setToZero()}
                            center={center}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                        >
                            <RoundedPhoto
                                imageUrl={fundArray[customMod(currentIndex + 1, fundArray.length)].imageUrl}
                                passedStyles={styles.focusImageGallery}
                            />
                        </div>
                        <H2NComponent
                            primaryHeaderText={fundArray[customMod(currentIndex + 1, fundArray.length)].title}
                            SecondaryComponent={
                                <P text={fundArray[customMod(currentIndex + 1, fundArray.length)].description} />
                            }
                            secondaryAllign='center'
                        />
                    </div>
                </Link>
                <Link href={'/' + fundArray[customMod(currentIndex + 2, fundArray.length)].url}>
                    <div className={styles.imageNComp}>
                        <div
                            className={styles.image}
                            onAnimationEnd={() => setToZero()}
                            left={left}
                            right={right}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                        >
                            <RoundedPhoto
                                imageUrl={fundArray[customMod(currentIndex + 2, fundArray.length)].imageUrl}
                                passedStyles={booleanStyle}
                            />
                        </div>
                        <div style={{ opacity: '.7', marginBottom: '7em'}}>
                            <H4
                                text={fundArray[customMod(currentIndex + 2, fundArray.length)].title}
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
