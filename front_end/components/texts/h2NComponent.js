import React from 'react';
import styles from '../../styles/Texts/Texts.module.css';
import H2 from '../fonts/H2';

export default function H2NComponent({ primaryHeaderText, SecondaryComponent, secondaryAllign, color}) {

  return (
    <div className={styles.containerH2NComp}>
      <div className={styles.primaryHeader2}>
        <H2 text={primaryHeaderText} color={color} />
      </div>
      <div className='event'>
        {SecondaryComponent}
      </div>
    </div>
  );
}
