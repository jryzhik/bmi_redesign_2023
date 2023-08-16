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

const alekseevGallery = [
  {
    imageUrl: '/img/gallery/alekseev/boy.jpg'
  },
  {
    imageUrl: '/img/gallery/alekseev/teaching.jpg'
  },
  {
    imageUrl: '/img/gallery/alekseev/camp.jpg'
  },
  {
    imageUrl: '/img/gallery/alekseev/camp2.jpg'
  },
  {
    imageUrl: '/img/gallery/alekseev/kids.jpg'
  },
]

export default function Alekseev() {
  return (
    <>
      <PortraitNPageParent
        textParent='Missionary'
        textChild='Dmitriy Alekseev'
        imgUrl="/img/missionaries/alekseev.jpg"
      />
      <div className={styles.container}>
        <HeaderNComponent
          primaryHeaderText='Dmitriy Alekseev'
          SecondaryComponent={
            <div className={styles.bioText}>
              <P color={theme.colors.CHARCOAL} text='I was born as the fifth child in a village in 1959. My mom died when I was seven, and by God’s grace my godly father was raising me. My older brothers and sister also influenced me to choose the right way in life. My aunt was able to give me a mother’s tender care.' />
              <P color={theme.colors.CHARCOAL} text='Childhood and youth went by fast while working and studying hard in college and farming.' />
              <P color={theme.colors.CHARCOAL} text='After the army, I got a job in juvenile prison. I was astonished by the fact that most of the teenagers lacked one or two parents. At the same time God sent true Christians my way and their spirit and character were very attractive to my soul, leading me to Christ.' />
              <P color={theme.colors.CHARCOAL} text='I am convinced, that only God Himself has kept me safe for He loves all children, but takes a special care for orphans. When we were offered the orphan ministry, my wife Nataly and I gladly accepted it for God’s glory.' />
              <P color={theme.colors.CHARCOAL} text='The ministry blesses us with spiritual strength. God’s great love through the heart of a Christian is able to wrap an orphan’s heart with warmth and love. Every child who is raised with love in a Christian family, gets to know the Lord Jesus Christ, who shed His blood for our sins.' />
            </div>
          }
          secondaryAllign='left'
        />
        <SlideGallery galleryArray={alekseevGallery} />
        <ColorheroDonate
          color='#3E462E'
          primaryText='Help us show the Father’s love towards orphans'
          secondaryText='We seek to embrace orphaned children with the warm love of the Father and to help guide them on the right path.'
        />
      </div>
    </>
  )
}
