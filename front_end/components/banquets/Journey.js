import H2 from '../fonts/H2';
import styles from '../../styles/Banquet/Journey.module.css';
import {specialGothicExpanded} from './fonts';
import {scrollToReserve} from './scrollToReserve';

const journeyItems = [
  {order: 1, title: 'Delicious Dinner', text: 'A gourmet dinner shared with friends old and new.'},
  {
    order: 2,
    title: 'Live Music with Joel Chernoff',
    text: 'The founder of LAMB and a pioneer of Messianic worship leads the room in praise.',
  },
  {
    order: 3,
    title: 'Vision from the Founders',
    text: 'Andrew and Inna Ryzhkov share the next chapter: 50 new churches, each adopted by a church here.',
  },
  {
    order: 4,
    title: 'Inspiring Testimonies & Video',
    text: 'See what God is doing in the churches and lives this ministry serves.',
  },
  {
    order: 5,
    title: 'Keynote Message from Preston Thompson',
    text: 'Just back from training conferences with hundreds of pastors and young church leaders in Eastern Europe.',
  },
];

const Journey = () => {
  return (
    <section id="journey" className={styles.journey}>
      <div className={styles.title}>
        <H2 text="What Your Evening Includes" />
      </div>
      <ul className={styles.list}>
        {journeyItems.map((item) => (
          <li className={styles.item} key={item.order}>
            <div className={styles.order}>0{item.order}.</div>
            {item.title}
            <span className={styles.text}>{item.text}</span>
          </li>
        ))}
      </ul>
      <div className={styles.ctaWrap}>
        <a className={`${styles.cta} ${specialGothicExpanded.className}`} href="#reserve" onClick={scrollToReserve}>
          Reserve Your Seat
        </a>
      </div>
    </section>
  );
};

export default Journey;
