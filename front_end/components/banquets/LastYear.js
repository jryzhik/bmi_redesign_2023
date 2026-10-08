import React from 'react';
import styles from '../../styles/Banquet/LastYear.module.css';
import H2 from '../fonts/H2';
import P from '../fonts/P';

const photos = [
  {src: '/img/banquet/last-year-2.jpg', alt: 'Guests talking in the lobby before the banquet', tall: true},
  {src: '/img/banquet/last-year-1.jpg', alt: 'Guests at dinner tables during last year’s banquet'},
  {src: '/img/banquet/last-year-3.jpg', alt: 'Friends greeting each other at the banquet'},
  {src: '/img/banquet/last-year-4.jpg', alt: 'Live music on stage at the banquet'},
  {src: '/img/banquet/last-year-5.jpg', alt: 'Guests sharing a laugh at the banquet'},
];

const LastYear = () => {
  return (
    <section id="last-year" className={styles.lastYear}>
      <div className={styles.container}>
        <div className={styles.title}>
          <H2 text="Last Year’s Banquet" />
          <P text="A few moments from our evening together at the Forsyth Conference Center. We can’t wait to celebrate with you again." />
        </div>
        <div className={styles.grid}>
          {photos.map((photo) => (
            <div className={`${styles.photo} ${photo.tall ? styles.tall : ''}`} key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastYear;
