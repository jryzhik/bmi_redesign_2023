import React from 'react';
import styles from '../../styles/Banquet/Performance.module.css';
import H2 from '../fonts/H2';
import P from '../fonts/P';
const Performance = () => {
  return (
    <section id="performance" className={styles.performance}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src="/img/banquet/joel-chernoff.jpg" alt="Joel Chernoff" />
        </div>
        <div className={styles.content}>
          <H2 className={styles.title} text="Live Performance" />
          <h3 className={styles.subtitle}>Joel Chernoff</h3>
          <P text="Joel Chernoff is one of the pioneers of Messianic worship music. In 1972 he founded the group LAMB, writing songs that blended Jewish and Israeli melodies with contemporary praise at a time when almost no one was doing it. Recording for Sparrow Records, LAMB released more than a dozen albums, sold hundreds of thousands of copies, and placed songs in the Top 10 of the Contemporary Christian Music charts through the 1970s and 80s. The sound they introduced is known today as Messianic Praise and Worship. Joel now serves as General Secretary and CEO of the Messianic Jewish Alliance of America and chairs the Joseph Project International, the largest importer of humanitarian aid in the State of Israel. We are honored to have him lead us in worship this evening." />
        </div>
      </div>
    </section>
  );
};

export default Performance;
