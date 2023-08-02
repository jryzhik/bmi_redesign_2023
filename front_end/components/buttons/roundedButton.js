import React from 'react'
import NT from '../fonts/NT';

export default function RoundedButton({ text, passedStyle, callBackFunction }) {
    return (
        <>
            {callBackFunction !== null ? (
                <div className={passedStyle} onClick={callBackFunction}>
                    <NT text={text} />
                </div>
            ) : (
                <div className={passedStyle}>
                    <NT text={text} />
                </div >
            )
            }
        </>
    )
}
