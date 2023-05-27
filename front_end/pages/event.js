import React from 'react'
import { useRouter } from 'next/router';
import PortraitNPageParent from '../components/hero/portraitNPageParent'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import styles from '../styles/Missionaries/Missionaries.module.css';

export default function Event() {
    const router = useRouter();
    const { title, imgSource, description, additionalDescription, start, key } = router.query;
    return (
        <>
            <PortraitNPageParent
                textParent='Events'
                textChild={title}
                imgUrl={imgSource}
            />
            <div className={styles.container}>
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

            </div>
        </>
    )
}
