import React, { useState, useEffect } from 'react';
import ImageNtext from '../components/hero/imageNtext'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import { Progress } from '@nextui-org/react';
import theme from '../styles/theme.js';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import styles from '../styles/Progress/Report.module.css';
import ImageNPercentage from '../components/texts/imageNPercentage';


export default function report() {
    const [value, setValue] = useState(0);
    const [current, setCurrent] = useState(null)
    function handleHover(index) {
        setCurrent(index)
    }
    function elementOpactity(index) {
        if (current == null) {
            return 1
        } else if (index != current) {
            return .5
        } else {
            return 1
        }
    }
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
        <div className='overflow_x'>
        <ImageNtext
                color1="#7FA1B8"
                color2="#B7C9D1"
                imageUrl="/img/hero_images/report.jpg"
                textParent='Who We Are'
                textChild='Annual Report'
                headerText='We are transparent with our spending and finances'
                subText='We are here to make a difference in the world. Not make a profit.'
            />
            <div className='flexContainerTopItems'>
                <HeaderNComponent
                    primaryHeaderText='Expense Summary'
                    SecondaryComponent={<P color={theme.colors.CHARCOAL} text='A breakdown of our annual report from January to December.' />}
                    secondaryAllign='center'
                />
            </div>
            <Grid container className={styles.grid} justify='center' alignItems='start' spacing={.7}>
                <Grid xs={6.1} md={8}>
                    <div className={styles.barNTextContainer}>
                        <Progress onMouseEnter={() => handleHover(0)} onMouseLeave={() => handleHover(null)} animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.ORANGE, borderRadius: 0 }} />
                        {current == 0 ? (
                            <P text='Ministry Projects' />
                        ) : (
                            <></>
                        )}
                    </div>
                </Grid>
                <Grid xs={2} md={1.82} >
                    <div className={styles.barNTextContainer}>
                        <Progress onMouseEnter={() => handleHover(1)} onMouseLeave={() => handleHover(null)} animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.DARK_BLUE, borderRadius: 0 }} />
                        {current == 1 ? (
                            <P text='Compensation to Officers' />
                        ) : (
                            <></>
                        )}
                    </div>

                </Grid>
                <Grid xs={.8} md={.7} >
                    <div className={styles.barNTextContainer}>
                        <Progress onMouseEnter={() => handleHover(2)} onMouseLeave={() => handleHover(null)} animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.MAROON, borderRadius: 0 }} />
                        {current == 2 ? (
                            <P text='Mission Group Trips' />
                        ) : (
                            <></>
                        )}
                    </div>

                </Grid>
                <Grid xs={.55} md={.35} >
                    <div className={styles.barNTextContainer}>
                        <Progress onMouseEnter={() => handleHover(3)} onMouseLeave={() => handleHover(null)} animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.MAGENTA, borderRadius: 0 }} />
                        {current == 3 ? (
                            <P text='Website & Technology' />
                        ) : (
                            <></>
                        )}
                    </div>

                </Grid>
                <Grid xs={.55} md={.29} >
                    <div className={styles.barNTextContainer}>
                        <Progress onMouseEnter={() => handleHover(4)} onMouseLeave={() => handleHover(null)} animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.BLUE, borderRadius: 0 }} />
                        {current == 4 ? (
                            <P text='Office Expenses' />
                        ) : (
                            <></>
                        )}
                    </div>

                </Grid>
                <Grid xs={.5} md={.25} >
                    <div className={styles.barNTextContainer}>
                        <Progress onMouseEnter={() => handleHover(5)} onMouseLeave={() => handleHover(null)} animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.SAND, borderRadius: 0 }} />
                        {current == 5 ? (
                            <P text='Automobile Expenses' />
                        ) : (
                            <></>
                        )}
                    </div>

                </Grid>
                <Grid xs={.45} md={.24} >
                    <div className={styles.barNTextContainer}>
                        <Progress onMouseEnter={() => handleHover(6)} onMouseLeave={() => handleHover(null)} animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.DARK_GREEN, borderRadius: 0 }} />
                        {current == 6 ? (
                            <P text='Fundraising Expenses' />
                        ) : (
                            <></>
                        )}
                    </div>

                </Grid>
                <Grid xs={.35} md={.20} >
                    <div className={styles.barNTextContainer}>
                        <Progress onMouseEnter={() => handleHover(7)} onMouseLeave={() => handleHover(null)} animated value={value} max={20} size="lg" style={{ '--nextui-colors-primary': theme.colors.DARK_GREY, borderRadius: 0 }} />
                        {current == 7 ? (
                            <P text='Accounting Fees' />
                        ) : (
                            <></>
                        )}
                    </div>

                </Grid>
            </Grid>
            <Grid container className={styles.gridIconText} justify='center' alignItems='start' spacing={5} >
                <Grid xs={12} sm={6} md={6} >
                    <div style={{ opacity: elementOpactity(0), transition: 'all .2s ease-out' }} >
                        <ImageNPercentage passedImage={'/img/report_categories/ministry_projects.jpg'} percentText={73.03} description={'Ministry Projects'} color={theme.colors.ORANGE} />
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={6}>
                    <div style={{ opacity: elementOpactity(1), transition: 'all .2s ease-out' }} >
                        <ImageNPercentage passedImage={'/img/report_categories/compensation.jpg'} percentText={15.20} description={'Compensation to Officers'} color={theme.colors.DARK_BLUE} />
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={6}>
                    <div style={{ opacity: elementOpactity(2), transition: 'all .2s ease-out' }} >
                        <ImageNPercentage passedImage={'/img/report_categories/mission_groups.jpg'} percentText={4.51} description={'Mission Group Trips'} color={theme.colors.MAROON} />
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={6}>
                    <div style={{ opacity: elementOpactity(3), transition: 'all .2s ease-out' }} >
                        <ImageNPercentage passedImage={'/img/report_categories/maintainance.jpg'} percentText={1.84} description={'Website Maintenance'} color={theme.colors.MAGENTA} />
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={6}>
                    <div style={{ opacity: elementOpactity(4), transition: 'all .2s ease-out' }} >
                        <ImageNPercentage passedImage={'/img/report_categories/office.jpg'} percentText={1.72} description={'Office Expenses'} color={theme.colors.BLUE} />
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={6}>
                    <div style={{ opacity: elementOpactity(5), transition: 'all .2s ease-out' }} >
                        <ImageNPercentage passedImage={'/img/report_categories/automobile.jpg'} percentText={1.53} description={'Automobile Expenses'} color={theme.colors.SAND} />
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={6}>
                    <div style={{ opacity: elementOpactity(6), transition: 'all .2s ease-out' }} >
                        <ImageNPercentage passedImage={'/img/report_categories/fundraising.jpg'} percentText={'1.40'} description={'Fundraising Expenses'} color={theme.colors.DARK_GREEN} />
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={6}>
                    <div style={{ opacity: elementOpactity(7), transition: 'all .2s ease-out' }} >
                        <ImageNPercentage passedImage={'/img/report_categories/accounting.jpg'} percentText={0.77} description={'Accounting Fees'} color={theme.colors.DARK_GREY} />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
