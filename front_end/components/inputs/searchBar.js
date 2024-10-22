import React, { useState } from 'react';
import styles from '../../styles/Texts/Texts.module.css';
import Image from 'next/image';
import { usePlaceholder } from '../../hooks/usePlaceholder';

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

export default function SearchBar() {
   const [textStyle, setTextStyle] = useState(RobotoLight);
   const [inputText, setInputText] = useState('');
   const [inputRef, placeholder] = usePlaceholder('Search');
   const handleChange = (event) => {
      setInputText(event.target.value);
      if (event.target.value === '') {
         setTextStyle(RobotoLight);
      } else {
         setTextStyle(RobotoRegular);
      }
   };
   function deleteHandle() {
      setInputText('');
   }
   return (
      <>
         <div className={styles.searchBarContainer} style={{ borderColor: '#C7C7C7', color: '#000000' }}>
            <Image src="/img/icons/search_icon.svg" alt="search" width={22} height={22} style={{ marginLeft: '6px' }} />

            <input
               ref={inputRef}
               style={{ border: 'none', width: '100%', height: '100%', background: 'none', outline: 'none' }}
               placeholder={placeholder}
               className={textStyle.className}
               onChange={handleChange}
               value={inputText}
            />

            <Image
               className={styles.deleteIcon}
               onClick={deleteHandle}
               src="/img/icons/X_icon.svg"
               alt="search"
               width={24}
               height={24}
               style={{ marginRight: '6px' }}
            />
         </div>
      </>
   );
}
