import React, { useState } from 'react'
import theme from '../../styles/theme.js';
import Link from 'next/link';
import styles from '../../styles/Navigation/Nav.module.css';
import Image from 'next/image';
import Mobile_menu from './Mobile_menu.js';

const menu = [
    {
        primary: 'Who We Are',
        secondary: [['Our Vision', 'vision'], ['Faith Statement', 'faith'], ['Annual Report', 'report']]
    },
    {
        primary: 'Team',
        secondary: [['Advisory Board', 'advisory'], ['Board Members', 'board'], ['Our Partners', 'partners'], ['The Founders', 'founders']]
    },
    {
        primary: 'Missionaries',
        secondary: [['Vladimir & Polina', 'gruzd'], ['Vadim & Natasha', 'konovalchuk'], ['Cassandra Lynn Grist', 'grist'], ['Dmitry & Natalia', 'alekseev'], ['Vladimir & Lyudmila', 'simonovich'], ['Sergey & Olga', 'prokopenkov']]
    },
    {
        primary: 'Events',
        secondary: [['Calendar', 'calendar'], ['Trip Registration', 'trip']]
    },
    {
        primary: 'Ministries',
        secondary: [['Brest Bible Church', 'brest'], ['Day Care Centers', 'care'], ['Church Planting', 'plant'], ['Evangelism', 'gospel'], ['Orphan Adoption', 'orphans'], ['Youth Outreach', 'youth']]
    },
    {
        primary: 'Resources',
        secondary: [['Gallery', 'gallery'], ['Videos', 'videos'], ['News', 'news'], ['Things to Know', 'brief'], ['Fundraising Letter', 'letter']]
    },
    {
        primary: ['Store', 'store'],
        secondary: [['Books', 'books'], ['Apparel', 'apparel']]
    },
    {
        primary: ['Donate', 'donate'],
        secondary: [['Matching Fund', 'matching'], ['Love in Action', 'ukraine'], ['Good & Evil Bible', 'literature'], ['Legacy Giving', 'legacy'], ['Trip Donation', 'pay']]
    },
    {
        primary: ['Contact', 'contact'],
        secondary: null
    }

]
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
            />
            <div className={styles.container}>
                <Link href="/">
                    <Image src="img/logos/text_and_letter.svg" alt='BMI' width={227} height={24} />
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
