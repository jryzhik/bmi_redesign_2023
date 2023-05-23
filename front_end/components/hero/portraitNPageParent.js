import React from 'react'
import styles from '../../styles/Hero/Hero.module.css';
import PageParentText from './pageParentText';
import theme from '../../styles/theme';
import ProfileNTexts from '../texts/profileNTexts';
import passedStyles from '../../styles/Texts/Profiles.module.css';

export default function PortraitNPageParent({ textParent, textChild, imgUrl}) {
    return (
        <div className={styles.portraitNPageParent}>
            <ProfileNTexts
                passedImage={imgUrl}
                borderRadius='50%'
                passedStyle={passedStyles.profilePic}
            />
            <PageParentText textParent={textParent} textChild={textChild} color={theme.colors.BLACK} />
        </div>
    )
}
