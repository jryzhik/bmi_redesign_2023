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
    if (newValue === '') {
      setTextStyle(RobotoLight);
    } else {
      setTextStyle(RobotoRegular);
    }

    // Call the onChange function with the current inputText value
    if (onChange) {
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
          id={themeMode} // Use themeMode state to conditionally apply styles
          style={{ border: 'none', width: '100%', height: '100%', background: 'none', outline: 'none', color: textColor }}
          placeholder={placeholder}
          className={textStyle.className}
          onChange={handleChange}
          value={value}
          type={type}
        />
      </div>
    </>
  );
}
