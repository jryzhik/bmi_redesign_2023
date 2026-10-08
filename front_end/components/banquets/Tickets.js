import H2 from '../fonts/H2';
import styles from '../../styles/Banquet/Tickets.module.css';
import Quantity from '../quanitity';
import P from '../fonts/P';
import {useEffect} from 'react';

function openTypeformPopup(url) {
  window.typeformEmbed.makePopup(url, {
    mode: 'popup',
    autoOpen: true,
    hideHeaders: true,
    hideFooters: true,
    onSubmit: function () {
      console.log('Typeform successfully submitted');
    },
  });
}

const tickets = [
  {
    id: 1,
    title: 'Standard',
    description: 'Perfect for those who value impactful events and memorable evenings',
    colorPrimary: '#C2EDFF',
    colorSecondary: '#E7F8FF',
    price: 100,
    link: 'https://2ay5glqvmz7.typeform.com/to/I4smDxD6',
    items: [
      {title: 'Prime Seating', validate: true},
      {title: 'Network Time', validate: true},
      {title: 'Gourmet Dinner', validate: true},
      {title: 'Reserved Parking', validate: false},
      {title: 'VIP Table', validate: false},
      {title: 'Private Table for 10', validate: false},
    ],
  },
  // {
  //   id: 2,
  //   title: 'VIP Ticket',
  //   description: 'Perfect for those who value extra comfort and exclusivity',
  //   colorPrimary: '#80F8AD',
  //   colorSecondary: '#E4FFEE',
  //   price: 150,
  //   link: 'https://2ay5glqvmz7.typeform.com/to/fWctUyn9',
  //   items: [
  //     {title: 'Prime Seating', validate: true},
  //     {title: 'Network Time', validate: true},
  //     {title: 'Gourmet Dinner', validate: true},
  //     {title: 'Reserved Parking', validate: true},
  //     {title: 'VIP Table', validate: true},
  //     {title: 'Private Table for 10', validate: false},
  //   ],
  // },
  {
    id: 3,
    title: 'Full Table',
    description: 'Perfect for generous groups who value impactful giving and the power of the Gospel',
    colorPrimary: '#FFDE2F',
    colorSecondary: '#FFF5C3',
    price: 1000,
    link: 'https://2ay5glqvmz7.typeform.com/to/bz6wBa8e',
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
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = 'https://embed.typeform.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
                  <span className={styles.cardPriceValue}>${item.price.toLocaleString('en-US')}</span>
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
                  <a className={styles.cardButton} onClick={() => openTypeformPopup(item.link)} href="#3">
                    Reserve Your Table
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
          <h2 className={styles.contentBoxTitle}>Adopt a City</h2>
          <P text="In this next phase of ministry, our goal is to plant 50 new churches across Eastern Europe, each one partnered with a church here for the long term, just as First Redeemer did in Brest." />
        </div>
      </div>
    </section>
  );
};

export default Tickets;
