import React from 'react'
import TITLE from '../fonts/TITLE'
import Image from 'next/image'
import styles from '../../styles/Hero/Hero.module.css';
import ST from '../fonts/ST';
import theme from '../../styles/theme';


export default function PageParentText(props) {
    return (
        <>
            <div className={styles.hBox}>
                <TITLE text={props.textParent} color={props.color} />
                {props.color === theme.colors.WHITE ? (
                    <Image src="img/icons/rightArrow_white.svg" alt='arrow' width={0} height={0} style={{ width: '10%', height: 'auto' }} />
                    ) : (
                    <Image src="img/icons/rightArrow_black.svg" alt='arrow' width={0} height={0} style={{ width: '10%', height: 'auto' }} />
                )}
                <ST text={props.textChild} color={props.color} />
            </div>
        </>

    )
}
