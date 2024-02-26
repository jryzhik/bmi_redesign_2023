import React from 'react'
import ImageNGradient from '../components/hero/imageNGradient'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import theme from '../styles/theme'
import styles from '../styles/Hero/Hero.module.css';
import DonationMasterForm from '../components/donations/donationMasterForm'
import buttonStyles from '../styles/Donate/ColorDonate.module.css';
import ProfileNTexts from '../components/texts/profileNTexts';
import stylesFocus from '../styles/Texts/Profiles.module.css';
import SlideGallery from '../components/images/slideGallery';
import Quote from '../components/texts/quote';


const style_containerTop = styles.imageContainerGradientGospel;
const style_imgTop = styles.mainImageGospel;
const style_containerBottom = styles.wrapperBottomContainerGospel;
const style_imgBottom = styles.bottomImgContainerGospel;


export default function gospel() {

    return (
        <ImageNGradient
            color1="#9DA7B3"
            color2="#8FAABD"
            imageUrlTop="/img/hero_images/evangelism_main.jpg"
            imageUrlBottom="/img/hero_images/evangelism_bottom.jpg"
            style_containerTop={style_containerTop}
            style_imgTop={style_imgTop}
            style_imgBottom={style_imgBottom}
            style_containerBottom={style_containerBottom}
            content={
                <div className={styles.paddingContent}>
                    <HeaderNComponent
                        primaryHeaderText='Sharing the gospel with the lost and searching'
                        SecondaryComponent={
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3125em' }}>
                                <P color={theme.colors.WHITE} text='The people of Belarus cry out, for what they do not know. God, however, knows what they need and has made provision for them.We need only bring them the word of that provision.Their hearts are primed and ready to respond to the word of God but that cannot happen unless someone tells them the good news. In our evangelical mission in schools, neighborhoods, collective farms, prisons, and orphanages we make that all important initial contact.' />                            </div>
                        }
                        secondaryAllign='left'
                        color={theme.colors.WHITE}
                    />
                    <Quote
                        imageUrl={null}
                        author="Romans 10:14"
                        quoteText={"How then shall they call on him in whom they have not believed? and how shall they believe in him of whom they have not heard? and how shall they hear without a preacher?"}
                        colorQuote={{ filter: 'invert(100%)' }}
                        color={theme.colors.WHITE}
                    />
                    <div style={{ paddingBottom: ".1rem" }} />
                    <DonationMasterForm
                        headerText={"Support the sharing of the Gospel"}
                        secondaryText={"We are bold in proclaiming the Good News in Christ to our fellow brothers and sisters in Belarus."}
                        secondaryAllign='center'
                        color={theme.colors.WHITE}
                        buttonStyle={buttonStyles.dollarButton}
                        fund={"Evangelism"}
                    />
                </div>
            }
        />
    )
}
