import React, { useState, useEffect } from 'react';
import styles from '../../styles/Inputs/Inputs.module.css';
import theme from '../../styles/theme';
import ST from '../fonts/ST';

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

export default function CustomDollar({ borderColor, textColor, placeholder, type, value, onChange }) {
  const [themeMode, setThemeMode] = useState(styles.inputEmail);
  const [textStyle, setTextStyle] = useState(RobotoLight);

  // Use useEffect to update the themeMode state based on textColor prop
  useEffect(() => {
    if (textColor === theme.colors.BLACK) {
      setThemeMode(styles.none);
    } else {
      setThemeMode(styles.inputEmail);
    }
  }, [textColor]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    // Use a regular expression to check if the value is a valid number
    const isValidNumber = /^[0-9]*$/.test(event.target.value);
    // Update the text style based on the input value
    if (newValue === '') {
      setTextStyle(RobotoLight);
    } else {
      setTextStyle(isValidNumber ? RobotoRegular : RobotoLight);
    }

    // Call the onChange function with the current inputText value if it's a valid number
    if (onChange && isValidNumber) {
      onChange(newValue);
    }
  };


  return (
    <>
      <div className={styles.thinBarContainer} style={{ borderColor: borderColor, display: "flex", alignItems: "center" }}>
        <div style={{ paddingLeft: '1em' }}>
          <ST color={theme.colors.BLACK} text="$" />
        </div>
        <input
          type={type}
          pattern="[0-9]*"
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
          style={{ border: 'none', width: '100%', height: '100%', background: 'none', outline: 'none', color: textColor }}
          className={textStyle.className}
        />
      </div>
    </>
  );
}
