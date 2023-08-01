import React from 'react'
import H2 from '../fonts/H2'
import theme from '../../styles/theme'
import styles from '../../styles/Texts/Texts.module.css';
import Image from 'next/image';
import quoteImage from '../../public/img/icons/quotes.svg'
import H5 from '../fonts/H5';
import TITLE from '../fonts/TITLE';
import ST from '../fonts/ST';

export default function Quote({ imageUrl, author, role, organization }) {
    return (
        <div className={styles.quoteContainer}>
            <Image src={quoteImage} alt='quote' />
            <H2 color={theme.colors.BLACK} text="There is a great openness; and we have the privilege of partnering with Belarus’ pastors to start churches and reach people for the Lord.”" />
            <div className={styles.iconNText}>
                <Image
                    className={styles.profileIcon}
                    src={imageUrl} // Use the imageUrl prop here
                    alt="Schmidt"
                    width={140}
                    height={140}
                    quality={100}
                />
                <div className={styles.nameNRole}>
                    <div className={styles.noMargin}>
                        <H5 color={theme.colors.BLACK} text={author} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: ".2rem",
                        alignItems: "center"
                    }}>
                        <TITLE color={theme.colors.BLACK} text={role} />
                        <div style={{
                            paddingBottom: ".1rem"
                        }}>
                            <ST color={theme.colors.BLACK} text={organization} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
