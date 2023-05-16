import React from 'react'
import styles from '../../styles/Navigation/Nav.module.css';
import Image from 'next/image';
import NAVTEXT from '../fonts/NAVTEXT';
import NH from '../fonts/NH';

import { useState } from 'react';

import theme from '../../styles/theme.js';

const menu = [
    {
        primary: 'Who We Are',
        secondary: [['Our Vision', 'vision'],['Faith Statement', 'faith'],['Annual Report', 'report']]
    },
    {
        primary: 'Missionaries',
        secondary: [['Vladimir & Polina', 'gruzd'], ['Vadim & Natasha', 'konovalchuk'], ['Cassandra Lynn Grist', 'grist'], ['Dmitry & Natalia', 'alekseev']]
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
        secondary: [['Gallery', 'gallery'], ['Videos', 'video'], ['News', 'news'], ['Things to Know', 'brief'], ['Fundraising Letter', 'letter']]
    },
    {
        primary: 'Store',
        secondary: [['Books', 'books'], ['Apparel', 'apparel']]
    },
    {
        primary: 'Donate',
        secondary: [['Matching Fund', 'matching'], ['Love in Action', 'ukraine'], ['Good & Evil Bible', 'literature'], ['Legacy Giving', 'legacy'], ['Trip Donation', 'pay']]
    },
    {
        primary: 'Contact',
        secondary: null
    }

]

export default function Default_nav_bar() {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const [hoveredItemSubMenu, sethoveredItemSubMenu] = useState(null);

    const handleMouseEnterSub = (subIndex) => {
        sethoveredItemSubMenu(subIndex);
    };

    const handleMouseLeaveSub = () => {
        sethoveredItemSubMenu(null);
    };

    return (
        <div className={styles.container}>
            <Image src="img/logos/text_and_letter.svg" alt='BMI' width={227} height={24} />
            <div className={styles.menu}>
                {menu.map((menu_item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {hoveredItem === index ? (
                            <React.Fragment>
                                <NH text={menu_item.primary} color={theme.colors.BLACK} />
                                {menu_item.secondary === null ? (
                                    console.log("null element menu")
                                ) : (
                                    <div className={styles.sub_menu}>
                                        {menu_item.secondary.map((sub_item, subIndex) => (
                                            <div
                                                key={subIndex}
                                                onMouseEnter={() => handleMouseEnterSub(subIndex)}
                                                onMouseLeave={handleMouseLeaveSub}
                                            >
                                                {hoveredItemSubMenu === subIndex ? (
                                                    <React.Fragment>
                                                        {console.log("subIndex", subIndex)}
                                                        <NH key={subIndex} text={sub_item[0]} color={theme.colors.BLACK} />
                                                    </React.Fragment>
                                                ) : (
                                                    <NAVTEXT key={subIndex} text={sub_item[0]} color={theme.colors.BLACK} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </React.Fragment>


                        ) : (
                            <NAVTEXT text={menu_item.primary} color={theme.colors.BLACK} />
                        )}
                    </div>

                ))}
                <Image src="img/icons/search_icon.svg" alt='search' width={16} height={16} />
            </div>
        </div >
    );
}
