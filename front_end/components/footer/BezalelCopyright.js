import React from 'react';
import {Roboto_Slab} from 'next/font/google';
import Image from 'next/image';

const Roboto = Roboto_Slab({
  subsets: ['latin'],
  weight: ['300'],
  style: ['normal'],
});

const BezalelCopyright = (props) => {
  const {...rest} = props;
  return (
    <>
      <a
        {...rest}
        className={Roboto.className}
        style={{
          color: 'inherit',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          display: 'flex',
          gap: '0.5em',
          justifyItems: 'center',
          alignItems: 'center',
        }}
        href="https://bezalelab.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Powered By</span>
        <Image src="/img/logos/bezalel_lab.svg" alt="Bezalel Lab® | Custom Websites That Drive Results" width={100} height={20.7} />
      </a>
    </>
  );
};

export default BezalelCopyright;
