import React from 'react'
import styles from '../../styles/Texts/Texts.module.css';
import H2 from '../fonts/H2';
import P from '../fonts/P';

export default function BarNText({percentText, description, color, colorText, opacity}) {
    return (
        <div className={styles.headPar}>
            <div className={styles.barNText}>
                <div
                    className={styles.colorBar}
                    style={{ backgroundColor: color, opacity: opacity}}
                />
                <H2 text={percentText} color={colorText}/>
            </div>
            <div className={styles.offsetLeft}>
                <P text={description} color={colorText} />
            </div>
        </div>
    )
}
