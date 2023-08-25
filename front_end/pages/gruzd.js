import React from 'react'
import PortraitNPageParent from '../components/hero/portraitNPageParent'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import PMED from '../components/fonts/PMED'
import theme from '../styles/theme'
import styles from '../styles/Missionaries/Missionaries.module.css';
import BarNText from '../components/texts/barNText'
import SlideGallery from '../components/images/slideGallery'
import ColorheroDonate from '../components/donations/colorheroDonate'

const gruzGallery = [
    {
        imageUrl: '/img/gallery/gruzd/sitting_fire.jpg'
    },
    {
        imageUrl: '/img/gallery/gruzd/bike.jpg'
    },
    {
        imageUrl: '/img/gallery/gruzd/phone.jpg'
    },
    {
        imageUrl: '/img/gallery/gruzd/blow.jpg'
    },
    {
        imageUrl: '/img/gallery/gruzd/teach.jpg'
    },
]

export default function Gruzd() {
    return (
        <>
            <PortraitNPageParent
                textParent='Missionary'
                textChild='Vladimir & Polina Gruzd'
                imgUrl="/img/missionaries/gruzd.jpg"
            />
            <div className={styles.container}>
                <HeaderNComponent
                    primaryHeaderText='Vladimir & Polina Gruzd'
                    SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Since 2011 we are engaged in children and youth ministry in the local church. In the autumn of 2017, we graduated from the Children’s Ministry Institute of the mission of the Child Evangelism Fellowship (CEF). Now we are carrying out a ministry of evangelization for children and training of children’s ministers in Belarus.' />}
                    secondaryAllign='left'
                />
                <iframe className={styles.youtube} src="https://www.youtube.com/embed/ZBL5AqXoqiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <HeaderNComponent
                    primaryHeaderText='Purpose of the ministry'
                    SecondaryComponent={
                        <div className={styles.vBox}>
                            <div className={styles.mediumNThinSection}>
                                <PMED color={theme.colors.CHARCOAL} text='&nbsp; • &nbsp;Carry the gospel message' />
                                <P color={theme.colors.CHARCOAL} text='The Lord Jesus Christ commanded us to “Go into all the world and preach the gospel to every creature.”' />
                            </div>
                            <div className={styles.mediumNThinSection}>
                                <PMED color={theme.colors.CHARCOAL} text='&nbsp; •  &nbsp; Teach the Word of God' />
                                <P color={theme.colors.CHARCOAL} text='Born-again children need good Theological teaching so that they can grow spiritually' />
                            </div>
                            <div className={styles.mediumNThinSection}>
                                <PMED color={theme.colors.CHARCOAL} text='&nbsp; •  &nbsp; Help children become the Church' />
                                <P color={theme.colors.CHARCOAL} text='Help children become the Church' />
                            </div>

                        </div>
                    }
                    secondaryAllign='left'
                />
                <div className={styles.statContainer}>
                    <BarNText percentText={'150'} description={'Teachers trained'} color={theme.colors.DARK_BLUE} />
                    <BarNText percentText={'500'} description={'Children hear the gospel'} color={theme.colors.DARK_BLUE} />
                    <BarNText percentText={'25'} description={'Cities reached'} color={theme.colors.DARK_BLUE} />
                </div>
                <SlideGallery galleryArray={gruzGallery}/>
                <ColorheroDonate 
                    color='#BC592D'
                    primaryText='Your gift impacts a child directly'
                    secondaryText='Providing direct support into building the next generation in Belarus based on the principles of Jesus Christ.'
                    fund={"missionary | Gruzd"}
                />
            </div>
        </>
    )
}
