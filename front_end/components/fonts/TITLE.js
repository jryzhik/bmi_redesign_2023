import React from 'react'
import {
    Raleway
} from '@next/font/google'

const Ral = Raleway(
    {
        subsets: ['latin'],
        weight: ['900'],
        style: ['normal']

    }
)

export default function TITLE(props) {
    return (
        <>
            <tit style={{ color: props.color }} className={Ral.className}>{props.text}</tit>
            <br></br>
        </>
    )
}
