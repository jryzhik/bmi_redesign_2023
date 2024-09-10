import React from 'react';
import {Raleway} from 'next/font/google';

const Ral = Raleway({
  subsets: ['latin'],
  weight: ['900'],
  style: ['normal'],
});

export default function LT(props) {
  return (
    <>
      <div id="lt" style={{color: props.color}} className={Ral.className}>
        {props.text}
      </div>
    </>
  );
}
