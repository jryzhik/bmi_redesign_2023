import React from 'react'
import ImageNtext from '../components/hero/imageNtext'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import styles from '../styles/Images/Images.module.css';
import RoundedPhoto from '../components/images/roundedPhoto'
import H4NComponent from '../components/texts/h4NComponent'

const galleryArray = [
  {
    title:'Pastors Conference', description: 'Kobryn', imageUrl:'/img/gallery/general/pastor_conference.jpg'
  },
  {
    title:'Summer Camp', description: 'Berezino', imageUrl:'/img/gallery/general/summer_camp_berezino.jpg'
  },
  {
    title:'Youth Baptized', description: 'Brest', imageUrl:'/img/gallery/general/brest-baptism.jpg'
  },
  {
    title:'Equipping with Literature', description: 'Imenin', imageUrl:'/img/gallery/general/book_distribution_youth.jpg'
  },
  {
    title:'Foundation of camp', description: 'Mozyr', imageUrl:'/img/gallery/general/construction_camp_mozyr.jpg'
  },
  {
    title:'Camp Building Progress', description: 'Bobruisk', imageUrl:'/img/gallery/general/construction_camp_bobruisk.jpg'
  },
]

export default function Gallery() {
  return (
    <>
      <ImageNtext
        color1="#B4C5CD"
        color2="#B4C5CD"
        imageUrl="/img/hero_images/gallery.jpg"
        textParent='Resources'
        textChild='Gallery'
        headerText='View our contributions in digital format'
        subText='Explore our work on the ground in Belarus, Ukraine, Israel and the States'
        imageFocus={'center 40%'}
      />
      <div className='flexContainerTopItems'>
        <HeaderNComponent
          primaryHeaderText='Mission Photo Gallery'
          SecondaryComponent={<P color={theme.colors.CHARCOAL} text='View what our team has been up to and the lives our ministry has directly impacted.' />}
          secondaryAllign='center'
        />
        <div className={styles.containerWidth}>
          <Grid container spacing={8} >
            {galleryArray.map((photo) => 
              <Grid xs={12} sm={6} md={4} display="flex" justifyContent="center" alignItems="center">
              <div className={styles.vBoxGallery}>
                <RoundedPhoto
                  imageUrl={photo.imageUrl}
                  passedStyles={styles.roundedRectSmall}
                />
                <H4NComponent
                  primaryHeaderText={photo.title}
                  SecondaryComponent={
                    <P color={theme.colors.CHARCOAL} text={photo.description} />
                  }
                  secondaryAllign='center'
                />
              </div>
            </Grid>
            )}
          </Grid>
        </div>
      </div>
    </>
  )
}
