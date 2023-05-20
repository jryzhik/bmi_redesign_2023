import React from 'react';
import styles from '/Users/jamesryzhkov/Documents/Business/websites/BMI2023/front_end/styles/Texts/Texts.module.css';
import H1 from '../fonts/H1';

export default function HeaderNComponent({ primaryHeaderText, SecondaryComponent, secondaryAllign}) {
  const subComponentStyle = {
    textAlign: secondaryAllign,
  };

  return (
    <div className={styles.container}>
      <div className={styles.primaryHeader}>
        <H1 text={primaryHeaderText} />
      </div>
      <div className={styles.subComponent} style={subComponentStyle}>
        {SecondaryComponent}
      </div>
    </div>
  );
}
