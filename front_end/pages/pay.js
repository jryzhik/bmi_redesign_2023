import React from 'react'
import ImageNGradient from '../components/hero/imageNGradient'
import theme from '../styles/theme'
import buttonStyles from '../styles/Donate/ColorDonate.module.css';
import styles from '../styles/Hero/Hero.module.css';


import DonationMasterForm from '../components/donations/donationMasterForm';


const style_containerTop = styles.imageContainerGradientTrip;
const style_imgTop = styles.mainImageTrip;





export default function legacy() {
    return (
        <ImageNGradient
            color1="#D0D5DF"
            color2="#D7DBE4"
            imageUrlTop="/img/hero_images/trip_donation.jpg"
            style_containerTop={style_containerTop}
            style_imgTop={style_imgTop}
            content={
                <div className={styles.paddingContent}>
                    <DonationMasterForm
                        headerText={"Trip Donations"}
                        secondaryText={"Make your trip donation here, with convenient online platforms."}
                        secondaryAllign='center'
                        color={theme.colors.BLACK}
                        widgetID='L4y6Gg'
                    />
                    <div style={{paddingTop: '1.2em'}}></div>
                </div>
            }
        />
    )
}
