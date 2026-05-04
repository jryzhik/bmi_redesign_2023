import React from 'react';
import ImageNGradient from '../components/hero/imageNGradient';
import HeaderNComponent from '../components/texts/HeaderNComponent';
import P from '../components/fonts/P';
import styles from '../styles/Hero/Hero.module.css';
import theme from '../styles/theme';
import DonationMasterForm from '../components/donations/donationMasterForm';
import buttonStyles from '../styles/Donate/ColorDonate.module.css';
import PercentBarNIcons from '../components/texts/percentBarNIcons';

const style_containerTop = styles.imageContainerGradientMatching;
const style_imgTop = styles.mainImageMatching;
const style_containerBottom = styles.wrapperBottomContainerMatching;
const style_imgBottom = styles.bottomImgContainerMatching;

export default function matching({ numbers }) {
   return (
      <ImageNGradient
         color1="#9A7356"
         color2="#161510"
         imageUrlTop="/img/hero_images/matching_main.jpg"
         imageUrlBottom="/img/hero_images/matching_secondary.jpg"
         style_containerTop={style_containerTop}
         style_imgTop={style_imgTop}
         style_imgBottom={style_imgBottom}
         style_containerBottom={style_containerBottom}
         content={
            <div className={styles.paddingContent}>
               <HeaderNComponent
                  primaryHeaderText="The matching fund challenge"
                  SecondaryComponent={
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3125em' }}>
                        <P
                           color={theme.colors.WHITE}
                           text="Our ministry has been incredibly blessed to receive a very generous matching fund challenge of $250,000 to print new Bibles & Christian Literature for distribution in 9 different countries!"
                        />
                        <P
                           color={theme.colors.WHITE}
                           text="On behalf of Byelorussian Mission, we are incredibly grateful for your partnership in the Lord’s Work in past years printing. If the Lord leads you, please help us raise $250,000 to continue to reach many sinners for Him during this difficult time in Eastern Europe and Beyond."
                        />
                        <P
                           color={theme.colors.WHITE}
                           text="It is estimated that just one Bible ends up touching statistically 5-7 people! Of those, 42% end up coming to faith! So, we want to print 50,000 Russian Bibles, which could impact 250,000 to 350,000 people! What a God given challenge! Let’s join together to spread life!!"
                        />
                     </div>
                  }
                  secondaryAllign="left"
                  color={theme.colors.WHITE}
               />

               <PercentBarNIcons
                  color1={'#A7E6EA'}
                  color2={'#FFFFFF'}
                  passedImage1={'/img/donation/progressIcons/Bible.jpg'}
                  passedImage2={'/img/donation/progressIcons/remainingMoneyIcon.jpg'}
                  amountRaised={numbers.amountRaisedMatching}
                  goal={numbers.goalMatching}
               />
               <DonationMasterForm
                  headerText={'Spread life through the Bible'}
                  secondaryText={'Help us get a Bible to every household in Eastern Europe.'}
                  secondaryAllign="center"
                  color={theme.colors.WHITE}
                  widgetID='LvG0Zg'
                  giveButterID='f4A0mi'
               />
            </div>
         }
      />
   );
}

export async function getServerSideProps() {
   try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_REST_URL}/api/magicnumbers/672006177bbcfed472859d68?draft=false`);
      const data = await resp.json();

      return {
         props: { numbers: data },
      };
   } catch (e) {
      console.error(e);
      return { props: { numbers: {}, ok: false, reason: e.message, cause: e.cause } };
   }
}
