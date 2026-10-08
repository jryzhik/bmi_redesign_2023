import React from 'react';
import styles from '../../styles/Banquet/Performance.module.css';
import H2 from '../fonts/H2';
import P from '../fonts/P';
const Keynote = () => {
  return (
    <section id="keynote" className={styles.performance}>
      <div className={`${styles.wrapper} ${styles.reverse}`}>
        <div className={styles.image}>
          <img src="/img/banquet/jeff-jackson-keynote.jpg" alt="Dr. Jeff Jackson" />
        </div>
        <div className={styles.content}>
          <H2 className={styles.title} text="Keynote Speaker" />
          <h3 className={styles.subtitle}>Dr. Jeff Jackson</h3>
          <P text="Dr. Jeff Jackson is the Senior Pastor of First Redeemer Church in Cumming, Georgia, one of the fastest growing churches in the Southeast. A founding member of the church, he has served on its ministry staff since 2002, beginning as Adult Education Pastor and going on to minister to people of all ages." />
          <P text="Before entering full-time ministry, Jeff built a career in telecommunications, first as a district manager at AT&T during the internet boom of the 1990s and then as Director of Global Provisioning for Equant, leading an international team serving North, Central and South America. He holds bachelor's and master's degrees in Electrical Engineering from Georgia Tech, and a Master of Arts in Theological Studies and a Doctor of Ministry from Liberty University." />
          <P text="Jeff also serves as president of There's Hope for the Hungry, a food distribution ministry. He and his wife, Catherine, live in Cumming. First Redeemer's long-term partnership in Brest is the model for our Adopt a City vision, and we are honored to have him bring the keynote message this evening." />
        </div>
      </div>
    </section>
  );
};

export default Keynote;
