import React, { useState } from 'react';
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

export default function DonationMasterForm({ headerText, secondaryText, secondaryAllign, buttonStyle, color, fund }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [customDollarValue, setCustomDollarValue] = useState('');
  const [customDollarValueValid, setCustomDollarValueValid] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [firstNameValid, setFirstNameValid] = useState(false);

  const [lastName, setLastName] = useState('');
  const [lastNameValid, setLastNameValid] = useState(false);

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const setFirstNamePapa = (value) => {
    setFirstName(value);
    if (value !== '') {
      setFirstNameValid(true);
    }
  };

  const setLastNamePapa = (value) => {
    setLastName(value);
    if (value !== '') {
      setLastNameValid(true);
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
    }
  };

  const handleCustomDollarChange = (value) => {
    setCustomDollarValue(value);
    if (value !== '') {
      setCustomDollarValueValid(true);
    }
  };

  return (
    <>
      {popupVisible ? (
        <div className={styles.formContainerPOP}>
          <div className={styles.exitIcon} onClick={() => setPopupVisible(false)}>
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
        </div>
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
