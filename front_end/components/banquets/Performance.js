import React from 'react';
import styles from '../../styles/Banquet/Performance.module.css';
import H2 from '../fonts/H2';
import P from '../fonts/P';
const Performance = () => {
  return (
    <section id="performance" className={styles.performance}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src="/img/banquet/performance.gif" alt="Image" />
        </div>
        <div className={styles.content}>
          <H2 className={styles.title} text="Live Performance" />
          <P text='Inspire Music Band came together in 2018 under the leadership of Leonardo Gusenkov, a multi-talented musician with        a passion for engaging audiences. The band is a family affair, featuring Leonardo alongside his brothers Mathew (drums) and Solomon (bass/trumpet), their father Valeriy (audio engineer with 25+ years of experience), and talented musicians Victor Afichuk (piano/accordion) and Matthew Sidorov (guitar).' />
          <P text="With their rich musical heritage and diverse repertoire spanning Jewish, European, Southern Gospel, and contemporary styles, Inspire Music has performed on both coasts of the United States. Their commitment to musical excellence and ability to create an unforgettable atmosphere makes this year's banquet a special treat you won't want to miss!" />
        </div>
      </div>
    </section>
  );
};

export default Performance;
