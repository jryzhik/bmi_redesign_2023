import React, { useState, useEffect } from 'react';
import ImageNtext from '../components/hero/imageNtext'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import { Progress } from '@nextui-org/react';
import theme from '../styles/theme.js';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import styles from '../styles/Progress/Report.module.css';


export default function report() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const delay = 1400; // Delay in milliseconds before starting the timer
        const interval = 15; // Interval in milliseconds between value updates
        let timer;

        const startTimer = () => {
            timer = setInterval(() => {
                setValue((prevValue) => {
                    const newValue = prevValue + 1;
                    return newValue <= 20 ? newValue : prevValue;
                });
            }, interval);
        };

        const delayTimer = setTimeout(startTimer, delay);

        return () => {
            clearTimeout(delayTimer); // Clean up the delay timer if the component unmounts before it expires
            clearInterval(timer); // Clean up the value update timer when the component unmounts
        };
    }, []);


    return (
        <>
            <ImageNtext
                color1="#7FA1B8"
                color2="#B7C9D1"
                imageUrl="/../public/img/hero_images/report.jpg"
                textParent='Who We Are'
                textChild='Annual Report'
                headerText='We are transparent with our spending and finances'
                subText='We are here to make a difference in the world. Not make a profit.'
            />
            <div className='flexContainerTopItems'>
                <HeaderNComponent
                    primaryHeaderText='Expense Summary'
                    SecondaryComponent={<P text='A breakdown of our annual report from January to December.' />}
                    secondaryAllign='center'
                />
            </div>
            <Grid container className={styles.grid} justify='center' alignItems='start' spacing={.7}>
                <Grid xs={6.1} md={8} >
                    <Progress animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.ORANGE, borderRadius: 0 }} />
                </Grid>
                <Grid xs={2} md={1.82} >
                    <Progress animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.DARK_BLUE, borderRadius: 0 }} />
                </Grid>
                <Grid xs={.8} md={.7} >
                    <Progress animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.MAROON, borderRadius: 0 }} />
                </Grid>
                <Grid xs={.55} md={.35} >
                    <Progress animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.MAGENTA, borderRadius: 0 }} />
                </Grid>
                <Grid xs={.55} md={.29} >
                    <Progress animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.BLUE, borderRadius: 0 }} />
                </Grid>
                <Grid xs={.5} md={.25} >
                    <Progress animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.SAND, borderRadius: 0 }} />
                </Grid>
                <Grid xs={.45} md={.24} >
                    <Progress animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.DARK_GREEN, borderRadius: 0 }} />
                </Grid>
                <Grid xs={.35} md={.20} >
                    <Progress animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.DARK_GREY, borderRadius: 0 }} />
                </Grid>
            </Grid>

        </>
    )
}
