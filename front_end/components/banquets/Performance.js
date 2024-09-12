import React from 'react';
import styles from '../../styles/Banquet/Performance.module.css';
import H2 from '../fonts/H2';
import P from '../fonts/P';
const Performance = () => {
  return (
    <section id="performance" className={styles.performance}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src="/img/performance.png" alt="Image" />
        </div>
        <div className={styles.content}>
          <H2 className={styles.title} text="Live Performance" />
          <P text='Mark Ryzhkov was destined to play violin, inheriting the klezmer gene from his great-grandfathers and starting at age six. At 15, God used his talent during an Israel crusade, which cost him a basketball career —something he never regretted. While waiting for a Ukrainian violinist to join him as a duet partner, Mark began composing his own music, including "Pure Patience."' />
          <P text='Now a Kennesaw University student, a successful businessman, and a happy newlywed, Mark is above all a humble servant of God, bringing Him glory in America, Belarus, and Israel."' />
        </div>
      </div>
    </section>
  );
};

export default Performance;
