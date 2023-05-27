import React from 'react'
import { Dropdown } from "@nextui-org/react";
import theme from '../../styles/theme';
import FIELDTEXT from '../fonts/FIELDTEXT';
import LT from '../fonts/LT';
import styles from '../../styles/Texts/Texts.module.css';
import Image from 'next/image';
import NT from '../fonts/NT';

const monthsDropDown = [
    {
        name: 'January', key: 'jan'
    },
    {
        name: 'February', key: 'feb'
    },
    {
        name: 'March', key: 'mar'
    },
    {
        name: 'April', key: 'apr'
    },
    {
        name: 'May', key: 'may'
    },
    {
        name: 'June', key: 'jun'
    },
    {
        name: 'July', key: 'jul'
    },
    {
        name: 'August', key: 'aug'
    },
    {
        name: 'September', key: 'jan'
    },
    {
        name: 'October', key: 'oct'
    },
    {
        name: 'November', key: 'nov'
    },
    {
        name: 'December', key: 'dec'
    },
    {
        name: 'All', key: 'all'
    }
]
export default function DropdownDate({ title, defaultKey, dropDownItemArray, titleFont }) {
    const [selected, setSelected] = React.useState(new Set([defaultKey]));
    const selectedValue = React.useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );

    return (
        <>
            <Dropdown>
                <Dropdown.Button style={{ '--nextui-colors-successLightActive': theme.colors.MAROON }} light color="success">
                    <FIELDTEXT color={theme.colors.CHARCOAL} text={title} />
                    <div className={styles.monthName}>
                        {titleFont == 'number' ? (
                            <NT color={theme.colors.BLACK} text={selected} />

                        ) : (
                            <LT color={theme.colors.BLACK} text={selected} />
                        )}
                    </div>
                    <Image src="/img/icons/DownArrow.svg" alt="search" width={22} height={22} style={{ marginLeft: '6px' }} />
                </Dropdown.Button>
                <Dropdown.Menu
                    aria-label="Static Actions"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    onSelectionChange={setSelected}
                >
                    {dropDownItemArray.map((item) =>
                        <Dropdown.Item key={item.key}> <FIELDTEXT color={theme.colors.CHARCOAL} text={item.name} /></Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
