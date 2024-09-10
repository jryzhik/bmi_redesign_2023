import React from 'react';
import ImageNtext from '../components/hero/imageNtext';
import Grid from '@mui/material/Unstable_Grid2';
import styles from '../styles/Texts/Profiles.module.css';
import ProfileNTexts from '../components/texts/profileNTexts';
import passedStyles from '../styles/Texts/Profiles.module.css';
import banquetStyles from '../styles/Banquet/Banquet.module.css';
import P from '../components/fonts/P';
import H2 from '../components/fonts/H2';
import Quantity from '../components/quanitity/index';

const board = [
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

const tickets = [
  {
    title: 'Standard',
    description:
      'Perfect for those who value impactful events and memorable evenings',
    price: 75,
    items: [
      {title: 'Prime Seating', validate: true},
      {title: 'Network Time', validate: true},
      {title: 'Complimentary Spiritual Books', validate: true},
      {title: 'Reserved Parking', validate: false},
      {title: 'VIP Table', validate: false},
      {title: 'Private Table for 10', validate: false},
    ],
  },
];

const Banquet = () => {
  return (
    <>
      <ImageNtext
        imageUrl="/img/banquet/hero-bg.jpg"
        textParent="Events"
        textChild="Banquet Fundraisers "
        headerText="Fearless for the Gospel"
        subText="“For God has not given us a spirit of fear, but of power and of love and of a sound mind”"
      />
      <section id="welcome" className={banquetStyles.welcome}>
        <h2 className={banquetStyles.welcomeTitle}>November 16, 7-9 PM</h2>
        <h3 className={banquetStyles.welcomeSubtitle}>
          Forsyth Conference Center, 3410 Ronald Reagan BLVD
        </h3>
        <div className={banquetStyles.welcomeTextWrapper}>
          <P text="After a 4-year pause, the Annual Fundraiser Banquet is back!" />
          <P
            text="BMI has been busy with impactful projects Bible Printing, the Orphan
            Adoption Program, and so much more."
          />

          <P
            text="Join us for an evening with a special guest, live music, and a look
            at our exciting future plans!"
          />

          <P text="Be a Part of Our Mission – Get Your Tickets Today" />

          <a className={banquetStyles.welcomeButton} href="#">
            Reserve your spot
          </a>
        </div>
      </section>
      <section id="journey" className={banquetStyles.journey}>
        <div className={banquetStyles.journeyTitle}>
          <H2 text="We’ll Journey Through" />
        </div>
        <ul className={banquetStyles.journeyList}>
          <li>Groundbreaking Initiatives</li>
          <li>Music Perfomance</li>
          <li>Founders Speech</li>
          <li>Vision for the Future</li>
          <li>Special Guest Insights</li>
          <li>
            Secret Part <span>and more...</span>{' '}
          </li>
        </ul>
      </section>
      <section id="guests" className={banquetStyles.guests}>
        <div className={banquetStyles.guestsTitle}>
          <H2 text="Special Guests" />
        </div>
        <Grid
          paddingLeft={4}
          paddingRight={4}
          container
          justifyContent="center"
        >
          {board.map((member) => (
            <Grid
              className={styles.verticalSpacing}
              xs={12}
              sm={6}
              md={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ProfileNTexts
                textName={member.name}
                textJobTitle={member.jobTitle}
                passedImage={member.imgSource}
                borderRadius="50%"
                passedStyle={passedStyles.profilePic}
              />
            </Grid>
          ))}
        </Grid>
      </section>
      <section id="tickets" className={banquetStyles.tickets}>
        <div className={banquetStyles.ticketsTitle}>
          <H2 text="We’ll be very happy to see you at the banquet" />
        </div>
        <div className={banquetStyles.ticketsWrapper}>
          {tickets.map((item) => (
            <div className={banquetStyles.ticketsCard}>
              <div className={banquetStyles.ticketsCardTop}>
                <h2 className={banquetStyles.ticketsCardTitle}>{item.title}</h2>
                <p className={banquetStyles.ticketsCardDescr}>
                  {item.description}{' '}
                </p>
                <div className={banquetStyles.ticketsPrice}>
                  <span className={banquetStyles.ticketsPriceValue}>
                    {item.price}
                  </span>
                  <span>/ seat</span>
                </div>
              </div>
              <div className={banquetStyles.ticketsCardBody}>
                <ul>
                  {item.items.map((item, index) => (
                    <li key={item.index}>
                      {item.validate === true ? (
                        <div className={banquetStyles.ticketsCardBodyIconCheck}>
                          <svg
                            width="9"
                            height="7"
                            viewBox="0 0 9 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1 3L3.625 5.5L8 0.5" stroke="#346174" />
                          </svg>
                        </div>
                      ) : (
                        <div className={banquetStyles.ticketsCardBodyIconXmark}>
                          <svg
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L4.5 4.5M8 8L4.5 4.5M4.5 4.5L8 1L1 8"
                              stroke="#E7F8FF"
                            />
                          </svg>
                        </div>
                      )}
                      {item.title}
                    </li>
                  ))}
                </ul>
                <div className={banquetStyles.quantity}>
                  <span>Quantity</span>
                </div>
                <Quantity />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Banquet;
