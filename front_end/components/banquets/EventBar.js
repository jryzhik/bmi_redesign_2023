import React from 'react';
import styles from '../../styles/Banquet/EventBar.module.css';
import {specialGothic, specialGothicExpanded} from './fonts';

const EventBar = () => {
  return (
    <section className={`${styles.eventBar} ${specialGothic.className}`}>
      <div className={styles.panel}>
        <div className={styles.item}>
          <span className={`${styles.label} ${specialGothicExpanded.className}`}>Date & Time</span>
          <span className={styles.value}>Tuesday, Nov 17, 7:00 PM</span>
        </div>
        <div className={styles.item}>
          <span className={`${styles.label} ${specialGothicExpanded.className}`}>Venue</span>
          <span className={styles.value}>Forsyth Conference Center, 3410 Ronald Reagan Blvd, Cumming, GA</span>
        </div>
        <a className={`${styles.button} ${specialGothicExpanded.className}`} href="#tickets">
          Reserve Your Seat
        </a>
      </div>
    </section>
  );
};

export default EventBar;
