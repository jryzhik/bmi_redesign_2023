import React from 'react'
import ImageNtext from '../components/hero/imageNtext'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'

export default function Faith() {
    return (
        <>
            <ImageNtext
                color2="#14190C"
                color1="#14190C"
                imageUrl="/img/hero_images/belief.jpg"
                textParent='Who We Are'
                textChild='Faith Statement'
                headerText='Understanding our beliefs'
                subText='Know what we stand behind and represent.'
                imageFocus='50% -20%'
            />
            <div className='flexContainerTopItems'>
                <HeaderNComponent
                    primaryHeaderText='We'
                    SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Believe in God, revealed in three persons – God the Father, God the Son, and God the Holy Spirit.' />}
                    secondaryAllign='left'
                />
                 <HeaderNComponent
                    primaryHeaderText='We'
                    SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Believe that Jesus Christ, the only begotten Son of God, was born of a virgin, lived a sinless life, died on the cross to atone for our transgressions, and rose again on the third day. He ascended into Heaven with a promise to return some day.' />}
                    secondaryAllign='left'
                />
                 <HeaderNComponent
                    primaryHeaderText='We'
                    SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Believe that it is solely by the grace of God that man, as a condemned sinner, receives salvation through faith in Jesus Christ to forgive sin. Only then are we held blameless by the Father. Faith in Jesus Christ saves us from a literal hell, for a literal, eternal Heaven.' />}
                    secondaryAllign='left'
                />
                 <HeaderNComponent
                    primaryHeaderText='We'
                    SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Believe the Bible is the inspired, infallible Word of God, inerrant in its original manuscripts.' />}
                    secondaryAllign='left'
                />
                 <HeaderNComponent
                    primaryHeaderText='We'
                    SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Believe in God’s promise of eternal life for the saved and His warning of eternal damnation for the lost.' />}
                    secondaryAllign='left'
                />
                 <HeaderNComponent
                    primaryHeaderText='We'
                    SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Believe in Great Commission as described in Matthew 24:14, “And this gospel of the kingdom will be proclaimed throughout the whole world as a testimony to all nations, and then the end will come”.' />}
                    secondaryAllign='left'
                />
            </div>
        </>
    )
}
