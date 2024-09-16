import H2 from '../fonts/H2';
import styles from '../../styles/Banquet/Tickets.module.css';
import Quantity from '../quanitity';
import P from '../fonts/P';
const tickets = [
  {
    id: 1,
    title: 'Standard',
    description: 'Perfect for those who value impactful events and memorable evenings',
    colorPrimary: '#C2EDFF',
    colorSecondary: '#E7F8FF',
    price: 75,
    link: 'https://2ay5glqvmz7.typeform.com/to/L9tk8LdO#quantity',
    items: [
      {title: 'Prime Seating', validate: true},
      {title: 'Network Time', validate: true},
      {title: 'Gourmet Dinner', validate: true},
      {title: 'Reserved Parking', validate: false},
      {title: 'VIP Table', validate: false},
      {title: 'Private Table for 10', validate: false},
    ],
  },
  {
    id: 2,
    title: 'VIP Ticket',
    description: 'Perfect for those who value extra comfort and exclusivity',
    colorPrimary: '#80F8AD',
    colorSecondary: '#E4FFEE',
    price: 150,
    link: 'https://2ay5glqvmz7.typeform.com/to/fWctUyn9#quantity',
    items: [
      {title: 'Prime Seating', validate: true},
      {title: 'Network Time', validate: true},
      {title: 'Gourmet Dinner', validate: true},
      {title: 'Reserved Parking', validate: true},
      {title: 'VIP Table', validate: true},
      {title: 'Private Table for 10', validate: false},
    ],
  },
  {
    id: 3,
    title: 'Full Table',
    description: 'Perfect for generous groups who value impactful giving and the power of the Gospel',
    colorPrimary: '#FFDE2F',
    colorSecondary: '#FFF5C3',
    price: 1500,
    link: 'https://2ay5glqvmz7.typeform.com/to/ffhHndrV',
    items: [
      {title: 'Prime Seating', validate: true},
      {title: 'Network Time', validate: true},
      {title: 'Gourmet Dinner', validate: true},
      {title: 'Reserved Parking', validate: true},
      {title: 'VIP Table', validate: true},
      {title: 'Private Table for 10', validate: true},
    ],
  },
];
const Tickets = () => {
  return (
    <section id="tickets" className={styles.tickets}>
      <div className={styles.title}>
        <H2 text="We’ll be very happy to see you at the banquet" />
      </div>
      <div className={styles.parent}>
        <div className={styles.wrapper}>
          {tickets.map((item) => (
            <div className={styles.card} id={item.id}>
              <span className={`${styles.shape} ${styles.shapeLeftTop}`}></span>
              <span className={`${styles.shape} ${styles.shapeCenterTop}`}></span>
              <span className={`${styles.shape} ${styles.shapeRightTop}`}></span>

              <span className={`${styles.shape} ${styles.shapeLeftBottom}`}></span>
              <span className={`${styles.shape} ${styles.shapeRightBottom}`}></span>
              <div className={styles.cardTop} style={{backgroundColor: item.colorPrimary}}>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.cardDescr}>{item.description} </p>
                <div className={styles.cardPrice}>
                  <span className={styles.cardPriceValue}>{item.price}</span>
                  <span>/ {item.id !== 3 ? 'seat' : 'table'}</span>
                </div>
              </div>
              <div className={styles.cardBody} style={{backgroundColor: item.colorSecondary}}>
                <ul>
                  {item.items.map((item, index) => (
                    <li key={item.index}>
                      {item.validate === true ? (
                        <div className={styles.cardBodyIconCheck}>
                          <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3L3.625 5.5L8 0.5" stroke="#346174" />
                          </svg>
                        </div>
                      ) : (
                        <div className={styles.cardBodyIconXmark}>
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L4.5 4.5M8 8L4.5 4.5M4.5 4.5L8 1L1 8" stroke="#E7F8FF" />
                          </svg>
                        </div>
                      )}
                      {item.title}
                    </li>
                  ))}
                </ul>
                {item.id !== 3 && <Quantity item={item} />}
                {item.id === 3 && (
                  <a className={styles.cardButton} href={item.link}>
                    Reserve Your table
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.contentBox}>
          <span className={`${styles.shape} ${styles.shapeLeftTop}`}></span>
          <span className={`${styles.shape} ${styles.shapeRightTop}`}></span>
          <span className={`${styles.shape} ${styles.shapeLeftBottom}`}></span>
          <span className={`${styles.shape} ${styles.shapeRightBottom}`}></span>
          <h2 className={styles.contentBoxTitle}>One Bible can touch 7 lives!</h2>
          <P text="Our goal is to raise $250,000 to print Bibles and Christian literature. " />
          <P text="Every dollar you give will be doubled, amplifying your impact! With one Bible touching 7 lives, imagine the power of reaching up to 350,000 souls!" />
          <P text="Together, let's spread the life-changing Word of God across Eastern Europe and beyond." />
        </div>
      </div>
    </section>
  );
};

export default Tickets;
