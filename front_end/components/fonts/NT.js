import React from 'react'
import {
    Inter
} from "next/font/google"

const Int = Inter(
    {
        subsets: ['latin'],
        weight: ['900'],
        style: ['normal']

    }
)

export default function NT(props) {
    return (
    <>
        <div id='nt' style={{ color: props.color }} className={Int.className}>{props.text}</div>
    </>
    )
}
