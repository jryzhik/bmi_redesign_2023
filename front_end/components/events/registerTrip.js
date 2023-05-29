import React from 'react'
import styles from '../../styles/Events/Events.module.css';
import P from '../fonts/P';
import theme from '../../styles/theme';
import H1 from '../fonts/H1';
import DollarButton from '../buttons/roundedButton';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Link from 'next/link';
import passedStyle from '../../styles/Donate/ColorDonate.module.css';
import OutlineButton from '../inputs/outlineButton';
import OutlineTextArea from '../inputs/outlineTextArea';
import RoundedButton from '../buttons/roundedButton';
import DropDownThin from '../buttons/dropDownThin';

const tripDB = [
    {
        name: 'Belarus Construction', key: 'Belarus Construction'
    },
    {
        name: 'Pastors Conference Fall', key: 'Pastors Conference Fall'
    },
    {
        name: 'Summer VBS', key: 'Summer VBS'
    }
]


export default function RegisterTrip({ color, primaryText, secondaryText }) {
    return (
        <div className={styles.together}>
            <div className={styles.rectangleRounded}></div>
            <div style={{
                backgroundColor: color
            }} className={styles.containerRegisterForm}>
                <div className={styles.headerNdescription}>
                    <H1 text={primaryText} color={theme.colors.WHITE} />
                    <P color={theme.colors.WHITE} text={secondaryText} />
                </div>
                <div className={styles.boxConstraint}>
                    <Grid container gap={2}>
                        <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                            <OutlineButton
                                placeholder='Full Name'
                                borderColor={theme.colors.SNOW}
                                textColor={theme.colors.WHITE}
                                type='text'
                            />
                        </Grid>
                        <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                            <OutlineButton
                                placeholder='Email Address'
                                borderColor={theme.colors.SNOW}
                                textColor={theme.colors.WHITE}
                                type='email'
                            />
                        </Grid>
                        <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                            <DropDownThin
                                defaultKey={'BelarusConstruction'}
                                dropDownItemArray={tripDB}
                                titleFont='number'
                                placeholder='Select Mission Trip'
                                borderColor={theme.colors.SNOW}
                                textColor={theme.colors.WHITE}
                            />
                        </Grid>
                        <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                            <OutlineTextArea
                                placeholder='Email Address'
                                borderColor={theme.colors.SNOW}
                                textColor={theme.colors.WHITE}
                                type='email'
                            />
                        </Grid>
                        <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                            <RoundedButton text='register' passedStyle={passedStyle.dollarButton} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}