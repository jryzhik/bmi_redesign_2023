import React from 'react';
import styles from '../../styles/Banquet/Hero.module.css';
import {specialGothicExpanded} from './fonts';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <p className={`${styles.eyebrow} ${specialGothicExpanded.className}`}>Byelorussian Mission · Annual Banquet</p>
        <h1 className={styles.title}>
          <img className={styles.lockup} src="/img/banquet/theme-lockup-light.png" alt="So the World May Believe" />
        </h1>
      </div>
    </section>
  );
};

export default Hero;
