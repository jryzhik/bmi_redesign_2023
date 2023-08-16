import React from 'react'
import ImageNtext from '../components/hero/imageNtext'
import theme from '../styles/theme'
import ImageNDonate from '../components/hero/imageNDonate'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import RoundedButton from '../components/buttons/roundedButton';
import passedStyle from '../styles/Donate/ColorDonate.module.css';

export default function pay() {
    return (
        <>
            <ImageNDonate
                color1="#D0D5DF"
                color2="#D7DBE4"
                imageUrl="/img/hero_images/trip_donation.jpg"
                textParent='Donate'
                headerText='Making Trip Donations'
                subText='Make your trip donation here, with convenient online platforms.'
                imageFocus={'50% 50%'}
                textChild='Trip Donation'
                textColor={theme.colors.BLACK}
            />
        </>
    )
}
