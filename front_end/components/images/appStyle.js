import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Images/Images.module.css';
import H4 from '../fonts/H4';
import ProfileNTexts from '../texts/profileNTexts';

export default function AppStyle({passedImage, textName, textJobTitle}) {
    return (
        <ProfileNTexts  passedImage={passedImage} textName={textName} textJobTitle={textJobTitle} borderRadius={'4.375em'}/>
    )
}
