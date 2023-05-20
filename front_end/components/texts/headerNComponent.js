import React from 'react'
import styles from '/Users/jamesryzhkov/Documents/Business/websites/BMI2023/front_end/styles/Texts/Texts.module.css'
import H1 from '../fonts/H1'
import P from '../fonts/P'
export default function HeaderNComponent({ primaryHeaderText, SecondaryComponent }) {
    return (
        <div className={styles.container}>
            <div className={styles.primaryHeader}>
                <H1 text={primaryHeaderText}/>
            </div>
            <div className={styles.subComponent}>
                {SecondaryComponent}
            </div>
        </div>
    )
}
