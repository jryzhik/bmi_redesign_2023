import Image from 'next/image';
import H1 from '../components/fonts/H1';
import H2 from '../components/fonts/H2';
import H3 from '../components/fonts/H3';
import H5 from '../components/fonts/H5';
import P from '../components/fonts/P';
import TITLE from '../components/fonts/TITLE';
import BarNText from '../components/texts/barNText';
import TwoProgressOfHundred from '../components/texts/twoProgressOfHundred';
import RoundedButton from '../components/buttons/roundedButton';
import BelarusMap from '../components/give/BelarusMap';
import GiveForm from '../components/give/GiveForm';
import buttonStyles from '../styles/Donate/ColorDonate.module.css';
import styles from '../styles/GivingTuesday/GivingTuesday.module.css';
import theme from '../styles/theme';
import { CHURCH_CAPTION, GOAL_DOLLARS, QUESTIONS_CONTACT, RAISED_DOLLARS } from '../tools/banquetGiving';

const WHITE = theme.colors.WHITE;
const LIGHT_BLUE = '#a7e6eb';

const stats = [
   { lead: 'Nearly', number: '31,000', text: 'came to hear the gospel in Minsk' },
   { lead: 'More than', number: '2,000', text: 'responded' },
   { lead: 'Nearly', number: '700', text: 'churches took part' },
];

const gifts = [
   {
      title: '$10',
      text: 'puts an illustrated Bible in someone’s hands. On average, seven people read it.',
      image: '/img/giving-tuesday/bibles.jpg',
      alt: 'Children looking at stacks of illustrated Bibles',
   },
   {
      title: '$50 a month',
      text: 'cares for one child in a Christian foster family. 660 children live in these homes.',
      image: '/img/giving-tuesday/foster-family.jpg',
      alt: 'A group of children and adults holding books and gift bags',
   },
   {
      title: '50 day care centers',
      text: 'give children at risk a hot meal, help with homework, and Bible lessons.',
      image: '/img/giving-tuesday/daycare-meal.jpg',
      alt: 'Boys at a day care center table with plates of hot food',
   },
];

const dollars = (amount) => `$${amount.toLocaleString('en-US')}`;

