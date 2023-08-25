import React from 'react'
import PortraitNPageParent from '../components/hero/portraitNPageParent'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import styles from '../styles/Missionaries/Missionaries.module.css';
import BarNText from '../components/texts/barNText'
import SlideGallery from '../components/images/slideGallery'
import ColorheroDonate from '../components/donations/colorheroDonate'

const prokopenkovGallery = [
  {
    imageUrl: '/img/gallery/prokopenkov/orphan.jpg'
  },
  {
    imageUrl: '/img/gallery/prokopenkov/holding.jpg'
  },
  {
    imageUrl: '/img/gallery/prokopenkov/draw.jpg'
  },
  {
    imageUrl: '/img/gallery/prokopenkov/gleb.jpg'
  },
  {
    imageUrl: '/img/gallery/prokopenkov/draw2.jpg'
  },
]

export default function Prokopenkov() {
  return (
    <>
      <PortraitNPageParent
        textParent='Missionary'
        textChild='Sergey & Olga Prokopenkov'
        imgUrl="/img/missionaries/prokopenkov.jpg"
      />
      <div className={styles.container}>
        <HeaderNComponent
          primaryHeaderText='Sergey & Olga Prokopenkov'
          SecondaryComponent={
            <div className={styles.bioText}>
              <P color={theme.colors.CHARCOAL} text='I born in 1966 in the city of Orsha, Belarus. Our mother raised three children alone in the family. I remember my father very little since he died when I was five years old.' />
              <P color={theme.colors.CHARCOAL} text='From 1984 to 1986 I served in the army. A year later, God sent my future wife Olga to meet me and after 12 months I proposed her. We raised three children - Alexander, Daniel, and Nikolai our adopted son (taken into our family in 2006 when he was 4 years old).' />
              <P color={theme.colors.CHARCOAL} text='In 1996, God gave Olga a meeting with a woman who attended the Baptist church in Orsha. This was the first meeting with Christians and since that day Olga began to attend the Orsha church.' />
              <P color={theme.colors.CHARCOAL} text="Four years later, God answered Olga's prayers and I finally came to the church for the first time for a wedding. I got saved and quickly joined the ministry of the church. In 1999 I was baptized, then entered the Minsk Theological Seminary for the Pastoral department studying at the seminary. Since 2000, I have served as a caretaker and youth leader until 2017." />
              <P color={theme.colors.BLACK} text="In 2018, I served in the Yakubov Church and was responsible for serving the foster families of Orsha and Orsha district." />
            </div>
          }
          secondaryAllign='left'
        />
        <SlideGallery galleryArray={prokopenkovGallery} />
        <ColorheroDonate
          color='#45426B'
          primaryText='Help make Christian homes replace orphanages'
          secondaryText='Fostering a Christian culture of family for vulnerable children.'
          fund={"missionary | Prokopenkov"}
        />
      </div>
    </>
  )
}
