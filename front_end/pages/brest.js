import React, { useEffect, useState } from 'react'
import ImageNGradient from '../components/hero/imageNGradient'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import styles from '../styles/Hero/Hero.module.css';
import Quote from '../components/texts/quote'
import profileIgor from '../public/img/missionaries/igorKanyuchka.jpg'
import DonationMasterForm from '../components/donations/donationMasterForm'
import buttonStyles from '../styles/Donate/ColorDonate.module.css';

export default function brest() {

    return (
        <ImageNGradient
            color1="#312822"
            color2="#63351A"
            imageUrlTop="/img/hero_images/brest_bible_church.jpg"
            imageUrlBottom="/img/hero_images/brest_bible_church_bottom.jpg"
            textParent='Donate'
            textChild='BBC'
            headerText='Brest Bible Church building fund donations'
            subText='Brest Bible Church is developing into a christian stronghold that will change the lives of thousands of young people.'
            imageFocus={'0 -200px'}
            // imageFocus={100 + 'px ' + 200 + 'px'}
            scale1={1}
            scale2={1}
            content={
                <div className={styles.paddingContent}>
                    <HeaderNComponent
                        primaryHeaderText='Brest Bible Church Building Fund'
                        SecondaryComponent={
                            <P text='Brest Bible Church is developing into a christian stronghold that will change the lives of thousands of young people.' color={theme.colors.WHITE} />
                        }
                        secondaryAllign='left'
                        color={theme.colors.WHITE}
                    />
                    <iframe className={styles.youtube} src="https://www.youtube.com/embed/ZBL5AqXoqiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <Quote
                        imageUrl={profileIgor}
                        author="Igar Kanyuchka"
                        role="Pastor"
                        organization="Brest Bible Church"
                        quoteText={"We are grateful to God for His mercy and grace towards us and for the possibility to be His instruments in proclaiming the Gospel in our city. We are witnesses of how God changes the hearts of people."}
                        colorQuote={{ filter: 'invert(100%)' }}
                        color={theme.colors.WHITE}

                    /><div style={{paddingBottom: "1rem"}}/>
                    <DonationMasterForm
                        headerText={"Help us construct the community church"}
                        secondaryText={"Your support financially allows us to provide help in planting local churches across Belarus."}
                        secondaryAllign='center'
                        color={theme.colors.WHITE}
                        buttonStyle={buttonStyles.dollarButton}
                        fund={"construction | BBC"}
                    />
                </div>
            }
        />
    )
}
