import React from 'react'
import TITLE from '../fonts/TITLE'
import Image from 'next/image'
import styles from '../../styles/Hero/Hero.module.css';
import ST from '../fonts/ST';


export default function PageParentText(props) {
    return (
        <>
            <div className={styles.hBox}>
                <TITLE text={props.textParent} color={props.color} />
                <Image src="img/icons/LeftArrow.svg" alt='arrow' width={0} height={0} style={{ width: '10%', height: 'auto' }} />
                <ST text={props.textChild} color={props.color}/>
            </div>
        </>

    )
}
