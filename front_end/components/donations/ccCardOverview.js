import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FIELDTEXT from '../fonts/FIELDTEXT';
import theme from '../../styles/theme';

export default function CcCardOverview({ ccNumber }) {
    const [ccName, setccName] = useState(null);
    const [ccEnglishFullName, setCcEnglishFullName] = useState(null)

    useEffect(() => {
        if (ccNumber.charAt(0) === '3') {
            setccName('american_express');
            setCcEnglishFullName("American Express")
        } else if (ccNumber.charAt(0) === '4') {
            setccName('visa');
            setCcEnglishFullName("Visa")
        } else if (ccNumber.charAt(0) === '5') {
            setccName('mastercard');
            setCcEnglishFullName("Mastercard")
        } else if (ccNumber.charAt(0) === '6') {
            setccName('discover');
            setCcEnglishFullName("Discover")
        } else {
            setccName(null);
            setCcEnglishFullName(null)

        }
    }, [ccNumber]);

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
            {ccName && (
                <Image
                    src={`/img/icons/${ccName}.svg`}
                    alt={ccName}
                    width={40}
                    height={20}
                    quality={100}
                />
            )}
            <FIELDTEXT color={theme.colors.BLACK} text={`${ccEnglishFullName} ending in ${ccNumber.substring(12,16)}`} />
        </div>
    );
}
