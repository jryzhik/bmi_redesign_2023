import React from 'react'
import ImageNGradient from '../components/hero/imageNGradient'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import styles from '../styles/Hero/Hero.module.css';
import textStyles from '../styles/Texts/Texts.module.css';
import DonationMasterForm from '../components/donations/donationMasterForm'
import buttonStyles from '../styles/Donate/ColorDonate.module.css';
import SlideGallery from '../components/images/slideGallery';
import H2 from '../components/fonts/H2';



const style_containerTop = styles.imageContainerGradientYouth;
const style_imgTop = styles.mainImageYouth;
const style_containerBottom = styles.wrapperBottomContainerYouth;
const style_imgBottom = styles.bottomImgContainerYouth;



const plantingGallery = [
    {
        imageUrl: '/img/ministries/youthOutreach/pit_stop.jpg'
    },
    {
        imageUrl: '/img/ministries/youthOutreach/pit_stop.jpg'
    },
    {
        imageUrl: '/img/ministries/planting/baptisms.jpg'
    },
    {
        imageUrl: '/img/ministries/youthOutreach/pit_stop2.jpg'
    },
    {
        imageUrl: '/img/gallery/gruzd/teach.jpg'
    },
]

export default function orphans() {

    return (
        <ImageNGradient
            color1="#ECE4E8"
            color2="#EAEBEF"
            imageUrlTop="/img/hero_images/youth_main.jpg"
            imageUrlBottom="/img/hero_images/youth_secondary.jpg"
            style_containerTop={style_containerTop}
            style_imgTop={style_imgTop}
            style_imgBottom={style_imgBottom}
            style_containerBottom={style_containerBottom}
            content={
                <div className={styles.paddingContent}>
                    <HeaderNComponent
                        primaryHeaderText='Reaching the future generation'
                        SecondaryComponent={
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3125em' }}>
                                <P color={theme.colors.BLACK} text='Because of contacts that this organization has within the university system of Belarus, we are able to have open access to the campuses across the country.' />
                                <P color={theme.colors.BLACK} text='This, in some ways, is the most important part of the work being done because this is from where the pastors and leaders of the churches being founded will come.' />
                                <P color={theme.colors.BLACK} text='This is where the everyday administration of the various programs will be recruited and trained. These are also the young people who have been told by every authority figure in their life that Scientific Rationalism is the new savior and that they should turn their backs on primitive superstitions such as Christianity. These are also the most idealistic and energetic of the society, who, if effectively reached, can do things we have not even dreamed of doing.' />
                            </div>
                        }
                        secondaryAllign='left'
                        color={theme.colors.BLACK}
                    />
                    <SlideGallery galleryArray={plantingGallery} />
                    <DonationMasterForm
                        headerText={"Help us reach every student"}
                        secondaryText={"We aim to provide freedom to the youth and young adults of Belarus through the powerful Word of Jesus Christ."}
                        secondaryAllign='center'
                        color={theme.colors.BLACK}
                        buttonStyle={buttonStyles.dollarButtonBlack}
                        fund={"Youth Outreach"}
                    />
                </div>
            }
        />
    )
}
