import React from 'react'
import ImageNtext from '../components/hero/imageNtext'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import styles from '../styles/Images/Images.module.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import H4NComponent from '../components/texts/h4NComponent'


export default function Videos() {
  return (
    <>
      <ImageNtext
        color1="#8D896E"
        color2="#8D896E"
        imageUrl="/../public/img/hero_images/videos.jpg"
        textParent='Resources'
        textChild='Videos'
        headerText='See awesome things in the works'
        subText='See the impact your donations have made through powerful video testimonies.'
        imageFocus={'center 40%'}
      />
      <div className='flexContainerTopItems'>
        <HeaderNComponent
          primaryHeaderText='Mission Video Gallery'
          SecondaryComponent={<P color={theme.colors.CHARCOAL} text='View the impactful transformation the Spirit of the Lord is doing in Belarus through our ministry.' />}
          secondaryAllign='center'
        />
        <div className={styles.containerWidth}>
          <Grid container spacing={8} >
            <Grid xs={12} sm={6} md={4} display="flex" justifyContent="center" alignItems="center">
              <div className={styles.vBoxGallery}>
                <iframe className={styles.youtube} src="https://www.youtube.com/embed/ZQ7XUR7tT9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <H4NComponent
                  primaryHeaderText='Republic of Georgia'
                  SecondaryComponent={
                    <P color={theme.colors.CHARCOAL} text='April 2023' />
                  }
                  secondaryAllign='center'
                />
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={4} display="flex" justifyContent="center" alignItems="center">
              <div className={styles.vBoxGallery}>
                <iframe className={styles.youtube} src="https://www.youtube.com/embed/dckLZMHIxMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <H4NComponent
                  primaryHeaderText='Republic of Georgia'
                  SecondaryComponent={
                    <P color={theme.colors.CHARCOAL} text='April 2023' />
                  }
                  secondaryAllign='center'
                />
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={4} display="flex" justifyContent="center" alignItems="center">
              <div className={styles.vBoxGallery}>
                <iframe className={styles.youtube} src="https://www.youtube.com/embed/2cYJ20K8om0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <H4NComponent
                  primaryHeaderText='Republic of Georgia'
                  SecondaryComponent={
                    <P color={theme.colors.CHARCOAL} text='April 2023' />
                  }
                  secondaryAllign='center'
                />
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={4} display="flex" justifyContent="center" alignItems="center">
              <div className={styles.vBoxGallery}>
                <iframe className={styles.youtube} src="https://www.youtube.com/embed/gr16pxv8aB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <H4NComponent
                  primaryHeaderText='Republic of Georgia'
                  SecondaryComponent={
                    <P color={theme.colors.CHARCOAL} text='April 2023' />
                  }
                  secondaryAllign='center'
                />
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={4} display="flex" justifyContent="center" alignItems="center">
              <div className={styles.vBoxGallery}>
                <iframe className={styles.youtube} src="https://www.youtube.com/embed/d6liJS2UYV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <H4NComponent
                  primaryHeaderText='Republic of Georgia'
                  SecondaryComponent={
                    <P color={theme.colors.CHARCOAL} text='April 2023' />
                  }
                  secondaryAllign='center'
                />
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={4} display="flex" justifyContent="center" alignItems="center">
              <div className={styles.vBoxGallery}>
                <iframe className={styles.youtube} src="https://www.youtube.com/embed/Jsj1ayNSnqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <H4NComponent
                  primaryHeaderText='Republic of Georgia'
                  SecondaryComponent={
                    <P color={theme.colors.CHARCOAL} text='April 2023' />
                  }
                  secondaryAllign='center'
                />
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={4} display="flex" justifyContent="center" alignItems="center">
              <div className={styles.vBoxGallery}>
                <iframe className={styles.youtube} src="https://www.youtube.com/embed/X7D7vvZ1x6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <H4NComponent
                  primaryHeaderText='Republic of Georgia'
                  SecondaryComponent={
                    <P color={theme.colors.CHARCOAL} text='April 2023' />
                  }
                  secondaryAllign='center'
                />
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={4} display="flex" justifyContent="center" alignItems="center">
              <div className={styles.vBoxGallery}>
                <iframe className={styles.youtube} src="https://www.youtube.com/embed/OGp1NY33rTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <H4NComponent
                  primaryHeaderText='Republic of Georgia'
                  SecondaryComponent={
                    <P color={theme.colors.CHARCOAL} text='April 2023' />
                  }
                  secondaryAllign='center'
                />
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={4} display="flex" justifyContent="center" alignItems="center">
              <div className={styles.vBoxGallery}>
                <iframe className={styles.youtube} src="https://www.youtube.com/embed/RGA7PD_1_8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <H4NComponent
                  primaryHeaderText='Republic of Georgia'
                  SecondaryComponent={
                    <P color={theme.colors.CHARCOAL} text='April 2023' />
                  }
                  secondaryAllign='center'
                />
              </div>
            </Grid>
          </Grid>
        </div>

      </div>
    </>
  )
}
