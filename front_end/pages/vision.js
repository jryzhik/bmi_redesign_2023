import React from 'react'
import ImageNtext from '../components/hero/imageNtext'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'

export default function Vision() {
    return (
        <>
            <ImageNtext
                color1="#96928E"
                color2="#9F9391"
                imageUrl="/img/hero_images/vision.jpg"
                textParent='Who We Are'
                textChild='Our Vision'
                headerText='A future that Jesus spoke about'
                subText=''
                imageFocus={'center top'}
            />
            <div className='flexContainerTopItems'>
                <HeaderNComponent
                    primaryHeaderText='Sharing the Word of God'
                    SecondaryComponent={<P color={theme.colors.CHARCOAL} text='BYELORUSSIAN MISSION, INC. — is a non-profit corporation organized exclusively for charitable, religious, and educational purposes as specified in Section 501 (c) (3) of the Internal Revenue Code. The purpose of the corporation is to provide support services for orphan children and help construct church buildings in the countries of Eastern Europe, "Stan", and Israel.' />}
                    secondaryAllign='left'
                />
                <HeaderNComponent
                    primaryHeaderText='The principle purpose of Byelorussian Mission:'
                    SecondaryComponent={
                        <>
                            <P color={theme.colors.CHARCOAL} text='• To plant new churches in cities in Eastern Europe and Ukraine where no evangelical church presently exists.' />
                            <P color={theme.colors.CHARCOAL} text='• To work with orphanages to head off a looming sociological disaster when an entire generation of young adults, who have known nothing but an institutional social background, will be unleashed on the Eastern Europe/Ukraine society.' />
                            <P color={theme.colors.CHARCOAL} text='• To reach young adults at the University and High School level and bring them the Gospel message of Jesus’ saving grace.' />
                        </>
                    }
                    secondaryAllign='left'
                />
            </div>
        </>
    )
}
