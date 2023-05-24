import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Texts/Texts.module.css';
import H2 from '../fonts/H2';
import P from '../fonts/P';
import theme from '../../styles/theme';
import BarNText from './barNText';

export default function ImageNPercentage({ passedImage, percentText, description, color }) {
    return (
        <>
            <div className={styles.hBox}>
                <div className={styles.imageCircle} >
                    <Image
                        src={passedImage}
                        width={1440}
                        height={1081}
                        quality={100}
                        style={{
                            objectFit: 'cover',
                            // Adjust the position to focus on the desired part of the image
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                        }}
                    />
                </div>
                <BarNText percentText={percentText + '%'} description={description} color={color}/>
            </div>
        </>
    )
}
