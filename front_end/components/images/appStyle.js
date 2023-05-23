import React from 'react'
import ProfileNTexts from '../texts/profileNTexts';
import passedStyles from '../../styles/Texts/Profiles.module.css';


export default function AppStyle({passedImage, textName, textJobTitle}) {
    return (
        <ProfileNTexts  passedImage={passedImage} textName={textName} textJobTitle={textJobTitle} borderRadius={'4.375em'} passedStyle={passedStyles.profilePic}        />
    )
}
