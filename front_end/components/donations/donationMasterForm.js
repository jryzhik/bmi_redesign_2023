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
import GivingInfoSection from './GivingInfoSection';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import RoundedButton from '../buttons/roundedButton';
import passedStyle from '../../styles/Donate/ColorDonate.module.css';
import SelectPaymentSection from './selectPaymentSection';
import EnterPaymentDetailsSection from './enterPaymentDetailsSection';



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
    function paymentProviderButtonPapaHandle() {
        if (currentScreenIndex == 2) {
            setCurrentScreenIndex(3)
        }
    } 
    return (
        <>
            {console.log("firstName: ", firstName, "lastName: ", lastName, "email: ", email, "customDollarValue: ", customDollarValue)}
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
                                paymentButtonClickHandle = {paymentProviderButtonPapaHandle}
                            />
                        ) : (
                            <></>
                        )}
                        {currentScreenIndex === 3 ? (
                            <EnterPaymentDetailsSection/>
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
