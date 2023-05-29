import React from 'react'
import { useRouter } from 'next/router';
import PortraitNPageParent from '../components/hero/portraitNPageParent'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import styles from '../styles/Events/Events.module.css';
import CalendarIcon from '../components/events/calendarIcon';
import H2 from '../components/fonts/H2';
import RegisterButtonHero from '../components/events/registerButtonHero';

export default function Event() {
    const router = useRouter();
    const { title, imgSource, description, additionalDescription, start, end, key } = router.query;
    const startDate = start ? JSON.parse(decodeURIComponent(start)) : null;
    const endDate = end ? JSON.parse(decodeURIComponent(end)) : null;

    return (
        <>
            <PortraitNPageParent
                textParent='Events'
                textChild={title}
                imgUrl={imgSource}
            />
            <div className={styles.containerEvents}>
                <HeaderNComponent
                    primaryHeaderText={title}
                    SecondaryComponent={
                        <div className={styles.bioText}>
                            <P color={theme.colors.CHARCOAL} text={description} />
                            <P color={theme.colors.CHARCOAL} text={additionalDescription} />
                        </div>
                    }
                    secondaryAllign='left'
                />
                <div className={styles.markCalendar}>
                    <P text='Mark you calendar:' />
                    <div className={styles.startNEndBox}>
                        {startDate == null ? (
                            <></>
                        ) : (
                            <CalendarIcon month={startDate.month} day={startDate.day} year={startDate.year} />
                        )}
                        {endDate == null ? (
                            <></>
                        ) : (
                            <>
                                <H2 text='to' />
                                <CalendarIcon month={endDate.month} day={endDate.day} year={endDate.year} />
                            </>
                        )}
                    </div>
                </div>
                <RegisterButtonHero
                    color={theme.colors.NAVY}
                    primaryText='Register'
                    secondaryText='Registration is open for this trip.'
                />
            </div>
            
        </>
    )
}
