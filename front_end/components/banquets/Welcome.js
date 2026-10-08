import React from 'react';
import styles from '../../styles/Banquet/Welcome.module.css';
import {delaGothic, specialGothic, specialGothicExpanded} from './fonts';

const Welcome = () => {
  return (
    <section id="welcome" className={`${styles.welcome} ${specialGothic.className}`}>
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <span className={`${styles.label} ${specialGothicExpanded.className}`}>The Evening</span>
          <p>
            Since 2000, Byelorussian Mission has become the leading beacon of light in Eastern Europe. Twelve years of pastor
            training brought churches together across denominations, and that unity opened the door for the Festival of Hope
            with Franklin Graham. Now new believers need churches to grow in, and we are inviting churches here to adopt a
            city.
          </p>
          <p>Join us for an evening of dinner, worship with Joel Chernoff, and a message from Dr. Jeff Jackson.</p>
        </div>
        <div className={styles.divider} aria-hidden="true"></div>
        <figure className={styles.verse}>
          <span className={`${styles.quoteMark} ${delaGothic.className}`} aria-hidden="true">
            “
          </span>
          <blockquote className={styles.verseText}>
            “that they may all be one, just as you, Father, are in me, and I in you, that they also may be in us, so that the{' '}
            <strong>world may believe</strong> that you have sent me.”
          </blockquote>
          <figcaption className={`${styles.reference} ${specialGothicExpanded.className}`}>John 17:21</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Welcome;
