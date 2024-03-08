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



const style_containerTop = styles.imageContainerGradientLove;
const style_imgTop = styles.mainImageLove;
const style_containerBottom = styles.wrapperBottomContainerLove;
const style_imgBottom = styles.bottomImgContainerLove;




export default function love({ stats }) {
    return (
        <ImageNGradient
            color1="#161B1F"
            color2="#0B152A"
            imageUrlTop="/img/hero_images/loveAction_main.jpg"
            imageUrlBottom="/img/hero_images/loveAction_secondary.jpg"
            style_containerTop={style_containerTop}
            style_imgTop={style_imgTop}
            style_imgBottom={style_imgBottom}
            style_containerBottom={style_containerBottom}
            content={
                <div className={styles.paddingContent}>
                    <HeaderNComponent
                        primaryHeaderText='Discover our Love in Action Initiative'
                        SecondaryComponent={
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3125em' }}>
                                <P color={theme.colors.WHITE} text='Our focus is twofold: reaching out to those caught in the crossfire of the Israel-Hamas conflict and providing crucial support to the victims of the war in Ukraine.' />
                            </div>
                        }
                        secondaryAllign='left'
                        color={theme.colors.WHITE}
                    />
            
                    <iframe className={styles.youtube} src="https://www.youtube.com/embed/6u6W3YeFcIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    <HeaderNComponent
                        primaryHeaderText='Ukraine'
                        SecondaryComponent={
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3125em' }}>
                                <P color={theme.colors.WHITE} text="Since the invasion of Ukraine, the world has watched in distress as countless lives have been upended. In response, Love in Action has established a robust process to deliver food, funding, and essential supplies directly to those caught in the crossfire. Our efforts are focused on aiding refugees, who face the dire consequences of war, including a lack of food, shelter, and basic hygiene. Through the support of our church plants along the Belarus-Poland border, we've been able to offer a glimmer of hope, providing not just material aid but also spiritual solace to those in need." />
                            </div>
                        }
                        secondaryAllign='left'
                        color={theme.colors.WHITE}
                    />
                     <HeaderNComponent
                        primaryHeaderText='Israel'
                        SecondaryComponent={
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3125em' }}>
                                <P color={theme.colors.WHITE} text="Love in Action has been mobilizing resources to distribute 'Good and Evil' in both Hebrew and Arabic, aiming to reach the souls in Israel and Gaza. Thanks to the unwavering dedication of our partners on the ground, we're on the brink of importing 35,000 copies of this transformative literature, ready to touch the hearts of Jews and Arabs alike. This endeavor seeks not only to provide immediate relief but also to sow the seeds of eternal salvation through the power of the gospel." />
                            </div>
                        }
                        secondaryAllign='left'
                        color={theme.colors.WHITE}
                    />
                    <PercentBarNIcons
                        color1={"#EC9D26"}
                        color2={"#FFFFFF"}
                        passedImage1={"/img/donation/progressIcons/Love.jpg"}
                        passedImage2={"/img/donation/progressIcons/remainingMoneyIcon.jpg"}
                        amountRaised={stats[0].amountRaisedLOVE}
                        goal={stats[0].goalLOVE}
                    />
                    <DonationMasterForm
                        headerText={"Provide essential food and medicine."}
                        secondaryText={"Provide life altering support to those directly displaced from their homes due to the war."}
                        secondaryAllign='center'
                        color={theme.colors.WHITE}
                        buttonStyle={buttonStyles.dollarButton}
                        fund={"Love in Action"}
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