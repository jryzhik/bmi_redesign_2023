import React, { useState } from 'react'
import H2 from '../fonts/H2'
import styles from '../../styles/Texts/Texts.module.css';
import Image from 'next/image';
import P from '../fonts/P';

export default function ExpandingText({title, secondaryComponent}) {
    const [expanded, setExpanded] = useState(false)

    function handleClick() {
        if (expanded == false) {
            setExpanded(true)
        } else {
            setExpanded(false)
        }
    }
    return (
        <div onClick={handleClick} className={styles.masterContainer}>
            <div className={styles.staticContainer}>
                <H2 text={title} />
                {expanded == false ? (
                    <Image src="/img/icons/down_arrowLarge.svg" alt="search" width={48} height={48} style={{ marginLeft: '6px' }} />
                ) : (
                    <Image src="/img/icons/Up_arrowLarge.svg" alt="search" width={48} height={48} style={{ marginLeft: '6px' }} />
                )}
            </div>
            {expanded == false ? (
                <div className={styles.hiddenText}></div>
            ) : (
            <div className={styles.expandPtag}>
                {secondaryComponent}
            </div>
            )}
            <div className={styles.underline}></div>
        </div>
    )
}
