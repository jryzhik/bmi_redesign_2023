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

export default function OutlineButton({ borderColor, textColor, placeholder, type, callBack, pattern }) {
  const [themeMode, setThemeMode] = useState(styles.inputEmail);

  // Use useEffect to update the themeMode state based on textColor prop
  useEffect(() => {
    if (textColor === theme.colors.BLACK) {
      setThemeMode(styles.none);
    } else {
      setThemeMode(styles.inputEmail);
    }
  }, [textColor]);

  const [textStyle, setTextStyle] = useState(RobotoLight);
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;

    // Use a regular expression to check if the value contains only alphabetical characters
    const alphabeticRegex = /^[A-Za-z]*$/;
    const isValidInput = alphabeticRegex.test(newValue);

    // If the input is valid, update the state and call the callBack function
    console.log("We have type,", type)
    if (isValidInput) {
      setInputText(newValue);
      callBack(newValue);
    } else if (type != 'text') {
      setInputText(newValue);
      callBack(newValue);
    }
  };

  return (
    <>
      {console.log(type)}
      <div className={styles.thinBarContainer} style={{ borderColor: borderColor }}>
        <input
          id={themeMode} // Use themeMode state to conditionally apply styles
          style={{ border: 'none', width: '100%', height: '100%', background: 'none', outline: 'none', color: textColor, paddingLeft: '1em' }}
          placeholder={placeholder}
          className={textStyle.className}
          onChange={handleChange}
          value={inputText}
          type={"text"}
          pattern="[0-9]*"
        />
      </div>
    </>
  );
}
