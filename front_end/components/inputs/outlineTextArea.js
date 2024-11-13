import React, { useState } from 'react';
import styles from '../../styles/Inputs/Inputs.module.css';
import Image from 'next/image';

import { Roboto_Slab } from 'next/font/google';

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

export default function OutlineTextArea({ borderColor, textColor, placeholder, type, name }) {
   const maxLength = 500;
   const [textStyle, setTextStyle] = useState(RobotoLight);
   const [inputText, setInputText] = useState('');
   const handleChange = (event) => {
      setInputText(event.target.value);
      if (event.target.value === '') {
         setTextStyle(RobotoLight);
      } else {
         setTextStyle(RobotoRegular);
      }
   };
   return (
      <>
         <div className={styles.thinTextArea} style={{ borderColor: borderColor }}>
            <textarea
               maxLength={maxLength}
               style={{
                  lineHeight: '2em',
                  fontSize: '.852em',
                  resize: 'none',
                  border: 'none',
                  width: '100%',
                  height: '100%',
                  background: 'none',
                  outline: 'none',
                  color: textColor,
                  paddingTop: '.7em',
                  paddingLeft: '1em',
               }}
               placeholder={placeholder}
               className={textStyle.className}
               onChange={handleChange}
               value={inputText}
               type={type}
               name={name}
            />
         </div>
      </>
   );
}
