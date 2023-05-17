import React from 'react'
import {
    Roboto_Slab
} from '@next/font/google'

const Roboto = Roboto_Slab(
    {
        subsets: ['latin'],
        weight: ['300'],
        style: ['normal']

    }
)

export default function ST(props) {
    return (
        <>
            <div id='st' style={{ color: props.color }} className={Roboto.className}>{props.text}</div>
            <br></br>
        </>
    )
}
