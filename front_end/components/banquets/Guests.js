import React from 'react';
import styles from '../../styles/Banquet/Guests.module.css';
import H2 from '../fonts/H2';
import P from '../fonts/P';

const guests = [
  // {
  //   name: 'Dr. Anthony George ',
  //   jobTitle: 'Senior Pastor First Baptist Atlanta',
  //   imgSource: '/img/banquet/guest-1.png',
  // },
  {
    name: 'Preston Thompson',
    jobTitle: 'Keynote Speaker, Redeemer Baptist Church',
    imgSource: '/img/banquet/preston-thompson.jpg',
  },
  {
    name: 'Joel Chernoff',
    jobTitle: 'Featured Musician, Founder of LAMB',
    imgSource: '/img/banquet/joel-chernoff.jpg',
  },
  {
    name: 'Rev. Andrew & Inna Ryzhkov',
    jobTitle: ' The founding members of Byelorussian Mission.',
    imgSource: '/img/banquet/guest-3.png',
  },
];
const Guests = () => {
  return (
    <section id="guests" className={styles.guests}>
      <div className={styles.container}>
        <div className={styles.title}>
          <H2 text="Special Guests" />
        </div>
        <div className={styles.wrapper}>
          {guests.map((member) => (
            <div className={styles.guest} key={member.name}>
              <img className={styles.guestImage} src={member.imgSource} alt={member.name} />
              <div className={styles.guestName}>{member.name}</div>
              <P className={styles.guestJob} text={member.jobTitle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guests;
