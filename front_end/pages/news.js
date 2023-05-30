import React from 'react'
import ImageNtext from '../components/hero/imageNtext'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import SlideNewsGallery from '../components/images/slideNewsGallery'
import styles from '../styles/Images/Images.module.css';


const news = [
    {
        imageUrl: '/img/gallery/gruzd/sitting_fire.jpg',
        title: 'July 2023',
        description: 'Reuniting for the 4th of July to strengthen our team internally.'
    },
    {
        imageUrl: '/img/gallery/gruzd/bike.jpg',
        title: 'August 2023',
        description: 'of July to strengthen our team internally.'
    },
    {
        imageUrl: '/img/gallery/gruzd/phone.jpg',
        title: 'September 2023',
        description: 'aakrsfanf testin ght ess asrjasr'
    },
    {
        imageUrl: '/img/gallery/gruzd/blow.jpg',
        title: 'October 2023',
        description: 'Row row row your boat'
    },
    {
        imageUrl: '/img/gallery/gruzd/teach.jpg',
        title: 'December 2023',
        description: 'Teaching is inportnat in 21 centrure'
    },
]
export default function News() {
    return (<>
        <ImageNtext
            color1="#1C2530"
            color2="#202832"
            imageUrl="/../public/img/hero_images/news.jpg"
            textParent='Resources'
            textChild='News'
            headerText='Stay updated with all we’re doing'
            subText='Our monthly newsletter provides a quick recap of all the great things God is doing through Byelorussian Ministry to impact the next generation.'
            imageFocus={'center 45%'}
        />
        <div className={styles.containerNewsGallery}>
            <HeaderNComponent
                primaryHeaderText='Read our newsletter'
                SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Explore all the latest and greatest stories from our team serving internationally and locally.' />}
                secondaryAllign='center'
            />
            <SlideNewsGallery newsArray={news} />

        </div>
    </>
    )
}
