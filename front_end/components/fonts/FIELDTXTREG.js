import React from 'react'
import {
    Roboto_Slab
} from '@next/font/google'

const Roboto = Roboto_Slab(
    {
        subsets: ['latin'],
        weight: ['400'],
        style: ['normal']

    }
)

export default function FIELDTXTREG(props) {
    return (
        <>
            <div id='fieldtxtred' style={{ color: props.color }} className={Roboto.className}>{props.text}</div>
            <br></br>
        </>
    )
}
