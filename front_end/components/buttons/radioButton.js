import React, { useState } from 'react';
import styles from '../../styles/Donate/Donate.module.css';
import Image from 'next/image';

export default function RadioButton({ callBack, valueSelected }) {
   const [selected, setSelected] = useState(valueSelected);
   const imageSize = 24;
   const imageQquality = 100;

   function binaryFlip() {
      setSelected(!selected);
      callBack(!selected);
   }

   return (
      <>
         {selected ? (
            <div className={styles.radioButtonSelected}>
               <Image
                  src="img/icons/checkGreen.svg"
                  alt="button"
                  width={imageSize}
                  height={imageSize}
                  quality={imageQquality}
                  onClick={binaryFlip}
               />
            </div>
         ) : (
            <div onClick={binaryFlip} className={styles.radioButtonUnselected} />
         )}
      </>
   );
}
