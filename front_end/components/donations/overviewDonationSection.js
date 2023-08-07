import React from 'react'
import styles from '../../styles/Donate/Donate.module.css';
import H1 from '../fonts/H1';
import theme from '../../styles/theme';
import H4 from '../fonts/H4';
import FIELDTEXT from '../fonts/FIELDTEXT';
import TITLE from '../fonts/TITLE';
import CcCardOverview from './ccCardOverview';
import Image from 'next/image';
export default function OverviewDonationSection({ totalAmount, setCurrentScreenIndex, firstName, lastName, email, selectedPaymentOption, ccNumber, reoccuringSelected }) {
    return (
        <div className={styles.overviewDonationSection}>
            <H1 color={theme.colors.BLACK} text={`Give $${totalAmount}`} />
            <div style={{ display: "flex", justifyContent: 'space-between', width: "42em", paddingTop: "3em" }}>
                <H4 color={theme.colors.BLACK} text='Giving details' />
                <div onClick={() => setCurrentScreenIndex(1)} className={styles.editText}>
                    <FIELDTEXT color={theme.colors.BLACK} text='Edit' />
                </div>
            </div>
            <div style={{ display: "flex", alignSelf: "flex-start", gap: "5em", paddingTop: "2em" }}>
                <div style={{}}>
                    <TITLE color={theme.colors.BLACK} text="name" />
                    <FIELDTEXT color={theme.colors.BLACK} text={`${firstName} ${lastName}`} />
                </div>
                <div style={{}}>
                    <TITLE color={theme.colors.BLACK} text="email" />
                    <FIELDTEXT color={theme.colors.BLACK} text={email} />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: 'space-between', width: "42em", paddingTop: "2em" }}>
                <H4 color={theme.colors.BLACK} text='Payment details' />
                <div onClick={() => setCurrentScreenIndex(2)} className={styles.editText}>
                    <FIELDTEXT color={theme.colors.BLACK} text='Edit' />
                </div>
            </div>
            <div style={{ display: "flex", alignSelf: "flex-start", paddingTop: "2em" }}>
                <div style={{}}>
                    <TITLE color={theme.colors.BLACK} text={selectedPaymentOption} />
                    <CcCardOverview
                        ccNumber={ccNumber}
                    />
                </div>
            </div>
            {reoccuringSelected ? (
                <>
                    <div style={{ display: "flex", alignSelf: "flex-start", paddingTop: "1em" }}>
                        <div>
                            <TITLE color={theme.colors.BLACK} text="Reoccurring donation" />
                            <div style={{ display: "flex", alignSelf: "flex-start", gap: "1em", paddingTop: ".4em" }}>
                                <Image
                                    src="img/icons/checkGreen.svg"
                                    alt="button"
                                    width={24}
                                    height={24}
                                    quality={100}
                                />
                                <FIELDTEXT color={theme.colors.BLACK} text="This amount will be donated monthly" />
                            </div>
                        </div>

                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    )
}