export default function GivingTuesday() {
   const percentRaised = RAISED_DOLLARS ? Number(((100 * RAISED_DOLLARS) / GOAL_DOLLARS).toFixed(1)) : null;

   return (
      <div className={styles.page}>
         <div className={styles.gradient}>
            <section className={styles.hero}>
               <div className={styles.heroText}>
                  <TITLE text="Giving Tuesday · December 1, 2026" color={WHITE} />
                  <H1 text="The doors in Belarus are wide open" color={WHITE} />
                  <P
                     color={WHITE}
                     text="In May, nearly 31,000 people came to hear the gospel in Minsk. More than 2,000 responded. This Giving Tuesday, help give them a church to grow in."
                  />
                  <a className={styles.heroButton} href="#give">
                     <RoundedButton text="Give today" passedStyle={buttonStyles.submitButtonWhite} callBackFunction={null} />
                  </a>
               </div>
               <div className={styles.heroMap}>
                  <BelarusMap />
               </div>
            </section>

            <section className={styles.section}>
               <H2 text="How we got here" color={WHITE} style={{ textAlign: 'center' }} />
               <div className={styles.text}>
                  <P
                     color={WHITE}
                     text="For twelve years we have helped train pastors in Belarus. Churches of different denominations began to work side by side."
                  />
                  <P
                     color={WHITE}
                     text="In May 2026 that unity filled Minsk. Nearly 700 churches took part in the Festival of Hope with Franklin Graham. We helped train pastors before it and supplied Bibles and follow-up books after it."
                  />
               </div>
               <div className={styles.stats}>
                  {stats.map((stat) => (
                     <div className={styles.stat} key={stat.number}>
                        <P color={WHITE} text={stat.lead} />
                        <BarNText percentText={stat.number} description={stat.text} color={LIGHT_BLUE} colorText={WHITE} />
                     </div>
                  ))}
               </div>
               <div className={styles.photos}>
                  <img
                     src="/img/giving-tuesday/pastors.jpg"
                     alt="Pastors from different churches standing together, holding books"
                     loading="lazy"
                  />
                  <img src="/img/giving-tuesday/festival-arena.jpg" alt="A full arena during an evening service" loading="lazy" />
               </div>
            </section>

            <section className={styles.section}>
               <H2 text="New believers need a church" color={WHITE} style={{ textAlign: 'center' }} />
               <div className={styles.text}>
                  <P
                     color={WHITE}
                     text="Belarus has about one church for every 12,000 people. The United States has one for every 1,000."
                  />
               </div>
               <div className={styles.density}>
                  <TITLE text="One church for every" color={WHITE} />
                  <div className={styles.densityPair}>
                     <div className={styles.densityItem}>
                        <div className={styles.blocks} aria-hidden="true">
                           <span>
                              <i />
                           </span>
                        </div>
                        <BarNText
                           percentText="1,000"
                           description="people in the United States"
                           color="transparent"
                           colorText={WHITE}
                        />
                     </div>
                     <div className={styles.densityItem}>
                        <div className={styles.blocks} aria-hidden="true">
                           {Array.from({ length: 12 }, (_, index) => (
                              <span key={index}>{index === 5 ? <i /> : null}</span>
                           ))}
                        </div>
                        <BarNText percentText="12,000" description="people in Belarus" color="transparent" colorText={WHITE} />
                     </div>
                  </div>
               </div>
               <div className={styles.text}>
                  <P
                     color={WHITE}
                     text="An event can introduce someone to Christ. A local church is where they grow. That is our work in 2027: churches, Bibles, and care for children, carried by local believers."
                  />
               </div>
            </section>

            <section className={styles.section}>
               <H2 text="What your gift does" color={WHITE} style={{ textAlign: 'center' }} />
               <div className={styles.gifts}>
                  {gifts.map((gift) => (
                     <div className={styles.gift} key={gift.title}>
                        <img src={gift.image} alt={gift.alt} loading="lazy" />
                        <H3 text={gift.title} color={WHITE} />
                        <P color={WHITE} text={gift.text} />
                     </div>
                  ))}
               </div>
               <div className={`${styles.text} ${styles.centered}`}>
                  <H3 text="$100,000 to $200,000" color={WHITE} />
                  <P
                     color={WHITE}
                     textAlign="center"
                     text="builds a church. Local believers raise 40%. We fund the other 60%. Five buildings are under way."
                  />
               </div>
               <div className={styles.photos}>
                  <figure>
                     <img
                        src="/img/giving-tuesday/church-january.jpg"
                        alt="A two-storey brick church building under construction"
                        loading="lazy"
                     />
                     <TITLE text="January" color={WHITE} />
                  </figure>
                  <figure>
                     <img
                        src="/img/giving-tuesday/church-today.jpg"
                        alt="The church building today, with white walls and windows in place"
                        loading="lazy"
                     />
                     <TITLE text="Today" color={WHITE} />
                  </figure>
               </div>
               {CHURCH_CAPTION ? <P color={WHITE} text={CHURCH_CAPTION} /> : null}
            </section>

            <section className={styles.section}>
               <H2 text={`Our year-end giving goal: ${dollars(GOAL_DOLLARS)}`} color={WHITE} style={{ textAlign: 'center' }} />
               {percentRaised === null ? null : (
                  <div className={styles.goalBars}>
                     <TwoProgressOfHundred percentRaised={percentRaised} color1={LIGHT_BLUE} color2={WHITE} />
                     <div className={styles.goalNumbers}>
                        <BarNText
                           percentText={`${percentRaised}%`}
                           description={`${dollars(RAISED_DOLLARS)} Raised`}
                           color={LIGHT_BLUE}
                           colorText={WHITE}
                        />
                        <BarNText
                           percentText={`${Number((100 - percentRaised).toFixed(1))}%`}
                           description={`${dollars(GOAL_DOLLARS - RAISED_DOLLARS)} Needed`}
                           color={WHITE}
                           opacity={0.4}
                           colorText={WHITE}
                        />
                     </div>
                  </div>
               )}
               <div className={styles.text}>
                  <P
                     color={WHITE}
                     text="This is our giving goal from Giving Tuesday through the end of the year. You can be part of it today."
                  />
                  <P
                     color={WHITE}
                     text="Jesus prayed that His followers would be one, “so that the world may believe” (John 17:21). In Belarus we are watching that prayer answered. Thank you for being part of it."
                  />
                  <H5 text="Andrew Ryzhkov, Founder" color={WHITE} />
               </div>
            </section>

            <section id="give" className={styles.section}>
               <H2 text="Give this Giving Tuesday" color={WHITE} style={{ textAlign: 'center' }} />
               <GiveForm />
               <div className={`${styles.text} ${styles.centered}`}>
                  <P
                     color={WHITE}
                     textAlign="center"
                     text="Prefer to give by check? Make it payable to Byelorussian Mission, Inc. and mail it to 3395 Chamblee Gap Road, Cumming, GA 30040."
                  />
                  <P
                     color={WHITE}
                     textAlign="center"
                     text={`Byelorussian Mission, Inc. is a US 501(c)(3), accredited since 2019 by the Evangelical Council for Financial Accountability. Our Form 990s are public.${
                        QUESTIONS_CONTACT ? ` Questions? Call ${QUESTIONS_CONTACT.name} at ${QUESTIONS_CONTACT.phone}.` : ''
                     }`}
                  />
               </div>
            </section>
         </div>
         {/* Like the ministry pages: the gradient fades into a photo at the foot of the page. */}
         <div className={styles.bottom}>
            <Image
               src="/img/giving-tuesday/reading-bottom.webp"
               alt="A young man reading a Bible storybook outdoors under a blue sky"
               width={2000}
               height={1260}
               sizes="(max-width: 863px) 863px, 100vw"
               quality={85}
            />
         </div>
      </div>
   );
}
