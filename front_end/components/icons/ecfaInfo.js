import React from 'react'
import Image from 'next/image';
import ecfaIcon from '../../public/img/icons/ecfa_logo.svg'
import infoIcon from '../../public/img/icons/info.svg'

import ST from '../fonts/ST';
import theme from '../../styles/theme';

export default function EcfaInfo() {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: ".375em" }}>
            <Image
                src={ecfaIcon}
                alt="ecfa"
                width={20}
                height={20}
                quality={100}
            />
            <ST color={theme.colors.CHARCOAL} text="ECFA Accredited" />
            <a href="https://www.ecfa.org/MemberProfile.aspx?ID=48735">
                <Image
                    src={infoIcon}
                    alt="info"
                    width={12}
                    height={12}
                    quality={100}
                />
            </a>
        </div>

    )
}
