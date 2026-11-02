import React from 'react';
import styles from '../../styles/Banquet/Faq.module.css';
import {specialGothic, specialGothicExpanded} from './fonts';

const faqs = [
  {
    q: 'What does my ticket include?',
    a: 'A gourmet dinner, live worship with Joel Chernoff, a keynote message from Preston Thompson, vision from our founders, and testimonies and video from the field. Hosting a table adds a private VIP table for your group of 10 and reserved parking.',
  },
  {
    q: 'When and where is it?',
    a: 'Tuesday, November 17, 2026 at 7:00 PM, at Forsyth Conference Center, 3410 Ronald Reagan Blvd, Cumming, GA 30041. It is right off GA 400, next to The Collection at Forsyth.',
  },
  {
    q: 'Is parking free?',
    a: 'Yes. On-site parking at the conference center is free.',
  },
  {
    q: 'Can I bring friends or my small group?',
    a: 'Yes. Reserve up to 10 seats at once, or host a full table of 10 for your church, small group or family.',
  },
  {
    q: 'Do I need to know the ministry to come?',
    a: 'Not at all. If you care about what God is doing around the world, you will feel at home, and it is a great evening to bring someone new.',
  },
  {
    q: 'I can’t make it. Can I still help?',
    a: 'Yes. You can give to the work in Eastern Europe at the bottom of this page.',
  },
];

const Faq = () => {
  return (
    <section id="faq" className={`${styles.faq} ${specialGothic.className}`}>
      <div className={styles.wrapper}>
        <span className={`${styles.label} ${specialGothicExpanded.className}`}>Good to Know</span>
        <h2 className={styles.headline}>Questions before you reserve</h2>
        <div className={styles.list}>
          {faqs.map((item) => (
            <details className={styles.item} key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
