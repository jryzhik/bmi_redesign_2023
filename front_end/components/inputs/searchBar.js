import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import useSWR from 'swr';
import { useDebounce } from 'use-debounce';
import { useLocalStorageSync } from '../../hooks/useLocalStorageSync';
import { getSortedHappenings } from '../../tools/getSortedHappenings';
import { getReturnCalendarHappenings } from '../../tools/getReturnCalendarHappenings';
import { dropDowns } from '../../tools/constants';
import styles from '../../styles/Texts/Texts.module.css';

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
   const searchIconSize = 22;
   const clearIconSize = 24;
   const { mutate } = useSWR('happenings');
   const [textStyle, setTextStyle] = useState(RobotoLight);
   const [inputText, setInputText] = useState('');
   const inputRef = useRef(null);
   const [debounceText] = useDebounce(inputText, 650);
   const [localStorageMonth] = useLocalStorageSync(dropDowns.month.name, dropDowns.month.defaultValue);
   const [localStorageYear] = useLocalStorageSync(dropDowns.year.name, dropDowns.year.defaultValue);

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

   function customSelectHandler() {
      setInputText(inputText + ' ');
      setInputText(inputText.slice(0, inputText.length));
   }

   useEffect(() => {
      let ignore = false;

      if (debounceText) {
         getSortedHappenings({ search: debounceText, month: localStorageMonth, year: localStorageYear }).then((data) => {
            mutate(data);
         });
      } else {
         getReturnCalendarHappenings({ month: localStorageMonth, year: localStorageYear }).then((data) => {
            mutate(data);
         });
      }

      return () => {
         ignore = true;
      };
   }, [debounceText, localStorageMonth, localStorageYear]);

   useEffect(() => {
      document.body.addEventListener('CustomSelect', customSelectHandler);

      return () => {
         document.body.removeEventListener('CustomSelect', customSelectHandler);
      };
   });

   return (
      <>
         <div className={styles.searchBarContainer} style={{ borderColor: '#C7C7C7', color: '#000000' }}>
            <Image
               src="/img/icons/search_icon.svg"
               alt="search"
               width={searchIconSize}
               height={searchIconSize}
               style={{ marginLeft: '6px' }}
            />

            <input
               ref={inputRef}
               style={{ border: 'none', width: '100%', height: '100%', background: 'none', outline: 'none' }}
               placeholder="search"
               className={classNames([textStyle.className, styles.search_input])}
               onChange={handleChange}
               value={inputText}
            />

            <Image
               className={styles.deleteIcon}
               onClick={deleteHandle}
               src="/img/icons/X_icon.svg"
               alt="search"
               width={clearIconSize}
               height={clearIconSize}
               style={{ marginRight: '6px' }}
            />
         </div>
      </>
   );
}
