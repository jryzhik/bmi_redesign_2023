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

export default function PERCNUM(props) {
    return (
        <div id='percnum' style={{ color: props.color }} className={Int.className}>{props.text}</div>
    )
}
