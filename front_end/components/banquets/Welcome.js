import React from 'react';
import styles from '../../styles/Banquet/Welcome.module.css';
import P from '../../components/fonts/P';
const Welcome = () => {
  return (
    <section id="welcome" className={styles.welcome}>
      <h2 className={styles.title}>November 22, 6-8 PM</h2>
      <h3 className={styles.subtitle}>
        Forsyth Conference Center,<br /> 3410 Ronald Reagan Blvd, Cumming, GA 30041
      </h3>
      <div className={styles.wrapper}>
        <P text="Since 2000, Byelorussian Mission has become the leading beacon of light in Belarus."/>
        <P text="This year we feel God's push in getting BMI to move «Beyond the Borders» to pagan Russia, Muslim Kyrgyzstan & Kazakhstan, and even to the depths of Siberia." />
        <P text="Join us for an evening with a special guest, live music, and a look at our exciting future plans!" />
        <a className={styles.button} href="#tickets"> Reserve your spot</a>
      </div>
    </section>
  );
};

export default Welcome;
