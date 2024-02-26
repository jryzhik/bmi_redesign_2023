import React from 'react'
import H2 from '../fonts/H2'
import styles from '../../styles/Texts/Texts.module.css';
import Image from 'next/image';
import quoteImage from '../../public/img/icons/quotes.svg'
import H5 from '../fonts/H5';
import TITLE from '../fonts/TITLE';
import ST from '../fonts/ST';

export default function Quote({ imageUrl, author, role, organization, quoteText, color, colorQuote }) {
    return (
        <div className={styles.quoteContainer}>
            <Image
                style={colorQuote}
                src={quoteImage}
                alt='quote'
            />
            <H2 color={color} text={quoteText} />
            <div className={styles.iconNText}>
                {imageUrl === null ? (<></>) : (<Image
                    className={styles.profileIcon}
                    src={imageUrl} // Use the imageUrl prop here
                    alt="Schmidt"
                    width={140}
                    height={140}
                    quality={100}
                />)}
                <div className={styles.nameNRole}>
                    <div className={styles.noMargin}>
                        <H5 color={color} text={author} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: ".2rem",
                        alignItems: "center"
                    }}>
                        <TITLE color={color} text={role} />
                        <div style={{
                            paddingBottom: ".1rem"
                        }}>
                            <ST color={color} text={organization} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
