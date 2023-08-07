import React, { useState, useEffect } from 'react';
import styles from '../../styles/Inputs/Inputs.module.css';
import Image from 'next/image';
import theme from '../../styles/theme';


import { Roboto_Slab } from '@next/font/google';

const RobotoLight = Roboto_Slab({
  subsets: ['latin'],
  weight: ['300'],
  style: ['normal'],
});

const RobotoRegular = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});

export default function CreditCard({ borderColor, textColor, placeholder, type, callBack, pattern, setccNumber, value }) {
  const [themeMode, setThemeMode] = useState(styles.inputEmail);
  const [ccName, setccName] = useState(false)
  // Use useEffect to update the themeMode state based on textColor prop
  useEffect(() => {
    if (textColor === theme.colors.BLACK) {
      setThemeMode(styles.none);
    } else {
      setThemeMode(styles.inputEmail);
    }
  }, [textColor]);

  const [textStyle, setTextStyle] = useState(RobotoLight);
  const [inputText, setInputText] = useState(value);

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (newValue === '') {
      setTextStyle(RobotoLight);
    } else {
      setTextStyle(RobotoRegular);
    }
    const creditCardFormatValue = formatCreditCardNumber(newValue);
    if (newValue.charAt(0) == '3') {
      setccName('american_express')
    } else if (newValue.charAt(0) == '4') {
      setccName('visa')
    } else if (newValue.charAt(0) == '5') {
      setccName('mastercard')
    } else if (newValue.charAt(0) == '6') {
      setccName('discover')
    } else {
      setccName(false)
    }

    const isValidNumber = /^[0-9]*$/.test(event.target.value);

    // If the input is valid, update the state and call the callBack function
    if (type == "creditcard") {
      setInputText(creditCardFormatValue);
      setccNumber(newValue.replace(/-/g, ''))
    }
    callBack();
  };

  // Function to format the credit card number with hyphens
  const formatCreditCardNumber = (value) => {
    // Remove all non-numeric characters from the input value
    const numericValue = value.replace(/\D/g, '');

    // Add a hyphen after the 4th digit
    let formattedValue = '';
    for (let i = 0; i < numericValue.length; i++) {
      if (i !== 0 && i % 4 === 0) {
        formattedValue += '-';
      }
      formattedValue += numericValue[i];
    }

    return formattedValue;
  };
  return (
    <>
      <div className={styles.thinBarContainer} style={{ borderColor: borderColor, display: "flex", alignItems: "center", paddingRight: "1em" }}>
        <input
          id={themeMode} // Use themeMode state to conditionally apply styles
          style={{ border: 'none', width: '100%', height: '100%', background: 'none', outline: 'none', color: textColor, paddingLeft: '1em' }}
          placeholder={placeholder}
          className={textStyle.className}
          onChange={handleChange}
          value={inputText}
          type={"text"}
          pattern="[0-9]*"
          maxLength={19}
        />
        {ccName ? (
          <Image
            src={`/img/icons/${ccName}.svg`}
            alt={ccName}
            width={40}
            height={20}
            quality={100}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
