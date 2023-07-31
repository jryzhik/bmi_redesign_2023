import React from 'react'
import NT from '../fonts/NT';
import Link from 'next/link';

export default function RoundedButton({ text, passedStyle }) {
    return (
        <div className={passedStyle}>
            <NT text={text} />
        </div>
    )
}
