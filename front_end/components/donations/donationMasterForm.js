import React, { useState, useEffect } from 'react';
import HeaderNComponent from '../texts/HeaderNComponent';
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



export default function DonationMasterForm({ headerText, secondaryText, secondaryAllign, buttonStyle, color, fund }) {
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentScreenIndex, setCurrentScreenIndex] = useState(3)
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


    const [selectedPaymentOption, setSelectedPaymentOption] = useState('cc')


    function luhnAlgo(cardnumber) {
        const length = cardnumber.length
        var totalSum = 0
        for (let i = length - 1; i >= 0; i--) {
            if (length % 2 != 0) {
                // AMEX CARDS
                if (i % 2 != 0) {
                    if ((Number(cardnumber.charAt(i)) * 2) > 9) {
                        totalSum += (Number(cardnumber.charAt(i)) * 2) % 10 + 1
                    } else {
                        totalSum += Number(cardnumber.charAt(i)) * 2
                    }
                } else {
                    totalSum += Number(cardnumber.charAt(i))
                }
            } else {
                //Other cards
                if (i % 2 == 0) {
                    if ((Number(cardnumber.charAt(i)) * 2) > 9) {
                        totalSum += (Number(cardnumber.charAt(i)) * 2) % 10 + 1
                    } else {
                        totalSum += Number(cardnumber.charAt(i)) * 2
                    }
                } else {
                    totalSum += Number(cardnumber.charAt(i))
                }
            }
        }
        if (totalSum % 10 == 0) {
            console.log("card valid")
            return true
        } else {
            console.log("card invalid")
            return false

        }
    }
    function resetDonation() {
        setPopupVisible(false)
        setCurrentScreenIndex(1)
        setFirstName('')
        setLastName('')
        setCustomDollarValue('')
        setEmail('')
        setFirstNameValid(false)
        setLastNameValid(false)
        setCustomDollarValueValid(false)
        setEmailValid(false)
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
        if ((currentScreenIndex == 1) && firstNameValid && lastNameValid && emailValid && customDollarValueValid) {
            setCurrentScreenIndex(2)
        } else if ((currentScreenIndex == 3) && ccNumberValid && expirationValid && cvvValid) {
            setCurrentScreenIndex(4)
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
            {console.log("firstName: ", firstName, "lastName: ", lastName, "email: ", email, "customDollarValue: ", customDollarValue, "creditcard number: ", ccNumber, "ccNumberValid: ", ccNumberValid, "Expiration: ", expiration, "Expiration Valid?: ", expirationValid, "CVV: ", cvv, "Monthly?: ", reoccuringSelected, "fee opt in: ", feeOptIn)}
            {popupVisible ? (
                windowWidth < 900 ? (
                    <p>Fully mobile component goes here</p>
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
                            <GivingInfoSection
                                handleCustomDollarChange={handleCustomDollarChange}
                                customDollarValue={customDollarValue}
                                customDollarValueValid={customDollarValueValid}
                                setFirstName={setFirstNamePapa}
                                setLastName={setLastNamePapa}
                                handleEmailChange={handleEmailChange}
                                firstNameValid={firstNameValid}
                                lastNameValid={lastNameValid}
                                emailValid={emailValid}
                                email={email}
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
                                setccNumber={setccNumberPapa}
                                ccNumberValid={ccNumberValid}
                                selectedPaymentOption={selectedPaymentOption}
                                setSelectedPaymentOption={setSelectedPaymentOption}
                                setExpiration={setExpirationPapa}
                                expirationValid={expirationValid}
                                setCvv={setCvvPapa}
                                cvvValid={cvvValid}
                                setreoccuringSelected={setreoccuringSelected}
                                reoccuringSelected={reoccuringSelected}
                                setfeeOptIn={setfeeOptIn}
                                feeOptIn={feeOptIn}
                            />
                        ) : (
                            <></>
                        )}
                        {currentScreenIndex === 4 ? (
                            <h1>section 4</h1>
                        ) : (
                            <></>
                        )}
                        <div style={{
                            width: "70%",
                            position: 'absolute',
                            bottom: '60px', // Adjust the distance from the bottom as needed
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }}>
                            <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center" paddingTop={4}>
                                <RoundedButton text="continue to payment" passedStyle={passedStyle.dollarButtonBlack} callBackFunction={nextPageNValidate} />
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
