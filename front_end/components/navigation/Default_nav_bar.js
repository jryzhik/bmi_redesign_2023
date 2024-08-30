import React, {useState} from "react";
import styles from "../../styles/Navigation/Nav.module.css";
import Image from "next/image";
import NAVTEXT from "../fonts/NAVTEXT";
import NH from "../fonts/NH";
import Link from "next/link";

import theme from "../../styles/theme.js";

export default function Default_nav_bar({ menu }) {
  const [hoveredItem, setHoveredItem] = useState(null);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    const handleMouseEnter = (index) => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
        setHoveredItem(index);
    };

  const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
          setHoveredItem(null);
      }, 1500);

      setHoverTimeout(timeout);
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
      <Link href="/">
        <Image
          src="img/logos/text_and_letter.svg"
          alt="BMI"
          width={227}
          height={24}
        />
      </Link>
      <div className={styles.menu}>
        {menu.map((menu_item, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredItem === index ? (
              <React.Fragment>
                <div className={styles.hoverME}>
                  {Array.isArray(menu_item.primary) ? (
                    <>
                      <Link href={"/" + menu_item.primary[1]}>
                        <NH
                          text={menu_item.primary[0]}
                          color={theme.colors.BLACK}
                        />
                      </Link>
                    </>
                  ) : (
                    <>
                      <NH text={menu_item.primary} color={theme.colors.BLACK} />
                    </>
                  )}
                </div>

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
                            <Link href={"/" + sub_item[1]}>
                              <NH
                                key={subIndex}
                                text={sub_item[0]}
                                color={theme.colors.BLACK}
                              />
                            </Link>
                          </React.Fragment>
                        ) : (
                          <Link href={"/" + sub_item[1]}>
                            <NAVTEXT
                              key={subIndex}
                              text={sub_item[0]}
                              color={theme.colors.BLACK}
                            />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ) : (
              <>
                {Array.isArray(menu_item.primary) ? (
                  <NAVTEXT
                    text={menu_item.primary[0]}
                    color={theme.colors.BLACK}
                  />
                ) : (
                  <NAVTEXT
                    text={menu_item.primary}
                    color={theme.colors.BLACK}
                  />
                )}
              </>
            )}
          </div>
        ))}
        <Link href="/search">
          <Image
            src="/img/icons/search_icon.svg"
            alt="search"
            width={16}
            height={16}
          />
        </Link>
      </div>
    </div>
  );
}
