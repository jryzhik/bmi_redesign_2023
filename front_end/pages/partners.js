import React from 'react'
import ImageNtext from '../components/hero/imageNtext'
import AppStyle from '../components/images/appStyle'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import styles from '../styles/Texts/Profiles.module.css';


const partners = [
  { name: 'Chance Youth', imgSource: '/img/partners/chance.jpg' },
  { name: 'Waypoint Baptist Church', imgSource: '/img/partners/waypoint.jpg' },
  { name: 'Big Canoe Chapel', imgSource: '/img/partners/bigCanoue.jpg' },
  { name: 'Walker Baptist Church', imgSource: '/img/partners/walker.jpg' },
  { name: 'Graves Overhead Doors', imgSource: '/img/partners/doors.jpg' },
  { name: 'Graves Fireplaces', imgSource: '/img/partners/fireplaces.jpg' },
  { name: 'First Baptist Church of Woodstock', imgSource: '/img/partners/woodstock.jpg' },
  { name: 'Haggai International', imgSource: '/img/partners/haggai.jpg' },
  { name: 'Jefferson Baptist', imgSource: '/img/partners/jefferson.jpg' },
  { name: 'Louisiana Baptists Convention', imgSource: '/img/partners/lbc.jpg' },
  { name: 'Mount Bethel', imgSource: '/img/partners/mount.jpg' },
  { name: 'First Baptist Atlanta', imgSource: '/img/partners/fba.jpg' },
  { name: 'East Leesville', imgSource: '/img/partners/leesville.jpg' },
  { name: 'Community Foundation of Ozark', imgSource: '/img/partners/ozark.jpg' },
  { name: 'Harvest Christian Fellowship', imgSource: '/img/partners/harvest.jpg' },
  { name: 'Georgia Baptist Health Care', imgSource: '/img/partners/health.jpg' },
  


]
export default function Partners() {
  return (
    <>
      <ImageNtext
        color1="#58782A"
        color2="#364F13"
        imageUrl="/img/hero_images/partners_hero.jpg"
        textParent='Who We Are'
        textChild='Our Partners'
        headerText='Organizations that have teamed up with us'
        subText='Join the many businesses and churches that support our mission in Belarus and Ukraine.'
        imageFocus={'center 20%'}
      />
      <Grid container spacing={-10} justifyContent="center" >
        {partners.map((member) => (
          <Grid className={styles.verticalSpacing} xs={12} sm={6} md={3} display="flex" justifyContent="center" alignItems="center" >
            <AppStyle
              textName={member.name}
              textJobTitle={member.jobTitle}
              passedImage={member.imgSource}
            />
          </Grid>
        ))}
      </Grid>
    </>

  )
}
