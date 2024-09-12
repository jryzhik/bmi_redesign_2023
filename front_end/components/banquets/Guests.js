import React from 'react';
import styles from '../../styles/Banquet/Guests.module.css';
import H2 from '../fonts/H2';
import P from '../fonts/P';

const guests = [
  {
    name: 'Dr. Anthony George ',
    jobTitle: 'Senior Pastor First Baptist Atlanta',
    imgSource: '/img/team/andrew.jpg',
  },
  {
    name: 'Dr. Phil Roberts',
    jobTitle: 'Director of International Theological Education',
    imgSource: '/img/team/chuck.jpg',
  },
  {
    name: 'Rev. Andrew & Inna Ryzhkov',
    jobTitle: ' The founding members of Byelorussian Mission.',
    imgSource: '/img/team/tom.jpg',
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
            <div className={styles.guest}>
              <img className={styles.guestImage} src={member.imgSource} />
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
