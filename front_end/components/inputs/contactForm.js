import React, { useState } from 'react'
import styles from '../../styles/Events/Events.module.css';
import P from '../fonts/P';
import theme from '../../styles/theme';
import H1 from '../fonts/H1';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import passedStyle from '../../styles/Donate/ColorDonate.module.css';
import OutlineButton from './outlineButton';
import OutlineTextArea from './outlineTextArea';
import RoundedButton from '../buttons/roundedButton';




export default function ContactForm({ color, primaryText, secondaryText }) {
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    return (
        <div className={styles.boxConstraint}>
            <form>
                <Grid container gap={2}>
                    <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                        <OutlineButton
                            placeholder='Full Name'
                            borderColor={theme.colors.CHARCOAL}
                            textColor={theme.colors.BLACK}
                            type='text'
                        />
                    </Grid>
                    <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                        <OutlineButton
                            placeholder='Email Address'
                            borderColor={theme.colors.CHARCOAL}
                            textColor={theme.colors.BLACK}
                            type='email'
                        />
                    </Grid>
                    <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                        <OutlineTextArea
                            placeholder=''
                            borderColor={theme.colors.CHARCOAL}
                            textColor={theme.colors.BLACK}
                            type='text'
                        />
                    </Grid>
                    <Grid xs={12} md={12} display="flex" justifyContent="center" alignItems="center">
                        <RoundedButton text='send' passedStyle={passedStyle.dollarButtonBlack} />
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}