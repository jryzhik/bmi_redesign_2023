import React from 'react';
import styles from '../../styles/Banquet/Location.module.css';
import {specialGothic, specialGothicExpanded} from './fonts';
import {scrollToReserve} from './scrollToReserve';

const venue = 'Forsyth Conference Center, 3410 Ronald Reagan Blvd, Cumming, GA 30041';
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(venue)}&z=14&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venue)}`;

const Location = () => {
  return (
    <section id="location" className={`${styles.location} ${specialGothic.className}`}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <span className={`${styles.label} ${specialGothicExpanded.className}`}>Close to Home</span>
          <h2 className={styles.headline}>Hear what God is doing across the world, right here in Cumming.</h2>
          <p className={styles.text}>
            Forsyth Conference Center sits right off GA 400, next to The Collection at Forsyth, with free on-site parking.
            Bring a friend, your small group or your whole church and make a night of it.
          </p>
          <ul className={styles.details}>
            <li>
              <strong>When</strong>
              <span>Tuesday, November 17 · 7:00 PM</span>
            </li>
            <li>
              <strong>Where</strong>
              <span>3410 Ronald Reagan Blvd, Cumming, GA 30041</span>
            </li>
            <li>
              <strong>Parking</strong>
              <span>Free, on site</span>
            </li>
          </ul>
          <div className={styles.actions}>
            <a className={`${styles.primary} ${specialGothicExpanded.className}`} href="#reserve" onClick={scrollToReserve}>
              Reserve Your Seat
            </a>
            <a
              className={`${styles.secondary} ${specialGothicExpanded.className}`}
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            title="Map to Forsyth Conference Center in Cumming, GA"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
