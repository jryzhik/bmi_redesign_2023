import React from 'react';
import styles from '../../styles/Banquet/FinalCta.module.css';
import {specialGothic, specialGothicExpanded} from './fonts';

const FinalCta = () => {
  return (
    <section id="final-cta" className={`${styles.finalCta} ${specialGothic.className}`}>
      <div className={styles.wrapper}>
        <h2 className={styles.headline}>Your seat is waiting.</h2>
        <p className={styles.text}>Tuesday, November 17 · 7:00 PM · Forsyth Conference Center, Cumming</p>
        <a className={`${styles.button} ${specialGothicExpanded.className}`} href="#tickets">
          Reserve Your Seat
        </a>
      </div>
    </section>
  );
};

export default FinalCta;
