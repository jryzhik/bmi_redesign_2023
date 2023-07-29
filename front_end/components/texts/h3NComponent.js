import React from 'react';
import styles from '../../styles/Texts/Texts.module.css';
import H3 from '../fonts/H3';

export default function H3NComponent({ primaryHeaderText, SecondaryComponent, secondaryAllign, color}) {
  const subComponentStyle = {
    textAlign: secondaryAllign,
  };

  return (
    <div className={styles.containerH3NComp}>
      <div className={styles.primaryHeader}>
        <H3 text={primaryHeaderText} color={color} />
      </div>
      <div className={styles.subComponent} style={subComponentStyle}>
        {SecondaryComponent}
      </div>
    </div>
  );
}
