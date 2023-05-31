import React from 'react'
import ImageNtext from '../components/hero/imageNtext'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import styles from '../styles/Events/Events.module.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Link from 'next/link';
import RoundedButton from '../components/buttons/roundedButton'
import passedStyle from '../styles/Donate/ColorDonate.module.css';
import RegisterTrip from '../components/events/registerTrip'


export default function Trip() {
  return (
    <>
      <ImageNtext
        color1="#688193"
        color2="#688293"
        imageUrl="/../public/img/hero_images/trip_registration.jpg"
        textParent='Events'
        textChild='Trip Registration'
        headerText='Register here to go on a mission trip'
        subText='Join us on a Mission Trip to Belarus and Israel! Find your place in a music, construction, summer camp, or evangelization team.'
      />
      <HeaderNComponent
        primaryHeaderText='Mission Trips'
        SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Please join us on a Mission Trip to Belarus and Israel! Find your place in a music, construction, summer camp, or evangelization team.' />}
        secondaryAllign='center'
      />
      <div className={styles.viewCalendar}>
        <div className={styles.boxConstraint}>
          <Link href='/calendar'>
            <Grid container spacing={1.5} minHeight={160}>
              <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                <RoundedButton text='view calendar' passedStyle={passedStyle.dollarButtonMaroon} />
              </Grid>
            </Grid>
          </Link>
        </div>
      </div>
      <RegisterTrip
        color={theme.colors.NAVY}
        primaryText='Register'
        secondaryText='Registration is open for this trip.'
      />
    </>
  )
}
