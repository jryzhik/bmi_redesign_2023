
import React from 'react'
import ImageNtext from '../components/hero/imageNtext'
import ProfileNTexts from '../components/texts/profileNTexts'
import styles from '../styles/Texts/Profiles.module.css';
import passedStyles from '../styles/Texts/Profiles.module.css';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const team = [
  { name: 'Michael Goldstone', jobTitle: 'Regency Lighting', imgSource: '/../public/img/team/mike.jpg' },
  { name: 'Micah Linder', jobTitle: 'Video Director', imgSource: '/../public/img/team/micah.jpg' },
  { name: 'Wesley Cantrell', jobTitle: 'Former CEO Lanier Corporation', imgSource: '/../public/img/team/wes.jpg' },
  { name: 'Phil Bettis', jobTitle: 'Law Group, LLC', imgSource: '/../public/img/team/phil.jpg' },
  { name: 'Ray & Brenda Beddingfield', jobTitle: 'Law Group, LLC', imgSource: '/../public/img/team/phil.jpg' },

]
export default function Advisory() {
  return (
    <>

      <ImageNtext
        color2="#AFA596"
        color1="#7B746B"
        imageUrl="/../public/img/hero_images/advisory.jpg"
        textParent='Who We Are'
        textChild='Advisory Board'
        headerText='Leading the charge with a strong team'
        subText='We make an effort to be responsible with the goals we set in place and the finances donated to us.'
        imageFocus='50% 23%'

      />
      <Grid container spacing={-10} justifyContent='center' >
        {team.map((member) => (
          <Grid className={styles.verticalSpacing} xs={12} sm={6} md={3} display="flex" justifyContent="center" alignItems="center" >
            <ProfileNTexts
              textName={member.name}
              textJobTitle={member.jobTitle}
              passedImage={member.imgSource}
              borderRadius='50%'
              passedStyle={passedStyles.profilePic}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
