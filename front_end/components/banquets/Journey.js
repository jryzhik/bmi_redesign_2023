import H2 from '../fonts/H2';
import styles from '../../styles/Banquet/Journey.module.css';
const journeyItems = [
  {order: 1, title: 'Groundbreaking Initiatives'},
  {order: 4, title: 'Vision for the Future'},
  {order: 2, title: 'Music Perfomance'},
  {order: 5, title: 'Special Guest Insights'},
  {order: 3, title: 'Founders Speech'},
  {order: 6, title: 'Secret Part '},
];

const Journey = () => {
  return (
    <section id="journey" className={styles.journey}>
      <div className={styles.title}>
        <H2 text="We’ll Journey Through" />
      </div>
      <ul className={styles.list}>
        {journeyItems.map((item, index) => (
          <li className={styles.item} key={index}>
            <div className={styles.order}>0{item.order}.</div>
            {item.title}
            <span>{item.order === 6 && 'and more...'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Journey;
