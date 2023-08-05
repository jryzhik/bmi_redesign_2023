import React from 'react'
import styles from '../../styles/Donate/Donate.module.css';
import H1 from '../fonts/H1';
import theme from '../../styles/theme';
import H4 from '../fonts/H4';
import FIELDTEXT from '../fonts/FIELDTEXT';
export default function OverviewDonationSection({ totalAmount, setCurrentScreenIndex }) {
    return (
        <div className={styles.overviewDonationSection}>
            <H1 color={theme.colors.BLACK} text={`Give $${totalAmount}`} />
            <div style={{ display: "flex", justifyContent: 'space-between', width: "40.625em", paddingTop: "3em" }}>
                <H4 color={theme.colors.BLACK} text='Giving details' />
                <div onClick={() => setCurrentScreenIndex(1)} className={styles.editText}>
                    <FIELDTEXT color={theme.colors.BLACK} text='Edit' />
                </div>
            </div>
        </div>
    )
}
