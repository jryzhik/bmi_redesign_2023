import React from 'react'
import Image from 'next/image'
import H1 from '../components/fonts/H1'
import theme from '../styles/theme.js';

export default function letter() {
    return (
        <>
            <Image src="img/logos/text_and_letter.svg" alt='BMI' width={227} height={24} />
            <H1 text='Heading 1 - IBM Plex Sans SemiBold 70/70 -2.0px' color={theme.colors.WHITE}></H1>
        </>
    )
}
