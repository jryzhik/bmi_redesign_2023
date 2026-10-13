import React from 'react';
import styles from '../../styles/Banquet/Performance.module.css';
import H2 from '../fonts/H2';
import P from '../fonts/P';
const Keynote = () => {
  return (
    <section id="keynote" className={styles.performance}>
      <div className={`${styles.wrapper} ${styles.reverse}`}>
        <div className={`${styles.image} ${styles.portrait}`}>
          <img src="/img/banquet/preston-thompson.jpg" alt="Preston Thompson" />
        </div>
        <div className={styles.content}>
          <H2 className={styles.title} text="Keynote Speaker" />
          <h3 className={styles.subtitle}>Preston Thompson</h3>
          <P text="Preston Thompson has served as pastor of Redeemer Baptist Church since 2003. He received his Master of Divinity from New Orleans Baptist Theological Seminary and recently returned from St. Petersburg and Belarus, where he joined hundreds of pastors and young church leaders for training conferences. Preston and his wife, Natalie, have three children." />
        </div>
      </div>
    </section>
  );
};

export default Keynote;
