import React from 'react'
import PortraitNPageParent from '../components/hero/portraitNPageParent'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import styles from '../styles/Missionaries/Missionaries.module.css';
import BarNText from '../components/texts/barNText'
import SlideGallery from '../components/images/slideGallery'
import ColorheroDonate from '../components/donations/colorheroDonate'

const simonovichGallery = [
  {
    imageUrl: '/img/gallery/simonovich/portrait1.jpg'
  },
  {
    imageUrl: '/img/gallery/simonovich/eat.jpg'
  },
  {
    imageUrl: '/img/gallery/simonovich/leader.jpg'
  },
  {
    imageUrl: '/img/gallery/simonovich/portrait2.jpg'
  },
  {
    imageUrl: '/img/gallery/simonovich/boy.jpg'
  },
]

export default function Simonovich() {
  return (
    <>
      <PortraitNPageParent
        textParent='Missionary'
        textChild='Vladimir & Lyudmila Simonovich.'
        imgUrl="/img/missionaries/simonovich.jpg"
      />
      <div className={styles.container}>
        <HeaderNComponent
          primaryHeaderText='Vladimir & Lyudmila Simonovich.'
          SecondaryComponent={
            <div className={styles.bioText}>
              <P color={theme.colors.CHARCOAL} text='I was born on May 1, 1974 in a military family in the small Belarusian town of Pruzhany. My father was a communist, so God was never mentioned in the house.' />
              <P color={theme.colors.CHARCOAL} text='Since my father served in the army, I had to move a lot from horizon to horizon. Cities and countries were changing.' />
              <P color={theme.colors.CHARCOAL} text='The first prayer to Jesus Christ took place in 1991 in Grodno. The search for God continued. God saw my desire to find Him and it happened in 1998 in Brest in the church on Fortechnaya.' />
              <P color={theme.colors.CHARCOAL} text="I made a covenant with the Lord and have been serving Him ever since. Since 2001, I have been teaching the Gospel to children in Sunday school. The Lord gave his wife Lyudmila and three children. " />
              <P color={theme.colors.BLACK} text="In 2012, we adopted our youngest son. This was the beginning of the service for orphans. Currently, we continue this service and work with such children and families who accept children." />
            </div>
          }
          secondaryAllign='left'
        />
        <SlideGallery galleryArray={simonovichGallery} />
        <ColorheroDonate
          color='#42656B'
          primaryText='Help Orphaned Children Find a Home '
          secondaryText='Join the Movement to End the Orphan Crisis and Provide Loving Homes for Every Child'
          fund={"Simonovich Missionary Fund"}
        />
      </div>
    </>
  )
}
