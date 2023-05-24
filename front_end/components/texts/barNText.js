import React from 'react'
import styles from '../../styles/Texts/Texts.module.css';
import H2 from '../fonts/H2';
import P from '../fonts/P';
import theme from '../../styles/theme';

export default function BarNText({percentText, description, color}) {
    return (
        <div className={styles.headPar}>
            <div className={styles.barNText}>
                <div
                    className={styles.colorBar}
                    style={{ backgroundColor: color }}
                />
                <H2 text={percentText} />
            </div>
            <div className={styles.offsetLeft}>
                <P text={description} color={theme.colors.CHARCOAL} />
            </div>
        </div>
    )
}
