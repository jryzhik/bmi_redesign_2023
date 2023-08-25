import React, { useState } from 'react'
import theme from '../../styles/theme.js';
import Link from 'next/link';
import styles from '../../styles/Navigation/Nav.module.css';
import Image from 'next/image';
import Mobile_menu from './Mobile_menu.js';

export default function Mobile_nav_bar({ menu }) {
    const [menuExpanded, setmenuExpanded] = useState(false)

    function toggleMenu() {
        setmenuExpanded(!menuExpanded)
    }
    return (
        <>
            <Mobile_menu
                menuExpanded={menuExpanded}
                toggleMenu={toggleMenu}
                menuArray={menu}
            />
            <div className={styles.container}>
                <Link href="/">
                    <div className='logo'>
                        <Image src="img/logos/text_and_letter.svg" alt='BMI' width={227} height={24} />
                    </div>
                </Link>
                <div className={styles.menu}>
                    <Link href="/search">
                        <Image src="/img/icons/search_icon.svg" alt="search" width={16} height={16} />
                    </Link>
                    <div onClick={toggleMenu}>
                        <Image src="/img/icons/menu_lines.svg" alt="menu" width={16} height={16} />
                    </div>
                </div>
            </div >
        </>
    )
}
