import H2 from '../fonts/H2';
import styles from '../../styles/Banquet/Journey.module.css';
const journeyItems = [
  'Groundbreaking Initiatives',
  'Music Perfomance',
  'Founders Speech',
  'Vision for the Future',
  'Special Guest Insights',
  'Secret Part',
];
const Journey = () => {
  return (
    <section id="journey" className={styles.journey}>
      <div className={styles.title}>
        <H2 text="We’ll Journey Through" />
      </div>
      <ul className={styles.list}>
        {journeyItems.map((item, index) => (
          <li className={styles.item} key={index}>{item} </li>
        ))}
      </ul>
    </section>
  );
};

export default Journey;
