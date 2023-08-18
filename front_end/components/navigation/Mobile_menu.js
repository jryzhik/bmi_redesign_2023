import React, { useEffect, useState } from 'react'
import styles from '../../styles/Navigation/Nav.module.css';
import Image from 'next/image';
import exitIcon from '../../public/img/icons/exit.svg';


export default function Mobile_menu({ menuExpanded, toggleMenu}) {
    const [menuExpandedStyle, setmenuExpandedStyle] = useState(styles.mobile_menu_containerOFF)
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
        </div>
    )
}
