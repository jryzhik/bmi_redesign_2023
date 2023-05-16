import React from 'react'
import Image from 'next/image'
import H1 from '../components/fonts/H1'
import H2 from '../components/fonts/H2';
import H3 from '../components/fonts/H3';
import H4 from '../components/fonts/H4';
import H5 from '../components/fonts/H5';
import P from '../components/fonts/P';
import LT from '../components/fonts/LT';
import TITLE from '../components/fonts/TITLE';
import theme from '../styles/theme.js';
import NT from '../components/fonts/NT';
import ST from '../components/fonts/ST';
import NH from '../components/fonts/NH';
import NAVTEXT from '../components/fonts/NAVTEXT';
import FIELDTEXT from '../components/fonts/FIELDTEXT';
import FIELDTXTREG from '../components/fonts/FIELDTXTREG';

export default function letter() {
    return (
        <>
            <Image src="img/logos/text_and_letter.svg" alt='BMI' width={227} height={24} />
            <H1 text='Heading 1 - IBM Plex Sans SemiBold 70/70 -2.0px' color={theme.colors.ORANGE}></H1>
            <H2 text='Heading 2 - IBM Plex Sans Bold 50/50 -0.4px' color={theme.colors.RED}></H2>
            <H3 text='Heading 3 - IBM Plex Sans SemiBold 30/37 -0.4px' color={theme.colors.DARK_BLUE}></H3>
            <H4 text='Heading 4 - IBM Plex Sans SemiBold 24/26 -0.4px' color={theme.colors.CHARCOAL}></H4>
            <H5 text='Heading 5 - IBM Plex Sans SemiBold 21/22 -0.3px' color={theme.colors.MAROON}></H5>
            <P text='Paragraph - Roboto Slab Light 21/28 0px' color={theme.colors.BLACK}></P>
            <LT text='Large title - Raleway Black 16/20 1px' color={theme.colors.BLACK}></LT>
            <NT text='Number Title - Inter Black 16/20 0.3px' color={theme.colors.BLACK}></NT>
            <TITLE text='Title - Raleway Black 12/14 1px' color={theme.colors.BLACK}></TITLE>
            <ST text='SubTitle - Roboto Slab Light 12/12 0px' color={theme.colors.BLACK}></ST>
            <NH text='Nav Heading - Roboto Slab Semibold 14/18 0px' color={theme.colors.BLACK}></NH>
            <NAVTEXT text='Nav Text - Roboto Slab Light 14/18 0px' color={theme.colors.BLACK}></NAVTEXT>
            <FIELDTEXT text='Field Text - Roboto Slab Light 16/22 0px' color={theme.colors.BLACK}></FIELDTEXT>
            <FIELDTXTREG text='Field Text - Roboto Slab Regular 16/22 0px' color={theme.colors.BLACK}></FIELDTXTREG>
            
        </>
    )
}
