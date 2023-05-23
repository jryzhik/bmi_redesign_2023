import React from 'react'
import Image from 'next/image'
import H4 from '../fonts/H4';
import P from '../fonts/P';

export default function ProfileNTexts({passedImage, textName, textJobTitle, borderRadius, passedStyle}) {
    return (
        <>
            <div className={passedStyle}>
                <Image
                    src={passedImage}
                    width={240}
                    height={240}
                    quality={100}
                    style={{
                        objectFit: 'cover',
                        // Adjust the position to focus on the desired part of the image
                        borderRadius: borderRadius,
                        marginBottom: '1.5em',
                    }}
                />
                 {textName === undefined ? (
                    <></>
                ) : (
                    <H4 text={textName}/>
                )}
                {textJobTitle === undefined ? (
                    <></>
                ) : (
                    <P text={textJobTitle}/>
                )}
            </div>
        </>
    )
}
