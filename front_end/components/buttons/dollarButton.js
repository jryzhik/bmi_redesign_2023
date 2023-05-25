import React from 'react'
import styles from '../../styles/Donate/ColorDonate.module.css';
import NT from '../fonts/NT';

export default function DollarButton({text}) {
    return (
        <div className={styles.dollarButton}>
            <NT text={text}/>
        </div>
    )
}
