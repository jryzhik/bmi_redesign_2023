import React from 'react';
import Image from 'next/image';
import childImage from '../public/img/icons/404_whoops.svg';
import H1 from '../components/fonts/H1';
import P from '../components/fonts/P';

export default function Custom404() {
   return (
      <>
         <div className="generalCenter">
            <Image src={childImage} alt="whoops" />
            <H1 text="404 Whoops!"></H1>
            {/* <P text='The page you requested couldn’t be found.'/> */}
            <P text="We are developing this page... 🛠️" />
         </div>
      </>
   );
}
