import React from 'react';
import {IBM_Plex_Sans} from 'next/font/google';

const imb_plex_sand = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['600'],
  style: ['italic', 'normal'],
});

export default function H2(props) {
  return (
    <h2
      style={{...props.style, color: props.color}}
      className={imb_plex_sand.className}
    >
      {props.text}
    </h2>
  );
}
