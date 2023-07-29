import React from 'react'
import styles from '../../styles/Donate/Donate.module.css';
import Image from 'next/image';
import PERCNUM from '../fonts/PERCNUM.js';
import theme from '../../styles/theme';
import H3NComponent from '../texts/h3NComponent';
import P from '../fonts/P';
export default function ProgressDonate({ imageUrl, outlineColor, percentFilled, primaryHeaderText, secondaryText }) {
    return (
        <>
            <div className={styles.vBox}>
                <PERCNUM
                    text={percentFilled + "%"}
                    color={outlineColor}
                />
                <div className={styles.circleContainer}>
                    <div className={styles.circleOuline} style={{
                        background: `conic-gradient(from 0deg, ${outlineColor} 0% ${percentFilled}%, transparent 0% 100%)`,
                    }} />
                    <div className={styles.whiteOverlay} >
                        <Image
                            src={imageUrl}
                            alt="Background"
                            width={280}
                            height={280}
                            quality={100}
                            style={{
                                borderRadius: "50%",
                                backgroundColor: "#F6F6F6",
                                position: "absolute",
                                borderStyle: "solid",
                                borderWidth: "14px",
                                borderColor: "#F6F6F6"
                            }}
                        />
                    </div>
                </div>
                <div style={{
                    paddingTop:"1em"
                }}>
                    <H3NComponent
                        primaryHeaderText={primaryHeaderText}
                        SecondaryComponent={
                            <P color={theme.colors.CHARCOAL} text={secondaryText} />
                        }
                        secondaryAllign='center'
                    />
                </div>
            </div>
        </>
    )
}
