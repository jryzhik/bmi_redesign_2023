import React from 'react'
import NT from '../fonts/NT';

export default function RoundedButtonMoney({ text, passedStyle, callBackFunction, amount }) {
    function handleClick() {
        callBackFunction(amount)
    }
    return (
        <div className={passedStyle} onClick={handleClick}>
            <NT text={text} />
        </div>
    )
}
