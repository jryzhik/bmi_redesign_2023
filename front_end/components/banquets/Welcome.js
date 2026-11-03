import React from 'react';
import styles from '../../styles/Banquet/Welcome.module.css';
import {delaGothic, specialGothic, specialGothicExpanded} from './fonts';
import {scrollToReserve} from './scrollToReserve';

const Welcome = () => {
  return (
    <section id="welcome" className={`${styles.welcome} ${specialGothic.className}`}>
      <header className={styles.header}>
        <span className={`${styles.label} ${specialGothicExpanded.className}`}>The Evening</span>
        <h2 className={styles.headline}>Dinner, worship and a front-row seat to what God is doing across the world.</h2>
      </header>
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <p>
            Once a year, believers who share a heart for the nations gather for one evening: a gourmet dinner, live worship
            with Joel Chernoff, and firsthand stories from the churches this ministry serves.
          </p>
          <p>
            Since 2000, Byelorussian Mission has trained pastors and planted churches across Eastern Europe. Twelve years of
            pastor training brought churches together across denominations, and that unity opened the door for the Festival
            of Hope with Franklin Graham.
          </p>
          <p>
            Now new believers need churches to grow in. On November 17 you will hear what God is doing, meet the people
            behind it, and see how your church can adopt a city.
          </p>
          <a className={`${styles.cta} ${specialGothicExpanded.className}`} href="#reserve" onClick={scrollToReserve}>
            Reserve Your Seat
          </a>
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
