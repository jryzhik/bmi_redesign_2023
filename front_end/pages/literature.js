import React from 'react';
import ImageNGradient from '../components/hero/imageNGradient';
import HeaderNComponent from '../components/texts/HeaderNComponent';
import P from '../components/fonts/P';
import styles from '../styles/Hero/Hero.module.css';
import theme from '../styles/theme';
import DonationMasterForm from '../components/donations/donationMasterForm';
import buttonStyles from '../styles/Donate/ColorDonate.module.css';
import PercentBarNIcons from '../components/texts/percentBarNIcons';

const style_containerTop = styles.imageContainerGradientLiterature;
const style_imgTop = styles.mainImageLiterature;
const style_containerBottom = styles.wrapperBottomContainerLiterature;
const style_imgBottom = styles.bottomImgContainerLiterature;

export default function literature({ numbers }) {
   return (
      <ImageNGradient
         color1="#202A2A"
         color2="#2C2622"
         imageUrlTop="/img/donation/designated_cover/top/good_and_evil.jpg"
         imageUrlBottom="/img/hero_images/literature_secondary.jpg"
         style_containerTop={style_containerTop}
         style_imgTop={style_imgTop}
         style_imgBottom={style_imgBottom}
         style_containerBottom={style_containerBottom}
         content={
            <div className={styles.paddingContent}>
               <HeaderNComponent
                  primaryHeaderText="“Good & Evil” Illustrated Bible"
                  SecondaryComponent={
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3125em' }}>
                        <P
                           color={theme.colors.WHITE}
                           text="Organizers of mission trips to Belarus are adamant that ten dollars is a small investment to reap such a tremendous dividend for the Kingdom, sharing the Gospel in this country where 99 percent of its people do not believe in a personal Christ."
                        />
                        <P
                           color={theme.colors.WHITE}
                           text="This illustrated Bible is a powerful presentation of Genesis to Revelation, second to none in quality. One book becomes a missionary that never goes home and never gets tired and passes from person to person, and is read again and again."
                        />
                        <P
                           color={theme.colors.WHITE}
                           text="Leaders in Belarus and Israel are excited about the impact of this soul-winning tool. Statistics show that 40 percent of people who receive the book give trust in Christ and commit to live for Him. Since 2000, many churches have sent teams to partner with Byelorussian Mission and have taken part in Bible distribution efforts and witnessed first-hand the effectiveness of this outreach method."
                        />
                     </div>
                  }
                  secondaryAllign="left"
                  color={theme.colors.WHITE}
               />
               <iframe
                  className={styles.youtube}
                  src="https://www.youtube.com/embed/Jsj1ayNSnqo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
               ></iframe>
               <HeaderNComponent
                  SecondaryComponent={
                     <>
                        <P
                           color={theme.colors.WHITE}
                           text="Now is the perfect time to get involved with this life-changing project. Your donations will help to purchase thousands of copies of the illustrated Good and Evil Bible to reach 10 million souls for Christ."
                        />

                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '.3125em',
                              paddingTop: '1.3125em',
                              paddingLeft: '.5em',
                           }}
                        >
                           <P color={theme.colors.WHITE} text="• &nbsp;Visually Appealing to read" />
                           <P color={theme.colors.WHITE} text="•  &nbsp;Each book passed through families" />
                           <P color={theme.colors.WHITE} text="•  &nbsp;Easy to Understand" />
                           <P color={theme.colors.WHITE} text="•  &nbsp;Pure Gospel Story" />
                        </div>
                     </>
                  }
                  secondaryAllign="left"
                  color={theme.colors.WHITE}
               />
               <PercentBarNIcons
                  color1={'#A9B945'}
                  color2={'#FFFFFF'}
                  passedImage1={'/img/donation/progressIcons/GoodNEvil.jpg'}
                  passedImage2={'/img/donation/progressIcons/remainingMoneyIcon.jpg'}
                  amountRaised={numbers.amountRaisedBible}
                  goal={numbers.goalBible}
               />
               <DonationMasterForm
                  headerText={'Expand the gospel through print'}
                  secondaryText={
                     'Reaching both young and old our books are meant to be easily understood while conveying the powerful message of the gospel.'
                  }
                  secondaryAllign="center"
                  color={theme.colors.WHITE}
                  widgetID='LvG0Zg'
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
