import Image from 'next/image';
import { useRef, useState } from 'react';
import classNames from 'classnames';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useLocalStorageSync } from '../../hooks/useLocalStorageSync';
import { dropDowns } from '../../tools/constants';
import styles from '../../styles/Events/CalendarSelect.module.css';
import downArrow from '../../assets/icons/arrows/downArrow.svg';

import { Raleway } from 'next/font/google';
import { Roboto_Slab } from 'next/font/google';

const Ral = Raleway({
   subsets: ['latin'],
   weight: ['900'],
   style: ['normal'],
});

const Roboto = Roboto_Slab({
   subsets: ['latin'],
   weight: ['300'],
   style: ['normal'],
});

export function CalendarSelect({ id, name, title, defaultValueProp, source }) {
   const arrowSize = 22;
   const [value, setValue] = useState(defaultValueProp || dropDowns.month.defaultValue);
   const [, setLocalStorageValue] = useLocalStorageSync(name, value);
   const detailsRef = useRef(null);
   const lineReduction = (str) => str.slice(0, 3).toLowerCase();

   const closeDetails = () => {
      detailsRef?.current.removeAttribute('open');
   };

   useClickOutside(detailsRef, closeDetails);

   return (
      <details ref={detailsRef} className={classNames([Roboto.className, styles.detail_select])}>
         <summary className={styles.detail_select_summary}>
            <input type="hidden" id={name} name={name} value={value} />

            <span className={styles.detail_select_title}>{title}</span>

            <output className={classNames([Ral.className, styles.detail_select_output])} htmlFor={name} form={id}>
               {value}
            </output>

            <Image
               src={downArrow}
               width={arrowSize}
               height={arrowSize}
               loading="lazy"
               alt=""
               className={styles.detail_select_arrow}
            />
         </summary>

         <form id={id} className={styles.detail_select_content}>
            <ul>
               {source.map((it, idx) => (
                  <li
                     key={it}
                     className={classNames([
                        Roboto.className,
                        styles.detail_select_content_item,
                        {
                           [styles.detail_select_content_item_active]:
                              typeof it === 'string' ? lineReduction(it) === value : it === value,
                        },
                     ])}
                     id={`${name}-${it}`}
                     data-value={
                        typeof it === 'string'
                           ? it.toLowerCase() === dropDowns.month.defaultValue
                              ? dropDowns.month.defaultValue
                              : idx
                           : it
                     }
                     onClick={(e) => {
                        setValue(typeof it === 'string' ? lineReduction(it) : it);
                        setLocalStorageValue(e.target.dataset.value);
                        closeDetails();
                        document.body.dispatchEvent(new CustomEvent('CustomSelect'));
                     }}
                  >
                     {it}
                  </li>
               ))}
            </ul>
         </form>
      </details>
   );
}
