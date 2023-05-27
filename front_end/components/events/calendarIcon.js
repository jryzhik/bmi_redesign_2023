import React from 'react'
import styles from '../../styles/Events/Events.module.css';
import P from '../fonts/P';
import theme from '../../styles/theme';
import H2 from '../fonts/H2';
import SMBOLD from '../fonts/SMBOLD';

export default function CalendarIcon({month, day, year}) {
    return (
        <div className={styles.calendarIconContainer}>
            <div className={styles.calendarIconTop}>
                <P text={month} color={theme.colors.WHITE} />
            </div>
            <div className={styles.calendarIconBottom}>
                <H2 text={day}/>
                {year == null ? (
                    <></>
                ) : (
                    <SMBOLD text={year}/>
                )}
            </div>
        </div>
    )
}
