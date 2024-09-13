import React from 'react';
import styles from '../../styles/Banquet/Welcome.module.css';
import P from '../../components/fonts/P';
const Welcome = () => {
  return (
    <section id="welcome" className={styles.welcome}>
      <h2 className={styles.title}>November 16, 7-9 PM</h2>
      <h3 className={styles.subtitle}>Forsyth Conference Center, 3410 <br /> Ronald Reagan BLVD</h3>
      <div className={styles.wrapper}>
        <P text="After a 4-year pause, the Annual Fundraiser Banquet is back!" />
        <P text="BMI has been busy with impactful projects Bible Printing, the Orphan Adoption Program, and so much more." />
        <P text="Join us for an evening with a special guest, live music, and a look at our exciting future plans!" />
        <P text="Be a Part of Our Mission – Get Your Tickets Today" />
        <a className={styles.button} href="#">  Reserve your spot  </a>
      </div>
    </section>
  );
};

export default Welcome;
