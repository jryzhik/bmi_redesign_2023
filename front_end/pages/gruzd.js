import React from 'react'
import PortraitNPageParent from '../components/hero/portraitNPageParent'
import HeaderNComponent from '../components/texts/HeaderNComponent'
import P from '../components/fonts/P'
import theme from '../styles/theme'
import styles from '../styles/Missionaries/Missionaries.module.css';


export default function Gruzd() {
    return (
        <>
            <PortraitNPageParent
                textParent='Missionary'
                textChild='Vladimir & Polina Gruzd'
                imgUrl="/../public/img/missionaries/gruzd.jpg"
            />
            <div className={styles.container}>
                <HeaderNComponent
                    primaryHeaderText='Vladimir & Polina Gruzd'
                    SecondaryComponent={<P color={theme.colors.CHARCOAL} text='Since 2011 we are engaged in children and youth ministry in the local church. In the autumn of 2017, we graduated from the Children’s Ministry Institute of the mission of the Child Evangelism Fellowship (CEF). Now we are carrying out a ministry of evangelization for children and training of children’s ministers in Belarus.' />}
                    secondaryAllign='left'
                />
                <iframe className={styles.youtube} borderRadius='7px' src="https://www.youtube.com/embed/ZBL5AqXoqiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
            </div>
        </>
    )
}
