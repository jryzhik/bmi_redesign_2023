import React, { useState, useEffect } from 'react';
import FiveButtonsDonate from './FiveButtonsDonate';
import P from '../fonts/P';
import styles from '../../styles/Donate/Donate.module.css';
import Image from 'next/image';
import exitIcon from '../../public/img/icons/exit.svg';
import ST from '../fonts/ST';
import theme from '../../styles/theme';
import TITLE from '../fonts/TITLE';
import EcfaInfo from '../icons/ecfaInfo';
import GivingInfoSection from './givingInfoSection';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import RoundedButton from '../buttons/roundedButton';
import passedStyle from '../../styles/Donate/ColorDonate.module.css';
import SelectPaymentSection from './selectPaymentSection';
import EnterPaymentDetailsSection from './enterPaymentDetailsSection';
import OverviewDonationSection from './overviewDonationSection';
import ThankyouSection from './thankyouSection';
import HeaderNComponent from '../texts/headerNComponent';
import MobileMasterForm from './mobileMasterForm';


export default function DonationMasterForm({ headerText, secondaryText, secondaryAllign, buttonStyle, color, fund }) {
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentScreenIndex, setCurrentScreenIndex] = useState(1)

    const [customDollarValue, setCustomDollarValue] = useState('');
    const [customDollarValueValid, setCustomDollarValueValid] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [firstNameValid, setFirstNameValid] = useState(false);

    const [lastName, setLastName] = useState('');
    const [lastNameValid, setLastNameValid] = useState(false);

    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);

    const [ccNumber, setccNumber] = useState('');
    const [ccNumberValid, setccNumberValid] = useState(false);

    const [expiration, setExpiration] = useState('');
    const [expirationValid, setExpirationValid] = useState(false);

    const [cvv, setCvv] = useState('');
    const [cvvValid, setCvvValid] = useState(false)

    const [reoccuringSelected, setreoccuringSelected] = useState(false)
    const [feeOptIn, setfeeOptIn] = useState(false)

    const [totalAmount, setTotalAmount] = useState('')
    const [selectedPaymentOption, setSelectedPaymentOption] = useState('credit card')

    useEffect(() => {
        if (feeOptIn) {
            const stripeFeeAmount = ((customDollarValue * parseFloat(process.env.NEXT_PUBLIC_STRIPE_FEE_PERCENT) / 100) + parseFloat(process.env.NEXT_PUBLIC_STRIPE_CONSTANT_AMOUNT)).toFixed(2);
            const total = parseFloat(customDollarValue) + parseFloat(stripeFeeAmount);

            setTotalAmount(total.toFixed(2));
        } else {
            setTotalAmount(customDollarValue)
        }
    }, [customDollarValue, feeOptIn]);

    function resetDonation() {
        setPopupVisible(false)
        setCurrentScreenIndex(1)
        setFirstName('')
        setLastName('')
        setCustomDollarValue('')
        setTotalAmount('')
        setEmail('')
        setFirstNameValid(false)
        setLastNameValid(false)
        setCustomDollarValueValid(false)
        setEmailValid(false)
        setreoccuringSelected(false)
        setfeeOptIn(false)

    }
    const setFirstNamePapa = (value) => {
        setFirstName(value);
        if (value !== '') {
            setFirstNameValid(true);
        } else {
            setFirstNameValid(false)
        }
    };
    const setCvvPapa = (value) => {
        setCvv(value);
        if (value !== '' && value.length >= 2) {
            setCvvValid(true)
        } else {
            setCvvValid(false)
        }
    }
    const setccNumberPapa = (value) => {
        const isValidLength = value.length === 15 || value.length === 16;
        const startsWithValidDigit = Number(value.charAt(0)) >= 3 && Number(value.charAt(0)) <= 6;

        if (isValidLength && startsWithValidDigit && luhnAlgo(value)) {
            setccNumber(value);
            setccNumberValid(true);
        } else {
            setccNumberValid(false);
        }
    };
    const setExpirationPapa = (value) => {
        const month = Number(value.substring(0, 2));
        const year = Number(value.substring(3, 5));
        let currentYear = new Date().getFullYear() % 100;
        let currentMonth = new Date().getMonth() + 1

        if (year == currentYear) {
            if (month <= currentMonth) {
                setExpirationValid(false);
            } else {
                setExpiration(value);
                setExpirationValid(true);
            }
        } else if (month <= 12 && year >= currentYear) {
            setExpiration(value);
            setExpirationValid(true);
        } else {
            setExpirationValid(false);
        }
    };
    const setLastNamePapa = (value) => {
        setLastName(value);
        if (value !== '') {
            setLastNameValid(true);
        } else {
            setLastNameValid(false)
        }
    };

    const handleEmailChange = (value) => {
        // Regular expression to match email format with valid TLD
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(value)) {
            setEmail(value);
            setEmailValid(true);
        } else {
            console.log('Invalid email format');
            setEmailValid(false);
        }

        console.log('EMAIL:', email);
    };

    const masterCallBack = (value) => {
        setPopupVisible(true);
        setCustomDollarValue(value);
        setTotalAmount(value)
        if (value !== '') {
            setCustomDollarValueValid(true);
        } else {
            setCustomDollarValueValid(false)
        }
    };

    const handleCustomDollarChange = (value) => {
        setCustomDollarValue(value);
        if (value !== '') {
            setCustomDollarValueValid(true);
        }
    };

    function nextPageNValidate() {
        if ((currentScreenIndex == 1) && totalAmount != '') {
            setCurrentScreenIndex(2)
        } else if ((currentScreenIndex == 3) && ccNumberValid && expirationValid && cvvValid) {
            setCurrentScreenIndex(4)
        } else if (currentScreenIndex == 4) {
            setCurrentScreenIndex(5)
        } else if (currentScreenIndex == 5) {
            setPopupVisible(false)
            resetDonation()
        }
    }
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Initial window width
        setWindowWidth(window.innerWidth);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    function paymentProviderButtonPapaHandle(value) {
        if (currentScreenIndex == 2) {
            setSelectedPaymentOption(value)
            setCurrentScreenIndex(3)
        }
    }
    return (
        <>
            {console.log("firstName: ", firstName, "lastName: ", lastName, "email: ", email, "customDollarValue: ", customDollarValue, "creditcard number: ", ccNumber, "ccNumberValid: ", ccNumberValid, "Expiration: ", expiration, "Expiration Valid?: ", expirationValid, "CVV: ", cvv, "Monthly?: ", reoccuringSelected, "fee opt in: ", feeOptIn, " TOTAL AMOUNT ", totalAmount)}
            {popupVisible ? (
                windowWidth < 900 ? (
                    <MobileMasterForm
                        fund={fund}
                        resetDonation={resetDonation}
                        setCustomDollarValue={setCustomDollarValue}
                        totalAmount={totalAmount}
                        setreoccuringSelected={setreoccuringSelected}
                        reoccuringSelected={reoccuringSelected}
                        feeOptIn={feeOptIn}
                        setfeeOptIn={setfeeOptIn}
                        stripeFeeAmount={((customDollarValue * parseFloat(process.env.NEXT_PUBLIC_STRIPE_FEE_PERCENT) / 100) + parseFloat(process.env.NEXT_PUBLIC_STRIPE_CONSTANT_AMOUNT)).toFixed(2)}
                        currentScreenIndex={currentScreenIndex}
                        nextPageNValidate={nextPageNValidate}
                        customDollarValue={customDollarValue}
                        paymentButtonClickHandle={paymentProviderButtonPapaHandle}
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        selectedPaymentOption={selectedPaymentOption}
                        


                    />
                ) : (
                    <div className={styles.formContainerPOP}>
                        <div className={styles.exitIcon} onClick={() => resetDonation()}>
                            <Image
                                className={styles.exitIcon}
                                src={exitIcon}
                                alt="Schmidt"
                                width={30}
                                height={30}
                                quality={100}
                            />
                        </div>
                        <div className={styles.headerForm}>
                            <div style={{ display: 'flex', gap: '.2rem', alignItems: 'center' }}>
                                <ST color={theme.colors.CHARCOAL} text="Funds Go Towards:" />
                                <TITLE color={theme.colors.CHARCOAL} text={fund} />
                            </div>
                            <EcfaInfo />
                        </div>
                        {currentScreenIndex === 1 ? (
                            <OverviewDonationSection
                                setCustomDollarValue={setCustomDollarValue}
                                totalAmount={totalAmount}
                                setCurrentScreenIndex={setCurrentScreenIndex}
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                selectedPaymentOption={selectedPaymentOption}
                                ccNumber={ccNumber}
                                reoccuringSelected={reoccuringSelected}
                                feeOptIn={feeOptIn}
                                setfeeOptIn={setfeeOptIn}
                                setreoccuringSelected={setreoccuringSelected}
                                stripeFeeAmount={((customDollarValue * parseFloat(process.env.NEXT_PUBLIC_STRIPE_FEE_PERCENT) / 100) + parseFloat(process.env.NEXT_PUBLIC_STRIPE_CONSTANT_AMOUNT)).toFixed(2)}

                            />
                        ) : (
                            <></>
                        )}
                        {currentScreenIndex === 2 ? (
                            <SelectPaymentSection
                                paymentButtonClickHandle={paymentProviderButtonPapaHandle}
                            />
                        ) : (
                            <></>
                        )}
                        {currentScreenIndex === 3 ? (
                            <EnterPaymentDetailsSection
                                ccNumber={ccNumber}
                                setccNumber={setccNumberPapa}
                                ccNumberValid={ccNumberValid}
                                selectedPaymentOption={selectedPaymentOption}
                                setSelectedPaymentOption={setSelectedPaymentOption}
                                expiration={expiration}
                                setExpiration={setExpirationPapa}
                                expirationValid={expirationValid}
                                cvv={cvv}
                                setCvv={setCvvPapa}
                                cvvValid={cvvValid}
                                setreoccuringSelected={setreoccuringSelected}
                                reoccuringSelected={reoccuringSelected}
                                setfeeOptIn={setfeeOptIn}
                                feeOptIn={feeOptIn}
                                stripeFeeAmount={((customDollarValue * parseFloat(process.env.NEXT_PUBLIC_STRIPE_FEE_PERCENT) / 100) + parseFloat(process.env.NEXT_PUBLIC_STRIPE_CONSTANT_AMOUNT)).toFixed(2)}
                                totalAmount={totalAmount}
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                fund={fund}
                            />
                        ) : (
                            <></>
                        )}
                        {/* {currentScreenIndex === 4 ? (
                            <OverviewDonationSection
                                totalAmount={totalAmount}
                                setCurrentScreenIndex={setCurrentScreenIndex}
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                selectedPaymentOption={selectedPaymentOption}
                                ccNumber={ccNumber}
                                reoccuringSelected={reoccuringSelected}
                            />
                        ) : (
                            <></>
                        )}
                        {currentScreenIndex === 5 ? (
                            <ThankyouSection
                                fund={fund}
                            />
                        ) : (
                            <></>
                        )} */}
                        <div style={{
                            width: "70%",
                            position: 'relative',
                            bottom: '10px', // Adjust the distance from the bottom as needed
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }}>
                            <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center" paddingTop={4} paddingBottom={3}>
                                {currentScreenIndex !== 3 && currentScreenIndex !== 2 ? (
                                    <RoundedButton text={currentScreenIndex === 3 ? "overview" : currentScreenIndex === 4 ? "give" : currentScreenIndex === 5 ? "close" : "continue to payment"} passedStyle={passedStyle.dollarButtonBlack} callBackFunction={nextPageNValidate} />
                                ) : (<></>)}
                            </Grid>
                        </div>
                    </div>
                )
            ) : (
                <div className={styles.formContainer}>
                    <HeaderNComponent
                        primaryHeaderText={headerText}
                        SecondaryComponent={<P color={color} text={secondaryText} />}
                        secondaryAllign={secondaryAllign}
                    />
                    <FiveButtonsDonate buttonStyle={buttonStyle} masterCallBackFunction={masterCallBack} />
                </div>
            )}
        </>
    );
}
