import React from 'react'
import ImageNGradient from '../components/hero/imageNGradient'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import styles from '../styles/Hero/Hero.module.css';
import theme from '../styles/theme'
import DonationMasterForm from '../components/donations/donationMasterForm'
import buttonStyles from '../styles/Donate/ColorDonate.module.css';
import PercentBarNIcons from '../components/texts/percentBarNIcons';
import clientPromise from '../lib/mongo/connect';



const style_containerTop = styles.imageContainerGradientMatching;
const style_imgTop = styles.mainImageMatching;
const style_containerBottom = styles.wrapperBottomContainerMatching;
const style_imgBottom = styles.bottomImgContainerMatching;




export default function matching({ stats }) {
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
                        primaryHeaderText='The matching fund challenge'
                        SecondaryComponent={
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3125em' }}>
                                <P color={theme.colors.WHITE} text='Our ministry has been incredibly blessed to receive a very generous matching fund challenge of $200,000 to print new Bibles & Christian Literature for distribution in 9 different countries!' />
                                <P color={theme.colors.WHITE} text='On behalf of Byelorussian Mission, we are incredibly grateful for your partnership in the Lord’s Work in past years printing. If the Lord leads you, please help us raise $200,000 to continue to reach many sinners for Him during this difficult time in Eastern Europe and Beyond.' />
                                <P color={theme.colors.WHITE} text='It is estimated that just one Bible ends up touching statistically 5-7 people! Of those, 42% end up coming to faith! So, we want to print 40,000 Russian Bibles, which could impact 200,000 to 250,000 people! What a God given challenge! Let’s join together to spread life!!' />
                            </div>
                        }
                        secondaryAllign='left'
                        color={theme.colors.WHITE}
                    />

                    <PercentBarNIcons 
                        color1={"#A7E6EA"} 
                        color2={"#FFFFFF"}
                        passedImage1={"/img/donation/progressIcons/Bible.jpg"}
                        passedImage2={"/img/donation/progressIcons/remainingMoneyIcon.jpg"}
                        amountRaised={stats[0].amountRaisedMatching}
                        goal={stats[0].goalMatching}
                        />
                    <DonationMasterForm
                        headerText={"Spread life through the Bible"}
                        secondaryText={"Help us get a Bible to every household in Belarus."}
                        secondaryAllign='center'
                        color={theme.colors.WHITE}
                        buttonStyle={buttonStyles.dollarButton}
                        fund={"Orphan Adoption"}
                    />
                </div>
            }
        />
    )
}


export async function getServerSideProps() {
    try {
      const client = await clientPromise;
      const db = client.db("masterdb");
  
      const news = await db
        .collection("news")
        .find({})
        .sort({ name_of_date_field: 1 })
        .limit(20)
        .toArray();
  
      const stats = await db
        .collection("stats")
        .find({})
        .limit(1)
        .toArray();
  
      return {
        props: { stats: JSON.parse(JSON.stringify(stats)) },
      };
    } catch (e) {
      console.error(e);
    }
  }