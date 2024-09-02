import React, {useEffect, useState} from 'react'
import styles from '../../styles/Navigation/Nav.module.css';
import Image from 'next/image';
import exitIcon from '../../public/img/icons/exit.svg';
import H3 from '../fonts/H3';
import P from '../fonts/P';
import Link from 'next/link';
import {useRouter} from "next/router";

const isLinkActive = (link, menu) => {
    if (menu) return menu.some(([text, url]) => url === link.replace("/", ""))
};

export default function Mobile_menu({ menuExpanded, toggleMenu, menuArray }) {
    const [menuExpandedStyle, setmenuExpandedStyle] = useState(styles.mobile_menu_containerOFF)
    const [focusedIndex, setFocusedIndex] = useState()
    const router = useRouter();

    useEffect(() => {
        if (menuExpanded) {
            setmenuExpandedStyle(styles.mobile_menu_container)
        } else {
            setmenuExpandedStyle(styles.mobile_menu_containerOFF)

        }
        console.log("MENU STATE: ", menuExpanded, "Menu style: ")
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
                        className={index === focusedIndex ? styles.mobile_expandingContainerOpen : styles.mobile_expandingContainerClosed}
                        key={index}
                        onClick={() => setFocusedIndex(index)}
                    >
                        {item.primary.length === 2 ? (
                            item.secondary == null ? (
                                <Link href={'/' + item.primary[1]}>
                                    <div onClick={toggleMenu}>
                                        <H3 text={item.primary[0]}
                                            textDecoration={item.primary[1] === router.pathname.replace("/", "") ? "underline" : "none"}/>
                                    </div>
                                </Link>
                            )
                                : (
                                    <H3 text={item.primary[0]}
                                        textDecoration={isLinkActive(router.pathname, item.secondary) ? "underline" : "none"}/>
                                )
                        ) : (
                            <H3 text={item.primary}
                                textDecoration={isLinkActive(router.pathname, item.secondary) ? "underline" : "none"}/>
                        )}
                        <div
                            className={index === focusedIndex || isLinkActive(router.pathname, item.secondary) ? styles.page_container_linksACTIVE : styles.page_container_linksOFF}
                            style={{display: "flex", flexDirection: "column", gap: ".1em", paddingLeft: "1em"}}>
                            {item.secondary !== null ? (
                                item.secondary.map((subpage) => (
                                    <Link href={'/' + subpage[1]}>
                                        <div onClick={toggleMenu} style={{ paddingTop: ".15em", paddingBottom: ".15em" }}>
                                            {
                                                subpage[1] === router.pathname.replace("/", "") ?
                                                    (
                                                        <P text={subpage[0]} textDecoration={"underline"}/>
                                                    ) : (
                                                        <P text={subpage[0]}/>
                                                    )
                                            }
                                        </div>
                                    </Link>
                                ))
                            ) : (<></>)}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
