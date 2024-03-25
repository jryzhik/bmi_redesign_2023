import React, { useEffect } from 'react'
import { Dropdown } from "@nextui-org/react";
import theme from '../../styles/theme';
import FIELDTEXT from '../fonts/FIELDTEXT';
import LT from '../fonts/LT';
import styles from '../../styles/Texts/Texts.module.css';
import Image from 'next/image';
import FIELDTXTREG from '../fonts/FIELDTXTREG';

export default function DropDownThin({ dropDownItemArray, borderColor, textColor, callBack }) {
    const [selected, setSelected] = React.useState("Select Trip");

    useEffect(() => {
        const myArray = Array.from(selected);
        callBack(myArray[0]);
    }, [selected])
    const selectedValue = React.useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );
    function handleClick() {
        document.getElementById("buttondrop").click();
    }

    return (
        <div className={styles.thinBarContainer} style={{ borderColor: borderColor}}>
            <Dropdown>
                <Dropdown.Button id='buttondrop' style={{ '--nextui-colors-successLightActive': theme.colors.NAVY, zIndex: '0' }} light color="success">
                    <div className={styles.monthName}>
                        {selected == 'Select Trip' ? (
                            <FIELDTEXT color={textColor} text={selected} opacity={.5}/>

                        ) : (
                            <FIELDTXTREG color={textColor} text={selected} />
                        )}
                    </div>
                </Dropdown.Button>
                <div className={styles.zback}>
                    <Dropdown.Menu
                        aria-label="Static Actions"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selected}
                        onSelectionChange={setSelected}
                    >
                        {dropDownItemArray.map((item) =>
                            <Dropdown.Item key={item.title}> <FIELDTEXT color={theme.colors.CHARCOAL} text={item.title} /></Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </div>
            </Dropdown>
            <Image className={styles.deleteIcon} onClick={handleClick} src="/img/icons/arrow_drop_down.svg" alt="search" width={10} height={24} style={{ marginRight: '10px' }} />
        </div>
    )
}
