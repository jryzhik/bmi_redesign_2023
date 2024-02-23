import React, { useEffect, useState } from 'react'
import ImageNGradient from '../components/hero/imageNGradient'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import styles from '../styles/Hero/Hero.module.css';



export default function care() {
   
    return (
            <ImageNGradient
                color1="#312822"
                color2="#63351A"
                imageUrlTop="/img/hero_images/brest_bible_church.jpg"
                imageUrlBottom="/img/hero_images/brest_bible_church_bottom.jpg"
                textParent='Donate'
                textChild='BBC'
                headerText='Brest Bible Church building fund donations'
                subText='Brest Bible Church is developing into a christian stronghold that will change the lives of thousands of young people.'
                imageFocus={'0 -200px'}
                // imageFocus={100 + 'px ' + 200 + 'px'}
                scale1={1}
                scale2={1}
                content={
                    <div className={styles.paddingContent}>
                        <HeaderNComponent
                            primaryHeaderText='Integrity'
                            SecondaryComponent={
                                <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.WHITE} />
                            }
                            secondaryAllign='center'
                            color={theme.colors.WHITE}
                        />
                        <HeaderNComponent
                            primaryHeaderText='Integrity'
                            SecondaryComponent={
                                <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                            }
                            secondaryAllign='center'
                        />
                        <HeaderNComponent
                            primaryHeaderText='Integrity'
                            SecondaryComponent={
                                <>
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                </>
                            }
                            secondaryAllign='center'
                        />
                        <HeaderNComponent
                            primaryHeaderText='Integrity'
                            SecondaryComponent={
                                <>
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                </>
                            }
                            secondaryAllign='center'
                        />
                        <HeaderNComponent
                            primaryHeaderText='Integrity'
                            SecondaryComponent={
                                <>
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                </>
                            }
                            secondaryAllign='center'
                        />
                        <HeaderNComponent
                            primaryHeaderText='Integrity'
                            SecondaryComponent={
                                <>
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                    <P text='Our goal is to serve with integrity being a responsible Shepard over the finances entrusted to us.' color={theme.colors.BLACK} />
                                </>
                            }
                            secondaryAllign='center'
                        />
                    </div>
                }
            />
    )
}
