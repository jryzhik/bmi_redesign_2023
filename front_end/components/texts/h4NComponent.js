import React from 'react';
import styles from '../../styles/Texts/Texts.module.css';
import H4 from '../fonts/H4';

export default function H4NComponent({ primaryHeaderText, SecondaryComponent, secondaryAllign, color}) {

  return (
    <div className={styles.containerH4NComp}>
      <div className={styles.primaryHeader}>
        <H4 text={primaryHeaderText} color={color} />
      </div>
      <div className='event'>
        {SecondaryComponent}
      </div>
    </div>
  );
}
