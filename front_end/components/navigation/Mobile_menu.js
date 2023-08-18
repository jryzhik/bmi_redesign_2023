import React, { useEffect, useState } from 'react'
import styles from '../../styles/Navigation/Nav.module.css';
import Image from 'next/image';
import exitIcon from '../../public/img/icons/exit.svg';
import H3 from '../fonts/H3';

export default function Mobile_menu({ menuExpanded, toggleMenu, menuArray }) {
    const [menuExpandedStyle, setmenuExpandedStyle] = useState(styles.mobile_menu_containerOFF)
    const [focusedIndex, setFocusedIndex] = useState()

    useEffect(() => {
        if (menuExpanded) {
            setmenuExpandedStyle(styles.mobile_menu_container)
        } else {
            setmenuExpandedStyle(styles.mobile_menu_containerOFF)
        }
        console.log("MENU STATE: ", menuExpanded, "Menu style: ", menuExpandedStyle)
    }, [menuExpanded])

    return (
        <div className={menuExpandedStyle}>
            <div className={styles.exitIconMobileWrapper} onClick={toggleMenu}>
                <div className={styles.exitIconMobile}>
                    <Image
                        src={exitIcon}
                        alt="Schmidt"
                        width={30}
                        height={30}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.menu_main_content}>
                {menuArray.map((item, index) => (
                    <div
                        className={index === focusedIndex ? styles.mobile_expandingContainerOpen: styles.mobile_expandingContainerClosed}
                        key={index}
                        onClick={() => setFocusedIndex(index)}
                    >
                        <H3
                            text={Array.isArray(item.primary) ? item.primary[0] : item.primary}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
