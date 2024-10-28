import React from 'react';
import NT from '../fonts/NT';

export default function RoundedButton({ text, passedStyle, callBackFunction }) {
   return (
      <div className={passedStyle} {...(callBackFunction !== null ? { onClick: callBackFunction } : {})}>
         <NT text={text} />
      </div>
   );
}
