import React from 'react'
import PortraitNPageParent from '../components/hero/portraitNPageParent'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import styles from '../styles/Missionaries/Missionaries.module.css';
import BarNText from '../components/texts/barNText'
import SlideGallery from '../components/images/slideGallery'
import ColorheroDonate from '../components/donations/colorheroDonate'

const konovalchukGallery = [
  {
    imageUrl: '/img/gallery/konovalchuk/chance.jpg'
  },
  {
    imageUrl: '/img/gallery/konovalchuk/youthoutside.jpg'
  },
  {
    imageUrl: '/img/gallery/konovalchuk/child_camp.jpg'
  },
  {
    imageUrl: '/img/gallery/konovalchuk/lena.jpg'
  },
  {
    imageUrl: '/img/gallery/konovalchuk/play.jpg'
  },
]

export default function Konovalchuk() {
  return (
    <>
      <PortraitNPageParent
        textParent='Missionary'
        textChild='Vadim & Natasha Konavalchuk'
        imgUrl="/img/missionaries/konovalchuk.jpg"
      />
      <div className={styles.container}>
        <HeaderNComponent
          primaryHeaderText='Vadim & Natasha Konavalchuk'
          SecondaryComponent={
            <div className={styles.bioText}>
              <P color={theme.colors.CHARCOAL} text='Konovalchik Vadim was born on August 30, 1973. in Brest Belarus in a Christian family. After graduating from high school in 1990, he repented and was baptized. Shortly after his conversion he became very active in reaching the youth for Christ.' />
              <P color={theme.colors.CHARCOAL} text='From 1993 to 1997 he had studied at the Bible Institute and after the graduation, God called him to serve in Grodno church as a ordained deacon.' />
              <P color={theme.colors.CHARCOAL} text='Since 2010, Vadim have been participating in various charity projects for mobilizing churches for social service.' />
              <P color={theme.colors.CHARCOAL} text='Since 2018 he is the representative of the Byelorussian Mission Inc. in Belarus in distributing the Bibles and discipleship materials published by the mission among different countries of former Soviet block. Also he supervises foster families that raise orphans.' />
            </div>
          }
          secondaryAllign='left'
        />
        <SlideGallery galleryArray={konovalchukGallery} />
        <ColorheroDonate
          color='#6B5942'
          primaryText='Your gift provides Bibles for new believers'
          secondaryText='Our goal is to provide each new believer and family with a Bible so they can continue on their journey with Christ.'
        />
      </div>
    </>
  )
}
