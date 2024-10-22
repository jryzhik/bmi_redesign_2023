import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/Inputs/Inputs.module.css';
import { IBM_Plex_Sans } from 'next/font/google';
import Image from 'next/image';
import dollarIcon from '../../public/img/icons/dollar-sign.svg';

const imb_plex_sand = IBM_Plex_Sans({
   subsets: ['latin'],
   weight: ['600'],
   style: ['italic', 'normal'],
});

export default function AmountEnter({ totalAmount, setCustomDollarValue, offset }) {
   const [inputValue, setInputValue] = useState(totalAmount);
   const [containerWidth, setContainerWidth] = useState(17); // Initial width in 'em'
   const inputRef = useRef(null);
   const [dollarWidth, setDollarWidth] = useState(10);

   useEffect(() => {
      if (offset === 145) {
         setDollarWidth(30);
      } else if (offset === 115) {
         setDollarWidth(100);
      }
   }, [offset]);

   const calculateInputWidth = () => {
      if (inputRef.current) {
         const inputText = inputRef.current.value || '0'; // Use '0' if the input is empty
         const fontSize = 50; // Adjust based on your design
         const width = inputText.length * fontSize * 0.8 + offset; // Adjust multiplier as needed
         setContainerWidth(width);
      }
   };

   useEffect(() => {
      calculateInputWidth();
   }, [inputValue]);

   const handleInputChange = (event) => {
      const newInputValue = event.target.value.replace(/,/g, ''); // Remove commas for formatting
      const formattedValue = new Intl.NumberFormat('en-US').format(newInputValue); // Format with commas

      setInputValue(formattedValue);
      setCustomDollarValue(newInputValue);
   };

   return (
      <div className={styles.amountEnterContainer} style={{ width: `${containerWidth}px` }}>
         <div style={{ opacity: '.3' }}>
            <Image src={dollarIcon} alt="$" width={dollarWidth} height={30} quality={100} />
         </div>

         <input
            ref={inputRef}
            className={imb_plex_sand.className}
            type="text"
            pattern="[0-9]*"
            value={inputValue}
            onChange={handleInputChange}
            style={{
               border: 'none',
               width: '100%',
               height: '100%',
               background: 'none',
               outline: 'none',
               color: '#000000',
               fontSize: '5em',
            }}
         />
      </div>
   );
}
