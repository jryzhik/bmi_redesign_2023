import React from 'react';
import styles from '../../styles/Donate/Donate.module.css';
import ST from '../fonts/ST';
import theme from '../../styles/theme';
import TITLE from '../fonts/TITLE';
import EcfaInfo from '../icons/ecfaInfo';
import exitIcon from '../../public/img/icons/exit.svg';
import Image from 'next/image';
import MobileOverviewDonationSection from './mobileOverviewDonationSection';
import MobileSelectPaymentSection from './mobileSelectPaymentSection';
import MobileEnterPaymentDetailsSection from './mobileEnterPaymentDetailsSection';


export default function MobileMasterForm({ firstName, lastName, email, selectedPaymentOption, fund, resetDonation, totalAmount, setCustomDollarValue, setreoccuringSelected, reoccuringSelected, setfeeOptIn, feeOptIn, stripeFeeAmount, currentScreenIndex, nextPageNValidate, customDollarValue, paymentButtonClickHandle }) {

    return (
        <div className={styles.popup_overlay}>
            <div className={styles.popup_container}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                    <div style={{ display: 'flex', gap: '.2rem', alignItems: 'center', alignSelf: "center" }}>
                        <ST color={theme.colors.CHARCOAL} text="Designation:" />
                        <TITLE color={theme.colors.CHARCOAL} text={`${fund} FUND`} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <EcfaInfo />
                    </div>

                </div>
                <div className={styles.exitIconMobileWrapper} onClick={() => resetDonation()}>
                    <div className={styles.exitIconMobile}>
                        <Image
                            src={exitIcon}
                            alt="Schmidt"
                            width={30}
                            height={30}
                            quality={100}
                        />
                    </div>
                </div>
                {currentScreenIndex === 1 ? (
                    <MobileOverviewDonationSection
                        setCustomDollarValue={setCustomDollarValue}
                        totalAmount={totalAmount}
                        setreoccuringSelected={setreoccuringSelected}
                        reoccuringSelected={reoccuringSelected}
                        feeOptIn={feeOptIn}
                        setfeeOptIn={setfeeOptIn}
                        stripeFeeAmount={((customDollarValue * parseFloat(process.env.NEXT_PUBLIC_STRIPE_FEE_PERCENT) / 100) + parseFloat(process.env.NEXT_PUBLIC_STRIPE_CONSTANT_AMOUNT)).toFixed(2)}
                        currentScreenIndex={currentScreenIndex}
                        nextPageNValidate={nextPageNValidate}
                    />
                ) : (
                    <></>
                )}
                {currentScreenIndex === 2 ? (
                    <MobileSelectPaymentSection
                        paymentButtonClickHandle={paymentButtonClickHandle}
                    />
                ) : (
                    <></>
                )}
                {currentScreenIndex === 3 ? (
                    <MobileEnterPaymentDetailsSection
                        selectedPaymentOption={selectedPaymentOption}
                        totalAmount={totalAmount}
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        fund={fund}
                    />
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}
